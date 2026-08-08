import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Code2,
  Laptop,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const pillars = [
  {
    title: "Academics",
    detail:
      "I show up prepared, build reliable study habits, and take ownership of the work in front of me.",
    icon: BookOpen,
  },
  {
    title: "Computer Science",
    detail:
      "I learn the fundamentals by writing, testing, and explaining code rather than only watching tutorials.",
    icon: Code2,
  },
  {
    title: "Qur'an",
    detail:
      "I protect consistent time for reflection and practice so faith stays part of my daily system.",
    icon: BookMarked,
  },
  {
    title: "Technology",
    detail:
      "I use tools intentionally, keeping my attention focused on creating more than consuming.",
    icon: Laptop,
  },
  {
    title: "Financial Responsibility",
    detail:
      "I track what I have, save with a purpose, and make choices that respect the value of money.",
    icon: Wallet,
  },
  {
    title: "Trust & Accountability",
    detail:
      "I make clear commitments, communicate honestly, and let consistent actions earn more responsibility.",
    icon: ShieldCheck,
  },
];

export function SixPillars() {
  return (
    <section
      id="system"
      className="flex min-h-screen scroll-mt-16 items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Six Pillars
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            The standards behind the system.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m building each area with habits that make progress visible
            and responsibility easier to trust.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ title, detail, icon: Icon }) => (
            <article
              key={title}
              tabIndex={0}
              aria-label={`${title} pillar`}
              className="group rounded-md border border-border bg-muted/20 p-6 shadow-sm transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 focus-visible:-translate-y-1 focus-visible:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon
                  className="size-5 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <ArrowRight
                  className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
