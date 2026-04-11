import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurWork } from "@/components/OurWork";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechStack } from "@/components/TechStack";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Marks end of hero — header uses this to switch from glass to solid before white sections */}
        <div
          id="below-hero"
          className="pointer-events-none h-px w-full shrink-0"
          aria-hidden
        />

        <PartnershipSection />

        <WhyChoose />

        <ServicesSection />

        <TechStack />

        <OurWork />
      </main>
      <Footer />
    </>
  );
}
