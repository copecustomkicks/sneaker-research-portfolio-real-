import type { AnatomyComponent } from '@/types';

/**
 * SNEAKER ANATOMY REFERENCE — EDIT FREELY
 *
 * These entries are descriptive and deliberately contain no quantitative
 * claims. Numbers belong in a Material record with a citation, or in a
 * TestRecord with data behind them. If you add a number here, add a source.
 *
 * `relatedFindings` should stay empty until this project produces a finding.
 */
export const anatomy: AnatomyComponent[] = [
  {
    id: 'upper',
    name: 'Upper',
    group: 'upper',
    function:
      'The entire structure above the sole unit. Wraps the foot, holds it over the footbed, and carries the closure system that adjusts fit.',
    commonMaterials: ['Engineered mesh', 'Knit textile', 'Synthetic leather', 'Natural leather', 'Woven textile'],
    relevantProperties: ['Tensile strength', 'Stretch and recovery', 'Breathability', 'Abrasion resistance', 'Weight'],
    commonProcesses: ['Pattern development', 'Cutting', 'Skiving', 'Lamination', 'Stitching', 'Lasting'],
    designTradeoffs: [
      'Breathability generally works against structure and weather resistance.',
      'Fewer panels reduce seam count and weight but demand more from each material.',
      'Stretch improves fit accommodation but reduces lockdown under lateral load.',
    ],
    questionsToInvestigate: [
      'How many panels does a buildable upper actually need at this scale?',
      'Where does reinforcement have to go if the base textile is unstructured?',
      'Which seam types are achievable on a domestic or light industrial machine?',
    ],
  },
  {
    id: 'vamp',
    name: 'Vamp',
    group: 'upper',
    function:
      'The forward section of the upper covering the instep and toes. Flexes with every step, so it sees the highest cycle count of any upper panel.',
    commonMaterials: ['Mesh', 'Knit', 'Leather', 'Synthetic leather'],
    relevantProperties: ['Flex fatigue resistance', 'Stretch', 'Crease recovery', 'Breathability'],
    commonProcesses: ['Cutting', 'Skiving', 'Stitching', 'Lasting'],
    designTradeoffs: [
      'Stiffer vamp materials hold shape but crease sharply at the flex point.',
      'Perforation adds airflow but introduces tear initiation points.',
    ],
    questionsToInvestigate: [
      'Where does the natural flex line fall relative to the pattern seams?',
      'Does creasing behavior differ enough between candidate materials to drive selection?',
    ],
  },
  {
    id: 'quarter',
    name: 'Quarter',
    group: 'upper',
    function:
      'The side and rear panels of the upper. Provides lateral containment and anchors the heel structure.',
    commonMaterials: ['Leather', 'Synthetic leather', 'Woven textile', 'Knit with reinforcement'],
    relevantProperties: ['Tensile strength', 'Dimensional stability', 'Abrasion resistance'],
    commonProcesses: ['Cutting', 'Stitching', 'Lamination', 'Lasting'],
    designTradeoffs: [
      'Overlays add lateral support at a weight and breathability cost.',
      'A one-piece quarter reduces seams but complicates the flat pattern.',
    ],
    questionsToInvestigate: [
      'How much lateral support does the intended use case actually require?',
      'Can reinforcement be laminated rather than stitched to reduce bulk?',
    ],
  },
  {
    id: 'tongue',
    name: 'Tongue',
    group: 'upper',
    function:
      'Sits under the lacing to distribute closure pressure across the instep and close the throat opening.',
    commonMaterials: ['Foam-backed textile', 'Mesh', 'Knit', 'Synthetic leather'],
    relevantProperties: ['Compression cushioning', 'Thickness', 'Breathability', 'Shape retention'],
    commonProcesses: ['Lamination', 'Stitching', 'Edge binding'],
    designTradeoffs: [
      'Thicker padding spreads lace pressure but raises the instep and can reduce lockdown.',
      'Gusseted tongues stay centered but add material and complicate assembly.',
    ],
    questionsToInvestigate: [
      'Is a gusset worth the added assembly complexity at prototype scale?',
      'What backing material gives useful padding without excessive bulk?',
    ],
  },
  {
    id: 'eyestay',
    name: 'Eyestay',
    group: 'upper',
    function:
      'The reinforced band carrying the lace holes. Transfers closure tension from the laces into the upper.',
    commonMaterials: ['Leather', 'Synthetic leather', 'Reinforced textile', 'Webbing'],
    relevantProperties: ['Tear strength', 'Tensile strength', 'Stiffness'],
    commonProcesses: ['Lamination', 'Stitching', 'Eyelet setting', 'Die cutting'],
    designTradeoffs: [
      'Metal eyelets resist tearing but add weight and a hard edge against the lace.',
      'Reinforced punched holes are lighter but rely entirely on the substrate.',
    ],
    questionsToInvestigate: [
      'What reinforcement is needed for punched holes to survive repeated lacing?',
      'How does eyestay geometry change how the throat closes over different foot volumes?',
    ],
  },
  {
    id: 'laces',
    name: 'Laces',
    group: 'upper',
    function:
      'The adjustable closure. Converts pull tension into distributed clamping force over the instep.',
    commonMaterials: ['Flat woven textile', 'Round braided textile', 'Waxed cotton'],
    relevantProperties: ['Tensile strength', 'Knot security', 'Surface friction', 'Elongation'],
    commonProcesses: ['Braiding or weaving (sourced, not fabricated here)', 'Aglet forming'],
    designTradeoffs: [
      'Low-friction laces run smoothly through eyelets but loosen more readily.',
      'Elastic laces ease entry but give up adjustability under load.',
    ],
    questionsToInvestigate: [
      'Is lace selection worth treating as a design variable, or is it best sourced off the shelf?',
    ],
  },
  {
    id: 'collar',
    name: 'Collar',
    group: 'upper',
    function:
      'The padded opening at the ankle. Seals the entry point and reduces pressure on the ankle bones and Achilles.',
    commonMaterials: ['Foam-backed textile', 'Knit', 'Synthetic leather binding'],
    relevantProperties: ['Compression set resistance', 'Softness', 'Edge durability'],
    commonProcesses: ['Lamination', 'Stitching', 'Binding', 'Edge folding'],
    designTradeoffs: [
      'More collar foam improves comfort but can compress over time and loosen heel hold.',
      'A lower collar height eases ankle motion at the cost of heel security.',
    ],
    questionsToInvestigate: [
      'Which foam resists compression set well enough to hold shape through repeated wear?',
      'How is the collar edge finished cleanly without industrial binding equipment?',
    ],
  },
  {
    id: 'lining',
    name: 'Lining',
    group: 'internal',
    function:
      'The inner surface contacting the foot and sock. Manages friction, moisture, and the feel of the interior.',
    commonMaterials: ['Brushed knit', 'Mesh', 'Textile laminate'],
    relevantProperties: ['Abrasion resistance', 'Moisture transport', 'Surface friction', 'Seam comfort'],
    commonProcesses: ['Lamination', 'Cutting', 'Stitching'],
    designTradeoffs: [
      'A durable lining is often less breathable than the outer material it sits behind.',
      'Unlined construction saves weight and cost but exposes seam allowances to the foot.',
    ],
    questionsToInvestigate: [
      'Is a full lining necessary for the intended use case, or can seams be finished another way?',
      'Where do internal seams need to be offset to avoid pressure points?',
    ],
  },
  {
    id: 'toe-box',
    name: 'Toe box',
    group: 'upper',
    function:
      'The volume over the toes. Its shape and height determine toe splay room and the shoe silhouette.',
    commonMaterials: ['Same as the vamp, with optional reinforcement'],
    relevantProperties: ['Shape retention', 'Internal volume', 'Flexibility'],
    commonProcesses: ['Lasting', 'Pattern development', 'Toe puff insertion'],
    designTradeoffs: [
      'A roomier toe box improves comfort but changes the visual proportion and can reduce forefoot lockdown.',
      'Shape retention usually requires a stiffener that adds weight and reduces flexibility.',
    ],
    questionsToInvestigate: [
      'How much does last shape versus pattern shape control the finished toe volume?',
    ],
  },
  {
    id: 'toe-puff',
    name: 'Toe puff',
    group: 'internal',
    function:
      'A stiffener laminated between the upper and lining at the toe. Holds the toe shape and resists collapse.',
    commonMaterials: ['Thermoplastic sheet', 'Resin-impregnated nonwoven', 'Thermoformable composite'],
    relevantProperties: ['Stiffness', 'Formability', 'Bond compatibility', 'Thickness'],
    commonProcesses: ['Die cutting', 'Skiving', 'Heat activation', 'Lasting'],
    designTradeoffs: [
      'A stiffer puff holds shape longer but can create a pressure ridge at its edge.',
      'Skiving the edge reduces the ridge but weakens the transition.',
    ],
    questionsToInvestigate: [
      'Can a toe puff be formed reliably without a heat-activation station?',
      'What edge treatment prevents a visible or palpable line through the upper?',
    ],
  },
  {
    id: 'heel-counter',
    name: 'Heel counter',
    group: 'internal',
    function:
      'A stiffener wrapping the rear foot. Cups the calcaneus, resists heel slip, and stabilizes rearfoot motion.',
    commonMaterials: ['Thermoplastic sheet', 'Resin board', 'Molded composite'],
    relevantProperties: ['Stiffness', 'Formability', 'Shape retention', 'Edge comfort'],
    commonProcesses: ['Die cutting', 'Skiving', 'Thermoforming', 'Lasting'],
    designTradeoffs: [
      'Stiffer counters increase rearfoot control but reduce comfort and add weight.',
      'External counters simplify assembly but change the silhouette.',
    ],
    questionsToInvestigate: [
      'Is a formed counter achievable without a dedicated molding station?',
      'How is counter stiffness assessed without laboratory equipment?',
    ],
  },
  {
    id: 'insole',
    name: 'Insole',
    group: 'internal',
    function:
      'The structural board or layer forming the base of the shoe interior. In board-lasted construction it is what the upper is attached to.',
    commonMaterials: ['Cellulose board', 'Nonwoven board', 'Fiberboard composite'],
    relevantProperties: ['Stiffness', 'Moisture resistance', 'Dimensional stability', 'Tack-holding'],
    commonProcesses: ['Die cutting', 'Board lasting', 'Cementing'],
    designTradeoffs: [
      'A stiffer board improves torsional control but reduces underfoot flexibility.',
      'Board lasting is more forgiving to assemble than strobel but adds stack height and weight.',
    ],
    questionsToInvestigate: [
      'Is board lasting or strobel construction more reproducible with available equipment?',
      'How does insole board choice affect the achievable last fit?',
    ],
  },
  {
    id: 'sockliner',
    name: 'Sockliner',
    group: 'internal',
    function:
      'The removable footbed. Provides the first layer of underfoot cushioning and the surface the foot rests on.',
    commonMaterials: ['EVA foam', 'Polyurethane foam', 'Latex foam', 'Textile top cover'],
    relevantProperties: ['Compression cushioning', 'Compression set resistance', 'Moisture management', 'Weight'],
    commonProcesses: ['Die cutting', 'Molding', 'Lamination of top cover'],
    designTradeoffs: [
      'Softer foams feel better initially but tend to pack out faster.',
      'A contoured sockliner improves fit but must match the last geometry.',
    ],
    questionsToInvestigate: [
      'Can a contoured sockliner be produced without a compression mold?',
      'How is pack-out measured over a realistic wear period within the project timeline?',
    ],
  },
  {
    id: 'strobel-board',
    name: 'Strobel board',
    group: 'internal',
    function:
      'A textile layer stitched around the perimeter of the lasted upper, closing the bottom of the shoe before the sole is attached.',
    commonMaterials: ['Nonwoven textile', 'Mesh', 'Foam-backed nonwoven'],
    relevantProperties: ['Tear strength', 'Stitch retention', 'Flexibility', 'Adhesive compatibility'],
    commonProcesses: ['Strobel stitching', 'Lasting', 'Cementing'],
    designTradeoffs: [
      'Strobel construction is more flexible and lighter than board lasting but requires a specific stitching setup.',
      'A thinner strobel improves ground feel and reduces stack, with less margin for stitch tear-out.',
    ],
    questionsToInvestigate: [
      'Can a strobel seam be produced on available machines, or does it need a dedicated strobel machine?',
      'What alternative closure gives comparable results if strobel stitching is not feasible?',
    ],
  },
  {
    id: 'midsole',
    name: 'Midsole',
    group: 'lower',
    function:
      'The primary cushioning and structural layer between the upper and the outsole. Governs how the shoe absorbs and returns load.',
    commonMaterials: ['EVA foam', 'Polyurethane foam', 'Supercritical-foamed polymers', 'Foam composites'],
    relevantProperties: ['Density', 'Hardness', 'Energy return', 'Compression set resistance', 'Weight'],
    commonProcesses: ['Compression molding', 'Injection molding', 'Die cutting from sheet stock', 'Cementing'],
    designTradeoffs: [
      'Softer foam cushions more but tends to lose properties faster and adds instability.',
      'Molded geometry allows tuned zones but requires tooling that is out of scope here.',
      'Sheet-cut midsoles are achievable without tooling but limit geometric freedom.',
    ],
    questionsToInvestigate: [
      'What midsole geometry is achievable by cutting, stacking, and shaping sheet foam?',
      'How is cushioning compared between candidate foams without a materials testing machine?',
      'Does a laminated multi-density stack behave predictably enough to design around?',
    ],
  },
  {
    id: 'outsole',
    name: 'Outsole',
    group: 'lower',
    function:
      'The ground-contact layer. Provides traction, resists abrasion, and protects the midsole from wear and debris.',
    commonMaterials: ['Carbon rubber', 'Blown rubber', 'Gum rubber', 'Thermoplastic rubber'],
    relevantProperties: ['Abrasion resistance', 'Coefficient of friction', 'Hardness', 'Flexibility', 'Weight'],
    commonProcesses: ['Compression molding', 'Cutting from sheet', 'Surface preparation', 'Cementing', 'Pressing'],
    designTradeoffs: [
      'Harder rubbers wear longer but usually grip less on smooth surfaces.',
      'Deeper tread improves traction on loose surfaces at a weight and smooth-surface-contact cost.',
      'Full-coverage outsoles protect the midsole but add mass.',
    ],
    questionsToInvestigate: [
      'Can sheet rubber be cut and bonded to give a usable outsole without a mold?',
      'How is traction compared between candidates using an accessible, repeatable method?',
    ],
  },
  {
    id: 'shank',
    name: 'Shank',
    group: 'internal',
    function:
      'A stiffening element under the midfoot. Resists torsion and controls how much the shoe twists between forefoot and heel.',
    commonMaterials: ['Thermoplastic', 'Fiber-reinforced composite', 'Steel (in non-athletic footwear)'],
    relevantProperties: ['Torsional stiffness', 'Bending stiffness', 'Weight', 'Bond compatibility'],
    commonProcesses: ['Die cutting', 'Molding', 'Cementing between layers'],
    designTradeoffs: [
      'More torsional stiffness increases stability but reduces natural foot motion.',
      'A shank adds a rigid element that must be bonded reliably or it will eventually delaminate.',
    ],
    questionsToInvestigate: [
      'Does the intended use case need a shank at all?',
      'How is torsional stiffness compared between designs without dedicated test equipment?',
    ],
  },
  {
    id: 'last',
    name: 'Last',
    group: 'tooling',
    function:
      'The three-dimensional form the shoe is built around. Determines internal volume, fit, and silhouette; it is tooling, not a part of the finished shoe.',
    commonMaterials: ['High-density polyethylene', 'Hardwood', '3D-printed polymer'],
    relevantProperties: ['Dimensional accuracy', 'Surface hardness', 'Heat resistance', 'Release behavior'],
    commonProcesses: ['CNC machining', '3D printing', 'Digital modeling', 'Lasting'],
    designTradeoffs: [
      'A printed last is accessible and modifiable but may deform under lasting force or heat.',
      'Buying a commercial last saves time but fixes the fit geometry the design must work within.',
    ],
    questionsToInvestigate: [
      'Is a 3D-printed last dimensionally stable enough to survive lasting?',
      'What last measurements actually need to be controlled to hit an intended fit?',
      'How is a flat pattern derived from a three-dimensional last surface?',
    ],
  },
  {
    id: 'adhesives-seams',
    name: 'Adhesives and seams',
    group: 'internal',
    function:
      'The joining systems holding the assembly together. Adhesive bonds carry most sole-attachment load; stitched seams carry most upper load.',
    commonMaterials: ['Polyurethane cement', 'Chloroprene cement', 'Primers and surface treatments', 'Bonded nylon or polyester thread'],
    relevantProperties: ['Peel strength', 'Shear strength', 'Open time', 'Heat activation behavior', 'Flexibility when cured'],
    commonProcesses: ['Surface roughing', 'Priming', 'Adhesive application', 'Heat activation', 'Pressing', 'Stitching'],
    designTradeoffs: [
      'Stronger bonds usually require more aggressive surface preparation and solvent handling.',
      'A rigid cured adhesive line can crack under repeated flex; a flexible one may creep.',
      'More stitching adds strength and also adds perforation, weight, and assembly time.',
    ],
    questionsToInvestigate: [
      'Which surface preparation and adhesive system is both effective and safe to use in an accessible workspace?',
      'How is bond strength assessed with a repeatable, low-cost peel method?',
      'Which seam types survive repeated flex at the vamp?',
    ],
  },
];

export const anatomyGroups: { id: AnatomyComponent['group']; label: string; description: string }[] = [
  { id: 'upper', label: 'Upper', description: 'Everything above the sole unit that wraps and closes over the foot.' },
  { id: 'internal', label: 'Internal structure', description: 'Stiffeners, linings, and layers hidden inside the assembly.' },
  { id: 'lower', label: 'Sole unit', description: 'The cushioning and ground-contact stack beneath the foot.' },
  { id: 'tooling', label: 'Tooling', description: 'Forms used to build the shoe that do not ship with it.' },
];

export function getAnatomyComponent(id: string): AnatomyComponent | undefined {
  return anatomy.find((component) => component.id === id);
}
