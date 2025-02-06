import * as THREE from "three";
import { COLORS, N_DIVIDE } from "./Config";
import type { Spline } from "./Spline";

export class Card {
	public color = COLORS[~~(Math.random() * COLORS.length)];
	public localMatrix: THREE.Matrix4 = new THREE.Matrix4();
	public position: THREE.Vector3 = new THREE.Vector3();
	public attitudeQuaternion: THREE.Quaternion = new THREE.Quaternion();
	public scaleVector: THREE.Vector3 = new THREE.Vector3();
	public positionOffsetScale = 1;

	public spline: Spline;
	public offset: number = ~~(Math.random() * 100) * 10;
	public offsetAdd: number;

	public positionOffsetMatrix = new THREE.Matrix4();
	public positionOffsetVector = new THREE.Vector3(
		(Math.random() - 0.5) * 150,
		(Math.random() - 0.5) * 150,
		(Math.random() - 0.5) * 150,
	);

	public endOffset: number;

	tick() {
		const { points, positionOffsetLength } = this.spline;

		this.offset += this.offsetAdd;
		this.offset = this.offset < 1000 ? this.offset : 0;

		this.positionOffsetScale =
			0.2 + (positionOffsetLength * (1000 - this.offset)) / 1000;

		const span = 1000 / N_DIVIDE;

		const i0 = ~~(this.offset / span);
		const p0 = points[i0];
		const p1 = points[i0 + 1];
		const rate = (this.offset % span) / span;

		this.attitudeQuaternion.slerpQuaternions(
			p0.quaternion,
			p1.quaternion,
			rate,
		);
		this.localMatrix.makeRotationFromQuaternion(this.attitudeQuaternion);

		this.position.lerpVectors(p0, p1, rate);

		this.positionOffsetMatrix.setPosition(
			this.positionOffsetVector
				.clone()
				.multiplyScalar(this.positionOffsetScale),
		);

		this.localMatrix.setPosition(this.position);
		this.localMatrix.multiplyMatrices(
			this.positionOffsetMatrix,
			this.localMatrix,
		);

		this.scaleVector.setScalar(this.getScaleByOffset());
		this.localMatrix.scale(this.scaleVector);
	}

	getScaleByOffset() {
		const { endOffset } = this.spline;
		if (this.offset < 100) {
			return this.offset / 100;
		}

		if (endOffset < this.offset) {
			return (
				(1000 - endOffset - (this.offset - endOffset)) / (1000 - endOffset)
			);
		}

		return 1;
	}
}
