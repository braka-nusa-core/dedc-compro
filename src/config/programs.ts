import { PROGRAM_SLUGS, type ProgramSlug } from "@/lib/constants";

export const programRoutes: Record<ProgramSlug, string> = {
  [PROGRAM_SLUGS.AUTOCAD]: "/programs/autocad",
  [PROGRAM_SLUGS.PLANT_3D]: "/programs/autocad-plant-3d",
  [PROGRAM_SLUGS.REVIT_MEP]: "/programs/revit-mep",
  [PROGRAM_SLUGS.E3D]: "/programs/e3d",
};

export const allProgramSlugs: ProgramSlug[] = Object.values(PROGRAM_SLUGS);
