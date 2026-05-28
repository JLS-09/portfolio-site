"use client";
import { useEffect } from "react";

const EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const DEFAULT_DURATION = "0.6s";
const STAGGER_STEP = 0.08;

function revealEl(el: HTMLElement, delay: string, duration: string) {
  el.style.transition = `opacity ${duration} ${EASING} ${delay}, transform ${duration} ${EASING} ${delay}`;
  requestAnimationFrame(() => el.classList.add("visible"));
  el.addEventListener(
    "transitionend",
    () => {
      el.removeAttribute("data-reveal");
      el.classList.remove("visible");
      el.style.transition = "";
      el.style.transitionDelay = "";
    },
    { once: true }
  );
}

export default function ScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.removeAttribute("data-reveal"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);

        if (!visible.length) return;

        const inGrid = visible.filter((el) => el.closest("[data-stagger-grid]"));
        const standalone = visible.filter((el) => !el.closest("[data-stagger-grid]"));

        standalone.forEach((el) => {
          revealEl(el, el.style.transitionDelay || "0s", DEFAULT_DURATION);
        });

        const grids = new Map<Element, HTMLElement[]>();
        inGrid.forEach((el) => {
          const grid = el.closest("[data-stagger-grid]")!;
          if (!grids.has(grid)) grids.set(grid, []);
          grids.get(grid)!.push(el);
        });

        grids.forEach((els, gridEl) => {
          const duration = (gridEl as HTMLElement).dataset.duration || DEFAULT_DURATION;

          const byX = new Map<number, HTMLElement[]>();
          els.forEach((el) => {
            const x = Math.round(el.getBoundingClientRect().left / 10) * 10;
            if (!byX.has(x)) byX.set(x, []);
            byX.get(x)!.push(el);
          });
          const cols = [...byX.keys()].sort((a, b) => a - b);

          els.forEach((el) => {
            const x = Math.round(el.getBoundingClientRect().left / 10) * 10;
            const colIdx = cols.indexOf(x);
            revealEl(el, `${colIdx * STAGGER_STEP}s`, duration);
          });
        });

        visible.forEach((el) => observer.unobserve(el));
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
