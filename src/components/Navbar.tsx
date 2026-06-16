"use client";

import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const links = [
    "About",
    "Skills",
    "Projects",
    "Credentials",
    "Gallery",
    "Contact",
  ];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.toLowerCase());
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="sticky top-0 z-20 border-b border-navy bg-bg/80 backdrop-blur-md px-10 py-4">
      <div className="flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={100}
          offset={-50}
          className="flex items-center gap-2 text-orange cursor-pointer"
        >
          <Code2 size={22} />
          <span className="font-bold text-lg tracking-wide">Personalfolio</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={100}
              offset={-70}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                active === item.toLowerCase()
                  ? "text-orange"
                  : "text-muted hover:text-orange"
              }`}
            >
              {item}
            </Link>
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
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={100}
            offset={-295}
            onClick={() => setOpen(false)}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              active === item.toLowerCase()
                ? "text-orange"
                : "text-muted hover:text-orange"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
