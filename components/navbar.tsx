"use client";

import { useEffect, useState } from "react";
import { NavItem } from "@/lib/data/nav";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");

  function handleScroll(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // ========== section track ==========
  useEffect(() => {
    const sections = NavItem.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 z-50 w-full pointer-events-none">
      {/* ========== desktop navbar ========== */}
      <nav className="hidden md:flex pointer-events-auto mx-auto max-w-fit items-center justify-center rounded-full border border-white/10 bg-background/60 backdrop-blur-xl px-4 py-2 shadow-lg">
        <ul className="flex items-center gap-1">
          {NavItem.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "text-foreground bg-white/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <Icon
                    size={16}
                    className={`relative -top-px transition ${
                      isActive
                        ? "drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                        : "group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ========== mobile navbar ========== */}
      <nav className="md:hidden pointer-events-auto mx-auto max-w-fit rounded-full border border-white/10 bg-background/70 backdrop-blur-xl px-4 py-2 shadow-lg">
        <ul className="flex items-center gap-6">
          {NavItem.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="flex items-center justify-center p-2"
                >
                  <Icon
                    size={20}
                    className={`
                transition-all
                ${
                  isActive
                    ? "text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                    : "text-foreground/50"
                }
              `}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
