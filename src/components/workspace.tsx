"use client";

import {
  ArrowRight,
  Laptop,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const independenceStages = [
  {
    title: "Supervised Access",
    get: "Use a shared device for assigned schoolwork with an adult nearby.",
    accountable:
      "I follow the agreed schedule, stay on the assigned task, and ask before changing settings.",
  },
  {
    title: "Guided Practice",
    get: "Work through tutorials and small coding exercises with regular check-ins.",
    accountable:
      "I keep my work organized, show what I built, and speak up when I get stuck.",
  },
  {
    title: "Project Time",
    get: "Use a dedicated laptop block to build projects and develop useful skills.",
    accountable:
      "I start and stop on time, protect the device, and leave a clear record of progress.",
  },
  {
    title: "Trusted Independence",
    get: "Plan my own technical work, research responsibly, and manage a longer project.",
    accountable:
      "I share milestones, explain what I am doing online, and correct problems honestly.",
  },
  {
    title: "Full Ownership",
    get: "Own the environment and use it to create, learn, and prepare for real opportunities.",
    accountable:
      "I self-report consistently, maintain healthy boundaries, and let my habits sustain the trust.",
  },
];

const workspaceModes = [
  {
    title: "Phone Work",
    icon: Phone,
    description:
      "A phone is useful for quick capture, messages, and checking a reference. It is also built for notifications and consumption, so long sessions become cramped and easy to interrupt.",
    points: [
      "Good for quick notes, reminders, and short research",
      "Small keyboard and one-window friction slow deeper work",
      "The same device mixes focus time with endless feeds",
    ],
  },
  {
    title: "Laptop Deep Work",
    icon: Laptop,
    description:
      "A laptop gives me a deliberate environment for making things—not just a bigger screen. I can write, run, test, document, and review work with the tools visible together.",
    points: [
      "Run a compiler, local dev server, and terminal side by side",
      "Use a real keyboard for code, writing, and version control",
      "Create a separation between a consumption device and a work device",
    ],
  },
];

export function Workspace() {
  const [stage, setStage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;
  const currentStage = independenceStages[stage];

  return (
    <section
      id="workspace"
      className="scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            My Workspace
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            The environment shapes the work.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m not asking for a bigger screen just to have one. I&apos;m
            building a workspace that makes focused, accountable work possible.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {workspaceModes.map(({ title, icon: Icon, description, points }) => {
            const isLaptop = title === "Laptop Deep Work";

            return (
              <article
                key={title}
                className={`rounded-lg border bg-muted/20 p-6 shadow-sm ${
                  isLaptop
                    ? "border-primary/40 bg-primary/[0.04]"
                    : "border-border"
                }`}
              >
                <Icon
                  className="size-5 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-xl font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <ArrowRight
                        className="mt-1 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Earned access
          </p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-4xl">
            Freedom With Accountability
          </h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            More independence follows visible habits—not a promise made once.
            Move through the stages to see what I receive and what I owe in
            return.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-muted/20 p-5 sm:p-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            <span>
              Stage {stage + 1} of {independenceStages.length}
            </span>
          </div>

          <div className="mt-8">
            <label
              htmlFor="independence-stage"
              className="sr-only"
            >
              Choose an earned technology independence stage
            </label>
            <input
              id="independence-stage"
              type="range"
              min={0}
              max={independenceStages.length - 1}
              step={1}
              value={stage}
              onChange={(event) => setStage(Number(event.target.value))}
              aria-valuetext={currentStage.title}
              className="h-2 w-full cursor-pointer accent-primary"
            />
            <div className="mt-4 grid grid-cols-5 gap-2">
              {independenceStages.map(({ title }, index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setStage(index)}
                  className={`text-left text-xs leading-5 transition-colors motion-reduce:transition-none ${
                    index === stage
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Select ${title}`}
                  aria-pressed={index === stage}
                >
                  <span
                    className={`mb-2 block h-1 rounded-full ${
                      index <= stage ? "bg-primary" : "bg-border"
                    }`}
                    aria-hidden="true"
                  />
                  {title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 min-h-48">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStage.title}
                initial={
                  shouldAnimate ? { opacity: 0, x: 12 } : false
                }
                animate={{ opacity: 1, x: 0 }}
                exit={shouldAnimate ? { opacity: 0, x: -12 } : undefined}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Current stage
                </p>
                <h4 className="mt-3 text-2xl font-medium text-foreground">
                  {currentStage.title}
                </h4>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      What I get
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {currentStage.get}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      What I&apos;m accountable for
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {currentStage.accountable}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
