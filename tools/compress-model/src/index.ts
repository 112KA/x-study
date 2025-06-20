import { compressByDraco } from "./compress-by-draco.js";
import { compressByEtc1s } from "./compress-by-etc1s.js";
import { compressByMeshopt } from "./compress-by-meshopt.js";
import { outputInspectResult } from "./output-inspect-result.js";

type TCompressType = "meshopt" | "etc1s" | "draco" | "inspect";

const compressType: TCompressType = process.argv[2] as TCompressType;

/**
 * 1つ目の引数に入力ファイル名を指定してください。
 * 入力ファイルは .gltf または .glb 形式である必要があります。
 * 出力ファイルは入力ファイル名の拡張子を .meshopt.(gltf|glb)または.draco.(gltf|glb) に変更して保存されます。
 */
const inputFileName = process.argv[3];

if (!inputFileName) {
	console.error("Error: Please provide an input file as the first argument.");
	process.exit(1);
}

if (!inputFileName.endsWith(".gltf") && !inputFileName.endsWith(".glb")) {
	console.error(`Error: Input file must have a .gltf or .glb extension.${inputFileName}`);
	process.exit(1);
}

switch (compressType) {
	case "meshopt":
		compressByMeshopt(inputFileName);
		break;
	case "etc1s":
		compressByEtc1s(inputFileName);
		break;
	case "draco":
		compressByDraco(inputFileName);
		break;
	case "inspect":
		outputInspectResult(inputFileName);
		break;
	default:
		console.error(`Error: Unknown compress type "${compressType}".`);
		process.exit(1);
}
