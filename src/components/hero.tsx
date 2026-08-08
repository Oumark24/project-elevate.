"use client";

import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <section
      id="overview"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Project Elevate
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">I&apos;m not asking for more freedom.</span>
            <span className="mt-2 block text-primary">
              I&apos;m asking for the opportunity to prove I can handle it.
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldAnimate ? 0.15 : 0, ease: "easeOut" }}
        >
          Project Elevate: A personal system for academics, technology,
          Qur&apos;an, finances, and my future.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldAnimate ? 0.3 : 0, ease: "easeOut" }}
        >
          <Button asChild size="lg">
            <a href="#system">Explore my system</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#family">View family plan</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
