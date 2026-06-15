import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-muted text-sm mb-3">Hey, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-2">
            Ahmad Luthfi Hanif
          </h1>
          <p className="text-xl text-blue font-light mb-6">Backend Developer</p>

          <blockquote className="border-l-2 border-orange pl-4 mb-8 text-left">
            <p className="text-subtle text-sm italic leading-relaxed">
              "That is what it means to be a true martial artist: constantly
              learning and adapting, always testing and overcoming your limits."
            </p>
            <p className="text-subtle text-xs mt-2">— Skirk</p>
          </blockquote>

          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-orange hover:bg-orange-hover text-bg px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="border border-orange text-orange hover:bg-orange/10 px-6 py-2.5 rounded-md text-sm transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-orange overflow-hidden">
            <Image
              src="/images/kendo.jpg"
              alt="Ahmad Luthfi Hanif"
              width={176}
              height={176}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
