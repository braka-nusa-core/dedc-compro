"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens (mirrored from Hero) ───────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Static data ──────────────────────────────────────────────────
const TRAINING_AREAS = [
  { id: "TRN-01", label: "AutoCAD Training"           },
  { id: "TRN-02", label: "Plant 3D & BIM"             },
  { id: "TRN-03", label: "Custom In-House Programs"   },
] as const;

const TALENT_ROLES = [
  { id: "TAL-01", role: "Piping Designer"     },
  { id: "TAL-02", role: "CAD Engineer"        },
  { id: "TAL-03", role: "Mechanical Designer" },
  { id: "TAL-04", role: "BIM Modeler"         },
  { id: "TAL-05", role: "Project Engineer"    },
  { id: "TAL-06", role: "Drafting Engineer"   },
] as const;

// ─── Component ────────────────────────────────────────────────────
export function PartnershipOverviewSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="partnership-overview-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost word */}
        <div
          className="absolute hidden lg:block"
          style={{
            top:           "-3%",
            right:         "-4%",
            fontFamily:    "Space Grotesk, system-ui, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(7rem,17vw,20rem)",
            lineHeight:    0.9,
            color:         INK,
            opacity:       0.02,
            letterSpacing: "-0.04em",
            userSelect:    "none",
            textAlign:     "right",
          }}
        >
          PARTNER
          <br />
          SHIP
        </div>

        {/* Blueprint grid — top right, ~30% */}
        <div className="absolute top-0 right-0" style={{ width: "30%", height: "50%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.036) 1px, transparent 1px),
                linear-gradient(90deg, rgba(60,100,180,0.036) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left, transparent 0%, ${BG} 65%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, ${BG} 72%)` }} />
        </div>

        {/* Engineering codes — top right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["CRP-OVW", "REV-B1", "SECTION P–P"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: `linear-gradient(to top, ${BG}, transparent)` }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">

        {/* ── Section intro ───────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-5 mb-20 lg:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Blueprint label */}
          <motion.div variants={fadeIn} className="flex items-center gap-0" aria-hidden="true">
            <div className="flex flex-col gap-0.5 pr-4">
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                PARTNERSHIP OVERVIEW
              </span>
              <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                CRP-OVW-001
              </span>
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                REV-B1
              </span>
            </div>
            <div style={{ width: 64, height: 1, background: EI }} />
            <div style={{ width: 1, height: 14, background: EI }} />
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="font-mono"
            style={{ fontSize: 9, letterSpacing: "0.2em", color: EI_T, textTransform: "uppercase" }}
            aria-hidden="true"
          >
            Dua Model Kemitraan
          </motion.p>

          <motion.h2
            id="partnership-overview-heading"
            variants={enter}
            className="font-heading font-bold"
            style={{
              fontSize:      "clamp(1.875rem, 3vw, 3rem)",
              lineHeight:    1.06,
              letterSpacing: "-0.03em",
              color:         INK,
              maxWidth:      "20ch",
            }}
          >
            Bagaimana Perusahaan{" "}
            <span style={{ color: GREEN }}>Bekerja Sama dengan DEDC.</span>
          </motion.h2>
        </motion.div>

        {/* ── Two-column body ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* ════ LEFT — Corporate Training, 5 cols ════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Column blueprint label */}
            <motion.div variants={fadeIn} className="flex items-center gap-3" aria-hidden="true">
              <span className="font-mono font-semibold"
                style={{ fontSize: 8, letterSpacing: "0.2em", color: EI_T }}>
                SVC-01 · CORPORATE TRAINING
              </span>
              <div style={{ flex: 1, height: 1, background: EI, maxWidth: 40 }} />
            </motion.div>

            {/* Headline */}
            <motion.h3
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.5rem, 2.4vw, 2.25rem)",
                lineHeight:    1.08,
                letterSpacing: "-0.028em",
                color:         INK,
                maxWidth:      "14ch",
              }}
            >
              Tingkatkan Kompetensi{" "}
              <span style={{ color: GREEN }}>Tim Engineering Anda.</span>
            </motion.h3>

            {/* Hairline */}
            <motion.div variants={fadeIn} style={{ width: 48, height: 1, background: EI }} aria-hidden="true" />

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}
            >
              Perusahaan dapat mengirimkan engineer atau karyawan ke DEDC
              untuk pelatihan teknis yang berfokus pada kebutuhan industri —
              disesuaikan dengan level dan bidang kompetensi yang dibutuhkan
              tim Anda.
            </motion.p>

            {/* Training areas — typography only */}
            <motion.ul
              variants={staggerContainer}
              className="flex flex-col"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: "0.25rem" }}
              aria-label="Area pelatihan corporate"
            >
              {TRAINING_AREAS.map((area, i) => {
                const isLast = i === TRAINING_AREAS.length - 1;
                return (
                  <motion.li
                    key={area.id}
                    variants={
                      reduce ? fadeIn : {
                        hidden:  { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
                        },
                      }
                    }
                    className="flex items-center gap-4 py-4"
                    style={{ borderBottom: isLast ? undefined : "1px solid rgba(0,0,0,0.07)" }}
                  >
                    {/* Green dot indicator */}
                    <span
                      style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: GREEN, flexShrink: 0, opacity: 0.65,
                      }}
                      aria-hidden="true"
                    />

                    <span
                      className="font-heading font-semibold"
                      style={{
                        fontSize:      "clamp(0.9375rem, 1.2vw, 1rem)",
                        letterSpacing: "-0.01em",
                        color:         INK,
                        lineHeight:    1.2,
                        flex:          1,
                      }}
                    >
                      {area.label}
                    </span>

                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}
                      aria-hidden="true">
                      {area.id}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* ════ CENTRE — blueprint dimension connector, 2 cols ════ */}
          <motion.div
            className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            aria-hidden="true"
          >
            {/* Top tick + line + label + line + bottom tick */}
            <div style={{ width: 1, height: 40, background: EI }} />

            <div className="flex flex-col items-center py-4" style={{ gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", border: `1.5px solid ${EI_T}`, background: BG }} />
              <span className="font-mono"
                style={{
                  fontSize:       7.5,
                  letterSpacing:  "0.18em",
                  color:          EI_T,
                  writingMode:    "vertical-rl",
                  textOrientation: "mixed",
                  transform:       "rotate(180deg)",
                  padding:         "12px 0",
                }}>
                DEDC ECOSYSTEM
              </span>
              <div style={{ width: 6, height: 6, borderRadius: "50%", border: `1.5px solid ${EI_T}`, background: BG }} />
            </div>

            <div style={{ width: 1, flex: 1, background: EI }} />

            <span className="font-mono py-3"
              style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
              REV-B1
            </span>

            <div style={{ width: 1, height: 40, background: EI }} />
          </motion.div>

          {/* ════ RIGHT — Talent Supply, 5 cols ════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Column blueprint label */}
            <motion.div variants={fadeIn} className="flex items-center gap-3" aria-hidden="true">
              <span className="font-mono font-semibold"
                style={{ fontSize: 8, letterSpacing: "0.2em", color: EI_T }}>
                SVC-02 · ENGINEERING TALENT SUPPLY
              </span>
              <div style={{ flex: 1, height: 1, background: EI, maxWidth: 40 }} />
            </motion.div>

            {/* Headline */}
            <motion.h3
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.5rem, 2.4vw, 2.25rem)",
                lineHeight:    1.08,
                letterSpacing: "-0.028em",
                color:         INK,
                maxWidth:      "16ch",
              }}
            >
              Akses Talenta Engineering{" "}
              <span style={{ color: GREEN }}>Siap Industri.</span>
            </motion.h3>

            {/* Hairline */}
            <motion.div variants={fadeIn} style={{ width: 48, height: 1, background: EI }} aria-hidden="true" />

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}
            >
              DEDC membantu perusahaan terhubung dengan lulusan yang telah
              menjalani pelatihan berorientasi industri, simulasi proyek nyata,
              dan workflow engineering yang digunakan di lapangan.
            </motion.p>

            {/* Role list */}
            <motion.ul
              variants={staggerContainer}
              className="flex flex-col"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: "0.25rem" }}
              aria-label="Peran engineering yang tersedia"
            >
              {TALENT_ROLES.map((item, i) => {
                const isLast = i === TALENT_ROLES.length - 1;
                return (
                  <motion.li
                    key={item.id}
                    variants={
                      reduce ? fadeIn : {
                        hidden:  { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: i * 0.06, duration: 0.38, ease: "easeOut" },
                        },
                      }
                    }
                    className="flex items-center gap-4 py-3.5"
                    style={{ borderBottom: isLast ? undefined : "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <span
                      style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: GREEN, flexShrink: 0, opacity: 0.65,
                      }}
                      aria-hidden="true"
                    />

                    <span
                      className="font-heading font-semibold"
                      style={{
                        fontSize:      "clamp(0.9375rem, 1.2vw, 1rem)",
                        letterSpacing: "-0.01em",
                        color:         INK,
                        lineHeight:    1.2,
                        flex:          1,
                      }}
                    >
                      {item.role}
                    </span>

                    <span className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}
                      aria-hidden="true">
                      {item.id}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

        </div>

        {/* ── Bottom engineering strip ─────────────────────────── */}
        <motion.div
          className="hidden lg:flex items-center mt-24"
          style={{ gap: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 10, background: EI }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5"
            style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
            2 LAYANAN · CRP-OVW-001 · SECTION P–P · REV-B1
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>

      </div>
    </section>
  );
}