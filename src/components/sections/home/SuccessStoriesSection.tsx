"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { featuredAlumni } from "@/data/successStories";
import { staggerContainer, fadeIn } from "@/lib/animations";

// Engineering reference codes — one per alumni, mirrors PRG-001 pattern
const ALUM_CODES = ["ALM-014", "ALM-027", "ALM-103"] as const;

const EI_TEXT = "rgba(60,100,180,0.40)";

const programLabels: Record<string, string> = {
  "autocad": "AutoCAD",
  "autocad-plant-3d": "Plant 3D",
  "revit-mep": "Revit MEP",
  "e3d": "E3D",
};

export function SuccessStoriesSection() {
  const reduce = useReducedMotion();
  const stories = featuredAlumni.slice(0, 3);

  return (
    <section
      id="success-stories"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#F7F9FC" }}
      aria-labelledby="alumni-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        {/* Header — centered, consistent with Programs section */}
        <SectionHeader
          overline="Alumni Kami"
          title="Lulusan DEDC Berkarier di Industri"
          accentWord="Berkarier"
          subtitle="Lebih dari 1.000 alumni kini bekerja di perusahaan EPC, Oil & Gas, dan MEP terkemuka."
          align="center"
          as="h2"
        />

        {/*
          Layout: 3-column row with hairline dividers between cards —
          same visual grammar as WhyChooseSection. No card backgrounds,
          no shadows. The photo is the only "object"; everything else
          is typography on open background.
        */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stories.map((alumni, i) => {
            const code = ALUM_CODES[i] ?? "ALM-000";
            const isLastInRow = i === stories.length - 1;

            return (
              <motion.article
                key={alumni.id}
                variants={
                  reduce
                    ? fadeIn
                    : {
                        hidden: { opacity: 0, y: 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                        },
                      }
                }
                className="relative flex flex-col gap-4 px-6 md:px-8 py-2"
                style={{
                  borderRight: !isLastInRow ? "1px solid rgba(0,0,0,0.07)" : undefined,
                }}
              >
                {/* Reference code */}
                <span
                  className="font-mono block"
                  style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_TEXT }}
                  aria-hidden="true"
                >
                  {code}
                </span>

                {/* Photo + name row */}
                <div className="flex items-center gap-3">
                  <div
                    className="relative h-12 w-12 rounded-full overflow-hidden shrink-0"
                    style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <Image
                      src={alumni.photoSrc}
                      alt={`Foto ${alumni.name}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className="font-heading font-semibold leading-snug truncate"
                      style={{ fontSize: 15, color: "#0D1117" }}
                    >
                      {alumni.name}
                    </span>
                    <span
                      className="font-body font-medium leading-tight"
                      style={{ fontSize: 12, color: "#1A8C2E" }}
                    >
                      {alumni.position}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: 13.5, color: "#64748B" }}
                >
                  &ldquo;{alumni.quote}&rdquo;
                </p>

                {/* Footer — company + program */}
                <div
                  className="flex items-center justify-between mt-auto pt-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <span
                    className="flex items-center gap-1.5 font-body"
                    style={{ fontSize: 11.5, color: "#94A3B8" }}
                  >
                    <Building2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#1A8C2E" }} aria-hidden="true" />
                    {alumni.company}
                  </span>
                  <span
                    className="font-mono font-medium"
                    style={{ fontSize: 10, letterSpacing: "0.08em", color: "#94A3B8" }}
                  >
                    {programLabels[alumni.programSlug] ?? alumni.programSlug}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Footer link — matches Programs section pattern */}
        <motion.div
          className="flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
            style={{
              fontSize: 14,
              color: "#374151",
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textDecorationColor: "rgba(0,0,0,0.18)",
            }}
          >
            Lihat semua alumni
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}