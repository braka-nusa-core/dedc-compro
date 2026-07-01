"use client";

import { CTASection } from "@/components/common/CTASection";


export function ProgramsCTASection() {

  return (
    <CTASection
      overline="REV-P01"
      title="Pilih Program. Mulai Hari Ini."
      accentWord="Mulai Hari Ini."
      subtitle="Konsultasikan kebutuhan training Anda. Tanpa biaya, tanpa komitmen."
      primaryLabel="Konsultasi Program"
      secondaryLabel="Lihat Semua Program"
      secondaryHref="/programs"
      waContext="final-cta"
      code="PRG-004"
      output="ENGINEERING PROFESSIONAL"
    />
  );
}