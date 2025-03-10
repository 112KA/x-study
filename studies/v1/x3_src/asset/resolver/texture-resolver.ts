import { SRGBColorSpace, type Texture, TextureLoader, type WebGLRenderer } from "three";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import type { Renderer, WebGPURenderer } from "three/webgpu";
import type { AssetManager } from "../asset-manager.js";
import type { ResourceItem } from "../types.js";
import type { IResolver } from "./types.js";

export class TextureResolver implements IResolver {
	name = "TextureResolver";
	constructor(
		public manager: AssetManager,
		threeCDNPath: string,
	) {
		const { loadingManager } = manager;
		loadingManager.addHandler(/\.(png|jpg|webp)$/i, new TextureLoader(loadingManager));
		const ktx2Loader = new KTX2Loader(loadingManager).setTranscoderPath(`${threeCDNPath}/examples/jsm/libs/basis/`);
		loadingManager.addHandler(/\.(ktx2)$/i, ktx2Loader);
	}

	check(loaded: unknown): boolean {
		return (loaded as Texture).isTexture;
	}

	resolve(resource: ResourceItem, loaded: unknown, renderer: Renderer | WebGLRenderer): void {
		if (renderer.outputColorSpace === SRGBColorSpace) {
			(loaded as Texture).colorSpace = SRGBColorSpace;
		}

		if ((renderer as WebGPURenderer).isWebGPURenderer) {
			(loaded as Texture).flipY = false;
		}

		this.manager.textures[resource.id] = loaded as Texture;
	}
}
