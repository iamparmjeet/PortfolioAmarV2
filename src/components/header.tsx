"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

import Logo from "./logo";
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <header
      className="flex items-center justify-between transition-all duration-300"
    >
      <Logo />
      {/* <NavHeader /> */}
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map(item => (
          <Link key={item.name} href={item.href} className="text-gray-300 hover:text-amber-400 transition-colors">
            {item.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-black font-medium rounded-md transition-colors"
        >
          Let's Talk
        </Link>
      </nav>
      {/* Mobile Menu Button */}
      <Button
        type="button"
        className="md:hidden text-gray-300"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {
          mobileMenuOpen
            ? <IconX className="h-6 w-6" />
            : <IconMenu className="h-6 w-6" />
        }
      </Button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-amber-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-4 py-2 bg-gold-500 hover:bg-gold-600 text-black font-medium rounded-md transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
