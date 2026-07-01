import type { GalleryImage } from "@/types";

// TODO: Replace with real DEDC training activity photos
export const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "/images/gallery/offline-1.jpg", alt: "Peserta training AutoCAD Plant 3D sesi offline", category: "offline", date: "2024-05-10" },
  { id: "g-2", src: "/images/gallery/offline-2.jpg", alt: "Trainer DEDC membimbing peserta di kelas", category: "offline", date: "2024-04-22" },
  { id: "g-3", src: "/images/gallery/online-1.jpg", alt: "Sesi training online Revit MEP via Zoom", category: "online", date: "2024-06-01" },
  { id: "g-4", src: "/images/gallery/offline-3.jpg", alt: "Suasana kelas AutoCAD DEDC", category: "offline", date: "2024-03-15" },
  { id: "g-5", src: "/images/gallery/certificate-1.jpg", alt: "Sertifikat training DEDC diserahkan kepada peserta", category: "certificate", date: "2024-05-30" },
  { id: "g-6", src: "/images/gallery/workshop-1.jpg", alt: "Workshop engineering DEDC", category: "workshop", date: "2024-04-10" },
  { id: "g-7", src: "/images/gallery/online-2.jpg", alt: "Kelas online AutoCAD Plant 3D", category: "online", date: "2024-05-20" },
  { id: "g-8", src: "/images/gallery/offline-4.jpg", alt: "Peserta E3D training bersama trainer", category: "offline", date: "2024-02-18" },
  { id: "g-9", src: "/images/gallery/certificate-2.jpg", alt: "Alumni DEDC menerima sertifikat pelatihan", category: "certificate", date: "2024-06-10" },
];

export const galleryCategories = [
  { key: "all", label: "Semua" },
  { key: "offline", label: "Kelas Offline" },
  { key: "online", label: "Kelas Online" },
  { key: "workshop", label: "Workshop" },
  { key: "certificate", label: "Sertifikat" },
] as const;
