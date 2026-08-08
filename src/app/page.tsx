import { Hero } from "@/components/hero";
import { CurrentState } from "@/components/current-state";
import { VisionTimeline } from "@/components/vision-timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentState />
      <section
        id="system"
        className="flex min-h-screen scroll-mt-16 items-center justify-center p-8"
      >
        <h1 className="text-2xl font-medium text-muted-foreground">
          My System
        </h1>
      </section>
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
