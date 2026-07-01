"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#FFFFFF";

const METHODS = [
  {
    code:    "MET-01",
    icon:    MessageCircle,
    name:    "WhatsApp",
    role:    "Komunikasi utama",
    detail:  "+62 812 3456 7890",
    note:    "Respons cepat. Konsultasi langsung.",
    label:   "Chat WhatsApp",
    href:    "https://wa.me/6281234567890",
    green:   true,
  },
  {
    code:    "MET-02",
    icon:    Mail,
    name:    "Email",
    role:    "Pertanyaan formal",
    detail:  "hello@dedc.id",
    note:    "Untuk keperluan formal & korporat.",
    label:   "Kirim Email",
    href:    "mailto:hello@dedc.id",
    green:   false,
  },
  {
    code:    "MET-03",
    icon:    Instagram,
    name:    "Instagram",
    role:    "Aktivitas harian",
    detail:  "@dedc.engineering",
    note:    "Kisah alumni & dokumentasi kelas.",
    label:   "Kunjungi Instagram",
    href:    "https://instagram.com/dedc.engineering",
    green:   false,
  },
] as const;

export function ContactMethodsSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: BG }}
      aria-labelledby="methods-heading"
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-10 flex flex-col gap-14">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={enter} className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                  style={{ background: GREEN }} />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px]"
                  style={{ background: GREEN }} />
              </span>
              <span className="font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}>
                Contact Channels
              </span>
            </div>
            <h2
              id="methods-heading"
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2rem,3.2vw,2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Pilih Cara yang Paling{" "}
              <span style={{ color: GREEN }}>Nyaman</span>{" "}
              untuk Anda.
            </h2>
          </motion.div>
          <motion.div variants={enter} className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="font-body leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
              Kami siap membantu melalui berbagai jalur komunikasi.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {METHODS.map((m, i) => {
            const Icon   = m.icon;
            const isLast = i === METHODS.length - 1;
            return (
              <motion.div
                key={m.code}
                variants={reduce ? fadeIn : {
                  hidden:  { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } },
                }}
                className="flex flex-col gap-5 py-10"
                style={{
                  paddingRight: !isLast ? "2.5rem" : undefined,
                  paddingLeft:  i > 0   ? "2.5rem" : undefined,
                  borderRight:  !isLast ? "1px solid rgba(0,0,0,0.07)" : undefined,
                }}
              >
                <span className="font-mono"
                  style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_T }}
                  aria-hidden="true">
                  {m.code}
                </span>

                <div
                  className="inline-flex items-center justify-center h-10 w-10 rounded-[10px]"
                  style={{ background: "rgba(26,140,46,0.08)" }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: GREEN }} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold"
                    style={{ fontSize: "clamp(1rem,1.4vw,1.125rem)", color: INK, letterSpacing: "-0.02em" }}>
                    {m.name}
                  </h3>
                  <p className="font-mono"
                    style={{ fontSize: 10.5, letterSpacing: "0.05em", color: "#374151" }}>
                    {m.detail}
                  </p>
                  <p className="font-body"
                    style={{ fontSize: 12.5, color: "#94A3B8" }}>
                    {m.note}
                  </p>
                </div>

                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm w-fit"
                  style={{
                    fontSize: 14,
                    color: m.green ? GREEN : "#374151",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    textDecorationColor: m.green ? "rgba(26,140,46,0.3)" : "rgba(0,0,0,0.18)",
                  }}
                >
                  {m.label}
                  <span
                    className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}