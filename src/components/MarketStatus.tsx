import { useEffect, useState } from "react";

// Approximates NYSE regular trading hours (Mon–Fri, 9:30–16:00 America/New_York).
// Does not account for market holidays — acceptable for a decorative status line.
function isMarketOpen(): boolean {
  const nowInNewYork = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const day = nowInNewYork.getDay();
  const minutesSinceMidnight =
    nowInNewYork.getHours() * 60 + nowInNewYork.getMinutes();

  const isWeekday = day >= 1 && day <= 5;
  const isDuringHours =
    minutesSinceMidnight >= 9 * 60 + 30 && minutesSinceMidnight < 16 * 60;

  return isWeekday && isDuringHours;
}

export default function MarketStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isMarketOpen());
    const id = setInterval(() => setOpen(isMarketOpen()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) {
    return null;
  }

  return (
    <p className="mono-label text-sm flex items-center justify-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${
          open
            ? "bg-accent shadow-[0_0_6px_2px_rgba(126,231,135,0.6)]"
            : "bg-rose-500 shadow-[0_0_6px_2px_rgba(244,63,94,0.6)]"
        }`}
      />
      MARKETS {open ? "OPEN" : "CLOSED"}
    </p>
  );
}
