"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const HEADER_OFFSET = -72;

/** Inertia-based smooth scrolling for the whole site (skipped if the visitor prefers reduced motion). */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      anchors: { offset: HEADER_OFFSET },
    });
    lenisRef.current = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // After navigating between pages, start at the top (or at the #section in the URL)
  React.useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    const hash = window.location.hash;
    if (hash) {
      const t = setTimeout(() => lenis.scrollTo(hash, { offset: HEADER_OFFSET }), 120);
      return () => clearTimeout(t);
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
