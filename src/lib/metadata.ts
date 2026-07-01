import type { Metadata } from "next";
import { SITE_NAME, SITE_FULL_NAME, SITE_TAGLINE, SITE_URL } from "./constants";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-default.jpg`;

  return {
    title: `${title} | ${SITE_NAME} — ${SITE_TAGLINE}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_FULL_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Pelatihan AutoCAD, Plant 3D, Revit MEP, dan E3D bersama praktisi industri berpengalaman sejak 2011. Lebih dari 1.000 alumni berkarier di industri Engineering, EPC, dan Oil & Gas.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_FULL_NAME,
    locale: "id_ID",
    type: "website",
  },
};
