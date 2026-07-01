import type { Testimonial } from "@/types";

// TODO: Replace with real testimonials from DEDC (WhatsApp screenshots, Google Reviews, Instagram)
export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    reviewerName: "Reza Firmansyah",
    programSlug: "autocad-plant-3d",
    source: "whatsapp",
    quote:
      "Alhamdulillah setelah ikut training Plant 3D di DEDC langsung dapet kerja di EPC. Trainer sangat berpengalaman dan materinya lengkap banget.",
    rating: 5,
    date: "2024-03-15",
    featured: true,
  },
  {
    id: "testi-2",
    reviewerName: "Aulia Putri",
    programSlug: "revit-mep",
    source: "google",
    quote:
      "Kelas kecil jadi belajarnya lebih efektif. Trainer sabar dan selalu available kalau ada pertanyaan setelah kelas. Highly recommended!",
    rating: 5,
    date: "2024-04-02",
    featured: true,
  },
  {
    id: "testi-3",
    reviewerName: "Hendra Gunawan",
    programSlug: "autocad",
    source: "instagram",
    quote:
      "Belajar AutoCAD di DEDC dari nol sampai bisa ngebuat drawing teknik. Sekarang udah kerja di perusahaan kontraktor. Makasih DEDC!",
    rating: 5,
    date: "2024-02-20",
    featured: true,
  },
  {
    id: "testi-4",
    reviewerName: "Maya Sari",
    programSlug: "e3d",
    source: "whatsapp",
    quote:
      "Training E3D-nya detail banget, langsung praktek project nyata. Sekarang saya lebih pede apply ke perusahaan Oil & Gas.",
    rating: 5,
    date: "2024-01-10",
    featured: false,
  },
  {
    id: "testi-5",
    reviewerName: "Dodi Prasetyo",
    programSlug: "autocad-plant-3d",
    source: "google",
    quote:
      "Materi tidak hangus! Bisa review ulang materi kapan saja. Fasilitas ini yang bikin DEDC beda dari tempat les lain.",
    rating: 5,
    date: "2024-05-08",
    featured: true,
  },
  {
    id: "testi-6",
    reviewerName: "Lestari Wahyuni",
    programSlug: "revit-mep",
    source: "instagram",
    quote:
      "Trainer DEDC bukan cuma mengajar software, tapi juga sharing pengalaman kerja di lapangan. Sangat bermanfaat untuk fresh graduate.",
    rating: 5,
    date: "2024-06-01",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
