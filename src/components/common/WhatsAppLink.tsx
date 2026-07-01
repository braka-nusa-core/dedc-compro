import { type WAContext, buildWAUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppLinkProps {
  context: WAContext;
  programName?: string;
  children: React.ReactNode;
  className?: string;
  /** Accessible label describing the destination — required when children is not text */
  ariaLabel?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function WhatsAppLink({
  context,
  programName,
  children,
  className,
  ariaLabel,
  style,
  onMouseEnter,
  onMouseLeave,
}: WhatsAppLinkProps) {
  const url = buildWAUrl(context, programName);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `Hubungi DEDC via WhatsApp (tab baru)`}
      className={cn(className)}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}