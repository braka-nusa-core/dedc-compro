"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Process steps ────────────────────────────────────────────────
const STEPS = [
  {
    code:  "PRC-01",
    num:   "01",
    title: "Initial Discussion",
    desc:  "Kami memulai dengan memahami konteks bisnis dan kebutuhan teknis perusahaan Anda secara menyeluruh.",
  },
  {
    code:  "PRC-02",
    num:   "02",
    title: "Needs Assessment",
    desc:  "Tim DEDC mengevaluasi gap kompetensi tim atau kebutuhan talent untuk menentukan pendekatan yang paling tepat.",
  },
  {
    code:  "PRC-03",
    num:   "03",
    title: "Training Plan atau Candidate Selection",
    desc:  "Kami menyusun rencana pelatihan yang disesuaikan, atau menyeleksi kandidat yang sesuai dengan spesifikasi proyek Anda.",
  },
  {
    code:  "PRC-04",
    num:   "04",
    title: "Implementation",
    desc:  "Pelatihan berjalan atau kandidat mulai onboarding — dengan pendampingan penuh dari tim DEDC sepanjang prosesnya.",
  },
  {
    code:  "PRC-05",
    num:   "05",
    title: "Long-Term Partnership",
    desc:  "Kami terus hadir untuk mendukung pertumbuhan tim engineering Anda, jauh melampaui engagement awal.",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────
export function PartnershipProcessSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="process-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost word */}
        <div
          className="absolute hidden lg:block"
          style={{
            bottom:        "-6%",
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
          WORK
          <br />
          FLOW
        </div>

        {/* Blueprint grid — top right */}
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
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left, transparent 0%, ${BG} 65%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, ${BG} 72%)` }} />
        </div>

        {/* Engineering codes — top right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["PRC-DOC-001", "REV-A1", "SECTION W–W"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
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

        {/* ── Section header — centred ─────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center"
          style={{ gap: "1.75rem", marginBottom: "5rem" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Blueprint label */}
          <motion.div variants={fadeIn} className="flex items-center gap-0" aria-hidden="true">
            <div style={{ width: 1, height: 10, background: EI }} />
            <div style={{ width: 32, height: 1, background: EI }} />
            <span className="font-mono px-4"
              style={{ fontSize: 8, letterSpacing: "0.2em", color: EI_T }}>
              PARTNERSHIP PROCESS · PRC-DOC-001 · REV-A1
            </span>
            <div style={{ width: 32, height: 1, background: EI }} />
            <div style={{ width: 1, height: 10, background: EI }} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="process-heading"
            variants={enter}
            className="font-heading font-bold"
            style={{
              fontSize:      "clamp(1.875rem, 3.2vw, 3.25rem)",
              lineHeight:    1.06,
              letterSpacing: "-0.03em",
              color:         INK,
              maxWidth:      "22ch",
            }}
          >
            Proses yang Sederhana.{" "}
            <span style={{ color: GREEN }}>Kolaborasi yang Berkelanjutan.</span>
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
              maxWidth:   "48ch",
            }}
          >
            Setiap kolaborasi dimulai dengan memahami kebutuhan perusahaan
            secara mendalam — sebelum kami merekomendasikan solusi pelatihan
            atau talent yang paling tepat.
          </motion.p>
        </motion.div>

        {/* ── Process steps ────────────────────────────────────── */}
        <div
          className="max-w-[780px] mx-auto"
        >
          <motion.ol
            className="relative flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            aria-label="Tahapan partnership process DEDC"
          >
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;

              return (
                <motion.li
                  key={step.code}
                  variants={
                    reduce ? fadeIn : {
                      hidden:  { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y:       0,
                        transition: {
                          delay:    index * 0.1,
                          duration: 0.5,
                          ease:     "easeOut",
                        },
                      },
                    }
                  }
                  className="relative grid"
                  style={{
                    gridTemplateColumns: "96px 1fr",
                    gap:                 "0 32px",
                    paddingBottom:       isLast ? 0 : "3.5rem",
                  }}
                >
                  {/* ── Left: number + connector ── */}
                  <div className="flex flex-col items-end" style={{ paddingTop: 4 }}>
                    {/* Step number — large, ghost-weight */}
                    <span
                      className="font-heading font-bold leading-none"
                      style={{
                        fontSize:      "clamp(2.5rem, 4vw, 3.5rem)",
                        letterSpacing: "-0.05em",
                        color:         INK,
                        opacity:       0.08,
                        userSelect:    "none",
                      }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>

                    {/* Connector — sits below the number, above the next row */}
                    {!isLast && (
                      <div
                        className="flex flex-col items-center"
                        style={{ flex: 1, marginTop: 12, gap: 0 }}
                        aria-hidden="true"
                      >
                        {/* Tick */}
                        <div style={{ width: 1, height: 10, background: EI }} />
                        {/* Node */}
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%",
                          border: `1.5px solid ${EI_T}`,
                          background: BG, flexShrink: 0,
                        }} />
                        {/* Line */}
                        <div style={{ width: 1, flex: 1, minHeight: 20, background: EI }} />
                        {/* Arrow head — minimal */}
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" style={{ flexShrink: 0 }}>
                          <path d="M3.5 6L0 0h7L3.5 6z" fill={EI_T} fillOpacity="0.6" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* ── Right: content ── */}
                  <div className="flex flex-col" style={{ gap: "0.625rem", paddingTop: 2 }}>
                    {/* Blueprint step code */}
                    <div className="flex items-center gap-3" aria-hidden="true">
                      <span className="font-mono"
                        style={{ fontSize: 8, letterSpacing: "0.2em", color: EI_T }}>
                        {step.code}
                      </span>
                      <div style={{ width: 20, height: 1, background: EI }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-heading font-bold"
                      style={{
                        fontSize:      "clamp(1.0625rem, 1.6vw, 1.25rem)",
                        lineHeight:    1.2,
                        letterSpacing: "-0.018em",
                        color:         INK,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body"
                      style={{
                        fontSize:   "clamp(0.875rem, 1.1vw, 0.9375rem)",
                        lineHeight: 1.75,
                        color:      "#52606D",
                        maxWidth:   "52ch",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>

          {/* Completion node */}
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.45, ease: "easeOut" }}
            style={{ paddingLeft: 128 }}
          >
            <div
              style={{
                width:        10,
                height:       10,
                borderRadius: "50%",
                background:   GREEN,
                flexShrink:   0,
                opacity:      0.8,
              }}
              aria-hidden="true"
            />
            <span className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.16em", color: GREEN }}>
              PARTNERSHIP ACTIVE
            </span>
          </motion.div>
        </div>

        {/* ── Bottom engineering strip ─────────────────────────── */}
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
            {STEPS.length} TAHAP · PRC-DOC-001 · SECTION W–W · REV-A1
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>

      </div>
    </section>
  );
}