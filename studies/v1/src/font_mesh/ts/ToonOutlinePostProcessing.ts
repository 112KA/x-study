import { toonOutlinePass } from "three/tsl";
import { AbstractPostProcessing } from "x3/application/renderer/abstract-postporcessing.js";
import type { PostProcessingHostContext } from "x3/application/renderer/types.js";

export class ToonOutlinePostProcessing extends AbstractPostProcessing {
	constructor(hostContext: PostProcessingHostContext) {
		super(hostContext);

		this.outputNode = toonOutlinePass(
			hostContext.scene,
			hostContext.camera,
			undefined,
			0.005,
		);
	}

	update(): void {
		// 必要に応じてアウトラインの更新処理を追加
	}

	resize(): void {
		// 必要に応じてリサイズ処理を追加
	}
}
