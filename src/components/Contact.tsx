import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-20 border-t border-navy">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface border border-navy rounded-xl p-8 md:p-12 text-center">
          <p className="text-orange text-xs uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-text mb-4">
            Let's work together
          </h2>
          <p className="text-muted text-sm mb-8 max-w-md mx-auto">
            Open to backend and full-stack opportunities. Currently in Jakarta,
            willing to relocate anywhere.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={"mailto:" + contact.email}
              className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-bg px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              <Mail size={15} />
              Send Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-navy text-blue hover:bg-navy/50 px-5 py-2.5 rounded-md text-sm transition-colors"
            >
              <FaLinkedin size={15} />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-navy text-muted hover:bg-navy/50 px-5 py-2.5 rounded-md text-sm transition-colors"
            >
              <FaGithub size={15} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
