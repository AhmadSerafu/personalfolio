import { Code2 } from "lucide-react";

export default function Navbar() {
  const links = ["About", "Skills", "Projects", "Credentials", "Contact"];

  return (
    <nav className="sticky top-0 z-10 border-b border-navy bg-bg/80 backdrop-blur-md px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-orange">
        <Code2 size={22} />
        <span className="font-bold text-lg tracking-wide">Personalfolio</span>
      </div>
      <div className="flex gap-8">
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
    </nav>
  );
}
