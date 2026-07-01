"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getFaqsByPage } from "@/data/faq";
import { staggerContainer, fadeIn } from "@/lib/animations";

const EI_TEXT = "rgba(60,100,180,0.40)";

const homeFaqs = getFaqsByPage("home");

export function FAQSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/*
          Asymmetric layout — same 6/5 split as WhyChoose/Gallery.
          Header anchors left; accordion sits right, slightly offset.
          This keeps FAQ from feeling like an isolated centered block
          and ties it visually to the rest of the page rhythm.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left — header, sticky on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                overline="FAQ"
                title="Pertanyaan yang Sering Ditanyakan"
                accentWord="Sering"
                align="left"
                as="h2"
              />
              <p
                className="font-body leading-relaxed mt-4"
                style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "38ch" }}
              >
                Belum menemukan jawaban? Hubungi kami langsung via WhatsApp
                untuk konsultasi gratis.
              </p>
            </div>
          </div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-7"
            variants={reduce ? fadeIn : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {homeFaqs.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  variants={
                    reduce
                      ? fadeIn
                      : {
                          hidden: { opacity: 0, y: 12 },
                          visible: { opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" } },
                        }
                  }
                >
                  <AccordionItem value={faq.id} style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                    <AccordionTrigger className="hover:!text-[#1A8C2E] focus-visible:!text-[#1A8C2E] [&[data-state=open]>svg]:!text-[#1A8C2E]">
                      <span className="flex items-baseline gap-3">
                        {/* Reference code — per FAQ item */}
                        <span
                          className="font-mono shrink-0"
                          style={{ fontSize: 9, letterSpacing: "0.12em", color: EI_TEXT }}
                          aria-hidden="true"
                        >
                          {`Q${String(i + 1).padStart(2, "0")}`}
                        </span>
                        <span style={{ color: "#0D1117" }}>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-9">
                        <span style={{ color: "#64748B" }}>{faq.answer}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
}