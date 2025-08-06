import { assertIsDefined } from "x";
import { OrbitControlsPlugin, StatsGLPlugin } from "x3/application";
import { Application } from "./Application";

const setup = async () => {
	const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
	assertIsDefined(wrapper);

	const app = new Application(wrapper, {
		renderer: {
			type: "webgpu",
		},
	});

	app.plugin.register(new OrbitControlsPlugin());
	app.plugin.register(new StatsGLPlugin());

	await app.initialize();
	app.start();
};

setup();
