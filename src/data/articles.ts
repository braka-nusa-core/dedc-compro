import type { Article } from "@/types";

// TODO: Replace with real articles from DEDC content team
export const articles: Article[] = [
  {
    slug: "mengenal-autocad-plant-3d-untuk-industri-epc",
    title: "Mengenal AutoCAD Plant 3D untuk Industri EPC",
    excerpt: "Panduan lengkap memahami peran AutoCAD Plant 3D dalam proyek Engineering, Procurement & Construction.",
    category: "plant-3d",
    publishedAt: "2024-05-15",
    readingMinutes: 6,
    featured: true,
  },
  {
    slug: "perbedaan-autocad-dan-revit-untuk-engineer",
    title: "Perbedaan AutoCAD dan Revit: Mana yang Harus Dipelajari?",
    excerpt: "Perbandingan mendalam antara AutoCAD dan Revit MEP untuk membantu Anda memilih software yang tepat.",
    category: "career",
    publishedAt: "2024-04-28",
    readingMinutes: 5,
    featured: true,
  },
  {
    slug: "tips-memulai-karier-sebagai-piping-engineer",
    title: "Tips Memulai Karier sebagai Piping Engineer di Indonesia",
    excerpt: "Langkah praktis untuk fresh graduate yang ingin masuk ke industri EPC dan Oil & Gas sebagai piping engineer.",
    category: "career",
    publishedAt: "2024-04-10",
    readingMinutes: 7,
    featured: true,
  },
  {
    slug: "apa-itu-bim-dan-mengapa-penting-untuk-mep",
    title: "Apa Itu BIM dan Mengapa Penting untuk MEP Engineer?",
    excerpt: "Penjelasan konsep Building Information Modeling dan relevansinya untuk engineer di industri bangunan.",
    category: "revit-mep",
    publishedAt: "2024-03-22",
    readingMinutes: 5,
    featured: false,
  },
  {
    slug: "aveva-e3d-vs-autocad-plant-3d-perbandingan",
    title: "AVEVA E3D vs AutoCAD Plant 3D: Perbandingan untuk Piping Designer",
    excerpt: "Kelebihan dan kekurangan AVEVA E3D dan AutoCAD Plant 3D dalam konteks proyek industri nyata.",
    category: "e3d",
    publishedAt: "2024-03-05",
    readingMinutes: 6,
    featured: false,
  },
];

export const featuredArticles = articles.filter((a) => a.featured);
