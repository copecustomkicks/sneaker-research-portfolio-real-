import type { ManufacturingProcess } from '@/types';

/**
 * MANUFACTURING PROCESS REFERENCE — EDIT FREELY
 *
 * `procedureSummary` is a research-level description of what the step
 * accomplishes and in what order. It is deliberately NOT an operating
 * procedure. Any process with `requiresSupervision: true` must not be
 * attempted without trained supervision in an approved facility.
 *
 * `understanding` tracks your own current level honestly:
 *   'none' | 'reading' | 'familiar' | 'practiced'
 * Raise it when it is actually true, not when you plan for it to be.
 */
export const processes: ManufacturingProcess[] = [
  {
    id: 'last-selection',
    name: 'Last selection or development',
    stage: 'preparation',
    purpose:
      'Establish the three-dimensional form the shoe is built around. The last fixes internal volume, fit, and silhouette before any pattern exists.',
    requiredTools: ['Measuring tools', 'CAD software', '3D scanner or existing last', '3D printer or CNC (if fabricating)'],
    inputs: ['Foot measurements or an existing last', 'Target fit and use case'],
    procedureSummary:
      'A last is either sourced commercially or modeled digitally and fabricated. Key dimensions — length, ball girth, instep girth, heel width, toe spring, and heel height — are established first. Everything downstream, including the pattern, is derived from this surface.',
    criticalVariables: ['Ball girth', 'Instep girth', 'Heel width', 'Toe spring', 'Heel height', 'Dimensional stability under load'],
    commonDefects: ['Fit errors traceable to incorrect girth', 'Last deformation during lasting', 'Asymmetry between left and right'],
    safetyPrecautions: ['Standard workshop precautions if machining or printing', 'Eye protection when sanding a printed last'],
    requiresSupervision: false,
    qualityChecks: ['Measure the finished last against the intended dimensions', 'Confirm the surface is smooth enough to release cleanly'],
    relevanceToPrototype:
      'Foundational. No pattern work can begin until the last is settled. Whether a printed last survives lasting force is an open question for this project.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'pattern-development',
    name: 'Pattern development',
    stage: 'preparation',
    purpose:
      'Convert the three-dimensional last surface into flat pattern pieces that, once assembled, wrap the last without wrinkles or gaps.',
    requiredTools: ['Masking tape or shell material', 'Marking pens', 'Scissors or scalpel', 'Pattern card', 'CAD or vector software'],
    inputs: ['Finished last', 'Design sketch', 'Seam and lasting allowances'],
    procedureSummary:
      'The last is taped to create a shell, the design lines are drawn on the shell, the shell is cut and flattened to produce mean forms, and those forms are trued and split into individual pattern pieces. Seam allowance, lasting allowance, and material-specific stretch behavior are added afterward.',
    criticalVariables: ['Flattening distortion', 'Seam allowance', 'Lasting allowance', 'Material stretch direction', 'Grain alignment'],
    commonDefects: ['Wrinkling at the toe or heel', 'Pieces that do not meet at seams', 'Insufficient lasting allowance', 'Distorted symmetry'],
    safetyPrecautions: ['Cut away from the body with a fresh blade', 'Use a cutting mat'],
    requiresSupervision: false,
    qualityChecks: ['Test-fit paper or scrap patterns on the last before cutting good material', 'Verify mirrored pieces match'],
    relevanceToPrototype: 'Central. Expect several pattern revisions before a piece set fits cleanly.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'cutting',
    name: 'Material cutting',
    stage: 'cutting',
    purpose: 'Produce accurate pattern pieces from sheet material with clean, consistent edges.',
    requiredTools: ['Rotary cutter or scalpel', 'Cutting mat', 'Steel rule', 'Clicker press and dies (industrial route)'],
    inputs: ['Trued patterns', 'Sheet material'],
    procedureSummary:
      'Pieces are laid out respecting grain direction and material yield, then cut. Hand cutting is viable at prototype scale; production uses steel-rule dies in a clicker press.',
    criticalVariables: ['Blade sharpness', 'Grain orientation', 'Cutting accuracy', 'Nesting efficiency'],
    commonDefects: ['Edge fraying', 'Dimensional drift between mirrored pieces', 'Off-grain pieces that stretch unevenly'],
    safetyPrecautions: ['Sharp blades — cut away from the body, retract when idle', 'Cut-resistant glove on the non-cutting hand'],
    requiresSupervision: false,
    qualityChecks: ['Stack mirrored pieces and check alignment', 'Inspect edges for fraying'],
    relevanceToPrototype: 'Hand cutting is the plan. Die cutting is out of scope unless a shared facility already has suitable dies.',
    understanding: 'familiar',
    sourceIds: [],
  },
  {
    id: 'skiving',
    name: 'Skiving',
    stage: 'cutting',
    purpose:
      'Thin a material edge so that overlapped or folded seams do not create a bulky ridge that telegraphs through the upper.',
    requiredTools: ['Skiving knife', 'Bell skiving machine (industrial route)', 'Glass or stone edge'],
    inputs: ['Cut pieces', 'Defined skive width and angle'],
    procedureSummary:
      'Material along a seam or fold edge is thinned to a taper. Width and remaining thickness are set by the seam type. Hand skiving is possible on leather and some synthetics; machine skiving gives far more consistency.',
    criticalVariables: ['Skive width', 'Remaining edge thickness', 'Angle consistency', 'Blade sharpness'],
    commonDefects: ['Cutting through the piece', 'Uneven taper causing a visible line', 'Weakened edge tearing under lasting tension'],
    safetyPrecautions: ['Extremely sharp blades — hand skiving is a common injury source', 'Secure the workpiece; never hold it against your palm'],
    requiresSupervision: true,
    supervisionNote:
      'Bell skiving machines have an exposed rotating blade. Do not operate one without training and direct supervision from qualified staff.',
    qualityChecks: ['Measure remaining thickness at several points', 'Fold a test seam and check for a ridge'],
    relevanceToPrototype: 'Needed at the collar, eyestay, and any folded edge. Hand skiving will be trialed first.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'lamination',
    name: 'Lamination',
    stage: 'upper-assembly',
    purpose:
      'Bond layers — outer material to backing, foam to textile, reinforcement to upper — into a single workable composite before stitching.',
    requiredTools: ['Contact or water-based adhesive', 'Roller or press', 'Heat source for adhesive films'],
    inputs: ['Cut layers', 'Adhesive or adhesive film'],
    procedureSummary:
      'Adhesive is applied to one or both surfaces, allowed to reach the correct tack state, and the layers are mated under even pressure. Film adhesives are placed dry and activated with heat and pressure.',
    criticalVariables: ['Adhesive coverage', 'Open time', 'Pressure uniformity', 'Temperature', 'Cure time before handling'],
    commonDefects: ['Bubbles and voids', 'Edge lift', 'Adhesive bleed-through on light materials', 'Stiffened hand from over-application'],
    safetyPrecautions: [
      'FLAGGED. Solvent-based contact adhesives require ventilation and appropriate respiratory protection.',
      'Read the safety data sheet for the specific adhesive before use.',
      'Keep ignition sources away from solvent vapor.',
    ],
    requiresSupervision: true,
    supervisionNote:
      'Solvent adhesive work requires an approved, ventilated workspace and appropriate personal protective equipment.',
    qualityChecks: ['Peel a corner of a scrap sample to confirm bond', 'Inspect for bubbles under raking light'],
    relevanceToPrototype: 'Likely used for reinforcement, collar foam, and tongue construction.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'stitching',
    name: 'Stitching',
    stage: 'upper-assembly',
    purpose: 'Mechanically join upper pieces and attach reinforcement, trims, and linings.',
    requiredTools: ['Walking-foot or post-bed sewing machine', 'Appropriate needles', 'Bonded nylon or polyester thread', 'Edge guides'],
    inputs: ['Cut and prepared pieces', 'Thread', 'Marked stitch lines'],
    procedureSummary:
      'Pieces are aligned to marked lines and joined with lockstitch seams. Seam type — lapped, butted, zigzag, or French — is chosen for the load path and the materials involved. Stitch density and margin from the edge determine seam strength and tear resistance.',
    criticalVariables: ['Stitch length', 'Thread tension', 'Needle size and point type', 'Seam margin', 'Number of stitch rows'],
    commonDefects: ['Skipped stitches', 'Puckering', 'Needle damage to the substrate', 'Seam tear-out under lasting tension'],
    safetyPrecautions: ['Keep fingers clear of the needle path', 'Use the correct needle for the material to avoid breakage'],
    requiresSupervision: true,
    supervisionNote:
      'Industrial post-bed and walking-foot machines run fast and with high needle force. Get training before operating one unsupervised.',
    qualityChecks: ['Test seams on scrap in the same materials first', 'Pull-test a sample seam', 'Confirm consistent margin'],
    relevanceToPrototype:
      'Machine access is a key open question. Which seams are achievable will constrain the pattern design.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'upper-assembly',
    name: 'Upper assembly',
    stage: 'upper-assembly',
    purpose: 'Combine all stitched and laminated pieces into a complete three-dimensional upper ready for lasting.',
    requiredTools: ['Sewing machine', 'Adhesive', 'Eyelet setter', 'Hand tools'],
    inputs: ['Stitched sub-assemblies', 'Reinforcements', 'Lining', 'Eyelets or hardware'],
    procedureSummary:
      'Sub-assemblies are joined in a planned sequence — typically vamp and quarters first, then lining, then closures and reinforcement — so that each seam remains reachable when it needs to be sewn. Sequence errors are usually unrecoverable without unpicking.',
    criticalVariables: ['Assembly sequence', 'Symmetry between left and right', 'Reinforcement placement', 'Lining alignment'],
    commonDefects: ['Twisted or asymmetric uppers', 'Trapped lining', 'Misplaced reinforcement', 'Seams made unreachable by an earlier step'],
    safetyPrecautions: ['As per stitching and lamination'],
    requiresSupervision: false,
    qualityChecks: ['Dry-fit the upper on the last before lasting', 'Compare left and right', 'Verify all internal seams lie flat'],
    relevanceToPrototype: 'Write and dry-run the assembly sequence before cutting good material.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'strobel-construction',
    name: 'Strobel construction',
    stage: 'lasting',
    purpose:
      'Close the bottom of the upper by stitching a textile board around its perimeter, producing a flexible sock-like assembly ready for lasting.',
    requiredTools: ['Strobel machine (overlock-type)', 'Strobel board material', 'Heavy thread'],
    inputs: ['Assembled upper', 'Cut strobel board'],
    procedureSummary:
      'The strobel board is stitched to the lasting margin of the upper with an overlock-type seam running around the full perimeter. The result is flexible and lighter than a board-lasted alternative.',
    criticalVariables: ['Seam allowance', 'Stitch density', 'Board alignment to the upper centerline', 'Tension consistency'],
    commonDefects: ['Puckering around the toe', 'Board offset causing a twisted shoe', 'Stitch tear-out during lasting'],
    safetyPrecautions: ['Standard sewing machine precautions'],
    requiresSupervision: true,
    supervisionNote:
      'Requires a strobel or overlock machine. If none is available, board lasting is the fallback and the design must change accordingly.',
    qualityChecks: ['Check centerline alignment', 'Inspect the seam under tension'],
    relevanceToPrototype: 'Machine access determines whether this route is available at all. Decide before finalizing the pattern.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'lasting',
    name: 'Lasting',
    stage: 'lasting',
    purpose:
      'Pull the upper over the last and secure it, forcing the flat pattern into its final three-dimensional shape.',
    requiredTools: ['Lasting pliers', 'Tacks or adhesive', 'Last', 'Lasting machine (industrial route)'],
    inputs: ['Assembled upper', 'Last', 'Insole board or strobel-closed bottom'],
    procedureSummary:
      'The upper is centered on the last and drawn down at the toe, heel, and waist in a controlled sequence, with tension balanced side to side. The lasting margin is secured to the bottom with adhesive or tacks and left to set before the sole is attached.',
    criticalVariables: ['Tension balance', 'Centering', 'Pull sequence', 'Adhesive set time', 'Wrinkle control at the toe'],
    commonDefects: ['Wrinkles at the toe or heel', 'Off-center uppers', 'Uneven tension producing a twisted shoe', 'Torn lasting margin'],
    safetyPrecautions: [
      'Lasting pliers apply high force — keep hands clear of the pull path',
      'FLAGGED. Industrial lasting machines are high-force powered equipment.',
    ],
    requiresSupervision: true,
    supervisionNote:
      'Machine lasting must not be attempted without training. Hand lasting is the intended route for this project.',
    qualityChecks: ['View the lasted shoe from the rear for heel centering', 'Check for wrinkles under raking light', 'Compare left and right'],
    relevanceToPrototype:
      'Likely the hardest manual step. Plan several practice attempts on scrap uppers before the real one.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'sole-preparation',
    name: 'Sole preparation',
    stage: 'sole-attachment',
    purpose: 'Shape and prepare the midsole and outsole components so they mate cleanly with the lasted upper.',
    requiredTools: ['Cutting tools', 'Sanding equipment', 'Templates', 'Measuring tools'],
    inputs: ['Foam and rubber stock', 'Sole templates derived from the last bottom'],
    procedureSummary:
      'Sole components are cut to the bottom profile of the lasted shoe, stacked or laminated as designed, and shaped. The mating surface is trued so it makes full contact with no gaps.',
    criticalVariables: ['Profile accuracy', 'Flatness of the mating surface', 'Stack height consistency', 'Left/right symmetry'],
    commonDefects: ['Gaps at the waist', 'Uneven stack height', 'Profile mismatch to the upper'],
    safetyPrecautions: ['Sanding produces fine dust — use extraction, eye protection, and a respirator'],
    requiresSupervision: false,
    qualityChecks: ['Dry-fit against the lasted upper', 'Measure stack height at fixed points', 'Check for rock on a flat surface'],
    relevanceToPrototype: 'Directly determines whether the sole bond has full contact area.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'surface-treatment',
    name: 'Surface treatment',
    stage: 'sole-attachment',
    purpose:
      'Prepare bonding surfaces so adhesive can achieve full strength. Poor surface preparation is one of the most common causes of sole bond failure.',
    requiredTools: ['Roughing wheel or abrasive', 'Cleaner', 'Primer', 'Lint-free cloths'],
    inputs: ['Lasted upper margin', 'Sole components', 'Substrate-appropriate primer'],
    procedureSummary:
      'Bonding surfaces are mechanically roughed to increase surface area, cleaned to remove mold release and contamination, and primed where the substrate requires it. Correct primer selection is substrate-specific and must come from the adhesive supplier documentation.',
    criticalVariables: ['Roughing depth and coverage', 'Cleanliness', 'Primer selection', 'Flash-off time before cement'],
    commonDefects: ['Bond failure from missed roughing', 'Contaminated surfaces', 'Wrong primer for the substrate'],
    safetyPrecautions: [
      'FLAGGED. Cleaners and primers are usually solvent-based — ventilation and appropriate personal protective equipment required.',
      'Roughing produces dust — use extraction and eye protection.',
      'Follow the safety data sheet for every chemical used.',
    ],
    requiresSupervision: true,
    supervisionNote: 'Solvent primer and cleaner work requires an approved ventilated workspace.',
    qualityChecks: ['Visually confirm uniform roughing over the full bond area', 'Run a peel test on prepared scrap before committing'],
    relevanceToPrototype: 'A high-priority early experiment — bond strength testing should begin with surface preparation variables.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'adhesive-application',
    name: 'Adhesive application',
    stage: 'sole-attachment',
    purpose: 'Apply cement evenly to both mating surfaces at the correct coverage and bring it to the right state for bonding.',
    requiredTools: ['Brushes or applicators', 'Adhesive', 'Timer', 'Heat activation source'],
    inputs: ['Prepared surfaces', 'Cement', 'Product data sheet'],
    procedureSummary:
      'Cement is applied in a thin even coat to both surfaces, allowed to dry for the time given in the product data sheet, and heat-activated if the system requires it. The parts are then mated within the specified open time.',
    criticalVariables: ['Coat thickness and uniformity', 'Number of coats', 'Drying time', 'Activation temperature', 'Open time'],
    commonDefects: ['Starved areas', 'Adhesive squeeze-out onto visible surfaces', 'Mating outside the open time', 'Trapped solvent from an under-dried coat'],
    safetyPrecautions: [
      'FLAGGED. Solvent-based cement. Ventilation, gloves, eye protection, and organic-vapor respiratory protection required.',
      'No ignition sources in the work area.',
      'Follow the product safety data sheet exactly.',
    ],
    requiresSupervision: true,
    supervisionNote: 'Requires an approved ventilated workspace and appropriate personal protective equipment.',
    qualityChecks: ['Confirm even coverage under good light', 'Follow the data sheet timings with a timer, not by feel'],
    relevanceToPrototype: 'The governing joint of the whole assembly. Process discipline matters more here than almost anywhere else.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'cemented-construction',
    name: 'Cemented construction',
    stage: 'sole-attachment',
    purpose:
      'Join the sole unit to the lasted upper using adhesive alone. The dominant construction method in modern athletic footwear.',
    requiredTools: ['Cement system', 'Press or clamps', 'Last (kept in the shoe during pressing)'],
    inputs: ['Lasted upper with prepared margin', 'Prepared sole unit'],
    procedureSummary:
      'The prepared and cemented sole is aligned to the lasted upper and mated, then pressed while the last remains inside to hold the shape. Alignment must be right on the first attempt — a mated cement bond generally cannot be repositioned.',
    criticalVariables: ['Alignment', 'Press pressure and duration', 'Full-contact coverage', 'Cure time before removing the last'],
    commonDefects: ['Misaligned sole', 'Edge gapping', 'Voids where pressure did not reach', 'Delamination under flex'],
    safetyPrecautions: ['As per adhesive application', 'Pressing equipment produces pinch points'],
    requiresSupervision: true,
    supervisionNote: 'Powered sole presses are high-force equipment requiring training.',
    qualityChecks: ['Inspect the full bond line for gaps', 'Flex the finished shoe and re-inspect', 'Check sole centering from the rear'],
    relevanceToPrototype: 'The intended construction method for this project.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'pressing',
    name: 'Pressing',
    stage: 'sole-attachment',
    purpose: 'Apply uniform pressure across the bond line so adhesive achieves full contact and develops its strength.',
    requiredTools: ['Sole press (industrial route)', 'Clamps, bands, or weights (accessible route)'],
    inputs: ['Mated shoe assembly'],
    procedureSummary:
      'Pressure is applied evenly across the bond for the duration given in the adhesive data sheet. Where a press is unavailable, banding or clamping can substitute, but coverage and uniformity are much harder to guarantee.',
    criticalVariables: ['Pressure magnitude', 'Pressure uniformity', 'Duration', 'Coverage at the toe and heel curves'],
    commonDefects: ['Voids at high-curvature areas', 'Marking from concentrated clamp pressure', 'Under-pressed bonds that fail later'],
    safetyPrecautions: ['FLAGGED. Powered presses create serious crush hazards.'],
    requiresSupervision: true,
    supervisionNote: 'Do not operate a powered sole press without training and supervision.',
    qualityChecks: ['Inspect the bond line after pressing', 'Peel-test scrap pressed the same way'],
    relevanceToPrototype: 'Likely to use clamps and bands. Whether that gives adequate uniformity is an open question worth testing.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'molding',
    name: 'Molding',
    stage: 'sole-attachment',
    purpose:
      'Form midsole or outsole geometry in a mold, allowing tuned thickness, tread, and density that cutting cannot achieve.',
    requiredTools: ['Compression or injection molding equipment', 'Tooling', 'Temperature and pressure control'],
    inputs: ['Polymer or foam feedstock', 'Mold tooling'],
    procedureSummary:
      'Material is placed or injected into a heated mold, held under pressure and temperature, then cooled and demolded. Tooling design, cycle parameters, and material behavior are tightly coupled.',
    criticalVariables: ['Mold temperature', 'Pressure', 'Cycle time', 'Material expansion behavior', 'Tooling design'],
    commonDefects: ['Short shots', 'Flash', 'Density variation', 'Warping on cooling'],
    safetyPrecautions: [
      'FLAGGED. High temperature and high pressure industrial equipment.',
      'Requires formal training, machine-specific procedures, and supervision.',
    ],
    requiresSupervision: true,
    supervisionNote:
      'Out of scope for this project. Documented here for completeness because it explains what commercial midsoles can do that a cut-sheet midsole cannot.',
    qualityChecks: ['Dimensional inspection', 'Density check', 'Visual inspection for voids'],
    relevanceToPrototype:
      'Explicitly out of scope. Included so the limitations of the cut-sheet approach can be discussed against a real alternative.',
    understanding: 'reading',
    sourceIds: [],
  },
  {
    id: 'finishing',
    name: 'Finishing',
    stage: 'finishing',
    purpose: 'Clean, trim, and dress the completed shoe — removing adhesive residue, trimming threads, and treating edges.',
    requiredTools: ['Cleaners', 'Trimming tools', 'Edge treatments', 'Soft brushes'],
    inputs: ['Bonded shoe assembly'],
    procedureSummary:
      'The last is removed, residual adhesive is cleaned from visible surfaces, loose threads are trimmed, edges are dressed, and the shoe is laced and inspected. This step is where a technically sound build either reads as finished or does not.',
    criticalVariables: ['Cleaner compatibility with each material', 'Edge treatment consistency', 'Timing relative to full cure'],
    commonDefects: ['Cleaner damaging or discoloring the upper', 'Visible adhesive haze', 'Damaged edges from over-trimming'],
    safetyPrecautions: ['Test every cleaner on a scrap of the same material first', 'Ventilate when using solvent cleaners'],
    requiresSupervision: false,
    qualityChecks: ['Full visual inspection under strong light', 'Compare left and right'],
    relevanceToPrototype:
      'Directly transferable from Cope Custom Kicks work — surface preparation, masking, and finishing are familiar territory.',
    understanding: 'practiced',
    sourceIds: [],
  },
  {
    id: 'inspection-qc',
    name: 'Inspection and quality control',
    stage: 'finishing',
    purpose: 'Verify the finished shoe against its design requirements and record every defect found, including cosmetic ones.',
    requiredTools: ['Measuring tools', 'Scale', 'Checklist', 'Good lighting', 'Camera'],
    inputs: ['Finished prototype', 'Design requirements list'],
    procedureSummary:
      'The shoe is checked against a written checklist covering dimensions, mass, symmetry, bond line integrity, seam quality, and finish. Every deviation is photographed and logged whether or not it is considered acceptable.',
    criticalVariables: ['Checklist completeness', 'Measurement repeatability', 'Consistency between inspections'],
    commonDefects: ['Recording only the defects that were expected', 'Inconsistent measurement points between iterations'],
    safetyPrecautions: ['None beyond normal handling'],
    requiresSupervision: false,
    qualityChecks: ['Use identical measurement points across every iteration so comparisons are valid'],
    relevanceToPrototype:
      'Defines what "done" means for each iteration and produces the evidence the thesis will be built from.',
    understanding: 'familiar',
    sourceIds: [],
  },
];

export const processStages: { id: ManufacturingProcess['stage']; label: string; description: string }[] = [
  { id: 'preparation', label: 'Preparation', description: 'Establishing the form and the patterns before anything is cut.' },
  { id: 'cutting', label: 'Cutting and edge prep', description: 'Turning sheet stock into accurate pieces.' },
  { id: 'upper-assembly', label: 'Upper assembly', description: 'Joining pieces into a three-dimensional upper.' },
  { id: 'lasting', label: 'Lasting', description: 'Forcing the flat assembly onto the last.' },
  { id: 'sole-attachment', label: 'Sole attachment', description: 'Preparing surfaces and bonding the sole unit.' },
  { id: 'finishing', label: 'Finishing and inspection', description: 'Cleaning, dressing, and verifying the finished shoe.' },
];

export const understandingLabels: Record<ManufacturingProcess['understanding'], string> = {
  none: 'Not yet studied',
  reading: 'Reading about it',
  familiar: 'Familiar, not practiced',
  practiced: 'Practiced',
};

export function getProcess(id: string): ManufacturingProcess | undefined {
  return processes.find((process) => process.id === id);
}
