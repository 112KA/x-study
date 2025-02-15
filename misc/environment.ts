/**
 * WebGPUがサポートされているかどうかをチェックする
 * threejsのWebGPU.isAvailable()がTop-level awaitで引っかかるため、独自定義した
 *
 * @returns WebGPUがサポートされているかどうかを返す
 */
export const checkWebGPUSupport = async (): Promise<boolean> => {
	if (!navigator.gpu) {
		console.error("このブラウザではWebGPUがサポートされていません。");
		return false;
	}

	try {
		const adapter = await navigator.gpu.requestAdapter();
		if (!adapter) {
			console.error("WebGPUアダプターの取得に失敗しました。");
			return false;
		}

		return true;
	} catch (error) {
		console.error("WebGPUのチェック中にエラーが発生しました:", error);
		return false;
	}
};
