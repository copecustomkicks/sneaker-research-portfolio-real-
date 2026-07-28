---
title: 'Week 00: Portfolio Setup and Research Planning'
date: '2026-08-24'
week: 0
semester: 'Fall 2026'
phase: 'Project Definition and Background Research'
status: 'complete'
hours: 0
summary: 'Established the research portfolio structure, the weekly documentation workflow, and a preliminary framing of the research question. No research findings yet.'
tags:
  - planning
  - research-question
  - documentation
starter: true
---

> **This is starter content.** It documents setting up the portfolio and the initial
> framing of the project. It is not a verified historical research record. Edit it,
> replace it, or delete it — it exists so the site has a working example of a real
> entry rather than an empty page.
>
> The `hours` value is set to `0` rather than an invented number. Put your real time
> in when you know it.

## Objectives for the week

- Establish a single public link that documents the project from the beginning.
- Set up a documentation structure that can be maintained weekly without becoming a burden.
- Draft a preliminary research question and project goal for mentor review.
- Define what counts as evidence on this site before any evidence exists.

## Activities completed

- Built this portfolio as a statically generated site with the research content stored as Markdown and typed data files.
- Created the content structure: research log, roadmap, sneaker anatomy reference, materials library, manufacturing process reference, design process records, prototype records, testing records, source library, and gallery.
- Wrote the weekly entry template with prompts for every section.
- Drafted the eleven-phase provisional roadmap.
- Set up the evidence-labeling vocabulary used across the site.

## Methods used

- Version-controlled documentation in a Git repository, with each weekly update as a commit. The commit history is itself a timestamped record of when work happened.
- Structured content model with typed records, so that incomplete or malformed research records fail loudly at build time instead of publishing silently.

## Key findings

No research findings this week. Setup only.

The one thing worth recording: the material and process reference pages were built with fields for
properties, sources, and evidence labels *before* any content was entered. Filling in a blank
"Source" field is a harder thing to skip than remembering to add citations later.

## Engineering decisions

- **[Decision] Use a public Git repository and a statically generated site as the research record.** Rationale: version history provides a timestamped, restorable log of every change, which is itself process evidence. Static generation means nothing can break at runtime during a review. Markdown keeps weekly updates fast enough to sustain. Alternatives considered: a hosted blog platform (less structural control, harder to export into the thesis) and a shared document folder (no public link, no inspectable history).
- **[Decision] Label every claim by evidence type.** Rationale: the distinction between a manufacturer's data-sheet value and an independently published one matters, and it is much easier to record at the time than to reconstruct at thesis-writing time.

## Evidence and artifacts

- This portfolio, at its first published version.
- The weekly entry template at `content/research-log/_template.md`.

No photographs, sketches, or measurements yet.

## Challenges and failures

Nothing failed this week, because nothing was built yet.

The real risk identified at this stage is documentation drift — logging the weeks that went
well and skipping the ones that did not. The entry template deliberately includes a
"Challenges and failures" heading so that skipping it is a visible omission rather than a
silent one.

## Mentor feedback

No mentor meeting has taken place yet. This section will be filled in after the first
meeting with Dr. Allen.

## Changes to the research plan

None. This is the first entry.

## Sources reviewed

None yet. The research library currently contains only structural templates, not
references — no citation appears on this site that has not been read directly.

## Reflection

The gap this project is trying to close is a specific one. Six years of customizing
sneakers has taught me a lot about how materials behave at the surface: how paint adheres
to different leathers and synthetics, where finishes crack under flex, how preparation
determines whether a job survives wear. All of that knowledge stops at the outer skin of a
finished shoe.

What I do not know is why the shoe underneath is built the way it is — why a particular foam
density, why a strobel rather than a board, why one adhesive system over another. Those are
engineering questions, and they have engineering answers I have not been taught.

The honest starting position: I can finish a shoe well and I do not yet know how to build
one.

## Next steps

- Meet with Dr. Allen to review the preliminary research question and scope.
- Begin the background reading list across footwear construction, materials, and manufacturing.
- Start the anatomy reference by identifying which components are genuinely unfamiliar.
- Investigate what equipment is accessible on campus, particularly sewing and any lasting capability. This constrains the whole design, so it should be answered early.
