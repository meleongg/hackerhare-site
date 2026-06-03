import { CTASection } from "@/components/landing/CTASection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
