"use client";

import { IconPlayCard } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

// Portfolio categories
const categories = [
  { id: "all", name: "All Work" },
  { id: "real-estate", name: "Real Estate" },
  { id: "beauty", name: "Beauty & Salon" },
  { id: "dental", name: "Dental" },
  { id: "product", name: "Product Catalogs" },
  { id: "podcast", name: "Podcasts" },
];

// Portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Luxury Property Tour",
    category: "real-estate",
    thumbnail: "/images/placeholder.svg",
    type: "video",
    client: "Elite Properties",
  },
  {
    id: 2,
    title: "Dental Clinic Promotional Video",
    category: "dental",
    thumbnail: "/images/placeholder.svg",
    type: "video",
    client: "Smile Perfect Dental",
  },
  {
    id: 3,
    title: "Makeup Artist Showcase",
    category: "beauty",
    thumbnail: "/images/placeholder.svg",
    type: "video",
    client: "Glamour Studio",
  },
  {
    id: 4,
    title: "Henna Art Collection",
    category: "beauty",
    thumbnail: "/images/placeholder.svg",
    type: "image",
    client: "Traditional Henna Art",
  },
  {
    id: 5,
    title: "Nail Art Portfolio",
    category: "beauty",
    thumbnail: "/images/placeholder.svg",
    type: "image",
    client: "Nail Perfection",
  },
  {
    id: 6,
    title: "Modern Apartment Showcase",
    category: "real-estate",
    thumbnail: "/images/placeholder.svg",
    type: "video",
    client: "Urban Living Realty",
  },
  {
    id: 7,
    title: "Jewelry Collection",
    category: "product",
    thumbnail: "/images/placeholder.svg",
    type: "image",
    client: "Elegant Accessories",
  },
  {
    id: 8,
    title: "Business Leadership Podcast",
    category: "podcast",
    thumbnail: "/images/placeholder.svg",
    type: "video",
    client: "Success Mindset Podcast",
  },
  {
    id: 9,
    title: "Cosmetics Product Line",
    category: "product",
    thumbnail: "/images/placeholder.svg",
    type: "image",
    client: "Natural Beauty Co.",
  },
];

export default function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems
    = activeCategory === "all" ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map(category => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              activeCategory === category.id
                ? "bg-gold-500 text-black"
                : "bg-neutral-900 text-white hover:bg-neutral-800",
            )}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video"
                  ? (
                      <Button className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center">
                        <IconPlayCard className="w-6 h-6 text-black" />
                      </Button>
                    )
                  : (
                      <Button className="px-4 py-2 bg-gold-500 rounded-md text-black font-medium">View Gallery</Button>
                    )}
              </div>
            </div>
            <div className="p-4 bg-neutral-900">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="text-gold-400 text-sm">{item.client}</p>
              <div className="mt-2 flex items-center">
                <span className="text-xs uppercase tracking-wider bg-neutral-800 text-gray-300 px-2 py-1 rounded">
                  {item.type === "video" ? "Video" : "Photography"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
