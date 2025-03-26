"use client";

import { motion } from "motion/react";
import React, { useRef, useState } from "react";

function NavHeader() {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			className="relative mx-auto flex w-fit rounded-lg mt-4 bg-lime-400/5 p-1"
			onMouseLeave={() =>
				setPosition((pv) => ({ ...pv, opacity: 0 }))
			}
		>
			<Tab setPosition={setPosition}>Home</Tab>
			<Tab setPosition={setPosition}>Pricing</Tab>
			<Tab setPosition={setPosition}>About</Tab>
			<Tab setPosition={setPosition}>Services</Tab>
			<Tab setPosition={setPosition}>Contact</Tab>

			<Cursor position={position} />
		</ul>
	);
}

const Tab = ({
	children,
	setPosition,
}: {
	children: React.ReactNode;
	setPosition: any;
}) => {
	const ref = useRef<HTMLLIElement>(null);
	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref.current) return;

				const { width } = ref.current.getBoundingClientRect();
				setPosition({
					width,
					opacity: 1,
					left: ref.current.offsetLeft,
				});
			}}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-lime-600 font-medium mix-blend-difference md:px-5 md:py-3 md:text-base"
		>
			{children}
		</li>
	);
};

const Cursor = ({ position }: { position: any }) => {
	return (
		<motion.li
			animate={position}
			className="absolute z-0 h-7 rounded-lg bg-lime-600 md:h-12"
		/>
	);
};

export default NavHeader;
