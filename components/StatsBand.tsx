"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ target, suffix }: { target: string; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const numeric = parseFloat(target.replace(",", "."));
  const isInt = !target.includes(",");
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(numeric * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  const display = isInt ? Math.round(val).toString() : val.toFixed(1).replace(".", ",");

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-cyan-dim">{suffix}</span>
    </span>
  );
}

export default function StatsBand() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y border-line bg-white">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[14rem] font-bold leading-none text-graphite/[0.03] md:text-[20rem]"
      >
        {stats[0]?.value}
      </span>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="relative mx-auto max-w-content px-5 py-12 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => {
            const match = stat.value.match(/^([\d.,]+)(.*)$/);
            const number = match ? match[1] : stat.value;
            const suffix = match ? match[2] : "";

            return (
              <div
                key={stat.label.fr}
                className="group relative"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mb-4 block font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite/30">
                  0{i + 1}
                </span>

                <p className="font-display text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-graphite transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-6xl md:text-6xl lg:text-7xl">
                  <Counter target={number} suffix={suffix} />
                </p>

                <p className="mt-4 max-w-[16ch] text-sm font-medium leading-snug text-graphite/55 md:text-base">
                  {stat.label[lang]}
                </p>

                <span className="mt-5 block h-px w-8 bg-cyan-dim transition-all duration-500 group-hover:w-16 md:mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}