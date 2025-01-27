import { MediaQuery, assertIsDefined } from "x";
import { Container } from "./Container";
import { Floor } from "./Floor";
import { Particle } from "./Particle";
import { Debug } from "./debug";

const canvas = document.getElementById("canvas");
assertIsDefined(canvas);
const container = new Container({
	canvas,
});
const particle = new Particle(container);
const floor = new Floor(container);
const debug = new Debug(container, particle);
const mq = new MediaQuery();

let _currentTime: number;

function setup() {
	_currentTime = Date.now();

	update();
	resize();

	window.addEventListener("resize", resize);

	container.setDeviceSize(mq.deviceSize);
	particle.setDeviceSize(mq.deviceSize);
	mq.addEventListener("change", _onChangeMediaQuery as EventListener);
}

function _onChangeMediaQuery(e: CustomEvent) {
	const { deviceSize } = e.detail;
	container.setDeviceSize(deviceSize);
	particle.setDeviceSize(deviceSize);
}

function update() {
	const t = Date.now();
	const dt = t - _currentTime;
	_currentTime = t;

	particle.update(dt, _currentTime);

	container.render();

	requestAnimationFrame(update);
}

function resize() {
	container.resize();
}

setup();
