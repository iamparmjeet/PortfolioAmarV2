"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "@/components/header/logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="container w-full relative flex items-center justify-between transition-all py-4 px-2 md:my-4 mb-4 rounded-md bg-lime-400/5 duration-300"
      >
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 text-lime-500 transition-colors">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`"hover:bg-lime-600 hover:text-lime-950 px-4 py-2 rounded-md transition-colors" 
            ${pathname === item.href
              ? "bg-lime-600 text-lime-950 "
              : "hover:bg-lime-600"
            } `}
            >
              {item.name}
            </Link>
          ))}
          <LetsTalkButton />
        </nav>
        {/* Mobile Menu Button */}
        <Button
          type="button"
          variant="ghost"
          className="md:hidden bg-lime-600/80 text-lime-400 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {
            mobileMenuOpen
              ? <IconX className="h-6 w-6" />
              : <IconMenu className="h-6 w-6" />
          }
        </Button>
      </header>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <header className="realtive z-50 w-full h-full">
          <div className="absolute left-0 right-0 bg-lime-950 rounded-md w-full p-4 md:hidden ">
            <ul className="flex items-start flex-col space-y-2 mb-6">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`"hover:bg-lime-600 hover:text-lime-950 w-full px-4 py-1.5 rounded-md transition-colors" 
                  ${pathname === item.href
                  ? "bg-lime-600 text-lime-950 "
                  : "hover:bg-lime-600"
                } `}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
            <LetsTalkButton />
          </div>
        </header>
      )}
    </>
  );
}

function LetsTalkButton() {
  return (
    <Link
      href="#contact"
      className="px-4 py-2 bg-lime-600 text-lime-950 hover:bg-lime-600/80 hover:text-lime-400 font-medium rounded-md transition-colors"
    >
      Let's Talk
    </Link>
  );
}
