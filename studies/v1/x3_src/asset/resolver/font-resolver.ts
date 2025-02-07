import type { WebGLRenderer } from "three";
import { Font, type FontData, TTFLoader } from "three/examples/jsm/Addons.js";
import type { Renderer, WebGPURenderer } from "three/webgpu";
import type { AssetManager } from "../asset-manager.js";
import type { ResourceItem } from "../types.js";
import type { IResolver } from "./types.js";

export class FontResolver implements IResolver {
	name = "FontResolver";
	constructor(public manager: AssetManager) {
		const { loadingManager } = manager;
		loadingManager.addHandler(/\.(ttf)$/i, new TTFLoader(loadingManager));
	}

	check(loaded: unknown): boolean {
		return (loaded as FontData).glyphs !== undefined;
	}

	resolve(resource: ResourceItem, loaded: unknown, _renderer: Renderer | WebGLRenderer): void {
		this.manager.fonts[resource.id] = new Font(loaded as FontData);
	}
}
