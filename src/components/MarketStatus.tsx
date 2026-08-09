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

  return (
    <div className="a-status">
      <span className={`a-dot${open ? "" : " closed"}`} />
      <span className="exch">NYSE</span>
      <span className="sep">|</span>
      <span>{open === null ? "Checking session…" : open ? "OPEN" : "CLOSED"}</span>
    </div>
  );
}
