import React, { useState } from "react";
import MenuGrid from "../components/MenuGrid";

export default function Menu() {
  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black">
      <div className="pt-12 pb-8">
        <div className="container-xl text-center">
          <h1 className="font-display text-5xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Menu Lengkap
          </h1>
          <p className="text-lg text-coffee-dark dark:text-coffee-cream text-opacity-70 max-w-2xl mx-auto">
            Jelajahi koleksi kopi premium kami yang dipilih dengan cermat dari
            berbagai daerah di Nusantara.
          </p>
        </div>
      </div>

      <MenuGrid limit={null} showViewMore={false} />
    </div>
  );
}
