import { Clock } from "three";
import { assertIsDefined } from "x";
import { Background } from "./Background";
import { Container } from "./Container";

const canvas = document.getElementById("canvas");
assertIsDefined(canvas);
const clock = new Clock();
const container = new Container({
	canvas,
});
const background = new Background(container);

function setup() {
	update();
	resize();

	window.addEventListener("resize", resize);
}

function update() {
	const dt = clock.getDelta();
	const elapsedTime = clock.elapsedTime;

	background.update(dt, elapsedTime);
	container.render();

	requestAnimationFrame(update);
}

function resize() {
	container.resize();
	background.resize();
}

setup();
