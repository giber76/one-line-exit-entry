import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny resignation line for The One-Line Exit (1-140 chars, single line).
// Setup: the "we're a family here" workplace cliché. Twist: the employee
// treats the metaphor literally and files for emancipation, like a child
// leaving home — a resignation that reads as a real letter, with the joke
// landing in the last word.
const LINE =
  "I hereby resign: after three years of being 'part of the family,' I would like to formally request emancipation.";

// Guard the gate: entry.txt must be 1-140 chars of UTF-8 text, single line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`LINE must be 1-140 chars, single line (got ${LINE.length})`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
