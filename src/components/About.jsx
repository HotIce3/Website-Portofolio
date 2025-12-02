import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-image", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: -50,
        duration: 2,
      });

      gsap.to(".about-text", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top center",
          end: "center center",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section section-padding-y bg-coffee-cream dark:bg-coffee-dark">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop"
              alt="Coffee Roasting"
              className="rounded-2xl coffee-shadow"
            />
          </div>

          {/* Text */}
          <div className="about-text opacity-0 translate-y-8">
            <h2 className="font-display text-4xl font-bold text-coffee-dark dark:text-coffee-gold mb-6">
              Tentang Kopi Nusantara
            </h2>

            <p className="text-lg text-coffee-dark dark:text-coffee-cream text-opacity-80 mb-4">
              Kami adalah kopi shop premium yang menghadirkan pengalaman cita
              rasa autentik kopi Nusantara. Setiap biji kopi dipilih dengan
              cermat dari petani lokal terbaik di berbagai daerah di Indonesia.
            </p>

            <p className="text-lg text-coffee-dark dark:text-coffee-cream text-opacity-80 mb-6">
              Dengan proses roasting yang sempurna dan brewing technique yang
              modern, kami menciptakan setiap cangkir dengan passion dan
              expertise. Kopi bukan sekadar minuman, tapi adalah cerita dan
              budaya.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Kopi Berkualitas Premium
                  </h3>
                  <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Biji kopi pilihan dari seluruh Nusantara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Brewing Excellence
                  </h3>
                  <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Teknik brewing modern dengan sentuhan tradisional
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-dark font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold mb-1">
                    Sustainable & Ethical
                  </h3>
                  <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Mendukung petani lokal dan lingkungan berkelanjutan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
