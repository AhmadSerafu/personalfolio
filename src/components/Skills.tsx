import { Layers } from "lucide-react";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-10 pt-16 pb-20 border-t border-navy"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Layers size={16} className="text-orange" />
          <p className="text-orange text-xs uppercase tracking-widest">
            Skills
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-text mb-8">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-surface border border-navy rounded-xl p-5 min-h-40"
            >
              <p className="text-orange text-xs uppercase tracking-widest mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-navy text-blue text-xs px-2.5 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
