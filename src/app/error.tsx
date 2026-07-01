"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-body font-medium tracking-widest uppercase text-[var(--color-primary)] mb-4">
          Error
        </p>
        <h2 className="font-heading font-bold text-[var(--text-h2)] text-[var(--color-text-primary)] mb-4">
          Terjadi Kesalahan
        </h2>
        <p className="font-body text-[var(--text-base)] text-[var(--color-text-secondary)] mb-8">
          Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-[var(--color-brand-dark)] font-body font-semibold text-sm rounded-[var(--radius-btn)] transition-colors duration-200 hover:bg-[var(--color-accent)]"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
