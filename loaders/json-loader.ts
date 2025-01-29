import { FileLoader, Loader, LoaderUtils } from "three";

import { autotag } from "x";

@autotag
export class JSONLoader extends Loader {
	async loadAsync(
		url: string,
		onProgress: (event: ProgressEvent<EventTarget>) => void,
	): Promise<unknown> {
		// const scope = this

		const path = this.path === "" ? LoaderUtils.extractUrlBase(url) : this.path;
		this.resourcePath = this.resourcePath || path;

		const loader = new FileLoader(this.manager);
		loader.setPath(this.path);
		loader.setRequestHeader(this.requestHeader);
		loader.setWithCredentials(this.withCredentials);

		const text = (await loader.loadAsync(url, onProgress)) as string;

		return JSON.parse(text) as unknown;
	}
}
