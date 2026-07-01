"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Types ────────────────────────────────────────────────────────
export interface ExperienceStage {
  title:       string;
  description: string;
}

interface Props {
  stages?: ExperienceStage[];
}

// ─── Default stages (overridable per-program via props) ───────────
const DEFAULT_STAGES: ExperienceStage[] = [
  {
    title:       "Industry Fundamentals",
    description: "Memahami standar, terminologi, dan workflow yang digunakan engineer profesional di lapangan.",
  },
  {
    title:       "Software Practice",
    description: "Berlatih langsung menggunakan software dengan studi kasus berbasis proyek engineering nyata.",
  },
  {
    title:       "Project Simulation",
    description: "Mengerjakan simulasi proyek yang mencerminkan kondisi kerja di perusahaan EPC dan industri terkait.",
  },
  {
    title:       "Mentoring & Review",
    description: "Sesi review intensif bersama mentor aktif untuk memastikan output sesuai standar industri.",
  },
  {
    title:       "Final Project",
    description: "Menyelesaikan proyek akhir yang menjadi bukti kompetensi siap kerja.",
  },
];

// ─── Component ────────────────────────────────────────────────────
export function LearningExperienceSection({ stages = DEFAULT_STAGES }: Props) {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="lx-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div
        className="pointer-events-none select-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Ghost word */}
        <div
          className="absolute hidden lg:block"
          style={{
            bottom:        "-8%",
            right:         "-4%",
            fontFamily:    "Space Grotesk, system-ui, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(8rem,18vw,22rem)",
            lineHeight:    0.9,
            color:         INK,
            opacity:       0.02,
            letterSpacing: "-0.04em",
            userSelect:    "none",
          }}
        >
          WORKFLOW
        </div>

        {/* Blueprint grid — top right, 30% */}
        <div className="absolute top-0 right-0" style={{ width: "30%", height: "45%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.034) 1px, transparent 1px),
                linear-gradient(90deg, rgba(60,100,180,0.034) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to left, transparent 0%, ${BG} 65%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, transparent 0%, ${BG} 72%)` }}
          />
        </div>

        {/* Engineering codes — top right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["PRG-WF", "REV-C1", "SECTION L–L"].map((c) => (
            <span
              key={c}
              className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: `linear-gradient(to top, ${BG}, transparent)` }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* ════ LEFT — 5 cols ════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Blueprint label */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-0"
              aria-hidden="true"
            >
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                  LEARNING EXPERIENCE
                </span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                  PRG-WF-001
                </span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  REV-C1
                </span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            {/* Overline */}
            <motion.p
              variants={fadeIn}
              className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", color: EI_T, textTransform: "uppercase" }}
              aria-hidden="true"
            >
              Learning Experience
            </motion.p>

            {/* Headline */}
            <motion.h2
              id="lx-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.875rem, 3vw, 3rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.03em",
                color:         INK,
                maxWidth:      "13ch",
              }}
            >
              Belajar Dengan{" "}
              <span style={{ color: GREEN }}>Workflow Industri.</span>
            </motion.h2>

            {/* Hairline */}
            <motion.div
              variants={fadeIn}
              style={{ width: 48, height: 1, background: EI }}
              aria-hidden="true"
            />

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}
            >
              Di DEDC, peserta tidak sekadar belajar software. Mereka
              menjalani workflow engineering yang digunakan perusahaan EPC
              dan industri nyata — melalui praktik terbimbing, mentoring
              langsung, dan simulasi proyek.
            </motion.p>

            {/* Stage count */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-4 pt-4"
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 32, background: EI }} />
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-mono font-bold"
                  style={{ fontSize: 18, letterSpacing: "-0.02em", color: INK }}
                >
                  {stages.length}
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}
                >
                  TAHAP PEMBELAJARAN
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ════ RIGHT — 7 cols (offset 1): vertical workflow ════ */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ol
              className="relative flex flex-col"
              aria-label="Tahapan learning experience DEDC"
            >
              {stages.map((stage, index) => {
                const isLast   = index === stages.length - 1;
                const stageNum = String(index + 1).padStart(2, "0");

                return (
                  <motion.li
                    key={index}
                    variants={
                      reduce
                        ? fadeIn
                        : {
                            hidden:  { opacity: 0, y: 14 },
                            visible: {
                              opacity: 1,
                              y:       0,
                              transition: {
                                delay:    index * 0.09,
                                duration: 0.48,
                                ease:     "easeOut",
                              },
                            },
                          }
                    }
                    className="relative flex gap-0"
                  >
                    {/* ── Pipeline column ── */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{ width: 20, flexShrink: 0, paddingTop: 3 }}
                      aria-hidden="true"
                    >
                      {/* Node */}
                      <div
                        style={{
                          width:        8,
                          height:       8,
                          borderRadius: "50%",
                          border:       `1.5px solid ${EI_T}`,
                          background:   BG,
                          flexShrink:   0,
                          position:     "relative",
                          zIndex:       1,
                        }}
                      />

                      {/* Connector */}
                      {!isLast && (
                        <div
                          style={{
                            width:     1,
                            flex:      1,
                            minHeight: 52,
                            background: EI,
                            marginTop:  4,
                          }}
                        />
                      )}
                    </div>

                    {/* ── Content column ── */}
                    <div
                      className="flex flex-col"
                      style={{
                        paddingLeft:   28,
                        paddingBottom: isLast ? 0 : 44,
                        flex:          1,
                      }}
                    >
                      {/* Stage ID */}
                      <div
                        className="flex items-center gap-3 mb-3"
                        aria-hidden="true"
                      >
                        <span
                          className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.18em", color: EI_T }}
                        >
                          WF-{stageNum}
                        </span>
                        <div style={{ width: 16, height: 1, background: EI }} />
                      </div>

                      {/* Title */}
                      <h3
                        className="font-heading font-bold"
                        style={{
                          fontSize:      "clamp(1rem, 1.4vw, 1.125rem)",
                          lineHeight:    1.2,
                          letterSpacing: "-0.016em",
                          color:         INK,
                          marginBottom:  8,
                        }}
                      >
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="font-body"
                        style={{
                          fontSize:   "clamp(0.875rem, 1.1vw, 0.9375rem)",
                          lineHeight: 1.72,
                          color:      "#52606D",
                          maxWidth:   "46ch",
                        }}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>

        </div>

        {/* ── Bottom engineering strip ─────────────────────────── */}
        <motion.div
          className="hidden lg:flex items-center mt-24"
          style={{ gap: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 10, background: EI }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span
            className="font-mono px-5"
            style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}
          >
            OUTPUT
          </span>
          <div style={{ flex: 0.5, height: 1, background: EI }} />
          <span
            className="font-mono px-5"
            style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}
          >
            EL+3000
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>
      </div>
    </section>
  );
}