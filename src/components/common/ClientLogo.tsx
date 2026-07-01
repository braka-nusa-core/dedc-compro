import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import type { CorporateClient } from "@/types";

interface ClientLogoProps {
  client: CorporateClient;
  className?: string;
  /** Show company name as tooltip on hover */
  showTooltip?: boolean;
}

export function ClientLogo({
  client,
  className,
  showTooltip = true,
}: ClientLogoProps) {
  const logo = (
    <div
      className={cn(
        "relative h-10 w-full max-w-[140px] mx-auto",
        "grayscale opacity-60 hover:grayscale-0 hover:opacity-100",
        "transition-all duration-[var(--duration-slow)]",
        className
      )}
    >
      <Image
        src={client.logoSrc}
        alt={`Logo ${client.name}`}
        fill
        className="object-contain"
        sizes="140px"
      />
    </div>
  );

  if (!showTooltip) return logo;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{logo}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{client.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}