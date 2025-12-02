# 📋 Project Files Overview - Kopi Nusantara Brew

## 📂 Complete Project Structure

```
kopi-nusantara-brew/
├── 📄 Configuration Files
│   ├── package.json              - Dependencies and scripts
│   ├── vite.config.js            - Vite build configuration
│   ├── tailwind.config.js        - Tailwind CSS configuration
│   ├── postcss.config.js         - PostCSS plugins
│   ├── .env.example              - Example environment variables
│   ├── .gitignore                - Git ignore rules
│   └── index.html                - Main HTML file
│
├── 📚 Documentation
│   ├── README.md                 - Project overview & features
│   ├── QUICK_START.md            - Setup and installation guide
│   ├── DEVELOPMENT.md            - Development guidelines
│   ├── DEPLOYMENT_GUIDE.md       - Vercel deployment steps
│   ├── BRAND_GUIDE.md            - Design & branding guidelines
│   ├── API_DOCS.md               - Supabase API documentation
│   └── database.sql              - Database schema & demo data
│
├── 📦 Source Code (src/)
│   │
│   ├── 🏠 Main Files
│   │   ├── App.jsx               - Main app routing
│   │   └── main.jsx              - React entry point
│   │
│   ├── 🧩 Components (src/components/)
│   │   ├── Navbar.jsx            - Navigation bar with cart & theme
│   │   ├── Footer.jsx            - Footer with links
│   │   ├── Hero.jsx              - Hero section with animations
│   │   ├── About.jsx             - About section
│   │   ├── MenuGrid.jsx          - Menu display with filters
│   │   ├── ProductModal.jsx      - Product detail modal
│   │   ├── Testimonials.jsx      - Testimonial slider
│   │   ├── Gallery.jsx           - Image gallery lightbox
│   │   ├── Contact.jsx           - Contact section with map
│   │   └── ProtectedRoute.jsx    - Route authentication guard
│   │
│   ├── 📄 Pages (src/pages/)
│   │   ├── Home.jsx              - Homepage
│   │   ├── Menu.jsx              - Full menu page
│   │   ├── Cart.jsx              - Shopping cart & checkout
│   │   └── Contact.jsx           - Contact page
│   │
│   ├── 👨‍💼 Admin (src/admin/)
│   │   ├── AdminLogin.jsx        - Admin authentication
│   │   ├── AdminDashboard.jsx    - Dashboard layout
│   │   ├── AdminDashboardHome.jsx - Analytics & statistics
│   │   ├── AdminMenuManager.jsx  - Menu CRUD operations
│   │   ├── AdminOrders.jsx       - Order management
│   │   └── AdminTestimonials.jsx - Testimonial management
│   │
│   ├── 🎨 Styles (src/styles/)
│   │   └── index.css             - Global styles & animations
│   │
│   ├── 🪝 Hooks (src/hooks/)
│   │   ├── useCart.js            - Cart state management
│   │   └── useMenu.js            - Menu data fetching
│   │
│   ├── 🛠️ Utils (src/utils/)
│   │   ├── supabase.js           - Supabase client & helpers
│   │   ├── auth.js               - Authentication utilities
│   │   └── cart.js               - Cart localStorage helpers
│   │
│   └── 🎯 Context (src/context/)
│       └── ThemeContext.jsx      - Dark mode context
│
├── 🌐 Public Files (public/)
│   ├── images/                   - Static images
│   ├── sitemap.xml               - SEO sitemap
│   └── robots.txt                - Robot crawlers rules
│
└── 📦 node_modules/              - Dependencies (auto-generated)
```

## 📄 File Descriptions

### Configuration Files

| File                 | Purpose                                 |
| -------------------- | --------------------------------------- |
| `package.json`       | Dependencies, scripts, project metadata |
| `vite.config.js`     | Vite bundler configuration              |
| `tailwind.config.js` | Tailwind CSS color & spacing config     |
| `postcss.config.js`  | PostCSS plugins for CSS processing      |
| `.env.example`       | Template for environment variables      |
| `.gitignore`         | Files to exclude from git               |
| `index.html`         | Main HTML template                      |

### Components

| File                 | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `Navbar.jsx`         | Navigation with logo, menu links, cart icon, theme toggle |
| `Footer.jsx`         | Footer with company info, social links, copyright         |
| `Hero.jsx`           | Full-screen hero with animations and CTA buttons          |
| `About.jsx`          | Company description with scroll trigger animation         |
| `MenuGrid.jsx`       | Reusable menu display with category filters               |
| `ProductModal.jsx`   | Product detail popup with quantity selector               |
| `Testimonials.jsx`   | Testimonial carousel using Swiper.js                      |
| `Gallery.jsx`        | Image gallery with masonry layout                         |
| `Contact.jsx`        | Contact info, map embed, WhatsApp button                  |
| `ProtectedRoute.jsx` | Route guard for authenticated admin access                |

### Pages

