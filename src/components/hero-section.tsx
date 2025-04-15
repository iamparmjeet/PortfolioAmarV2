import Link from "next/link";

import { VideoPlayer } from "./video-player";

export default function HeroSection() {
  return (
    <>
      <section className="h-screen flex items-center overflow-hidden">
        <VideoPlayer src="https://media.amarjeetmishra.com/aggarwal-tile/1/master.m3u8" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Visual</span>
              {" "}
              <span className="text-gold-400">Storyteller</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-gold-300 mb-6">Video Editor & Content Creator</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Transforming ideas into compelling visual narratives for property dealers, beauty professionals, and
              businesses across industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-medium rounded-md transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400/10 font-medium rounded-md transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
