"use client";
import { motion } from "motion/react";

import Container from "@/components/container";
import { OrangeHeading1 } from "@/components/heading";

const content = [
  "Hey! I'm a self-taught video editor and shooter with a deep passion for visual storytelling. I specialize in shooting and editing content that connects with audiences—whether it's a catchy Instagram reel, a product shoot, a podcast setup, or promotional content for brands.",
  "Over the years, I’ve worked across a wide range of industries including dental clinics, skincare brands, manufacturing industries, real estate, interior designers, educational institutes, and more. Each project is a new opportunity to bring someone’s vision to life, and I approach every shoot with creativity, attention to detail, and a commitment to quality.",
  "From concept to final cut, I handle everything—planning shots, capturing high-quality visuals, and delivering polished edits that are social-media ready. My style is versatile, and I tailor each video or shoot to match the tone, brand, and message of the client.",
  "What sets me apart? I didn’t learn this in a classroom. I’ve taught myself everything I know—through practice, curiosity, and a drive to always improve. Every frame I shoot is backed by real experience and a genuine love for the craft.",
  "Whether you're a brand looking to stand out or an individual building your presence, I’m here to help you tell your story visually—with impact.",
];

const Highlights = [
  "🎥 Self-taught Video Editor & Shooter",
  "📍 Specializing in Insta Reels, Podcasts, Product & Model Shoots",
  "🏢 Worked with dentists, skincare brands, real estate, interiors & more",
  "🎬 Turning ideas into visuals that connect & convert",
];

export default function AboutPage() {
  return (
    <Container className="flex-col">
      <OrangeHeading1 text="About me -- " />
      {content.map(text => (
        <p key={text} className="mt-2">{text}</p>
      ))}
      {Highlights.map(text => (
        <p key={text}>
          {text}
        </p>
      ))}
      <div>
        <SkeletonTwo />
      </div>
    </Container>
  );
}

function SkeletonTwo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={`images-first${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border  shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-second${image + idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
