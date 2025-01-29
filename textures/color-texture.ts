import { Color, DataTexture, RedFormat } from "three";

export class ColorTexture extends DataTexture {
	constructor(color: number, width: number, height: number) {
		const size = width * height;
		const data = new Uint8Array(4 * size);
		const c = new Color(color);
		const r = Math.floor(c.r * 255);
		const g = Math.floor(c.g * 255);
		const b = Math.floor(c.b * 255);

		for (let i = 0; i < size; i++) {
			const stride = i * 4;

			data[stride] = r;
			data[stride + 1] = g;
			data[stride + 2] = b;
			data[stride + 3] = 255;
		}

		super(data, width, height);
	}
}

export class GradientTexture extends DataTexture {
	constructor(length = 3) {
		const colors = new Uint8Array(length);

		for (let c = 0; c <= colors.length; c++) {
			colors[c] = (c / colors.length) * 256;
		}

		super(colors, colors.length, 1, RedFormat);
	}
}
