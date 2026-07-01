"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ── Network node definitions ──────────────────────────────────────
// Positions within viewBox 0 0 700 420
const NODES = [
  {
    id:      "dedc",
    code:    "NET-00",
    name:    "DEDC Alumni",
    cx:      350,
    cy:      210,
    type:    "core",     // large, green
  },
  {
    id:      "epc",
    code:    "CMP-01",
    name:    "EPC Company",
    cx:      350,
    cy:      52,
    type:    "satellite",
  },
  {
    id:      "oil",
    code:    "CMP-02",
    name:    "Oil & Gas",
    cx:      120,
    cy:      120,
    type:    "satellite",
  },
  {
    id:      "building",
    code:    "CMP-03",
    name:    "Building MEP",
    cx:      580,
    cy:      120,
    type:    "satellite",
  },
  {
    id:      "industrial",
    code:    "CMP-04",
    name:    "Industrial Plant",
    cx:      120,
    cy:      300,
    type:    "satellite",
  },
  {
    id:      "consultant",
    code:    "CMP-05",
    name:    "Consultant",
    cx:      580,
    cy:      300,
    type:    "satellite",
  },
  {
    id:      "manufacturing",
    code:    "CMP-06",
    name:    "Manufacturing",
    cx:      350,
    cy:      368,
    type:    "satellite",
  },
] as const;

// Core node
const CORE = NODES[0];
// Satellite nodes
const SATELLITES = NODES.slice(1);

// Label anchor + offset per node (avoid edge overlap)
const LABEL: Record<string, { anchor: string; dx: number; dy: number }> = {
  dedc:          { anchor: "middle", dx:   0, dy:  -34 },
  epc:           { anchor: "middle", dx:   0, dy:  -18 },
  oil:           { anchor: "end",    dx: -16, dy:   -6 },
  building:      { anchor: "start",  dx:  16, dy:   -6 },
  industrial:    { anchor: "end",    dx: -16, dy:   18 },
  consultant:    { anchor: "start",  dx:  16, dy:   18 },
  manufacturing: { anchor: "middle", dx:   0, dy:   22 },
};

