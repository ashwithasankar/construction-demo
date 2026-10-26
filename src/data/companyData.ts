/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  isDraft: boolean; // Flag identifying unconfirmed services for client review
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  builtArea: string;
  type: string;
  summary: string;
  description: string;
  keyFeatures: string[];
  mainImage: string;
  gallery: string[];
  isSampleConcept: boolean; // Labelled as sample architectural concept pending real photos
}

export interface StrategyStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_DETAILS = {
  name: "UrbanNest Builders",
  engineer: "UrbanNest Team",
  category: "Building Designer & Construction Planning",
  location: "Chennai, Tamil Nadu, India",
  address: "24 Architecture Avenue, T. Nagar, Chennai, Tamil Nadu 600017, India",
  phone: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsAppLink: "https://wa.me/919000000000",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=UrbanNest%20Builders%2C%20Chennai",
  googleRating: 0,
  reviewCount: 0,
  mapEmbedQuery: "UrbanNest Builders, 24 Architecture Avenue, T. Nagar, Chennai, Tamil Nadu 600017",
  disclaimer: "Demo website content only. Business address, phone number, ratings, and portfolio details are placeholders and must be replaced with verified client information before launch."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "building-design",
    title: "Building Design & Master Planning",
    category: "Architecture",
    shortDesc: "Comprehensive architectural layouts, structural floor plans, and elevation drafting tailored to your site orientation.",
    fullDesc: "We provide complete building design solutions that harmonize functional room utility, natural cross-ventilation, and aesthetic proportions. Each drawing is calibrated for local soil, climate, and municipal planning approvals.",
    features: [
      "2D Floor Plans & Working Drawings",
      "3D Architectural Front Elevations",
      "Structural Layout Drafts",
      "Site Orientation & Sunpath Analysis"
    ],
    isDraft: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "house-planning",
    title: "Residential House Planning",
    category: "Residential",
    shortDesc: "Custom residential floor planning aligning modern family comfort with traditional regional sensibilities.",
    fullDesc: "From compact urban plots to spacious standalone villas, our house planning balances privacy, communal living areas, and intelligent space utilization, incorporating traditional Vastu considerations where requested.",
    features: [
      "Custom Independent Home Blueprints",
      "Duplex & Multi-Generation Configurations",
      "Vastu Consultation & Spatial Alignment",
      "Optimum Sunlight & Ventilation Routing"
    ],
    isDraft: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "architectural-consultation",
    title: "Architectural & Technical Consultation",
    category: "Consultation",
    shortDesc: "One-on-one professional guidance on spatial planning, material feasibility, and structural considerations.",
    fullDesc: "Consult directly with our engineering team in Chennai before breaking ground. We examine your plot measurements, provide structural feasibility insights, and help eliminate costly on-site surprises.",
    features: [
      "Plot & Soil Site Assessment",
      "Municipal Plan Compliance Guidance",
      "Material Grade & Structural Advice",
      "Budget Feasibility Review"
    ],
    isDraft: true,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "construction-planning",
    title: "Construction Planning & Estimation",
    category: "Planning",
    shortDesc: "Accurate Bill of Quantities (BOQ), material estimation, and phased project scheduling for transparent execution.",
    fullDesc: "Eliminate budget ambiguity with methodical estimation. We break down the required quantities of steel, cement, brickwork, and interior finishes so you maintain total financial control of your project.",
    features: [
      "Itemized Material Estimation (BOQ)",
      "Phase-wise Construction Milestones",
      "Contractor & Trade Coordination Framework",
      "Cost Optimization Recommendations"
    ],
    isDraft: true,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "site-coordination",
    title: "Execution & Progress Coordination",
    category: "Supervision",
    shortDesc: "Periodic engineering site check-ins to confirm structural work faithfully conforms to approved blueprints.",
    fullDesc: "Ensure on-site artisans execute the structural design accurately. We conduct critical-stage inspections at foundation pouring, lintel setting, roof slab reinforcement, and finishing stages.",
    features: [
      "Foundation & Reinforcement Inspection",
      "Lintel & Roof Slab Level Checks",
      "Deviation Prevention & Real-time Corrections",
      "Stage Completion Verification"
    ],
    isDraft: true,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop"
  }
];

