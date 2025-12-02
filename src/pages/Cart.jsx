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
      }, 2000);
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Gagal membuat pesanan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black flex items-center justify-center py-20">
        <div className="container-xl text-center max-w-md">
          <div className="mb-6 text-6xl">✓</div>
          <h1 className="font-display text-3xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
            Pesanan Berhasil!
          </h1>
          <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 mb-8">
            Terima kasih telah memesan kopi dari Kopi Nusantara Brew. Pesanan
            Anda sedang diproses.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-cream dark:bg-coffee-black py-12">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/menu"
            className="flex items-center gap-2 text-coffee-gold hover:text-coffee-gold/80 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Kembali ke Menu
          </Link>
          <h1 className="font-display text-4xl font-bold text-coffee-dark dark:text-coffee-gold">
            Keranjang Belanja
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold mb-4">
              Keranjang Anda Kosong
            </h2>
            <p className="text-coffee-dark dark:text-coffee-cream text-opacity-70 mb-8">
              Silakan pilih kopi favorit Anda dari menu.
            </p>
            <Link to="/menu" className="btn-primary inline-block">
              Belanja Sekarang
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-coffee-dark rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center coffee-shadow hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-xl"
                    />

                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-display text-xl font-bold text-coffee-dark dark:text-coffee-gold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-coffee-dark dark:text-coffee-cream text-opacity-70 mb-3">
                        {item.category}
                      </p>
                      <p className="font-display text-xl font-bold text-coffee-gold">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-gray-100 dark:bg-black/20 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="px-3 py-2 hover:bg-coffee-gold hover:text-coffee-dark rounded-l-lg transition-colors"
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-2 hover:bg-coffee-gold hover:text-coffee-dark rounded-r-lg transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-red-500 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors"
                        title="Hapus Item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-coffee-dark text-coffee-cream rounded-xl p-8 coffee-shadow sticky top-24">
                <h2 className="font-display text-2xl font-bold text-coffee-gold mb-6">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-coffee-gold border-opacity-20">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold">
                      Rp {getTotal().toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pengiriman:</span>
                    <span className="font-bold text-coffee-gold">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8 text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-display text-2xl font-bold text-coffee-gold">
                    Rp {getTotal().toLocaleString("id-ID")}
                  </span>
                </div>

                <button
                  onClick={() => setIsCheckout(!isCheckout)}
                  className="w-full btn-primary"
                >
                  {isCheckout ? "Batal" : "Lanjut ke Checkout"}
                </button>
              </div>

              {/* Checkout Form */}
              {isCheckout && (
                <form
                  onSubmit={handleCheckout}
                  className="mt-6 bg-white dark:bg-coffee-dark rounded-xl p-6 coffee-shadow"
                >
                  <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-4">
                    Data Pengiriman
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nomor HP
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Alamat Pengiriman
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        rows="3"
                        className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Metode Pembayaran
                      </label>
                      <select
                        name="method"
                        value={formData.method}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                      >
                        <option value="cash">Tunai (COD)</option>
                        <option value="transfer">Transfer Bank</option>
                        <option value="e-wallet">E-Wallet</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Memproses..." : "Pesan Sekarang"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
