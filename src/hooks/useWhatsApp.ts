"use client";

import { useCallback } from "react";
import { buildWAUrl, type WAContext } from "@/lib/whatsapp";

export function useWhatsApp() {
  const openWhatsApp = useCallback(
    (context: WAContext, programName?: string) => {
      const url = buildWAUrl(context, programName);
      window.open(url, "_blank", "noopener,noreferrer");
    },
    []
  );

  const getUrl = useCallback(
    (context: WAContext, programName?: string): string => {
      return buildWAUrl(context, programName);
    },
    []
  );

  return { openWhatsApp, getUrl };
}
