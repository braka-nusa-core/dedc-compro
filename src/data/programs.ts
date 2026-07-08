import type { Program } from "@/types";

// TODO: Replace placeholder content with real programme details from DEDC
export const programs: Program[] = [
  {
    slug: "autocad",
    name: "AutoCAD",
    shortName: "AutoCAD",
    tagline: "Kuasai drafting 2D & 3D standar industri",
    description:
      "Program pelatihan AutoCAD dari level dasar hingga mahir. Mempelajari drafting 2D, pemodelan 3D, dan standar gambar teknik untuk industri konstruksi, manufaktur, dan engineering.",
    duration: "40 Jam",
    totalHours: 40,
    mode: "both",
    hasCertificate: true,
    trainerSlug: "trainer-1",
    featured: true,
    lastBatch: "Mei 2026",
    thumbnailSrc: "/images/gallery/IMG_20251123_142906.jpg",
    heroSrc: "/images/gallery/IMG_20251123_142906.jpg",
    highlights: ["Drafting 2D lengkap", "Pemodelan 3D dasar", "Plot & Layout", "Standar ISO"],
    curriculum: [
      {
        title: "Modul 1 — Dasar AutoCAD",
        topics: ["Interface dan navigasi", "Perintah dasar drawing", "Layer management", "Koordinat system"],
      },
      {
        title: "Modul 2 — Drafting 2D Lanjut",
        topics: ["Dimensioning", "Annotation", "Block dan attribute", "External reference"],
      },
      {
        title: "Modul 3 — Pemodelan 3D",
        topics: ["3D workspace", "Solid modeling dasar", "Rendering dasar"],
      },
      {
        title: "Modul 4 — Output & Standar",
        topics: ["Plot setup", "PDF export", "Standar gambar teknik", "Studi kasus industri"],
      },
    ],
    learningOutcomes: [
      { id: "ac-1", description: "Membuat gambar teknik 2D sesuai standar industri" },
      { id: "ac-2", description: "Menguasai pemodelan 3D dasar di AutoCAD" },
      { id: "ac-3", description: "Mampu membaca dan menghasilkan drawing set lengkap" },
      { id: "ac-4", description: "Siap bekerja sebagai drafter di perusahaan engineering" },
    ],
  },
  {
    slug: "autocad-plant-3d",
    name: "AutoCAD Plant 3D",
    shortName: "Plant 3D",
    tagline: "Rancang piping & plant layout untuk EPC dan Oil & Gas",
    description:
      "Pelatihan AutoCAD Plant 3D untuk perancangan sistem perpipaan, equipment layout, dan dokumentasi engineering di industri EPC, Oil & Gas, dan Industrial Plant.",
    duration: "60 Jam",
    totalHours: 60,
    mode: "both",
    hasCertificate: true,
    trainerSlug: "trainer-2",
    featured: true,
    lastBatch: "Mei 2026",
    thumbnailSrc: "/images/gallery/IMG_20251130_162457.jpg",
    heroSrc: "/images/gallery/IMG_20251130_162457.jpg",
    highlights: ["Piping design", "Equipment layout", "Isometric drawing", "P&ID integration"],
    curriculum: [
      {
        title: "Modul 1 — Pengantar Plant 3D",
        topics: ["Interface Plant 3D", "Project setup", "Spec driven piping", "Catalog dan spec"],
      },
      {
        title: "Modul 2 — Pemodelan Piping",
        topics: ["Routing pipa", "Fitting dan valve", "Pipe support", "Clash detection"],
      },
      {
        title: "Modul 3 — Equipment & Struktur",
        topics: ["Equipment layout", "Steel structure dasar", "Nozzle orientation"],
      },
      {
        title: "Modul 4 — Dokumentasi",
        topics: ["Isometric extraction", "Orthographic drawing", "BOM generation", "P&ID linking"],
      },
    ],
    learningOutcomes: [
      { id: "p3d-1", description: "Merancang sistem perpipaan 3D sesuai standar industri" },
      { id: "p3d-2", description: "Menghasilkan isometric drawing dan BOM secara otomatis" },
      { id: "p3d-3", description: "Mampu bekerja di proyek EPC dan Oil & Gas" },
      { id: "p3d-4", description: "Memahami standar ASME dan PFD/P&ID" },
    ],
  },
  {
    slug: "revit-mep",
    name: "Revit MEP",
    shortName: "Revit MEP",
    tagline: "Desain sistem MEP dengan BIM Revit",
    description:
      "Pelatihan Revit MEP untuk perancangan sistem Mechanical, Electrical, dan Plumbing menggunakan platform BIM. Cocok untuk engineer dan drafter di industri bangunan dan infrastruktur.",
    duration: "50 Jam",
    totalHours: 50,
    mode: "both",
    hasCertificate: true,
    trainerSlug: "trainer-3",
    lastBatch: "April 2026",
    thumbnailSrc: "/images/gallery/IMG_20260215_122158.jpg",
    heroSrc: "/images/gallery/IMG_20260215_122158.jpg",
    highlights: ["BIM workflow", "MEP coordination", "Clash detection", "Shop drawing"],
    curriculum: [
      {
        title: "Modul 1 — Dasar Revit & BIM",
        topics: ["BIM concept", "Revit interface", "Project setup", "Linked model"],
      },
      {
        title: "Modul 2 — Mechanical",
        topics: ["HVAC duct routing", "Equipment placement", "Schedules HVAC"],
      },
      {
        title: "Modul 3 — Electrical",
        topics: ["Electrical system", "Conduit routing", "Panel schedule", "Lighting"],
      },
      {
        title: "Modul 4 — Plumbing & Output",
        topics: ["Pipe routing MEP", "Clash detection", "Sheet setup", "Coordination drawing"],
      },
    ],
    learningOutcomes: [
      { id: "rmep-1", description: "Merancang sistem MEP dalam lingkungan BIM" },
      { id: "rmep-2", description: "Melakukan koordinasi dan clash detection antar disiplin" },
      { id: "rmep-3", description: "Menghasilkan shop drawing dan schedule MEP" },
      { id: "rmep-4", description: "Siap bekerja di proyek gedung dan infrastruktur" },
    ],
  },
  {
    slug: "e3d",
    name: "E3D (AVEVA E3D)",
    shortName: "E3D",
    tagline: "Pemodelan plant 3D tingkat lanjut untuk proyek besar",
    description:
      "Pelatihan AVEVA E3D (Everything3D) untuk pemodelan plant 3D tingkat lanjut. Digunakan di proyek-proyek EPC skala besar, Oil & Gas, dan Industrial Plant internasional.",
    duration: "60 Jam",
    totalHours: 60,
    mode: "both",
    hasCertificate: true,
    trainerSlug: "trainer-2",
    lastBatch: "Maret 2026",
    thumbnailSrc: "/images/gallery/IMG_20260222_100336.jpg",
    heroSrc: "/images/gallery/IMG_20260222_100336.jpg",
    highlights: ["AVEVA E3D", "Piping modeling", "Structural modeling", "Report generation"],
    curriculum: [
      {
        title: "Modul 1 — Pengantar E3D",
        topics: ["E3D environment", "Project structure", "MDS setup", "Navigation"],
      },
      {
        title: "Modul 2 — Piping Design",
        topics: ["Pipe routing E3D", "Spec selection", "Branch connection", "Penetration"],
      },
      {
        title: "Modul 3 — Equipment & Civil",
        topics: ["Equipment modeling", "Nozzle management", "Foundation civil"],
      },
      {
        title: "Modul 4 — Reporting & Extract",
        topics: ["Isometric extraction", "Material takeoff", "Drawing production", "Project standard"],
      },
    ],
    learningOutcomes: [
      { id: "e3d-1", description: "Mengoperasikan AVEVA E3D untuk proyek plant skala besar" },
      { id: "e3d-2", description: "Membuat model piping dan equipment sesuai standar proyek" },
      { id: "e3d-3", description: "Menghasilkan isometric, MTO, dan drawing production" },
      { id: "e3d-4", description: "Siap bergabung di tim proyek EPC internasional" },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
