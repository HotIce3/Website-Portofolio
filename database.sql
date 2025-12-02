-- Kopi Nusantara Brew Database Schema
-- Create these tables in your Supabase project

-- Menu Table
CREATE TABLE IF NOT EXISTS menu (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price BIGINT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  review TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  items JSONB NOT NULL,
  total_price BIGINT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_menu_category ON menu(category);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Insert demo data
INSERT INTO menu (name, category, description, price, image_url) VALUES
  ('Espresso Nusantara', 'Hot', 'Espresso murni dari biji kopi pilihan Nusantara dengan crema yang kaya', 25000, 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=500&h=500&fit=crop'),
  ('Cappuccino Krema', 'Milk-based', 'Kombinasi sempurna espresso, steamed milk, dan foam dengan sentuhan krema', 35000, 'https://images.unsplash.com/photo-1578968051516-7e58c08c58ec?w=500&h=500&fit=crop'),
  ('Iced Latte Gold', 'Ice', 'Latte dingin yang menyegarkan dengan lapisan espresso dan susu premium', 32000, 'https://images.unsplash.com/photo-1517558271840-fccb02743145?w=500&h=500&fit=crop'),
  ('Americano Classic', 'Hot', 'Espresso double shot dengan hot water untuk rasa yang bold dan smooth', 28000, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop'),
  ('Flat White Premium', 'Milk-based', 'Espresso dengan microfoam susu yang halus dan creamy', 36000, 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=500&h=500&fit=crop'),
  ('V60 Specialty', 'Non-coffee', 'Kopi pour over dengan metode V60 menggunakan air panas yang sempurna', 38000, 'https://images.unsplash.com/photo-1510591509098-f4fdc6d95cb4?w=500&h=500&fit=crop'),
  ('Iced Americano', 'Ice', 'Americano dingin yang segar dan energizing untuk hari Anda', 30000, 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop'),
  ('Macchiato Elegance', 'Milk-based', 'Espresso dengan touch of steamed milk cream untuk tekstur sempurna', 33000, 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop');

INSERT INTO testimonials (name, review, rating, image_url) VALUES
  ('Budi Santoso', 'Kopi terbaik yang pernah saya coba! Rasanya authentic dan ambiance cafénya sangat premium. Pasti akan datang lagi.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'),
  ('Siti Nurhaliza', 'Tempat favorit saya untuk bekerja. Kopi-nya smooth, tidak terlalu asam, dan barista-nya sangat friendly dan knowledgeable.', 5, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'),
  ('Ahmad Pratama', 'Espresso mereka worth every penny. Crema-nya perfect, dan setiap detail brewing attention to detail. Recommended!', 5, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'),
  ('Rina Wijaya', 'Latte art-nya beautiful dan kopi-nya tidak pahit. Suasana kafe yang cozy dan musik yang ambient. Love it!', 5, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop');
