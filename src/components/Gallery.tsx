"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    src: "/images/gallery/featured.jpg",
    alt: "1st Place Team Division, Surabaya Kendo Open 2025",
  },
  { src: "/images/gallery/kendo-1.jpg", alt: "Kendo match action" },
  { src: "/images/gallery/kendo-2.jpg", alt: "Kendo match action" },
  { src: "/images/gallery/hacktiv8-1.jpg", alt: "Hacktiv8 cohort HCK-94" },
  { src: "/images/gallery/hacktiv8-2.jpg", alt: "Presenting at Hacktiv8" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section
      id="gallery"
      className="px-6 md:px-10 pt-16 pb-20 border-t border-navy"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Images size={16} className="text-orange" />
          <p className="text-orange text-xs uppercase tracking-widest">
            Gallery
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-text mb-8">
          Beyond the Code
        </h2>

        <div className="flex flex-col md:flex-row gap-3 md:h-120">
          <div
            className="md:flex-2 h-64 md:h-auto rounded-xl overflow-hidden cursor-pointer group relative"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-3 md:grid-rows-4">
            {photos.slice(1).map((photo, i) => (
              <div
                key={photo.src}
                className="rounded-xl overflow-hidden cursor-pointer group relative h-32 md:h-auto"
                onClick={() => {
                  setIndex(i + 1);
                  setOpen(true);
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105 ${i === 3 ? "object-top" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  );
}
