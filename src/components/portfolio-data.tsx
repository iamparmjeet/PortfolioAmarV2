// lib/portfolio-data.ts
import { aggarwalTile, URL } from "@/lib/data";

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  type: "video" | "image";
  client: string;
};

// Portfolio categories
export const categories = [
  { id: "all", name: "All Work" },
  { id: "astrology", name: "Astrology" },
  { id: "ayurvedic", name: "Ayurvedic" },
  { id: "fashion", name: "Fashion & Lifestyle" },
  { id: "institute", name: "Institute" },
  { id: "decor", name: "Home Decor" },
  { id: "real-estate", name: "Real Estate" },
  { id: "beauty", name: "Beauty & Salon" },
  { id: "health", name: "Health" },
  { id: "product", name: "Product Catalogs" },
  { id: "podcast", name: "Podcasts" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tile Shop",
    category: "real-estate",
    thumbnail: `${URL}/assets/Videos/aggarwal-tile/1/master.m3u8`,
    type: "video",
    client: "Elite Properties",
  },
  {
    id: 2,
    title: "Astrology",
    category: "astrology",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Smile Perfect Dental",
  },
  {
    id: 3,
    title: "Astrology Braclets",
    category: "astrology",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Glamour Studio",
  },
  {
    id: 4,
    title: "Carry Bag",
    category: "fashion",
    thumbnail: aggarwalTile,
    type: "image",
    client: "Carry Your Style",
  },
  {
    id: 5,
    title: "Genius Brain",
    category: "institute",
    thumbnail: aggarwalTile,
    type: "image",
    client: "Brain Power",
  },
  {
    id: 6,
    title: "Hair Salon Institute",
    category: "institute",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Learn with Us",
  },
  {
    id: 7,
    title: "Home Decor",
    category: "decor",
    thumbnail: aggarwalTile,
    type: "image",
    client: "Elegant Accessories",
  },
  {
    id: 8,
    title: "Hospital",
    category: "health",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Health First",
  },
  {
    id: 9,
    title: "Health Insurance",
    category: "health",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Health First",
  },
  {
    id: 10,
    title: "Interior",
    category: "decor",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Beauty Home",
  },
  {
    id: 11,
    title: "Saloon",
    category: "institute",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Jeens Salon",
  },
  {
    id: 12,
    title: "Jewellery",
    category: "product",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Gold For Life",
  },
  {
    id: 13,
    title: "Kid Toys",
    category: "product",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Toy Zone",
  },
  {
    id: 14,
    title: "Mattress",
    category: "product",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Sleepy Cat",
  },
  {
    id: 15,
    title: "Miss USA",
    category: "fashion",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Beauty Queen",
  },
  {
    id: 16,
    title: "Nutrition USA",
    category: "product",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Nutrition USA",
  },
  {
    id: 17,
    title: "Home Maker",
    category: "real-estate",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Toy Estate",
  },
  {
    id: 18,
    title: "Skin Care",
    category: "beauty",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Glass Skin",
  },
  {
    id: 19,
    title: "Ayurvedic",
    category: "ayurvedic",
    thumbnail: aggarwalTile,
    type: "video",
    client: "Glass Skin",
  },
];
