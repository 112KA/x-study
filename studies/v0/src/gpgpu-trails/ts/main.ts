import { ArrowHelper, Clock, Vector3 } from "three";
import { assertIsDefined } from "x";
import { Container } from "./Container";
import { Particle } from "./Particle";
import { Debug } from "./debug";

const canvas = document.getElementById("canvas");
assertIsDefined(canvas);
const clock = new Clock();
const container = new Container({
	canvas,
});
const particle = new Particle(container);
const debug = new Debug(particle);

function setup() {
	update();
	resize();

	window.addEventListener("resize", resize);
}

function update() {
	particle.update(clock.getDelta(), clock.elapsedTime);
	container.render();
	requestAnimationFrame(update);
}

function resize() {
	container.resize();
}

setup();
