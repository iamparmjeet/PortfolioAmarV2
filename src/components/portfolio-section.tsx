import { OrangeHeading1 } from "./heading";
import LetsTalkButton from "./lets-talk-btn";
import PortfolioSectionWithFilter from "./portfolios-all";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="p-6 md:py-12 bg-black my-6 rounded-2xl text-white flex flex-col items-center gap-10">
      <div className="text-center">
        <OrangeHeading1 text="My Portfolio Works" className="text-3xl md:text-5xl font-extrabold" />
        <p className="text-neutral-300 text-base md:text-xl max-w-xl mx-auto mt-6">
          Explore my work across different industries and project types
        </p>
      </div>
      <PortfolioSectionWithFilter items={6} />
      <LetsTalkButton href="/works" text="Portfolio" />
    </section>
  );
}
