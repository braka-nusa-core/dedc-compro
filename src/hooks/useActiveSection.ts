"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[], offset = 100): string {
  const [activeSection, setActiveSection] = useState<string>("");
  // Stabilise the array reference so callers can safely pass inline arrays
  const idsRef = useRef<string[]>(sectionIds);
  useEffect(() => {
    idsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = "";
      for (const id of idsRef.current) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]); // offset is a primitive — safe dependency; ids accessed via ref

  return activeSection;
}