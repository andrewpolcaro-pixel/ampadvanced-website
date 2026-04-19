"use client";

import { useState, useEffect } from "react";

const WORDS = {
  A: ["Advanced", "Analytics", "Agile", "Aligned", "Adaptive", "Accelerate", "Authentic"],
  M: ["Management", "Mastery", "Measurable", "Momentum", "Methodology", "Mission-Led"],
  P: ["Performance", "Practice", "People", "Potential", "Precision", "Progress", "Proven"],
};

// Different intervals so slots rarely fire simultaneously
const CONFIG = [
  { words: WORDS.A, interval: 3200, delay: 0 },
  { words: WORDS.M, interval: 4100, delay: 1100 },
  { words: WORDS.P, interval: 2900, delay: 600 },
];

interface SlotProps {
  words: string[];
  interval: number;
  delay: number;
  terracotta?: boolean;
}

function Slot({ words, interval, delay, terracotta = false }: SlotProps) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1 % words.length);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    const start = () => {
      intervalId = setInterval(() => {
        setAnimating(true);
        setTimeout(() => {
          setCurrent((c) => (c + 1) % words.length);
          setNext((n) => (n + 1) % words.length);
          setAnimating(false);
        }, 440);
      }, interval);
    };

    const delayId = setTimeout(start, delay);
    return () => {
      clearTimeout(delayId);
      clearInterval(intervalId);
    };
  }, [words.length, interval, delay]);

  const color = terracotta ? "#D85A30" : "#042C53";

  return (
    <div
      className="relative overflow-hidden"
      // height matches line-height so the overflow clip is pixel-perfect
      style={{ height: "1.1em", lineHeight: "1.1" }}
    >
      {/* current word — slides up and out */}
      <span
        className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        style={{
          color,
          transform: animating ? "translateY(-105%)" : "translateY(0%)",
          transition: animating
            ? "transform 0.44s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      >
        {words[current]}
      </span>
      {/* next word — rides up from below */}
      <span
        className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        style={{
          color,
          transform: animating ? "translateY(0%)" : "translateY(105%)",
          transition: animating
            ? "transform 0.44s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      >
        {words[next]}
      </span>
    </div>
  );
}

export default function SlotMachine() {
  return (
    <div className="flex flex-col gap-1 text-6xl md:text-7xl lg:text-8xl">
      <Slot {...CONFIG[0]} />
      <Slot {...CONFIG[1]} />
      <Slot {...CONFIG[2]} terracotta />
    </div>
  );
}
