import { Hero } from "@/components/hero";
import { CurrentState } from "@/components/current-state";
import { SixPillars } from "@/components/six-pillars";
import {
  ComputerScienceRoadmap,
  QuranPractice,
} from "@/components/system-practice";
import { VisionTimeline } from "@/components/vision-timeline";
import { Workspace } from "@/components/workspace";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentState />
      <SixPillars />
      <ComputerScienceRoadmap />
      <QuranPractice />
      <Workspace />
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
