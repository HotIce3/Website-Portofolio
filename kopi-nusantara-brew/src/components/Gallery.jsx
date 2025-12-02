import React from "react";
import { Lightbox, Inline } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f2?w=800&h=600&fit=crop",
    alt: "Coffee Roasting",
  },
  {
    src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
    alt: "Latte Art",
  },
  {
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f2?w=800&h=600&fit=crop",
    alt: "Café Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1464075314278-fcc92037dac9?w=800&h=600&fit=crop",
    alt: "Coffee Shop",
  },
  {
    src: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=800&h=600&fit=crop",
    alt: "Coffee Beans",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    alt: "Pour Over",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = React.useState(-1);

  return (
    <section className="py-20 bg-coffee-dark">
      <div className="container-xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-coffee-cream mb-4">
            Galeri Kopi
          </h2>
          <p className="text-coffee-cream text-opacity-70 max-w-2xl mx-auto">
            Nikmati momen di balik setiap cangkir kopi kami. Dari proses
            roasting hingga latte art yang sempurna.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl coffee-shadow cursor-pointer group ${
                index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => setOpenIndex(index)}
              data-aos="fade-up"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-lg font-semibold">
                    Lihat Lebih Besar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIndex >= 0 && (
        <Lightbox
          open={true}
          close={() => setOpenIndex(-1)}
          slides={galleryImages}
          index={openIndex}
          onChange={setOpenIndex}
        />
      )}
    </section>
  );
}
