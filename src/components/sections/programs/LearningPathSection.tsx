"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// Node diameter — referenced for consistent sizing
const NODE_D = 20;
const NODE_R  = NODE_D / 2;

const stages = [
  { code: "STG-01", coord: "X-000", title: "Foundation",       desc: "Konsep dasar drafting, standar gambar teknik, dan engineering workflow."                        },
  { code: "STG-02", coord: "X-100", title: "Software Mastery", desc: "Latihan intensif dengan software industri: AutoCAD, Plant 3D, Revit, atau E3D."               },
  { code: "STG-03", coord: "X-200", title: "Industry Project", desc: "Proyek nyata skala industri dengan bimbingan praktisi berpengalaman."                          },
  { code: "STG-04", coord: "X-300", title: "Certification",    desc: "Ujian kompetensi dan penerbitan sertifikat resmi yang diakui industri."                         },
  { code: "STG-05", coord: "X-400", title: "Career Ready",     desc: "Siap bergabung di perusahaan EPC, Oil & Gas, MEP, atau Plant Engineering."                     },
] as const;

// Small flow-direction triangle — engineering PFD notation
function Arrow() {
  return (
    <div aria-hidden="true" style={{
      width: 0, height: 0, flexShrink: 0,
      borderTop: "4px solid transparent",
      borderBottom: "4px solid transparent",
      borderLeft: `6px solid ${EI}`,
    }} />
  );
}

