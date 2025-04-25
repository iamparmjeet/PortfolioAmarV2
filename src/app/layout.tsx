import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import localFont from "next/font/local";

import Footer from "@/components/footer/footer";
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
  icons: [{ rel: "icon", url: "/images/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Amar Editz" />
        <meta property="og:type" content="website" />
        <meta property="og:image:secure_url" content="https://media.amarjeetmishra.com/images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="60" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Amar Editz Logo" />
        <meta property="youtube:url" content="https://www.youtube.com/@AmarEditzOfficial" />
        <meta property="instagram:url" content="https://www.instagram.com/amarjeetmishra001/" />
      </head>
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
