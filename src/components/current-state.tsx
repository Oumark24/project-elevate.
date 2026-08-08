import { BookOpen, Laptop, Target } from "lucide-react";

const habits = [
  {
    title: "Academics",
    description:
      "I’m building consistency: finishing assignments before the deadline, reviewing difficult topics instead of cramming, and keeping a clearer weekly study plan.",
    icon: BookOpen,
  },
  {
    title: "Tech",
    description:
      "I’m learning by making—writing small programs, exploring systems, and documenting what I understand instead of collecting tutorials.",
    icon: Laptop,
  },
  {
    title: "Future Goals",
    description:
      "I’m turning long-term ideas into next steps: protecting time for Qur’an, saving money, and preparing for college at a realistic pace.",
    icon: Target,
  },
];

export function CurrentState() {
  return (
    <section
      id="goals"
      className="flex min-h-screen scroll-mt-16 items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Where I Am Now
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Small habits, practiced on purpose.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m building a foundation that can support bigger opportunities
            later.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {habits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-border bg-muted/20 p-6 shadow-sm"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
