import { mkdirSync, writeFileSync } from "node:fs";

// One funny line for "The One-Line Laugh" — a single sentence, <= 200 chars.
// The surprise lands on the last words: "strong" turns out to mean her day, not the coffee.
const line =
  "I asked the barista for something strong, and she handed me her resignation letter.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts the file's characters, 1-200, so the
// line is written exactly as-is. Never delete the output dir (grader mounts it).
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
