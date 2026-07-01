import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { courseSchema } from "@/lib/schema";
import { getProgramBySlug } from "@/data/programs";
import { allProgramSlugs } from "@/config/programs";
import { ProgramDetailHeroSection } from "@/components/sections/programDetail/ProgramDetailHeroSection";
import { WhatYoullLearnSection } from "@/components/sections/programDetail/WhatYoullLearnSection";
import { LearningExperienceSection } from "@/components/sections/programDetail/LearningExperienceSection";
import { ProjectOutcomeSection } from "@/components/sections/programDetail/ProjectOutcomeSection";

interface ProgramDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProgramSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  return generatePageMetadata({
    title: program.name,
    description: program.description,
    path: `/programs/${program.slug}`,
  });
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  // program is defined after notFound() guard — safe to assert
  const p = program!;

  const schema = courseSchema({
    name: p.name,
    description: p.description,
    slug: p.slug,
    duration: p.duration,
  });

  console.log(p)

  return (
  <>
  <ProgramDetailHeroSection 
  program={p}
  />
  <WhatYoullLearnSection
  title={`Apa yang akan kamu pelajari di ${p.name}?`}
  subtitle={p.description}
  learningOutcomes={p.learningOutcomes}
/>
<LearningExperienceSection/>
{/* <ProjectOutcomeSection
  projectOutputs={p.projectOutputs}
  careerDestinations={p.careerDestinations}
  closingStatement="Bukan sekadar menyelesaikan pelatihan. Tetapi membangun fondasi untuk karier engineering."
/> */}
    </>
  );
}
