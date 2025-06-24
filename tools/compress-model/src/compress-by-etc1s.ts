import { exec } from "node:child_process";

export const compressByEtc1s = async (inputFilePath: string, srcDir = "", dstDir = "") => {
	const outputFilePath = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".etc1s$1");

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform etc1s ${srcDir}${inputFilePath} ${dstDir}${outputFilePath}`, (err, _stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			console.info(`Compressed By Etc1s ${inputFilePath} to ${outputFilePath}`);
			resolve();
		});
	});
};
