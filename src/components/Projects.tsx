import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 pt-16 pb-20 border-t border-navy"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-orange text-xs uppercase tracking-widest mb-2">
          Projects
        </p>
        <h2 className="text-2xl font-semibold text-text mb-8">
          What I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-navy rounded-xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange z-10" />

              <div className="w-full h-52 overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={192}
                  className={`w-full h-full ${project.title === "Strings" ? "object-contain" : "object-cover object-top"}`}
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-text font-semibold text-base">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-orange text-bg text-xs font-semibold px-2 py-0.5 rounded shrink-0">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-subtle text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-bg border border-navy text-blue text-xs px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-orange text-xs hover:underline"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-subtle text-xs hover:text-muted"
                    >
                      <FaGithub size={12} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
