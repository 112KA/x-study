import type { Renderer } from "three/webgpu";
import type { ResourceItem } from "../types.js";

export interface IResolver {
	check(loaded: unknown): boolean;
	resolve(resource: ResourceItem, loaded: unknown, renderer: Renderer): void;
}
