import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import { getTestimonials } from "../utils/supabase";

const demoTestimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    review:
      "Kopi terbaik yang pernah saya coba! Rasanya authentic dan ambiance cafénya sangat premium.",
    rating: 5,
    image_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    review:
      "Tempat favorit saya untuk bekerja. Kopi-nya smooth dan barista-nya sangat friendly.",
    rating: 5,
    image_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
    image_url: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const data = await getTestimonials();
      setTestimonials(data || demoTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials(demoTestimonials);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setTestimonials(
        testimonials.map((t) =>
          t.id === editingId
            ? { ...t, ...formData, rating: parseInt(formData.rating) }
            : t
        )
      );
      setEditingId(null);
    } else {
      const newTestimonial = {
        id: Math.max(...testimonials.map((t) => t.id), 0) + 1,
        ...formData,
        rating: parseInt(formData.rating),
        created_at: new Date().toISOString(),
      };
      setTestimonials([...testimonials, newTestimonial]);
    }

    setFormData({ name: "", review: "", rating: 5, image_url: "" });
    setShowForm(false);
  };

  const handleEdit = (testimonial) => {
    setFormData(testimonial);
    setEditingId(testimonial.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus testimonial ini?")) {
      setTestimonials(testimonials.filter((t) => t.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", review: "", rating: 5, image_url: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold">
          Testimonials Management
        </h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add Testimonial
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow">
          <h3 className="font-display text-lg font-bold text-coffee-dark dark:text-coffee-gold mb-6">
            {editingId ? "Edit Testimonial" : "Add New Testimonial"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block text-sm font-medium mb-2">Review</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleFormChange}
                rows="4"
                className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark"
                >
                  {[1, 2, 3, 4, 5].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
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

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-coffee-dark rounded-lg p-6 coffee-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image_url}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/50";
                  }}
                />
                <div>
                  <h3 className="font-bold text-coffee-dark dark:text-coffee-gold">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-coffee-gold">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 text-blue-500 hover:bg-blue-100 rounded transition-colors"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 text-red-500 hover:bg-red-100 rounded transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-coffee-dark dark:text-coffee-cream text-opacity-80 text-sm italic">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
