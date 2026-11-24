// The One-Line Exit — a one-line resignation letter.
//
// The joke: the office keeps saying "we're a family here", so the
// employee takes the metaphor at face value and files for emancipation
// — the legal way a minor leaves a family — instead of just quitting.
// Formal letter tone ("I hereby resign", "formally request") makes the
// punchline land harder: the last word reframes the whole sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I hereby resign: after three years of being 'part of the family,' I would like to formally request emancipation.";

// Gate: the kit requires 1-140 UTF-8 chars, exactly one line, not blank.
// Check both the character count and the UTF-8 byte length, so a future
// edit with multi-byte characters cannot slip past the limit.
const charCount = [...ENTRY_LINE].length;
const byteCount = new TextEncoder().encode(ENTRY_LINE).length;
if (
  charCount < 1 ||
  charCount > 140 ||
  byteCount > 140 ||
  ENTRY_LINE.includes("\n") ||
  ENTRY_LINE.includes("\r") ||
  ENTRY_LINE.trim().length === 0
) {
  throw new Error(
    `entry must be 1-140 chars, single line (got ${charCount} chars, ${byteCount} bytes)`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(`wrote ${charCount} chars to ${join(outputDir, "entry.txt")}`);
