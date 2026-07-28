#!/usr/bin/env node
/**
 * Creates a new weekly research-log entry from the template.
 *
 *   npm run new-log
 *
 * You can also pass answers up front to skip the questions:
 *
 *   npm run new-log -- --week 3 --date 2026-09-14 --title "Benchmark teardown" --phase "Sneaker Anatomy and Benchmarking"
 *
 * This script is a convenience, not a requirement. Copying
 * content/research-log/_template.md by hand works exactly as well.
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const ROOT = process.cwd();
const LOG_DIR = path.join(ROOT, 'content', 'research-log');
const TEMPLATE = path.join(LOG_DIR, '_template.md');

/** Phase names must match the `name` values in data/phases.ts. */
const PHASES = [
  'Project Definition and Background Research',
  'Sneaker Anatomy and Benchmarking',
  'Materials Research and Comparison',
  'Manufacturing and Assembly Process Research',
  'Performance Requirements and Concept Development',
  'Material and Process Selection',
  'CAD, Pattern Development, and Prototype Planning',
  'Prototype Fabrication',
  'Testing and Evaluation',
  'Iteration and Final Prototype',
  'Thesis, Presentation, and Oral Defense Preparation',
];

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[index + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        index += 1;
      } else {
        args[key] = 'true';
      }
    }
  }
  return args;
}

function isValidIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Fall/Spring/Summer from a YYYY-MM-DD date. Adjust if your terms differ. */
function semesterFor(date) {
  const [year, month] = date.split('-').map(Number);
  if (month >= 8 && month <= 12) return `Fall ${year}`;
  if (month >= 1 && month <= 4) return `Spring ${year}`;
  return `Summer ${year}`;
}

function today() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

async function main() {
  if (!fs.existsSync(TEMPLATE)) {
    fail(`Template not found at content/research-log/_template.md`);
  }

  const args = parseArgs(process.argv.slice(2));
  const interactive = !args.week || !args.title;

  let week = args.week;
  let date = args.date;
  let title = args.title;
  let phase = args.phase;

  if (interactive) {
    const rl = readline.createInterface({ input, output });

    console.log('\nNew research-log entry\n----------------------');

    while (!week || !/^\d+$/.test(week)) {
      week = (await rl.question('Week number (e.g. 3): ')).trim();
      if (!/^\d+$/.test(week)) console.log('  Enter a whole number.');
    }

    while (!date || !isValidIsoDate(date)) {
      date = (await rl.question(`Date (YYYY-MM-DD) [${today()}]: `)).trim() || today();
      if (!isValidIsoDate(date)) console.log('  Enter a real date as YYYY-MM-DD.');
    }

    while (!title) {
      title = (await rl.question('Short title (e.g. Benchmark teardown): ')).trim();
    }

    if (!phase) {
      console.log('\nPhase:');
      PHASES.forEach((name, index) => console.log(`  ${index + 1}. ${name}`));
      const choice = (await rl.question(`Choose 1-${PHASES.length} [1]: `)).trim() || '1';
      const chosen = PHASES[Number(choice) - 1];
      phase = chosen ?? PHASES[0];
    }

    await rl.close();
  }

  date = date || today();
  phase = phase || PHASES[0];

  if (!/^\d+$/.test(String(week))) fail('Week must be a whole number.');
  if (!isValidIsoDate(date)) fail('Date must be a real calendar date in YYYY-MM-DD form.');
  if (!title) fail('A title is required.');

  const paddedWeek = String(week).padStart(2, '0');
  const filename = `${date}-week-${paddedWeek}-${slugify(title)}.md`;
  const filepath = path.join(LOG_DIR, filename);

  if (fs.existsSync(filepath)) {
    fail(`${filename} already exists. Delete it or choose a different title.`);
  }

  const existing = fs
    .readdirSync(LOG_DIR)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith('_'));

  const weekTaken = existing.find((file) => file.includes(`-week-${paddedWeek}-`));
  if (weekTaken) {
    fail(
      `Week ${paddedWeek} already exists as ${weekTaken}.\n` +
        '  Each published entry needs its own week number, or the build will fail.'
    );
  }

  const raw = fs.readFileSync(TEMPLATE, 'utf8');

  // Drop the "how to use this file" comment block that sits above `title:`.
  // Per-field comments further down are kept as writing prompts.
  const template = raw.replace(/^---\n(?:#.*\n|\n)*(?=title:)/, '---\n');

  // Replace only the frontmatter values; the body prompts are left intact.
  const content = template
    .replace(/^title:.*$/m, `title: "Week ${paddedWeek}: ${title}"`)
    .replace(/^date:.*$/m, `date: "${date}"`)
    .replace(/^week:.*$/m, `week: ${Number(week)}`)
    .replace(/^semester:.*$/m, `semester: "${semesterFor(date)}"`)
    .replace(/^phase:.*$/m, `phase: "${phase}"`)
    .replace(/^status:.*$/m, 'status: "in-progress"')
    .replace(/^hours:.*$/m, 'hours: 0')
    .replace(/^starter:.*$/m, 'starter: false');

  fs.writeFileSync(filepath, content, 'utf8');

  console.log(`\n✔ Created content/research-log/${filename}`);
  console.log('\nNext steps:');
  console.log('  1. Open the file and fill in the summary, tags, and each section.');
  console.log('  2. Set `hours` to the time you actually spent.');
  console.log('  3. Run `npm run dev` and check the entry at /research-log.');
  console.log('  4. Commit and push. Vercel publishes the update automatically.\n');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
