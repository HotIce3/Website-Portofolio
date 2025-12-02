import { useState, useEffect } from "react";
import { getMenu, getMenuById } from "../utils/supabase";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const data = await getMenu();
      setMenu(data || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError(err.message);
      // Set demo data if fetch fails
      setMenu(getDemoMenu());
    } finally {
      setLoading(false);
    }
  };

  const fetchMenuById = async (id) => {
    try {
      const data = await getMenuById(id);
      return data;
    } catch (err) {
      console.error("Error fetching menu item:", err);
      return getDemoMenu().find((item) => item.id === parseInt(id));
    }
  };

  return {
    menu,
    loading,
    error,
    fetchMenu,
    fetchMenuById,
  };
};

// Demo data for fallback
export const getDemoMenu = () => [
  {
    id: 1,
    name: "Espresso Nusantara",
    category: "Hot",
    description:
      "Espresso murni dari biji kopi pilihan Nusantara dengan crema yang kaya",
    price: 25000,
    image_url:
      "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Cappuccino Krema",
    category: "Milk-based",
    description:
      "Kombinasi sempurna espresso, steamed milk, dan foam dengan sentuhan krema",
    price: 35000,
    image_url:
      "https://images.unsplash.com/photo-1578968051516-7e58c08c58ec?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Iced Latte Gold",
    category: "Ice",
    description:
      "Latte dingin yang menyegarkan dengan lapisan espresso dan susu premium",
    price: 32000,
    image_url:
      "https://images.unsplash.com/photo-1517558271840-fccb02743145?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Americano Classic",
    category: "Hot",
    description:
      "Espresso double shot dengan hot water untuk rasa yang bold dan smooth",
    price: 28000,
    image_url:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Flat White Premium",
    category: "Milk-based",
    description: "Espresso dengan microfoam susu yang halus dan creamy",
    price: 36000,
    image_url:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: "V60 Specialty",
    category: "Non-coffee",
    description:
      "Kopi pour over dengan metode V60 menggunakan air panas yang sempurna",
    price: 38000,
    image_url:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d95cb4?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 7,
    name: "Iced Americano",
    category: "Ice",
    description: "Americano dingin yang segar dan energizing untuk hari Anda",
    price: 30000,
    image_url:
      "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
  {
    id: 8,
    name: "Macchiato Elegance",
    category: "Milk-based",
    description:
      "Espresso dengan touch of steamed milk cream untuk tekstur sempurna",
    price: 33000,
    image_url:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop",
    created_at: new Date().toISOString(),
  },
];
