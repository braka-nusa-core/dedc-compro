"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseCounterOptions {
  from?: number;
  to: number;
  duration?: number;
  easing?: (t: number) => number;
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCounter({
  from = 0,
  to,
  duration = 1500,
  easing = easeOut,
}: UseCounterOptions) {
  const [count, setCount] = useState(from);
  const [isRunning, setIsRunning] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const start = useCallback(() => setIsRunning(true), []);

  useEffect(() => {
    if (!isRunning) return;

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      const current = Math.round(from + (to - from) * easedProgress);

      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isRunning, from, to, duration, easing]);

  return { count, start };
}