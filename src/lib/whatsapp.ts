import { WA_NUMBER } from "./constants";

export type WAContext = "hero" | "navbar" | "program" | "contact" | "trainer" | "final-cta";

export const WA_MESSAGES: Record<string, string> = {
  hero: "Halo DEDC, saya ingin konsultasi mengenai program training.",
  navbar: "Halo DEDC, saya ingin bertanya tentang program training.",
  contact: "Halo DEDC, saya ingin menghubungi tim DEDC.",
  trainer: "Halo DEDC, saya ingin informasi lebih lanjut tentang trainer DEDC.",
  "final-cta": "Halo DEDC, saya ingin mengembangkan karier di dunia engineering.",
};

export function buildWAUrl(context: WAContext, programName?: string): string {
  const message =
    context === "program" && programName
      ? `Halo DEDC, saya tertarik dengan program ${programName}. Boleh minta informasi lebih lanjut?`
      : (WA_MESSAGES[context] ?? WA_MESSAGES["hero"]);

  const encoded = encodeURIComponent(message ?? "");
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}
