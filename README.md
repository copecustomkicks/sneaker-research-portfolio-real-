# Sneaker Materials and Manufacturing Research — Research Portfolio

Public research record for **Engineering a Sneaker from Materials Research to Functional
Prototype**, a University of Florida University Scholars Program project by Aidan Copeland,
mentored by Dr. Jessica Allen.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Statically generated, hosted
free on Vercel, with no database, no CMS, and no environment variables.

---

## Table of contents

1. [Project overview](#project-overview)
2. [Local setup](#local-setup)
3. [Weekly update instructions](#weekly-update-instructions)
4. [Adding images](#adding-images)
5. [Adding documents](#adding-documents)
6. [Editing structured data](#editing-structured-data)
7. [Deployment to Vercel](#deployment-to-vercel)
8. [Updating the live site](#updating-the-live-site)
9. [Custom domain](#custom-domain)
10. [Troubleshooting](#troubleshooting)
11. [Privacy](#privacy)
12. [Pre-launch checklist](#pre-launch-checklist)

---

## Project overview

The site has two kinds of content, and knowing which is which makes everything else simple.

**1. Weekly log entries — Markdown files.**
Each week is one file in `content/research-log/`. Add a file, the site finds it. There is no
index to update, no list to edit, and no build configuration to touch.

**2. Reference content — TypeScript data files.**
Materials, phases, processes, sources, prototypes, tests, design records, artifacts, and
deliverables live in `data/`. These are plain arrays of objects with typed fields. Editing them
is filling in blanks; the types catch mistakes before they reach the site.

### Site map

| Route           | What it holds                                                          |
| --------------- | ---------------------------------------------------------------------- |
| `/`             | Hero, progress dashboard, latest entry, section index                  |
| `/overview`     | Question, goal, scope, methodology, constraints, risks, timeline       |
| `/roadmap`      | The eleven provisional research phases with status and completion      |
| `/research-log` | Searchable, filterable list of every weekly entry                      |
| `/research-log/[slug]` | One entry, with previous and next navigation                    |
| `/anatomy`      | Component-by-component sneaker reference                               |
| `/materials`    | Filterable material records, card and comparison-table views           |
| `/materials/[slug]` | One material record in full                                        |
| `/processes`    | Manufacturing and assembly processes with safety flags                 |
| `/design`       | Requirements, decision matrices, BOM, risk register, decision records  |
| `/prototypes`   | Build records and component experiments                                |
| `/testing`      | Test records and possible evaluation areas                             |
| `/sources`      | Research library in APA 7 format                                       |
| `/gallery`      | Photographs, sketches, diagrams, and documents                         |
| `/about`        | Researcher background and contact                                      |
| `/deliverables` | Poster, thesis, slides, and other final outputs                        |
| `/integrity`    | Evidence labels, safety statement, AI assistance disclosure            |

### Folder structure

```
app/               Pages and routes (one folder per route)
components/        Reusable UI — cards, tables, badges, filters, hero graphic
content/
  research-log/    Weekly entries as Markdown, plus _template.md
data/              Research content as typed TypeScript files
lib/               Site config, Markdown rendering, metrics, helpers
types/             The content model — every record shape in one file
public/
  images/          Photographs, sketches, diagrams
  documents/       PDFs, CSVs, slide exports
scripts/           new-log.mjs, the weekly entry generator
```

### Where to change common things

| To change                          | Edit                                   |
| ---------------------------------- | -------------------------------------- |
| Your name, email, LinkedIn, résumé | `lib/site.ts`                          |
| Production URL for SEO             | `lib/site.ts` → `url`                  |
| Navigation labels and grouping     | `lib/site.ts` → `navigation`            |
| Overview page copy                 | `data/project.ts`                      |
| Phase status and completion        | `data/phases.ts`                       |
| Colors, spacing, type scale        | `tailwind.config.ts`, `app/globals.css` |

---

## Local setup

You need [Node.js 18.18 or newer](https://nodejs.org) and [Git](https://git-scm.com).
Check with `node -v`.

```bash
git clone https://github.com/YOUR-USERNAME/sneaker-research-portfolio.git
cd sneaker-research-portfolio
npm install
npm run dev
```

Open <http://localhost:3000>. The dev server reloads as you save.

### Commands

| Command             | What it does                                                  |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Local development server with hot reload                       |
| `npm run build`     | Production build — run this before pushing anything unusual    |
| `npm run start`     | Serve the production build locally                             |
| `npm run typecheck` | TypeScript check only, no build                                |
| `npm run lint`      | ESLint                                                         |
| `npm run check`     | Typecheck, then lint, then build — the full pre-push check     |
| `npm run new-log`   | Generate a new weekly entry from the template                  |

If `npm run build` passes locally, Vercel will build it too.

---

## Weekly update instructions

The whole loop is: add a file, fill it in, push. Five to ten minutes.

### Option A — the generator (fastest)

```bash
npm run new-log
```

It asks for the week number, date, title, and phase, then writes a correctly named file with
the frontmatter filled in. To skip the questions:

```bash
npm run new-log -- --week 3 --date 2026-09-14 --title "Benchmark teardown" --phase "Sneaker Anatomy and Benchmarking"
```

### Option B — copy the template by hand

1. **Duplicate** `content/research-log/_template.md` inside the same folder.
2. **Rename** the copy to `YYYY-MM-DD-week-NN-short-title.md`, for example
   `2026-09-14-week-03-benchmark-teardown.md`. The filename becomes the page address, so use
   lowercase, hyphens, and no spaces.
3. **Edit the frontmatter** at the top:

   ```yaml
   title: "Week 03: Benchmark teardown"
   date: "2026-09-14"
   week: 3
   semester: "Fall 2026"
   phase: "Sneaker Anatomy and Benchmarking"
   status: "complete"
   hours: 6
   summary: "Cut down two benchmark shoes and documented the bottom construction."
   tags:
     - benchmarking
     - construction
   ```

   Rules the build enforces: `title`, `date`, and `summary` must not be empty; `date` must be a
   real date in `YYYY-MM-DD` form; `week` and `hours` are numbers with **no quotation marks**;
   every published entry needs a unique week number. `phase` should match a phase name in
   `data/phases.ts` exactly so the entry links to the roadmap.

4. **Write the body.** The template has a heading for every section with prompts underneath.
   Delete any section you did not do this week — an empty heading looks worse than a short
   entry. Everything is standard Markdown:

   ```markdown
   ## Key findings

   - [Published] Cemented construction dominates athletic footwear assembly.
   - [Observed] Both teardowns used a strobel board rather than a lasting board.

   ![Cut section through the midsole showing two foam layers](/images/2026-09-14-midsole-section.jpg)

   | Material | Where it appeared | Note              |
   | -------- | ----------------- | ----------------- |
   | EVA foam | Midsole           | Two densities     |

   [Bond peel raw data (CSV)](/documents/test-01-bond-peel.csv)
   ```

5. **Check it locally** (optional but worth it): `npm run dev`, then open
   <http://localhost:3000/research-log>.

6. **Commit and push.**

   **GitHub Desktop:** open the app, review the changed files in the left panel, write a
   summary like `Add week 03 entry`, click **Commit to main**, then **Push origin**.

   **GitHub website:** go to your repository → `content/research-log` → **Add file** →
   **Create new file**, name it with the full filename, paste the content, then
   **Commit changes**.

   **Command line:**

   ```bash
   git add .
   git commit -m "Add week 03 entry"
   git push
   ```

7. **Vercel publishes automatically.** Every push to `main` starts a deployment. It usually
   takes under a minute.

8. **Verify the deployment.** Open your Vercel dashboard → the project → **Deployments**. The
   newest one should say **Ready**. Then open your live URL in a private browsing window (so you
   are not seeing a cached copy) and confirm the entry appears on `/research-log` and on the home
   page as the latest update.

### Restoring a previous version

Nothing is ever lost — Git keeps every version.

- **One file, on GitHub:** open the file → **History** → pick the earlier version →
  **View file** → copy the content back into the current file and commit.
- **Undo the last commit, in GitHub Desktop:** **Branch** menu → **Undo last commit** (before
  pushing), or right-click the commit in **History** → **Revert changes in commit** (after
  pushing), then push.
- **Roll back the live site without touching code:** Vercel dashboard → **Deployments** → find
  a deployment that worked → **⋯** → **Promote to Production**. The site reverts immediately.
- **Command line:** `git revert <commit-hash>` then `git push`.

---

## Adding images

1. Save the file in `public/images/`.
2. Name it lowercase with hyphens and a leading date: `2026-09-14-midsole-section.jpg`.
3. Reference it from the site root — the path starts at `/images/`, not `public/`:

   ```markdown
   ![Cut section through a midsole showing two distinct foam layers](/images/2026-09-14-midsole-section.jpg)
   ```

**Recommended sizes**

| Use                  | Format      | Longest edge | Target size   |
| -------------------- | ----------- | ------------ | ------------- |
| In-entry photograph  | JPG or WebP | 1600 px      | under 400 KB  |
| Featured image       | JPG or WebP | 2000 px      | under 600 KB  |
| Diagram or line art  | SVG or PNG  | —            | under 200 KB  |
| Social preview image | PNG         | 1200 × 630   | under 500 KB  |

**Compression.** Resize and compress before committing. Git stores every version of every file
forever, so a folder of 8 MB phone photos permanently bloats the repository and slows every
clone. Squoosh, ImageOptim, or your phone's export-at-medium-size option are all fine.

**Alt text is required.** Describe what is visible and what the reader should notice.
"Photo of shoe" is not alt text. "Cut section through a midsole showing two distinct foam
layers with a visible boundary" is.

**Missing images degrade gracefully.** A wrong path renders as a broken image tile rather than
crashing the build, and gallery records without a `src` render a labeled placeholder. Still,
check your paths — the build cannot catch a typo in a Markdown image path.

**Do not paste base64 image data** into Markdown files. It makes entries unreadable and the
repository enormous.

---

## Adding documents

1. Save the file in `public/documents/`.
2. Reference it from `/documents/`:

   ```markdown
   [Bond peel raw data (CSV)](/documents/test-01-bond-peel.csv)
   ```

   In a data file, use the same path:

   ```ts
   dataFile: '/documents/test-01-bond-peel.csv',
   ```

**Replacing a document without breaking its URL:** keep the filename identical and overwrite the
file, then commit. Anyone holding the old link keeps a working link, and Git preserves the
previous version. Only add a `-v2` suffix when both versions need to stay live at once.

**Keep files under about 10 MB.** Export posters and slide decks at screen resolution rather
than print resolution before committing.

---

## Editing structured data

Everything in `data/` is a typed array. To add a record, copy an existing one and change the
fields. Each file has an example in a comment at the top.

| File                  | Holds                                                            |
| --------------------- | ---------------------------------------------------------------- |
| `data/phases.ts`      | The eleven roadmap phases: status, dates, objectives, completion  |
| `data/materials.ts`   | Material records, categories, and preliminary scoring criteria    |
| `data/processes.ts`   | Manufacturing processes, safety flags, understanding level        |
| `data/anatomy.ts`     | Sneaker component reference                                      |
| `data/sources.ts`     | The research library, APA 7                                       |
| `data/prototypes.ts`  | Build records and component experiments (starts empty)            |
| `data/tests.ts`       | Test records and possible evaluation areas (records start empty)  |
| `data/design.ts`      | Requirements, matrices, decisions, reviews, risks, BOM, questions |
| `data/artifacts.ts`   | Gallery records (starts empty)                                    |
| `data/deliverables.ts`| Final deliverables and their status                               |
| `data/project.ts`     | All prose on the overview page and the standing statements        |
| `data/evidence.ts`    | The evidence-label vocabulary used across the site                |

**Updating progress.** The home-page dashboard computes everything from real content: entry
count and documented hours from the Markdown files, source count from non-placeholder records,
material count from records past `researching`, and prototype and test counts from those arrays.
The only number maintained by hand is each phase's `completion` in `data/phases.ts` — and the
site labels it as a project-management estimate, not a grade.

**If a data edit breaks the build**, the TypeScript error names the file, the line, and the
field. That is the safety net working: it prevents a malformed record from reaching the public
site.

---

## Deployment to Vercel

Free, no credit card, and no configuration files needed.

### First deployment

1. **Create a GitHub repository.** On [github.com](https://github.com), click **+** → **New
   repository**. Name it something like `sneaker-research-portfolio`. Choose **Public** (a public
   repository is what gives you a citable link and keeps Vercel free). Do not add a README —
   this project already has one.

2. **Add the project files.** With GitHub Desktop: **File** → **Add local repository** → select
   this folder → **Publish repository**. On the command line:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/sneaker-research-portfolio.git
   ```

3. **Commit and push.**

   ```bash
   git push -u origin main
   ```

4. **Sign in to Vercel.** Go to [vercel.com](https://vercel.com) and choose **Continue with
   GitHub**. The Hobby plan is free and sufficient.

5. **Import the GitHub repository.** Dashboard → **Add New** → **Project** → find your
   repository → **Import**. If it is not listed, click **Adjust GitHub App Permissions** and
   grant access to it.

6. **Confirm the detected settings.** Vercel should show Framework Preset **Next.js**, build
   command `next build`, output directory `.next`, install command `npm install`. Leave all of
   it alone. Add no environment variables — this project needs none.

7. **Deploy.** Click **Deploy** and wait — usually under two minutes for the first build.

8. **Copy the production URL.** It will look like
   `https://sneaker-research-portfolio.vercel.app`. Vercel shows it on the deployment screen and
   in **Settings** → **Domains**.

9. **Test it in a private browser window.** Check the home page, click into the research log,
   open an entry, use the search and filters, and open it on your phone. A private window
   guarantees you are seeing what a reviewer sees.

10. **Put the real URL in the site config.** Open `lib/site.ts`, set `url` to your production
    URL, commit, and push. This makes the sitemap, canonical URLs, and social preview correct.
    Then submit that URL wherever the program requires it.

---

## Updating the live site

Every push to `main` triggers a new deployment automatically. There is no publish button and no
manual step.

Pushing to any other branch creates a **preview deployment** at a temporary URL — useful for
trying a redesign without touching the live site. Merge the branch into `main` when you want it
published.

If a build fails, Vercel keeps the previous deployment live. A broken push never takes the site
down.

---

## Custom domain

Entirely optional. The `.vercel.app` URL is stable, permanent, and fine to submit.

If you want your own domain later: buy one from any registrar, then in Vercel go to
**Settings** → **Domains** → **Add**, and follow the DNS instructions. Update `url` in
`lib/site.ts` afterward. The `.vercel.app` URL keeps working.

---

## Troubleshooting

### Build failure

Read the first error, not the last — later errors are usually knock-on effects. Reproduce it
locally with `npm run build`; the same error appears with more context. In Vercel, the full log
is under **Deployments** → the failed deployment → **Building**.

### Invalid frontmatter

The build stops with a message naming the file and the field, for example:

```
Research log error in content/research-log/2026-09-14-week-03.md:
`date` must be a real calendar date in YYYY-MM-DD form (received: 09/14/2026).
```

Common causes:

- `date: "09/14/2026"` → must be `date: "2026-09-14"`
- `week: "3"` → must be `week: 3`, no quotes
- `hours: "6"` → must be `hours: 6`, no quotes
- `tags: planning, materials` → must be a list:

  ```yaml
  tags:
    - planning
    - materials
  ```

- A missing or empty `summary`
- A stray tab character — YAML does not allow tabs for indentation, use spaces

### Missing image

The page renders with a broken image tile. Check that the file is in `public/images/`, that the
Markdown path starts with `/images/` and not `public/images/`, and that the extension and
capitalization match exactly (`.JPG` and `.jpg` are different files on Vercel's Linux servers,
even though they look identical on macOS).

### Incorrect date

Dates render exactly as written, without timezone conversion. If an entry sorts wrongly, the
`date` field itself is wrong — entries sort newest first by date, then by week number.

### Duplicate slug or duplicate week

Two files cannot share a filename, and two published entries cannot share a week number. The
build names both files. Rename one, or set `draft: true` on the one you are still writing to
keep it off the site entirely.

### Vercel deployment failure

Check that `npm run build` passes locally first — that catches almost everything. If it passes
locally but fails on Vercel, the usual causes are a file that was never committed (check
`git status`), a filename case mismatch, or a dependency in `devDependencies` that is needed at
build time. The Vercel build log names the file.

### GitHub push problems

- *"Updates were rejected because the remote contains work that you do not have locally"* — you
  edited on the GitHub website and locally. Run `git pull` (or **Fetch origin** then **Pull** in
  GitHub Desktop), resolve any conflict, then push.
- *Authentication failed* — GitHub no longer accepts passwords over HTTPS. Use GitHub Desktop,
  or create a personal access token, or set up SSH keys.
- *A file is too large* — GitHub rejects files over 100 MB. Remove it, compress it, and commit
  again.

### Rolling back a deployment

Vercel dashboard → **Deployments** → find a deployment marked **Ready** that worked → **⋯** →
**Promote to Production**. The live site reverts in seconds without any Git operation. Fix the
code afterward at your own pace.

---

## Privacy

**Anything committed to a public GitHub repository is public — permanently.** Deleting a file in
a later commit does not remove it; it stays in the Git history and in anyone's existing clone.
Assume that anything you commit even once can be found forever.

Never commit:

- Private mentor correspondence, or any email quoted without permission
- Unpublished data belonging to someone else
- Confidential supplier pricing, terms, or contact details shared in confidence
- Personal phone numbers, home addresses, or student ID numbers
- Passwords, API keys, or `.env` files (already ignored by `.gitignore`)
- Anything under an NDA or embargo
- Photographs of other people without their consent

If something sensitive does get committed, treat it as disclosed: rotate any credential
immediately, and ask GitHub Support about history removal rather than assuming a delete commit
was enough.

A `/private/` folder is git-ignored for local-only notes. Files placed there stay on your
computer and never reach GitHub or the live site.

---

## Pre-launch checklist

Before submitting the URL:

- [ ] `npm run check` passes locally (typecheck, lint, build)
- [ ] `url` in `lib/site.ts` is your real production URL
- [ ] `email` in `lib/site.ts` is the address you want reviewers to use
- [ ] `linkedin` and `resume` in `lib/site.ts` are set or intentionally left blank
- [ ] The starter Week 00 entry is replaced or clearly still marked as starter content
- [ ] The overview page reflects your actual scope, not the seeded draft
- [ ] Your mentor's name is correct everywhere it appears
- [ ] `public/og-image.svg` replaced with a 1200 × 630 PNG named `og-image.png`, and the two
      `/og-image.svg` references in `app/layout.tsx` updated (most social platforms do not render
      SVG previews)
- [ ] The live site opens correctly in a private browser window
- [ ] The site works on your phone: no horizontal scrolling, menu opens, filters work
- [ ] Tab through the home page — focus outlines are visible on every link and button
- [ ] `/sitemap.xml` and `/robots.txt` load on the live domain
- [ ] Nothing private is in the repository — re-read the Privacy section above
- [ ] The Vercel deployment is marked **Ready** and the URL is recorded where the program
      requires it
