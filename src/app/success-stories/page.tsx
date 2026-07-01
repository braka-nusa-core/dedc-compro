import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { SuccessStoriesHeroSection } from "@/components/sections/success-stories/SuccessStoriesHeroSection";
import { AlumniDestinationSection } from "@/components/sections/success-stories/AlumniDestinationSection";
import { AlumniStoriesSection } from "@/components/sections/success-stories/AlumniStoriesSection";
import { CTASection } from "@/components/common/CTASection";
import { DEDCMomentsSection } from "@/components/sections/success-stories/DEDCMomentSection";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.successStories.title,
  description: pageSEO.successStories.description,
  path: "/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <>
    <SuccessStoriesHeroSection/>
      <DEDCMomentsSection/>
      <AlumniStoriesSection/>
      <AlumniDestinationSection/>
      <CTASection
  overline="NEXT STORY"
  title="Mungkin Kisah Berikutnya Adalah Milik Anda."
  accentWord="Milik Anda."
  subtitle="Lebih dari 1.000 alumni DEDC telah membangun karier di berbagai perusahaan engineering. Sekarang giliran Anda menentukan langkah berikutnya."
  waContext="final-cta"
  code="EL+2500"
  output="INDUSTRY READY ENGINEER"
/>
    </>
  );
}
