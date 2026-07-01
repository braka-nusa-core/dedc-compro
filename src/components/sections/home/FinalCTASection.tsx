"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { CTASection } from "@/components/common/CTASection";

const GREEN = "#1A8C2E";
const INK = "#0D1117";
const EI = "rgba(60,100,180,0.20)";
const EI_TEXT = "rgba(60,100,180,0.40)";

export function FinalCTASection() {
  const reduce = useReducedMotion();
  const enter = reduce ? fadeIn : fadeUp;

  return (
    <CTASection
  overline="READY TO START"
  title="Mungkin Kisah Berikutnya Adalah Milik Anda."
  accentWord="Milik Anda."
  subtitle="Lebih dari 1.000 alumni DEDC telah membangun karier di berbagai perusahaan engineering. Sekarang giliran Anda menentukan langkah berikutnya."
  waContext="final-cta"
/>
  );
}