import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";

const GREEN   = "#1A8C2E";
const EI_T    = "rgba(60,100,180,0.55)";
const MUTED   = "rgba(148,163,184,0.65)";  // #94A3B8 at 65%

const NAV_LINKS = [
  { href: "/",                label: "Beranda"         },
  { href: "/about",           label: "Tentang"         },
  { href: "/programs",        label: "Program"         },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact",         label: "Kontak"          },
] as const;

const CONTACT_DETAILS = [
  "Depok, Indonesia",
  "dedc.drafting@gmail.com",
  "+62 812 9003 4421",
  "EST.2011",
] as const;

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background:    "#0D1117",
        paddingTop:    "clamp(5rem,10vw,10rem)",
        paddingBottom: "clamp(3rem,5vw,5rem)",
      }}
      role="contentinfo"
    >
      {/*
        GHOST TYPOGRAPHY — ENGINEER
        Enormous, opacity 0.03, partially cropped bottom-right.
        The user sees a faint presence of something massive
        without consciously reading it. Same technique used in
        Apple product pages and Stripe's footer.
      */}
      <div
        className="pointer-events-none select-none absolute bottom-0 right-0"
        style={{
          fontFamily:    "Space Grotesk, system-ui, sans-serif",
          fontWeight:    900,
          fontSize:      "clamp(10rem,22vw,26rem)",
          lineHeight:    0.9,
          color:         "#FFFFFF",
          opacity:       0.03,
          letterSpacing: "-0.04em",
          userSelect:    "none",
          transform:     "translateY(20%)",
        }}
        aria-hidden="true"
      >
        ENGINEER
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">

        {/* ── Top label ──────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-12">
          <span
            className="h-[5px] w-[5px] rounded-full shrink-0"
            style={{ background: GREEN }}
            aria-hidden="true"
          />
          <span
            className="font-mono font-medium"
            style={{ fontSize: 8, letterSpacing: "0.24em", color: MUTED }}
          >
            DEDC ENGINEERING
          </span>
        </div>

        {/* ── Main headline ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mb-16">

          {/* Left — headline + body */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <h2
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(2.5rem,5vw,5rem)",
                lineHeight:    1.04,
                letterSpacing: "-0.036em",
                color:         "#FFFFFF",
                maxWidth:      "10ch",
              }}
            >
              Build Your Future With{" "}
              <span style={{ color: GREEN }}>DEDC.</span>
            </h2>

            <p
              className="font-body"
              style={{
                fontSize:  "clamp(0.9375rem,1.2vw,1.0625rem)",
                lineHeight: 1.75,
                color:     "#4B5563",
                maxWidth:  "42ch",
              }}
            >
              Kami membantu calon engineer membangun keterampilan,
              pengalaman, dan karier profesional di dunia engineering.
            </p>

            {/* WhatsApp CTA */}
            <WhatsAppLink
              context="final-cta"
              ariaLabel="Konsultasi via WhatsApp (tab baru)"
              className="inline-flex items-center gap-2 font-body font-semibold w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] rounded-full transition-all duration-200"
              style={{
                height:        48,
                paddingLeft:   22,
                paddingRight:  22,
                background:    GREEN,
                color:         "#FFFFFF",
                borderRadius:  999,
                fontSize:      14,
                letterSpacing: "-0.01em",
              }}
              
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Mulai Konsultasi
            </WhatsAppLink>
          </div>

          {/* Right — nav links + contact */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10">

            {/* Navigation links — horizontal on desktop, stacked mobile */}
            <nav aria-label="Footer navigasi">
              <ul className="flex flex-col gap-2" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A8C2E] rounded-sm"
                      style={{
                        fontSize:   14,
                        color:      "#94A3B8",
                        lineHeight: 1.8,
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact details */}
            <address
              className="not-italic flex flex-col gap-1.5"
              aria-label="Informasi kontak DEDC"
            >
              {CONTACT_DETAILS.map((detail) => (
                <span
                  key={detail}
                  className="font-mono"
                  style={{ fontSize: 11, letterSpacing: "0.06em", color: MUTED }}
                >
                  {detail}
                </span>
              ))}
            </address>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Copyright */}
          <span
            className="font-mono"
            style={{ fontSize: 10, letterSpacing: "0.1em", color: MUTED }}
          >
            © {YEAR} DEDC
          </span>

          {/* Engineering reference */}
          <div className="flex items-center gap-3">
            <span
              className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T, opacity: 0.7 }}
              aria-hidden="true"
            >
              ENGINEERING BLUEPRINT
            </span>
            <div
              style={{ width: 20, height: 1, background: "rgba(60,100,180,0.30)" }}
              aria-hidden="true"
            />
            <span
              className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T, opacity: 0.7 }}
              aria-hidden="true"
            >
              REV-E1
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}