import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  /** A single word or short phrase in the title to highlight in green.
   *  Must be an exact substring of `title`. */
  accentWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Set to true when section is on a dark (#0B0F14) background */
  dark?: boolean;
  className?: string;
  /** Rendered as the section's semantic heading level */
  as?: "h2" | "h3";
}

export function SectionHeader({
  overline,
  title,
  accentWord,
  subtitle,
  align = "center",
  dark = false,
  className,
  as: Tag = "h2",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  // Build title with optional accent word highlighted in green
  const titleContent = (() => {
    if (!accentWord) return title;
    const idx = title.indexOf(accentWord);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="text-[var(--color-primary)]">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  })();

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {overline && (
        <p
          className={cn(
            "font-body font-medium text-[var(--text-xs)] tracking-widest uppercase",
            dark ? "text-[var(--color-primary)]" : "text-[#9CA3AF]"
          )}
        >
          {overline}
        </p>
      )}

      <Tag
        className={cn(
          "font-heading font-bold leading-tight",
          // Mobile scale
          "text-[1.625rem] md:text-[var(--text-h2)] z-[999]",
          dark ? "text-white" : "text-[var(--color-text-primary)]"
        )}
      >
        {titleContent}
      </Tag>

      {subtitle && (
        <p
          className={cn(
            "font-body text-[var(--text-lg)] leading-relaxed max-w-2xl",
            // Mobile scale
            "text-[var(--text-base)] md:text-[var(--text-lg)]",
            dark ? "text-[#D1D5DB]" : "text-[var(--color-text-secondary)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}