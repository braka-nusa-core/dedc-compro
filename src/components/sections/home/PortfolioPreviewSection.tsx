"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Featured projects — 3 only ───────────────────────────────────
// These are hardcoded here intentionally.
// The homepage preview shows a curated 3, not the full dynamic list.
// Update these when the portfolio changes.
const PREVIEW_PROJECTS = [
  {
    code:     "PTF-001",
    title:    "General Arrangement Drawing — Pump Station",
    software: "AutoCAD",
    desc:     "Paket drawing 2D lengkap untuk pump station, sesuai standar proyek EPC.",
    imageSrc: "/images/portfolio/ptf-001.jpg",
    imageAlt: "General Arrangement Drawing pump station AutoCAD",
    priority: true,   // receives visual dominance
  },
  {
    code:     "PTF-002",
    title:    "P&ID — Process Plant",
    software: "AutoCAD Plant 3D",
    desc:     "Piping & Instrumentation Diagram lengkap untuk unit proses petrokimia.",
    imageSrc: "/images/portfolio/ptf-002.jpg",
    imageAlt: "P&ID drawing process plant",
    priority: false,
  },
  {
    code:     "PTF-003",
    title:    "MEP Coordination Model",
    software: "Revit MEP",
    desc:     "Model koordinasi tiga disiplin MEP dengan clash detection untuk gedung komersial.",
    imageSrc: "/images/portfolio/ptf-003.jpg",
    imageAlt: "MEP coordination model Revit BIM",
    priority: false,
  },
] as const;

