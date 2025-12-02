import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuGrid from "../components/MenuGrid";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    // Initialize AOS with updated settings for smoother animations
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@next/dist/aos.js";
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          offset: 120, // Trigger sedikit lebih lambat agar tidak kaget
          duration: 800,
          easing: "ease-out-cubic",
          once: true, // Animasi hanya sekali agar tidak berat saat scroll naik-turun
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      {/* Show top 6 items on homepage */}
      <MenuGrid limit={6} showViewMore={true} />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
