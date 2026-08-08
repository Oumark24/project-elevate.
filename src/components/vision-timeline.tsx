const milestones = [
  {
    title: "High School",
    detail: "Finish strong with steady academics and a dependable daily rhythm.",
  },
  {
    title: "Skills",
    detail: "Develop useful technical, communication, and self-management skills.",
  },
  {
    title: "Projects",
    detail: "Turn what I learn into focused work that solves real problems.",
  },
  {
    title: "Portfolio",
    detail: "Document the process and build proof of how I think and contribute.",
  },
  {
    title: "College",
    detail: "Choose an environment where I can keep growing with purpose.",
  },
];

export function VisionTimeline() {
  return (
    <section
      id="future"
      className="flex min-h-screen scroll-mt-16 items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-fg">
            Vision
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            A path from preparation to possibility.
          </h2>
        </div>

        <div className="mt-12 max-w-2xl">
          <ol>
            {milestones.map(({ title, detail }, index) => (
              <li key={title} className="relative flex gap-6 pb-8 last:pb-0">
                {index < milestones.length - 1 && (
                  <span
                    className="absolute bottom-0 left-2 top-2 w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative z-10 size-4 shrink-0 rounded-full border-4 border-background bg-primary"
                  aria-hidden="true"
                />
                <div className="min-w-0 pb-1">
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
        </div>
      </div>
    </section>
  );
}
