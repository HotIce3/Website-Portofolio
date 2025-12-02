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
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Menu Pilihan
          </h2>
          <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 max-w-2xl mx-auto">
            Nikmati koleksi kopi premium kami yang dipilih dengan cermat dari
            berbagai daerah di Nusantara.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                category === cat
                  ? "bg-coffee-gold text-coffee-dark"
                  : "bg-coffee-dark dark:bg-coffee-cream text-coffee-cream dark:text-coffee-dark hover:bg-coffee-gold hover:text-coffee-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayMenu.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-coffee-dark rounded-xl overflow-hidden coffee-shadow hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(item)}
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-coffee-gold bg-opacity-20 text-coffee-gold text-xs font-bold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold text-coffee-dark dark:text-coffee-gold mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-display text-2xl font-bold text-coffee-gold">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(item);
                    }}
                    className="p-2 bg-coffee-gold text-coffee-dark rounded-lg hover:bg-coffee-dark hover:text-coffee-gold transition-all"
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
            <a href="/menu" className="btn-primary inline-block">
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
