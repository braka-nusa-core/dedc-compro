"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import Image from "next/image";

const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const EI_T  = "rgba(60,100,180,0.40)";

// ─── Primary nav — high attention ─────────────────────────────────
const PRIMARY_LINKS = [
  { href: "/programs",                label: "Program"               },
  { href: "/portfolio",               label: "Portfolio"             },
  { href: "/success-stories",         label: "Success Stories"       },
  { href: "/corporate-partnership",   label: "Corporate Partnership"             },
] as const;

// ─── Secondary nav — lower attention ──────────────────────────────
const SECONDARY_LINKS = [
  { href: "/about",   label: "Tentang" },
  { href: "/contact", label: "Kontak"  },
] as const;

const ALL_LINKS = [
  { href: "/",  label: "Beranda" },
  ...PRIMARY_LINKS,
  ...SECONDARY_LINKS,
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const reduce   = useReducedMotion();
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Desktop floating pill ────────────────────────────── */}
      <header
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{ top: 20 }}
        role="banner"
      >
        <motion.div
          className="relative w-full max-w-[1280px] mx-4 md:mx-6 lg:mx-8 flex items-center justify-between"
          style={{
            height:              68,
            paddingLeft:         "1.25rem",
            paddingRight:        "1.25rem",
            background:          "rgba(255,255,255,0.78)",
            backdropFilter:      "blur(28px)",
            WebkitBackdropFilter:"blur(28px)",
            border:              "1px solid rgba(0,0,0,0.05)",
            borderRadius:        999,
            boxShadow:           scrolled
              ? "0 4px 32px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.04)"
              : "0 2px 16px rgba(0,0,0,0.04)",
            transition:          "box-shadow 250ms ease",
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y:   0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Blueprint ref */}
          <span
            className="absolute hidden lg:block font-mono select-none pointer-events-none"
            style={{ top: 7, right: "1.75rem", fontSize: 7, letterSpacing: "0.18em", color: EI_T, opacity: 0.5 }}
            aria-hidden="true"
          >
            REV-E1
          </span>

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2"
            aria-label="DEDC — kembali ke beranda"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Logo DEDC"
              width={44}
              height={44}
              priority
              className="h-[44px] w-[44px] object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold tracking-tight"
                style={{ fontSize: "1.3125rem", color: INK, lineHeight: 1 }}>
                DEDC
              </span>
              <span className="font-body hidden sm:block"
                style={{ fontSize: "0.65rem", color: "#9CA3AF", lineHeight: 1.3, letterSpacing: "0.01em" }}>
                Engineering Training Center
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center"
            aria-label="Navigasi utama"
          >
            {/*
              Two visual tiers without two nav elements:
              PRIMARY: full-opacity, slightly larger hit area
              SECONDARY: reduced opacity and size — recedes naturally
              A single hairline separator between the groups gives
              the eye a pause without adding DOM complexity.
            */}
            <div className="flex items-center gap-0.5">
              {PRIMARY_LINKS.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <NavLink key={href} href={href} active={active} tier="primary">
                    {label}
                  </NavLink>
                );
              })}
            </div>

            {/* Separator */}
            <div
              className="mx-3 shrink-0"
              style={{ width: 1, height: 18, background: "rgba(0,0,0,0.1)" }}
              aria-hidden="true"
            />

            <div className="flex items-center gap-0.5">
              {SECONDARY_LINKS.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <NavLink key={href} href={href} active={active} tier="secondary">
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          {/* ── Right: CTA + mobile toggle ── */}
          <div className="flex items-center gap-3">
            {/* Consultation CTA — intentionally distinct */}
            <WhatsAppLink
              context="navbar"
              ariaLabel="Konsultasi via WhatsApp (tab baru)"
              className="hidden lg:inline-flex items-center gap-2 font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-full"
              style={{
                height:        40,
                paddingLeft:   18,
                paddingRight:  18,
                background:    GREEN,
                color:         "#FFFFFF",
                borderRadius:  999,
                fontSize:      13.5,
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform  = "translateY(-1px)";
                el.style.boxShadow  = "0 4px 14px rgba(26,140,46,0.28)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform  = "translateY(0)";
                el.style.boxShadow  = "none";
              }}
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Konsultasi
            </WhatsAppLink>

            {/* Mobile toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E]"
              style={{ background: "rgba(0,0,0,0.05)" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen
                ? <X     className="h-4 w-4" style={{ color: INK }} />
                : <Menu  className="h-4 w-4" style={{ color: INK }} />
              }
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              background:          "rgba(247,249,252,0.97)",
              backdropFilter:      "blur(20px)",
              WebkitBackdropFilter:"blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigasi mobile"
          >
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E]"
                style={{ background: "rgba(0,0,0,0.05)" }}
                aria-label="Tutup menu"
              >
                <X className="h-5 w-5" style={{ color: INK }} />
              </button>
            </div>

            <nav className="flex flex-col gap-0.5 px-6 pt-6" aria-label="Navigasi mobile">
              {ALL_LINKS.map(({ href, label }, i) => {
                const active = isActive(pathname, href);
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.28, ease: "easeOut" }}
                  >
                    <Link
                      href={href}
                      className="block font-heading font-bold py-3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                      style={{
                        fontSize:      "clamp(1.375rem,5vw,1.875rem)",
                        color:         active ? GREEN : INK,
                        letterSpacing: "-0.025em",
                        opacity:       active ? 1 : 0.85,
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="px-6 pt-8">
              <WhatsAppLink
                context="navbar"
                ariaLabel="Konsultasi via WhatsApp (tab baru)"
                className="inline-flex items-center gap-2 font-body font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-full"
                style={{
                  height:       50,
                  paddingLeft:  26,
                  paddingRight: 26,
                  background:   GREEN,
                  color:        "#FFFFFF",
                  borderRadius: 999,
                  fontSize:     15,
                }}
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Konsultasi via WhatsApp
              </WhatsAppLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── NavLink ──────────────────────────────────────────────────────
// Two tiers:
//   primary   — full color, standard opacity, normal weight
//   secondary — muted color, reduced opacity, lighter visual weight
//
// Active state on both: green text + subtle pill background.
// Hover on both: text darkens, no border appears (too noisy).

interface NavLinkProps {
  href:     string;
  active:   boolean;
  tier:     "primary" | "secondary";
  children: React.ReactNode;
}

function NavLink({ href, active, tier, children }: NavLinkProps) {
  const isPrimary = tier === "primary";

  return (
    <Link
      href={href}
      className="relative font-body font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-full"
      style={{
        fontSize:      isPrimary ? 14 : 13.5,
        padding:       "7px 14px",
        borderRadius:  999,
        letterSpacing: "-0.01em",
        color: active
          ? GREEN
          : isPrimary
            ? "#374151"
            : "#9CA3AF",
        background: active ? "rgba(26,140,46,0.07)" : "transparent",
        opacity:     isPrimary ? 1 : active ? 1 : 0.85,
        transition:  "color 0.15s ease, background 0.15s ease, opacity 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.color   = "#0D1117";
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.color   = isPrimary ? "#374151" : "#9CA3AF";
          (e.currentTarget as HTMLElement).style.opacity = isPrimary ? "1" : "0.85";
        }
      }}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}