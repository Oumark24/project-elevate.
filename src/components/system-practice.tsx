import {
  ArrowRight,
  BookOpen,
  Code2,
  FolderKanban,
  Laptop,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { ConsistencyChart } from "@/components/consistency-chart";

const roadmap = [
  {
    title: "Fundamentals",
    detail:
      "I am getting comfortable with variables, functions, control flow, and the habits that make code easier to understand.",
    icon: Code2,
  },
  {
    title: "Problem Solving",
    detail:
      "I practice breaking problems down, learning data structures, and explaining why a solution works.",
    icon: BookOpen,
  },
  {
    title: "Build Projects",
    detail:
      "I turn lessons into small useful tools so I can learn how decisions hold up outside a tutorial.",
    icon: Laptop,
  },
  {
    title: "Cybersecurity",
    detail:
      "I am learning how systems fail, how to protect them, and how to think responsibly about access and risk.",
    icon: ShieldCheck,
  },
  {
    title: "Portfolio",
    detail:
      "I document the process, trade-offs, and results so my work shows how I think and contribute.",
    icon: FolderKanban,
  },
];

const quranCycle = [
  {
    title: "Recite",
    detail: "Set aside focused time and recite with care.",
  },
  {
    title: "Record",
    detail: "Capture the session so progress is easier to see.",
  },
  {
    title: "Review",
    detail: "Listen back and notice the places that need attention.",
  },
  {
    title: "Improve",
    detail: "Choose one specific adjustment for the next recitation.",
  },
];

export function ComputerScienceRoadmap() {
  return (
    <section
      id="cs-roadmap"
      className="scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-fg">
            Computer Science Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Learn it, build it, prove it.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m moving from fundamentals toward work that demonstrates
            useful technical judgment.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {roadmap.map(({ title, detail, icon: Icon }, index) => (
            <li
              key={title}
              className="relative rounded-md border border-border bg-muted/20 p-5 shadow-sm md:even:translate-y-6"
            >
              {index < roadmap.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-steel md:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tabular-nums text-steel-fg">
                  0{index + 1}
                </span>
                <Icon
                  className="size-5 text-steel"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 text-lg font-medium text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function QuranPractice() {
  return (
    <section
      id="quran"
      className="scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-fg">
            Tarteel / Qur&apos;an
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            A practice loop that keeps improving.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m treating recitation as a repeatable cycle: each pass gives
            me something specific to review and improve.
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-muted/20 p-5 sm:p-8">
          <ol className="grid gap-6 md:grid-cols-4 md:gap-4">
            {quranCycle.map(({ title, detail }, index) => (
              <li key={title} className="relative flex gap-4 md:block">
                {index < quranCycle.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-6 z-10 hidden size-5 text-steel md:block"
                    aria-hidden="true"
                  />
                )}
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-steel/60 text-sm font-medium text-steel-fg">
                  0{index + 1}
                </span>
                <div className="min-w-0 md:mt-5">
                  <h3 className="text-xl font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <RefreshCw className="size-4 text-steel" aria-hidden="true" />
            <span>Return to Recite with one clear improvement in mind.</span>
          </div>
        </div>

        <ConsistencyChart />
      </div>
    </section>
  );
}
