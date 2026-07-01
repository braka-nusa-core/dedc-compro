import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar }              from "@/components/layout/Navbar";
import { Footer }              from "@/components/layout/Footer";
import { WhatsAppButton }      from "@/components/layout/WhatsAppButton";
import { NavigationProgress }  from "@/components/layout/NavigationProgress";

const spaceGrotesk = Space_Grotesk({
  subsets:  ["latin"],
  variable: "--font-space-grotesk",
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  "DEDC — Professional Engineering Training Center",
    template: "%s | DEDC",
  },
  description:
    "Pelatihan AutoCAD, Plant 3D, Revit MEP, dan AVEVA E3D. Trainer praktisi industri. Tersertifikasi. Dipercaya sejak 2011.",
  metadataBase: new URL("https://dedc.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={spaceGrotesk.variable}>
      <body className="font-body antialiased bg-[#F7F9FC] text-[#0D1117]">
        {/*
          NavigationProgress mounts once at root level.
          It self-manages via usePathname and document-level click interception.
          No props needed. Works automatically across all pages.
        */}
        <NavigationProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}