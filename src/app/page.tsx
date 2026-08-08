import { Hero } from "@/components/hero";
import { CurrentState } from "@/components/current-state";
import { SixPillars } from "@/components/six-pillars";
import {
  ComputerScienceRoadmap,
  QuranPractice,
} from "@/components/system-practice";
import { FinancialSystem } from "@/components/financial-system";
import { FamilyPlan } from "@/components/family-plan";
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
      <FinancialSystem />
      <VisionTimeline />
      <FamilyPlan />
    </main>
  );
}
