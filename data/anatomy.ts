import type { AnatomyComponent } from '@/types';

/**
 * SNEAKER ANATOMY REFERENCE — EDIT FREELY
 *
 * These entries are descriptive and deliberately contain no quantitative
 * claims. Numbers belong in a Material record with a citation, or in a
 * TestRecord with data behind them. If you add a number here, add a source.
 *
 * Component set, groupings, and functional descriptions are drawn from the
 * Week 02 anatomy research deliverable (component master tables, terminology
 * distinctions, ambiguous-component notes, and research-gap notes). Common
 * materials and common processes are left empty pending the materials
 * (Phase 3) and manufacturing (Phase 4) research phases — this week's scope
 * was anatomy and terminology only.
 *
 * `relatedFindings` should stay empty until this project produces a finding.
 */

const BASE_SOURCES = ['src-patent-resilin-footwear', 'src-patent-midsole-methods', 'src-shoemakers-academy-shoe-parts'];

export const anatomy: AnatomyComponent[] = [
  {
    id: 'upper',
    name: 'Upper',
    group: 'upper',
    function:
      'The entire foot-enclosing structure above the sole assembly. Retains and fits the foot while managing flexibility, ventilation, containment, and lace-load transfer.',
    commonMaterials: [],
    relevantProperties: ['Tensile strength', 'Flex fatigue resistance', 'Abrasion resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'vamp',
    name: 'Vamp',
    group: 'upper',
    function:
      'The forefoot upper panel or functional zone extending toward the throat. Provides forefoot coverage and flexes with the foot at every step — an upper panel/zone, distinct from the toe box, which is the three-dimensional volume it covers.',
    commonMaterials: [],
    relevantProperties: ['Flex fatigue resistance', 'Tensile strength', 'Abrasion resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'toe-box',
    name: 'Toe box',
    group: 'upper',
    function:
      'The three-dimensional region accommodating the toes — a functional volume rather than a single cut panel, distinguished from the vamp (the panel covering it) and the toe cap (a reinforcement at its leading edge).',
    commonMaterials: [],
    relevantProperties: ['Flex fatigue resistance', 'Abrasion resistance', 'Toe pressure tolerance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'toe-cap',
    name: 'Toe cap / reinforcement',
    group: 'upper',
    function:
      'A protective or reinforcing element at the leading edge or overlay of the toe box. Adds abrasion and impact protection and helps the toe region hold its shape; present only in some constructions.',
    commonMaterials: [],
    relevantProperties: ['Abrasion resistance', 'Bending stiffness', 'Peel strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'A rubberized toe coating that protects the upper from abrasion is classified as toe reinforcement/overlay rather than outsole — worth confirming on any shoe with toe-area rubber before assuming it is a ground-contact zone.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'quarter',
    name: 'Quarter',
    group: 'upper',
    function:
      'The side and rear upper region behind the vamp. Provides rearfoot and midfoot containment and carries part of the closure load path — distinct from the eyestay, which specifically carries and reinforces the lacing path within this region.',
    commonMaterials: [],
    relevantProperties: ['Tensile strength', 'Shear strength', 'Bending stiffness'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'eyestay',
    name: 'Eyestay',
    group: 'upper',
    function:
      'The reinforced, lace-carrying zone. Distributes lace tension across the upper and resists tear-out at the eyelets.',
    commonMaterials: [],
    relevantProperties: ['Tensile strength', 'Tear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'eyelet',
    name: 'Eyelet / lace loop',
    group: 'upper',
    function: 'The hole or hardware along the throat through which a lace passes, routing and anchoring the lace.',
    commonMaterials: [],
    relevantProperties: ['Bearing strength', 'Tear strength', 'Abrasion resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'laces',
    name: 'Laces',
    group: 'upper',
    function:
      'The adjustable closure running across the throat. Converts pull tension into distributed compression and retention over the instep.',
    commonMaterials: [],
    relevantProperties: ['Tensile strength', 'Surface friction', 'Fatigue resistance under cyclic pull'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'tongue',
    name: 'Tongue',
    group: 'upper',
    function:
      'The component beneath the laces. Distributes closure pressure across the instep, improves comfort, and may block debris from entering the throat.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Flex fatigue resistance', 'Shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'gusset',
    name: 'Gusset',
    group: 'upper',
    function:
      'The connection tying the tongue to the adjacent upper. Centers the tongue and controls how far the throat opens; present only in some constructions.',
    commonMaterials: [],
    relevantProperties: ['Stretch and recovery', 'Tensile strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'collar',
    name: 'Collar / topline',
    group: 'upper',
    function:
      'The opening around the ankle and heel, with the topline as its top edge. Manages entry, comfort, and local retention at the ankle.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Abrasion resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'heel-counter',
    name: 'Heel counter',
    group: 'upper',
    function:
      'A stiff rearfoot reinforcement, usually internal or integrated into the upper. Maintains heel shape and supports rearfoot containment — distinct from the collar (the ankle opening around it) and from an external heel clip (a visible, externally distinguishable stabilizer, which the counter is not).',
    commonMaterials: [],
    relevantProperties: ['Bending stiffness', 'Compression set resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'A visible stiff rearfoot shell should not automatically be called a heel counter — an external shell is better described as a clip/stabilizer unless internal-counter evidence exists.',
      'Plate extent, internal foam geometry, and heel-counter geometry generally cannot be established from external inspection alone; teardown or manufacturer documentation is needed.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'external-heel-clip',
    name: 'External heel clip / stabilizer',
    group: 'upper',
    function:
      'A visible structure at the rearfoot/sole interface that adds rearfoot or lateral stability. An optional, externally visible stabilizer, distinct from an internal heel counter.',
    commonMaterials: [],
    relevantProperties: ['Bending stiffness', 'Torsional stiffness', 'Shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'lining',
    name: 'Lining',
    group: 'upper',
    function:
      'The foot-facing interior surface of the upper. Manages comfort and friction against the foot and sock, and moisture at that interface.',
    commonMaterials: [],
    relevantProperties: ['Abrasion resistance', 'Moisture management'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'padding',
    name: 'Padding / foam package',
    group: 'upper',
    function:
      'Foam padding placed at the collar, tongue, or other local zones inside the upper. Distributes pressure and tunes fit; how much is present varies by shoe.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'overlay',
    name: 'Overlay / reinforcement',
    group: 'upper',
    function:
      'A local surface layer or embedded zone, structural or decorative, that strengthens a load path in the upper. May be a separately applied piece or integrated into the base material.',
    commonMaterials: [],
    relevantProperties: ['Tensile strength', 'Peel strength', 'Flex fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'In knit or one-piece uppers, traditional overlay zones such as the vamp, quarter, and eyestay may be integrated functional regions rather than separately cut panels — worth checking which applies before assuming a discrete piece.',
      'A TPU cage should be classified by its primary role and location: lace/lateral containment reads as upper reinforcement, while a rearfoot stabilizer tied into the sole reads as a heel clip.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'strobel',
    name: 'Strobel',
    group: 'internal',
    function:
      'A flexible bottom component sewn or otherwise joined to the lower edge of the upper, creating a sock-like assembly in Strobel lasting. Commonly hidden once the shoe is fully assembled — functionally distinct from a lasting board, a stiffer platform used in board-lasted construction.',
    commonMaterials: [],
    relevantProperties: ['Stitch load tolerance', 'Flex fatigue resistance', 'Tensile strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'Strobel/board condition and the exact lasting construction used are generally best answered by dissection rather than external inspection.',
    ],
    relatedSourceIds: [...BASE_SOURCES, 'src-patent-strobel-manufacturing'],
  },
  {
    id: 'lasting-board',
    name: 'Lasting board',
    group: 'internal',
    function:
      'A stiffer board-like structure around which the upper is lasted in board-lasted construction. Changes the underfoot stack and creates a firmer platform than a flexible Strobel bottom; present only in board-lasted shoes.',
    commonMaterials: [],
    relevantProperties: ['Bending stiffness', 'Compression set resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'sockliner',
    name: 'Sockliner',
    group: 'internal',
    function:
      'The foot-contact insert directly under the foot, often removable. Provides comfort, fit, and local cushioning — distinct from the midsole, the primary underfoot structural/cushioning system beneath it.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'A thick removable internal foam layer should not be assumed to be a simple sockliner — its actual placement and function should be described rather than assumed.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'midsole',
    name: 'Midsole / carrier',
    group: 'lower',
    function:
      'The primary sole body between the upper and the ground-contact layer. Provides cushioning, load distribution, geometry, and stability, and is present in some form in essentially every shoe — distinct from a foam insert, a smaller embedded or attached element within or on it.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Shear strength', 'Bending stiffness', 'Fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'For a dual-density midsole, if both foams form one continuous sole geometry, the sole should be treated as one midsole system with multiple stiffness regions rather than two separate components.',
    ],
    relatedSourceIds: [...BASE_SOURCES, 'src-patent-dual-layered-midsole'],
  },
  {
    id: 'foam-insert',
    name: 'Foam insert / pod',
    group: 'lower',
    function:
      'A localized cushioning or response-tuning element within or attached to the midsole carrier. Optional, and distinct from the carrier itself: the outer continuous load-bearing body is the midsole, and a distinct embedded piece is the insert.',
    commonMaterials: [],
    relevantProperties: ['Compression fatigue resistance', 'Interface shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: [...BASE_SOURCES, 'src-patent-dual-layered-midsole'],
  },
  {
    id: 'multi-density-structure',
    name: 'Multi-density structure',
    group: 'lower',
    function:
      'Two or more distinct foam or material zones within the sole, used to control regional stiffness or cushioning. Treated as one midsole system with sub-elements unless the zones are physically separable.',
    commonMaterials: [],
    relevantProperties: ['Compression set resistance', 'Interface shear strength'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: [...BASE_SOURCES, 'src-patent-dual-layered-midsole'],
  },
  {
    id: 'plate',
    name: 'Plate',
    group: 'lower',
    function:
      'An engineered stiffness member within or between midsole layers. Controls bending stiffness and load path — broader in extent than a shank, which is typically a more localized midfoot torsional member.',
    commonMaterials: [],
    relevantProperties: ['Bending stiffness', 'Torsional stiffness', 'Fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'A carbon-fiber plate should be classified as a structural plate first, with material, extent, curvature, and position recorded separately — plate extent generally cannot be confirmed without teardown.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'shank',
    name: 'Shank / torsional member',
    group: 'lower',
    function: 'A structural member, usually in the midfoot, supporting the arch and resisting torsion. Commonly more localized than a plate.',
    commonMaterials: [],
    relevantProperties: ['Bending stiffness', 'Torsional stiffness'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'air-fluid-unit',
    name: 'Air / fluid unit',
    group: 'lower',
    function:
      'A cushioning or energy-management element embedded in the sole, relying on enclosed air or fluid rather than foam alone. Optional.',
    commonMaterials: [],
    relevantProperties: ['Pressure resistance', 'Membrane fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'outsole',
    name: 'Outsole',
    group: 'lower',
    function:
      'The ground-contact layer at the bottom of the shoe. Provides traction and wear resistance and may cover the full sole or only strategic zones — a shoe with only rubber patches still has outsole zones even without a full rubber sheet.',
    commonMaterials: [],
    relevantProperties: ['Abrasion resistance', 'Shear strength', 'Impact resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [
      'Where no visible outsole rubber is present, the exposed ground-contact foam should be recorded directly rather than assuming a rubber outsole is simply hidden.',
    ],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'lugs',
    name: 'Lugs / tread geometry',
    group: 'lower',
    function:
      'Protruding traction features and tread geometry on the outsole surface. Manages grip and terrain interaction; pattern and depth vary by footwear category.',
    commonMaterials: [],
    relevantProperties: ['Shear strength', 'Wear resistance', 'Bending stiffness'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'adhesive-bond',
    name: 'Adhesive / cement bond',
    group: 'joining',
    function:
      'A bonded joint transferring load between components, most commonly between the lasted upper and the sole assembly. Cemented construction is extremely common in athletic footwear and describes the joining method, not a single component layout.',
    commonMaterials: [],
    relevantProperties: ['Peel strength', 'Shear strength', 'Aging resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: ['Adhesive coverage and condition are generally best answered by dissection, not external inspection.'],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'stitching',
    name: 'Stitching',
    group: 'joining',
    function: 'Mechanical joining at upper seams and the lasting edge, carrying thread tension and repeated seam loading.',
    commonMaterials: [],
    relevantProperties: ['Thread tension tolerance', 'Seam fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
  {
    id: 'welded-seam',
    name: 'Welded / bonded seam',
    group: 'joining',
    function:
      'A low-bulk joining or reinforcement method used for upper laminations and no-sew zones, replacing or supplementing stitching in some constructions.',
    commonMaterials: [],
    relevantProperties: ['Peel strength', 'Flex fatigue resistance'],
    commonProcesses: [],
    designTradeoffs: [],
    questionsToInvestigate: [],
    relatedSourceIds: BASE_SOURCES,
  },
];

export const anatomyGroups: { id: AnatomyComponent['group']; label: string; description: string }[] = [
  { id: 'upper', label: 'Upper assembly', description: 'Everything above the sole unit that wraps, closes, and fits over the foot.' },
  {
    id: 'internal',
    label: 'Lasting and foot interface',
    description: 'The bottom closure of the upper and the layer directly under the foot.',
  },
  { id: 'lower', label: 'Sole assembly', description: 'Cushioning, structural, and ground-contact elements beneath the foot.' },
  { id: 'joining', label: 'Joining system', description: 'How components are connected: stitched, bonded, or welded.' },
  { id: 'tooling', label: 'Tooling', description: 'Forms used to build the shoe that do not ship with it.' },
];

export function getAnatomyComponent(id: string): AnatomyComponent | undefined {
  return anatomy.find((component) => component.id === id);
}
