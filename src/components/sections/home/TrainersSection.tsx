"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { trainers } from "@/data/trainers";
import { staggerContainer, fadeIn } from "@/lib/animations";

const EI_TEXT = "rgba(60,100,180,0.40)";

// Trainer reference codes — mirrors PRG-/SPEC-/ALM- pattern
const TRN_CODES = ["TRN-101", "TRN-102", "TRN-103", "TRN-104"] as const;

export function TrainersSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="trainers"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="trainers-heading"
    >
      {/* Selective grid — top-left, fades before trainer cells */}
      <div className="pointer-events-none select-none absolute top-0 left-0 w-2/5 h-48" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(60,100,180,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(60,100,180,0.04) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 0%, #FFFFFF 80%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 0%, #FFFFFF 70%)" }} />
      </div>

      {/* TRN coordinate — bottom-left corner, anchored */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex flex-col items-start gap-0.5 z-10"
        style={{ bottom: 24, left: 36 }}
        aria-hidden="true"
      >
        <div style={{ width: 1, height: 10, background: "rgba(60,100,180,0.20)" }} />
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.13em", color: "rgba(60,100,180,0.38)" }}>
          TRN-STA
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        <SectionHeader
          overline="Trainer Kami"
          title="Belajar dari Praktisi Industri Nyata"
          accentWord="Industri"
          subtitle="Semua trainer DEDC adalah profesional aktif dengan rekam jejak proyek di industri."
          align="center"
          as="h2"
        />

        {/*
          Layout: open grid, no card backgrounds.
          Each trainer is a vertical block separated by hairline dividers
          — same grammar as WhyChoose / SuccessStories / Programs.
          Avatar is circular and modest (h-16) — credibility signal,
          not a portrait gallery.
        */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {trainers.map((t, i) => {
            const code = TRN_CODES[i] ?? "TRN-000";
            const isLastInRow = (i + 1) % 4 === 0 || i === trainers.length - 1;
            const isBottomRowMobile = i >= trainers.length - 2;

            return (
              <motion.div
                key={t.slug}
                id={`trainer-${t.slug}`}
                variants={
                  reduce
                    ? fadeIn
                    : {
                        hidden: { opacity: 0, y: 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
                        },
                      }
                }
                className="relative flex flex-col items-center text-center gap-3 px-4 md:px-6 py-2"
                style={{
                  borderRight: !isLastInRow ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  borderBottom: isBottomRowMobile ? undefined : "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {/* Reference code */}
                <span
                  className="font-mono self-start md:self-center block"
                  style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_TEXT }}
                  aria-hidden="true"
                >
                  {code}
                </span>

                {/* Avatar */}
                <div
                  className="relative h-16 w-16 rounded-full overflow-hidden shrink-0"
                  style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <Image
                    src={t.photoSrc}
                    alt={`Foto ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Name + title */}
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-heading font-semibold leading-snug"
                    style={{ fontSize: 14, color: "#0D1117" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="font-body leading-tight"
                    style={{ fontSize: 11.5, color: "#64748B" }}
                  >
                    {t.title}
                  </span>
                </div>

                {/* Experience */}
                <span
                  className="flex items-center gap-1.5 font-body"
                  style={{ fontSize: 11, color: "#94A3B8" }}
                >
                  <Briefcase className="h-3 w-3 shrink-0" style={{ color: "#1A8C2E" }} aria-hidden="true" />
                  {t.experienceYears}+ tahun
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}