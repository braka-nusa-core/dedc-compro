export type ProgramMode = "online" | "offline" | "both";

export interface CurriculumItem {
  title: string;
  topics: string[];
}

export interface LearningOutcome {
  id: string;
  description: string;
}

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  duration: string;
  totalHours: number;
  mode: ProgramMode;
  hasCertificate: boolean;
  trainerSlug: string;
  curriculum: CurriculumItem[];
  learningOutcomes: LearningOutcome[];
  highlights: string[];
  thumbnailSrc: string;
  heroSrc: string;
  featured?: boolean;
  lastBatch?: string;
  ghostWord?: string;
  code?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
}

export interface ProgramCardData {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  mode: ProgramMode;
  hasCertificate: boolean;
  highlights: string[];
  thumbnailSrc: string;
  featured?: boolean;
  lastBatch?: string;
}
