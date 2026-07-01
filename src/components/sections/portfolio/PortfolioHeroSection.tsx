"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

export function PortfolioHeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full pt-16 overflow-hidden"
      style={{ background: BG, minHeight: "72svh" }}
      aria-labelledby="portfolio-hero-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost word */}
        <div
          className="absolute hidden lg:block"
          style={{
            top:           "-2%",
            right:         "-4%",
            fontFamily:    "Space Grotesk, system-ui, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(9rem,20vw,26rem)",
            lineHeight:    0.88,
            color:         INK,
            opacity:       0.02,
            letterSpacing: "-0.04em",
            userSelect:    "none",
            textAlign:     "right",
          }}
        >
          PORT
          <br />
          FOLIO
        </div>

        {/* Blueprint grid — top right */}
        <div className="absolute top-0 right-0" style={{ width: "34%", height: "55%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
                linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left,transparent 0%,${BG} 65%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,transparent 0%,${BG} 72%)` }} />
        </div>

        {/* Engineering codes */}
        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {["PTF-2025", "REV-A1", "SECTION P–P"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: `linear-gradient(to top,${BG},transparent)` }} />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="flex flex-col justify-center min-h-[calc(72svh-4rem)] py-20 lg:py-24">
          <motion.div
            className="flex flex-col"
            style={{ gap: "2.25rem", maxWidth: "720px" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Blueprint label */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>ENGINEERING PORTFOLIO</span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>PTF-DOC-2025</span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-A1</span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            {/* Headline — three editorial lines */}
            <motion.h1
              id="portfolio-hero-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(2.75rem,5.5vw,5.25rem)",
                lineHeight:    1.04,
                letterSpacing: "-0.036em",
                color:         INK,
              }}
            >
              Engineering Portfolio.
              <br />
              <span style={{ color: GREEN }}>Hasil Nyata.</span>
              <br />
              Siap Industri.
            </motion.h1>

            {/* Hairline */}
            <motion.div variants={fadeIn} style={{ width: 56, height: 1, background: EI }} aria-hidden="true" />

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem,1.3vw,1.0625rem)",
                lineHeight: 1.78,
                color:      "#52606D",
                maxWidth:   "52ch",
              }}
            >
              Kumpulan project engineering yang dikerjakan peserta DEDC sebagai
              representasi standar kompetensi industri — bukan karya seni,
              melainkan bukti kemampuan teknis yang siap digunakan di lapangan.
            </motion.p>

            {/* Spec strip */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-start"
              style={{ gap: 0 }}
              aria-label="Statistik portfolio"
            >
              {[
                { label: "Projects",  value: "200+"         },
                { label: "Disciplines", value: "5 Software" },
                { label: "Standard",  value: "Industry-Grade" },
              ].map((spec, i) => (
                <div key={spec.label} className="relative flex flex-col" style={{ paddingRight: 28 }}>
                  {i < 2 && (
                    <div className="absolute" style={{ right: 14, top: 4, height: 40, width: 1, background: "rgba(0,0,0,0.09)" }} aria-hidden="true" />
                  )}
                  <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.13em", color: EI_T }}>{spec.label.toUpperCase()}</span>
                  <span className="font-heading font-bold mt-1"
                    style={{ fontSize: "clamp(0.9375rem,1.4vw,1.125rem)", color: INK, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}