export const STRATEGY_STEPS: StrategyStep[] = [
  {
    step: "01",
    number: "Phase 1",
    title: "Consultation & Requirements",
    description: "We meet with you in Chennai or via telephone to listen to your spatial requirements, plot parameters, timeline, and budget framework.",
    deliverables: ["Site dimensions review", "Spatial wishlist & room counts", "Budget & timeline alignment"]
  },
  {
    step: "02",
    number: "Phase 2",
    title: "Planning & Design",
    description: "Our design team drafts 2D structural floor plans, elevations, and layout schematics, incorporating client revisions until the blueprint is perfected.",
    deliverables: ["2D architectural blueprints", "3D front elevation renders", "Structural & plumbing layout"]
  },
  {
    step: "03",
    number: "Phase 3",
    title: "Execution & Progress Coordination",
    description: "During construction, we provide scheduled technical milestones and coordinate with site teams to ensure the physical build aligns with engineering specs.",
    deliverables: ["Material specification sheets", "Critical structural stage checks", "On-site quality alignment"]
  },
  {
    step: "04",
    number: "Phase 4",
    title: "Final Review & Handover",
    description: "A thorough walkthrough inspection verifies electrical, plumbing, wall plastering, and structural integrity before handing over the finished residence.",
    deliverables: ["Comprehensive defect check", "As-built documentation guidance", "Formal completion handover"]
  }
];

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "chennai-residence-01",
    title: "T. Nagar Contemporary Villa",
    category: "Residential Architecture",
    location: "Chennai, Tamil Nadu",
    builtArea: "2,850 sq.ft",
    type: "Single-Family Residence",
    summary: "A modern dual-level home design emphasizing shaded deep overhangs, natural cross-ventilation, and warm earth tones.",
    description: "Designed specifically for the regional climate of Chennai, this conceptual villa features deep cantilevered roof overhangs to deflect direct tropical sunlight while welcoming eastern morning breezes. The ground level integrates an open-plan living and dining hall adjoining a private courtyard, while the upper level hosts three ensuite bedrooms with private terrace balconies.",
    keyFeatures: [
      "Passive climate cooling with perforated brick screens",
      "Double-height living volume with clerestory lighting",
      "Private internal puja and courtyard garden",
      "Rainwater harvesting & solar panel structural readiness"
    ],
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1000&auto=format&fit=crop"
    ],
    isSampleConcept: true
  },
  {
    id: "thanjavur-heritage-courtyard",
    title: "Chettinad & Modern Heritage Home",
    category: "Traditional & Modern Fusion",
    location: "Delta Region, Tamil Nadu",
    builtArea: "3,400 sq.ft",
    type: "Courtyard Villa",
    summary: "Architectural fusion combining traditional Thinnai verandahs and central Thotti courtyard with contemporary luxury fixtures.",
    description: "An homage to regional Tamil architectural wisdom. The design is anchored by an open-to-sky central courtyard that facilitates natural stack ventilation, drawing warm air up and exhausting it while keeping interior rooms comfortable throughout the day. Built with locally sourced terracotta tiles and natural granite stonework.",
    keyFeatures: [
      "Authentic central courtyard (Thotti) with brass drainage accents",
      "Expansive shaded welcoming Thinnai (front porch)",
      "Reclaimed teakwood column styling and brass hardware",
      "Modular kitchen integrated with utility wash yard"
    ],
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop"
    ],
    isSampleConcept: true
  },
  {
    id: "compact-urban-duplex",
    title: "Compact Urban Duplex",
    category: "Urban Residential",
    location: "Chennai Town",
    builtArea: "1,950 sq.ft",
    type: "2-Story Compact Home",
    summary: "Ingenious spatial distribution maximizing narrow frontage plots with vertical volume and light wells.",
    description: "Engineered for 30x40 and 30x50 urban plots common in town developments. By incorporating a side-lit skylight atrium, this design brings sunlight deep into the central living room without sacrificing privacy from nearby neighbours.",
    keyFeatures: [
      "Optimized for narrow road frontage",
      "Built-in parking portico for car and two-wheelers",
      "Sound-buffered street-facing bedroom glazing",
      "Rooftop covered terrace designed for social gatherings"
    ],
    mainImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
    ],
    isSampleConcept: true
  },
  {
    id: "commercial-shopping-arcade",
    title: "Chennai Commercial Complex",
    category: "Commercial Architecture",
    location: "T. Nagar, Chennai",
    builtArea: "4,600 sq.ft",
    type: "G+2 Mixed Commercial",
    summary: "High-visibility retail frontage with modular shop spaces and dedicated customer parking bays.",
    description: "A commercial building concept designed for bustling arterial roads. Features column-free ground floor spaces suitable for banking or premium retail, with upper levels optimized for professional offices or clinics.",
    keyFeatures: [
      "Column-free retail layouts for maximum display frontage",
      "Dedicated basement and surface visitor parking",
      "Durable architectural louvres for solar heat reduction",
      "Separate fire egress and disabled access ramps"
    ],
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
    ],
    isSampleConcept: true
  }
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Trust & Metrics", href: "#metrics" },
  { label: "Services", href: "#services" },
  { label: "Strategy", href: "#strategy" },
  { label: "Portfolio", href: "#projects" },
  { label: "Location", href: "#location" },
  { label: "Enquiry", href: "#contact" }
];
