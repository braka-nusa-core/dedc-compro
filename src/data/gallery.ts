import type { GalleryImage } from "@/types";

// TODO: Replace with real DEDC training activity photos
export const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "/images/gallery/IMG_20251123_142906.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-05-10" },
  { id: "g-2", src: "/images/gallery/IMG_20251130_162457.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-04-22" },
  { id: "g-3", src: "/images/gallery/IMG_20260215_122158.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-06-01" },
  { id: "g-4", src: "/images/gallery/IMG_20260222_100336.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-03-15" },
  { id: "g-5", src: "/images/gallery/IMG_20260411_105851.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-05-30" },
  { id: "g-6", src: "/images/gallery/IMG_20260503_092137.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-04-10" },
  { id: "g-7", src: "/images/gallery/IMG_20260517_155103.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-05-20" },
  { id: "g-8", src: "/images/gallery/IMG_20260613_135447.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-02-18" },
  { id: "g-9", src: "/images/gallery/IMG_20260613_135455.jpg", alt: "Ruang kelas DEDC", category: "offline", date: "2024-06-10" },
];

export const galleryCategories = [
  { key: "all", label: "Semua" },
  { key: "offline", label: "Kelas Offline" },
  { key: "online", label: "Kelas Online" },
  { key: "workshop", label: "Workshop" },
  { key: "certificate", label: "Sertifikat" },
] as const;
