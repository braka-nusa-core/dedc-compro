export type TestimonialSource = "whatsapp" | "google" | "instagram" | "video";

export interface Testimonial {
  id: string;
  reviewerName: string;
  reviewerPhoto?: string;
  programSlug: string;
  source: TestimonialSource;
  quote: string;
  rating?: number;
  date?: string;
  featured?: boolean;
}
