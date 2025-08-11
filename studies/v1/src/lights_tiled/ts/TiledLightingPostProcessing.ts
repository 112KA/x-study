import { TiledLighting } from "three/examples/jsm/lighting/TiledLighting.js";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";
import type TiledLightsNode from "three/examples/jsm/tsl/lighting/TiledLightsNode.js";
import type OperatorNode from "three/src/nodes/math/OperatorNode.js";
import { pass, type ShaderNodeObject, uniform } from "three/tsl";
import {
	NeutralToneMapping,
	type UniformNode,
	type WebGPURenderer,
} from "three/webgpu";
import type { PostProcessingHostContext } from "x3/application/renderer";
import { AbstractPostProcessing } from "x3/application/renderer/abstract-postporcessing";

export class TiledLightingPostProcessing extends AbstractPostProcessing {
	private compose!: ShaderNodeObject<OperatorNode>;
	private tileInfluence!: ShaderNodeObject<UniformNode<number>>;
	private lighting = new TiledLighting();

	constructor(
		hostContext: PostProcessingHostContext,
		public count: number,
	) {
		super(hostContext);

		this.initialize();
	}

	private initialize(): void {
		const { scene, camera, rendererAdapter } = this.hostContext;
		const renderer = rendererAdapter.renderer as WebGPURenderer;
		renderer.lighting = this.lighting;
		renderer.toneMapping = NeutralToneMapping;
		renderer.toneMappingExposure = 5;

		// post processing
		const scenePass = pass(scene, camera);
		const bloomPass = bloom(scenePass, 3, 0.9, 0.2);

		this.compose = scenePass.add(bloomPass);
		this.tileInfluence = uniform(0);

		this.update();
	}

	setTileInfluence(value: number): void {
		this.tileInfluence.value = value;
	}

	update(): void {
		const { scene, camera, viewport, rendererAdapter } = this.hostContext;
		const devicePixelRatio = rendererAdapter.getPixelRatio();

		// tile indexes debug, needs to be updated every time the renderer size changes
		const tiledLightsNode = this.lighting.getNode(
			scene,
			camera,
		) as TiledLightsNode;

		// デバッグ表示を軽量化（必要に応じてコメントアウト）
		const debugBlockIndexes = tiledLightsNode
			.setSize(
				viewport.width * devicePixelRatio,
				viewport.height * devicePixelRatio,
			)
			.getBlock()
			.toColor()
			.div(this.count * 2);

		this.outputNode = this.compose.add(
			debugBlockIndexes.mul(this.tileInfluence),
		);
		this.needsUpdate = true;
	}

	resize(): void {
		this.update();
	}
}
