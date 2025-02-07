import { EventDispatcher, type Object3D, REVISION, type Texture, type WebGLRenderer } from "three";
import type { Font, KTX2Loader } from "three/examples/jsm/Addons.js";
import { LoadingManager, type Renderer } from "three/webgpu";
import { assertIsDefined } from "x";
import type { TextureAtlas } from "x3/textures/texture-atlas.js";
import { FontResolver, GLTFResolver, type IResolver, TextureAtlasResolver, TextureResolver } from "./resolver/index.js";
import type { GLTFObject, ResourceItem } from "./types.js";

export interface AssetManagerEventMap {
	// biome-ignore lint/complexity/noBannedTypes: 何もないときは何もない
	loaded: {};
	progress: {
		url: string | string[];
		progress: number;
	};
	error: {
		url: string;
	};
}

const THREE_CDN_PATH = `https://unpkg.com/three@0.${REVISION}.x`;

const LOG_PREFIX = "[AssetManager]";

export class AssetManager extends EventDispatcher<AssetManagerEventMap> {
	public loadingManager: LoadingManager = new LoadingManager();

	#resolvers: Record<string, IResolver> = {
		font: new FontResolver(this),
		texture: new TextureResolver(this, THREE_CDN_PATH),
		gltf: new GLTFResolver(this, THREE_CDN_PATH),
		atlas: new TextureAtlasResolver(this),
	};

	textures: Record<string, Texture> = {};
	objects: Record<string, Object3D | GLTFObject> = {};
	atlases: Record<string, TextureAtlas> = {};
	fonts: Record<string, Font> = {};

	constructor() {
		super();

		this.loadingManager.onError = this.#onError;
	}

	public async loadSingle(url: string): Promise<unknown> {
		const loader = this.loadingManager.getHandler(url);
		assertIsDefined(loader);
		return await loader.loadAsync(url);
	}

	public async load(resources: ResourceItem[], renderer: Renderer | WebGLRenderer): Promise<void> {
		if (!renderer) {
			throw new Error("You must provide a renderer to the load function.");
		}

		const ktx2Loader = this.loadingManager.getHandler(".ktx2") as KTX2Loader;
		assertIsDefined(ktx2Loader);
		if ((renderer as Renderer).isRenderer) {
			await ktx2Loader.detectSupportAsync(renderer as Renderer);
		} else {
			ktx2Loader.detectSupport(renderer as WebGLRenderer);
		}

		console.groupCollapsed(`${LOG_PREFIX} load`);

		for (const [index, resource] of resources.entries()) {
			const { type } = resource;
			let targetUrl: string | string[] = "";
			if (type === undefined) {
				const { url } = resource;
				const loaded = await this.loadSingle(url);
				targetUrl = url;
				for (const resolver of Object.values(this.#resolvers)) {
					if (resolver.check(loaded)) {
						resolver.resolve(resource, loaded, renderer);
						break;
					}
				}
			} else if (type === "atlas") {
				const { jsonUrl, textureUrl } = resource;
				targetUrl = [jsonUrl, textureUrl];
				const loaded: unknown[] = await Promise.all([this.loadSingle(jsonUrl), this.loadSingle(textureUrl)]);
				this.#resolvers.atlas.resolve(resource, loaded, renderer);
			}

			console.info(LOG_PREFIX, "Loaded", { targetUrl });

			this.dispatchEvent({
				type: "progress",
				url: targetUrl,
				progress: index / resources.length,
			});
		}

		console.info(LOG_PREFIX, "Load Completed", { assetManager: this });
		console.groupEnd();

		this.dispatchEvent({ type: "loaded" });
	}

	#onError = (url: string): void => {
		this.dispatchEvent({ type: "error", url });
	};
}
