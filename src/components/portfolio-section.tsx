import LetsTalkButton from "./lets-talk-btn";
import PortfolioFilter from "./portfolio-filter";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="p-6 md:py-12 bg-black my-6 rounded-2xl text-white flex flex-col items-center gap-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold">
          My Portfolio
        </h2>
        <p className="text-neutral-300 text-base md:text-xl max-w-xl mx-auto mt-6">
          Explore my work across different industries and project types
        </p>
      </div>
      <PortfolioFilter />
      <LetsTalkButton href="/works" text="Portfolio" />
    </section>
  );
}
