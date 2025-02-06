import { EventDispatcher, LoadingManager, type Object3D, REVISION, Texture, TextureLoader, WebGLRenderer } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { Deferred, assertIsDefined } from "x";

const LOG_PREFIX = "[AssetLoader]";

export type ResourceItem = {
	name: string;
	path: string;
};

export class AssetLoader extends EventDispatcher {
	#manager: LoadingManager;
	#resources: ResourceItem[] = [];
	#deferredLoaded = new Deferred<void>();

	public models: Record<string, Object3D> = {};
	public textures: Record<string, Texture> = {};

	constructor() {
		super();

		const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

		this.#manager = new LoadingManager(this.#onLoad, this.#onProgress, this.#onError);

		const gltfLoader = new GLTFLoader(this.#manager);

		const dracoLoader = new DRACOLoader().setDecoderPath(`${THREE_PATH}/examples/jsm/libs/draco/gltf/`);
		gltfLoader.setDRACOLoader(dracoLoader);

		const ktx2Loader = new KTX2Loader(this.#manager)
			.setTranscoderPath(`${THREE_PATH}/examples/jsm/libs/basis/`)
			.detectSupport(new WebGLRenderer());
		gltfLoader.setKTX2Loader(ktx2Loader);

		//NOTE: https://discourse.threejs.org/t/basis-textures-with-alpha-appearing-fully-black-and-white-on-some-ipads-and-older-mobile-devices-when-rgb-pvrtc-4bppv1-format-is-used/22575/18
		(ktx2Loader as KTX2Loader & { workerConfig: { etc1Supported: boolean } }).workerConfig.etc1Supported = false;

		this.#manager.addHandler(/\.(ktx2)$/i, ktx2Loader);

		this.#manager.addHandler(/\.(gltf|glb)$/i, gltfLoader);
		this.#manager.addHandler(/\.(png|jpg)$/i, new TextureLoader(this.#manager));
	}

	#onProgress = (url: string, loaded: number, total: number): void => {
		this.dispatchEvent({ type: "progress", url, progress: loaded / total });
	};

	#onLoad = () => {
		//何もしない
	};

	#onError = (url: string): void => {};

	/**
	 * addResources
	 * @param {array} resources [{ name, path }]
	 */
	public addResources(resources: ResourceItem[]) {
		this.#resources = this.#resources.concat(resources);
	}

	public async load(): Promise<void> {
		if (this.#resources.length === 0) {
			console.warn(LOG_PREFIX, "no resorces");
			return;
		}

		console.groupCollapsed("Asset load info");

		let targetList: Record<string, unknown>;

		for (const { name, path } of this.#resources) {
			console.log(LOG_PREFIX, "load", name, path);
			const loader = this.#manager.getHandler(path);
			assertIsDefined(loader);

			const loadedObject = await loader.loadAsync(`${path}`);
			console.log({ loadedObject });

			if (loadedObject instanceof Texture) {
				targetList = this.textures;
			} else {
				targetList = this.models;
			}

			targetList[name] = loadedObject;

			// if (++countLoaded === this.#resources.length) {
			//   this.#deferredLoaded.resolve()
			//   this.dispatchEvent({ type: 'loaded' })
			// }
		}

		console.groupEnd();

		this.dispatchEvent({ type: "loaded" });
		// return this.#deferredLoaded.promise()
	}
}
