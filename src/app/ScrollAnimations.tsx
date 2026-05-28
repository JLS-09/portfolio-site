"use client";
import { useEffect } from "react";

const EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const DEFAULT_DURATION = "0.6s";
const CARD_DURATION = "0.65s";
const CARD_STAGGER = 0.08;

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
        const intersecting = entries.filter((e) => e.isIntersecting);

        const cards = intersecting
          .filter((e) => (e.target as HTMLElement).dataset.reveal === "card")
          .sort((a, b) => {
            const ai = parseInt((a.target as HTMLElement).dataset.cardIndex ?? "0");
            const bi = parseInt((b.target as HTMLElement).dataset.cardIndex ?? "0");
            return ai - bi;
          });

        cards.forEach((e, i) => {
          const el = e.target as HTMLElement;
          revealEl(el, `${(i * CARD_STAGGER).toFixed(2)}s`, CARD_DURATION);
          observer.unobserve(el);
        });

        intersecting
          .filter((e) => (e.target as HTMLElement).dataset.reveal !== "card")
          .forEach((e) => {
            const el = e.target as HTMLElement;
            revealEl(el, el.style.transitionDelay || "0s", DEFAULT_DURATION);
            observer.unobserve(el);
          });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
