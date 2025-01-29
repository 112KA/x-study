import type { CompressedTexture, Texture } from "three";

export interface TexturePackerSize {
	w: number;
	h: number;
}

export type TexturePackerRectangle = {
	x: number;
	y: number;
} & TexturePackerSize;

export interface TexturePackerFrame {
	filename: string;
	frame: TexturePackerRectangle;
	rotated: boolean;
	trimmed: boolean;
	spriteSourceSize: TexturePackerRectangle;
	sourceSize: TexturePackerSize;
}

export interface TexturePackerMeta {
	app: string;
	size: TexturePackerSize;
}

export interface TexturePackerData {
	meta: TexturePackerMeta;
	frames: TexturePackerFrame[];
}

export class TextureAtlas {
	#textures: Record<string, Texture> = {};
	constructor(json: TexturePackerData, sourceTexture: Texture) {
		const { frames, meta } = json;
		const { w: width, h: height } = meta.size;
		for (const frame of frames) {
			const t = sourceTexture.clone();
			const key = frame.filename.replace(/\.(png|jpg)/, "");
			const data = frame.frame;

			t.name = frame.filename;

			if (!(t as CompressedTexture).isCompressedTexture) {
				t.repeat.set(data.w / width, data.h / height);
				t.offset.set(data.x / width, 1 - data.h / height - data.y / height);
			} else {
				t.repeat.set(data.w / width, -data.h / height);
				t.offset.set(data.x / width, data.h / height + data.y / height);
			}
			t.needsUpdate = true;

			this.#textures[key] = t;
		}
	}

	get(key: string) {
		return this.#textures[key];
	}
}
