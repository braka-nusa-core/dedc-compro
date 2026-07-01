"use client";

import { useRef, useEffect, useState } from "react";

interface UseAnimateOnScrollOptions {
  threshold?: number;
  once?: boolean;
}

export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  once = true,
}: UseAnimateOnScrollOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
