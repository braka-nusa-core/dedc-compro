"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI      = "rgba(60,100,180,0.18)";
const EI_T    = "rgba(60,100,180,0.45)";
const GREEN   = "#1A8C2E";
const INK     = "#0D1117";
const BG      = "#FFFFFF";

// ── Career pipeline stages ────────────────────────────────────────
const STAGES = [
  { el: "EL+000", title: "Fresh Graduate",      desc: "Lulus dengan bekal teori, belum ada pengalaman industri."      },
  { el: "EL+100", title: "Junior Drafter",      desc: "Mampu membuat gambar teknik 2D menggunakan AutoCAD."           },
  { el: "EL+250", title: "CAD Engineer",        desc: "Menguasai 3D modeling dan standar gambar industri EPC."        },
  { el: "EL+400", title: "Piping Designer",     desc: "Merancang sistem perpipaan dan equipment layout Plant 3D."     },
  { el: "EL+550", title: "BIM Specialist",      desc: "Mengkoordinasi sistem MEP dengan BIM Revit dan clash detection." },
  { el: "EL+700", title: "Industry Ready",      desc: "Siap bergabung sebagai engineer profesional di proyek industri." },
] as const;

// ── Destination company register ─────────────────────────────────
const COMPANIES = [
  { code: "CMP-001", name: "Pertamina",           sector: "OIL & GAS"   },
  { code: "CMP-002", name: "Rekayasa Industri",   sector: "EPC"         },
  { code: "CMP-003", name: "PP (Pembangunan P.)", sector: "CONTRACTOR"  },
  { code: "CMP-004", name: "WIKA",                sector: "CONTRACTOR"  },
  { code: "CMP-005", name: "Tripatra",             sector: "EPC"         },
  { code: "CMP-006", name: "IKPT",                sector: "EPC"         },
  { code: "CMP-007", name: "JGC Indonesia",       sector: "EPC"         },
  { code: "CMP-008", name: "Wijaya Karya",        sector: "CONTRACTOR"  },
] as const;

// Node sizes
const NODE_D   = 16;   // discipline node diameter
const PIPE_X   = 56;   // x of pipe within the left column (px from left of pipeline column)

