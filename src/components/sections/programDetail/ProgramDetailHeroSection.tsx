"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import type { Program } from "@/types";

// ─── Design tokens ────────────────────────────────────────────────
const EI = "rgba(60,100,180,0.16)";
const EI_T = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK = "#0D1117";
const BG = "#F7F9FC";

// ─── Technical schematic per program slug ─────────────────────────
// Right column: an SVG engineering schematic unique to each program.
// Not a screenshot. Not a photo.
// Engineering notation that communicates the discipline visually.

const SCHEMATICS: Record<string, React.FC> = {
  "autocad": AutoCADSchematic,
  "autocad-plant-3d": Plant3DSchematic,
  "revit-mep": RevitMEPSchematic,
  "e3d": E3DSchematic,
};

interface Props {
  program: Program;
}

export function ProgramDetailHeroSection({ program }: Props) {
  const reduce = useReducedMotion();
  const enter = reduce ? fadeIn : fadeUp;
  const Schematic = SCHEMATICS[program.slug] ?? AutoCADSchematic;

  return (
    <section
      className="relative w-full pt-16 overflow-hidden"
      style={{ background: BG, minHeight: "88svh" }}
      aria-labelledby="program-detail-heading"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost typography — program discipline keyword */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "-4%",
            right: "-3%",
            fontFamily: "Space Grotesk, system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(7rem,18vw,20rem)",
            lineHeight: 0.9,
            color: INK,
            opacity: 0.02,
            letterSpacing: "-0.04em",
            userSelect: "none",
            textAlign: "right",
          }}
        >
          {program.ghostWord ?? program.shortName.toUpperCase()}
        </div>

        {/* Grid — top-right, 30% coverage */}
        <div className="absolute top-0 right-0" style={{ width: "34%", height: "55%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to left,transparent 0%,${BG} 65%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom,transparent 0%,${BG} 72%)`,
          }} />
        </div>

        {/* Engineering codes — top right */}
        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {[program.code ?? "PRG-A1", "EL+2400", "REV-A1"].map((c) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(88svh-4rem)] items-center">

          {/* ════════ LEFT — 7 cols ════════ */}
          <motion.div
            className="lg:col-span-7 flex flex-col py-20 lg:py-24"
            style={{ gap: "2.25rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Blueprint label */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                  PROGRAM
                </span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                  {program.code ?? program.shortName.toUpperCase() + "-01"}
                </span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                  REV-A1
                </span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            {/* Program title — large, editorial */}
            <motion.h1
              id="program-detail-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.5rem,4.5vw,4.75rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.034em",
                color: INK,
                maxWidth: "14ch",
              }}
            >
              {program.heroTitle ?? program.name}{" "}
              {program.heroSubtitle && (
                <span style={{ color: GREEN }}>{program.heroSubtitle}</span>
              )}
            </motion.h1>

            {/* Short description — 2–3 sentences, no marketing */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
                lineHeight: 1.78,
                color: "#52606D",
                maxWidth: "50ch",
              }}
            >
              {program.heroDescription ?? program.description}
            </motion.p>

            {/* Specification strip — not cards */}
            <motion.div
              variants={fadeIn}
              className="flex items-start"
              style={{ gap: 0 }}
              aria-label="Spesifikasi program"
            >
              {[
                { label: "Duration", value: program.duration },
                { label: "Certificate", value: program.hasCertificate ? "Professional" : "Completion" },
                { label: "Project", value: "Industry Based" },
              ].map((spec, i) => (
                <div
                  key={spec.label}
                  className="relative flex flex-col"
                  style={{ paddingRight: 28 }}
                >
                  {i < 2 && (
                    <div
                      className="absolute"
                      style={{ right: 14, top: 4, height: 40, width: 1, background: "rgba(0,0,0,0.09)" }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.13em", color: EI_T }}>
                    {spec.label.toUpperCase()}
                  </span>
                  <span className="font-heading font-bold mt-1"
                    style={{ fontSize: "clamp(0.9375rem,1.4vw,1.125rem)", color: INK, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="whatsapp" size="lg" asChild>
                <WhatsAppLink
                  context="hero"
                  programName={program.name}
                  ariaLabel={`Konsultasi program ${program.name} via WhatsApp (tab baru)`}
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Konsultasi Program
                </WhatsAppLink>
              </Button>

              <Link
                href="#learn"
                className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{
                  fontSize: 15,
                  color: "#374151",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                  textDecorationColor: "rgba(0,0,0,0.18)",
                }}
              >
                Lihat Kurikulum{" "}
                <span
                  className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT — 5 cols, technical schematic ════════ */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex flex-col justify-center pl-8 py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            <Schematic />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Engineering schematics — one per discipline ─────────────────
// SVG-based technical visuals. Not screenshots. Not photos.
// Each communicates the discipline through engineering notation.

function AutoCADSchematic() {
  const EI = "rgba(60,100,180,0.18)";
  const EI_T = "rgba(60,100,180,0.45)";
  const GREEN = "#1A8C2E";

  return (
    <div className="flex flex-col gap-3">
      {/* Top dimension line */}
      <div className="flex items-center" style={{ gap: 0 }} aria-hidden="true">
        <div style={{ width: 1, height: 10, background: EI }} />
        <div style={{ flex: 1, height: 1, background: EI }} />
        <span className="font-mono px-4" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>DWG-001 · 2D DRAWING</span>
        <div style={{ flex: 1, height: 1, background: EI }} />
        <div style={{ width: 1, height: 10, background: EI }} />
      </div>

      {/* SVG schematic — floor plan / general arrangement */}
      <svg viewBox="0 0 400 320" className="w-full" aria-label="AutoCAD 2D drawing schematic">
        {/* Outer boundary */}
        <rect x="32" y="20" width="336" height="260" fill="none" stroke={EI} strokeWidth="1" />

        {/* Room divisions */}
        <line x1="180" y1="20" x2="180" y2="180" stroke={EI} strokeWidth="1" />
        <line x1="32" y1="160" x2="320" y2="160" stroke={EI} strokeWidth="1" />
        <line x1="270" y1="160" x2="270" y2="280" stroke={EI} strokeWidth="1" />

        {/* Door symbols */}
        <path d="M180 100 A40 40 0 0 1 140 100" fill="none" stroke={EI} strokeWidth="0.75" strokeDasharray="2,2" />
        <line x1="180" y1="100" x2="180" y2="60" stroke={EI} strokeWidth="1" />

        {/* Dimension arrows — horizontal */}
        <line x1="32" y1="295" x2="368" y2="295" stroke={EI} strokeWidth="0.75" />
        <line x1="32" y1="288" x2="32" y2="302" stroke={EI} strokeWidth="0.75" />
        <line x1="368" y1="288" x2="368" y2="302" stroke={EI} strokeWidth="0.75" />
        <text x="200" y="310" textAnchor="middle" style={{ fontSize: 8, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.1em" }}>5400</text>

        {/* Dimension arrows — vertical */}
        <line x1="10" y1="20" x2="10" y2="280" stroke={EI} strokeWidth="0.75" />
        <line x1="4" y1="20" x2="16" y2="20" stroke={EI} strokeWidth="0.75" />
        <line x1="4" y1="280" x2="16" y2="280" stroke={EI} strokeWidth="0.75" />
        <text x="6" y="155" textAnchor="middle" transform="rotate(-90,6,155)" style={{ fontSize: 8, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.1em" }}>3600</text>

        {/* Cross hatching — wall thickness */}
        {[0, 8, 16, 24, 32].map(offset => (
          <line key={offset} x1={32} y1={20 + offset} x2={32 + offset} y2={20} stroke={EI} strokeWidth="0.4" opacity="0.5" />
        ))}

        {/* Grid ref labels */}
        <text x="32" y="14" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>A</text>
        <text x="180" y="14" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>B</text>
        <text x="368" y="14" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>C</text>

        {/* Coordinate labels inside rooms */}
        <text x="96" y="90" textAnchor="middle" style={{ fontSize: 7.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>ROOM A</text>
        <text x="270" y="90" textAnchor="middle" style={{ fontSize: 7.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>ROOM B</text>
        <text x="148" y="220" textAnchor="middle" style={{ fontSize: 7.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>ROOM C</text>

        {/* North arrow */}
        <g transform="translate(352,36)">
          <circle cx="0" cy="0" r="12" fill="none" stroke={EI} strokeWidth="0.75" />
          <polygon points="0,-10 4,4 0,0 -4,4" fill={GREEN} fillOpacity="0.7" />
          <text x="0" y="8" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>N</text>
        </g>

        {/* Title block */}
        <rect x="220" y="230" width="148" height="50" fill="none" stroke={EI} strokeWidth="0.75" />
        <line x1="220" y1="248" x2="368" y2="248" stroke={EI} strokeWidth="0.5" />
        <text x="294" y="242" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.08em" }}>GENERAL ARRANGEMENT</text>
        <text x="294" y="258" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>DWG-001 · REV-A1</text>
        <text x="294" y="272" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>SCALE 1:100</text>
      </svg>

      {/* Bottom label */}
      <div className="flex items-center justify-between px-1" aria-hidden="true">
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>SECTION A–A</span>
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>EL+2400</span>
      </div>
    </div>
  );
}

function Plant3DSchematic() {
  const EI = "rgba(60,100,180,0.18)";
  const EI_T = "rgba(60,100,180,0.45)";
  const GREEN = "#1A8C2E";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center" style={{ gap: 0 }} aria-hidden="true">
        <div style={{ width: 1, height: 10, background: EI }} />
        <div style={{ flex: 1, height: 1, background: EI }} />
        <span className="font-mono px-4" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>PID-001 · PIPING DIAGRAM</span>
        <div style={{ flex: 1, height: 1, background: EI }} />
        <div style={{ width: 1, height: 10, background: EI }} />
      </div>

      <svg viewBox="0 0 400 320" className="w-full" aria-label="Plant 3D piping schematic">
        {/* Main horizontal pipe */}
        <line x1="40" y1="140" x2="360" y2="140" stroke={EI} strokeWidth="4" strokeLinecap="round" />

        {/* Branch pipes */}
        <line x1="120" y1="140" x2="120" y2="60" stroke={EI} strokeWidth="3" strokeLinecap="round" />
        <line x1="200" y1="140" x2="200" y2="220" stroke={EI} strokeWidth="3" strokeLinecap="round" />
        <line x1="290" y1="140" x2="290" y2="60" stroke={EI} strokeWidth="3" strokeLinecap="round" />
        <line x1="290" y1="60" x2="360" y2="60" stroke={EI} strokeWidth="2" strokeLinecap="round" />

        {/* Valves — gate valve symbols */}
        {[{ x: 80, y: 140 }, { x: 170, y: 140 }, { x: 250, y: 140 }].map((v, i) => (
          <g key={i} transform={`translate(${v.x},${v.y})`}>
            <polygon points="-8,0 0,-8 8,0 0,8" fill={`${EI}`} stroke={EI} strokeWidth="1" fillOpacity="0.3" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke={EI} strokeWidth="1.5" />
          </g>
        ))}

        {/* Equipment — vessels */}
        <ellipse cx="40" cy="140" rx="22" ry="28" fill="none" stroke={EI} strokeWidth="1.5" />
        <text x="40" y="144" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>T-101</text>

        <circle cx="360" cy="140" r="20" fill="none" stroke={EI} strokeWidth="1.5" />
        <text x="360" y="144" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>P-101</text>

        <rect x="176" y="220" width="48" height="36" fill="none" stroke={EI} strokeWidth="1.5" />
        <text x="200" y="242" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>E-101</text>

        {/* Instrument bubbles */}
        {[{ x: 120, y: 44, label: "FT-101" }, { x: 290, y: 44, label: "PT-201" }].map((b) => (
          <g key={b.label}>
            <circle cx={b.x} cy={b.y} r="14" fill="none" stroke={EI} strokeWidth="1" />
            <text x={b.x} y={b.y + 4} textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace" }}>{b.label}</text>
          </g>
        ))}

        {/* Flow direction arrows */}
        {[160, 240, 320].map((x) => (
          <polygon key={x} points={`${x - 5},135 ${x + 5},140 ${x - 5},145`} fill={GREEN} fillOpacity="0.5" />
        ))}

        {/* Pipe labels */}
        <text x="200" y="128" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>4&quot; SCH40 CS · LINE-001</text>

        {/* Title block */}
        <rect x="20" y="268" width="360" height="44" fill="none" stroke={EI} strokeWidth="0.75" />
        <line x1="20" y1="280" x2="380" y2="280" stroke={EI} strokeWidth="0.5" />
        <text x="200" y="276" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.08em" }}>P&ID — PLANT 3D PIPING DIAGRAM</text>
        <text x="200" y="292" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>PID-001 · REV-B1 · AREA: PROCESS</text>
        <text x="200" y="304" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>EPC PROJECT · CLASS 150</text>
      </svg>

      <div className="flex items-center justify-between px-1" aria-hidden="true">
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>P&ID REV-B1</span>
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>EL+3600</span>
      </div>
    </div>
  );
}

function RevitMEPSchematic() {
  const EI = "rgba(60,100,180,0.18)";
  const EI_T = "rgba(60,100,180,0.45)";
  const GREEN = "#1A8C2E";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center" style={{ gap: 0 }} aria-hidden="true">
        <div style={{ width: 1, height: 10, background: EI }} />
        <div style={{ flex: 1, height: 1, background: EI }} />
        <span className="font-mono px-4" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>BIM-001 · MEP COORDINATION</span>
        <div style={{ flex: 1, height: 1, background: EI }} />
        <div style={{ width: 1, height: 10, background: EI }} />
      </div>

      <svg viewBox="0 0 400 320" className="w-full" aria-label="Revit MEP building systems schematic">
        {/* Building outline */}
        <rect x="32" y="24" width="336" height="256" fill="none" stroke={EI} strokeWidth="1" />
        {/* Floor plates */}
        <line x1="32" y1="110" x2="368" y2="110" stroke={EI} strokeWidth="0.75" strokeDasharray="4,3" />
        <line x1="32" y1="196" x2="368" y2="196" stroke={EI} strokeWidth="0.75" strokeDasharray="4,3" />

        {/* HVAC ductwork — top floor */}
        <rect x="60" y="36" width="200" height="18" fill="none" stroke="rgba(60,100,180,0.35)" strokeWidth="1.5" />
        <line x1="260" y1="45" x2="340" y2="45" stroke="rgba(60,100,180,0.35)" strokeWidth="1.5" />
        <line x1="340" y1="36" x2="340" y2="74" stroke="rgba(60,100,180,0.35)" strokeWidth="1.5" />
        <rect x="316" y="65" width="48" height="24" fill="none" stroke="rgba(60,100,180,0.35)" strokeWidth="1" />
        <text x="340" y="80" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace" }}>AHU-01</text>
        <text x="160" y="30" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>SUPPLY DUCT 600×300</text>

        {/* Plumbing — middle floor */}
        <line x1="100" y1="120" x2="100" y2="190" stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="180" y1="120" x2="180" y2="190" stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="100" y1="155" x2="180" y2="155" stroke={GREEN} strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="100" cy="135" r="8" fill="none" stroke={GREEN} strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="180" cy="135" r="8" fill="none" stroke={GREEN} strokeWidth="1" strokeOpacity="0.6" />
        <text x="140" y="150" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace" }}>COLD WATER 2&quot;</text>

        {/* Electrical — conduit runs */}
        <line x1="240" y1="120" x2="340" y2="120" stroke="rgba(180,100,60,0.4)" strokeWidth="1.5" strokeDasharray="6,2" />
        <line x1="340" y1="120" x2="340" y2="190" stroke="rgba(180,100,60,0.4)" strokeWidth="1.5" strokeDasharray="6,2" />
        <rect x="300" y="148" width="32" height="20" fill="none" stroke="rgba(180,100,60,0.4)" strokeWidth="1" />
        <text x="316" y="161" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace" }}>DB-02</text>
        <text x="290" y="116" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace" }}>32mm CONDUIT</text>

        {/* Clash detection marker */}
        <circle cx="240" cy="155" r="12" fill="none" stroke="#E53E3E" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3,2" />
        <text x="240" y="159" textAnchor="middle" style={{ fontSize: 6.5, fill: "#E53E3E", fontFamily: "monospace", fillOpacity: "0.6" }}>CLASH</text>

        {/* Legend */}
        <rect x="36" y="212" width="180" height="58" fill="none" stroke={EI} strokeWidth="0.75" />
        <line x1="36" y1="224" x2="216" y2="224" stroke={EI} strokeWidth="0.5" />
        <text x="126" y="220" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.08em" }}>LEGEND</text>
        {[
          { y: 234, color: "rgba(60,100,180,0.6)", label: "HVAC" },
          { y: 246, color: GREEN, label: "PLUMBING" },
          { y: 258, color: "rgba(180,100,60,0.7)", label: "ELECTRICAL" },
        ].map((l) => (
          <g key={l.label}>
            <line x1="44" y1={l.y} x2="64" y2={l.y} stroke={l.color} strokeWidth="2" />
            <text x="70" y={l.y + 3} style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>{l.label}</text>
          </g>
        ))}

        {/* Title block */}
        <rect x="220" y="212" width="148" height="58" fill="none" stroke={EI} strokeWidth="0.75" />
        <line x1="220" y1="226" x2="368" y2="226" stroke={EI} strokeWidth="0.5" />
        <text x="294" y="222" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.06em" }}>MEP COORDINATION</text>
        <text x="294" y="238" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace" }}>BIM-001 · REV-A1</text>
        <text x="294" y="250" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace" }}>LEVEL 01 · 1:100</text>
        <text x="294" y="262" textAnchor="middle" style={{ fontSize: 6, fill: EI_T, fontFamily: "monospace" }}>REVIT MEP 2024</text>
      </svg>

      <div className="flex items-center justify-between px-1" aria-hidden="true">
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>SECTION B–B</span>
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>EL+3000</span>
      </div>
    </div>
  );
}

function E3DSchematic() {
  const EI = "rgba(60,100,180,0.18)";
  const EI_T = "rgba(60,100,180,0.45)";
  const GREEN = "#1A8C2E";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center" style={{ gap: 0 }} aria-hidden="true">
        <div style={{ width: 1, height: 10, background: EI }} />
        <div style={{ flex: 1, height: 1, background: EI }} />
        <span className="font-mono px-4" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>3D-001 · PLANT MODEL</span>
        <div style={{ flex: 1, height: 1, background: EI }} />
        <div style={{ width: 1, height: 10, background: EI }} />
      </div>

      <svg viewBox="0 0 400 320" className="w-full" aria-label="AVEVA E3D plant 3D model schematic">
        {/* Isometric projection of plant structure */}
        {/* Base platform — isometric rectangle */}
        <polygon points="200,200 340,140 340,240 200,300" fill="none" stroke={EI} strokeWidth="1.5" />
        <polygon points="60,140 200,200 200,300 60,240" fill="none" stroke={EI} strokeWidth="1.5" />
        <polygon points="60,140 200,80 340,140 200,200" fill="none" stroke={EI} strokeWidth="1.5" />

        {/* Vessel on platform */}
        <ellipse cx="200" cy="100" rx="28" ry="12" fill="none" stroke={EI} strokeWidth="1.5" />
        <line x1="172" y1="100" x2="172" y2="160" stroke={EI} strokeWidth="1.5" />
        <line x1="228" y1="100" x2="228" y2="160" stroke={EI} strokeWidth="1.5" />
        <ellipse cx="200" cy="160" rx="28" ry="12" fill="none" stroke={EI} strokeWidth="1.5" />
        <text x="200" y="135" textAnchor="middle" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>V-101</text>

        {/* Pipe runs — 3D isometric */}
        <line x1="228" y1="130" x2="300" y2="100" stroke={EI} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="300" y1="100" x2="340" y2="120" stroke={EI} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="172" y1="130" x2="100" y2="100" stroke={EI} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="100" x2="60" y2="120" stroke={EI} strokeWidth="2.5" strokeLinecap="round" />

        {/* Support structure */}
        <line x1="180" y1="200" x2="180" y2="240" stroke={EI} strokeWidth="1.5" />
        <line x1="220" y1="200" x2="220" y2="240" stroke={EI} strokeWidth="1.5" />
        <line x1="160" y1="240" x2="240" y2="240" stroke={EI} strokeWidth="1" strokeDasharray="3,2" />

        {/* Coordinate axes */}
        <g transform="translate(52,260)">
          <line x1="0" y1="0" x2="24" y2="-12" stroke={GREEN} strokeWidth="1" strokeOpacity="0.6" />
          <line x1="0" y1="0" x2="24" y2="12" stroke="rgba(60,100,180,0.5)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="-24" stroke="rgba(180,60,60,0.5)" strokeWidth="1" />
          <text x="26" y="-10" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>X</text>
          <text x="26" y="14" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>Y</text>
          <text x="2" y="-26" style={{ fontSize: 7, fill: EI_T, fontFamily: "monospace" }}>Z</text>
        </g>

        {/* Dimension annotations */}
        <line x1="60" y1="268" x2="340" y2="268" stroke={EI} strokeWidth="0.75" />
        <line x1="60" y1="262" x2="60" y2="274" stroke={EI} strokeWidth="0.75" />
        <line x1="340" y1="262" x2="340" y2="274" stroke={EI} strokeWidth="0.75" />
        <text x="200" y="282" textAnchor="middle" style={{ fontSize: 7.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.08em" }}>12,000 mm</text>

        {/* Grid ref */}
        <text x="200" y="300" textAnchor="middle" style={{ fontSize: 6.5, fill: EI_T, fontFamily: "monospace", letterSpacing: "0.08em" }}>3D-001 · EL+4500 · AVEVA E3D 2024</text>
      </svg>

      <div className="flex items-center justify-between px-1" aria-hidden="true">
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>3D ISOMETRIC · REV-C1</span>
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>EL+4500</span>
      </div>
    </div>
  );
}