"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useNavigationProgress } from "@/hooks/useNavigationProgress";

const GREEN     = "#1A8C2E";
const TRACK_BG  = "rgba(0,0,0,0.04)";
const BAR_Z     = 9999; // above Navbar (which is z-50 = 50)

/*
  NavigationProgress
  ──────────────────
  A 3px top-of-viewport loading bar that:
  1. Listens for <a> clicks on internal links (link intercept)
  2. Watches pathname via useNavigationProgress to detect completion
  3. Animates from 12% → 68% (crawl) → 100% (complete) → fade out

  Respects prefers-reduced-motion — when enabled, transitions
  are instant (no easing) per the WCAG guideline.

  The "REV-E1" label is the one engineering detail:
  a tiny monospace marker at the bar's right edge during loading.
*/
export function NavigationProgress() {
  const reduce              = useReducedMotion();
  const { state, progress, start } = useNavigationProgress();
  const interceptorRef      = useRef<((e: MouseEvent) => void) | null>(null);

  // ── Link click interception ──────────────────────────────────────
  // We intercept clicks on <a> tags that are:
  //   - internal (same origin)
  //   - not modifier-clicked (cmd/ctrl/shift/middle)
  //   - not target="_blank"
  // This gives us the "start" signal before the router processes it.
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      // Ignore external links
      const href = target.getAttribute("href");
      if (!href) return;
      if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) return;
      if (href.startsWith("#")) return;

      // Ignore modifier clicks (user wants new tab / new window)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      // Ignore target="_blank"
      if (target.target === "_blank") return;

      start();
    }

    document.addEventListener("click", handleClick, true);
    interceptorRef.current = handleClick;

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [start]);

  // ── Derived visual state ─────────────────────────────────────────
  const isVisible    = state !== "idle";
  const isComplete   = state === "complete";

  // Transition durations — instant if reduced motion
  const widthDuration  = reduce ? "0ms" : "350ms";
  const opacityDelay   = reduce ? "0ms" : isComplete ? "200ms" : "0ms";

  return (
    <>
      {/* Background track — always present but invisible when idle */}
      <div
        aria-hidden="true"
        role="progressbar"
        aria-valuenow={isVisible ? progress : undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Memuat halaman"
        style={{
          position:   "fixed",
          top:        0,
          left:       0,
          right:      0,
          height:     3,
          zIndex:     BAR_Z,
          background: isVisible ? TRACK_BG : "transparent",
          transition: `background ${widthDuration} ease`,
          pointerEvents: "none",
        }}
      >
        {/* Progress fill */}
        <div
          style={{
            position:   "absolute",
            top:        0,
            left:       0,
            height:     "100%",
            width:      `${progress}%`,
            background: GREEN,
            opacity:    isComplete ? 0 : 1,
            transition: [
              `width ${widthDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
              `opacity 200ms ease ${opacityDelay}`,
            ].join(", "),
            borderRadius: "0 2px 2px 0",
          }}
        />

        {/*
          REV-E1 marker — the one engineering detail.
          Appears at the right edge of the current progress position.
          Fades out when complete. Barely visible (opacity 0.35).
        */}
        {isVisible && !isComplete && (
          <div
            style={{
              position:   "absolute",
              top:        6,
              left:       `${progress}%`,
              transform:  "translateX(-100%)",
              paddingRight: 4,
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize:      7,
                letterSpacing: "0.14em",
                color:         GREEN,
                opacity:       0.35,
                userSelect:    "none",
                whiteSpace:    "nowrap",
              }}
            >
              REV-E1
            </span>
          </div>
        )}
      </div>
    </>
  );
}