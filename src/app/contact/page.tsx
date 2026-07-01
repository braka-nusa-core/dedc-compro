import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { ContactIntroSection } from "@/components/sections/contact/ContactIntroSection";
import { ContactMethodsSection } from "@/components/sections/contact/ContactMethodsSection";
import { VisitCampusSection } from "@/components/sections/contact/VisitCampusSection";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.contact.title,
  description: pageSEO.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
    <ContactIntroSection/>
    <ContactMethodsSection/>
    <VisitCampusSection/>
    </>
  );
}
