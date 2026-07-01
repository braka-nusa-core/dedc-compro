"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.45)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

const SPECS = [
  {
    code:  "SPEC-01",
    title: "Industry Workflow",
    desc:  "Peserta memahami alur kerja nyata di proyek EPC dan Oil & Gas — dari design brief hingga drawing production.",
  },
  {
    code:  "SPEC-02",
    title: "Engineering Standard",
    desc:  "Setiap gambar yang dihasilkan mengikuti standar industri: ASME, ISO, PID, dan standar EPC internasional.",
  },
  {
    code:  "SPEC-03",
    title: "Project Simulation",
    desc:  "Latihan menggunakan studi kasus proyek industri nyata — bukan latihan akademis yang tidak relevan.",
  },
  {
    code:  "SPEC-04",
    title: "Professional Mindset",
    desc:  "Peserta dilatih dengan disiplin dan profesionalisme yang sama dengan standar kerja perusahaan EPC terkemuka.",
  },
] as const;

const CHECKLIST = [
  "WORKFLOW",
  "STANDARD",
  "COORDINATION",
  "INDUSTRY PRACTICE",
] as const;

export function ReadyForIndustrySection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="readiness-heading"
    >
      {/*
        GRID — corners only. Four small patches.
        Grid is present but never seen as a surface.
        Users feel engineering precision in the periphery.
      */}
      <div className="pointer-events-none select-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {/* Top-left corner */}
        <div className="absolute" style={{ top: 0, left: 0, width: "22%", height: "35%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(60,100,180,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(60,100,180,0.032) 1px,transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right,transparent 0%,${BG} 75%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom,transparent 0%,${BG} 75%)`,
          }} />
        </div>
        {/* Bottom-right corner */}
        <div className="absolute" style={{ bottom: 0, right: 0, width: "22%", height: "35%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(60,100,180,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(60,100,180,0.032) 1px,transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to left,transparent 0%,${BG} 75%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to top,transparent 0%,${BG} 75%)`,
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
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
                  Readiness Specification
                </span>
              </div>
              <h2
                id="readiness-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2rem,3.5vw+0.25rem,3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: INK,
                }}
              >
                Siap untuk{" "}
                <span style={{ color: GREEN }}>Industri</span>
              </h2>
            </motion.div>
            <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                DEDC tidak hanya mengajarkan software. Setiap aspek training
                dirancang untuk mempersiapkan peserta menghadapi standar
                profesional di industri engineering sesungguhnya.
              </p>
            </motion.div>
          </div>

          {/* ══ READINESS SPECIFICATION SHEET ════════════════════ */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* Top dimension line */}
            <div className="hidden lg:flex items-center" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}>
                READINESS SPECIFICATION · SECTION D–D · REV-D1
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Two-column body: spec list left, checklist panel right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 pt-0">

              {/* ── LEFT: Specification list ─────────────────── */}
              <div className="lg:col-span-8">
                {SPECS.map((s, i) => {
                  const isLast = i === SPECS.length - 1;
                  return (
                    <motion.div
                      key={s.code}
                      variants={reduce ? fadeIn : {
                        hidden: { opacity: 0, y: 14 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                        },
                      }}
                      className="grid grid-cols-12 gap-6 py-9"
                      style={{
                        borderTop: "1px solid rgba(0,0,0,0.07)",
                        borderBottom: isLast ? "1px solid rgba(0,0,0,0.07)" : undefined,
                      }}
                    >
                      {/* Spec code — left column, reads as index */}
                      <div className="col-span-2 flex flex-col justify-start pt-1">
                        <span className="font-mono"
                          style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                          {s.code}
                        </span>
                        {/* Small vertical tick below code */}
                        <div
                          style={{ width: 1, height: 14, background: EI, marginTop: 5 }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content — title + description */}
                      <div className="col-span-10 flex flex-col gap-3">
                        <h3
                          className="font-heading font-bold"
                          style={{
                            fontSize: "clamp(1.0625rem,1.5vw,1.25rem)",
                            color: INK,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="font-body leading-relaxed"
                          style={{ fontSize: 14, color: "#52606D", maxWidth: "58ch" }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ── RIGHT: Engineering readiness checklist ────── */}
              <motion.div
                className="lg:col-span-4 hidden lg:flex flex-col justify-center"
                variants={reduce ? fadeIn : {
                  hidden: { opacity: 0, x: 12 },
                  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } },
                }}
              >
                {/*
                  Readiness panel — engineering specification plate.
                  Bordered, monospace, tight.
                  STATUS: READY in green.
                  Everything else blueprint blue.
                */}
                <div
                  className="flex flex-col gap-0"
                  style={{ border: `1px solid ${EI}`, borderRadius: 2 }}
                >
                  {/* Panel header */}
                  <div
                    className="px-5 py-3 flex flex-col gap-1"
                    style={{ borderBottom: `1px solid ${EI}` }}
                  >
                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.18em", color: EI_T }}>
                      READINESS CHECKLIST
                    </span>
                    <span className="font-mono"
                      style={{ fontSize: 7, letterSpacing: "0.14em", color: "rgba(60,100,180,0.28)" }}>
                      REV-D1 · SECTION D–D
                    </span>
                  </div>

                  {/* Checklist items */}
                  <div className="flex flex-col px-5 py-2">
                    {CHECKLIST.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 py-3"
                        style={{
                          borderBottom: i < CHECKLIST.length - 1
                            ? "1px solid rgba(60,100,180,0.10)" : undefined,
                        }}
                      >
                        {/* Engineering tick — right-angle mark */}
                        <div className="relative shrink-0" style={{ width: 9, height: 9 }} aria-hidden="true">
                          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: GREEN }} />
                          <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: 1, background: GREEN }} />
                        </div>
                        <span className="font-mono"
                          style={{ fontSize: 9, letterSpacing: "0.12em", color: EI_T }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Status footer */}
                  <div
                    className="px-5 py-4 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${EI}` }}
                  >
                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                      STATUS
                    </span>
                    <span className="font-mono font-bold"
                      style={{ fontSize: 11, letterSpacing: "0.2em", color: GREEN }}>
                      READY
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom closing line */}
            <div className="hidden lg:flex items-center mt-6" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                READINESS CONFIRMED · OUTPUT: INDUSTRY-GRADE ENGINEER
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