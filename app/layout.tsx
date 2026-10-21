import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque, Lexend } from "next/font/google";
import { SettingsProvider } from "@/components/SettingsProvider";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dys",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinmind — a calm place for minds that work differently",
  description:
    "Psychology-based tools, gentle games and videos with captions and sign language for ADHD, OCD, autism, dyslexia and every kind of mind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${atkinson.variable} ${lexend.variable} ${bricolage.variable}`}>
      <body>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
