import { exec } from "node:child_process";

export const compressByDraco = async (inputFilePath: string, srcDir = "", dstDir = "") => {
	const outputFilePath = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".draco$1");

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform draco ${srcDir}${inputFilePath} ${dstDir}${outputFilePath}`, (err, _stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			console.info(`Compressed By Draco ${inputFilePath} to ${outputFilePath}`);
			resolve();
		});
	});
};
