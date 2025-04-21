import Image from "next/image";
import Link from "next/link";

import { Cover } from "@/components/ui/cover";
import { HeroImg } from "@/lib/data";

import { Button } from "./ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function HeroSection() {
  return (
    <section className="flex bg-black rounded-2xl overflow-hidden mb-4 text-white p-6">
      <div className="w-1/2">
        <Image
          src={HeroImg}
          alt="Hero Image"
          width={700}
          height={700}
          className="rounded "
        />
      </div>
      <div className="flex flex-col w-1/2 gap-8 mx-auto ">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight ">
          <span>
            Unlock The Power of
          </span>
          <ContainerTextFlip
            animationDuration={1000}
            words={["Video Campaigns", "Insta Campaigns"]}
          />
        </h1>
        <h2 className="text-3xl md:text-5xl font-mediumv text-gold-300 mb-6">Launch your video compaign in hours, not days</h2>
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
  );
}
