"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#FFFFFF";

// Deliverable register entries — one per program discipline
const register = [
  {
    code:       "DWG-001",
    coord:      "X-100",
    discipline: "AutoCAD",
    outputs: [
      "General Arrangement Drawing",
      "Plot Plan",
      "Equipment Layout",
      "Isometric Drawing",
    ],
  },
  {
    code:       "DWG-002",
    coord:      "X-200",
    discipline: "Plant 3D",
    outputs: [
      "Piping Model",
      "Pipe Routing",
      "Orthographic Drawing",
      "Equipment Model",
    ],
  },
  {
    code:       "DWG-003",
    coord:      "X-300",
    discipline: "Revit MEP",
    outputs: [
      "HVAC System",
      "Plumbing Layout",
      "Electrical Model",
      "Clash Detection Report",
    ],
  },
  {
    code:       "DWG-004",
    coord:      "X-400",
    discipline: "AVEVA E3D",
    outputs: [
      "Structural Model",
      "Pipe Support",
      "Steel Connection",
      "Advanced Piping",
    ],
  },
] as const;

export function EngineeringDeliverablesSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="deliverables-heading"
    >
      {/*
        GRID — top-left corner only.
        Blueprint grid confined to the header zone, fading before
        the register table. This creates engineering atmosphere
        at the top without competing with the document rows below.
      */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ top: 0, left: 0, width: "40%", height: "45%" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.034) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.034) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Fade right */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,transparent 0%,${BG} 70%)`,
        }} />
        {/* Fade bottom */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,transparent 0%,${BG} 75%)`,
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

          {/* ── Section header ─────────────────────────────────── */}
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
                  Engineering Deliverables
                </span>
              </div>
              <h2
                id="deliverables-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2rem,3.5vw+0.25rem,3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: INK,
                }}
              >
                Output yang Akan{" "}
                <span style={{ color: GREEN }}>Anda Hasilkan</span>
              </h2>
            </motion.div>
            <motion.div variants={enter}
              className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                Setiap program menghasilkan deliverable nyata yang langsung
                dapat digunakan dalam proyek engineering profesional.
              </p>
            </motion.div>
          </div>

          {/* ══ DELIVERABLE REGISTER ═══════════════════════════════
              Architecture: a real document register.

              Top dimension line spanning full width:
              ←─── X-100 ─── X-200 ─── X-300 ─── X-400 ──→
              Label: DELIVERABLE REGISTER · REV-A2

              Below: 4 column register with thin vertical separators.
              Each column = one discipline's drawing schedule.
              Column header: code + coord + discipline name.
              Rows below: output items, each with a small tick mark.

              No cards. No shadows. Pure document register aesthetic.
          ═══════════════════════════════════════════════════════ */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* ── REGISTER HEADER DIMENSION LINE ─────────────────
                Full-width line with coordinate ticks at each column.
                DELIVERABLE REGISTER label centred on the line.
                X-coords sit above ticks, below the label.
            */}
            <div
              className="hidden lg:block relative"
              style={{ height: 56 }}
              aria-hidden="true"
            >
              {/* Full spine */}
              <div className="absolute"
                style={{ left: 0, right: 0, top: 22, height: 1, background: EI }} />

              {/* Left boundary tick */}
              <div className="absolute"
                style={{ left: 0, top: 12, width: 1, height: 20, background: EI }} />

              {/* Right boundary tick */}
              <div className="absolute"
                style={{ right: 0, top: 12, width: 1, height: 20, background: EI }} />

              {/* Centred label ON the line */}
              <span
                className="font-mono absolute"
                style={{
                  top: 27, left: "50%", transform: "translateX(-50%)",
                  fontSize: 9, letterSpacing: "0.18em", color: EI_T,
                  whiteSpace: "nowrap", background: BG, padding: "0 16px",
                }}
              >
                DELIVERABLE REGISTER · REV-A2
              </span>

              {/* Column ticks + X-coords — at 12.5%, 37.5%, 62.5%, 87.5% */}
              {register.map((r, i) => (
                <div key={r.code} className="absolute flex flex-col items-center"
                  style={{ left: `${12.5 + i * 25}%`, top: 0, transform: "translateX(-50%)" }}>
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                    {r.coord}
                  </span>
                  {/* Tick from label down to spine */}
                  <div style={{ width: 1, height: 22, background: EI, marginTop: 2 }} />
                </div>
              ))}
            </div>

            {/* ── REGISTER TABLE ─────────────────────────────────── */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              style={{ borderTop: `1px solid rgba(0,0,0,0.09)` }}
            >
              {register.map((r, i) => {
                const isLast = i === register.length - 1;
                return (
                  <motion.div
                    key={r.code}
                    variants={
                      reduce ? fadeIn : {
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0,
                          transition: { delay: i * 0.09, duration: 0.45, ease: "easeOut" } },
                      }
                    }
                    className="relative flex flex-col"
                    style={{
                      borderRight: !isLast ? "1px solid rgba(0,0,0,0.07)" : undefined,
                      paddingTop: "1.75rem",
                      paddingBottom: "2rem",
                      paddingRight: !isLast ? "2rem" : undefined,
                      paddingLeft: i > 0 ? "2rem" : undefined,
                    }}
                  >
                    {/* Column header — code + discipline */}
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="font-mono"
                        style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                        {r.code}
                      </span>
                      <h3 className="font-heading font-bold"
                        style={{
                          fontSize: "clamp(1rem,1.4vw,1.125rem)",
                          color: INK,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}>
                        {r.discipline}
                      </h3>
                      {/* Short hairline below header — column title underline */}
                      <div style={{ width: 32, height: 1, background: GREEN, marginTop: 4 }} />
                    </div>

                    {/* Output rows — engineering tick + item name */}
                    <ul className="flex flex-col gap-0" role="list"
                      aria-label={`Output ${r.discipline}`}>
                      {r.outputs.map((output, oi) => (
                        <li
                          key={output}
                          className="flex items-start gap-3"
                          style={{
                            paddingTop: "0.625rem",
                            paddingBottom: "0.625rem",
                            borderBottom: oi < r.outputs.length - 1
                              ? "1px solid rgba(0,0,0,0.055)" : undefined,
                          }}
                        >
                          {/*
                            Engineering tick mark — not a bullet, not a check.
                            A small right-angle tick: one vertical + one horizontal
                            stroke, like a datum mark on a drawing.
                          */}
                          <div
                            className="flex-shrink-0 relative mt-1"
                            style={{ width: 10, height: 10 }}
                            aria-hidden="true"
                          >
                            {/* Vertical stroke */}
                            <div style={{
                              position: "absolute",
                              left: 0, top: 0, bottom: 0,
                              width: 1, background: GREEN,
                            }} />
                            {/* Horizontal stroke */}
                            <div style={{
                              position: "absolute",
                              left: 0, top: 0,
                              right: 0, height: 1,
                              background: GREEN,
                            }} />
                          </div>

                          <span className="font-body"
                            style={{ fontSize: 13, color: "#52606D", lineHeight: 1.4 }}>
                            {output}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* ── BOTTOM REGISTER CLOSING LINE ─────────────────── */}
            <div
              className="hidden lg:flex items-center"
              style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}
              aria-hidden="true"
            >
              {/* Left metadata block */}
              <div className="flex items-center gap-4 py-3">
                <div style={{ width: 1, height: 24, background: EI }} />
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    DOC TYPE: TRAINING DELIVERABLE SCHEDULE
                  </span>
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    PREPARED BY: DEDC · STATUS: ISSUED FOR TRAINING
                  </span>
                </div>
              </div>

              <div style={{ flex: 1 }} />

              {/* Right metadata block */}
              <div className="flex items-center gap-4 py-3">
                <div className="flex flex-col items-end gap-0.5">
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    TOTAL DWG: 16 OUTPUT ITEMS
                  </span>
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                    REV-A2 · 4 DISCIPLINES
                  </span>
                </div>
                <div style={{ width: 1, height: 24, background: EI }} />
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}