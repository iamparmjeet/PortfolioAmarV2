import { IconBrandWhatsapp, IconMail, IconMap2 } from "@tabler/icons-react";
import Link from "next/link";

import Logo from "../logo";
import SocialsBox from "../socials";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <footer>
      <FooterUpper />
      <FooterCopyright />
    </footer>
  );
}

function FooterUpper() {
  return (
    <section className="md:rounded-md bg-lime-400/5 text-lime-500 mb-4 container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Brand />
        <QuickLinks />
        <Services />
        <Contact />
      </div>
    </section>
  );
}

function Brand() {
  return (
    <div>
      <Logo />
      <p className="text-lime-600/90 my-4">
        Professional video editing, shooting, and concept planning services for various industries.
      </p>
      <SocialsBox />
    </div>
  );
}

const QuickLinksItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/works",
    label: "Works",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

function QuickLinks() {
  return (
    <div>
      <h3 className="text-lg font-medium  mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {QuickLinksItems.map(item => (
          <LinkBox
            key={item.label}
            href={item.href}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
}

type LinkBoxProps = {
  label: string;
  href: string;
};

function LinkBox({ label, href }: LinkBoxProps) {
  return (
    <li>
      <Link href={href} className="text-lime-600/90 hover:text-lime-500 transition-colors">
        {label}
      </Link>
    </li>
  );
}

const ServicesItems = [
  {
    id: 1,
    href: "#",
    label: "Video Production",
  },
  {
    id: 2,
    href: "#",
    label: "Video Editing",
  },
  {
    id: 3,
    href: "#",
    label: "Podcast Production",
  },
  {
    id: 4,
    href: "#",
    label: "Social Media Content",
  },
  {
    id: 5,
    href: "#",
    label: "Product Photography",
  },
];

function Services() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Services</h3>
      <ul className="space-y-2">
        {ServicesItems.map(item => (
          <LinkBox
            key={item.label}
            href={item.href}
            label={item.label}
          />
        )) }
      </ul>
    </div>
  );
}

const ContactItems = [
  {
    id: 1,
    href: "#",
    label: "Ludhiana, Punjab",
    icon: <IconMap2 className="w-5 h-5 shrink-0" />,
  },
  {
    id: 2,
    href: "wa.me/+919780189866",
    label: "(+91) 97801-89866",
    icon: <IconBrandWhatsapp className="w-5 h-5 shrink-0" />,
  },
  {
    id: 3,
    href: "mailto:info@amarjeetmishra.com",
    label: "info@amarjeetmishra.com",
    icon: <IconMail className="w-5 h-5 shrink-0" />,
  },
];

type ContactItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function ContactItemListBox({ label, href, icon }: ContactItemProps) {
  return (
    <a
      href={href}
      className="flex gap-2 items-center text-lime-600/90 hover:text-lime-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {label}
    </a>
  );
}

function Contact() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Contact</h3>
      <ul className="space-y-4">
        {ContactItems.map(item => (
          <ContactItemListBox
            key={item.id}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
}
