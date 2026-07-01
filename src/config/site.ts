import { SITE_URL } from "@/lib/constants";

export const siteConfig = {
  name: "DEDC",
  fullName: "Design Engineering & Drafting Course",
  tagline: "Professional Engineering Training Center",
  url: SITE_URL,
  locale: "id_ID",
  timezone: "Asia/Jakarta",
  foundedYear: 2011,
  social: {
    instagram: "https://instagram.com/dedc_official",
    youtube: "https://youtube.com/@dedc",
    linkedin: "https://linkedin.com/company/dedc",
    instagramHandle: "@dedc_official",
  },
} as const;
