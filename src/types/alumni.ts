export interface Alumni {
  id: string;
  name: string;
  position: string;
  company: string;
  industry: "epc" | "oil-gas" | "mep" | "building" | "construction" | "industrial" | "other";
  programSlug: string;
  quote: string;
  photoSrc: string;
  featured?: boolean;
  graduationYear?: number;
}

export interface SuccessStory extends Alumni {
  fullStory?: string;
}
