"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#FFFFFF";

// Column headers — programs
const programs = [
  { code: "PRG-001", name: "AutoCAD"   },
  { code: "PRG-002", name: "Plant 3D"  },
  { code: "PRG-003", name: "Revit MEP" },
  { code: "PRG-004", name: "E3D"       },
] as const;

// Row competencies — derived from real program learning outcomes
// true = full coverage  "partial" = partial/foundational  false = not covered
const competencies = [
  {
    code: "CMP-001",
    name: "2D Drafting",
    desc: "Gambar teknik standar industri",
    coverage: [true, "partial", false, false] as const,
  },
  {
    code: "CMP-002",
    name: "3D Modeling",
    desc: "Pemodelan objek tiga dimensi",
    coverage: ["partial", true, true, true] as const,
  },
  {
    code: "CMP-003",
    name: "Piping Design",
    desc: "Sistem perpipaan & routing",
    coverage: [false, true, false, true] as const,
  },
  {
    code: "CMP-004",
    name: "Equipment Layout",
    desc: "Penempatan peralatan industri",
    coverage: [false, true, false, true] as const,
  },
  {
    code: "CMP-005",
    name: "Isometric Drawing",
    desc: "Gambar isometri & spool",
    coverage: [false, true, false, true] as const,
  },
  {
    code: "CMP-006",
    name: "MEP Coordination",
    desc: "Koordinasi sistem mekanikal-elektrikal",
    coverage: [false, false, true, false] as const,
  },
  {
    code: "CMP-007",
    name: "BIM Workflow",
    desc: "Building Information Modelling",
    coverage: [false, false, true, false] as const,
  },
  {
    code: "CMP-008",
    name: "Clash Detection",
    desc: "Identifikasi konflik antar disiplin",
    coverage: [false, false, true, "partial"] as const,
  },
  {
    code: "CMP-009",
    name: "Plant Modeling",
    desc: "Pemodelan plant skala besar",
    coverage: [false, "partial", false, true] as const,
  },
  {
    code: "CMP-010",
    name: "Drawing Production",
    desc: "Output gambar & dokumentasi proyek",
    coverage: [true, true, true, true] as const,
  },
] as const;

// Coverage indicator — three states
function Indicator({ value }: { value: true | "partial" | false }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center" aria-label="Penuh">
        {/* Solid filled circle — full coverage */}
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: GREEN,
          }}
        />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex items-center justify-center" aria-label="Sebagian">
        {/* Half-filled circle — partial/foundational */}
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            border: `1.5px solid ${GREEN}`,
            background: "rgba(26,140,46,0.15)",
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center" aria-label="Tidak tersedia">
      {/* Empty circle — not covered */}
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      />
    </div>
  );
}

