// TODO: Replace placeholder contact details with real DEDC data
export const company = {
  name: "DEDC",
  fullName: "Design Engineering & Drafting Course",
  tagline: "Professional Engineering Training Center",
  foundedYear: 2011,
  description:
    "DEDC adalah Professional Engineering Training Center yang membantu peserta meningkatkan kompetensi industri dan mempersiapkan karier di bidang Engineering, Drafting, EPC, Oil & Gas, Industrial Plant, Building, dan MEP.",
  contact: {
    whatsapp: process.env["NEXT_PUBLIC_WA_NUMBER"] ?? "6281290034421",
    email: "dedc.drafting@gmail.com",
    address: "The mahaka platinum cluster, Jl. Boulevard Grand Depok City Blk. C3, Jatimulya, Kec. Cilodong, Kota Depok, Jawa Barat 16414", // TODO: Replace with full address
    operationalHours: "Senin – Sabtu, 10.00 – 17.00 WIB",
  },
  social: {
    instagram: "https://www.instagram.com/kursusautocaddepok",
    youtube: "https://www.youtube.com/@kanggambar734",
    linkedin: "https://www.linkedin.com/in/dedc-depok-971699215/",
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
