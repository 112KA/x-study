import {
	RepeatWrapping,
	SRGBColorSpace,
	type Texture,
	TextureLoader,
	type WebGLRenderer,
} from "three";
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

		loadingManager.addHandler(
			/\.(png|jpg|webp)$/i,
			new TextureLoader(loadingManager),
		);

		loadingManager.addHandler(
			/\.(ktx2)$/i,
			new KTX2Loader(loadingManager).setTranscoderPath(
				`${threeCDNPath}/examples/jsm/libs/basis/`,
			),
		);
	}

	check(loaded: unknown): boolean {
		return (loaded as Texture).isTexture;
	}

	resolve(
		resource: ResourceItem,
		loaded: unknown,
		renderer: Renderer | WebGLRenderer,
	): void {
		const texture = loaded as Texture;

		if (renderer.outputColorSpace === SRGBColorSpace) {
			texture.colorSpace = SRGBColorSpace;
		}

		texture.wrapS = texture.wrapT = RepeatWrapping;

		if ((renderer as WebGPURenderer).isWebGPURenderer) {
			texture.flipY = false;
		}

		this.manager.textures[resource.id] = loaded as Texture;
	}
}
