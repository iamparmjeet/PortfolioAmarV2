"use client";

import { useMemo, useState } from "react";

import { categories, portfolioItems } from "@/components/portfolio-data";
import { Button } from "@/components/ui/button";
import NextVideo from "@/components/video/next-video";
import { cn } from "@/lib/utils";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredItems = useMemo(() => {
    const filtered = activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

    // Reset to first page when filter changes
    setCurrentPage(1);
    return filtered;
  }, [activeCategory]);

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-8 w-full bg-black p-6 rounded-2xl mt-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map(category => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              activeCategory === category.id
                ? "bg-orange-500 text-neutral-200"
                : "bg-neutral-900 text-white hover:bg-orange-500",
            )}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg">
            <div className="h-[854px] object-fill relative overflow-hidden">
              <NextVideo
                href={item.thumbnail}
                thumbnail={item.thumbnail.replace(".m3u8", ".webp")}
              />

              {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video"
                  ? (
                      <Button className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center">
                        <IconPlayCard className="w-6 h-6 text-black" />
                      </Button>
                    )
                  : (
                      <Button className="px-4 py-2 bg-gold-500 rounded-md text-black font-medium">
                        View Gallery
                      </Button>
                    )}
              </div> */}
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
