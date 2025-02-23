export default function LandingPage() {
	return (
		<div
			className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center text-white"
			style={{
				backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgba(6,182,212,0.2), 0.5px, transparent 0)`,
				backgroundSize: "8px 8px",
				backgroundRepeat: "repeat",
			}}
		>
			LandingPage
		</div>
	);
}
