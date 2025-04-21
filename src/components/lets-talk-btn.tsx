import Link from "next/link";
import { Button } from "./ui/button";

export default function LetsTalkButton() {
  return (
    <Button asChild className="hidden md:block" variant="orange" size="lg">
      <Link
        href="#contact"
      >
        Let's Talk
      </Link>
    </Button>
  );
}
