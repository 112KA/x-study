import { compressByDraco } from "./compress-by-draco.js";
import { compressByEtc1s } from "./compress-by-etc1s.js";
import { compressByMeshopt } from "./compress-by-meshopt.js";
import { outputInspectResult } from "./output-inspect-result.js";

type TCommandType = "all" | "compress" | "meshopt" | "etc1s" | "draco" | "inspect";

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
	case "all":
		// not implemented yet
		console.error("Error: The 'all' command is not implemented yet.");
		process.exit(1);
		break;
	case "compress":
		{
			compressByDraco(inputFilePath, srcDir, srcDir);

			const outputFilePath = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".draco$1");
			compressByEtc1s(outputFilePath, srcDir, dstDir);
		}
		break;
	case "meshopt":
		compressByMeshopt(inputFilePath, srcDir, dstDir);
		break;
	case "etc1s":
		compressByEtc1s(inputFilePath, srcDir, dstDir);
		break;
	case "draco":
		compressByDraco(inputFilePath, srcDir, dstDir);
		break;
	case "inspect":
		outputInspectResult(inputFilePath, srcDir);
		break;
	default:
		console.error(`Error: Unknown command type "${commandType}".`);
		process.exit(1);
}
