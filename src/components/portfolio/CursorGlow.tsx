import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[420px] w-[420px] rounded-full"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        background:
          "radial-gradient(circle, oklch(0.78 0.16 195 / 0.18), transparent 60%)",
        transition: "left 120ms ease, top 120ms ease",
      }}
    />
  );
}
