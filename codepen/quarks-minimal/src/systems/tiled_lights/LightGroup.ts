import {
	Color,
	Group,
	PointLight,
} from "three";

export class LightGroup extends Group {

	constructor(
		public count: number
	) {
		super();

		this.initializeLights();
	}

	private initializeLights() {

		const color = new Color();

		for (let i = 0; i < this.count; i++) {
			const hex = Math.random() * 0xffffff + 0x666666;

			this.addLight(hex);
		}
	}

	private addLight(hexColor: number, power = 10, distance = 3) {
		const light = new PointLight(hexColor, 1, distance);

		light.power = power;
		light.userData.fixedPosition = light.position.clone();

		this.add(light);

		return light;
	}

	updateLights(timeS: number) {
		for (let i = 0; i < this.children.length; i++) {
			const light = this.children[i];
			const lightTime = timeS * 0.5 + light.id;

			// PointLight 以外はスキップ
			if (light.userData.fixedPosition === undefined) continue;
			// console.log(light.userData, light.userData.fixedPosition);
			light.position.copy(light.userData.fixedPosition);
			light.position.x += Math.sin(lightTime * 0.7) * 0.5;
			light.position.y += Math.cos(lightTime * 0.5) * 0.5;
			light.position.z += Math.cos(lightTime * 0.3) * 0.5;
		}
	}
}
