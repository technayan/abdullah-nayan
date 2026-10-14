"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** A thin bar at the top of the page showing how far you've scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
