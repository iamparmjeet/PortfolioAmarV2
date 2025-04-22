import Image from "next/image";

import ClientSection from "@/components/client-section";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import ServicesSection from "@/components/services-section";

export default async function Home() {
  const data = await fetch("https://media.amarjeetmishra.com/amarjeet-portfolio/assets/images/Jewellery/1.webp");
  console.log("Data", data);

  return (
    <>
      <div className="cotainer p-6">
        <Image
          src="https://media.amarjeetmishra.com/amarjeet-portfolio/assets/images/Jewellery/1.webp"
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
