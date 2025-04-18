import ClientSection from "@/components/client-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div
        className={`absolute w-full h-[min(250vh,1800px)] top-0 bg-cover bg-top pointer-events-none -z-10 bg-[url("/images/bg1.jpg")] `}
      >
      </div>
      <ServicesSection />
      <PortfolioSection />
      <ClientSection />
      <ContactSection />
      <div
        className={`absolute w-full h-[min(250vh,1800px)] bottom-0 bg-cover bg-top pointer-events-none -z-10 bg-[url("/images/bg-gradient-min.jpg")] `}
      >
      </div>
    </>
  );
}
