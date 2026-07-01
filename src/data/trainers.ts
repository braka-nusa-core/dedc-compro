import type { Trainer } from "@/types";

// TODO: Replace with real trainer data and photos from DEDC
export const trainers: Trainer[] = [
  {
    slug: "trainer-1",
    name: "Budi Santoso",
    title: "Senior CAD Engineer & Trainer",
    expertise: ["AutoCAD 2D/3D", "Teknik Gambar", "Standar ISO/ASME"],
    industries: ["Konstruksi", "Manufaktur", "Engineering"],
    experienceYears: 15,
    bio: "Praktisi engineering dengan 15+ tahun pengalaman di industri konstruksi dan manufaktur. Telah melatih lebih dari 500 peserta dari berbagai perusahaan.",
    photoSrc: "/images/trainers/trainer-1.jpg",
    programSlugs: ["autocad"],
  },
  {
    slug: "trainer-2",
    name: "Ahmad Fauzi",
    title: "Piping & Plant Design Specialist",
    expertise: ["AutoCAD Plant 3D", "AVEVA E3D", "Piping Design", "ASME Standards"],
    industries: ["EPC", "Oil & Gas", "Industrial Plant"],
    experienceYears: 18,
    bio: "Engineer berpengalaman di proyek EPC dan Oil & Gas internasional. Pernah terlibat dalam proyek kilang minyak dan gas di Indonesia dan luar negeri.",
    photoSrc: "/images/trainers/trainer-2.jpg",
    programSlugs: ["autocad-plant-3d", "e3d"],
  },
  {
    slug: "trainer-3",
    name: "Rizky Pratama",
    title: "MEP BIM Specialist",
    expertise: ["Revit MEP", "BIM Coordination", "MEP Engineering", "Navisworks"],
    industries: ["Building", "Infrastruktur", "MEP Contractor"],
    experienceYears: 12,
    bio: "Spesialis BIM dan MEP dengan pengalaman di proyek gedung bertingkat dan infrastruktur besar. Bersertifikat Autodesk Certified Professional.",
    photoSrc: "/images/trainers/trainer-3.jpg",
    programSlugs: ["revit-mep"],
  },
  {
    slug: "trainer-4",
    name: "Sari Dewi",
    title: "Engineering Trainer & Consultant",
    expertise: ["AutoCAD", "Teknik Sipil", "Manajemen Proyek"],
    industries: ["Konstruksi", "Konsultan", "Pemerintah"],
    experienceYears: 10,
    bio: "Konsultan engineering sekaligus trainer aktif dengan fokus pada industri konstruksi sipil dan infrastruktur publik.",
    photoSrc: "/images/trainers/trainer-4.jpg",
    programSlugs: ["autocad"],
  },
];

export function getTrainerBySlug(slug: string): Trainer | undefined {
  return trainers.find((t) => t.slug === slug);
}
