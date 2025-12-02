import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    // Typing animation
    const heading = document.querySelector(".hero-heading");
    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    const subheading = document.querySelector(".hero-subheading");
    if (subheading) {
      gsap.fromTo(
        subheading,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }

    const cta = document.querySelector(".hero-cta");
    if (cta) {
      gsap.fromTo(
        cta,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
      );
    }

    // Button hover animation
    const buttons = document.querySelectorAll(".hero-cta a");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.3 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Coffee Theme */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&q=60)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-coffee-dark/80"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coffee-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-coffee-cream rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-xl text-center py-20">
        <h1 className="hero-heading font-display text-5xl md:text-7xl font-bold text-coffee-cream mb-6 drop-shadow-lg">
          Kopi <span className="text-coffee-gold">Nusantara</span> Brew
        </h1>

        <p className="hero-subheading text-xl md:text-2xl text-coffee-cream text-opacity-90 mb-12 max-w-3xl mx-auto drop-shadow-md">
          Pengalaman kopi premium dengan cita rasa autentik Nusantara. Setiap
          cangkir adalah perjalanan.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="btn-primary inline-block shadow-lg hover:shadow-xl"
          >
            Lihat Menu Kami
          </Link>
          <Link
            to="/contact"
            className="btn-secondary inline-block shadow-lg hover:shadow-xl"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-coffee-gold drop-shadow-md" />
      </div>
    </section>
  );
}
