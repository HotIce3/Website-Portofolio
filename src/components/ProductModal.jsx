import React, { useState } from "react";
import { X, ShoppingCart } from "lucide-react";

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onClose();
  };

  return (
    // Tambahkan p-4 agar modal tidak menempel ke tepi layar HP
    <div className="modal-overlay p-4" onClick={onClose}>
      <div
        className="modal-content relative bg-white dark:bg-coffee-dark w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-coffee-gold text-coffee-dark rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Gambar Full Height */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details dengan Padding lebih besar */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-coffee-gold/20 text-coffee-gold text-sm font-bold rounded-full mb-4">
              {product.category}
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-coffee-dark dark:text-coffee-gold mb-4 leading-tight">
              {product.name}
            </h2>

            <p className="text-coffee-dark dark:text-coffee-cream text-opacity-80 mb-8 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="mb-8 pb-8 border-b border-coffee-gold/20">
              <p className="text-sm text-coffee-dark/60 dark:text-coffee-cream/60 mb-1">
                Harga Satuan
              </p>
              <p className="font-display text-4xl font-bold text-coffee-gold">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border-2 border-coffee-gold rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-coffee-gold hover:text-coffee-dark transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center bg-transparent font-bold focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-coffee-gold hover:text-coffee-dark transition-colors"
                >
                  +
                </button>
              </div>
              <div className="text-sm text-coffee-dark/70 dark:text-coffee-cream/70">
                Subtotal:{" "}
                <span className="font-bold">
                  Rp {(product.price * quantity).toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-lg shadow-lg"
            >
              <ShoppingCart size={20} />
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
