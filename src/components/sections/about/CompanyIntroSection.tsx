"use client";

import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

const EI      = "rgba(60,100,180,0.18)";
const EI_TEXT = "rgba(60,100,180,0.42)";

export function CompanyIntroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: "#F7F9FC" }}
    >
      {/*
        STRUCTURAL BLUEPRINT LINE
        ─────────────────────────
        A single vertical line traces the column boundary between the
        heading (col 1–5) and the body copy (col 6–12).

        This makes the layout grid *visible* — it doesn't decorate
        the content, it expresses the structure the content already
        lives in. At the top, a horizontal tick + "SPEC-001" anchor
        the line to a blueprint reference. At the bottom, a closing
        tick closes the frame.

        Opacity is low enough to be subconscious.
        The line spans the full content height — it's architectural,
        not a corner label.
      */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{
          // Sits exactly at the col-5/col-6 boundary of a 12-col 1280px container
          // Container: max-w-[1280px], px-8 = 32px each side → inner = 1216px
          // col-5 of 12 = 5/12 * 1216 + 32 ≈ 539px from left
          left: "calc((100% - 1280px) / 2 + 32px + (5 / 12) * (min(100%, 1280px) - 64px))",
          top: 0,
          bottom: 0,
          width: 1,
        }}
      >
        {/* Full-height vertical guide line */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 4%, ${EI} 12%, ${EI} 88%, transparent 96%)` }}
        />

        {/* Top anchor — horizontal tick + reference label */}
        <div
          className="absolute flex items-center gap-2"
          style={{ top: "8%", left: 0 }}
        >
          {/* Horizontal arm extending right */}
          <div style={{ width: 32, height: 1, background: EI }} />
          <span
            className="font-mono whitespace-nowrap"
            style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_TEXT }}
          >
            SPEC-001
          </span>
        </div>

        {/* Bottom closing tick */}
        <div
          className="absolute"
          style={{ bottom: "8%", left: -3, width: 7, height: 1, background: EI }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left — heading */}
          <motion.div
            variants={reduce ? fadeIn : fadeUp}
            className="lg:col-span-5"
          >
            <SectionHeader
              overline="Tentang Kami"
              title="Professional Engineering Training Center"
              accentWord="Engineering"
              align="left"
              as="h2"
            />
          </motion.div>

          {/* Right — body */}
          <motion.div
            variants={reduce ? fadeIn : fadeUp}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)", color: "#52606D" }}
            >
              {company.description}
            </p>

            {/* Two stats — separated by the same hairline grammar used site-wide */}
            <div
              className="grid grid-cols-2 gap-6 pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="flex flex-col gap-1">
                <span
                  className="font-heading font-bold"
                  style={{ fontSize: "clamp(1.75rem,2.5vw,2.25rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#0D1117" }}
                >
                  2011
                </span>
                <span className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>
                  Tahun Berdiri
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-heading font-bold"
                  style={{ fontSize: "clamp(1.75rem,2.5vw,2.25rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#0D1117" }}
                >
                  Jakarta
                </span>
                <span className="font-body" style={{ fontSize: 12, color: "#94A3B8" }}>
                  Lokasi Training Center
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}