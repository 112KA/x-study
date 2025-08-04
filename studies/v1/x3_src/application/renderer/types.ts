import type { WebGLRenderer } from "three";
import type { WebGPURenderer } from "three/webgpu";

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

// export enum RendererType {
// 	WebGL = "webgl",
// 	WebGPU = "webgpu",
// }
