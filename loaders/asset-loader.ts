import type { Object3D, WebGLRenderer } from "three";
import {
	EventDispatcher,
	LoadingManager,
	REVISION,
	SRGBColorSpace,
	Texture,
	TextureLoader,
} from "three";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";

import { assertIsDefined, autotag } from "x";

import {
	TextureAtlas,
	type TexturePackerData,
} from "../textures/texture-atlas.js";
import { JSONLoader } from "./json-loader.js";

export interface ResourceItem {
	name: string;
	path: string;
}

export interface AssetLoaderParameters {
	renderer: WebGLRenderer;
}

@autotag
export class AssetLoader extends EventDispatcher {
	_manager: LoadingManager;
	_resources: ResourceItem[] = [];

	public isLoaded = false;

	public models: Record<string, Object3D> = {};
	public textures: Record<string, Texture> = {};

	public texturePackerJsonRecord: Record<string, TexturePackerData> = {};
	public atlasRecord: Record<string, TextureAtlas> = {};

	constructor({ renderer }: AssetLoaderParameters) {
		super();

		this._manager = new LoadingManager(
			this._onLoad,
			this._onProgress,
			this._onError,
		);

		const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

		const dracoLoader = new DRACOLoader(this._manager).setDecoderPath(
			`${THREE_PATH}/examples/jsm/libs/draco/gltf/`,
		);

		const ktx2Loader = new KTX2Loader(this._manager)
			.setTranscoderPath(`${THREE_PATH}/examples/jsm/libs/basis/`)
			.detectSupport(renderer);

		const gltfLoader = new GLTFLoader(this._manager)
			.setDRACOLoader(dracoLoader)
			.setKTX2Loader(ktx2Loader);

		this._manager.addHandler(/\.(ktx2)$/i, ktx2Loader);

		this._manager.addHandler(/\.(gltf|glb)$/i, gltfLoader);
		this._manager.addHandler(
			/\.(png|jpg|webp)$/i,
			new TextureLoader(this._manager),
		);
		this._manager.addHandler(/\.json$/i, new JSONLoader(this._manager));
	}

	_onLoad = () => {
		// 何もしない
	};

	_onProgress = (_url: string, _loaded: number, _total: number): void => {
		// this.dispatchEvent({ type: "progress", url, progress: loaded / total });
	};

	_onError = (_url: string): void => {
		// 何もしない
	};

	/**
	 * addResources
	 * @param {Array} resources [{ name, path }]
	 */
	public addResources(resources: ResourceItem[]) {
		this._resources = this._resources.concat(resources);
	}

	public async load(): Promise<void> {
		if (this._resources.length === 0) {
			console.warn(this, "no resorces");
			return;
		}

		console.groupCollapsed("Asset load info");

		let targetList: Record<string, unknown>;

		await Promise.all(
			this._resources.map(async ({ name, path }) => {
				const loader = this._manager.getHandler(path);
				console.log(this, "load", { name, path, loader });
				assertIsDefined(loader);

				const loadedObject = await loader.loadAsync(`${path}`);
				// biome-ignore lint: loadedObjectの型が不明
				(loadedObject as any).name = path;
				console.log({ loadedObject });

				if (loadedObject instanceof Texture) {
					loadedObject.colorSpace = SRGBColorSpace;
					targetList = this.textures;
				}
				// eslint-disable-next-line ts/no-explicit-any
				else if (
					// biome-ignore lint: loadedObjectの型が不明
					(loadedObject as any).meta?.app &&
					// biome-ignore lint: loadedObjectの型が不明
					/texturepacker/.test((loadedObject as any).meta?.app)
				) {
					targetList = this.texturePackerJsonRecord;
				} else {
					targetList = this.models;
				}

				targetList[name] = loadedObject;
			}),
		);

		// TextureAtlasをつくる
		for (const key in this.texturePackerJsonRecord) {
			console.log(this, "_onAssetLoaded", {
				texturePackerJsonRecord: this.texturePackerJsonRecord[key],
			});

			const atlasKey = key.replace(".json", "");
			const atlasTexture =
				this.textures[`${atlasKey}.png`] ?? this.textures[`${atlasKey}.ktx2`];

			assertIsDefined(atlasTexture);

			this.atlasRecord[atlasKey] = new TextureAtlas(
				this.texturePackerJsonRecord[key],
				atlasTexture,
			);
		}

		console.groupEnd();

		this.isLoaded = true;
	}
}
