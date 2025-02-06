import type { AnimationClip, Object3D } from "three";

export type DefaultResourceItem = {
	type?: undefined;
	id: string;
	url: string;
};

export type TextureAtlasResourceItem = {
	type: "atlas";
	id: string;
	jsonUrl: string;
	textureUrl: string;
};

export type ResourceItem = DefaultResourceItem | TextureAtlasResourceItem;

export type GLTFObject = {
	scene: Object3D;
	animations: AnimationClip[];
};
