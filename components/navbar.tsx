"use client";

import { useState } from "react";
import { NavItem } from "@/lib/data/nav";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleScroll(id: string) {
    const el = document.getElementById(id);
    if(!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex mx-auto max-w-6xl items-center justify-center px-6 py-4 backdrop-blur-md bg-background/60">
        <ul className="flex items-center gap-6">
          {NavItem.map((item) => (
            <li key={item.id}>
              <button
                onClick={()=>handleScroll(item.id)}
                className="text-md text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden flex justify-center items-center max-w-6xl px-6 py-4 backdrop-blur-md bg-background/60">
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex items-center text-md text-foreground/80 hover:text-foreground gap-1"
        >
          Menu 
          <FiChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} size={23}/>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden backdrop-blur-md bg-background/90 border-b border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6">
            {NavItem.map((item) => (
              <li key={item.id}>
                <button
                  onClick={()=> handleScroll(item.id)}
                  className="text-sm text-foreground transition-colors hover:text-foreground/80"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
