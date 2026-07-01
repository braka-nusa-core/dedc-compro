"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens — identical to all programs sections ──────────
const EI    = "rgba(60,100,180,0.15)";
const EI_T  = "rgba(60,100,180,0.45)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Engineering schematic data ───────────────────────────────────
const PROGRAMS = [
  { coord: "X-100", name: "AUTOCAD",    label: "2D / 3D Drafting"  },
  { coord: "X-200", name: "PLANT 3D",   label: "Piping Design"     },
  { coord: "X-300", name: "REVIT MEP",  label: "BIM Workflow"      },
  { coord: "X-400", name: "AVEVA E3D",  label: "Plant Modeling"    },
] as const;

export function ProgramsHeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG, minHeight: "100svh" }}
      aria-label="Programs hero"
    >
      {/*
        GRID — two zones only.
        Right zone: behind the schematic visual.
        Left zone: a narrow top-band that fades immediately.
        Neither covers the headline. Left column is clean.
      */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
        {/* Right zone — behind schematic */}
        <div className="absolute top-0 bottom-0 right-0" style={{ left: "58%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.04) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.04) 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right,${BG} 0%,transparent 18%,transparent 88%,${BG} 100%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom,${BG} 0%,transparent 12%,transparent 88%,${BG} 100%)`,
          }} />
        </div>

        {/* Top-right coordinate labels */}
        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {["X-101", "REV-P01", "PL-302"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade — blends into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{
          background: `linear-gradient(to top,${BG},transparent)`,
        }} />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[calc(100svh-4rem)]">

          {/* ════════ LEFT — headline, 60% ════════ */}
          <motion.div
            className="lg:col-span-7 flex flex-col py-24 lg:py-32"
            style={{ gap: "2.25rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Technical label + line */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0">
              <span className="font-mono shrink-0 pr-4"
                style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
                PROGRAMS · REV-P01
              </span>
              <div style={{ width: 80, height: 1, background: EI }} />
              <div style={{ width: 1, height: 8, background: EI }} />
            </motion.div>

            {/*
              HEADLINE — this is the section.
              4 lines. Huge. Tight. Confident.
              "Engineering" alone in green — single accent word.
              max 12ch forces natural line breaks.
            */}
            <motion.h1
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.75rem,5vw,5rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                color: INK,
                maxWidth: "12ch",
              }}
            >
              Pilih Jalur{" "}
              <span style={{ color: GREEN }}>Engineering</span>{" "}
              yang Sesuai Karier Anda
            </motion.h1>

            {/* Subtitle — short, confident, max 55ch */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
                lineHeight: 1.75,
                color: "#52606D",
                maxWidth: "52ch",
              }}
            >
              Dari AutoCAD Drafting hingga Plant Design dan BIM Engineering.
              Program dirancang mengikuti workflow industri nyata, agar Anda
              siap bekerja lebih cepat.
            </motion.p>

            {/* CTA pair */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="whatsapp" size="lg" asChild>
                <WhatsAppLink context="hero" ariaLabel="Konsultasi Program via WhatsApp (tab baru)">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Konsultasi Program
                </WhatsAppLink>
              </Button>

              {/* Secondary — text only, no button */}
              <Link
                href="#programs"
                className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{ fontSize: 15, color: "#374151" }}
              >
                Lihat Semua Program{" "}
                <span
                  className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT — engineering schematic ════════ */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex flex-col justify-center py-24 lg:py-32 pl-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            {/*
              ENGINEERING SCHEMATIC
              ──────────────────────
              A vertical pipeline on the left.
              Each node branches right with a horizontal leader arm.
              X-coord above each node on the pipe.
              Program name right of arm.
              Sub-label below program name.

              This is the HistorySection pipeline pattern
              applied as a standalone schematic visual —
              no text, just engineering notation.

              The pipe is the spine. The leader arms are the branches.
              The names are the deliverables.
            */}

            {/* Dimension line across the top */}
            <div
              className="flex items-center mb-8"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0"
                style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T, whiteSpace: "nowrap" }}>
                SOFTWARE PIPELINE · 4 PROGRAMS
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Pipe + nodes */}
            <div className="relative flex flex-col" role="list" aria-label="Program DEDC">
              {/* Continuous vertical pipe */}
              <div
                className="absolute top-0 bottom-0"
                style={{ left: 32, width: 2, background: EI }}
                aria-hidden="true"
              />

              {PROGRAMS.map((p, i) => {
                const isLast = i === PROGRAMS.length - 1;
                return (
                  <motion.div
                    key={p.coord}
                    className="relative flex items-start"
                    style={{ paddingBottom: isLast ? 0 : "2.5rem" }}
                    role="listitem"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.45, ease: "easeOut" }}
                  >
                    {/* Left: coord label + node */}
                    <div
                      className="flex flex-col items-center shrink-0"
                      style={{ width: 64 }}
                      aria-hidden="true"
                    >
                      {/* Coord above node */}
                      <span className="font-mono mb-1"
                        style={{ fontSize: 7.5, letterSpacing: "0.12em", color: EI_T }}>
                        {p.coord}
                      </span>
                      {/* Node circle — on the pipe */}
                      <div style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        border: `1.5px solid ${GREEN}`,
                        background: BG,
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: GREEN }} />
                      </div>
                    </div>

                    {/* Leader arm + program name */}
                    <div className="flex items-center" style={{ paddingTop: 14 }}>
                      {/* Horizontal arm */}
                      <div style={{ width: 28, height: 1, background: EI, flexShrink: 0 }} aria-hidden="true" />
                      {/* Endpoint tick */}
                      <div style={{ width: 1, height: 6, background: EI, flexShrink: 0, marginRight: 12 }} aria-hidden="true" />
                      {/* Name + label */}
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono font-semibold"
                          style={{ fontSize: 11, letterSpacing: "0.08em", color: INK }}>
                          {p.name}
                        </span>
                        <span className="font-mono"
                          style={{ fontSize: 9, letterSpacing: "0.06em", color: "#94A3B8" }}>
                          {p.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom closing line + EL label */}
            <div
              className="flex items-center mt-8"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ width: 56, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0"
                style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                EL+2500
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}