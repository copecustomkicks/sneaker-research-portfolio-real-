---
title: "Week 08: Reverse engineering and manufacturing development — AF1 tech pack assembled"
date: "2026-10-15"
endDate: "2026-10-21"
week: 8
semester: "Fall 2026"
phase: "Reverse Engineering and Technical Documentation"
status: "complete"
hours: 25
summary: "Took the Nike Air Force 1 Low reverse tech pack from a 13-part outline to an assembled 15-page Rev 1 document — callouts, BOM, shell pattern, tooling, costing, workback calendar, wear-test plan, and factory release email — and worked through FASH 912's manufacturing-failure diagnosis and factory-communication exercises."
document: "/documents/air-force-1-low-reverse-tech-pack.pdf"
documentTitle: "Nike Air Force 1 Low — Reverse Tech Pack (Rev 1)"
documentMeta: "PDF · 15 pages · 4.7 MB"
documentNote: "Student reconstruction for Lasell University FASH 912, set in the shoe's original Fall 1983 context. Not a Nike document; costs, dimensions, and dates are reconstructed estimates."
photos:
  - src: "/images/af1-teardown-01-reference-pair.jpg"
    alt: "A worn all-white pair of Nike Air Force 1 Lows, front view, laced, on a wooden table"
    caption: "The reference pair before teardown: an all-white Air Force 1 Low, youth size 7Y, bought secondhand."
  - src: "/images/af1-teardown-02-laces-removed.jpg"
    alt: "Top view of one Air Force 1 with the laces removed and the tongue still in place"
    caption: "Laces and dubrae removed. Tongue still attached."
  - src: "/images/af1-teardown-03-tongue-removed.jpg"
    alt: "Top view of the shoe with the tongue cut away, showing a fabric board with printed markings inside and a red zigzag stitch at the heel end"
    caption: "Tongue cut away. Underneath is a fabric board with printed markings, joined to the upper by a red zigzag stitch."
  - src: "/images/af1-teardown-04-collar-lining.jpg"
    alt: "Close-up looking down into the heel of the shoe, showing the padded mesh collar lining and the red zigzag stitch around the board"
    caption: "Collar from above: padded mesh collar lining, with the red zigzag stitch running around the board's perimeter."
  - src: "/images/af1-teardown-05-heel-cut.jpg"
    alt: "The heel of the shoe cut open down the back seam and pulled apart by hand, exposing yellowed open-cell foam padding behind the collar lining"
    caption: "Heel cut open along the back seam. The collar padding is an open-cell foam, yellowed with age, with a thin stiff layer between it and the outer leather."
  - src: "/images/af1-teardown-06-split-exterior.jpg"
    alt: "One shoe sliced lengthwise through the toe and heel and opened flat, seen from the outside, with both Swoosh panels visible"
    caption: "One shoe sliced lengthwise through the toe, heel, and sole, then opened flat. Outside view."
  - src: "/images/af1-teardown-07-split-interior.jpg"
    alt: "Inside view of the sliced shoe opened flat: white mesh lining, a continuous red zigzag stitch along both edges, and the cut sole wall showing round cavities"
    caption: "Same shoe, inside view. The red zigzag stitch runs the full perimeter, and the cut sole wall shows a row of round cavities."
  - src: "/images/af1-teardown-08-sole-cross-section.jpg"
    alt: "Close-up of one half of the sliced shoe showing the sole in cross-section: a layer with a row of round cavities above a rubber layer with hollow rectangular chambers"
    caption: "Sole cross-section near the heel: a row of round cavities in the upper layer, over rubber with hollow rectangular chambers. No separate air unit is visible at this cut."
tags:
  - reverse-tech-pack
  - air-force-1
  - bill-of-materials
  - tooling
  - factory-communication
  - manufacturing
---

## Progress summary

This week I turned last week's Air Force 1 Low outline into a complete, assembled tech pack: a 15-page document covering the product brief, eight numbered technical sheets (blank CAD; component, material, and construction callouts; reinforcements and padding; shell pattern; tooling drawing; cost breakdown), a 33-line bill of materials, an 18-month workback calendar, a wear-test plan, and a factory release email. Every sheet uses the same title block (model, season, size, sheet, revision, date) so a factory can read it as one controlled document. The specs are still a reconstruction, but the package now holds together as something a developer could hand off, and I started the physical teardown of my reference pair to check it against. Alongside it, I finished FASH 912 exercises on diagnosing footwear failures and writing factory-facing corrections.

## Activities completed

