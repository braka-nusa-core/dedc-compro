export type GalleryCategory = "offline" | "online" | "workshop" | "event" | "certificate";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  date?: string;
  caption?: string;
}
