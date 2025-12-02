import React, { useEffect } from "react";
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
        y: -30,
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
    <section className="about-section section-padding-y bg-coffee-cream dark:bg-coffee-dark overflow-hidden">
      <div className="container-xl">
        {/* Gap antar kolom diperbesar (gap-12 md:gap-20) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Wrapper */}
          <div className="about-image relative">
            <div className="absolute inset-0 bg-coffee-gold/10 transform translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
              alt="Coffee Roasting"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>

          {/* Text Content */}
          <div className="about-text opacity-0 translate-y-8">
            <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-dark dark:text-coffee-gold mb-8 leading-tight">
              Tentang Kopi <br /> Nusantara
            </h2>

            <div className="space-y-6 text-lg text-coffee-dark/80 dark:text-coffee-cream/80">
              <p>
                Kami adalah kopi shop premium yang menghadirkan pengalaman cita
                rasa autentik kopi Nusantara. Setiap biji kopi dipilih dengan
                cermat dari petani lokal terbaik di berbagai daerah di
                Indonesia.
              </p>
              <p>
                Dengan proses roasting yang sempurna dan brewing technique yang
                modern, kami menciptakan setiap cangkir dengan passion dan
                expertise. Kopi bukan sekadar minuman, tapi adalah cerita dan
                budaya.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-coffee-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-gold font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold text-lg mb-1">
                    Kopi Berkualitas Premium
                  </h3>
                  <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Biji kopi pilihan dari seluruh Nusantara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-coffee-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-gold font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold text-lg mb-1">
                    Brewing Excellence
                  </h3>
                  <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70">
                    Teknik brewing modern dengan sentuhan tradisional
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-coffee-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-coffee-gold font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold text-lg mb-1">
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
