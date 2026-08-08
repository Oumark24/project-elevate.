import { Hero } from "@/components/hero";
import { CurrentState } from "@/components/current-state";
import { SixPillars } from "@/components/six-pillars";
import {
  ComputerScienceRoadmap,
  QuranPractice,
} from "@/components/system-practice";
import { FinancialSystem } from "@/components/financial-system";
import { FamilyPlan } from "@/components/family-plan";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { VisionTimeline } from "@/components/vision-timeline";
import { Workspace } from "@/components/workspace";

export default function Home() {
  return (
    <main>
      <Hero />
      <RevealOnScroll>
        <CurrentState />
      </RevealOnScroll>
      <RevealOnScroll>
        <SixPillars />
      </RevealOnScroll>
      <RevealOnScroll>
        <ComputerScienceRoadmap />
      </RevealOnScroll>
      <RevealOnScroll>
        <QuranPractice />
      </RevealOnScroll>
      <RevealOnScroll>
        <Workspace />
      </RevealOnScroll>
      <RevealOnScroll>
        <FinancialSystem />
      </RevealOnScroll>
      <RevealOnScroll>
        <VisionTimeline />
      </RevealOnScroll>
      <RevealOnScroll>
        <FamilyPlan />
      </RevealOnScroll>
    </main>
  );
}
