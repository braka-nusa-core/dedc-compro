"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;
    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  return <>{children}</>;
}
