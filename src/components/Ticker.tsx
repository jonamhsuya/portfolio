import { useEffect, useRef } from "react";

const NY_CLOCK_FORMATTER = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

// Fills the ticker strip with as many repeats of the content as it takes to
// overflow the visible width, then scrolls by exactly one repeat's width —
// so the loop point is invisible and the strip never shows blank space,
// regardless of viewport width or how long the text is.
export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = track?.parentElement;
    if (!track || !wrap) return;

    function setup() {
      if (!track || !wrap) return;
      const unit = track.querySelector<HTMLElement>(".a-marquee-set");
      if (!unit) return;

      const unitWidth = unit.getBoundingClientRect().width;
      const wrapWidth = wrap.getBoundingClientRect().width;
      if (!unitWidth || !wrapWidth) return; // not laid out yet

      track.classList.remove("ready");

      const copiesNeeded = Math.max(2, Math.ceil((wrapWidth * 2) / unitWidth) + 1);
      const existing = track.querySelectorAll(".a-marquee-set").length;
      for (let i = existing; i < copiesNeeded; i++) {
        const clone = unit.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      }
      while (track.children.length > copiesNeeded) {
        track.removeChild(track.lastChild as ChildNode);
      }

      const pxPerSecond = 55;
      track.style.setProperty("--a-marquee-distance", `-${unitWidth}px`);
      track.style.animationDuration = `${unitWidth / pxPerSecond}s`;
      void track.offsetWidth; // force reflow so the new duration/distance take effect
      track.classList.add("ready");
    }

    setup();
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 150);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function updateClocks() {
      const text = `NYC ${NY_CLOCK_FORMATTER.format(new Date())}`;
      document.querySelectorAll<HTMLElement>(".a-clock").forEach((el) => {
        el.textContent = text;
      });
    }
    updateClocks();
    const id = setInterval(updateClocks, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="a-marquee-wrap">
      <div className="a-marquee-track" ref={trackRef}>
        <div className="a-marquee-set">
          <span>AYUSH MANOJ</span>
          <span className="up">SWE @ BLOOMBERG</span>
          <span className="down">CS + MATH @ UT AUSTIN</span>
          <span className="clock a-clock">NYC 00:00:00</span>
        </div>
      </div>
    </div>
  );
}
