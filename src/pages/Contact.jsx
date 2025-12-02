import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black pt-24 pb-12">
      <div className="container-xl text-center mb-16">
        <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
          Support Center
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-coffee-dark dark:text-coffee-gold mb-6">
          Hubungi Kami
        </h1>
        <p className="text-lg text-coffee-dark/80 dark:text-coffee-cream/80 max-w-2xl mx-auto leading-relaxed">
          Punya pertanyaan seputar kopi, kemitraan, atau sekadar ingin menyapa?
          Tim kami siap membantu Anda.
        </p>
      </div>

      <Contact />
    </div>
  );
}
