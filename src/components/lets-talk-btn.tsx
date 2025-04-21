import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function LetsTalkButton() {
  return (
    <Button className="md:block"  >
      <Link
        className="flex items-center justify-center h-full text-base font-medium"
        href="#contact"
      >
        Let's Talk
      </Link>
    </Button>
  );
}
