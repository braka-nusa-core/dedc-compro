"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  to,
  from = 0,
  duration = 1500,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const { count, start } = useCounter({
    from,
    to,
    duration: shouldReduceMotion ? 0 : duration,
  });
  const hasStarted = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      // Skip animation entirely — render final value immediately
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [start, shouldReduceMotion]);

  const displayValue = shouldReduceMotion ? to : count;

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      {displayValue.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}