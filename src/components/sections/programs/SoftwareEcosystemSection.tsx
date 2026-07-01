"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.20)";
const EI_T  = "rgba(60,100,180,0.48)";
const EI_S  = "rgba(60,100,180,0.14)";   // subtle pipe segment
const GREEN = "#1A8C2E";
const GREEN_DIM = "rgba(26,140,46,0.55)";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ── Geometry constants ────────────────────────────────────────────
const CX = 450;   // core centre x
const CY = 280;   // core centre y
const CORE_R  = 62;   // core outer circle radius
const CORE_R2 = 52;   // core inner circle radius
const NODE_R  = 26;   // discipline node radius
const VALVE_R = 5;    // valve circle on pipe

// ── 4 discipline nodes — corner positions ─────────────────────────
const DISCIPLINES = [
  { id: "autocad",  code: "SW-001", name: "AutoCAD",    role: "2D Drafting",    flow: "2D FOUNDATION",  coord: "X-100", nx: 178, ny: 108 },
  { id: "plant3d",  code: "SW-002", name: "Plant 3D",   role: "Industrial Plant",flow: "PLANT DESIGN",   coord: "X-200", nx: 722, ny: 108 },
  { id: "revitmep", code: "SW-003", name: "Revit MEP",  role: "Building System", flow: "BIM WORKFLOW",   coord: "X-300", nx: 178, ny: 452 },
  { id: "e3d",      code: "SW-004", name: "AVEVA E3D",  role: "Advanced Plant",  flow: "ADVANCED PLANT", coord: "X-400", nx: 722, ny: 452 },
] as const;

// ── Pipe arm: from node edge toward core edge ─────────────────────
// Returns the two endpoints trimmed to circle boundaries
function armPoints(nx: number, ny: number) {
  const dx = CX - nx;
  const dy = CY - ny;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / dist;
  const uy = dy / dist;
  // Start: node edge
  const sx = nx + ux * NODE_R;
  const sy = ny + uy * NODE_R;
  // End: core edge
  const ex = CX - ux * CORE_R;
  const ey = CY - uy * CORE_R;
  // Valve at 45% along
  const vx = sx + (ex - sx) * 0.45;
  const vy = sy + (ey - sy) * 0.45;
  // Arrow 1 at 30%, Arrow 2 at 68%
  const a1x = sx + (ex - sx) * 0.30;
  const a1y = sy + (ey - sy) * 0.30;
  const a2x = sx + (ex - sx) * 0.68;
  const a2y = sy + (ey - sy) * 0.68;
  // Flow label position at 55%
  const lx = sx + (ex - sx) * 0.55;
  const ly = sy + (ey - sy) * 0.55;
  return { sx, sy, ex, ey, vx, vy, a1x, a1y, a2x, a2y, lx, ly, ux, uy, dist };
}

// Flow arrow — small triangle pointing from node toward core
function FlowArrow({ x, y, ux, uy, active }: {
  x: number; y: number; ux: number; uy: number; active: boolean;
}) {
  // Perpendicular for triangle width
  const px = -uy;
  const py = ux;
  const size = 5;
  const tip  = `${x + ux * size},${y + uy * size}`;
  const bl   = `${x - px * 3 - ux * 2},${y - py * 3 - uy * 2}`;
  const br   = `${x + px * 3 - ux * 2},${y + py * 3 - uy * 2}`;
  return (
    <polygon
      points={`${tip} ${bl} ${br}`}
      fill={active ? EI_T : EI}
      style={{ transition: "fill 200ms ease" }}
    />
  );
}

