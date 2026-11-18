"use client";

import { Children, useCallback, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Carrousel tactile sur mobile (défilement horizontal avec accroche), qui redevient
 * une mise en page normale dès `md` : la page décide de l'affichage bureau via `className`.
 */
export default function MobileCarousel({
  children,
  className = "",
  slideClassName = "",
  wrapperClassName = "",
  label,
}: {
  children: ReactNode;
  className?: string; // mise en page à partir de md (ex. "md:grid md:grid-cols-2 md:gap-10")
  slideClassName?: string;
  wrapperClassName?: string;
  label?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0); // 0 → 1
  const items = Children.toArray(children);
  const count = items.length;

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0);
  }, []);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const step = slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const active = Math.round(progress * (count - 1));
  const thumb = 100 / count;

  return (
    <div className={wrapperClassName}>
      <ul
        ref={ref}
        onScroll={onScroll}
        aria-label={label}
        className={`relative -mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:scroll-pl-6 sm:px-6 md:mx-0 md:snap-none md:overflow-visible md:px-0 md:pb-0 ${className}`}
      >
        {items.map((child, i) => (
          <li key={i} className={`relative w-[84%] shrink-0 snap-start sm:w-[58%] md:w-auto md:shrink ${slideClassName}`}>
            {child}
          </li>
        ))}
      </ul>

      {count > 1 && (
        <div className="mt-5 flex items-center gap-4 md:hidden">
          <div className="relative h-px flex-1 bg-line" aria-hidden>
            <span
              className="absolute -top-px h-0.5 rounded-full bg-cyan transition-[left] duration-150"
              style={{ width: `${thumb}%`, left: `${progress * (100 - thumb)}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-steel" aria-live="polite">
            {active + 1} / {count}
          </span>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Précédent" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-graphite active:bg-mist">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Suivant" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-graphite active:bg-mist">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
