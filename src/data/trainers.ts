import type { Trainer } from "@/types";

// TODO: Replace with real trainer data and photos from DEDC
export const trainers: Trainer[] = [
  {
    slug: "trainer-1",
    name: "Fian Maulana",
    title: "Trainer Auto Cad",
    expertise: ["AutoCAD 2D/3D", "Teknik Gambar", "Standar ISO/ASME"],
    industries: ["Konstruksi", "Manufaktur", "Engineering"],
    experienceYears: 15,
    bio: "Praktisi engineering dengan 15+ tahun pengalaman di industri konstruksi dan manufaktur. Telah melatih lebih dari 500 peserta dari berbagai perusahaan.",
    imageSrc: "/images/trainers/FIAN MAULANA - TRainer AUTO CAD..png",
    programSlugs: ["autocad"],
  },
  {
    slug: "trainer-2",
    name: "Etrismon",
    title: "Trainer E3D",
    expertise: ["AutoCAD Plant 3D", "AVEVA E3D", "Piping Design", "ASME Standards"],
    industries: ["EPC", "Oil & Gas", "Industrial Plant"],
    experienceYears: 15,
    bio: "Engineer berpengalaman di proyek EPC dan Oil & Gas internasional. Pernah terlibat dalam proyek kilang minyak dan gas di Indonesia dan luar negeri.",
    imageSrc: "/images/trainers/ETRISMON - TRAINER E3D.png",
    programSlugs: ["autocad-plant-3d", "e3d"],
  },
  {
    slug: "trainer-3",
    name: "Ramdani",
    title: "Trainer Auto Cad",
    expertise: ["AutoCAD 2D/3D", "Teknik Gambar", "Standar ISO/ASME"],
    industries: ["Konstruksi", "Manufaktur", "Engineering"],
    experienceYears: 10,
    bio: "Praktisi engineering dengan 10+ tahun pengalaman di industri konstruksi dan manufaktur. Telah melatih ratusan peserta dari berbagai perusahaan.",
    imageSrc: "/images/trainers/RAMDANI.jpg",
    programSlugs: ["autocad"],
  },
];

export function getTrainerBySlug(slug: string): Trainer | undefined {
  return trainers.find((t) => t.slug === slug);
}
