export const SITE_NAME = "DEDC";
export const SITE_FULL_NAME = "Design Engineering & Drafting Course";
export const SITE_TAGLINE = "Professional Engineering Training Center";
export const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://dedc.co.id";

export const WA_NUMBER = process.env["NEXT_PUBLIC_WA_NUMBER"] ?? "6281234567890";
export const GA_ID = process.env["NEXT_PUBLIC_GA_ID"] ?? "";
export const MAPS_EMBED_URL = process.env["NEXT_PUBLIC_MAPS_EMBED_URL"] ?? "";

export const SOCIAL = {
  instagram: "https://instagram.com/dedc_official",
  youtube: "https://youtube.com/@dedc",
  linkedin: "https://linkedin.com/company/dedc",
} as const;

export const PROGRAM_SLUGS = {
  AUTOCAD: "autocad",
  PLANT_3D: "autocad-plant-3d",
  REVIT_MEP: "revit-mep",
  E3D: "e3d",
} as const;

export type ProgramSlug = (typeof PROGRAM_SLUGS)[keyof typeof PROGRAM_SLUGS];
