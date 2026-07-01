import type { Metadata }                from "next";
import { generatePageMetadata }         from "@/lib/metadata";
import { PortfolioHeroSection }         from "@/components/sections/portfolio/PortfolioHeroSection";
import { FeaturedPortfolioSection }     from "@/components/sections/portfolio/FeaturedPortfolioSection";
import { ProjectCategoriesSection }     from "@/components/sections/portfolio/ProjectCategoriesSection";
import { portfolioProjects }            from "@/data/portfolio";
import { CTASection } from "@/components/common";

export const metadata: Metadata = generatePageMetadata({
  title:       "Portfolio Engineering",
  description: "Kumpulan project engineering yang dikerjakan peserta DEDC sebagai representasi standar kompetensi industri.",
  path:        "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PortfolioHeroSection />

      {/* 2 — Featured projects, one per row, editorial */}
      <FeaturedPortfolioSection projects={portfolioProjects} />

      {/* 3 — All projects with category filter */}
      <ProjectCategoriesSection projects={portfolioProjects} />

      {/* 4 — Shared CTA, customised copy */}
      <CTASection
        overline="PORTFOLIO"
        code="PTF-CTA-001"
        title="Mulai Bangun Portfolio Engineering Anda."
        subtitle="Setiap project yang Anda kerjakan adalah langkah nyata menuju karier profesional di industri engineering."
        output="EL+5000"
      />
    </>
  );
}