import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { PageHero } from "@/components/common/PageHero";
import { CompanyIntroSection } from "@/components/sections/about/CompanyIntroSection";
import { HistorySection } from "@/components/sections/about/HistorySection";
import { VisionMissionSection } from "@/components/sections/about/VisionMissionSection";
import { TrainerTeamSection } from "@/components/sections/about/TrainerTeamSection";
import { CorporateClientsSection } from "@/components/sections/home/CorporateClientsSection";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.about.title,
  description: pageSEO.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        refCode="SEC-A"
        overline="Tentang DEDC"
        title="Membangun Kompetensi Engineering Indonesia Sejak 2011"
        accentWord="Engineering"
        subtitle="Kami hadir untuk menjawab kebutuhan industri akan tenaga drafter dan engineer yang kompeten dan siap kerja."
        breadcrumbs={[
          { name: "Beranda", path: "/" },
          { name: "Tentang Kami", path: "/about" },
        ]}
      />
      <CompanyIntroSection />
      <HistorySection />
      <VisionMissionSection />
      <TrainerTeamSection />
      <CorporateClientsSection />
      <CTASection
        overline="ALM-2025"
        title="Bergabunglah dengan Komunitas Engineer DEDC."
        accentWord="Engineer DEDC."
        subtitle="14 tahun pengalaman. 1.000+ alumni. 50+ corporate partner. Infrastruktur untuk karier engineering Anda sudah ada."
        primaryLabel="Hubungi Tim DEDC"
        secondaryLabel="Tentang Kami"
        secondaryHref="/about"
        waContext="contact"
        code="REV-B2"
        output="CERTIFIED ALUMNI NETWORK"
      />
    </>
  );
}