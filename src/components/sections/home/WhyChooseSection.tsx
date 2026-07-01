"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap, Users, BookOpen, Infinity, Briefcase, Award,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { staggerContainer,  fadeIn } from "@/lib/animations";

// Each feature has an engineering spec code
const features = [
  {
    code: "SPEC-01",
    icon: GraduationCap,
    title: "Basic hingga Mahir",
    description: "Kurikulum terstruktur dari nol hingga level profesional. Tidak perlu pengalaman sebelumnya.",
  },
  {
    code: "SPEC-02",
    icon: Briefcase,
    title: "Trainer Praktisi Industri",
    description: "Semua trainer adalah profesional aktif dengan pengalaman nyata di EPC, Oil & Gas, dan MEP.",
  },
  {
    code: "SPEC-03",
    icon: Users,
    title: "Kelas Semi Privat",
    description: "Maksimal 4–6 peserta per sesi. Setiap peserta mendapat perhatian penuh dari trainer.",
  },
  {
    code: "SPEC-04",
    icon: Infinity,
    title: "Materi Tidak Hangus",
    description: "Akses materi training kapan saja. Tidak ada batas waktu untuk mereview pelajaran.",
  },
  {
    code: "SPEC-05",
    icon: BookOpen,
    title: "Info Lowongan Kerja",
    description: "Alumni mendapat update lowongan kerja di industri engineering secara berkala.",
  },
  {
    code: "SPEC-06",
    icon: Award,
    title: "Sertifikat Resmi",
    description: "Sertifikat DEDC yang diakui oleh ratusan perusahaan engineering di Indonesia.",
  },
] as const;

const EI_TEXT = "rgba(60,100,180,0.38)";

export function WhyChooseSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-dedc"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-16">

        {/* Header — left aligned, asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <SectionHeader
              overline="Mengapa DEDC"
              title="Lebih dari Sekadar Kursus Software"
              accentWord="Software"
              align="left"
              as="h2"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B" }}
            >
              DEDC mempersiapkan Anda untuk karier nyata di industri —
              bukan sekadar mengenal tools. Setiap aspek dirancang
              bersama praktisi untuk kebutuhan kerja sesungguhnya.
            </p>
          </div>
        </div>

        {/* Feature grid — no cards, no shadows, no heavy borders */}
        {/*
          Each feature is a clean row: spec code + icon + title + description.
          Separated by hairline dividers. Feels like a technical specification list.
          3-col on desktop, 2-col on tablet, 1-col on mobile.
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            // Border logic: top border for all, right border for col 1 & 2 on desktop
            const isLastInRow = (i + 1) % 3 === 0;

            return (
              <motion.div
                key={f.code}
                variants={
                  reduce
                    ? fadeIn
                    : {
                        hidden: { opacity: 0, y: 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
                        },
                      }
                }
                className="relative flex flex-col gap-4 p-8"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.07)",
                  borderRight: !isLastInRow ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  // No bottom border on last row — avoids double border with section edge
                }}
              >
                {/* Spec code — tiny, monospace, blueprint blue */}
                <span
                  className="font-mono block"
                  style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_TEXT }}
                  aria-hidden="true"
                >
                  {f.code}
                </span>

                {/* Icon — minimal, green tint container */}
                <div
                  className="inline-flex items-center justify-center h-10 w-10 rounded-[10px]"
                  style={{ background: "rgba(26,140,46,0.08)" }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: "#1A8C2E" }} />
                </div>

                {/* Title */}
                <h3
                  className="font-heading font-semibold leading-snug"
                  style={{ fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)", color: "#0D1117" }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: 13.5, color: "#64748B" }}
                >
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}