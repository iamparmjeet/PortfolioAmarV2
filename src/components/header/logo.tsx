import { IconMovie } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center text-lime-500 text-xl">
      <IconMovie className="s-6" />
      <h2>Amar Editz</h2>
    </Link>
  );
}
