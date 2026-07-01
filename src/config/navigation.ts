import { NavItem, NavGroup } from "@/types";

export const navLinks: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Program", href: "/programs" },
  { label: "Alumni", href: "/success-stories" },
  { label: "Kontak", href: "/contact" },
];

export const footerLinks: NavGroup[] = [
  {
    label: "Program",
    items: [
      { label: "AutoCAD", href: "/programs/autocad" },
      { label: "AutoCAD Plant 3D", href: "/programs/autocad-plant-3d" },
      { label: "Revit MEP", href: "/programs/revit-mep" },
      { label: "E3D", href: "/programs/e3d" },
    ],
  },
  {
    label: "Perusahaan",
    items: [
      { label: "Tentang DEDC", href: "/about" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Galeri", href: "/gallery" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Informasi",
    items: [
      { label: "Kontak", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];
