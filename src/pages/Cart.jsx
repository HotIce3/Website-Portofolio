// Ubah bagian mapping item cart menjadi seperti ini di dalam src/pages/Cart.jsx

<div className="space-y-6">
  {" "}
  {/* Jarak vertikal antar item diperbesar */}
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

      {/* Kontrol Quantity & Hapus */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 dark:bg-black/20 rounded-lg">
          {/* ... tombol quantity ... */}
          {/* Gunakan class yang sama dengan ProductModal untuk konsistensi */}
          <button
            onClick={() =>
              updateQuantity(item.id, Math.max(1, item.quantity - 1))
            }
            className="px-3 py-2 hover:bg-coffee-gold rounded-l-lg transition-colors"
          >
            {" "}
            −{" "}
          </button>
          <span className="w-10 text-center font-bold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-2 hover:bg-coffee-gold rounded-r-lg transition-colors"
          >
            {" "}
            +{" "}
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
</div>;
