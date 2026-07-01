"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { featuredAlumni } from "@/data/successStories";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.15)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Metrics ─────────────────────────────────────────────────────
const METRICS = [
  { value: "1.000+", label: "Alumni Aktif"      },
  { value: "50+",    label: "Corporate Network" },
  { value: "14+",    label: "Tahun Pengalaman"  },
] as const;

// ─── Portrait layout — four positions defining the editorial wall ─
// Each portrait has a unique offset that creates the magazine stagger.
// Widths vary slightly to break the grid uniformity.
const PORTRAIT_LAYOUT = [
  { code: "ALM-001", colStart: 1, width: "55%",  marginTop: "0rem"    },
  { code: "ALM-002", colStart: 0, width: "48%",  marginTop: "4rem"    },
  { code: "ALM-003", colStart: 1, width: "52%",  marginTop: "-2rem"   },
  { code: "ALM-004", colStart: 0, width: "46%",  marginTop: "2.5rem"  },
] as const;

export function AlumniHeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;
  // Take 4 alumni — use featured, pad with slice if needed
  const alumni = featuredAlumni.slice(0, 4);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG, minHeight: "100svh" }}
      aria-labelledby="alumni-heading"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Grid — right zone only, behind portraits */}
        <div className="absolute top-0 bottom-0 right-0" style={{ left: "52%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right,${BG} 0%,transparent 22%,transparent 88%,${BG} 100%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom,${BG} 0%,transparent 10%,transparent 90%,${BG} 100%)`,
          }} />
        </div>

        {/* Top-right coordinates */}
        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {["ALM-2025", "REV-A1", "X-240"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{
          background: `linear-gradient(to top,${BG},transparent)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100svh-4rem)]">

          {/* ════════════════════════════════════
              LEFT — text content, 6 columns
              ════════════════════════════════════ */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center py-24 lg:py-28"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Blueprint label */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-0"
              aria-hidden="true"
            >
              <span className="font-mono shrink-0 pr-4"
                style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
                ALM-2025 · ACTIVE NETWORK
              </span>
              <div style={{ width: 72, height: 1, background: EI }} />
              <div style={{ width: 1, height: 8, background: EI }} />
            </motion.div>

            {/*
              HEADLINE — the emotional centrepiece.
              Two sentences, not a tagline.
              Reads like a quiet statement of fact.
              "Engineering" not mentioned — this is about people.
            */}
            <motion.h1
              id="alumni-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(3rem,0.25rem,4.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.034em",
                color: INK,
                maxWidth: "13ch",
              }}
            >
              Mereka Pernah Duduk di{" "}
              <span style={{ color: GREEN }}>Kelas yang Sama.</span>
              {" "}Hari Ini Mereka Bekerja di{" "}
              <span style={{ color: GREEN }}>Industri.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
                lineHeight: 1.75,
                color: "#52606D",
                maxWidth: "48ch",
              }}
            >
              Lebih dari 1.000 alumni DEDC kini berkarier di EPC,
              Oil & Gas, Building Engineering, Power Plant, dan berbagai
              perusahaan engineering di Indonesia.
            </motion.p>

            {/* Metrics — hairline dividers, no cards */}
            <motion.div
              variants={fadeIn}
              className="flex items-start"
              style={{ gap: 0 }}
              aria-label="Statistik alumni DEDC"
            >
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="relative flex flex-col"
                  style={{ paddingRight: 32 }}
                >
                  {i < METRICS.length - 1 && (
                    <div className="absolute"
                      style={{ right: 16, top: 5, height: 38, width: 1, background: "rgba(0,0,0,0.09)" }}
                      aria-hidden="true"
                    />
                  )}
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-heading font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(1.6rem,2.5vw,2.25rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: GREEN,
                    }}>
                    {m.value}
                  </dd>
                  <span className="font-body mt-1.5"
                    style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.3 }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="#stories">
                  Lihat Kisah Alumni
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>

              <WhatsAppLink
                context="hero"
                ariaLabel="Konsultasi Program via WhatsApp (tab baru)"
              >
                <span
                  className="font-body font-medium"
                  style={{
                    fontSize: 15,
                    color: "#374151",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    textDecorationColor: "rgba(0,0,0,0.18)",
                  }}
                >
                  Konsultasi Program →
                </span>
              </WhatsAppLink>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — editorial alumni wall, 6 columns
              ════════════════════════════════════ */}
          <div
            className="lg:col-span-6 hidden lg:flex items-center py-20 pl-8"
            aria-label="Alumni DEDC"
          >
            {/*
              EDITORIAL WALL — two columns of portraits.
              Column A (left): portraits 0 and 2
              Column B (right): portraits 1 and 3
              Each portrait has a unique marginTop creating
              the organic, staggered magazine composition.
              The columns are NOT equal width — A is slightly
              wider to create asymmetric tension.
            */}
            <div
              className="relative w-full flex gap-4"
              style={{ height: "calc(100svh - 12rem)", maxHeight: 680 }}
            >
              {/* Column A — portraits 0 and 2 */}
              <div className="flex flex-col gap-4" style={{ flex: "0 0 52%" }}>
                {[0, 2].map((idx) => {
                  const a    = alumni[idx];
                  const meta = PORTRAIT_LAYOUT[idx];
                  if (!a || !meta) return null;
                  return (
                    <motion.div
                      key={a.id}
                      className="flex flex-col gap-0"
                      style={{ marginTop: meta.marginTop }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.12, duration: 0.65, ease: "easeOut" }}
                    >
                      {/* Code above photo */}
                      <div
                        className="flex items-center gap-3 mb-2"
                        aria-hidden="true"
                      >
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                          {meta.code}
                        </span>
                        <div style={{ flex: 1, height: 1, background: EI }} />
                      </div>

                      {/* Portrait */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{
                          aspectRatio: "4 / 5",
                          borderRadius: 24,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                        }}
                      >
                        <Image
                          src={a.photoSrc}
                          alt={`${a.name}, ${a.position}`}
                          fill
                          className="object-cover object-top"
                          sizes="25vw"
                          priority={idx === 0}
                        />
                      </div>

                      {/* Caption below photo */}
                      <div className="flex flex-col gap-0.5 mt-2.5">
                        <span className="font-heading font-semibold"
                          style={{ fontSize: 13, color: INK, letterSpacing: "-0.01em" }}>
                          {a.name}
                        </span>
                        <span className="font-body"
                          style={{ fontSize: 11, color: GREEN }}>
                          {a.position}
                        </span>
                        <span className="font-body"
                          style={{ fontSize: 11, color: "#94A3B8" }}>
                          {a.company}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Column B — portraits 1 and 3, shifted down for stagger */}
              <div
                className="flex flex-col gap-4"
                style={{ flex: "0 0 45%", paddingTop: "3.5rem" }}
              >
                {[1, 3].map((idx) => {
                  const a    = alumni[idx];
                  const meta = PORTRAIT_LAYOUT[idx];
                  if (!a || !meta) return null;
                  return (
                    <motion.div
                      key={a.id}
                      className="flex flex-col gap-0"
                      style={{ marginTop: meta.marginTop }}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28 + idx * 0.1, duration: 0.65, ease: "easeOut" }}
                    >
                      {/* Code above photo */}
                      <div
                        className="flex items-center gap-3 mb-2"
                        aria-hidden="true"
                      >
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                          {meta.code}
                        </span>
                        <div style={{ flex: 1, height: 1, background: EI }} />
                      </div>

                      {/* Portrait */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{
                          aspectRatio: "4 / 5",
                          borderRadius: 24,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                        }}
                      >
                        <Image
                          src={a.photoSrc}
                          alt={`${a.name}, ${a.position}`}
                          fill
                          className="object-cover object-top"
                          sizes="22vw"
                        />
                      </div>

                      {/* Caption below photo */}
                      <div className="flex flex-col gap-0.5 mt-2.5">
                        <span className="font-heading font-semibold"
                          style={{ fontSize: 13, color: INK, letterSpacing: "-0.01em" }}>
                          {a.name}
                        </span>
                        <span className="font-body"
                          style={{ fontSize: 11, color: GREEN }}>
                          {a.position}
                        </span>
                        <span className="font-body"
                          style={{ fontSize: 11, color: "#94A3B8" }}>
                          {a.company}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Subtle engineering detail — bottom-right of photo wall */}
              <div
                className="absolute bottom-4 right-0 hidden xl:flex flex-col items-end gap-1"
                aria-hidden="true"
              >
                <div style={{ width: 40, height: 1, background: EI }} />
                <span className="font-mono"
                  style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                  EL+2500 · SECTION C–C
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}