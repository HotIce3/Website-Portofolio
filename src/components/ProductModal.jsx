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
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content bg-coffee-cream dark:bg-coffee-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div>
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div>
            <span className="inline-block px-3 py-1 bg-coffee-gold bg-opacity-20 text-coffee-gold text-xs font-bold rounded-full mb-3">
              {product.category}
            </span>

            <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold mb-3">
              {product.name}
            </h2>

            <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 mb-6">
              {product.description}
            </p>

            <div className="mb-6 pb-6 border-b border-coffee-gold border-opacity-20">
              <p className="font-display text-3xl font-bold text-coffee-gold">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-coffee-dark dark:text-coffee-cream mb-2">
                Jumlah:
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-coffee-gold hover:bg-coffee-dark text-coffee-dark hover:text-coffee-gold rounded-lg transition-all"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 text-center border-2 border-coffee-gold rounded-lg px-2 py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-coffee-gold hover:bg-coffee-dark text-coffee-dark hover:text-coffee-gold rounded-lg transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2"
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
