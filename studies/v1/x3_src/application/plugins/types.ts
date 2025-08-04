import type { ApplicationBase } from "../application-base";

export enum PluginInitializationPhase {
	BeforeScene = "beforeScene",
	AfterScene = "afterScene",
}

export interface IPlugin {
	name: string;
	version: string;

	// 初期化フェーズを指定（デフォルトはAfterScene）
	initializationPhase?: PluginInitializationPhase;

	initialize(app: ApplicationBase): Promise<void> | void;
	destroy?(): Promise<void> | void;
	update?(dt: number, time: number): void;
	resize?(width: number, height: number): void;
}

export interface IPluginManager {
	register(plugin: IPlugin): void;
	unregister(pluginName: string): void;
	get(pluginName: string): IPlugin | undefined;
	has(pluginName: string): boolean;
	getAll(): IPlugin[];

	// 新しいメソッド
	initializeAllBeforeScene(): Promise<void>;
	initializeAllAfterScene(): Promise<void>;
}
