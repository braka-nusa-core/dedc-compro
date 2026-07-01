"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

export function ContactIntroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG, paddingTop: "clamp(6rem,10vw,9rem)", paddingBottom: "clamp(6rem,10vw,9rem)" }}
      aria-labelledby="contact-intro-heading"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Ghost typography — CONTACT, huge, opacity 0.02 */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "-8%",
            right: "-4%",
            fontFamily: "Space Grotesk, system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(12rem,26vw,28rem)",
            lineHeight: 1,
            color: INK,
            opacity: 0.02,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          CONTACT
        </div>

        {/* Grid — top-right corner only */}
        <div className="absolute top-0 right-0" style={{ width: "30%", height: "48%" }}>
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
            background: `linear-gradient(to bottom,transparent 0%,${BG} 68%)`,
          }} />
        </div>

        {/* Blueprint codes — top right */}
        <div
          className="absolute hidden lg:flex flex-col items-end gap-1"
          style={{ top: 48, right: 72 }}
        >
          {["CNT-01", "REV-A1", "EL+2500"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T, opacity: 0.7 }}>
              {c}
            </span>
          ))}
          <div style={{ marginTop: 4, width: "100%", height: 1, background: EI }} />
          <div style={{ width: 1, height: 8, background: EI, alignSelf: "flex-end" }} />
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Content — left 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Blueprint label */}
            <motion.div variants={fadeIn} className="hidden lg:flex items-center gap-0" aria-hidden="true">
              <span className="font-mono shrink-0 pr-4"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
                CONTACT · DEDC ENGINEERING
              </span>
              <div style={{ width: 72, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI }} />
            </motion.div>

            {/*
              Headline — two lines, enormous, confident.
              Not a question. Not an invitation.
              A statement: this is where things begin.
            */}
            <motion.h1
              id="contact-intro-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(3rem,5.5vw,5.5rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.036em",
                color: INK,
                maxWidth: "10ch",
              }}
            >
              Mulai{" "}
              <span style={{ color: GREEN }}>Perjalanan</span>{" "}
              Anda.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(1rem,1.4vw,1.0625rem)",
                lineHeight: 1.78,
                color: "#52606D",
                maxWidth: "52ch",
              }}
            >
              Kami siap membantu Anda memilih program yang tepat dan
              menjelaskan jalur karier engineering yang dapat Anda
              bangun bersama DEDC.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="whatsapp" size="lg" asChild>
                <WhatsAppLink context="contact" ariaLabel="Konsultasi via WhatsApp (tab baru)">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Konsultasi via WhatsApp
                </WhatsAppLink>
              </Button>

              <Link
                href="/programs"
                className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{
                  fontSize: 15,
                  color: "#374151",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                  textDecorationColor: "rgba(0,0,0,0.18)",
                }}
              >
                Explore Programs{" "}
                <span
                  className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}