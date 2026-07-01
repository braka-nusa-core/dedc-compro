export interface Trainer {
  slug: string;
  name: string;
  title: string;
  expertise: string[];
  industries: string[];
  experienceYears: number;
  bio: string;
  photoSrc: string;
  programSlugs: string[];
  linkedin?: string;
}

export interface TrainerCardData {
  slug: string;
  name: string;
  title: string;
  expertise: string[];
  experienceYears: number;
  photoSrc: string;
}
