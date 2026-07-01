import Link from "next/link";

export default function ProgramNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-body font-medium tracking-widest uppercase text-[var(--color-primary)] mb-4">
          404
        </p>
        <h1 className="font-heading font-bold text-[var(--text-h2)] text-[var(--color-text-primary)] mb-4">
          Program Tidak Ditemukan
        </h1>
        <p className="font-body text-[var(--text-base)] text-[var(--color-text-secondary)] mb-8">
          Program yang Anda cari tidak tersedia. Lihat semua program training DEDC.
        </p>
        <Link
          href="/programs"
          className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-[var(--color-brand-dark)] font-body font-semibold text-sm rounded-[var(--radius-btn)] transition-colors duration-200 hover:bg-[var(--color-accent)]"
        >
          Lihat Semua Program
        </Link>
      </div>
    </div>
  );
}
