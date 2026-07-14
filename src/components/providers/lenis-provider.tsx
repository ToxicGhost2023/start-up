"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
