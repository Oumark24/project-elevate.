"use client";

import {
  BookOpen,
  Check,
  Code2,
  FileCheck2,
  GraduationCap,
} from "lucide-react";
import { useMemo, useState } from "react";

const weeklyGoals = [
  {
    title: "Academics",
    icon: GraduationCap,
    checkpoints: [
      { id: "academics-review", label: "Review one difficult topic" },
      { id: "academics-plan", label: "Finish assignments before the deadline" },
    ],
  },
  {
    title: "Qur'an",
    icon: BookOpen,
    checkpoints: [
      { id: "quran-recite", label: "Complete four focused recitations" },
      { id: "quran-review", label: "Review one recording and note an improvement" },
    ],
  },
  {
    title: "Coding",
    icon: Code2,
    checkpoints: [
      { id: "coding-build", label: "Make progress on one useful project" },
      { id: "coding-document", label: "Document what I learned and changed" },
    ],
  },
  {
    title: "Chores",
    icon: FileCheck2,
    checkpoints: [
      { id: "chores-routine", label: "Complete my agreed household routine" },
      { id: "chores-extra", label: "Take initiative on one extra responsibility" },
    ],
  },
] as const;

const agreementPairs = [
  {
    responsibility:
      "I will protect time for academics, Qur'an, coding, and the household responsibilities we agree on.",
    request:
      "A laptop that gives me a proper environment for focused school and technical work.",
  },
  {
    responsibility:
      "I will use the tools to create and learn, not hide activity or ignore reasonable boundaries.",
    request:
      "Accountable independence that grows when my habits and communication show I am ready.",
  },
  {
    responsibility:
      "I will share progress honestly, accept correction, and help repair trust when I fall short.",
    request:
      "Clear check-ins and expectations so responsibility is measured by consistent actions.",
  },
];

export function FamilyPlan() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const checkpointCount = weeklyGoals.reduce(
    (total, goal) => total + goal.checkpoints.length,
    0,
  );
  const completedCount = useMemo(
    () => Object.values(completed).filter(Boolean).length,
    [completed],
  );
  const completion = (completedCount / checkpointCount) * 100;

  function toggleCheckpoint(id: string) {
    setCompleted((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  return (
    <section
      id="family"
      className="scroll-mt-16 px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-fg">
            Family Plan
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Trust is built in the details.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            This is a simple weekly record and a clear agreement: I show what
            I am responsible for, and I explain the tools I am asking to use.
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-muted/20 p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent-fg">
                Weekly Scorecard
              </p>
              <h3 className="mt-3 text-2xl font-medium text-foreground">
                Small promises, checked consistently.
              </h3>
            </div>
            <p
              className="text-sm tabular-nums text-muted-foreground"
              role="status"
              aria-live="polite"
            >
              {completedCount} of {checkpointCount} complete
            </p>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-background">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-200 motion-reduce:transition-none"
              style={{ width: `${completion}%` }}
              aria-hidden="true"
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {weeklyGoals.map(({ title, icon: Icon, checkpoints }) => (
              <div key={title}>
                <div className="flex items-center gap-3">
                  <Icon
                    className="size-5 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h4 className="font-medium text-foreground">{title}</h4>
                </div>
                <div className="mt-4 space-y-3">
                  {checkpoints.map(({ id, label }) => (
                    <label
                      key={id}
                      className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(completed[id])}
                        onChange={() => toggleCheckpoint(id)}
                        className="peer mt-1 size-5 shrink-0 appearance-none rounded-full border border-border bg-background outline-none transition-colors hover:border-primary checked:border-primary checked:bg-primary focus-visible:ring-2 focus-visible:ring-primary/50 motion-reduce:transition-none"
                      />
                      <span className="relative -ml-8 mt-1 flex size-5 shrink-0 items-center justify-center text-background opacity-0 peer-checked:opacity-100">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="-ml-1">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-fg">
            Family Agreement
          </p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-4xl">
            A clear exchange of responsibility and trust.
          </h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            This agreement is a shared understanding, not a demand. I am
            responsible for proving that the tools will be used with purpose,
            care, and honesty.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-background p-5 sm:p-8">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            <div className="bg-muted/20 p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-fg">
                What I&apos;m responsible for
              </p>
            </div>
            <div className="hidden bg-muted/20 p-5 sm:p-6 md:block">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-fg">
                What I&apos;m asking for
              </p>
            </div>
            {agreementPairs.map(({ responsibility, request }) => (
              <div key={responsibility} className="contents">
                <div className="bg-background p-5 sm:p-6">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {responsibility}
                  </p>
                </div>
                <div className="bg-background p-5 sm:p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-accent-fg md:hidden">
                    What I&apos;m asking for
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {request}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <div className="h-8 border-b border-muted-foreground/50" />
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                My name
              </p>
            </div>
            <div>
              <div className="h-8 border-b border-muted-foreground/50" />
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Family member
              </p>
            </div>
            <div>
              <div className="h-8 border-b border-muted-foreground/50" />
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Date
              </p>
            </div>
            <p className="self-end text-xs leading-5 text-muted-foreground">
              Presentational signature lines — this page does not submit or
              store an agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
