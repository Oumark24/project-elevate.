"use client";

import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "My Goals", href: "#goals", id: "goals" },
  { label: "My System", href: "#system", id: "system" },
  { label: "My Future", href: "#future", id: "future" },
  { label: "Family Plan", href: "#family", id: "family" },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("overview");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const hadDrawerOpen = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.5, 0.9] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drawerOpen) {
      document.body.style.removeProperty("overflow");
      if (hadDrawerOpen.current) {
        triggerRef.current?.focus();
      }
      return;
    }

    hadDrawerOpen.current = true;
    document.body.style.overflow = "hidden";
    drawerRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.removeProperty("overflow");
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#overview"
          className="text-sm font-semibold tracking-wide text-foreground"
          onClick={() => setActiveSection("overview")}
        >
          Project Elevate
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`rounded-sm text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    activeSection === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={
                    activeSection === item.id ? "location" : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          className="size-11 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-navigation"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-steel"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <motion.aside
              id="mobile-navigation"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              tabIndex={-1}
              className="flex h-full flex-col p-4 outline-none sm:p-6"
              initial={prefersReducedMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? undefined : { x: "100%" }}
              transition={transition}
            >
              <div className="flex h-12 items-center justify-between">
                <span className="text-sm font-semibold tracking-wide">
                  Project Elevate
                </span>
                <button
                  type="button"
                  className="size-11 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>
              <nav aria-label="Mobile navigation" className="mt-8">
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={`block rounded-md px-3 py-3 text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          activeSection === item.id
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                        aria-current={
                          activeSection === item.id ? "location" : undefined
                        }
                        onClick={closeDrawer}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
