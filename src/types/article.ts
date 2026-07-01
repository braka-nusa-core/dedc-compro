export type ArticleCategory =
  | "autocad"
  | "plant-3d"
  | "revit-mep"
  | "e3d"
  | "career"
  | "industry"
  | "tips";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingMinutes: number;
  thumbnailSrc?: string;
  featured?: boolean;
}
