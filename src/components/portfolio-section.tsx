import PortfolioFilter from "./portfolio-filter";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My
            {" "}
            <span className="text-gold-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my work across different industries and project types
          </p>
        </div>

        <PortfolioFilter />
      </div>
    </section>
  );
}
