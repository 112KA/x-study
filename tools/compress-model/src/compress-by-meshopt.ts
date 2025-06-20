import { exec } from "node:child_process";

export const compressByMeshopt = async (inputFileName: string) => {
	const outputFileName = inputFileName.replace(/(\.gltf|\.glb)$/i, ".meshopt$1");

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform meshopt ${inputFileName} ${outputFileName} --level medium`, (err, _stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			resolve();
		});
	});
};