// ─── Component ────────────────────────────────────────────────────
export function PortfolioPreviewSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  const [lead, ...supporting] = PREVIEW_PROJECTS;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">

        {/* ── Section header ───────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left: label + headline */}
          <motion.div
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                  ENGINEERING PORTFOLIO
                </span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                  PTF-PRV-001
                </span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  REV-A1
                </span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            <motion.h2
              id="portfolio-preview-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.875rem,3vw,3rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.03em",
                color:         INK,
                maxWidth:      "16ch",
              }}
            >
              Hasil Kerja yang{" "}
              <span style={{ color: GREEN }}>Berbicara Sendiri.</span>
            </motion.h2>
          </motion.div>

          {/* Right: subtitle */}
          <motion.div
            variants={enter}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem,1.2vw,1rem)",
                lineHeight: 1.78,
                color:      "#52606D",
                maxWidth:   "44ch",
              }}
            >
              Project di bawah ini dikerjakan oleh peserta DEDC sebagai
              bagian dari program pelatihan. Setiap output mencerminkan
              standar yang digunakan di proyek EPC dan industri engineering.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Editorial composition ────────────────────────────── */}
        {/*
          Layout intent:
          ─ Desktop: lead spans 7 cols at full height.
            Two supporting projects stack in the remaining 5 cols.
          ─ The lead is ~40% taller than each supporting item.
          ─ No equal grid. Intentional asymmetry.
          ─ Mobile: stacks naturally, lead first.
        */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >

          {/* ── Lead project — 7 cols, dominant ── */}
          <motion.article
            className="lg:col-span-7"
            variants={
              reduce ? fadeIn : {
                hidden:  { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }
            }
            aria-label={`Featured project: ${lead.title}`}
          >
            {/* Dimension line — top */}
            <div className="hidden lg:flex items-center mb-4" aria-hidden="true">
              <div style={{ width: 1, height: 8, background: EI }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-3"
                style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                {lead.code} · {lead.software.toUpperCase()}
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 8, background: EI }} />
            </div>

            {/* Image */}
            <div
              className="relative w-full overflow-hidden group"
              style={{ aspectRatio: "4/3", borderRadius: 8, background: "rgba(60,100,180,0.04)" }}
            >
              <Image
                src={lead.imageSrc}
                alt={lead.imageAlt}
                fill
                priority
                className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.012]"
                style={{ filter: "saturate(86%) brightness(95%)" }}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-3" aria-hidden="true">
                <span className="font-mono"
                  style={{ fontSize: 7.5, letterSpacing: "0.2em", color: EI_T }}>
                  {lead.code}
                </span>
                <div style={{ width: 16, height: 1, background: EI }} />
                <span className="font-mono"
                  style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                  {lead.software.toUpperCase()}
                </span>
              </div>

              <h3
                className="font-heading font-bold"
                style={{
                  fontSize:      "clamp(1rem,1.5vw,1.25rem)",
                  lineHeight:    1.2,
                  letterSpacing: "-0.018em",
                  color:         INK,
                }}
              >
                {lead.title}
              </h3>

              <p
                className="font-body"
                style={{
                  fontSize:   "clamp(0.875rem,1.1vw,0.9375rem)",
                  lineHeight: 1.7,
                  color:      "#52606D",
                  maxWidth:   "48ch",
                }}
              >
                {lead.desc}
              </p>
            </div>
          </motion.article>

          {/* ── Supporting projects — 5 cols, stacked ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-5">
            {supporting.map((project, i) => (
              <motion.article
                key={project.code}
                className="flex flex-col"
                variants={
                  reduce ? fadeIn : {
                    hidden:  { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y:       0,
                      transition: { delay: (i + 1) * 0.1, duration: 0.52, ease: "easeOut" },
                    },
                  }
                }
                aria-label={`Project: ${project.title}`}
              >
                {/* Dimension line — top */}
                <div className="hidden lg:flex items-center mb-3" aria-hidden="true">
                  <div style={{ width: 1, height: 7, background: EI }} />
                  <div style={{ width: 24, height: 1, background: EI }} />
                  <span className="font-mono px-3"
                    style={{ fontSize: 7, letterSpacing: "0.14em", color: EI_T }}>
                    {project.code}
                  </span>
                  <div style={{ flex: 1, height: 1, background: EI }} />
                  <div style={{ width: 1, height: 7, background: EI }} />
                </div>

                {/* Image */}
                <div
                  className="relative w-full overflow-hidden group"
                  style={{ aspectRatio: "16/9", borderRadius: 6, background: "rgba(60,100,180,0.04)" }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.012]"
                    style={{ filter: "saturate(84%) brightness(95%)" }}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                {/* Caption */}
                <div className="flex flex-col gap-1.5 mt-4">
                  <div className="flex items-center gap-2.5" aria-hidden="true">
                    <span className="font-mono"
                      style={{ fontSize: 7, letterSpacing: "0.2em", color: EI_T }}>
                      {project.code}
                    </span>
                    <div style={{ width: 12, height: 1, background: EI }} />
                    <span className="font-mono"
                      style={{ fontSize: 7, letterSpacing: "0.12em", color: EI_T }}>
                      {project.software.toUpperCase()}
                    </span>
                  </div>

                  <h3
                    className="font-heading font-bold"
                    style={{
                      fontSize:      "clamp(0.9375rem,1.25vw,1.0625rem)",
                      lineHeight:    1.2,
                      letterSpacing: "-0.015em",
                      color:         INK,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="font-body"
                    style={{
                      fontSize:   "clamp(0.8125rem,1vw,0.875rem)",
                      lineHeight: 1.68,
                      color:      "#64748B",
                      maxWidth:   "40ch",
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </motion.div>

        {/* ── Quiet text CTA ───────────────────────────────────── */}
        <motion.div
          className="flex items-center gap-0 mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          {/* Left hairline strip */}
          <div className="hidden lg:flex items-center gap-0 flex-1" aria-hidden="true">
            <div style={{ width: 1, height: 10, background: EI }} />
            <div style={{ flex: 1, height: 1, background: EI }} />
            <span className="font-mono px-5"
              style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
              PTF-PRV-001 · 3 OF {PREVIEW_PROJECTS.length}+ PROJECTS
            </span>
            <div style={{ width: 40, height: 1, background: EI }} />
          </div>

          {/* Text link */}
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 font-body font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
            style={{
              fontSize:           15,
              color:              "#374151",
              textDecoration:     "underline",
              textUnderlineOffset: 4,
              textDecorationColor: "rgba(0,0,0,0.18)",
              whiteSpace:         "nowrap",
              paddingLeft:        "1.25rem",
            }}
          >
            Explore Full Portfolio
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}