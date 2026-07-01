"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Types ────────────────────────────────────────────────────────
export interface ProjectOutput {
  title:       string;
  description: string;
}

export interface CareerDestination {
  role: string;
}

interface Props {
  projectOutputs:      ProjectOutput[];
  careerDestinations:  CareerDestination[];
  closingStatement?:   string;
}

// ─── Component ────────────────────────────────────────────────────
export function ProjectOutcomeSection({
  projectOutputs,
  careerDestinations,
  closingStatement = "Bukan sekadar menyelesaikan pelatihan. Tetapi membangun fondasi untuk karier engineering.",
}: Props) {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="outcome-heading"
    >
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost word */}
        <div
          className="absolute hidden lg:block"
          style={{
            top:           "-4%",
            right:         "-4%",
            fontFamily:    "Space Grotesk, system-ui, sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(8rem,17vw,21rem)",
            lineHeight:    0.9,
            color:         INK,
            opacity:       0.02,
            letterSpacing: "-0.04em",
            userSelect:    "none",
          }}
        >
          OUTPUT
        </div>

        {/* Blueprint grid — top right */}
        <div className="absolute top-0 right-0" style={{ width: "30%", height: "45%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.034) 1px, transparent 1px),
                linear-gradient(90deg, rgba(60,100,180,0.034) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left, transparent 0%, ${BG} 65%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, ${BG} 70%)` }} />
        </div>

        {/* Engineering codes — top right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["EL+3200", "REV-D2", "SECTION O–O"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: `linear-gradient(to top, ${BG}, transparent)` }}
        />
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 pt-24 lg:pt-32 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">

          {/* ════ LEFT — Project Output, 5 cols ════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Blueprint label */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>PROJECT OUTPUT</span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>PRG-OUT-001</span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-D2</span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            {/* Overline */}
            <motion.p variants={fadeIn} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", color: EI_T, textTransform: "uppercase" }}
              aria-hidden="true">
              Project Output
            </motion.p>

            {/* Headline */}
            <motion.h2
              id="outcome-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.875rem, 3vw, 3rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.03em",
                color:         INK,
                maxWidth:      "14ch",
              }}
            >
              Bangun Project{" "}
              <span style={{ color: GREEN }}>Seperti di Industri.</span>
            </motion.h2>

            {/* Hairline */}
            <motion.div variants={fadeIn} style={{ width: 48, height: 1, background: EI }} aria-hidden="true" />

            {/* Subtitle */}
            <motion.p variants={enter} className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}>
              Sepanjang program, peserta tidak hanya menyelesaikan latihan.
              Mereka menyusun project engineering lengkap yang mencerminkan
              workflow dan standar yang digunakan di industri nyata.
            </motion.p>

            {/* Output list */}
            <motion.ol
              variants={staggerContainer}
              className="flex flex-col"
              style={{ marginTop: "0.5rem" }}
              aria-label="Daftar project output"
            >
              {projectOutputs.map((output, index) => {
                const isLast = index === projectOutputs.length - 1;
                return (
                  <motion.li
                    key={index}
                    variants={
                      reduce ? fadeIn : {
                        hidden:  { opacity: 0, y: 12 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: index * 0.08, duration: 0.44, ease: "easeOut" },
                        },
                      }
                    }
                    className="relative flex gap-0"
                  >
                    {/* Pipeline */}
                    <div
                      className="relative flex flex-col items-center"
                      style={{ width: 20, flexShrink: 0, paddingTop: 3 }}
                      aria-hidden="true"
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: "50%",
                        border: `1.5px solid ${EI_T}`,
                        background: BG, flexShrink: 0, position: "relative", zIndex: 1,
                      }} />
                      {!isLast && (
                        <div style={{
                          width: 1, flex: 1, minHeight: 40,
                          background: EI, marginTop: 4,
                        }} />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="flex flex-col"
                      style={{ paddingLeft: 20, paddingBottom: isLast ? 0 : 36, flex: 1 }}
                    >
                      <span className="font-mono mb-1.5" style={{ fontSize: 7.5, letterSpacing: "0.16em", color: EI_T }} aria-hidden="true">
                        OUT-{String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading font-bold"
                        style={{
                          fontSize:      "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                          lineHeight:    1.2,
                          letterSpacing: "-0.014em",
                          color:         INK,
                          marginBottom:  6,
                        }}>
                        {output.title}
                      </h3>
                      <p className="font-body"
                        style={{ fontSize: "clamp(0.8125rem, 1vw, 0.875rem)", lineHeight: 1.7, color: "#52606D", maxWidth: "38ch" }}>
                        {output.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </motion.div>

          {/* Vertical separator — desktop only */}
          <motion.div
            className="hidden lg:block lg:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center h-full pt-10 pb-10" style={{ gap: 0 }}>
              <div style={{ width: 1, flex: 1, background: EI }} />
              <span className="font-mono py-4"
                style={{
                  fontSize: 8, letterSpacing: "0.2em", color: EI_T,
                  writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)",
                }}>
                SECTION O–O
              </span>
              <div style={{ width: 1, flex: 1, background: EI }} />
            </div>
          </motion.div>

          {/* ════ RIGHT — Career Outcome, 6 cols ════ */}
          <motion.div
            className="lg:col-span-6 flex flex-col"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Blueprint label */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <div className="flex flex-col gap-0.5 pr-4">
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>CAREER OUTCOME</span>
                <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>PRG-CAR-001</span>
                <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-D2</span>
              </div>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 14, background: EI }} />
            </motion.div>

            {/* Overline */}
            <motion.p variants={fadeIn} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", color: EI_T, textTransform: "uppercase" }}
              aria-hidden="true">
              Career Outcome
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(1.875rem, 3vw, 3rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.03em",
                color:         INK,
                maxWidth:      "16ch",
              }}
            >
              Siap Memasuki{" "}
              <span style={{ color: GREEN }}>Dunia Engineering.</span>
            </motion.h2>

            {/* Hairline */}
            <motion.div variants={fadeIn} style={{ width: 48, height: 1, background: EI }} aria-hidden="true" />

            {/* Subtitle */}
            <motion.p variants={enter} className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.8,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}>
              Setelah menyelesaikan program, peserta memiliki portfolio,
              pemahaman workflow, dan kemampuan praktis yang dibutuhkan
              perusahaan engineering di industri EPC, Oil & Gas, dan konstruksi.
            </motion.p>

            {/* Career destinations */}
            <motion.ul
              variants={staggerContainer}
              className="flex flex-col"
              style={{
                marginTop:  "0.25rem",
                borderTop:  "1px solid rgba(0,0,0,0.07)",
              }}
              aria-label="Pilihan karier setelah program"
            >
              {careerDestinations.map((dest, index) => {
                const isLast = index === careerDestinations.length - 1;
                return (
                  <motion.li
                    key={index}
                    variants={
                      reduce ? fadeIn : {
                        hidden:  { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1, y: 0,
                          transition: { delay: index * 0.06, duration: 0.4, ease: "easeOut" },
                        },
                      }
                    }
                    className="flex items-center gap-4 py-4"
                    style={{ borderBottom: isLast ? undefined : "1px solid rgba(0,0,0,0.07)" }}
                  >
                    {/* Green indicator */}
                    <span
                      style={{
                        width:        5,
                        height:        5,
                        borderRadius: "50%",
                        background:   GREEN,
                        flexShrink:   0,
                        opacity:      0.7,
                      }}
                      aria-hidden="true"
                    />

                    {/* Role */}
                    <span
                      className="font-heading font-semibold"
                      style={{
                        fontSize:      "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                        letterSpacing: "-0.012em",
                        color:         INK,
                        lineHeight:    1.2,
                        flex:          1,
                      }}
                    >
                      {dest.role}
                    </span>

                    {/* Subtle index */}
                    <span
                      className="font-mono"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

        </div>

        {/* ── Closing statement ───────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center pt-24 lg:pt-32 pb-24 lg:pb-32"
          style={{ gap: "2rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Top hairline — dimension line */}
          <div className="hidden lg:flex items-center w-full max-w-lg" aria-hidden="true">
            <div style={{ width: 1, height: 10, background: EI }} />
            <div style={{ flex: 1, height: 1, background: EI }} />
            <span className="font-mono px-4" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
              READY FOR INDUSTRY
            </span>
            <div style={{ flex: 1, height: 1, background: EI }} />
            <div style={{ width: 1, height: 10, background: EI }} />
          </div>

          {/* Statement */}
          <p
            className="font-heading font-bold"
            style={{
              fontSize:      "clamp(1.5rem, 2.8vw, 2.5rem)",
              lineHeight:    1.18,
              letterSpacing: "-0.025em",
              color:         INK,
              maxWidth:      "24ch",
            }}
          >
            Bukan sekadar menyelesaikan pelatihan.{" "}
            <span style={{ color: GREEN }}>
              Tetapi membangun fondasi untuk karier engineering.
            </span>
          </p>
        </motion.div>

        {/* ── Bottom engineering strip ─────────────────────────── */}
        <motion.div
          className="hidden lg:flex items-center"
          style={{ gap: 0, paddingBottom: "2rem" }}
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
            OUTPUT · CAREER · EL+3200 · REV-D2
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>
      </div>
    </section>
  );
}