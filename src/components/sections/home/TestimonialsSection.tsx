"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { featuredTestimonials } from "@/data/testimonials";
import { formatDate } from "@/lib/utils";
import { staggerContainer, fadeIn } from "@/lib/animations";
import type { TestimonialSource } from "@/types";

const EI_TEXT = "rgba(60,100,180,0.40)";

// Testimonial reference codes
const TST_CODES = ["TST-021", "TST-034", "TST-058"] as const;

const sourceLabels: Record<TestimonialSource, string> = {
  whatsapp: "WhatsApp",
  google: "Google Review",
  instagram: "Instagram",
  video: "Video",
};

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0] ?? "")
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const items = featuredTestimonials.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        <SectionHeader
          overline="Testimoni"
          title="Apa Kata Peserta DEDC"
          accentWord="Peserta"
          subtitle="Pengalaman nyata alumni dan peserta training DEDC."
          align="center"
          as="h2"
        />

        {/*
          Same hairline-row grammar as WhyChoose / SuccessStories / Trainers.
          Star rating is the one element unique to this section —
          it's a trust signal not present elsewhere on the page.
        */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((t, i) => {
            const code = TST_CODES[i] ?? "TST-000";
            const isLastInRow = i === items.length - 1;

            return (
              <motion.article
                key={t.id}
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
                {/* Reference code + rating */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono block"
                    style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_TEXT }}
                    aria-hidden="true"
                  >
                    {code}
                  </span>
                  {t.rating && (
                    <div
                      className="flex items-center gap-0.5"
                      aria-label={`Rating ${t.rating} dari 5`}
                    >
                      {Array.from({ length: t.rating }, (_, si) => (
                        <Star
                          key={si}
                          className="h-3 w-3 fill-current"
                          style={{ color: "#1A8C2E" }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Quote */}
                <p
                  className="font-body leading-relaxed flex-1"
                  style={{ fontSize: 14, color: "#374151" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Reviewer */}
                <div
                  className="flex items-center gap-3 mt-auto pt-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="relative h-9 w-9 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid rgba(0,0,0,0.08)", background: "rgba(26,140,46,0.08)" }}
                  >
                    {t.reviewerPhoto ? (
                      <Image
                        src={t.reviewerPhoto}
                        alt={`Foto ${t.reviewerName}`}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    ) : (
                      <span
                        className="font-body font-semibold"
                        style={{ fontSize: 11, color: "#1A8C2E" }}
                        aria-hidden="true"
                      >
                        {initials(t.reviewerName)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className="font-heading font-semibold leading-tight truncate"
                      style={{ fontSize: 13, color: "#0D1117" }}
                    >
                      {t.reviewerName}
                    </span>
                    <span
                      className="font-body leading-tight"
                      style={{ fontSize: 11, color: "#94A3B8" }}
                    >
                      {sourceLabels[t.source]}
                      {t.date && ` · ${formatDate(t.date)}`}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}