- **Assembled the tech pack.** Organized the document set behind a document index, with consistent title blocks across all eight technical sheets (Rev 1, sample size U.S. Men's 9). Kept the product positioning in its original Fall 1983 basketball context — era competitors (adidas Top Ten, Converse Pro Leather), a low-top variation of the existing high-top last — rather than presenting it as a new shoe.
- **Callouts.** Identified and numbered 24 components across lateral, medial, heel, and top views, then mapped each to a material and a construction method (hole-punch perforations and eyelets, single vs. double stitching, overlays tucked under the heel tab, stitched cupsole attachment).
- **Reinforcements and padding.** Color-mapped the hidden structure: thermoplastic toe puff (0.5–0.8 mm), thermoplastic heel counter (1.0–1.5 mm), nonwoven eyestay reinforcement (0.4–0.8 mm), and collar, heel, and tongue padding.
- **Shell pattern and tooling.** Drew a top-down lay-flat shell pattern with dimensioned pieces and seam/overlap conventions, and a tooling drawing for the cupsole: outsole plan and side views, a section through the encapsulated heel Air-Sole unit, a two-cavity compression-mold layout, and a spec table (P20 steel, 1.5% shrinkage allowance, pin ejectors in non-visible areas).
- **BOM and costing.** Built a BOM with part IDs, material IDs, quantities, purchase units, and per-pair cost, totaling $9.00 in materials. Did a line-by-line review pass that caught a misaligned spec column and a skipped part number, and corrected both before finalizing. Rolled it into a cost breakdown: $9.00 materials + $0.50 packaging + $3.50 labor, overhead, and factory profit = $13.00 target FOB against a $65.00 retail / $32.50 wholesale price.
- **Calendar, wear test, and release.** Planned an 18-month workback with three review gates ending at an August 1983 retail launch; a wear test of 16 pairs (12 test + 4 reserve) running fit-and-feel, dynamic, short-term, and long-term phases with a change freeze during testing; and a factory email releasing the pack with sample-due dates for each gate.
- **Manufacturing problem-solving (FASH 912).** Worked through a development issues-and-solutions exercise: plate-to-upper bond weakness on a cleat (inspect the bond before choosing a fix), internal layer adhesion across sockliner, insole, and Strobel construction, toe-area rubbing (more toe puff reinforcement or localized padding), and heel pressure and slip (added heel padding combined with fit adjustments). These are proposed corrective actions from a course exercise, not tested fixes.
- **Teardown started.** Cut open my secondhand reference pair: removed the laces and tongue, opened the heel along the back seam, and sliced one shoe lengthwise through the sole. Photographed each step (below).
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

## Teardown of the reference pair

First look inside the physical shoe. These are observations from photos and handling only. Nothing has been measured yet, and I haven't confirmed what any material is.

{{photos}}

- **A board joined by a zigzag stitch.** A red zigzag stitch joins the upper to a fabric board around the full perimeter, which is consistent with Strobel construction. My tech pack lists a nonwoven insole/lasting board and doesn't call out this stitch, so that needs reconciling.
- **The collar padding is open-cell foam,** yellowed with age, with a thin stiffer layer between it and the outer leather at the heel.
- **The sole is mostly hollow.** At the lengthwise cut, the sole shows a row of round cavities over rubber with rectangular chambers. I didn't see a distinct encapsulated air unit at this cut, but this is a youth-size pair and a single cut, so that needs a second section through the heel center before I conclude anything.

## Evidence and artifacts

The full 15-page tech pack is viewable and downloadable at the top of this entry. Three of the core sheets:

![Material callouts sheet for the Air Force 1 Low: lateral, medial, heel, and top line drawings with 24 numbered components labeled by material — leather panels, polyester textile linings, flat woven polyester laces, polyester embroidery thread, rubber midsole and outsole, zinc-alloy dubrae, and hidden thermoplastic toe puff and heel counter reinforcements](/images/af1-material-callouts.jpg)

*Sheet 3 of 8 — material callouts.*

![Tooling drawing sheet for the Air Force 1 Low cupsole: outsole bottom and side views at 289 mm length, section A-A through the encapsulated heel Air-Sole unit, heel and toe details, tread pattern detail, a two-cavity compression mold layout, and a tooling specification table](/images/af1-tooling-drawing.jpg)

*Sheet 7 of 8 — tooling drawing.*

![Bill of materials table for the Air Force 1 Low with 33 lines across upper, interior, and bottom categories, listing part ID, material ID, CAD callout number, visibility, quantity per pair, purchase unit, cost per unit and per pair, proposed material spec, color, and estimated source, totaling $9.00 in materials](/images/af1-bill-of-materials.jpg)

*Bill of materials — 33 lines, $9.00 materials per pair. Sources are labeled illustrative.*

*Student coursework for Lasell University FASH 912, Footwear Product Development. Not affiliated with or endorsed by Nike. All costs, dimensions, sourcing, and dates are my reconstructed estimates, not original Nike factory records, and the launch email is a role-play exercise. No samples were made and nothing was sent to a factory.*

## Time

25 hours reported for Oct 15–21, from scheduled calendar blocks plus logged supplementary work — not an audited timesheet.

| Date | Activity | Hours |
| --- | --- | ---: |
| Oct 16 | Tech pack development | 5.75 |
| Oct 17 | Tech pack development | 4.50 |
| Oct 18 | Tech pack development and factory communication | 9.50 |
| Oct 19 | Tech pack submission work | 1.50 |
| — | Supplementary project work | 3.75 |
| **Total** | | **25.00** |

## Connection to my own sneaker

This pack is a separate exercise from my University Scholars Program shoe, but it's the documentation backbone for it: the same sheets — callouts, BOM, shell pattern, tooling, costing, wear-test plan — are what I'll need to produce for an original design. I didn't build or test any of my own prototype this week.

## Next steps

- Finish the teardown: measure panel and sole dimensions, cut a second section through the heel center, and record where the physical shoe matches or contradicts the tech pack.
- Split shared material IDs where one ID currently covers two different materials.
- Carry the tech-pack template forward into concept selection for my own shoe.
