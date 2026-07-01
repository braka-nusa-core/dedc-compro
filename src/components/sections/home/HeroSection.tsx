"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { metrics } from "@/data/metrics";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

// ─── Tokens — extracted from reference screenshot ─────────────────
const BG      = "#F5F7FA";
const GREEN   = "#1A8C2E";
const INK     = "#0D1117";
const MUTED   = "#64748B";
const EI      = "rgba(60,100,180,0.20)";   // engineering lines
const EI_T    = "rgba(60,100,180,0.45)";   // engineering text

// ─── Data ─────────────────────────────────────────────────────────
const heroMetrics = [
  { value: metrics.yearsActive.value,  suffix: metrics.yearsActive.suffix,  label: "Tahun Pengalaman"    },
  { value: metrics.alumniCount.value,  suffix: metrics.alumniCount.suffix,  label: "Alumni Bersertifikat" },
  { value: metrics.clientCount.value,  suffix: metrics.clientCount.suffix,  label: "Corporate Client"    },
] as const;

const trust = ["Online & Offline", "Sertifikat Resmi", "Konsultasi Gratis"] as const;

function fmt(v: number) { return v >= 1000 ? `${v / 1000}.000` : String(v); }

export function HeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden pt-10"
      style={{ background: BG, minHeight: "100svh" }}
      aria-label="Hero"
    >

      {/* ══════════════════════════════════════════════
          BACKGROUND — selective right-zone grid only
          ══════════════════════════════════════════════ */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Grid appears ONLY in the right zone — behind the photo */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{ left: "46%" }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.045) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.045) 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }} />
          {/* Fade left edge — grid doesn't bleed into text column */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right, ${BG} 0%, transparent 20%)`,
          }} />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{
            background: `linear-gradient(to top, ${BG} 0%, transparent 100%)`,
          }} />
        </div>

        {/* Top-right engineering codes — X-101  REV-B2  PL-302 */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 74, right: 72 }}
        >
          {["X-101", "REV-B2", "PL-302"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Crosshair + below the codes */}
        <div
          className="absolute hidden lg:block"
          style={{ top: 112, right: 225, width: 12, height: 12 }}
          aria-hidden="true"
        >
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: EI, transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: EI, transform: "translateY(-50%)" }} />
        </div>

        {/* Section marker — A—A / SECTION — bottom left, anchored */}
        <div
          className="absolute hidden lg:flex flex-col items-start gap-0.5"
          style={{ bottom: 40, left: 36 }}
          aria-hidden="true"
        >
          <span className="font-mono font-semibold" style={{ fontSize: 11, letterSpacing: "0.08em", color: EI_T }}>A—A</span>
          <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: EI }}>SECTION</span>
          {/* Small tick at bottom */}
          <div style={{ marginTop: 4, width: 1, height: 12, background: EI }} />
        </div>

      </div>

      {/* ══════════════════════════════════════════════
          CONTENT
          ══════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

          {/* ═══════════ LEFT COLUMN ═══════════ */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start pt-16 lg:pt-20 pb-20"
            style={{ gap: "1.75rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            {/* Overline — dot + text only, no pill container */}
            <motion.div variants={enter} className="flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px] shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                  style={{ background: GREEN }} />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px]"
                  style={{ background: GREEN }} />
              </span>
              <span className="font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}>
                Est. 2011 · Engineering Training Center
              </span>
            </motion.div>

            {/* Headline — two lines, massive, tight */}
            <motion.h1
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(3rem, 5.5vw + 0.5rem, 5.25rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                color: INK,
              }}
            >
              Karier <span style={{ color: GREEN }}>Engineering</span>
              <br />
              Dimulai dari Sini
            </motion.h1>

            {/* Green accent rule — short horizontal line below headline */}
            <motion.div
              variants={fadeIn}
              style={{ width: 40, height: 2, background: GREEN, borderRadius: 1 }}
              aria-hidden="true"
            />

            {/* Subheadline — "Dipercaya sejak 2011." is green, not bold-dark */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(0.9rem, 1.2vw, 0.975rem)",
                lineHeight: 1.78,
                color: MUTED,
                maxWidth: "42ch",
              }}
            >
              Pelatihan AutoCAD, Plant 3D, Revit MEP, dan E3D
              <br />
              bersama praktisi industri berpengalaman.
              <br />
              <span style={{ color: GREEN }}>Dipercaya sejak 2011.</span>
            </motion.p>

            {/* Metrics */}
            <motion.dl
              variants={fadeIn}
              className="flex items-start"
              aria-label="Statistik DEDC"
              style={{ gap: 0, marginTop: "0.25rem" }}
            >
              {heroMetrics.map((m, i) => (
                <div key={m.label} className="relative flex flex-col" style={{ paddingRight: 36 }}>
                  {i < heroMetrics.length - 1 && (
                    <div
                      className="absolute"
                      aria-hidden="true"
                      style={{ right: 18, top: 5, height: 42, width: 1, background: "rgba(0,0,0,0.1)" }}
                    />
                  )}
                  <dt className="sr-only">{m.label}</dt>
                  <dd
                    className="font-heading font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(1.9rem, 2.8vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: GREEN,
                    }}
                  >
                    {fmt(m.value)}<span style={{ fontSize: "clamp(1rem,1.6vw,1.35rem)" }}>{m.suffix}</span>
                  </dd>
                  <span className="font-body mt-1.5"
                    style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.3 }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </motion.dl>

            {/* CTA row */}
            <motion.div variants={enter} className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex flex-row items-center gap-5">
                <Button variant="whatsapp" size="lg" asChild>
                  <WhatsAppLink context="hero" ariaLabel="Konsultasi Program via WhatsApp (tab baru)">
                    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Konsultasi Program
                  </WhatsAppLink>
                </Button>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1.5 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                  style={{
                    fontSize: 15,
                    color: INK,
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    textDecorationColor: "rgba(0,0,0,0.2)",
                  }}
                >
                  Lihat Kurikulum
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Trust signals */}
              <div
                className="flex flex-wrap items-center gap-x-5 gap-y-1.5"
                aria-label="Keunggulan DEDC"
              >
                {trust.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 font-body"
                    style={{ fontSize: 12, color: "#94A3B8" }}>
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: GREEN }} aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* ═══ GAP — one empty column for breathing room ═══ */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* ═══════════ RIGHT COLUMN — photo + annotations ═══════════ */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 flex-col items-start pt-24 pb-16 relative"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >

            {/*
              Photo frame system.
              The thin engineering lines form a frame AROUND the photo —
              they extend slightly beyond the photo edges top/bottom,
              creating the CAD-drawing framing effect from the reference.
            */}
            <motion.div
              className="relative w-full"
              initial={reduce ? {} : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >

              {/* Engineering frame — the thin guide rectangle around the photo */}
              {/* Top frame line — extends left and right of photo */}
              <div
                className="absolute"
                style={{ top: -20, left: -16, right: -16, height: 1, background: EI }}
                aria-hidden="true"
              />
              {/* Bottom frame line */}
              <div
                className="absolute"
                style={{ bottom: -20, left: -16, right: -16, height: 1, background: EI }}
                aria-hidden="true"
              />
              {/* Left frame tick */}
              <div
                className="absolute"
                style={{ top: -20, left: -16, width: 1, height: 20, background: EI }}
                aria-hidden="true"
              />
              {/* Right frame tick — top */}
              <div
                className="absolute"
                style={{ top: -20, right: -16, width: 1, height: 20, background: EI }}
                aria-hidden="true"
              />
              {/* Left frame tick — bottom */}
              <div
                className="absolute"
                style={{ bottom: -20, left: -16, width: 1, height: 20, background: EI }}
                aria-hidden="true"
              />
              {/* Right frame tick — bottom */}
              <div
                className="absolute"
                style={{ bottom: -20, right: -16, width: 1, height: 20, background: EI }}
                aria-hidden="true"
              />

              {/* EL+2500 elevation marker — right side of frame, mid-height */}
              <div
                className="absolute hidden xl:flex items-center gap-2"
                style={{ top: "42%", left: "calc(100% + 16px)" }}
                aria-hidden="true"
              >
                {/* Short horizontal line from frame edge */}
                <div style={{ width: 28, height: 1, background: EI }} />
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  EL+2500
                </span>
              </div>

              {/* PRAKTIS. TERSTRUKTUR. SIAP INDUSTRI. — right side, stacked */}
              <div
                className="absolute hidden xl:flex flex-col items-start gap-0.5"
                style={{ top: "18%", left: "calc(100% + 16px)" }}
                aria-hidden="true"
              >
                {["PRAKTIS.", "TERSTRUKTUR.", "SIAP INDUSTRI."].map((line) => (
                  <span key={line} className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.1em", color: EI_T }}>
                    {line}
                  </span>
                ))}
              </div>

              {/* Crosshair + on right side below EL+2500 */}
              <div
                className="absolute hidden xl:block"
                style={{ top: "62%", left: "calc(100% + 56px)", width: 10, height: 10 }}
                aria-hidden="true"
              >
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: EI, transform: "translateX(-50%)" }} />
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: EI, transform: "translateY(-50%)" }} />
              </div>

              {/* Photo */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: 14,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <Image
                  src="/images/gallery/training.jpeg"
                  alt="Trainer bersama peserta training DEDC di ruang kelas"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width:1280px) 42vw, 480px"
                />
                {/* Very light bottom vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top,rgba(0,0,0,0.10) 0%,transparent 28%)",
                    borderRadius: 14,
                  }}
                />
              </div>

              {/*
                PROGRAM TEKNIK callout — anchored to photo bottom-left.
                Leader: ○— connected to bottom frame line.
                This is structurally connected to the photo frame, not floating.
              */}
              <div
                className="flex flex-col gap-1 mt-6 ml-0"
                aria-hidden="true"
              >
                {/* Leader line row: circle + line + label */}
                <div className="flex items-center gap-2">
                  {/* Circle endpoint */}
                  <div style={{ width: 7, height: 7, borderRadius: "50%", border: `1px solid ${EI}`, background: "transparent", flexShrink: 0 }} />
                  {/* Line */}
                  <div style={{ width: 16, height: 1, background: EI }} />
                  {/* Label */}
                  <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.12em", color: GREEN }}>
                    PROGRAM TEKNIK
                  </span>
                </div>
                {/* Programme list */}
                <div className="flex items-center gap-2" style={{ paddingLeft: 27 }}>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.08em", color: EI_T }}>
                    AUTOCAD · PLANT 3D · REVIT MEP · E3D
                  </span>
                </div>
                {/* Small square marker */}
                <div
                  style={{ marginTop: 6, marginLeft: 2, width: 5, height: 5, border: `1px solid ${EI}`, background: "transparent" }}
                  aria-hidden="true"
                />
              </div>

            </motion.div>
          </motion.div>

          {/* Mobile photo — simplified */}
          <div className="lg:hidden w-full pb-16 mt-8">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.09)" }}
            >
              <Image
                src="/images/gallery/training.jpeg"
                alt="Trainer bersama peserta training DEDC di ruang kelas"
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}