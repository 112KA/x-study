import { DRACOLoader, GLTFLoader, type KTX2Loader } from "three/examples/jsm/Addons.js";
import type { Renderer } from "three/webgpu";
import type { AssetManager } from "../asset-manager.js";
import type { GLTFObject, ResourceItem } from "../types.js";
import type { IResolver } from "./types.js";

export class GLTFResolver implements IResolver {
	name = "GLTFResolver";
	constructor(
		public manager: AssetManager,
		threeCDNPath: string,
	) {
		const { loadingManager } = manager;
		const dracoLoader = new DRACOLoader(loadingManager).setDecoderPath(`${threeCDNPath}/examples/jsm/libs/draco/gltf/`);
		const ktx2Loader = loadingManager.getHandler(".ktx2") as KTX2Loader;
		const gltfLoader = new GLTFLoader(loadingManager).setDRACOLoader(dracoLoader).setKTX2Loader(ktx2Loader);

		loadingManager.addHandler(/\.(gltf|glb)$/i, gltfLoader);
	}

	check(loaded: unknown): boolean {
		return (loaded as GLTFObject).scene !== undefined;
	}

	resolve(resource: ResourceItem, loaded: unknown, _renderer: Renderer): void {
		this.manager.objects[resource.id] = loaded as GLTFObject;
	}
}
