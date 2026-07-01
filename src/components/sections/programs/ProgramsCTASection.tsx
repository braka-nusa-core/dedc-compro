"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { CTASection } from "@/components/common/CTASection";

const EI    = "rgba(60,100,180,0.15)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

const TRUST = [
  "Konsultasi Gratis",
  "Dibimbing Praktisi",
  "Sertifikat Training",
] as const;

// Vertical pipeline stages — input → programs → output
const FLOW = [
  { type: "io",      coord: "FLOW IN",  label: "Peserta Baru"               },
  { type: "program", coord: "X-100",    label: "AutoCAD",    sub: "2D / 3D Drafting"   },
  { type: "program", coord: "X-200",    label: "Plant 3D",   sub: "Piping Design"       },
  { type: "program", coord: "X-300",    label: "Revit MEP",  sub: "BIM Workflow"        },
  { type: "program", coord: "X-400",    label: "AVEVA E3D",  sub: "Plant Modeling"      },
  { type: "io",      coord: "FLOW OUT", label: "Industry Ready Engineer"    },
] as const;

// Pipe x-position within the right column (px from left edge of col)
const PIPE_X = 48;

export function ProgramsCTASection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

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