export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-primary)] animate-spin"
          role="status"
          aria-label="Memuat halaman..."
        />
        <p className="text-sm font-body text-[var(--color-text-secondary)]">
          Memuat...
        </p>
      </div>
    </div>
  );
}
