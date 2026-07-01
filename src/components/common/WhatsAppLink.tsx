import { type WAContext, buildWAUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppLinkProps {
  context: WAContext;
  programName?: string;
  children: React.ReactNode;
  className?: string;
  /** Accessible label describing the destination — required when children is not text */
  ariaLabel?: string;
}

export function WhatsAppLink({
  context,
  programName,
  children,
  className,
  ariaLabel,
}: WhatsAppLinkProps) {
  const url = buildWAUrl(context, programName);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `Hubungi DEDC via WhatsApp (tab baru)`}
      className={cn(className)}
    >
      {children}
    </a>
  );
}