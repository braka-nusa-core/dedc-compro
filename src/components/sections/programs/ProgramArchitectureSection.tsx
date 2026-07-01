"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F5F7FA";

const stages = [
  { code: "PRG-001", slug: "autocad",         name: "AutoCAD",   outcome: "2D & 3D drafting standar industri",         level: "Foundation"   },
  { code: "PRG-002", slug: "autocad-plant-3d", name: "Plant 3D",  outcome: "Industrial piping & equipment layout",       level: "Intermediate" },
  { code: "PRG-003", slug: "revit-mep",        name: "Revit MEP", outcome: "Building systems & BIM coordination",        level: "Advanced"     },
  { code: "PRG-004", slug: "e3d",              name: "AVEVA E3D", outcome: "Advanced plant modeling untuk proyek besar", level: "Expert"       },
] as const;

export function ProgramArchitectureSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="program-arch-heading"
    >
      {/* Atmospheric grid */}
      <div className="pointer-events-none select-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.036) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.036) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,${BG} 0%,transparent 6%,transparent 92%,${BG} 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 10%,transparent 90%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* ── Header ─────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={enter} className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45" style={{ background: GREEN }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: GREEN }} />
                </span>
                <span className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}>
                  Jalur Kompetensi Engineering
                </span>
              </div>
              <h2
                id="program-arch-heading"
                className="font-heading font-bold"
                style={{ fontSize: "clamp(2rem,3vw,3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: INK }}
              >
                Jalur Kompetensi{" "}
                <span style={{ color: GREEN }}>Engineering</span>{" "}
                Profesional
              </h2>
            </motion.div>
            <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                Setiap program dirancang sebagai tahap dalam satu jalur karier
                yang kohesif — dari drafting dasar hingga pemodelan plant tingkat
                lanjut yang dibutuhkan industri EPC dan Oil & Gas.
              </p>
            </motion.div>
          </div>

          {/* ── Pipeline ───────────────────────────────────────── */}
          <motion.div variants={fadeIn} className="flex flex-col" aria-label="Pipeline program DEDC">

            {/* Top measurement spine */}
            <div className="hidden lg:block relative mb-0" style={{ height: 44 }} aria-hidden="true">
              <div className="absolute" style={{ left: 0, right: 0, top: 24, height: 1, background: EI }} />
              <div className="absolute" style={{ left: 0, top: 14, width: 1, height: 20, background: EI }} />
              <span className="font-mono absolute" style={{ left: 6, top: 28, fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                SECTION B–B
              </span>
              <div className="absolute" style={{ right: 0, top: 14, width: 1, height: 20, background: EI }} />
              <span className="font-mono absolute" style={{ right: 6, top: 28, fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                EL+0000
              </span>
              {stages.map((s, i) => (
                <div key={s.code} className="absolute flex flex-col items-center"
                  style={{ left: `${12.5 + i * 25}%`, top: 0, transform: "translateX(-50%)" }}>
                  <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                    {s.code}
                  </span>
                  <div style={{ marginTop: 4, width: 1, height: 20, background: EI }} />
                </div>
              ))}
            </div>

            {/* 4 node columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {stages.map((s, i) => {
                const isLast = i === stages.length - 1;
                return (
                  <motion.div
                    key={s.slug}
                    variants={
                      reduce ? fadeIn : {
                        hidden:  { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } },
                      }
                    }
                    className="relative flex flex-col"
                    style={{
                      paddingTop:   "1.5rem",
                      paddingRight: !isLast ? "2.5rem" : undefined,
                      paddingLeft:  i > 0 ? "2.5rem" : undefined,
                      borderRight:  !isLast ? "1px solid rgba(60,100,180,0.10)" : undefined,
                    }}
                  >
                    {/* Vertical drop + node */}
                    <div className="hidden lg:flex flex-col items-center mb-6" style={{ height: 36 }} aria-hidden="true">
                      <div style={{ width: 1, height: 28, background: EI }} />
                      <div style={{
                        width: 8, height: 8, borderRadius: "50%",
                        border: `1.5px solid ${GREEN}`,
                        background: BG, flexShrink: 0,
                      }} />
                    </div>

                    {/* Level */}
                    <span className="font-mono block mb-3"
                      style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                      {s.level.toUpperCase()}
                    </span>

                    {/*
                      Program link — the entire block is the hit target.
                      On hover:
                        · name turns green
                        · a hairline underline slides in from left
                        · ArrowUpRight icon fades in and nudges diagonally
                        · a very faint green wash appears behind the content
                      This makes the clickability unmistakable while
                      staying within the section's editorial restraint.
                    */}
                    <Link
                      href={`/programs/${s.slug}`}
                      className="group relative flex flex-col gap-3 rounded-sm
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-4"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                      aria-label={`Lihat detail program ${s.name}`}
                    >
                      {/* Hover wash */}
                      <span
                        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(26,140,46,0.04)" }}
                        aria-hidden="true"
                      />

                      {/* Name row */}
                      <span className="relative flex items-start gap-2">
                        <span
                          className="font-heading font-bold transition-colors duration-150 group-hover:text-[#1A8C2E]"
                          style={{
                            fontSize:      "clamp(1.25rem,1.8vw,1.5rem)",
                            lineHeight:    1.1,
                            letterSpacing: "-0.025em",
                            color:         INK,
                          }}
                        >
                          {s.name}
                        </span>

                        {/* Arrow icon — hidden at rest, appears on hover */}
                        <ArrowUpRight
                          className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-150
                            translate-x-0 translate-y-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          style={{
                            width:     16,
                            height:    16,
                            marginTop: 4,
                            color:     GREEN,
                          }}
                          aria-hidden="true"
                        />
                      </span>

                      {/* Sliding underline */}
                      <span
                        className="absolute left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100
                          transition-transform duration-200 ease-out"
                        style={{
                          bottom:     -2,
                          background: `rgba(26,140,46,0.35)`,
                        }}
                        aria-hidden="true"
                      />

                      {/* Outcome */}
                      <span
                        className="font-body leading-relaxed"
                        style={{ fontSize: 13.5, color: "#64748B", maxWidth: "22ch" }}
                      >
                        {s.outcome}
                      </span>

                      {/* "Lihat Program" — appears on hover, monospace */}
                      <span
                        className="font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100
                          transition-opacity duration-150"
                        style={{ fontSize: 9, letterSpacing: "0.14em", color: GREEN }}
                        aria-hidden="true"
                      >
                        <span
                          style={{
                            display:         "inline-block",
                            width:           12,
                            height:          1,
                            background:      GREEN,
                            verticalAlign:   "middle",
                          }}
                        />
                        LIHAT PROGRAM
                      </span>
                    </Link>

                    {/* Mobile separator */}
                    <div className="lg:hidden mt-8" style={{ height: 1, background: "rgba(0,0,0,0.07)" }} aria-hidden="true" />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom closing line */}
            <div className="hidden lg:flex items-center mt-10" aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                PIPELINE · 4 STAGES · REV-01
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}