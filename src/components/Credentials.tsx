import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="px-6 md:px-10 pt-16 pb-20 border-t border-navy"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-orange text-xs uppercase tracking-widest mb-2">
          Credentials
        </p>
        <h2 className="text-2xl font-semibold text-text mb-8">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-blue text-xs uppercase tracking-widest mb-4">
              Education
            </p>
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-surface border border-navy rounded-xl p-4 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-navy shrink-0 flex items-center justify-center">
                    <Image
                      src={
                        edu.color === "orange"
                          ? "/images/education/hacktiv8.webp"
                          : "/images/education/its.png"
                      }
                      alt={edu.institution}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-text text-sm font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted text-xs mb-1">{edu.degree}</p>
                    <p className="text-subtle text-xs mb-2">{edu.period}</p>
                    {"badge" in edu && (
                      <span className="bg-orange text-bg text-xs font-semibold px-2 py-0.5 rounded">
                        {edu.badge}
                      </span>
                    )}
                    {"transcript" in edu && edu.transcript && (
                      <a
                        href={edu.transcript}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue text-xs hover:underline mt-2"
                      >
                        <FileText size={12} />
                        View Transcript
                      </a>
                    )}
                    {"gpa" in edu && (
                      <p className="text-subtle text-xs">{edu.gpa}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-blue text-xs uppercase tracking-widest mb-4">
              Certifications
            </p>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-surface border border-navy rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-navy">
                    <Image
                      src={
                        cert.icon === "orange"
                          ? "/images/education/hacktiv8.webp"
                          : "/images/hackerrank.png"
                      }
                      alt={cert.issuer}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text text-xs font-medium">{cert.name}</p>
                    <p className="text-subtle text-xs">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange shrink-0"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
