import type { Texture } from "three";
import type { Renderer } from "three/webgpu";
import { JSONLoader } from "x3/loaders/json-loader.js";
import { TextureAtlas, type TexturePackerData } from "x3/textures/texture-atlas.js";
import type { AssetManager } from "../asset-manager.js";
import type { ResourceItem } from "../types.js";
import type { IResolver } from "./types.js";

export class TextureAtlasResolver implements IResolver {
	name = "TextureAtlasResolver";
	constructor(
		public manager: AssetManager,
		_threeCDNPath = "",
	) {
		const { loadingManager } = manager;
		loadingManager.addHandler(/\.json$/i, new JSONLoader(loadingManager));
	}

	check(loaded: unknown): boolean {
		return false; //no check
	}

	resolve(resource: ResourceItem, loaded: unknown, _renderer: Renderer): void {
		const [json, texture] = loaded as [TexturePackerData, Texture];

		if (!json.meta?.app && /texturepacker/.test(json.meta?.app)) {
			throw new Error("Invalid texture packer json");
		}

		this.manager.atlases[resource.id] = new TextureAtlas(json, texture);
	}
}
