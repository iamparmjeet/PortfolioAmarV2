"use client";

import { useEffect, useRef, useState } from "react";

type StatsCounterProps = {
  number: number;
  label: string;
};

export default function StatsCounter({ number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000; // 2 seconds
          const step = Math.ceil(number / (duration / 16)); // 16ms per frame (approx 60fps)

          const timer = setInterval(() => {
            start += step;
            if (start > number) {
              setCount(number);
              clearInterval(timer);
            }
            else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [number]);

  return (
    <div ref={counterRef} className="text-center p-8 bg-neutral-900 rounded-lg border border-neutral-800">
      <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
        {count}
        +
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
