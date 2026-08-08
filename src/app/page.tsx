import { Hero } from "@/components/hero";

const sections = [
  { id: "goals", label: "My Goals" },
  { id: "system", label: "My System" },
  { id: "future", label: "My Future" },
  { id: "family", label: "Family Plan" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-screen scroll-mt-16 items-center justify-center p-8"
        >
          <h1 className="text-2xl font-medium text-muted-foreground">
            {section.label}
          </h1>
        </section>
      ))}
    </main>
  );
}
