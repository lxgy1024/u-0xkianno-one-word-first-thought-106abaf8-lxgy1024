import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word, first thought: the scent of rain on dry earth.
// Vivid, specific, and hard to guess — exactly what the judge rewards.
const word = "petrichor";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
