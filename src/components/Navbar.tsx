"use client";

import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

export default function Navbar() {
  const links = ["About", "Skills", "Projects", "Credentials", "Contact"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b border-navy bg-bg/80 backdrop-blur-md px-10 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-orange">
          <Code2 size={22} />
          <span className="font-bold text-lg tracking-wide">Personalfolio</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="text-muted text-sm font-medium hover:text-orange transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-muted hover:text-orange transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64 pt-4 pb-2 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {links.map((item) => (
          <a
            key={item}
            href={"#" + item.toLowerCase()}
            onClick={() => setOpen(false)}
            className="text-muted text-sm font-medium hover:text-orange transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
