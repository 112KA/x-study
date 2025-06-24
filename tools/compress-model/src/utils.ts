import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";

export async function listModelFiles(srcDir: string, innerDir = "", files: string[] = []): Promise<string[]> {
	const entries = await readdir(srcDir + innerDir, { withFileTypes: true });
	for (const entry of entries) {
		if (/\.(draco|meshopt|etc1s)/i.test(entry.name)) {
			continue;
		}

		const innerPath = join(innerDir, entry.name);
		if (entry.isDirectory()) {
			await listModelFiles(srcDir, innerPath, files);
		} else if ([".gltf", ".glb"].includes(extname(entry.name).toLowerCase())) {
			files.push(innerPath);
		}
	}

	return files;
}
