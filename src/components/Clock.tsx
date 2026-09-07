"use client";

import { useEffect, useState } from "react";

/**
 * Local studio time. Rendered only after mount — the server has no way to know
 * the client's clock, and guessing would trip a hydration mismatch.
 */
export default function Clock({ locale }: { locale: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
        timeZone: "Europe/Istanbul",
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, [locale]);

  return (
    <span className="label tabular-nums" suppressHydrationWarning>
      {time ?? "--:--:--"}
    </span>
  );
}
