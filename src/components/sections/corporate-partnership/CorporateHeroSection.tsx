"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// Two services — the right-column schematic communicates both
const SERVICES = [
  { code: "SVC-01", label: "Corporate Training",   sub: "Upgrade internal capabilities"  },
  { code: "SVC-02", label: "Talent Supply",         sub: "Industry-ready engineers"       },
] as const;

const PIPE_X = 44;

export function CorporateHeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full pt-16 overflow-hidden"
      style={{ background: BG, minHeight: "90svh" }}
      aria-labelledby="corporate-hero-heading"
    >
      {/* Background */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
        {/* Ghost typography */}
        <div className="absolute hidden lg:block" style={{
          top: "-4%", right: "-3%",
          fontFamily: "Space Grotesk, system-ui, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(8rem,18vw,22rem)",
          lineHeight: 0.9,
          color: INK,
          opacity: 0.02,
          letterSpacing: "-0.04em",
          userSelect: "none",
          textAlign: "right",
        }}>
          PARTNER
        </div>
        {/* Grid — top right */}
        <div className="absolute top-0 right-0" style={{ width: "34%", height: "55%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to left,transparent 0%,${BG} 65%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,transparent 0%,${BG} 72%)` }} />
        </div>
        {/* Coordinates */}
        <div className="absolute hidden lg:flex items-center gap-5" style={{ top: 72, right: 72 }}>
          {["CRP-2025", "REV-C1", "X-300"].map((c) => (
            <span key={c} className="font-mono" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>{c}</span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to top,${BG},transparent)` }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(90svh-4rem)] items-center">

          {/* LEFT — 7 cols */}
          <motion.div
            className="lg:col-span-7 flex flex-col py-24 lg:py-28"
            style={{ gap: "2.25rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <span className="font-mono shrink-0 pr-4" style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
                CORPORATE PARTNERSHIP · CRP-2025
              </span>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI }} />
            </motion.div>

            <motion.h1
              id="corporate-hero-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.75rem,5vw,5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: INK,
                maxWidth: "14ch",
              }}
            >
              Engineering Talent.{" "}
              <span style={{ color: GREEN }}>Built Together.</span>
            </motion.h1>

            <motion.p
              variants={enter}
              className="font-body"
              style={{ fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)", lineHeight: 1.78, color: "#52606D", maxWidth: "50ch" }}
            >
              DEDC membantu perusahaan melalui dua layanan utama:
              Corporate Training untuk meningkatkan kompetensi tim internal,
              dan Engineering Talent Supply untuk kebutuhan tenaga drafter
              serta engineer siap industri.
            </motion.p>

            <motion.div variants={enter} className="flex flex-row items-center gap-6 flex-wrap">
              <Button variant="whatsapp" size="lg" asChild>
                <WhatsAppLink context="contact" ariaLabel="Diskusikan kebutuhan corporate via WhatsApp (tab baru)">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Diskusikan Kebutuhan
                </WhatsAppLink>
              </Button>
              <Link
                href="#services"
                className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{ fontSize: 15, color: "#374151", textDecoration: "underline", textUnderlineOffset: 4, textDecorationColor: "rgba(0,0,0,0.18)" }}
              >
                Lihat Layanan{" "}
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — 5 cols, dual-service pipeline */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-center pl-8 py-24">
            {/* Top line */}
            <div className="flex items-center mb-8" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T, whiteSpace: "nowrap" }}>
                PARTNERSHIP MODEL · REV-C1
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Pipeline — Company → DEDC → Output */}
            <div className="relative flex flex-col" aria-label="Model kemitraan DEDC">
              <motion.div
                className="absolute top-0 bottom-0"
                style={{ left: PIPE_X, width: 2, background: EI, transformOrigin: "top center" }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                aria-hidden="true"
              />

              {/* FLOW IN */}
              {[
                { coord: "FLOW IN", label: "Your Company",      sub: "",                      type: "io",      delay: 0.4  },
                { coord: "SVC-01",  label: "Corporate Training", sub: "Upgrade capabilities",  type: "service", delay: 0.55 },
                { coord: "SVC-02",  label: "Talent Supply",      sub: "Ready engineers",       type: "service", delay: 0.68 },
                { coord: "FLOW OUT",label: "Engineering Growth", sub: "",                      type: "io",      delay: 0.82 },
              ].map((stage, i) => {
                const isIO   = stage.type === "io";
                const isOut  = stage.coord === "FLOW OUT";
                const nSize  = isIO ? 18 : 14;

                return (
                  <motion.div
                    key={stage.coord}
                    className="relative flex items-center"
                    style={{ paddingBottom: i < 3 ? (isIO ? "1.75rem" : "1.5rem") : 0 }}
                    initial={{ opacity: 0, x: 8 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                    transition={{ delay: stage.delay, duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="shrink-0 flex items-center justify-end" style={{ width: PIPE_X, paddingRight: 12 }} aria-hidden="true">
                      <span className="font-mono" style={{ fontSize: 7.5, letterSpacing: "0.1em", color: EI_T }}>{stage.coord}</span>
                    </div>
                    <div style={{
                      width: nSize, height: nSize, borderRadius: "50%",
                      border: `${isIO ? 2 : 1.5}px solid ${isOut ? GREEN : isIO ? "rgba(26,140,46,0.7)" : "rgba(26,140,46,0.5)"}`,
                      background: isOut ? GREEN : BG,
                      flexShrink: 0, marginLeft: -(nSize / 2) - 1, zIndex: 2,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }} aria-hidden="true">
                      <div style={{ width: isIO ? 6 : 4, height: isIO ? 6 : 4, borderRadius: "50%", background: isOut ? BG : isIO ? GREEN : "rgba(26,140,46,0.5)" }} />
                    </div>
                    <div style={{ paddingLeft: 16 }}>
                      <span className={`font-mono ${isIO ? "font-bold" : "font-semibold"}`} style={{ fontSize: isOut ? 12 : isIO ? 10 : 10.5, letterSpacing: "0.07em", color: isOut ? GREEN : isIO ? EI_T : "#374151", display: "block" }}>
                        {stage.label}
                      </span>
                      {stage.sub && (
                        <span className="font-mono" style={{ fontSize: 8.5, letterSpacing: "0.05em", color: "#94A3B8", display: "block", marginTop: 2 }}>{stage.sub}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center mt-8" style={{ gap: 0 }} aria-hidden="true">
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ width: 44, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0" style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>EST.2011</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}