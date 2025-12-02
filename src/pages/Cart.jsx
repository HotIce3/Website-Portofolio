import React, { useState } from "react";
import { Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { createOrder } from "../utils/supabase";

export default function Cart() {
  const { cart, removeItem, updateQuantity, getTotal, clear } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    method: "cash",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Mohon isi semua data yang diperlukan");
      return;
    }

    setIsSubmitting(true);
    try {
      const orderData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        items: JSON.stringify(cart),
        total_price: getTotal(),
        status: "pending",
        created_at: new Date().toISOString(),
      };

      await createOrder(orderData);
      setOrderSuccess(true);
      clear();

      setTimeout(() => {
        setOrderSuccess(false);
        setIsCheckout(false);
        setFormData({ name: "", phone: "", address: "", method: "cash" });
      }, 3000);
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Gagal membuat pesanan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black flex items-center justify-center p-4">
        <div className="bg-white dark:bg-coffee-dark p-12 rounded-3xl coffee-shadow text-center max-w-lg w-full animate-slideUp">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h1 className="font-display text-3xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Pesanan Berhasil!
          </h1>
          <p className="text-coffee-dark/70 dark:text-coffee-cream/70 mb-8 leading-relaxed">
            Terima kasih telah memesan kopi dari Kopi Nusantara Brew. Kami akan
            segera memproses pesanan Anda.
          </p>
          <Link to="/" className="btn-primary w-full inline-block">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black pt-28 pb-20">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-coffee-gold hover:text-coffee-dark dark:hover:text-coffee-cream transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Kembali ke Menu
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-dark dark:text-coffee-gold">
            Keranjang Belanja
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white/50 dark:bg-coffee-dark/30 rounded-3xl border border-coffee-gold/10">
            <div className="text-6xl mb-6 opacity-50">🛒</div>
            <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
              Keranjang Anda Kosong
            </h2>
            <p className="text-coffee-dark/70 dark:text-coffee-cream/70 mb-8">
              Belum ada kopi yang dipilih. Yuk, cari kopi favoritmu!
            </p>
            <Link to="/menu" className="btn-primary">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-coffee-dark rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center coffee-shadow hover:shadow-lg transition-all duration-300 border border-transparent hover:border-coffee-gold/20"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-xl shadow-sm"
                  />

                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-display text-xl font-bold text-coffee-dark dark:text-coffee-gold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-coffee-dark/60 dark:text-coffee-cream/60 mb-3 bg-gray-100 dark:bg-white/5 inline-block px-3 py-1 rounded-full">
                      {item.category}
                    </p>
                    <p className="font-display text-xl font-bold text-coffee-gold">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-coffee-gold/30 rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="px-3 py-2 hover:bg-coffee-gold hover:text-coffee-dark transition-colors"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-2 hover:bg-coffee-gold hover:text-coffee-dark transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title="Hapus"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-coffee-dark text-coffee-cream rounded-3xl p-8 shadow-2xl sticky top-28 border border-coffee-gold/20">
                <h2 className="font-display text-2xl font-bold text-coffee-gold mb-8">
                  Ringkasan
                </h2>

                <div className="space-y-4 mb-8 pb-8 border-b border-coffee-gold/20">
                  <div className="flex justify-between text-coffee-cream/80">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      Rp {getTotal().toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex justify-between text-coffee-cream/80">
                    <span>Pengiriman</span>
                    <span className="font-semibold text-green-400">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8 items-end">
                  <span className="font-bold text-lg">Total Bayar</span>
                  <span className="font-display text-3xl font-bold text-coffee-gold">
                    Rp {getTotal().toLocaleString("id-ID")}
                  </span>
                </div>

                {!isCheckout ? (
                  <button
                    onClick={() => setIsCheckout(true)}
                    className="w-full btn-primary py-4 text-lg shadow-lg hover:shadow-coffee-gold/20"
                  >
                    Lanjut Checkout
                  </button>
                ) : (
                  <button
                    onClick={() => setIsCheckout(false)}
                    className="w-full py-3 text-coffee-cream/70 hover:text-white transition-colors text-sm mb-4"
                  >
                    Kembali
                  </button>
                )}

                {/* Checkout Form inside Summary for mobile-friendly flow */}
                {isCheckout && (
                  <form
                    onSubmit={handleCheckout}
                    className="space-y-4 animate-fadeIn"
                  >
                    <div className="bg-white/5 p-4 rounded-xl space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg focus:outline-none focus:border-coffee-gold text-sm"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Nomor WhatsApp"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg focus:outline-none focus:border-coffee-gold text-sm"
                        required
                      />
                      <textarea
                        name="address"
                        placeholder="Alamat Lengkap"
                        value={formData.address}
                        onChange={handleFormChange}
                        rows="2"
                        className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg focus:outline-none focus:border-coffee-gold text-sm"
                        required
                      ></textarea>
                      <select
                        name="method"
                        value={formData.method}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-coffee-black/50 border border-coffee-gold/30 rounded-lg focus:outline-none focus:border-coffee-gold text-sm"
                      >
                        <option value="cash">Tunai (COD)</option>
                        <option value="transfer">Transfer Bank</option>
                        <option value="e-wallet">QRIS / E-Wallet</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Memproses..." : "Buat Pesanan Sekarang"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
