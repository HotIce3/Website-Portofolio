import React from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    alt: "Coffee Roasting Process",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=800&h=600&fit=crop",
    alt: "Perfect Espresso Shot",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    alt: "Cozy Cafe Atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
    alt: "Barista Pouring Latte",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    alt: "Fresh Coffee Beans",
  },
  {
    src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&h=600&fit=crop",
    alt: "V60 Brewing Method",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <section className="section-padding-y bg-coffee-dark text-coffee-cream">
      <div className="container-xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
            Our Moments
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-gold mb-6">
            Galeri Kopi
          </h2>
          <p className="text-coffee-cream/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Intip momen di balik layar. Dari biji kopi pilihan hingga menjadi
            secangkir kebahagiaan di tangan Anda.
          </p>
        </div>

        {/* Masonry Grid - Layout lebih lega */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl coffee-shadow cursor-pointer group h-72 md:h-80 ${
                index === 0 ? "md:col-span-2 md:h-full" : ""
              } ${index === 3 ? "lg:col-span-2 lg:h-full" : ""}`}
              onClick={() => setOpenIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium tracking-wide border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                  Lihat Foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        slides={galleryImages}
        index={openIndex}
      />
    </section>
  );
}
