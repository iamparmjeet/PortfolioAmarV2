import Footer from "@/components/footer";
import NavHeader from "@/components/header";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { Providers } from "@/app/components/providers";
import "./globals.css";

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
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased [perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900  text-white mx-auto `}
				style={{
					backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgba(6,182,212,0.2), 0.5px, transparent 0)`,
					backgroundSize: "8px 8px",
					backgroundRepeat: "repeat",
				}}
			>
				<Providers>
					<NavHeader />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
