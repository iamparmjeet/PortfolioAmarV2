import ClientSection from "@/components/client-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientSection />
        <ContactSection />
      </main>
    </div>
  );
}
