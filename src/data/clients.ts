import type { CorporateClient } from "@/types";

// TODO: Confirm logo usage rights with all clients before launch
export const clients: CorporateClient[] = [
  { id: "c-1", name: "PT Exatra Engineering", logoSrc: "/images/clients/exatra.png", industry: "epc" },
  { id: "c-2", name: "PT PP (Persero)", logoSrc: "/images/clients/pp.png", industry: "construction" },
  { id: "c-3", name: "PT Control System Paranusa", logoSrc: "/images/clients/csp.png", industry: "oil-gas" },
  { id: "c-4", name: "PT Rekayasa Industri", logoSrc: "/images/clients/rekind.png", industry: "industrial" },
  { id: "c-5", name: "PT Wijaya Karya", logoSrc: "/images/clients/wika.png", industry: "construction" },
  { id: "c-6", name: "PT Totalindo Eka Persada", logoSrc: "/images/clients/totalindo.png", industry: "building" },
];
