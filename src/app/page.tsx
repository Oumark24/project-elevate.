import { Hero } from "@/components/hero";
import { CurrentState } from "@/components/current-state";
import { SixPillars } from "@/components/six-pillars";
import { VisionTimeline } from "@/components/vision-timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentState />
      <SixPillars />
      <VisionTimeline />
      <section
        id="family"
        className="flex min-h-screen scroll-mt-16 items-center justify-center p-8"
      >
        <h1 className="text-2xl font-medium text-muted-foreground">
          Family Plan
        </h1>
      </section>
    </main>
  );
}
