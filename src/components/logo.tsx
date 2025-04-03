import { Film } from "lucide-react";
import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center text-lime-500 text-xl">
            <Film className="s-6" />
            <h2>Amar Editz</h2>
            </Link>
  )
}
