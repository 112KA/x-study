import { assertIsDefined } from "x";
import { Container } from "./Container.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
assertIsDefined(canvas);
const container = new Container({
	canvas,
});
function setup() {
	resize();

	container.renderer.setAnimationLoop(update);
	window.addEventListener("resize", resize);
}

function update() {
	container.render();
}

function resize() {
	container.resize();
}

setup();
