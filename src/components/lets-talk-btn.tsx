import Link from "next/link";
import { Button } from "./ui/moving-border";

type ButtonProps = {
  text: string;
  href: string
}

export default function LetsTalkButton({text, href}: ButtonProps) {
  return (
    <Button className="md:block"  >
      <Link
        className="flex items-center justify-center h-full text-base font-medium"
        href={href ? href : "/contact"}
      >
        {text}
      </Link>
    </Button>
  );
}
