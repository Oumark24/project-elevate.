"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export function RevealOnScroll({
  children,
  className,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);
  const inView = useInView(revealRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && prefersReducedMotion !== true;

  return (
    <motion.div
      ref={revealRef}
      className={className}
      initial={false}
      animate={
        shouldAnimate && !inView ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
