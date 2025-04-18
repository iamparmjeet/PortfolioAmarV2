import ClientLogos from "./client-logos";
import StatsCounter from "./stats-counter";

export default function ClientSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by
            {" "}
            <span className="text-gold-400">Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Proud to have worked with these amazing businesses</p>
        </div>

        <ClientLogos />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCounter number={50} label="Completed Projects" />
          <StatsCounter number={25} label="Happy Clients" />
          <StatsCounter number={5} label="Years Experience" />
        </div>
      </div>
    </section>
  );
}
