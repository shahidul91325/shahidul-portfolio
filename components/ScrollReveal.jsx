"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal]";
const REVEAL_DURATION = 700;
const CLEANUP_MARGIN = 160;

function prefersReducedMotion() {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Adds a one-time scroll reveal to every [data-reveal] element on the page.
 * Elements are only hidden once JavaScript runs and only when they start out
 * below the fold, so content is always visible without scripting and never
 * flickers on first paint. Returns nothing: it only toggles classes, so no
 * component has to re-render and layout is never affected.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    if (!nodes.length) return undefined;

    const timers = new Set();

    const revealNow = (node) => {
      node.classList.add("is-revealed");
      node.classList.remove("reveal-pending");
    };

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      nodes.forEach(revealNow);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          observer.unobserve(node);
          node.classList.add("is-revealed");
          const delay = Number.parseFloat(window.getComputedStyle(node).getPropertyValue("--delay")) || 0;
          const timer = window.setTimeout(() => {
            node.classList.remove("reveal-pending");
            timers.delete(timer);
          }, REVEAL_DURATION + delay + CLEANUP_MARGIN);
          timers.add(timer);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    nodes.forEach((node) => {
      if (node.classList.contains("is-revealed")) return;
      const rect = node.getBoundingClientRect();
      // Anything already on screen stays visible; only genuinely off-screen
      // content is parked so hydration can never make visible content vanish.
      if (rect.top < window.innerHeight) {
        node.classList.add("is-revealed");
        return;
      }
      node.classList.add("reveal-pending");
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      nodes.forEach((node) => {
        if (!node.classList.contains("is-revealed")) node.classList.remove("reveal-pending");
      });
    };
  }, [pathname]);

  return null;
}
