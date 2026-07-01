import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { CorporateHeroSection } from "@/components/sections/corporate-partnership/CorporateHeroSection";
import { PartnershipOverviewSection } from "@/components/sections/corporate-partnership/PartnershipOverviewSection";
import { PartnershipProcessSection } from "@/components/sections/corporate-partnership/PartnershipProcessSection";
import { CTASection } from "@/components/common";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.corporate.title,
  description: pageSEO.corporate.description,
  path: "/corporate-partnership",
});

export default function CorporatePartnershipPage() {
  return (
    <>
    <CorporateHeroSection/>
    <PartnershipOverviewSection/>
    <PartnershipProcessSection/>
    <CTASection
        overline="CORPORATE PARTNERSHIP"
        title="Mari Bangun Talenta Engineering Bersama."
        accentWord="Bersama."
        subtitle="Diskusikan kebutuhan training internal, upskilling karyawan, maupun penyaluran talenta engineering bersama tim DEDC."
        primaryLabel="Diskusikan Kebutuhan Perusahaan"
        secondaryLabel="Hubungi Tim DEDC"
        secondaryHref="/contact"
        code="CP+2025"
        output="LONG TERM INDUSTRY PARTNERSHIP"
      />
    </>
  );
}
