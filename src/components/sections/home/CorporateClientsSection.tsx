"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";
import { fadeIn } from "@/lib/animations";

const EI_TEXT = "rgba(60,100,180,0.40)";

export function CorporateClientsSection() {

  return (
    <section
      id="clients"
      className="relative w-full py-14 lg:py-16 overflow-hidden"
      style={{ background: "#F7F9FC" }}
      aria-labelledby="clients-heading"
    >
      {/* Grid — top-right corner only */}
      <div className="pointer-events-none select-none absolute top-0 right-0 w-1/3 h-full" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(60,100,180,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(60,100,180,0.035) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 0%, #F7F9FC 65%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 20%, #F7F9FC 90%)" }} />
      </div>
      {/* CLT coordinate — bottom-right corner */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex items-center gap-2 z-10"
        style={{ bottom: 18, right: 80 }}
        aria-hidden="true"
      >
        <div style={{ width: 1, height: 8, background: "rgba(60,100,180,0.20)" }} />
        <div style={{ width: 20, height: 1, background: "rgba(60,100,180,0.20)" }} />
        <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(60,100,180,0.35)" }}>
          CLT-050
        </span>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-8">

        {/*
          Minimal eyebrow — not a full SectionHeader.
          This section is a quiet trust strip, not a feature section.
          Matches the "REF-2011 / ALM-1000" reference-code aesthetic.
        */}
        <div className="flex items-center justify-center gap-3">
          <div className="hidden sm:block" style={{ width: 40, height: 1, background: "rgba(0,0,0,0.1)" }} aria-hidden="true" />
          <span
            id="clients-heading"
            className="font-mono font-medium text-center"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: EI_TEXT }}
          >
            DIPERCAYA OLEH 50+ PERUSAHAAN ENGINEERING
          </span>
          <div className="hidden sm:block" style={{ width: 40, height: 1, background: "rgba(0,0,0,0.1)" }} aria-hidden="true" />
        </div>

        {/* Logo strip — grayscale, no tooltips, no borders */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-6 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="relative h-8 w-full grayscale opacity-50 hover:opacity-80 transition-opacity duration-300"
              title={client.name}
            >
              <Image
                src={client.logoSrc}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}