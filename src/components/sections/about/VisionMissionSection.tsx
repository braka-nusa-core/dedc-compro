"use client";

import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/data/company";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// Extract a short "principle title" from each mission statement
// The first clause becomes the title; the rest is the body.
const missionPrinciples = [
  { num: "01", title: "Kualitas Tertinggi",    body: company.mission[0]! },
  { num: "02", title: "Relevan Industri",       body: company.mission[1]! },
  { num: "03", title: "Ekosistem Alumni",       body: company.mission[2]! },
  { num: "04", title: "Mitra Korporat",         body: company.mission[3]! },
] as const;

// Dimension line with tick marks — reusable inline
function DimLine({ label, right = false }: { label: string; right?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden="true">
      <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
      {right ? (
        <>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5 shrink-0"
            style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
            {label}
          </span>
        </>
      ) : (
        <>
          <span className="font-mono px-5 shrink-0"
            style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
            {label}
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
        </>
      )}
      <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
    </div>
  );
}

export function VisionMissionSection() {
  const reduce = useReducedMotion();
  const enter = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
    >
      {/*
        GRID — present across most of the section.
        Stronger here than elsewhere: the Vision statement is large
        enough to anchor against the grid without being overwhelmed.
        Fades toward bottom and right edges.
      */}
      <div className="pointer-events-none select-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.035) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.035) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Fade right edge */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right, transparent 0%, transparent 78%, ${BG} 100%)`,
        }} />
        {/* Fade top and bottom */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, ${BG} 0%, transparent 6%, transparent 94%, ${BG} 100%)`,
        }} />
        {/* Fade left edge — content starts clean */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right, ${BG} 0%, transparent 8%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">

        {/* ════════════════════════════════════════════
            VISION BLOCK
            Large architectural statement.
            Bracketed top and bottom by dimension lines.
            No SectionHeader — the vision IS the headline.
            ════════════════════════════════════════════ */}
        <motion.div
          className="flex flex-col"
          style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Top framing line — SPEC-A opens the Vision block */}
          <motion.div variants={fadeIn} className="hidden lg:block mb-10">
            <DimLine label="SPEC-A · VISI" />
          </motion.div>

          {/* Vision content — asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

            {/* Left — overline + vision statement as architectural headline */}
            <motion.div variants={enter} className="lg:col-span-8 flex flex-col gap-6">
              {/* Overline — mobile only (desktop: inside dim line) */}
              <p className="lg:hidden font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}>
                SPEC-A · Visi
              </p>

              {/*
                THE VISION STATEMENT — editorial headline treatment.
                Not a paragraph. Not a sub-heading.
                This IS the section's visual centrepiece.
                Scale: between h2 (section heading) and body.
                Confident. Architectural. Left-anchored.
              */}
              <p
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw + 0.25rem, 3rem)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.025em",
                  color: INK,
                  maxWidth: "20ch",
                }}
              >
                {company.vision.split(" Indonesia")[0]}{" "}
                <span style={{ color: GREEN }}>Indonesia</span>
                {company.vision.includes("Indonesia") &&
                  company.vision.split("Indonesia")[1]}
              </p>
            </motion.div>

            {/* Right — coordinate + thin horizontal accent */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-4 hidden lg:flex flex-col items-end justify-end pb-2"
            >
              {/* Right-side vertical coordinate line */}
              <div
                className="flex flex-col items-end gap-2"
                aria-hidden="true"
              >
                <div style={{ width: 1, height: 48, background: EI }} />
                <span className="font-mono text-right"
                  style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  N+0000
                </span>
                <span className="font-mono text-right"
                  style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  E+0001
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom framing line — closes the Vision block */}
          <motion.div variants={fadeIn} className="hidden lg:block mt-10">
            <DimLine label="EL+2500" right />
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════════
            MISSION BLOCK
            Editorial 4-principle grid.
            Each principle: large number accent → short title → body.
            Separated by hairlines. Generous vertical rhythm.
            ════════════════════════════════════════════ */}
        <motion.div
          className="flex flex-col"
          style={{ paddingBottom: "6rem" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* SPEC-B opening line */}
          <motion.div variants={fadeIn} className="hidden lg:block mb-14">
            <DimLine label="SPEC-B · MISI" />
          </motion.div>

          {/* Mission header — left-aligned, understated */}
          <motion.p
            variants={enter}
            className="lg:hidden font-body font-medium uppercase tracking-[0.13em] mb-10"
            style={{ fontSize: 10, color: "#52606D" }}
          >
            SPEC-B · Misi
          </motion.p>

          {/*
            4-principle editorial grid.
            2 cols on desktop, 1 col on mobile.
            Each principle has strong number → short title → body hierarchy.
            The number is green and large — a coordinate reference,
            not a list item counter.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {missionPrinciples.map((p, i) => {
              const isRightCol = i % 2 !== 0;
              const isTopRow = i < 2;

              return (
                <motion.div
                  key={p.num}
                  variants={
                    reduce
                      ? fadeIn
                      : {
                          hidden: { opacity: 0, y: 16 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: i * 0.09, duration: 0.5, ease: "easeOut" },
                          },
                        }
                  }
                  className="flex flex-col gap-4 py-10 px-0"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.07)",
                    paddingRight: !isRightCol ? "3rem" : undefined,
                    paddingLeft: isRightCol ? "3rem" : undefined,
                    borderLeft: isRightCol ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  }}
                >
                  {/* Number — large, green, coordinate-style */}
                  <span
                    className="font-mono font-bold"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.75rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: GREEN,
                    }}
                    aria-hidden="true"
                  >
                    {p.num}
                  </span>

                  {/* Principle title */}
                  <h3
                    className="font-heading font-semibold"
                    style={{
                      fontSize: "clamp(1.125rem,1.6vw,1.25rem)",
                      color: INK,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="font-body leading-relaxed"
                    style={{ fontSize: 14, color: "#64748B", maxWidth: "36ch" }}
                  >
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Closing REV line */}
          <motion.div variants={fadeIn} className="hidden lg:block mt-14">
            <DimLine label="REV-B2" right />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}