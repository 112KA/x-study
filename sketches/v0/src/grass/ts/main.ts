import { assertIsDefined } from "x";
import { Container } from "./Container";
import { Grass } from "./Grass";
import { InstancedGrass } from "./InstancedGrass";
import { Debug } from "./debug";

const canvas = document.getElementById("canvas");
assertIsDefined(canvas);
const container = new Container({
	canvas,
});
const size = 30;
const count = 100000;
// const size = 3
// const count = 1000
const grass = new Grass(container.scene, size, count);
const instancedGrass = new InstancedGrass(container.scene, size, count);

function setup() {
	grass.visible = false;
	// instancedGrass.visible = false

	new Debug(grass, instancedGrass);

	container.renderer.setAnimationLoop((time: number) => {
		if (grass.visible) {
			grass.update(time);
		} else {
			instancedGrass.update(time);
		}
		container.render();
	});
	resize();

	window.addEventListener("resize", resize);
}

function resize() {
	container.resize();
}

setup();
