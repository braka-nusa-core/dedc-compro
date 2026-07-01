import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";
import { ProgramArchitectureSection } from "@/components/sections/programs/ProgramArchitectureSection";
import { CompetencyMatrixSection } from "@/components/sections/programs/CompetencyMatrixSection";
import { LearningPathSection } from "@/components/sections/programs/LearningPathSection";
import { EngineeringDeliverablesSection } from "@/components/sections/programs/EngineeringDeliverableSection";
import { SoftwareEcosystemSection } from "@/components/sections/programs/SoftwareEcosystemSection";
import { CareerDestinationSection } from "@/components/sections/programs/CareerDestinationSection";
import { ReadyForIndustrySection } from "@/components/sections/programs/ReadyForIndustrySection";
import { InsideClassroomSection } from "@/components/sections/programs/InsideClassroomSection";
import { ProgramsHeroSection } from "@/components/sections/programs/ProgramsHeroSection";
import { ProgramsCTASection } from "@/components/sections/programs/ProgramsCTASection";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.programs.title,
  description: pageSEO.programs.description,
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
    <ProgramsHeroSection/>
    <ProgramArchitectureSection/>
    {/* <CompetencyMatrixSection/> */}
    <LearningPathSection/>
    {/* <EngineeringDeliverablesSection/> */}
    <SoftwareEcosystemSection/>
    <CareerDestinationSection/>
    {/* <ReadyForIndustrySection/> */}
    <InsideClassroomSection/>
    <ProgramsCTASection/>
    </>
  );
}
