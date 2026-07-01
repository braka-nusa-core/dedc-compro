import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { faqSchema } from "@/lib/schema";
import { getFaqsByPage } from "@/data/faq";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustMetrics } from "@/components/sections/home/TrustMetrics";
import { ProgramsSection } from "@/components/sections/home/ProgramsSection";
import { WhyChooseSection } from "@/components/sections/home/WhyChooseSection";
import { SuccessStoriesSection } from "@/components/sections/home/SuccessStoriesSection";
import { TrainersSection } from "@/components/sections/home/TrainersSection";
import { CorporateClientsSection } from "@/components/sections/home/CorporateClientsSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { GalleryPreviewSection } from "@/components/sections/home/GalleryPreviewSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";
import { PortfolioPreviewSection } from "@/components/sections/home/PortfolioPreviewSection";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  path: "/",
});

export default function HomePage() {
  const homeFaqs = getFaqsByPage("home");
  const schema = faqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <TrustMetrics />
      <ProgramsSection />
      <WhyChooseSection />
      <TrainersSection />
      <PortfolioPreviewSection/>
      <SuccessStoriesSection />
      <CorporateClientsSection />
      <GalleryPreviewSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}