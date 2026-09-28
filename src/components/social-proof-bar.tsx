"use client";

import { useEffect, useState } from "react";
import { Eye, Timer } from "lucide-react";

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function SocialProofBar() {
  const [viewers, setViewers] = useState(7);
  const [hoursLeft, setHoursLeft] = useState(18);

  useEffect(() => {
    const day = new Date().toISOString().slice(0, 10);
    const seed = hashSeed(`azicra-${day}`);
    setViewers(4 + (seed % 9));
    setHoursLeft(12 + (seed % 24));

    const id = window.setInterval(() => {
      setViewers((v) => Math.max(3, Math.min(18, v + (Math.random() > 0.55 ? 1 : -1))));
    }, 14000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-teal-50/90">
      <span className="inline-flex items-center gap-2">
        <Eye className="size-4 opacity-80" aria-hidden />
        <span>
          <strong className="font-semibold text-white">{viewers}</strong> people
          viewing this listing
        </span>
      </span>
      <span className="hidden h-3 w-px bg-white/25 sm:block" aria-hidden />
      <span className="inline-flex items-center gap-2">
        <Timer className="size-4 opacity-80" aria-hidden />
        <span>
          Response window refreshes in{" "}
          <strong className="font-semibold text-white">{hoursLeft}h</strong>
        </span>
      </span>
    </div>
  );
}
