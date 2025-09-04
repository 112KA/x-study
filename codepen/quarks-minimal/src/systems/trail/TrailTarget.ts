import { BoxGeometry, Mesh, MeshNormalMaterial, Object3D } from "three";
import { Vector3 } from "three.quarks";

export class TrailTarget extends Object3D {
	private time = 0;
	private radius = 3;
	private speed = 1;

	private position0 = new Vector3();

	direction = new Vector3();

	constructor() {
		super();

		this.update(0);
	}

	update(dt: number) {
		// 初期位置を保存
		const { x: x0, y: y0, z: z0 } = this.position;
		this.position0.set(x0, y0, z0);
		this.time += dt / 1;

		// 円周上で回転
		const angle = this.time * this.speed;
		this.position.x = Math.cos(angle) * this.radius;
		this.position.y = Math.sin(angle) * this.radius;

		// 方向ベクトルを更新
		const { x: x1, y: y1, z: z1 } = this.position;
		this.direction
			.copy(this.position0)
			.sub(this.position as unknown as Vector3)
			.normalize();
	}
}
