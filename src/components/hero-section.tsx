import Image from "next/image";

import { HeroImg } from "@/lib/data";

import LetsTalkButton from "./lets-talk-btn";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-6 md:flex-row bg-black rounded-2xl overflow-hidden my-4 md:my-6 text-white p-6">
      <div className="md:w-1/2">
        <Image
          src={HeroImg}
          alt="Hero Image"
          width={700}
          height={700}
          className="rounded "
        />
      </div>
      <div className="flex flex-col justify-center items-start  md:w-1/2 gap-6 mx-auto ">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight ">
          <span>
            Unlock The Power of
          </span>
          <ContainerTextFlip
            animationDuration={1000}
            words={["Video Campaigns", "Insta Campaigns", "Youtube Videos", "Podcasts"]}
          />
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-neutral-300">Launch your video compaign in hours, not days</h2>
        <p className="text-neutral-300 text-base md:text-xl md:text-balance">
          Transforming ideas into compelling visual narratives for property dealers, beauty professionals, and
          businesses across industries.
        </p>
        <LetsTalkButton href="#contact" text="Lets Talk" />
      </div>

    </section>
  );
}