export function LearningPathSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="flow-heading"
    >
      {/* Grid — pipeline zone only, 30-40% vertical band */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        aria-hidden="true"
        style={{ left: 0, right: 0, top: "38%", bottom: "22%" }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,${BG} 0%,transparent 5%,transparent 95%,${BG} 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 25%,transparent 75%,${BG} 100%)`,
        }} />
      </div>

      {/* Corner metadata block */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex flex-col items-end gap-1"
        style={{ top: 40, right: 72 }}
        aria-hidden="true"
      >
        {["WF-001", "FLOW REV-A", "TRAINING PIPELINE"].map((l) => (
          <span key={l} className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>{l}</span>
        ))}
        <div style={{ marginTop: 4, width: "100%", height: 1, background: EI }} />
        <div style={{ width: 1, height: 8, background: EI, alignSelf: "flex-end" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-16"
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45" style={{ background: GREEN }} />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px]" style={{ background: GREEN }} />
                </span>
                <span className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}>
                  Learning Engineering Workflow
                </span>
              </div>
              <h2
                id="flow-heading"
                className="font-heading font-bold"
                style={{ fontSize: "clamp(2.75rem,3vw,5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: INK }}
              >
                Dari Pemula ke{" "}
                <span style={{ color: GREEN }}>Engineer Industri</span>
              </h2>
            </motion.div>
            <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                DEDC mengoperasikan pipeline pelatihan yang mengubah pemula
                menjadi engineer siap industri dalam jalur yang terukur dan terarah.
              </p>
            </motion.div>
          </div>

          {/* ══ PROCESS FLOW DIAGRAM ══════════════════════════════ */}
          <motion.div variants={fadeIn} className="flex flex-col">

            {/* ── TOP REFERENCE LINE ───────────────────────────────
                X-coord labels + ticks sit at fixed % matching column centres.
                5 columns → centres at 10%, 30%, 50%, 70%, 90%.
                FLOW IN / FLOW OUT at boundaries.
                Full-width dimension line beneath.
            */}
            <div className="hidden lg:block relative" style={{ height: 52 }} aria-hidden="true">

              {/* Full-width top spine */}
              <div className="absolute" style={{ left: 0, right: 0, top: 26, height: 1, background: EI }} />

              {/* Left boundary */}
              <div className="absolute" style={{ left: 0, top: 16, width: 1, height: 20, background: EI }} />
              <span className="font-mono absolute" style={{ left: 4, top: 38, fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                FLOW IN
              </span>

              {/* Right boundary */}
              <div className="absolute" style={{ right: 0, top: 16, width: 1, height: 20, background: EI }} />
              <span className="font-mono absolute" style={{ right: 4, top: 38, fontSize: 8, letterSpacing: "0.14em", color: EI_T, textAlign: "right" }}>
                FLOW OUT
              </span>

              {/* Centre label */}
              <span className="font-mono absolute" style={{
                top: 30, left: "50%", transform: "translateX(-50%)",
                fontSize: 8, letterSpacing: "0.18em", color: EI_T, whiteSpace: "nowrap",
              }}>
                WORKFLOW A–A · REV-P01 · PROCESS FLOW
              </span>

              {/* X-coord labels + down-ticks, one per column */}
              {stages.map((s, i) => (
                <div key={s.coord} className="absolute flex flex-col items-center"
                  style={{ left: `${10 + i * 20}%`, top: 0, transform: "translateX(-50%)" }}>
                  <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                    {s.coord}
                  </span>
                  <div style={{ width: 1, height: 26, background: EI, marginTop: 2 }} />
                </div>
              ))}
            </div>

            {/* ── PIPELINE + STAGE COLUMNS ─────────────────────────
                Architecture:
                  ─ 5-column grid (each 20% wide)
                  ─ Each column owns: coord-label + node + drop + content
                  ─ The horizontal pipe is a SINGLE absolutely-positioned
                    line running at the node's vertical midpoint (top: NODE_R)
                    inside a position:relative wrapper
                  ─ Left/right pipe entry/exit extend to the section edge
                    via negative margins on the wrapper
                  ─ Flow arrows sit between columns using ::before pseudo or
                    sibling divs positioned in the gap

                This means every node is STRUCTURALLY the top of its column.
                The pipe is one element behind all of them.
                Nothing is approximated with margins.
            */}
            <div className="hidden lg:block">

              {/* Pipe instrument wrapper — extends wall-to-wall */}
              <div className="relative">

                {/* ── Horizontal pipe — single element, full width ── */}
                {/* Sits at node centre height: NODE_R px from top of this div */}
                <div
                  className="absolute"
                  style={{
                    left: 0, right: 0,
                    // Node is the first element in each column at top: 0
                    // Pipe centreline = NODE_R = 10px from top of the column block
                    top: NODE_R - 1,   // -1 to centre the 2px pipe on the node mid
                    height: 2,
                    background: EI,
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                />

                {/* Flow arrows — 4 arrows, one between each pair of nodes */}
                {/* Positioned at 20%, 40%, 60%, 80% of width (mid-gaps) */}
                {[20, 40, 60, 80].map((pct) => (
                  <div
                    key={pct}
                    className="absolute"
                    style={{
                      left: `${pct}%`,
                      top: NODE_R - 4,   // centre arrow on pipe
                      transform: "translateX(-50%)",
                      zIndex: 1,
                    }}
                    aria-hidden="true"
                  >
                    <Arrow />
                  </div>
                ))}

                {/* ── 5-column grid — each column IS one pipeline stage ── */}
                <div className="grid relative" style={{ gridTemplateColumns: "repeat(5, 1fr)", zIndex: 2 }}>
                  {stages.map((s, i) => (
                    <motion.div
                      key={s.code}
                      variants={
                        reduce ? fadeIn : {
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } },
                        }
                      }
                      className="flex flex-col items-center text-center"
                      style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
                    >
                      {/* ① NODE — sits on the pipe, clears the line */}
                      <div
                        style={{
                          width: NODE_D,
                          height: NODE_D,
                          borderRadius: "50%",
                          border: `2px solid ${GREEN}`,
                          background: BG,
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 3,
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          top: "50%", left: "50%",
                          transform: "translate(-50%,-50%)",
                          width: 7, height: 7,
                          borderRadius: "50%",
                          background: GREEN,
                        }} />
                      </div>

                      {/* ② VERTICAL DROP — connector from node to content */}
                      <div
                        style={{ width: 1, height: 28, background: EI, flexShrink: 0 }}
                        aria-hidden="true"
                      />

                      {/* ③ HORIZONTAL TICK — marks the content attachment point */}
                      <div
                        style={{ width: 6, height: 1, background: EI, marginBottom: 12 }}
                        aria-hidden="true"
                      />

                      {/* ④ STAGE CODE */}
                      <span className="font-mono block mb-2"
                        style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                        {s.code}
                      </span>

                      {/* ⑤ TITLE */}
                      <h3 className="font-heading font-bold mb-3"
                        style={{
                          fontSize: "clamp(0.875rem,1.2vw,1rem)",
                          color: INK,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}>
                        {s.title}
                      </h3>

                      {/* ⑥ DESCRIPTION */}
                      <p className="font-body leading-relaxed"
                        style={{ fontSize: 12, color: "#64748B", maxWidth: "16ch" }}>
                        {s.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── MOBILE — vertical pipeline ───────────────────── */}
            <div className="lg:hidden flex flex-col">
              {stages.map((s, i) => {
                const isLast = i === stages.length - 1;
                return (
                  <motion.div
                    key={s.code}
                    variants={reduce ? fadeIn : {
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" } },
                    }}
                    className="relative flex gap-5"
                    style={{ paddingBottom: isLast ? 0 : "2rem" }}
                  >
                    <div className="flex flex-col items-center" style={{ width: NODE_D, flexShrink: 0 }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: `2px solid ${GREEN}`, background: BG,
                        position: "relative", flexShrink: 0,
                      }}>
                        <div style={{
                          position: "absolute", top: "50%", left: "50%",
                          transform: "translate(-50%,-50%)",
                          width: 5, height: 5, borderRadius: "50%", background: GREEN,
                        }} />
                      </div>
                      {!isLast && <div style={{ flex: 1, width: 1, background: EI, marginTop: 4 }} />}
                    </div>
                    <div className="flex flex-col gap-1 pt-0.5">
                      <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                        {s.code}
                      </span>
                      <h3 className="font-heading font-bold"
                        style={{ fontSize: "1rem", color: INK, letterSpacing: "-0.02em" }}>
                        {s.title}
                      </h3>
                      <p className="font-body leading-relaxed"
                        style={{ fontSize: 13, color: "#64748B" }}>
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── BOTTOM CLOSING LINE ──────────────────────────── */}
            <div className="hidden lg:flex items-center mt-12" aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-5 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
                END OF PROCESS · OUTPUT: INDUSTRY-READY ENGINEER
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