| File          | Route      | Purpose                    |
| ------------- | ---------- | -------------------------- |
| `Home.jsx`    | `/`        | Homepage with all sections |
| `Menu.jsx`    | `/menu`    | Full menu page             |
| `Cart.jsx`    | `/cart`    | Shopping cart & checkout   |
| `Contact.jsx` | `/contact` | Contact page               |

### Admin

| File                     | Route                 | Purpose                    |
| ------------------------ | --------------------- | -------------------------- |
| `AdminLogin.jsx`         | `/admin-login`        | Admin authentication       |
| `AdminDashboard.jsx`     | `/admin/*`            | Dashboard layout & routing |
| `AdminDashboardHome.jsx` | `/admin`              | Analytics & charts         |
| `AdminMenuManager.jsx`   | `/admin/menu`         | Menu CRUD operations       |
| `AdminOrders.jsx`        | `/admin/orders`       | Order management           |
| `AdminTestimonials.jsx`  | `/admin/testimonials` | Testimonial management     |

## 🔑 Key Dependencies

```json
{
  "react": "^18.2.0", // UI library
  "react-dom": "^18.2.0", // React rendering
  "react-router-dom": "^6.20.0", // Routing
  "@supabase/supabase-js": "^2.38.0", // Database client
  "gsap": "^3.12.2", // Animations
  "aos": "^2.3.4", // Scroll animations
  "swiper": "^11.0.0", // Carousel
  "lucide-react": "^0.293.0", // Icons
  "chart.js": "^4.4.0", // Charts
  "react-chartjs-2": "^5.2.0", // Chart wrapper
  "jwt-decode": "^4.0.0", // JWT parsing
  "tailwindcss": "^3.3.0", // CSS framework
  "axios": "^1.6.0" // HTTP client
}
```

## 📊 Database Schema

### menu Table

- `id` - Primary key
- `name` - Coffee name
- `category` - Category (Hot, Ice, Milk-based, Non-coffee)
- `description` - Product description
- `price` - Price in IDR
- `image_url` - Product image URL
- `created_at` - Timestamp

**Demo Data:** 8 coffee items

### testimonials Table

- `id` - Primary key
- `name` - Customer name
- `review` - Review text
- `rating` - Rating 1-5
- `image_url` - Avatar URL
- `created_at` - Timestamp

**Demo Data:** 4 testimonials

### orders Table

- `id` - Primary key
- `name` - Customer name
- `phone` - Customer phone
- `address` - Delivery address
- `items` - Order items (JSON)
- `total_price` - Total amount in IDR
- `status` - Status (pending/completed)
- `created_at` - Order timestamp

## 🎨 Color System

Defined in `tailwind.config.js`:

```javascript
colors: {
  coffee: {
    dark: '#3B2F2F',    // Primary dark
    gold: '#C9A66B',    // Accent gold
    cream: '#EFE6DD',   // Light background
    black: '#1A1A1A',   // Dark mode
    light: '#F5F5F5'    // Secondary light
  }
}
```

## ⚙️ Scripts in package.json

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm install          # Install dependencies
npm update           # Update all packages
```

## 🔐 Environment Variables

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_API_BASE_URL=http://localhost:3001  # For backend (optional)
```

## 📱 Responsive Breakpoints

```javascript
sm: '640px',    // Mobile landscape
md: '768px',    // Tablet
lg: '1024px',   // Desktop
xl: '1280px'    // Large desktop
```

## 🎬 Animation Libraries

- **GSAP** - Scroll triggers, parallax, complex animations
- **AOS** - Scroll reveal animations (data-aos attribute)
- **Swiper** - Touch-friendly carousels
- **Tailwind** - Built-in transitions and transforms

## 🔗 External Libraries

- **Lucide React** - 300+ icons (usage: `<ShoppingCart />`)
- **React Chart.js 2** - Analytics charts
- **React Router DOM** - Client-side routing
- **Axios** - HTTP requests (fallback for fetch)

## 📈 Project Stats

- **Total Components**: 11
- **Total Pages**: 4
- **Admin Modules**: 6
- **Custom Hooks**: 2
- **API Endpoints**: 7+
- **Demo Data Items**: 16
- **Lines of Code**: ~5000+

## 🎯 Feature Checklist

- ✅ Responsive Design (Mobile-first)
- ✅ Dark Mode Toggle
- ✅ Shopping Cart System
- ✅ Product Filtering
- ✅ Order Checkout
- ✅ Admin Dashboard
- ✅ Menu Management CRUD
- ✅ Order Tracking
- ✅ Testimonials Slider
- ✅ Image Gallery
- ✅ Contact Section
- ✅ Animations & Transitions
- ✅ SEO Optimized
- ✅ Database Integration
- ✅ Authentication System

## 🚀 Ready to Launch?

1. **Setup**: Follow [QUICK_START.md](./QUICK_START.md)
2. **Customize**: Check [DEVELOPMENT.md](./DEVELOPMENT.md)
3. **Deploy**: Use [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**Total Project Size**: ~2MB (node_modules) + ~100KB (source code)
**Build Output**: ~180KB (gzipped)
