export type FAQPage = "home" | "programs" | "about" | "contact" | "all";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  pages: FAQPage[];
  programSlug?: string;
}