export function SoftwareEcosystemSection() {
  const reduce    = useReducedMotion();
  const enter     = reduce ? fadeIn : fadeUp;
  const sectionRef = useRef<HTMLElement>(null);
  const inView    = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation timeline variants
  const coreVariant = {
    hidden:  { scale: 0.6, opacity: 0 },
    visible: { scale: 1,   opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const pipeVariant = (delay: number) => ({
    hidden:  { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.7, delay, ease: "easeInOut" } },
  });
  const nodeVariant = (delay: number) => ({
    hidden:  { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay, ease: "easeOut", type: "spring", stiffness: 200 } },
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="ecosystem-heading"
    >
      {/* Blueprint grid — centre zone only, 40% coverage */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ left: "20%", right: "20%", top: "20%", bottom: "20%" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, ${BG} 100%)`,
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

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={enter} className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                    style={{ background: GREEN }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]"
                    style={{ background: GREEN }} />
                </span>
                <span className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}>
                  Engineering Software Ecosystem
                </span>
              </div>
              <h2
                id="ecosystem-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2.75rem,3vw,5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: INK,
                }}
              >
                Satu Ekosistem,{" "}
                <span style={{ color: GREEN }}>Empat Disiplin</span>
              </h2>
            </motion.div>

            <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                DEDC mengajarkan empat disiplin yang saling terhubung dalam
                satu ekosistem engineering profesional — bukan kursus software
                yang berdiri sendiri.
              </p>
            </motion.div>
          </div>

          {/* ══ COMMAND CENTER ════════════════════════════════════ */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* Top reference line */}
            <div className="hidden lg:flex items-center" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}>
                SOFTWARE NETWORK · REV-S01 · ENGINEERING ECOSYSTEM
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Main diagram + right spec panel */}
            <div className="hidden lg:flex items-start gap-0">

              {/* SVG Command Center — takes most of the width */}
              <div className="flex-1 relative">
                <svg
                  viewBox="0 0 900 560"
                  className="w-full"
                  style={{ overflow: "visible" }}
                  aria-label="Diagram ekosistem software DEDC"
                  role="img"
                >
                  {/* ── Grid coordinate labels — centre zone ── */}
                  {["X-100 Y-200", "X-300 Y-100", "GRID A-A", "REF-001"].map((label, i) => {
                    const positions = [
                      { x: 340, y: 195 },
                      { x: 490, y: 195 },
                      { x: 340, y: 360 },
                      { x: 490, y: 360 },
                    ];
                    const pos = positions[i]!;
                    return (
                      <text key={label} x={pos.x} y={pos.y}
                        textAnchor="middle"
                        style={{ fontSize: 7, letterSpacing: "0.12em", fill: "rgba(60,100,180,0.18)", fontFamily: "monospace" }}>
                        {label}
                      </text>
                    );
                  })}

                  {/* ── Pipe arms — animated pathLength ── */}
                  {DISCIPLINES.map((d, i) => {
                    const { sx, sy, ex, ey, vx, vy, a1x, a1y, a2x, a2y, lx, ly, ux, uy } = armPoints(d.nx, d.ny);
                    const delay = 0.6 + i * 0.15;
                    const labelLeft = d.nx < CX;

                    return (
                      <g key={d.id}>
                        {/* Main pipe — thick, animated */}
                        <motion.line
                          x1={sx} y1={sy} x2={ex} y2={ey}
                          stroke={EI}
                          strokeWidth={3}
                          strokeLinecap="round"
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={reduce ? {} : pipeVariant(delay)}
                          custom={delay}
                        />
                        {/* Secondary overlay — slightly darker centre line */}
                        <motion.line
                          x1={sx} y1={sy} x2={ex} y2={ey}
                          stroke={EI_S}
                          strokeWidth={1}
                          strokeDasharray="4 6"
                          strokeLinecap="round"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: delay + 0.4, duration: 0.3 }}
                        />

                        {/* Valve circle at midpoint */}
                        <motion.circle
                          cx={vx} cy={vy} r={VALVE_R}
                          fill={BG}
                          stroke={EI_T}
                          strokeWidth={1.5}
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: delay + 0.5, duration: 0.3 }}
                        />
                        {/* Valve cross mark */}
                        <motion.line
                          x1={vx - uy * 3} y1={vy + ux * 3}
                          x2={vx + uy * 3} y2={vy - ux * 3}
                          stroke={EI_T} strokeWidth={1}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: delay + 0.55 }}
                        />

                        {/* Flow arrows */}
                        <motion.g
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: delay + 0.65, duration: 0.3 }}
                        >
                          <FlowArrow x={a1x} y={a1y} ux={ux} uy={uy} active={false} />
                          <FlowArrow x={a2x} y={a2y} ux={ux} uy={uy} active={false} />
                        </motion.g>

                        {/* Flow label beside valve */}
                        <motion.text
                          x={lx + (labelLeft ? -18 : 18)}
                          y={ly}
                          textAnchor={labelLeft ? "end" : "start"}
                          dominantBaseline="middle"
                          style={{ fontSize: 7, letterSpacing: "0.14em", fill: EI_T, fontFamily: "monospace" }}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: delay + 0.7, duration: 0.4 }}
                        >
                          {d.flow}
                        </motion.text>
                      </g>
                    );
                  })}

                  {/* ── CORE NODE ── */}
                  <motion.g
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={reduce ? {} : coreVariant}
                    style={{ transformOrigin: `${CX}px ${CY}px` }}
                  >
                    {/* Outer pulse ring */}
                    <circle cx={CX} cy={CY} r={78}
                      fill="none" stroke={EI_S} strokeWidth={1}
                      strokeDasharray="3 5" />
                    {/* Outer solid ring */}
                    <circle cx={CX} cy={CY} r={CORE_R}
                      fill={BG} stroke={EI_T} strokeWidth={1.5} />
                    {/* Inner ring */}
                    <circle cx={CX} cy={CY} r={CORE_R2}
                      fill="none" stroke={EI} strokeWidth={1} />
                    {/* Green core */}
                    <circle cx={CX} cy={CY} r={22}
                      fill="rgba(26,140,46,0.08)" stroke={GREEN_DIM} strokeWidth={1.5} />
                    <circle cx={CX} cy={CY} r={10}
                      fill={GREEN} />

                    {/* Core label — ENGINEERING */}
                    <text x={CX} y={CY - 32} textAnchor="middle"
                      style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", fill: INK,
                        fontFamily: "Space Grotesk, system-ui, sans-serif" }}>
                      ENGINEERING
                    </text>
                    {/* Core sub-label */}
                    <text x={CX} y={CY + 36} textAnchor="middle"
                      style={{ fontSize: 7, letterSpacing: "0.18em", fill: EI_T, fontFamily: "monospace" }}>
                      CORE-001
                    </text>

                    {/* Outer ring label — SOFTWARE ECOSYSTEM */}
                    {/* Rendered as arc text approximation: two halves */}
                    <text x={CX} y={CY - CORE_R - 8} textAnchor="middle"
                      style={{ fontSize: 6.5, letterSpacing: "0.2em", fill: EI_T, fontFamily: "monospace" }}>
                      SOFTWARE ECOSYSTEM
                    </text>
                  </motion.g>

                  {/* ── DISCIPLINE NODES ── */}
                  {DISCIPLINES.map((d, i) => {
                    const delay  = 1.2 + i * 0.12;
                    const left   = d.nx < CX;
                    const top    = d.ny < CY;
                    const tAnchor = left ? "end" : "start";
                    const txOff   = left ? -(NODE_R + 10) : (NODE_R + 10);

                    return (
                      <motion.g
                        key={d.id}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={reduce ? {} : nodeVariant(delay)}
                        style={{ transformOrigin: `${d.nx}px ${d.ny}px` }}
                      >
                        {/* Node background circle */}
                        <circle cx={d.nx} cy={d.ny} r={NODE_R}
                          fill={BG} stroke={GREEN_DIM} strokeWidth={1.5} />
                        {/* Inner ring */}
                        <circle cx={d.nx} cy={d.ny} r={NODE_R - 7}
                          fill="none" stroke={EI} strokeWidth={0.75} />
                        {/* Core dot */}
                        <circle cx={d.nx} cy={d.ny} r={5}
                          fill={GREEN} />

                        {/* Code label — above/below node */}
                        <text
                          x={d.nx} y={top ? d.ny - NODE_R - 22 : d.ny + NODE_R + 22}
                          textAnchor="middle"
                          style={{ fontSize: 7.5, letterSpacing: "0.14em", fill: EI_T, fontFamily: "monospace" }}
                        >
                          {d.code}
                        </text>

                        {/* Coord label */}
                        <text
                          x={d.nx} y={top ? d.ny - NODE_R - 11 : d.ny + NODE_R + 33}
                          textAnchor="middle"
                          style={{ fontSize: 6.5, letterSpacing: "0.12em", fill: "rgba(60,100,180,0.28)", fontFamily: "monospace" }}
                        >
                          {d.coord}
                        </text>

                        {/* Software name — beside node */}
                        <text
                          x={d.nx + txOff} y={d.ny - 7}
                          textAnchor={tAnchor}
                          style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em", fill: INK,
                            fontFamily: "Space Grotesk, system-ui, sans-serif" }}
                        >
                          {d.name}
                        </text>
                        {/* Role */}
                        <text
                          x={d.nx + txOff} y={d.ny + 8}
                          textAnchor={tAnchor}
                          style={{ fontSize: 9, letterSpacing: "0.04em", fill: "#64748B", fontFamily: "monospace" }}
                        >
                          {d.role}
                        </text>
                      </motion.g>
                    );
                  })}
                </svg>
              </div>

              {/* ── Right spec panel ── */}
              <motion.div
                className="flex-shrink-0 flex flex-col"
                style={{ width: 172, paddingTop: "3rem", paddingLeft: "1.5rem" }}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
              >
                {/* Spec plate frame */}
                <div
                  className="flex flex-col gap-2 p-4"
                  style={{ border: `1px solid ${EI}`, borderRadius: 2 }}
                >
                  {/* Header line */}
                  <div className="flex flex-col gap-0.5 pb-2"
                    style={{ borderBottom: `1px solid ${EI}` }}>
                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                      ECOSYSTEM REV-C1
                    </span>
                    <div style={{ width: "100%", height: 1, background: EI, marginTop: 4 }} />
                  </div>

                  {/* Spec entries */}
                  {[
                    ["DISCIPLINES",  "4 CONNECTED"],
                    ["CORE SYSTEM",  "1 UNIFIED"],
                    ["ALUMNI",       "1000+"],
                    ["LEARNING",     "CONNECTED"],
                    ["STATUS",       "ACTIVE"],
                  ].map(([key, val]) => (
                    <div key={key} className="flex items-start justify-between gap-2">
                      <span className="font-mono"
                        style={{ fontSize: 7.5, letterSpacing: "0.1em", color: "rgba(60,100,180,0.35)" }}>
                        {key}
                      </span>
                      <span className="font-mono font-bold"
                        style={{ fontSize: 7.5, letterSpacing: "0.08em",
                          color: val === "ACTIVE" ? GREEN : EI_T }}>
                        {val}
                      </span>
                    </div>
                  ))}

                  {/* Footer */}
                  <div className="pt-2" style={{ borderTop: `1px solid ${EI}` }}>
                    <span className="font-mono"
                      style={{ fontSize: 7, letterSpacing: "0.1em", color: "rgba(60,100,180,0.28)" }}>
                      DEDC · ENGINEERING TRAINING
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile — simple grid */}
            <div className="lg:hidden grid grid-cols-2 gap-0 mt-8">
              {DISCIPLINES.map((d, i) => (
                <motion.div
                  key={d.id}
                  variants={reduce ? fadeIn : {
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } },
                  }}
                  className="flex flex-col gap-2 p-5"
                  style={{
                    borderRight:  i % 2 === 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                    borderBottom: i < 2       ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div style={{ width: 10, height: 10, borderRadius: "50%",
                      border: `1.5px solid ${GREEN}`, position: "relative", flexShrink: 0 }}>
                      <div style={{ position: "absolute", top: "50%", left: "50%",
                        transform: "translate(-50%,-50%)", width: 4, height: 4,
                        borderRadius: "50%", background: GREEN }} />
                    </div>
                    <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                      {d.code}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold"
                    style={{ fontSize: "1rem", color: INK, letterSpacing: "-0.02em" }}>
                    {d.name}
                  </h3>
                  <p className="font-body" style={{ fontSize: 12.5, color: "#64748B" }}>
                    {d.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom label */}
            <div className="hidden lg:flex items-center mt-4" aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                INPUT: FOUNDATION DRAFTING · OUTPUT: MULTI-DISCIPLINE ENGINEER
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