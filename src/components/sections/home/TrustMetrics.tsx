"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { fadeIn, staggerContainer } from "@/lib/animations";

// Engineering specification sheet — each column is a spec entry
const specs = [
  {
    value: 14,
    suffix: "+",
    label: "TAHUN PENGALAMAN",
    ref: "REF-2011",
    duration: 1200,
  },
  {
    value: 1000,
    suffix: "+",
    label: "ALUMNI BERSERTIFIKAT",
    ref: "ALM-1000",
    duration: 1500,
  },
  {
    value: 50,
    suffix: "+",
    label: "CORPORATE CLIENT",
    ref: "CLT-050",
    duration: 1100,
  },
  {
    value: 4,
    suffix: "",
    label: "PROGRAM UTAMA",
    ref: "PRG-004",
    duration: 800,
  },
] as const;

// Engineering blue — same token used across the design language
const EI = "rgba(60,100,180,0.14)";
const EI_TEXT = "rgba(60,100,180,0.38)";

export function TrustMetrics() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#F5F7FA" }}
      aria-label="Spesifikasi DEDC"
    >
      {/* Selective grid — only inside this section, extremely low opacity */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(60,100,180,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Fade all four edges — grid never bleeds out */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #F5F7FA 0%, transparent 8%, transparent 92%, #F5F7FA 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #F5F7FA 0%, transparent 20%, transparent 80%, #F5F7FA 100%)",
        }} />
      </div>

      {/* REF marker — top-right corner, anchored to section boundary */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex items-center gap-2 z-10"
        style={{ top: 18, right: 80 }}
        aria-hidden="true"
      >
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(60,100,180,0.35)" }}>
          REF-2011
        </span>
        <div style={{ width: 20, height: 1, background: "rgba(60,100,180,0.20)" }} />
        <div style={{ width: 1, height: 8, background: "rgba(60,100,180,0.20)" }} />
      </div>

      {/* Content — generous vertical padding, typography is the entire story */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <motion.dl
          className="grid grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {specs.map((spec, i) => (
            <motion.div
              key={spec.ref}
              variants={
                reduce
                  ? fadeIn
                  : {
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                      },
                    }
              }
              className="relative flex flex-col items-center justify-center py-10 px-4"
            >
              {/* Thin engineering divider — right side of each column except last */}
              {i < specs.length - 1 && (
                <div
                  className="absolute right-0 top-6 bottom-6 w-px hidden lg:block"
                  style={{ background: EI }}
                  aria-hidden="true"
                />
              )}
              {/* Mobile horizontal dividers — bottom of top-row items */}
              {i < 2 && (
                <div
                  className="absolute bottom-0 left-6 right-6 h-px lg:hidden"
                  style={{ background: EI }}
                  aria-hidden="true"
                />
              )}

              {/* ── Metric value — primary focus ── */}
              <dt className="sr-only">{spec.label}</dt>
              <dd
                className="flex items-baseline gap-0.5 font-heading font-bold"
                style={{ color: "#0D1117" }}
                aria-hidden="true"
              >
                <span
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.25rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  <AnimatedCounter
                    to={spec.value}
                    duration={reduce ? 0 : spec.duration}
                  />
                </span>
                {spec.suffix && (
                  <span
                    style={{
                      fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                      lineHeight: 1,
                      color: "#1A8C2E",
                    }}
                  >
                    {spec.suffix}
                  </span>
                )}
              </dd>

              {/* Screen-reader full value */}
              <span className="sr-only">
                {spec.value}{spec.suffix} {spec.label}
              </span>

              {/* ── Label — secondary ── */}
              <span
                className="font-body font-medium mt-3 text-center"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.11em",
                  color: "#64748B",
                }}
                aria-hidden="true"
              >
                {spec.label}
              </span>

              {/* ── Technical reference code — tertiary ── */}
              <span
                className="font-mono mt-2"
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.14em",
                  color: EI_TEXT,
                }}
                aria-hidden="true"
              >
                {spec.ref}
              </span>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}