export function CareerDestinationSection() {
  const reduce     = useReducedMotion();
  const enter      = reduce ? fadeIn : fadeUp;
  const ref        = useRef<HTMLElement>(null);
  const inView     = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="career-heading"
    >
      {/* Grid — left pipeline zone, very low opacity */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ top: 0, bottom: 0, left: 0, width: "46%" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.03) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,${BG} 0%,transparent 10%,transparent 80%,${BG} 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 8%,transparent 92%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={enter} className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                    style={{ background: GREEN }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]"
                    style={{ background: GREEN }} />
                </span>
                <span className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}>
                  Career Destination Map
                </span>
              </div>
              <h2
                id="career-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2.75rem,3vw,5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: INK,
                }}
              >
                Dari Pemula ke{" "}
                <span style={{ color: GREEN }}>Engineer Profesional</span>
              </h2>
            </motion.div>
            <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                Training DEDC bukan kursus software. Ini adalah pipeline
                karier terstruktur yang mendeploy engineer siap industri ke
                perusahaan-perusahaan EPC dan Oil & Gas terkemuka.
              </p>
            </motion.div>
          </div>

          {/* ══ MAIN CONTENT ══════════════════════════════════════ */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* Top dimension line — full width */}
            <div className="hidden lg:flex items-center" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}>
                CAREER DEVELOPMENT · SECTION C–C · REV-C2
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Two-column layout: pipeline left, register right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 pt-10 pb-4">

              {/* ── LEFT: Vertical career pipeline ────────────── */}
              <div className="lg:col-span-6 relative">

                {/*
                  Continuous vertical pipe — absolute, full column height.
                  Positioned at PIPE_X from left of this column.
                  All nodes sit ON this pipe at their respective stage heights.
                  Elevation markers sit LEFT of the pipe.
                  Stage content sits RIGHT.
                */}
                <motion.div
                  className="absolute hidden lg:block top-0 bottom-0"
                  style={{ left: PIPE_X, width: 2, background: EI }}
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  aria-hidden="true"
                />

                {STAGES.map((s, i) => {
                  const isLast = i === STAGES.length - 1;
                  const delay  = 0.3 + i * 0.13;
                  const isFinal = i === STAGES.length - 1;

                  return (
                    <motion.div
                      key={s.el}
                      className="relative flex items-start"
                      style={{ paddingBottom: isLast ? 0 : "2.75rem" }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay, duration: 0.45, ease: "easeOut" }}
                    >
                      {/* ── Elevation marker — left of pipe ── */}
                      <div
                        className="hidden lg:flex flex-col items-end"
                        style={{ width: PIPE_X, paddingRight: 14, paddingTop: 3, flexShrink: 0 }}
                        aria-hidden="true"
                      >
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                          {s.el}
                        </span>
                        {/* Horizontal tick from EL label to pipe */}
                        <div style={{ marginTop: 4, width: 10, height: 1, background: EI }} />
                      </div>

                      {/* ── Node on pipe ── */}
                      <div
                        className="hidden lg:flex items-center justify-center flex-shrink-0"
                        style={{
                          width: NODE_D,
                          height: NODE_D,
                          borderRadius: "50%",
                          border: `2px solid ${isFinal ? GREEN : "rgba(26,140,46,0.55)"}`,
                          background: BG,
                          marginLeft: -(NODE_D / 2) - 1,  // centre on the pipe
                          marginTop: 2,
                          position: "relative",
                          zIndex: 2,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        <div style={{
                          width: isFinal ? 7 : 5,
                          height: isFinal ? 7 : 5,
                          borderRadius: "50%",
                          background: isFinal ? GREEN : "rgba(26,140,46,0.5)",
                        }} />
                      </div>

                      {/* ── Stage content — right of pipe ── */}
                      <div
                        className="flex flex-col gap-1"
                        style={{ paddingLeft: 20, paddingTop: 0 }}
                      >
                        {/* Mobile: show EL marker inline */}
                        <span className="lg:hidden font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                          {s.el}
                        </span>

                        <h3
                          className="font-heading font-bold"
                          style={{
                            fontSize: isFinal ? "clamp(1.1rem,1.6vw,1.25rem)" : "clamp(1rem,1.4vw,1.0625rem)",
                            color: isFinal ? GREEN : INK,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          {s.title}
                        </h3>
                        <p className="font-body leading-relaxed"
                          style={{ fontSize: 12.5, color: "#64748B", maxWidth: "36ch" }}>
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ── Vertical divider between columns ── */}
              <div
                className="hidden lg:block lg:col-span-0"
                style={{
                  position: "absolute",
                  // This sits between the two grid columns
                }}
                aria-hidden="true"
              />

              {/* ── RIGHT: Destination register ───────────────── */}
              <div className="lg:col-span-6 flex flex-col mt-8 lg:mt-0">

                {/* Register header */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="hidden lg:flex items-center gap-3" aria-hidden="true">
                    <div style={{ width: 1, height: 10, background: EI }} />
                    <div style={{ flex: 1, height: 1, background: EI }} />
                    <span className="font-mono shrink-0"
                      style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                      DESTINATION REGISTER
                    </span>
                  </div>
                  <div className="mt-3 flex flex-col gap-0.5">
                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                      CAREER DESTINATIONS · ALUMNI DEPLOYED
                    </span>
                    <span className="font-heading font-bold mt-1"
                      style={{ fontSize: "clamp(1rem,1.4vw,1.125rem)", color: INK, letterSpacing: "-0.02em" }}>
                      Perusahaan Tujuan Alumni DEDC
                    </span>
                  </div>
                </div>

                {/* Column labels row */}
                <div
                  className="grid grid-cols-12 gap-2 pb-2 mb-0"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.10)" }}
                  aria-hidden="true"
                >
                  <span className="col-span-3 font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    REF
                  </span>
                  <span className="col-span-6 font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    COMPANY
                  </span>
                  <span className="col-span-3 font-mono text-right"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    SECTOR
                  </span>
                </div>

                {/* Company rows */}
                <div className="flex flex-col">
                  {COMPANIES.map((c, i) => {
                    const isLast = i === COMPANIES.length - 1;
                    return (
                      <motion.div
                        key={c.code}
                        variants={reduce ? fadeIn : {
                          hidden: { opacity: 0, x: 8 },
                          visible: {
                            opacity: 1, x: 0,
                            transition: { delay: 0.4 + i * 0.07, duration: 0.4, ease: "easeOut" },
                          },
                        }}
                        className="grid grid-cols-12 gap-2 items-center py-3"
                        style={{ borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.055)" }}
                      >
                        {/* Code */}
                        <span className="col-span-3 font-mono"
                          style={{ fontSize: 9, letterSpacing: "0.1em", color: EI_T }}>
                          {c.code}
                        </span>
                        {/* Name */}
                        <span className="col-span-6 font-body font-medium"
                          style={{ fontSize: 13.5, color: INK, lineHeight: 1.3 }}>
                          {c.name}
                        </span>
                        {/* Sector */}
                        <span className="col-span-3 font-mono text-right"
                          style={{ fontSize: 8.5, letterSpacing: "0.08em", color: "#94A3B8" }}>
                          {c.sector}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Register footer — spec plate */}
                <div
                  className="flex flex-col gap-1.5 mt-6 pt-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}
                >
                  {[
                    ["TOTAL RECORDS",  "8 COMPANIES"],
                    ["COVERAGE",       "EPC / OIL GAS / CONTRACTOR"],
                    ["OUTPUT STATUS",  "DEPLOYED"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-4">
                      <span className="font-mono"
                        style={{ fontSize: 7.5, letterSpacing: "0.12em", color: EI_T, minWidth: 100 }}>
                        {k}
                      </span>
                      <span className="font-mono font-bold"
                        style={{
                          fontSize: 7.5,
                          letterSpacing: "0.1em",
                          color: v === "DEPLOYED" ? GREEN : INK,
                        }}>
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom dimension line */}
            <div className="hidden lg:flex items-center mt-6" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div className="flex flex-col items-center px-5 shrink-0" style={{ gap: 1 }}>
                <span className="font-mono"
                  style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                  OUTPUT: INDUSTRY READY ENGINEER
                </span>
                <span className="font-mono"
                  style={{ fontSize: 8, letterSpacing: "0.15em", color: "rgba(60,100,180,0.28)", whiteSpace: "nowrap" }}>
                  STATUS: DEPLOYED
                </span>
              </div>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}