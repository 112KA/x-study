import {
	Color,
	DynamicDrawUsage,
	Group,
	InstancedMesh,
	MeshBasicMaterial,
	PointLight,
	SphereGeometry,
} from "three";

export class LightGroup extends Group {
	lightDummy!: InstancedMesh;

	constructor(public count: number) {
		super();

		this.initializeLights();
	}

	private initializeLights() {
		const material = new MeshBasicMaterial();

		this.lightDummy = new InstancedMesh(
			new SphereGeometry(0.1, 16, 8),
			material,
			this.count,
		);
		this.lightDummy.instanceMatrix.setUsage(DynamicDrawUsage);
		this.add(this.lightDummy);

		const color = new Color();

		for (let i = 0; i < this.count; i++) {
			const hex = Math.random() * 0xffffff + 0x666666;

			this.lightDummy.setColorAt(i, color.setHex(hex));

			this.addLight(hex);
		}
	}

	private addLight(hexColor: number, power = 10, distance = 3) {
		const light = new PointLight(hexColor, 1, distance);
		light.position.set(Math.random() * 300 - 150, 1, Math.random() * 300 - 150);
		light.power = power;
		light.userData.fixedPosition = light.position.clone();
		this.add(light);

		return light;
	}

	updateLights(timeS: number) {
		for (let i = 0; i < this.children.length; i++) {
			const light = this.children[i];
			const lightTime = timeS * 0.5 + light.id;
			if (light.userData.fixedPosition === undefined) continue;
			// console.log(light.userData, light.userData.fixedPosition);
			light.position.copy(light.userData.fixedPosition);
			light.position.x += Math.sin(lightTime * 0.7) * 3;
			light.position.y += Math.cos(lightTime * 0.5) * 0.5;
			light.position.z += Math.cos(lightTime * 0.3) * 3;

			this.lightDummy.setMatrixAt(i, light.matrixWorld);
		}
	}
}
