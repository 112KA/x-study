import type { Camera, Scene, WebGLRenderer } from "three";
import type { WebGPURenderer } from "three/webgpu";
import type { Viewport } from "../viewport";
import type { RendererAdapter } from "./renderer-adapter";

export type SupportedRenderer = WebGLRenderer | WebGPURenderer;

export type WebGLRendererConfig = {
	type: "webgl";
	antialias?: boolean;
	alpha?: boolean;
	preserveDrawingBuffer?: boolean;
	powerPreference?: "default" | "high-performance" | "low-power";
};

export type WebGPURendererConfig = {
	type: "webgpu";
	antialias?: boolean;
	alpha?: boolean;
};

export type RendererConfig = WebGLRendererConfig | WebGPURendererConfig;

export interface RendererHostContext {
	readonly scene: Scene;
	readonly camera: Camera;
}

export interface PostProcessingHostContext {
	readonly scene: Scene;
	readonly camera: Camera;
	readonly rendererAdapter: RendererAdapter;
	readonly viewport: Viewport;
}
