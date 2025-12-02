import React, { useState, useEffect } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import { getMenu } from "../utils/supabase";
import { getDemoMenu } from "../hooks/useMenu";

export default function AdminMenuManager() {
  const [menu, setMenu] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Hot",
    description: "",
    price: "",
    image_url: "",
  });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await getMenu();
      setMenu(data || getDemoMenu());
    } catch (error) {
      console.error("Error fetching menu:", error);
      setMenu(getDemoMenu());
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update menu item
      setMenu(
        menu.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
      setEditingId(null);
    } else {
      // Add new menu item
      const newItem = {
        id: Math.max(...menu.map((m) => m.id), 0) + 1,
        ...formData,
        price: parseInt(formData.price),
        created_at: new Date().toISOString(),
      };
      setMenu([...menu, newItem]);
    }

    setFormData({
      name: "",
      category: "Hot",
      description: "",
      price: "",
      image_url: "",
    });
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus item ini?")) {
      setMenu(menu.filter((item) => item.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      name: "",
      category: "Hot",
      description: "",
      price: "",
      image_url: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold">
          Menu Management
        </h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add Menu Item
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-6">
            {editingId ? "Edit Menu Item" : "Add New Menu Item"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
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
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                >
                  <option value="Hot">Hot</option>
                  <option value="Ice">Ice</option>
                  <option value="Milk-based">Milk-based</option>
                  <option value="Non-coffee">Non-coffee</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                rows="3"
                className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price (Rp)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                  placeholder="https://..."
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="btn-primary flex-1">
                {editingId ? "Update" : "Create"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Menu Items Table */}
      <div className="bg-white dark:bg-coffee-dark rounded-lg overflow-hidden coffee-shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-coffee-gold bg-opacity-20">
              <tr>
                <th className="text-left py-4 px-6 font-bold">Image</th>
                <th className="text-left py-4 px-6 font-bold">Name</th>
                <th className="text-left py-4 px-6 font-bold">Category</th>
                <th className="text-left py-4 px-6 font-bold">Price</th>
                <th className="text-left py-4 px-6 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-coffee-gold border-opacity-10 hover:bg-coffee-gold hover:bg-opacity-10"
                >
                  <td className="py-4 px-6">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/50";
                      }}
                    />
                  </td>
                  <td className="py-4 px-6 font-semibold">{item.name}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-coffee-gold bg-opacity-20 text-coffee-gold rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-coffee-gold">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-500 hover:bg-blue-100 rounded transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-500 hover:bg-red-100 rounded transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
