import Link from "next/link";

import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="contianer h-screen flex overflow-hidden p-4 ">
        <div className="text-center mx-auto px-4 relative z-20">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-lime-400 to-teal-700 bg-clip-text text-transparent">
            <span>Visual</span>
            {" "}
            <span>Storyteller</span>
          </h1>
          <h2 className="text-3xl md:text-5xl text-center font-mediumv text-gold-300 mb-6">Video Editor & Content Creator</h2>
          <p className="text-lg mx-auto md:text-xl text-lime-600 mb-8 max-w-2xl">
            Transforming ideas into compelling visual narratives for property dealers, beauty professionals, and
            businesses across industries.
          </p>

          <Button asChild>
            <Link
              href="#contact"
              className="px-8 py-6  border text-2xl font-medium rounded-md transition-colors"
            >
              Let's Talk
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
