import type { Metadata } from "next";

import localFont from "next/font/local";

import Footer from "@/components/footer/footer";

import "./globals.css";

import NavHeader from "@/components/header/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amar Editz",
  description: "Video Editz with love",
  icons: [{ rel: "icon", url: "📸" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [perspective::1000px] [transform-style:preserve-3d] flex flex-col mx-auto bg-stone-900 overflow-x-hidden w-full `}
        style={{
          backgroundImage: `radial-gradient(circle at 5px 5px,rgba(6,182,212,0.1), 1px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      >
        <NavHeader />
        <main className="min-h-screen flex-grow container  md:mx-auto ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
