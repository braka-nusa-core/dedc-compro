"use client";

import React, { type ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { AnalyticsProvider } from "./AnalyticsProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </ThemeProvider>
  );
}
