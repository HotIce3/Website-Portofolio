import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useMenu, getDemoMenu } from "../hooks/useMenu";
import { useCart } from "../hooks/useCart";
import ProductModal from "./ProductModal";

export default function MenuGrid({ limit, showViewMore = false }) {
  const { menu, loading } = useMenu();
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [displayMenu, setDisplayMenu] = useState([]);

  useEffect(() => {
    let filteredMenu = menu.length > 0 ? menu : getDemoMenu();

    if (category !== "All") {
      filteredMenu = filteredMenu.filter((item) => item.category === category);
    }

    if (limit) {
      filteredMenu = filteredMenu.slice(0, limit);
    }

    setDisplayMenu(filteredMenu);
  }, [menu, category, limit]);

  const categories = ["All", "Hot", "Ice", "Milk-based", "Non-coffee"];

  return (
    <section
      id="menu"
      className="section-padding-y bg-coffee-cream dark:bg-coffee-black"
    >
      <div className="container-xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-coffee-gold font-bold tracking-widest text-sm uppercase mb-2 block">
            Discover Our Taste
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coffee-dark dark:text-coffee-gold mb-6">
            Menu Pilihan
          </h2>
          <p className="text-lg text-coffee-dark/80 dark:text-coffee-cream/80 max-w-2xl mx-auto leading-relaxed">
            Nikmati koleksi kopi premium kami yang dipilih dengan cermat dari
            berbagai daerah di Nusantara.
          </p>
        </div>

        {/* Category Filter - Lebih besar & lega */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 tracking-wide ${
                category === cat
                  ? "bg-coffee-gold text-coffee-dark shadow-lg transform scale-105"
                  : "bg-coffee-dark dark:bg-coffee-cream text-coffee-cream dark:text-coffee-dark hover:bg-coffee-gold hover:text-coffee-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid - Gap diperbesar agar tidak rapat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {displayMenu.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-coffee-dark rounded-3xl overflow-hidden coffee-shadow card-hover cursor-pointer h-full flex flex-col"
              onClick={() => setSelectedProduct(item)}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-coffee-gold text-coffee-dark text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Card - Padding diperbesar (p-8) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold mb-3 group-hover:text-coffee-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-coffee-dark/70 dark:text-coffee-cream/70 mb-8 line-clamp-2 leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-coffee-gold/20 mt-auto">
                  <span className="font-display text-2xl font-bold text-coffee-gold">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(item);
                    }}
                    className="w-12 h-12 flex items-center justify-center bg-coffee-dark dark:bg-coffee-gold text-white dark:text-coffee-dark rounded-full hover:bg-coffee-gold dark:hover:bg-white transition-all shadow-md"
                    title="Tambah ke Keranjang"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {showViewMore && (
          <div className="text-center">
            <a href="/menu" className="btn-primary">
              Lihat Semua Menu
            </a>
          </div>
        )}

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addItem}
          />
        )}
      </div>
    </section>
  );
}
