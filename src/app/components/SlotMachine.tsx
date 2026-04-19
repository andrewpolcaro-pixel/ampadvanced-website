"use client";

import { useEffect, useRef, useState } from "react";

// 7 words each — length must stay equal across all three slots so the
// math that lands on index 0 works uniformly.
const SLOTS = [
  ["Advanced", "Analytics", "Always", "Architect", "Agile", "Aligned", "Authentic"],
  ["Management", "Movement", "Mastery", "Measurable", "Momentum", "Methodology", "Mindful"],
  ["Performance", "Practice", "People", "Potential", "Precision", "Progress", "Proven"],
];

// Each entry = one tick: how long to wait before it fires, how long the slide lasts.
// 10 fast ticks, then 7 ticks that ease to a stop.
const TICK_CONFIG: { wait: number; anim: number }[] = [
  ...Array.from({ length: 10 }, () => ({ wait: 0, anim: 150 })),
  { wait: 60,  anim: 200 },
  { wait: 120, anim: 270 },
  { wait: 200, anim: 340 },
  { wait: 300, anim: 390 },
  { wait: 400, anim: 420 },
  { wait: 520, anim: 440 },
  { wait: 640, anim: 440 },
];

// TOTAL_TICKS = 17; SLOTS[*].length = 7
// startIndex = (0 - 17 % 7 + 7) % 7 = 4
// Verify: (4 + 17) % 7 = 0  ✓ — lands on "Advanced / Management / Performance"
const TOTAL_TICKS = TICK_CONFIG.length;
const PAUSE_MS = 10_000;

function computeStarts(): number[] {
  return SLOTS.map((words) => {
    const mod = TOTAL_TICKS % words.length;
    return ((0 - mod) + words.length) % words.length;
  });
}

// ── Single slot, driven entirely by parent props ──────────────────────────
interface SlotProps {
  current: string;
  incoming: string;
  ticking: boolean;
  animDuration: number;
  terracotta?: boolean;
}

function Slot({ current, incoming, ticking, animDuration, terracotta = false }: SlotProps) {
  const color = terracotta ? "#D85A30" : "#042C53";
  const transition = ticking
    ? `transform ${animDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
    : "none";

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "1.1em", lineHeight: "1.1" }}
    >
      {/* current word — slides up and out */}
      <span
        className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        style={{
          color,
          transform: ticking ? "translateY(-105%)" : "translateY(0%)",
          transition,
        }}
      >
        {current}
      </span>
      {/* incoming word — rides up from below */}
      <span
        className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        style={{
          color,
          transform: ticking ? "translateY(0%)" : "translateY(105%)",
          transition,
        }}
      >
        {incoming}
      </span>
    </div>
  );
}

// ── Controller ────────────────────────────────────────────────────────────
export default function SlotMachine() {
  // Start on the target words; idxRef tracks the conceptual position
  // (may differ from display at the moment a cycle restarts).
  const [display, setDisplay] = useState<number[]>([0, 0, 0]);
  const [incoming, setIncoming] = useState<number[]>(() => {
    const s = computeStarts();
    return s.map((v, i) => (v + 1) % SLOTS[i].length);
  });
  const [ticking, setTicking] = useState(false);
  const [animDuration, setAnimDuration] = useState(150);

  const idxRef = useRef<number[]>(computeStarts()); // starts at [4,4,4]
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function scheduleNext(tickNum: number) {
      timerRef.current = setTimeout(
        () => runTick(tickNum),
        TICK_CONFIG[tickNum].wait,
      );
    }

    function runTick(tickNum: number) {
      const { anim } = TICK_CONFIG[tickNum];
      const isLast = tickNum === TOTAL_TICKS - 1;
      const next = idxRef.current.map((v, i) => (v + 1) % SLOTS[i].length);

      // Kick off the slide animation
      setIncoming([...next]);
      setAnimDuration(anim);
      setTicking(true);

      // After the slide completes, commit the new display
      timerRef.current = setTimeout(() => {
        idxRef.current = next;
        setDisplay([...next]);
        setTicking(false);

        if (isLast) {
          // We've landed on [0,0,0] — pause, then restart
          timerRef.current = setTimeout(() => {
            const starts = computeStarts();
            idxRef.current = starts;
            // display intentionally stays at [0,0,0]: the first tick will
            // animate away from "Advanced / Management / Performance"
            setIncoming(starts.map((v, i) => (v + 1) % SLOTS[i].length));
            scheduleNext(0);
          }, PAUSE_MS);
        } else {
          scheduleNext(tickNum + 1);
        }
      }, anim);
    }

    scheduleNext(0);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-1 text-6xl md:text-7xl lg:text-8xl">
      {SLOTS.map((words, i) => (
        <Slot
          key={i}
          current={words[display[i]]}
          incoming={words[incoming[i]]}
          ticking={ticking}
          animDuration={animDuration}
          terracotta={i === 2}
        />
      ))}
    </div>
  );
}
