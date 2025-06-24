import { unlink } from "node:fs/promises";

import { compressByDraco } from "./compress-by-draco.js";
import { compressByEtc1s } from "./compress-by-etc1s.js";
import { compressByMeshopt } from "./compress-by-meshopt.js";
import { outputInspectResult } from "./output-inspect-result.js";

type TCommandType = "compress" | "meshopt" | "etc1s" | "draco" | "inspect";

const commandType: TCommandType = process.argv[2] as TCommandType;

/**
 * 2つ目の引数に入力ファイル名を指定してください。
 * 入力ファイルは .gltf または .glb 形式である必要があります。
 * 出力ファイルは入力ファイル名の拡張子を .meshopt.(gltf|glb)または.draco.(gltf|glb) に変更して保存されます。
 */
const inputFilePath = process.argv[3];

if (!inputFilePath) {
	console.error("Error: Please provide an input file as the first argument.");
	process.exit(1);
}

if (!inputFilePath.endsWith(".gltf") && !inputFilePath.endsWith(".glb")) {
	console.error(`Error: Input file must have a .gltf or .glb extension.${inputFilePath}`);
	process.exit(1);
}

const srcDir = process.argv[4] || "models/";
const dstDir = process.argv[5] || "models/";

switch (commandType) {
	case "compress":
		{
			await compressByMeshopt(inputFilePath, srcDir, srcDir);

			const inputFilePath2 = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".meshopt$1");

			await compressByEtc1s(inputFilePath2, srcDir, dstDir);

			// 中間ファイルを削除
			await unlink(srcDir + inputFilePath2);
			console.info(`Deleted intermediate file ${srcDir + inputFilePath2}`);
		}
		break;
	case "meshopt":
		await compressByMeshopt(inputFilePath, srcDir, dstDir);
		break;
	case "etc1s":
		await compressByEtc1s(inputFilePath, srcDir, dstDir);
		break;
	case "draco":
		await compressByDraco(inputFilePath, srcDir, dstDir);
		break;
	case "inspect":
		await outputInspectResult(inputFilePath, srcDir);
		break;
	default:
		console.error(`Error: Unknown command type "${commandType}".`);
		process.exit(1);
}
