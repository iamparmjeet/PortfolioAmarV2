import Image from "next/image";

export default function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
      <div className="flex justify-center">
        <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
          <Image
            src="/images/placeholder.svg"
            alt="Client Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
          <Image
            src="/images/placeholder.svg"
            alt="Client Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
          <Image
            src="/images/placeholder.svg"
            alt="Client Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
          <Image
            src="/images/placeholder.svg"
            alt="Client Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-16 w-32 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
          <Image
            src="/images/placeholder.svg"
            alt="Client Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
