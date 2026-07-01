import { SITE_URL, SITE_FULL_NAME } from "./constants";

export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: SITE_FULL_NAME,
    alternateName: "DEDC",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/dedc-logo.png`,
    foundingDate: "2011",
    description:
      "Professional Engineering Training Center untuk AutoCAD, Plant 3D, Revit MEP, dan E3D.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://instagram.com/dedc_official",
      "https://youtube.com/@dedc",
      "https://linkedin.com/company/dedc",
    ],
  };
}

export function courseSchema(program: {
  name: string;
  description: string;
  slug: string;
  duration: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.description,
    url: `${SITE_URL}/programs/${program.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_FULL_NAME,
      url: SITE_URL,
    },
    timeRequired: program.duration,
    inLanguage: "id",
    availableLanguage: "Indonesian",
    educationalLevel: "Beginner to Advanced",
    teaches: program.name,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      inLanguage: "id",
    },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
