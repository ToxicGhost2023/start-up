"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type HeroRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function HeroReveal({ children, delay = 0, y = 24 }: HeroRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
