import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black">
      <div className="pt-12 pb-8">
        <div className="container-xl text-center">
          <h1 className="font-display text-5xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-coffee-dark dark:text-coffee-cream text-opacity-70 max-w-2xl mx-auto">
            Punya pertanyaan? Kami siap membantu Anda. Hubungi kami melalui
            berbagai channel yang tersedia.
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
}