export function AlumniDestinationSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="destination-heading"
    >
      {/* Grid — around network area only, centre-focused */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ left: "20%", right: "20%", top: "20%", bottom: "20%" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.034) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.034) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 75% 75% at 50% 50%,transparent 25%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >

          {/* ── Section header ─────────────────────────────────── */}
          <motion.div
            variants={enter}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span
                className="relative flex h-[6px] w-[6px] shrink-0"
                aria-hidden="true"
              >
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                  style={{ background: GREEN }}
                />
                <span
                  className="relative inline-flex rounded-full h-[6px] w-[6px]"
                  style={{ background: GREEN }}
                />
              </span>
              <span
                className="font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}
              >
                ALM-DESTINATION
              </span>
            </div>

            <h2
              id="destination-heading"
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2rem,3.5vw+0.25rem,3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: INK,
                maxWidth: "28ch",
              }}
            >
              Alumni Kami Berkarya di{" "}
              <span style={{ color: GREEN }}>Berbagai Industri</span>
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "clamp(0.9rem,1.2vw,1rem)",
                lineHeight: 1.72,
                color: "#64748B",
                maxWidth: "50ch",
              }}
            >
              Mulai dari EPC, Oil & Gas, Building Engineering
              hingga Industrial Plant.
            </p>
          </motion.div>

          {/* ── Network diagram ─────────────────────────────────── */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* Top reference line */}
            <div
              className="hidden lg:flex items-center mb-0"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span
                className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}
              >
                ALUMNI NETWORK · SECTION B–B · REV-A1
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* SVG network — desktop */}
            <div className="hidden lg:block">
              <svg
                viewBox="0 0 700 420"
                className="w-full"
                style={{ maxHeight: 480, overflow: "visible" }}
                role="img"
                aria-label="Jaringan industri alumni DEDC"
              >
                {/* ── Coordinate ticks on top reference ── */}
                {SATELLITES.map((n, i) => (
                  <g key={`tick-${n.id}`}>
                    <line
                      x1={n.cx} y1={0}
                      x2={n.cx} y2={7}
                      stroke={EI} strokeWidth={1}
                    />
                    <text
                      x={n.cx}
                      y={-6}
                      textAnchor="middle"
                      style={{ fontSize: 7.5, letterSpacing: "0.12em", fill: EI_T, fontFamily: "monospace" }}
                    >
                      {`X-${(i + 1) * 100}`}
                    </text>
                  </g>
                ))}

                {/* ── Edges — hub and spoke from DEDC core ── */}
                {SATELLITES.map((n) => (
                  <line
                    key={`edge-${n.id}`}
                    x1={CORE.cx} y1={CORE.cy}
                    x2={n.cx}    y2={n.cy}
                    stroke={EI}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                ))}

                {/* Midpoint valve circles on edges */}
                {SATELLITES.map((n) => {
                  const mx = (CORE.cx + n.cx) / 2;
                  const my = (CORE.cy + n.cy) / 2;
                  return (
                    <circle
                      key={`valve-${n.id}`}
                      cx={mx} cy={my} r={3}
                      fill={BG}
                      stroke={EI_T}
                      strokeWidth={1}
                    />
                  );
                })}

                {/* ── Core node — DEDC Alumni ── */}
                <g>
                  {/* Pulse ring */}
                  <circle
                    cx={CORE.cx} cy={CORE.cy} r={40}
                    fill="none"
                    stroke="rgba(26,140,46,0.07)"
                    strokeWidth={1}
                  />
                  {/* Outer ring */}
                  <circle
                    cx={CORE.cx} cy={CORE.cy} r={30}
                    fill={BG}
                    stroke={GREEN}
                    strokeWidth={2}
                  />
                  {/* Inner ring */}
                  <circle
                    cx={CORE.cx} cy={CORE.cy} r={22}
                    fill="rgba(26,140,46,0.06)"
                    stroke="rgba(26,140,46,0.3)"
                    strokeWidth={1}
                  />
                  {/* Core dot */}
                  <circle
                    cx={CORE.cx} cy={CORE.cy} r={8}
                    fill={GREEN}
                  />
                  {/* Label */}
                  <text
                    x={CORE.cx}
                    y={CORE.cy + LABEL.dedc.dy}
                    textAnchor={LABEL.dedc.anchor}
                    style={{ fontSize: 8, letterSpacing: "0.12em", fill: EI_T, fontFamily: "monospace" }}
                  >
                    NET-00
                  </text>
                  <text
                    x={CORE.cx + LABEL.dedc.dx}
                    y={CORE.cy + 42}
                    textAnchor="middle"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      fill: GREEN,
                      fontFamily: "Space Grotesk, system-ui, sans-serif",
                    }}
                  >
                    DEDC Alumni
                  </text>
                </g>

                {/* ── Satellite nodes ── */}
                {SATELLITES.map((n) => {
                  const lbl = LABEL[n.id] ?? { anchor: "middle", dx: 0, dy: -18 };
                  return (
                    <motion.g
                      key={n.id}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + SATELLITES.indexOf(n) * 0.08,
                        duration: 0.4,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 180,
                      }}
                      style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                    >
                      {/* Node circle */}
                      <circle
                        cx={n.cx} cy={n.cy} r={18}
                        fill={BG}
                        stroke="rgba(26,140,46,0.45)"
                        strokeWidth={1.5}
                      />
                      <circle
                        cx={n.cx} cy={n.cy} r={5}
                        fill="rgba(26,140,46,0.45)"
                      />
                      {/* Code */}
                      <text
                        x={n.cx + lbl.dx}
                        y={n.cy + lbl.dy}
                        textAnchor={lbl.anchor}
                        style={{ fontSize: 7.5, letterSpacing: "0.13em", fill: EI_T, fontFamily: "monospace" }}
                      >
                        {n.code}
                      </text>
                      {/* Name — beside or below node */}
                      <text
                        x={n.cx + lbl.dx}
                        y={n.cy + lbl.dy + 12}
                        textAnchor={lbl.anchor}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          fill: INK,
                          fontFamily: "Space Grotesk, system-ui, sans-serif",
                        }}
                      >
                        {n.name}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Corner metadata */}
                <text
                  x={696} y={416}
                  textAnchor="end"
                  style={{ fontSize: 7, letterSpacing: "0.14em", fill: EI_T, fontFamily: "monospace" }}
                >
                  EL+2500 · REV-A1
                </text>
              </svg>
            </div>

            {/* Mobile fallback — simple hairline list */}
            <div className="lg:hidden grid grid-cols-2 gap-0 mt-8">
              {SATELLITES.map((n, i) => (
                <motion.div
                  key={n.id}
                  variants={reduce ? fadeIn : {
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } },
                  }}
                  className="flex flex-col gap-2 p-5"
                  style={{
                    borderRight:  i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                    borderBottom: i < 4       ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  }}
                >
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.13em", color: EI_T }}>
                    {n.code}
                  </span>
                  <span className="font-heading font-semibold"
                    style={{ fontSize: "0.9375rem", color: INK, letterSpacing: "-0.01em" }}>
                    {n.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom closing line */}
            <div
              className="hidden lg:flex items-center mt-0"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span
                className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}
              >
                NETWORK DEPLOYED · 6 SECTORS · 1.000+ ALUMNI
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