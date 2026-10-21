---
title: "Week 08: Reverse engineering and manufacturing development — AF1 tech pack assembled"
date: "2026-10-15"
endDate: "2026-10-21"
week: 8
semester: "Fall 2026"
phase: "Reverse Engineering and Technical Documentation"
status: "complete"
hours: 24.25
summary: "Took the Nike Air Force 1 Low reverse tech pack from a 13-part outline to an assembled 15-page Rev 1 document — callouts, BOM, shell pattern, tooling, costing, workback calendar, wear-test plan, and factory release email — and worked through FASH 912's manufacturing-failure diagnosis and factory-communication exercises."
document: "/documents/air-force-1-low-reverse-tech-pack.pdf"
documentTitle: "Nike Air Force 1 Low — Reverse Tech Pack (Rev 1)"
documentMeta: "PDF · 15 pages · 4.7 MB"
documentNote: "Student reconstruction for Lasell University FASH 912, set in the shoe's original Fall 1983 context. Not a Nike document; costs, dimensions, and dates are reconstructed estimates."
tags:
  - reverse-tech-pack
  - air-force-1
  - bill-of-materials
  - tooling
  - factory-communication
  - manufacturing
---

## Progress summary

This week I turned last week's Air Force 1 Low outline into a complete, assembled tech pack: a 15-page document covering the product brief, eight numbered technical sheets (blank CAD; component, material, and construction callouts; reinforcements and padding; shell pattern; tooling drawing; cost breakdown), a 33-line bill of materials, an 18-month workback calendar, a wear-test plan, and a factory release email. Every sheet uses the same title block (model, season, size, sheet, revision, date) so a factory can read it as one controlled document. The work stays a reconstruction — it hasn't been checked against my physical reference pair yet — but it now holds together as a package a developer could hand off. Alongside it, I finished FASH 912 exercises on diagnosing footwear failures and writing factory-facing corrections.

## Activities completed

- **Assembled the tech pack.** Organized the document set behind a document index, with consistent title blocks across all eight technical sheets (Rev 1, sample size U.S. Men's 9). Kept the product positioning in its original Fall 1983 basketball context — era competitors (adidas Top Ten, Converse Pro Leather), a low-top variation of the existing high-top last — rather than presenting it as a new shoe.
- **Callouts.** Identified and numbered 24 components across lateral, medial, heel, and top views, then mapped each to a material and a construction method (hole-punch perforations and eyelets, single vs. double stitching, overlays tucked under the heel tab, stitched cupsole attachment).
- **Reinforcements and padding.** Color-mapped the hidden structure: thermoplastic toe puff (0.5–0.8 mm), thermoplastic heel counter (1.0–1.5 mm), nonwoven eyestay reinforcement (0.4–0.8 mm), and woven collar/heel padding.
- **Shell pattern and tooling.** Drew a top-down lay-flat shell pattern with dimensioned pieces and seam/overlap conventions, and a tooling drawing for the cupsole: outsole plan and side views, a section through the encapsulated heel Air-Sole unit, a two-cavity compression-mold layout, and a spec table (P20 steel, 1.5% shrinkage allowance, pin ejectors in non-visible areas).
- **BOM and costing.** Built a BOM with part IDs, material IDs, quantities, purchase units, and per-pair cost, totaling $9.00 in materials. Rolled it into a cost breakdown: $9.00 materials + $0.50 packaging + $3.50 labor, overhead, and factory profit = $13.00 target FOB against a $65.00 retail / $32.50 wholesale price.
- **Calendar, wear test, and release.** Planned an 18-month workback with three review gates ending at an August 1983 retail launch; a wear test of 16 pairs (12 test + 4 reserve) running fit-and-feel, dynamic, short-term, and long-term phases with a change freeze during testing; and a factory email releasing the pack with sample-due dates for each gate.
- **Manufacturing problem-solving (FASH 912).** Worked through a development issues-and-solutions exercise: plate-to-upper bond weakness on a cleat (inspect the bond before choosing a fix), internal layer adhesion across sockliner, insole, and Strobel construction, toe-area rubbing (more toe puff reinforcement or localized padding), and heel pressure and slip (added heel padding combined with fit adjustments). These are proposed corrective actions from a course exercise, not tested fixes.
- **Factory communication.** Wrote revision-style communication that separates suspected cause from confirmed finding and organizes each request around what the factory has to execute.

## Key findings

- **Cost discipline is a design constraint, not an afterthought.** At a $13.00 FOB target, materials take about 69% and the upper alone about 35%. Small upper-material choices move the whole price.
- **The hidden parts carry the fit.** Toe puff, heel counter, and eyestay reinforcement don't show on the finished shoe, but they're where several of the course's failure cases (toe rubbing, heel slip) actually start.
- **A tooling drawing forces decisions a sketch never does.** Shrinkage allowance, cavity layout, and ejector placement all had to be stated before the bottom unit could be called documented.
- **Diagnose before you fix.** Every failure case in the exercise had more than one plausible cause; picking the corrective action depends on identifying the failure mechanism first.

## Engineering decisions

- Kept one title block and revision scheme across every sheet so the pack reads as a single controlled document, not separate drawings.
- Labeled uncertain specs explicitly (e.g., midsole foam composition "unconfirmed," Air-Sole supply origin "unverified," secondary colorways "pending verification") instead of filling gaps with guesses.
- Kept this pack's structure as the template I'll reuse to document my own prototype later in the project.

## Evidence and artifacts

The full tech pack is viewable and downloadable at the top of this entry. Two of the technical sheets:

![Material callouts sheet for the Air Force 1 Low: lateral, medial, heel, and top line drawings with 24 numbered components labeled by material — leather panels, polyester textile linings, flat woven polyester laces, polyester embroidery thread, rubber midsole and outsole, zinc-alloy dubrae, and hidden thermoplastic toe puff and heel counter reinforcements](/images/af1-material-callouts.jpg)

*Sheet 3 of 8 — material callouts.*

![Tooling drawing sheet for the Air Force 1 Low cupsole: outsole bottom and side views at 289 mm length, section A-A through the encapsulated heel Air-Sole unit, heel and toe details, tread pattern detail, a two-cavity compression mold layout, and a tooling specification table](/images/af1-tooling-drawing.jpg)

*Sheet 7 of 8 — tooling drawing.*

*Student coursework for Lasell University FASH 912, Footwear Product Development. Not affiliated with or endorsed by Nike. All costs, dimensions, sourcing, and dates are my reconstructed estimates, not original Nike factory records, and the launch email is a role-play exercise. No samples were made and nothing was sent to a factory.*

## Time

24.25 hours reported for Oct 15–21, from scheduled calendar blocks plus logged supplementary work — not an audited timesheet.

| Date | Activity | Hours |
| --- | --- | ---: |
| Oct 16 | Tech pack development | 5.75 |
| Oct 17 | Tech pack development | 4.50 |
| Oct 18 | Tech pack development and factory communication | 9.50 |
| Oct 19 | Tech pack submission work | 1.50 |
| — | Supplementary project work | 3.00 |
| **Total** | | **24.25** |

## Connection to my own sneaker

This pack is a separate exercise from my University Scholars Program shoe, but it's the documentation backbone for it: the same sheets — callouts, BOM, shell pattern, tooling, costing, wear-test plan — are what I'll need to produce for an original design. I didn't build or test any of my own prototype this week.

## Next steps

- Examine the physical Air Force 1 reference pair and record what matches or contradicts the reconstructed specs.
- Review the BOM line by line for consistency between parts, material IDs, and material specs.
- Carry the tech-pack template forward into concept selection for my own shoe.
