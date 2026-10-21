import { AccessibilityBar } from "@/components/AccessibilityBar";
import { AccessibilitySection } from "@/components/AccessibilitySection";
import { CheckIn } from "@/components/CheckIn";
import { Games } from "@/components/Games";
import { Hero } from "@/components/Hero";
import { Paths } from "@/components/Paths";
import { Psychology } from "@/components/Psychology";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Videos } from "@/components/Videos";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <SiteHeader />
      <AccessibilityBar />
      <main id="main">
        <Hero />
        <CheckIn />
        <Paths />
        <Psychology />
        <Games />
        <Videos />
        <AccessibilitySection />
      </main>
      <SiteFooter />
    </>
  );
}
