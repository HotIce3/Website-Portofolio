import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuGrid from "../components/MenuGrid";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@next/dist/aos.js";
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          offset: 100,
          duration: 1000,
          once: false,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <MenuGrid limit={6} showViewMore={true} />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
