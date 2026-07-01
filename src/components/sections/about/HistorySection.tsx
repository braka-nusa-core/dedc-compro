"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { staggerContainer, fadeIn } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";

// Pipeline column left-offset from content container — fixed pixel anchor
// so all pipeline elements align regardless of grid column calculations.
// This is the x-coordinate of the vertical pipe within the section.
const PIPE_X = 96; // px from left edge of content area

const milestones = [
  { year: "2011", ref: "TM-2011", title: "DEDC Didirikan",     desc: "DEDC berdiri sebagai lembaga pelatihan AutoCAD pertama dengan fokus industri engineering di Jakarta." },
  { year: "2014", ref: "TM-2014", title: "Ekspansi Program",   desc: "Menambahkan program AutoCAD Plant 3D untuk memenuhi kebutuhan industri EPC dan Oil & Gas yang terus berkembang." },
  { year: "2017", ref: "TM-2017", title: "500+ Alumni",        desc: "Mencapai tonggak 500 alumni yang berkarier di berbagai perusahaan engineering terkemuka Indonesia." },
  { year: "2019", ref: "TM-2019", title: "Revit MEP & E3D",    desc: "Meluncurkan program Revit MEP dan AVEVA E3D, memperluas cakupan ke industri bangunan dan plant desain tingkat lanjut." },
  { year: "2021", ref: "TM-2021", title: "Corporate Training", desc: "Memulai layanan corporate training untuk perusahaan-perusahaan EPC, membangun jaringan 50+ klien korporat." },
  { year: "2024", ref: "TM-2024", title: "1.000+ Alumni",      desc: "Melewati tonggak 1.000 alumni aktif yang bekerja di EPC, Oil & Gas, MEP, dan Industrial Plant di seluruh Indonesia." },
] as const;

