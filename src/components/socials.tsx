import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

const Socials = [
  {
    href: "https://www.instagram.com/amarjeetmishra001/",
    icon: (
      <IconBrandInstagram
        className="hover:fill-lime-400/5 hover:stroke-lime-500 w-7 h-7 "
      />
    ),
  },
  {
    href: "#",
    icon: (
      <IconBrandTwitter
        className="hover:fill-lime-400/5 hover:stroke-lime-500 w-7 h-7 "
      />
    ),
  },
  {
    href: "#",
    icon: (
      <IconBrandYoutube
        className="hover:fill-lime-400/5 hover:stroke-lime-500 w-7 h-7 "
      />
    ),
  },
];

export default function SocialsBox() {
  return (
    <div className="flex space-x-4">
      {Socials.map(social => (
        <SocialIcon
          key={social.href}
          href={social.href}
          icon={social.icon}
        />
      ))}
    </div>
  );
}

type SocialIconType = {
  href: string;
  icon: React.ReactNode;
};

function SocialIcon({ href, icon }: SocialIconType) {
  return (
    <Link
      href={href}
      className="text-lime-600 transition-colors"
    >
      {icon}
    </Link>
  );
}
