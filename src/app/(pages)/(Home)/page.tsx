import ClientSection from "@/components/client-section";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";
import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://media.amarjeetmishra.com/amarjeet-portfolio/assets/images/Jewellery/1.webp")
  console.log('Data' , data)
  
  return (
    <>
      <div>
        <Image
          src={"https://media.amarjeetmishra.com/amarjeet-portfolio/assets/images/Jewellery/1.webp"}
          alt="Jewellery"
          fill
          priority
        />
      </div>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientSection />
    </>
  );
}