export function HistorySection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/*
        BLUEPRINT GRID — wide, extremely low opacity.
        Spans ~75% of the section width so the engineering atmosphere
        is present throughout. Fades naturally toward the right edge.
        Users feel it before they see it.
      */}
      <div
        className="pointer-events-none select-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.032) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.032) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Fade right 25% — grid dissolves before the right margin */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, transparent 0%, transparent 72%, #FFFFFF 100%)",
        }} />
        {/* Fade top and bottom — doesn't compete with SectionHeader or closing */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, transparent 8%, transparent 92%, #FFFFFF 100%)",
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 flex flex-col gap-16">

        <SectionHeader
          overline="Perjalanan Kami"
          title="14 Tahun Membangun Kompetensi Industri"
          accentWord="Kompetensi"
          subtitle="Dari satu program hingga empat — dari satu kelas hingga ratusan alumni."
          align="center"
        />

        {/*
          ENGINEERING PIPELINE INSTRUMENT
          ─────────────────────────────────
          Structure (desktop):

          ←───────────────── SECTION A–A · TIMELINE 2011–2024 ──────────────────→
                             │   (top dimension line, full width)
                             │
                             ●── TM-2011 ─── 2011 · DEDC Didirikan
                             │               Description...
                             │
                             ●── TM-2014 ─── 2014 · Ekspansi Program
                             │               Description...
                             │
                             ●── ...
                             │
          ←──── EL+2024 ─────┘   (closing dimension line)

          The top dimension line and vertical pipe meet at a shared
          T-junction at PIPE_X. The pipe is continuous. Each milestone
          branches RIGHT with a short horizontal connector.
          This is one connected engineering instrument, not
          independent elements placed near each other.
        */}
        <div className="relative">

          {/* ── TOP DIMENSION LINE ──────────────────────────────────
              Full-width horizontal. Terminates at PIPE_X with a
              downward tick that IS the top of the vertical pipe.
              The label sits centred on the line to the right of PIPE_X.
          */}
          <div
            className="hidden lg:block relative mb-0"
            style={{ height: 10 }}
            aria-hidden="true"
          >
            {/* Left arm — from left edge to pipe */}
            <div
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: PIPE_X,
                height: 1,
                background: EI,
              }}
            />
            {/* Left tick */}
            <div
              className="absolute"
              style={{ left: 0, top: 0, width: 1, height: 10, background: EI }}
            />
            {/* Right arm — from pipe to right edge */}
            <div
              className="absolute flex items-center"
              style={{ left: PIPE_X, right: 0, top: 0, height: 1 }}
            >
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span
                className="font-mono shrink-0 px-5"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}
              >
                SECTION A–A · TIMELINE 2011–2024
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              {/* Right tick */}
              <div style={{ width: 1, height: 10, background: EI, position: "absolute", right: 0, top: 0 }} />
            </div>
            {/* T-junction downward tick — where dimension line meets the pipe */}
            <div
              className="absolute"
              style={{ left: PIPE_X, top: 0, width: 1, height: 10, background: EI }}
            />
          </div>

          {/* ── PIPELINE + MILESTONES ─────────────────────────────── */}
          <motion.div
            className="relative flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/*
              Continuous vertical pipe — runs the full height of the
              milestone list, behind all the branch connectors.
              Positioned absolutely at PIPE_X.
            */}
            <div
              className="hidden lg:block absolute top-0 bottom-0"
              style={{ left: PIPE_X, width: 1, background: EI }}
              aria-hidden="true"
            />

            {milestones.map((m, i) => {
              const isLast = i === milestones.length - 1;

              return (
                <motion.div
                  key={m.year}
                  variants={
                    reduce
                      ? fadeIn
                      : {
                          hidden: { opacity: 0, x: -8 },
                          visible: {
                            opacity: 1, x: 0,
                            transition: { delay: i * 0.09, duration: 0.5, ease: "easeOut" },
                          },
                        }
                  }
                  className="relative flex"
                  style={{ paddingBottom: isLast ? 0 : "4rem" }}
                >
                  {/* ── Desktop pipeline branch system ───────────── */}
                  <div
                    className="hidden lg:block shrink-0"
                    style={{ width: PIPE_X, position: "relative" }}
                    aria-hidden="true"
                  >
                    {/* Pipeline node — sits on the vertical pipe */}
                    <div
                      style={{
                        position: "absolute",
                        left: PIPE_X - 4,   // centre on pipe (7px wide / 2 - 0.5px pipe)
                        top: 16,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        border: `1.5px solid ${GREEN}`,
                        background: "#FFFFFF",
                      }}
                    />

                    {/* TM-YYYY reference — above the node, left of pipe */}
                    <span
                      className="font-mono absolute text-right"
                      style={{
                        right: 16,
                        top: 7,
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        color: EI_T,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.ref}
                    </span>
                  </div>

                  {/* ── Branch connector + content ────────────────── */}
                  <div className="flex flex-col flex-1" style={{ paddingLeft: 0 }}>
                    {/* Horizontal branch — from node rightward into content */}
                    <div
                      className="hidden lg:flex items-center"
                      style={{ marginTop: 19, marginBottom: 20 }}
                      aria-hidden="true"
                    >
                      {/* Branch arm */}
                      <div style={{ width: 32, height: 1, background: EI, flexShrink: 0 }} />
                      {/* Branch endpoint tick */}
                      <div style={{ width: 1, height: 6, background: EI, flexShrink: 0 }} />
                      {/* Year inline on the branch */}
                      <span
                        className="font-heading font-bold ml-4"
                        style={{
                          fontSize: "clamp(1.75rem,2.8vw,2.25rem)",
                          lineHeight: 1,
                          letterSpacing: "-0.04em",
                          color: GREEN,
                        }}
                      >
                        {m.year}
                      </span>
                    </div>

                    {/* Mobile: year */}
                    <span
                      className="lg:hidden font-heading font-bold mb-2"
                      style={{ fontSize: "1.75rem", lineHeight: 1, letterSpacing: "-0.04em", color: GREEN }}
                    >
                      {m.year}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-heading font-semibold mb-3"
                      style={{
                        fontSize: "clamp(1rem,1.3vw,1.125rem)",
                        color: INK,
                        lineHeight: 1.25,
                        paddingLeft: "var(--branch-indent, 0)",
                      }}
                    >
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        fontSize: 13.5,
                        color: "#64748B",
                        maxWidth: "52ch",
                        lineHeight: 1.75,
                      }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── CLOSING DIMENSION LINE ──────────────────────────────
              Short line from left edge to PIPE_X, closing the pipe.
              Label: EL+2024 — final elevation marker.
          */}
          <div
            className="hidden lg:flex items-center mt-0"
            aria-hidden="true"
          >
            {/* Left tick */}
            <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            {/* Arm to pipe */}
            <div style={{ width: PIPE_X - 1, height: 1, background: EI }} />
            {/* Label */}
            <span
              className="font-mono px-4 shrink-0"
              style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T }}
            >
              EL+2024
            </span>
            {/* Trailing arm */}
            <div style={{ width: 40, height: 1, background: EI }} />
          </div>

        </div>
      </div>
    </section>
  );
}