import { WebGLRenderer } from "three";
import { WebGPURenderer } from "three/webgpu";
import type { RendererConfig, SupportedRenderer } from "./types";

export class RendererFactory {
	static async create(config: RendererConfig): Promise<SupportedRenderer> {
		switch (config.type) {
			case "webgl":
				return new WebGLRenderer({
					antialias: config.antialias ?? true,
					alpha: config.alpha ?? false,
					preserveDrawingBuffer: config.preserveDrawingBuffer ?? false,
					powerPreference: config.powerPreference ?? "default",
				});

			case "webgpu": {
				const renderer = new WebGPURenderer({
					antialias: config.antialias ?? true,
					alpha: config.alpha ?? false,
				});
				return renderer;
			}
		}
	}

	static async createBestAvailable(
		config?: RendererConfig,
	): Promise<SupportedRenderer> {
		const rendererConfig: RendererConfig = config ?? {
			type: "webgl",
		};

		// WebGPUが利用可能かチェック
		if (navigator.gpu) {
			try {
				rendererConfig.type = "webgpu";
				return await RendererFactory.create(rendererConfig);
			} catch (error) {
				console.warn(
					"WebGPU initialization failed, falling back to WebGL:",
					error,
				);
			}
		}

		// WebGLにフォールバックRendererFactory
		return await RendererFactory.create(rendererConfig);
	}
}
