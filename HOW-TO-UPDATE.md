# How to update this site each week

Everything happens on github.com. No apps, no Terminal. About five minutes.

---

## Add a weekly entry

**1.** Go to your repo → open the **content** folder → open **research-log**

**2.** Click **Add file** → **Create new file**

**3.** In the filename box, type a name in this pattern:

```
2026-09-07-week-01-first-week.md
```

Date first, then the week number, then a couple of words. Lowercase, hyphens, no spaces. Ends in `.md`.

**4.** Paste this into the big box and edit it:

```
---
title: "Week 01: First week"
date: "2026-09-07"
week: 1
semester: "Fall 2026"
phase: "Project Definition and Background Research"
status: "complete"
hours: 4
summary: "One sentence a reviewer could read on its own."
tags:
  - research
---

## What I did

- 

## What I found

- 

## Problems

- 

## Next week

- 
```

**5.** Scroll down, click **Commit changes**, then **Commit changes** again in the popup.

**6.** Wait about a minute, then refresh your live site. The entry is there, and the home page updates itself.

---

## The four rules that matter

Everything between the two `---` lines is settings. Get these right and nothing breaks:

| Rule | Right | Wrong |
| --- | --- | --- |
| Dates are year-month-day, in quotes | `date: "2026-09-07"` | `date: "9/7/26"` |
| Numbers have no quotes | `week: 1` | `week: "1"` |
| Same for hours | `hours: 4` | `hours: "4"` |
| Each week number used once | week 1, then week 2 | two entries both week 1 |

Below the second `---`, write however you want. `##` makes a heading, `-` makes a bullet. Delete any section you did not do.

**Phase names** must match one of these exactly, or leave the phase as-is:

1. Project Definition and Background Research
2. Sneaker Anatomy and Benchmarking
3. Materials Research and Comparison
4. Manufacturing and Assembly Process Research
5. Performance Requirements and Concept Development
6. Material and Process Selection
7. CAD, Pattern Development, and Prototype Planning
8. Prototype Fabrication
9. Testing and Evaluation
10. Iteration and Final Prototype
11. Thesis, Presentation, and Oral Defense Preparation

---

## Add a photo

**1.** Repo → **public** folder → **images** folder

**2.** **Add file** → **Upload files** → drag the photo in → **Commit changes**

**3.** In your weekly entry, reference it like this — note the path starts at `/images/`:

```
![Two midsole layers with a visible boundary line](/images/my-photo.jpg)
```

The text in the brackets describes the photo for anyone who cannot see it. Write what someone should notice, not "photo of shoe."

Resize photos before uploading — under about 500 KB each. Phone photos straight from the camera are far bigger than they need to be.

---

## Move the progress bar

The percentages on the home page come from one file.

Repo → **data** → **phases.ts** → click the **pencil icon** to edit.

Find the phase you are working on and change two things:

```
status: 'in-progress',
completion: 30,
```

`status` can be `'not-started'`, `'in-progress'`, or `'complete'`. `completion` is a number from 0 to 100.

Keep the single quotes around words. Do not put quotes around numbers. Commit when done.

---

## Other quick edits

| To change | Go to |
| --- | --- |
| Your email or LinkedIn | `lib/site.ts` |
| Overview page wording | `data/project.ts` |
| Materials list | `data/materials.ts` |
| Sources list | `data/sources.ts` |

Click the file, click the pencil, edit, commit. Same pattern every time.

---

## If something breaks

**Your live site cannot go down.** If an update has a mistake in it, the site keeps showing the last working version. You will just not see your new entry.

To find out what went wrong: go to vercel.com → your project → **Deployments**. A failed one is marked in red. Click it and read the first error — it names the file and the problem, usually a date format or quotes around a number.

To undo an edit: on GitHub, open the file → **History** → click the version from before → copy the old text back in → commit.

To roll the whole site back: Vercel → **Deployments** → find one that worked → **⋯** → **Promote to Production**.
