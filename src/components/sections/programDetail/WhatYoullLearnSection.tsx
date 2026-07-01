"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import type { LearningOutcome } from "@/types";

// ─── Design tokens ────────────────────────────────────────────────
const EI = "rgba(60,100,180,0.16)";
const EI_T = "rgba(60,100,180,0.42)";
const INK = "#0D1117";
const BG = "#F7F9FC";

interface Props {
  title?: string;
  subtitle?: string;
  learningOutcomes: LearningOutcome[];
}

export function WhatYoullLearnSection({
  title = "Yang Akan Anda Kuasai",
  subtitle = "Seluruh materi disusun mengikuti kebutuhan proyek engineering modern, dimulai dari fundamental hingga workflow yang digunakan di industri.",
  learningOutcomes,
}: Props) {
  const reduce = useReducedMotion();
  const enter = reduce ? fadeIn : fadeUp;

  return (
    <section
      id="learn"
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="wyl-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        <div className="absolute top-0 right-0" style={{ width: "30%", height: "45%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.036) 1px, transparent 1px),
                linear-gradient(90deg, rgba(60,100,180,0.036) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left, transparent 0%, ${BG} 60%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, ${BG} 70%)` }} />
        </div>

        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {["SPEC-DOC-001", "REV-A1", "EL+0000"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* ════ LEFT — 4 cols ════ */}
          <motion.div
            className="lg:col-span-4 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>WHAT YOU&apos;LL LEARN</span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>SPEC-DOC-001</span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-A1</span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            <motion.p variants={fadeIn} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", color: EI_T, textTransform: "uppercase" }}
              aria-hidden="true">
              What You&apos;ll Learn
            </motion.p>

            <motion.h2
              id="wyl-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(1.875rem, 3vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.028em",
                color: INK,
              }}
            >
              {title}
            </motion.h2>

            <motion.div variants={fadeIn} style={{ width: 48, height: 1, background: EI }} aria-hidden="true" />

            <motion.p variants={enter} className="font-body"
              style={{
                fontSize: "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color: "#52606D",
              }}
            >
              {subtitle}
            </motion.p>

            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-4 pt-4" aria-hidden="true">
              <div style={{ width: 1, height: 32, background: EI }} />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono font-bold"
                  style={{ fontSize: 18, letterSpacing: "-0.02em", color: INK }}>
                  {learningOutcomes.length}
                </span>
                <span className="font-mono"
                  style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  KOMPETENSI UTAMA
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ════ RIGHT — 7 cols (offset 1) ════ */}
          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ol className="relative flex flex-col" aria-label="Daftar kompetensi program">
              {learningOutcomes.map((outcome, index) => {
                const isLast = index === learningOutcomes.length - 1;

                return (
                  <motion.li
                    key={outcome.id}
                    variants={
                      reduce ? fadeIn : {
                        hidden: { opacity: 0, y: 14 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: index * 0.08, duration: 0.45, ease: "easeOut" },
                        },
                      }
                    }
                    className="relative flex gap-0"
                  >
                    {/* Pipeline column */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{ width: 24, flexShrink: 0, paddingTop: 4 }}
                      aria-hidden="true"
                    >
                      <div style={{
                        width: 10, height: 10, borderRadius: "50%",
                        border: `1.5px solid ${EI_T}`,
                        background: BG, flexShrink: 0, position: "relative", zIndex: 1,
                      }} />
                      {!isLast && (
                        <div style={{
                          width: 1, flex: 1, minHeight: 48,
                          background: EI, marginTop: 4,
                        }} />
                      )}
                    </div>

                    {/* Content column */}
                    <div
                      className="flex flex-col"
                      style={{ paddingLeft: 28, paddingBottom: isLast ? 0 : 40, flex: 1 }}
                    >
                      {/* outcome.id as spec label */}
                      <div className="flex items-center gap-3 mb-3" aria-hidden="true">
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.18em", color: EI_T }}>
                          {outcome.id.toUpperCase()}
                        </span>
                        <div style={{ width: 20, height: 1, background: EI }} />
                      </div>

                      {/*
                        LearningOutcome has only `id` + `description` — no `title`.
                        description is rendered at body-heading size so it reads
                        as the primary statement without needing a separate title.
                      */}
                      <p
                        className="font-body"
                        style={{
                          fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                          lineHeight: 1.72,
                          color: INK,
                          maxWidth: "54ch",
                        }}
                      >
                        {outcome.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>

        </div>

        {/* Bottom engineering strip */}
        <motion.div
          className="hidden lg:flex items-center mt-24"
          style={{ gap: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 10, background: EI }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5"
            style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
            {learningOutcomes.length} KOMPETENSI · PROGRAM CORE · SPEC-DOC-001
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>
      </div>
    </section>
  );
}