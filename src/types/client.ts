export type ClientIndustry = "epc" | "oil-gas" | "construction" | "mep" | "manufacturing" | "building" | "industrial" | "other";

export interface CorporateClient {
  id: string;
  name: string;
  logoSrc: string;
  industry: ClientIndustry;
  website?: string;
}
