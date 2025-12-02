import React from "react";
import MenuGrid from "../components/MenuGrid";

export default function Menu() {
  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black pt-24 pb-12">
      <div className="container-xl text-center mb-12">
        <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
          Full Catalog
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-coffee-dark dark:text-coffee-gold mb-6">
          Menu Lengkap
        </h1>
        <p className="text-lg text-coffee-dark/80 dark:text-coffee-cream/80 max-w-2xl mx-auto leading-relaxed">
          Jelajahi setiap varian rasa yang kami tawarkan. Dari classic espresso
          hingga signature drink kekinian.
        </p>
      </div>

      {/* Tampilkan semua menu tanpa tombol 'View More' */}
      <MenuGrid limit={null} showViewMore={false} />
    </div>
  );
}
