import { exec } from "node:child_process";

export const compressByMeshopt = async (inputFilePath: string, srcDir = "", dstDir = "") => {
	const outputFilePath = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".meshopt$1");

	return new Promise<void>((resolve, reject) => {
		exec(
			`gltf-transform meshopt ${srcDir}${inputFilePath} ${dstDir}${outputFilePath} --level medium`,
			(err, _stdout, stderr) => {
				if (err || stderr) {
					console.error(`stderr: ${stderr}`);
					reject(err || new Error(stderr));
					return;
				}
				console.info(`Compressed By Meshopt ${inputFilePath} to ${outputFilePath}`);
				resolve();
			},
		);
	});
};
