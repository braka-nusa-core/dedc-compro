import type { Alumni } from "@/types";

// TODO: Replace with real alumni data and photos from DEDC
export const successStories: Alumni[] = [
  {
    id: "alumni-1",
    name: "Reza Firmansyah",
    position: "Piping Engineer",
    company: "PT Exatra Engineering",
    industry: "epc",
    programSlug: "autocad-plant-3d",
    quote:
      "Setelah mengikuti training Plant 3D di DEDC, saya langsung diterima kerja dalam 2 bulan. Materi yang diajarkan benar-benar sesuai kebutuhan industri.",
    photoSrc: "/images/alumni/alumni-1.jpg",
    featured: true,
    graduationYear: 2024,
  },
  {
    id: "alumni-2",
    name: "Siti Rahma",
    position: "MEP Drafter",
    company: "PT PP (Persero)",
    industry: "building",
    programSlug: "revit-mep",
    quote:
      "Trainer DEDC sangat berpengalaman dan sabar dalam mengajarkan Revit MEP. Sekarang saya percaya diri mengerjakan proyek gedung besar.",
    photoSrc: "/images/alumni/alumni-2.jpg",
    featured: true,
    graduationYear: 2024,
  },
  {
    id: "alumni-3",
    name: "Deni Kurniawan",
    position: "CAD Operator",
    company: "PT Wijaya Karya",
    industry: "construction",
    programSlug: "autocad",
    quote:
      "Dari fresh graduate tanpa pengalaman, sekarang saya bekerja di perusahaan BUMN konstruksi. DEDC yang membuka jalan karier saya.",
    photoSrc: "/images/alumni/alumni-3.jpg",
    featured: true,
    graduationYear: 2023,
  },
  {
    id: "alumni-4",
    name: "Andi Wijaksono",
    position: "3D Designer",
    company: "PT Control System Paranusa",
    industry: "oil-gas",
    programSlug: "e3d",
    quote:
      "E3D yang dipelajari di DEDC langsung relevan dengan tools yang dipakai di proyek Oil & Gas saya. Worth every penny.",
    photoSrc: "/images/alumni/alumni-4.jpg",
    featured: false,
    graduationYear: 2023,
  },
  {
    id: "alumni-5",
    name: "Fitriani Ayu",
    position: "Drafter MEP",
    company: "PT Totalindo Eka Persada",
    industry: "mep",
    programSlug: "revit-mep",
    quote:
      "Kelas semi privat di DEDC membuat saya bisa belajar dengan nyaman. Trainer selalu siap membantu kesulitan saya.",
    photoSrc: "/images/alumni/alumni-5.jpg",
    featured: false,
    graduationYear: 2024,
  },
  {
    id: "alumni-6",
    name: "Bagas Setiawan",
    position: "Piping Designer",
    company: "PT Rekayasa Industri",
    industry: "industrial",
    programSlug: "autocad-plant-3d",
    quote:
      "DEDC memberikan ilmu praktis langsung dari orang yang pernah kerja di lapangan. Beda jauh dengan kursus online biasa.",
    photoSrc: "/images/alumni/alumni-6.jpg",
    featured: false,
    graduationYear: 2023,
  },
];

export const featuredAlumni = successStories.filter((a) => a.featured);
