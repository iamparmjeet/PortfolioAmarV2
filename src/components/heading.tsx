import { cn } from "@/lib/utils";

type OrangeHeading1Type = {
  text: string;
  className?: string;
};

export function OrangeHeading1({ text = "Amar Editz", className }: OrangeHeading1Type) {
  return (
    <h2 className={cn("bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-3xl md:text-5xl font-bold", className)}>
      {text}
    </h2>
  );
}