export function CompetencyMatrixSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="matrix-heading"
    >
      {/* Grid — full coverage, very low opacity, blueprint atmosphere */}
      <div className="pointer-events-none select-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.03) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Edge fades */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,${BG} 0%,transparent 5%,transparent 95%,${BG} 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 8%,transparent 92%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div variants={enter} className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45" style={{ background: GREEN }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: GREEN }} />
                </span>
                <span className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}>
                  Matriks Kompetensi
                </span>
              </div>
              <h2
                id="matrix-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2rem,3.5vw+0.25rem,3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: INK,
                }}
              >
                Kompetensi yang Akan{" "}
                <span style={{ color: GREEN }}>Anda Kuasai</span>
              </h2>
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "54ch" }}>
                Setiap program membangun kompetensi yang berbeda namun saling
                terhubung dalam kebutuhan industri engineering modern.
              </p>
            </motion.div>

            {/* Legend — right-aligned */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-3"
            >
              <span className="font-mono block mb-1"
                style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                LEGENDA
              </span>
              {[
                { label: "Kompetensi penuh",    type: "full"    },
                { label: "Kompetensi dasar",    type: "partial" },
                { label: "Tidak dicakup",       type: "none"    },
              ].map(({ label, type }) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-5 h-5 shrink-0">
                    {type === "full" && (
                      <div style={{ width: 9, height: 9, borderRadius: "50%", background: GREEN }} />
                    )}
                    {type === "partial" && (
                      <div style={{ width: 9, height: 9, borderRadius: "50%", border: `1.5px solid ${GREEN}`, background: "rgba(26,140,46,0.15)" }} />
                    )}
                    {type === "none" && (
                      <div style={{ width: 9, height: 9, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.12)" }} />
                    )}
                  </div>
                  <span className="font-body" style={{ fontSize: 12, color: "#64748B" }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Matrix */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/*
              TOP DIMENSION LINE — spans full matrix width.
              X-100 at left, X-400 at right (4 program columns).
              Program column headers hang from this line via ticks.
            */}
            <div className="hidden lg:block relative mb-0" style={{ height: 48 }} aria-hidden="true">
              {/* Spine */}
              <div className="absolute" style={{ left: 0, right: 0, top: 24, height: 1, background: EI }} />
              {/* Left tick + X coordinate */}
              <div className="absolute flex flex-col items-center" style={{ left: "28%", top: 14 }}>
                <div style={{ width: 1, height: 20, background: EI }} />
              </div>
              {/* X-100 left label */}
              <span className="font-mono absolute" style={{ left: 0, top: 28, fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                X-100
              </span>
              {/* X-400 right label */}
              <span className="font-mono absolute" style={{ right: 0, top: 28, fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                X-400
              </span>
              {/* Left boundary tick */}
              <div className="absolute" style={{ left: 0, top: 14, width: 1, height: 20, background: EI }} />
              {/* Right boundary tick */}
              <div className="absolute" style={{ right: 0, top: 14, width: 1, height: 20, background: EI }} />
            </div>

            {/* Matrix table */}
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{ borderCollapse: "collapse", minWidth: 580 }}
                aria-label="Matriks kompetensi program DEDC"
              >
                {/* Column headers */}
                <thead>
                  <tr>
                    {/* Row label column */}
                    <th
                      scope="col"
                      className="text-left pb-5 pr-6"
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,0.10)",
                        width: "38%",
                      }}
                    >
                      <span className="font-mono"
                        style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                        KOMPETENSI
                      </span>
                    </th>
                    {programs.map((p) => (
                      <th
                        key={p.code}
                        scope="col"
                        className="text-center pb-5 px-4"
                        style={{ borderBottom: "1px solid rgba(0,0,0,0.10)" }}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="font-mono"
                            style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                            {p.code}
                          </span>
                          <span className="font-heading font-bold"
                            style={{ fontSize: 13, color: INK, letterSpacing: "-0.01em" }}>
                            {p.name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Competency rows */}
                <tbody>
                  {competencies.map((comp, i) => {
                    const isLast = i === competencies.length - 1;
                    return (
                      <motion.tr
                        key={comp.code}
                        variants={
                          reduce ? fadeIn : {
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: i * 0.04, duration: 0.4 } },
                          }
                        }
                        style={{
                          borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.055)",
                        }}
                      >
                        {/* Competency label */}
                        <td className="py-4 pr-6" style={{ verticalAlign: "middle" }}>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-3">
                              <span className="font-mono shrink-0"
                                style={{ fontSize: 8, letterSpacing: "0.1em", color: EI_T, minWidth: 52 }}>
                                {comp.code}
                              </span>
                              <span className="font-body font-medium"
                                style={{ fontSize: 13.5, color: INK }}>
                                {comp.name}
                              </span>
                            </div>
                            <span className="font-body pl-[52px]"
                              style={{ fontSize: 11.5, color: "#94A3B8" }}>
                              {comp.desc}
                            </span>
                          </div>
                        </td>

                        {/* Coverage cells */}
                        {comp.coverage.map((value, ci) => (
                          <td
                            key={ci}
                            className="py-4 px-4"
                            style={{ textAlign: "center", verticalAlign: "middle" }}
                          >
                            <Indicator value={value} />
                          </td>
                        ))}
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom dimension line */}
            <div className="hidden lg:flex items-center mt-0" aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                MATRIX REV-01 · 10 CMP · 4 PRG
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