import Link from "next/link";

import { Button } from "./ui/moving-border";

type ButtonProps = {
  text: string;
  href: string;
};

export default function LetsTalkButton({ text, href }: ButtonProps) {
  return (
    <Button borderRadius="1.75rem" className="relative z-10 ">
      <Link
        className="flex items-center justify-center h-full text-base font-medium "
        href={href || "/contact"}
      >
        {text}
      </Link>
    </Button>
  );
}
