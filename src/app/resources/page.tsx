import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { pageSEO } from "@/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: pageSEO.resources.title,
  description: pageSEO.resources.description,
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Phase 3 — Resources sections assembled here */}
      <p className="text-[var(--color-text-secondary)] font-body">
        Resources &amp; Artikel — Phase 3 placeholder
      </p>
    </div>
  );
}
