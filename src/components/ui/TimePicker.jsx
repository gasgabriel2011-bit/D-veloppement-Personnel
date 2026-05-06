import { useState, useRef, useEffect, useCallback } from "react";

const ITEM_HEIGHT = 44;
const VISIBLE = 5; // must be odd
const HALF = Math.floor(VISIBLE / 2);

function Drum({ items, value, onChange }) {
  const listRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);
  const animFrame = useRef(null);
  const selectedIndex = items.indexOf(value);

  // Snap scroll to index
  const scrollTo = useCallback((index, smooth = true) => {
    if (!listRef.current) return;
    const target = index * ITEM_HEIGHT;
    listRef.current.scrollTo({ top: target, behavior: smooth ? "smooth" : "instant" });
  }, []);

  useEffect(() => {
    scrollTo(selectedIndex, false);
  }, []);

  const getIndexFromScroll = () => {
    if (!listRef.current) return 0;
    return Math.round(listRef.current.scrollTop / ITEM_HEIGHT);
  };

  const handleScrollEnd = useCallback(() => {
    const idx = getIndexFromScroll();
    const clamped = Math.max(0, Math.min(items.length - 1, idx));
    scrollTo(clamped);
    onChange(items[clamped]);
  }, [items, onChange, scrollTo]);

  // Debounced scroll
  const scrollTimer = useRef(null);
  const handleScroll = () => {
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(handleScrollEnd, 80);
    // live update during scroll
    const idx = getIndexFromScroll();
    if (items[idx] !== undefined) onChange(items[idx]);
  };

  // Mouse wheel
  const handleWheel = (e) => {
    e.preventDefault();
    if (!listRef.current) return;
    listRef.current.scrollTop += e.deltaY > 0 ? ITEM_HEIGHT : -ITEM_HEIGHT;
    handleScrollEnd();
  };

  // Touch / mouse drag
  const onPointerDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    startScrollTop.current = listRef.current?.scrollTop ?? 0;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragging.current || !listRef.current) return;
    const y = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    listRef.current.scrollTop = startScrollTop.current - (y - startY.current);
    const idx = getIndexFromScroll();
    if (items[idx] !== undefined) onChange(items[idx]);
  };
  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleScrollEnd();
  };

  const getItemStyle = (idx) => {
    const diff = idx - (listRef.current ? Math.round(listRef.current.scrollTop / ITEM_HEIGHT) : selectedIndex);
    const absDiff = Math.abs(diff);
    const rotateX = diff * -18;
    const scale = 1 - absDiff * 0.06;
    const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.55 : absDiff === 2 ? 0.25 : 0;
    return {
      transform: `perspective(200px) rotateX(${rotateX}deg) scale(${scale})`,
      opacity,
      transition: "transform 0.1s ease, opacity 0.1s ease",
    };
  };

  return (
    <div className="relative select-none" style={{ width: 64, height: ITEM_HEIGHT * VISIBLE }}>
      {/* Fade top & bottom */}
      <div className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: ITEM_HEIGHT * HALF, background: "linear-gradient(to bottom, hsl(var(--background)), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: ITEM_HEIGHT * HALF, background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

      {/* Selection indicator */}
      <div className="absolute inset-x-0 z-0 rounded-xl bg-foreground/8 border-t border-b border-border"
        style={{ top: ITEM_HEIGHT * HALF, height: ITEM_HEIGHT }} />

      {/* Scrollable list */}
      <div
        ref={listRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ overflowY: "scroll", height: "100%", scrollbarWidth: "none", scrollSnapType: "y mandatory" }}
        className="relative z-5 cursor-grab active:cursor-grabbing"
      >
        {/* Padding top/bottom to center first and last */}
        <div style={{ height: ITEM_HEIGHT * HALF }} />
        {items.map((item, idx) => {
          const isSel = item === value;
          return (
            <div key={item}
              onClick={() => { scrollTo(idx); onChange(item); }}
              style={{ height: ITEM_HEIGHT, scrollSnapAlign: "center", ...getItemStyle(idx) }}
              className={`flex items-center justify-center font-heading text-xl font-semibold transition-all cursor-pointer
                ${isSel ? "text-foreground" : "text-muted-foreground/40"}`}>
              {item}
            </div>
          );
        })}
        <div style={{ height: ITEM_HEIGHT * HALF }} />
      </div>
    </div>
  );
}

const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const MINUTES = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));

export default function TimePicker({ value = "07:00", onChange, label }) {
  const [open, setOpen] = useState(false);
  const [h, setH] = useState(value.split(":")[0] || "07");
  const [m, setM] = useState(
    // snap minute to nearest 5
    String(Math.round(parseInt(value.split(":")[1] || "0") / 5) * 5).padStart(2, "0")
  );

  const commit = (newH, newM) => {
    const v = `${newH}:${newM}`;
    onChange(v);
  };

  const handleHour = (v) => { setH(v); commit(v, m); };
  const handleMin = (v) => { setM(v); commit(h, v); };

  return (
    <div className="relative">
      {label && <label className="text-xs text-muted-foreground mb-1 block font-body">{label}</label>}
      <button onClick={() => setOpen(o => !o)}
        className="h-11 px-4 rounded-xl border border-input bg-background flex items-center gap-2 hover:border-primary/40 transition-colors min-w-[100px] font-heading text-base font-semibold text-foreground">
        <span>{h}:{m}</span>
        <span className="text-muted-foreground/40 text-xs ml-auto">▼</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 mt-2 left-0 bg-background border border-border rounded-2xl shadow-2xl p-4"
            style={{ minWidth: 180 }}>
            <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider text-center mb-3">Heure</p>
            <div className="flex items-center gap-2">
              <Drum items={HOURS} value={h} onChange={handleHour} />
              <span className="font-heading text-2xl font-bold text-muted-foreground/50 pb-1">:</span>
              <Drum items={MINUTES} value={m} onChange={handleMin} />
            </div>
            <button onClick={() => setOpen(false)}
              className="mt-4 w-full h-9 rounded-full bg-primary text-primary-foreground text-sm font-body font-semibold hover:bg-primary/90 transition-colors">
              OK — {h}:{m}
            </button>
          </div>
        </>
      )}
    </div>
  );
}