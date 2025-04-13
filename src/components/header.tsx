import Link from "next/link";

import Logo from "./logo";
import NavHeader from "./nav";
import { Button } from "./ui/button";

export default function Header() {
  return (

    <header className="flex items-center justify-between">
      <Logo />
      <NavHeader />
      <Button className="bg-lime-400/10 text-xl text-lime-600 h-12" asChild><Link href="/contact">Hire Me</Link></Button>
    </header>
  );
}
