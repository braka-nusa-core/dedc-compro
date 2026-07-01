// TODO: Replace placeholder contact details with real DEDC data
export const company = {
  name: "DEDC",
  fullName: "Design Engineering & Drafting Course",
  tagline: "Professional Engineering Training Center",
  foundedYear: 2011,
  description:
    "DEDC adalah Professional Engineering Training Center yang membantu peserta meningkatkan kompetensi industri dan mempersiapkan karier di bidang Engineering, Drafting, EPC, Oil & Gas, Industrial Plant, Building, dan MEP.",
  contact: {
    whatsapp: process.env["NEXT_PUBLIC_WA_NUMBER"] ?? "6281234567890",
    email: "info@dedc.co.id",
    address: "Jakarta, Indonesia", // TODO: Replace with full address
    operationalHours: "Senin – Sabtu, 09.00 – 17.00 WIB",
  },
  social: {
    instagram: "https://instagram.com/dedc_official",
    youtube: "https://youtube.com/@dedc",
    linkedin: "https://linkedin.com/company/dedc",
  },
  vision:
    "Menjadi Professional Engineering Training Center terdepan di Indonesia yang menghasilkan tenaga ahli siap industri.",
  mission: [
    "Menyelenggarakan pelatihan engineering berkualitas tinggi dengan trainer praktisi industri.",
    "Mempersiapkan peserta dengan kompetensi yang relevan dan diakui industri.",
    "Membangun ekosistem alumni yang saling mendukung dalam pengembangan karier.",
    "Menjadi mitra terpercaya bagi perusahaan dalam pengembangan SDM engineering.",
  ],
} as const;
