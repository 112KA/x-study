import type { ShaderMaterial } from "three";

import type { Container } from "./Container";
import { GPUCompute } from "./GPUCompute";
import { ParticleMesh } from "./ParticleMesh";

export class Particle {
	private _gpuCompute: GPUCompute;
	private _mesh: ParticleMesh = new ParticleMesh();

	constructor({ scene, renderer }: Container) {
		this._gpuCompute = new GPUCompute(renderer);

		scene.add(this._mesh);
	}

	public update(dt: number, elapsedTime: number) {
		this._gpuCompute.update();

		const { uniforms } = this._mesh.material as ShaderMaterial;
		const { gpuComputationRenderer, positionVariable, velocityVariable } = this._gpuCompute;

		uniforms.texturePosition.value = gpuComputationRenderer.getCurrentRenderTarget(positionVariable).texture;
		uniforms.textureVelocity.value = gpuComputationRenderer.getCurrentRenderTarget(velocityVariable).texture;
	}
}
