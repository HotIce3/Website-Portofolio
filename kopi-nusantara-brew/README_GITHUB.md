# ☕ Kopi Nusantara Brew - Website Premium Coffee Shop

Aplikasi full-stack modern untuk coffee shop premium dengan admin dashboard, e-commerce, dan database management.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Deploy](https://img.shields.io/badge/deploy-Vercel%20Ready-brightgreen)

## 📸 Demo

Live Demo: **[Vercel URL akan ditampilkan setelah deploy]**

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ ([Download](https://nodejs.org))
- GitHub account (untuk deployment)
- Vercel account ([Sign Up](https://vercel.com))
- Supabase account ([Sign Up](https://supabase.com))

### Setup Lokal (2 Menit)

```bash
# 1. Clone atau download project
cd kopi-nusantara-brew

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Edit .env.local dengan Supabase credentials Anda

# 4. Start development server
npm run dev
# Buka http://localhost:5173
```

### Deploy ke Vercel (5 Menit)

Baca panduan lengkap: **[VERCEL_SETUP_CHECKLIST.md](VERCEL_SETUP_CHECKLIST.md)**

Singkatnya:

1. Push ke GitHub
2. Connect di Vercel.com
3. Add environment variables
4. Click Deploy!

## ✨ Features

### 🎨 Frontend

- ✅ Responsive design (mobile-first)
- ✅ Dark mode toggle
- ✅ GSAP animations & scroll triggers
- ✅ Smooth parallax effects
- ✅ Product filtering & search
- ✅ Shopping cart with localStorage
- ✅ Checkout system
- ✅ Testimonials carousel (Swiper)
- ✅ Image gallery with lightbox
- ✅ Contact form with maps integration
- ✅ SEO optimized

### ⚙️ Backend & Database

- ✅ Supabase PostgreSQL database
- ✅ REST API with Supabase SDK
- ✅ Real-time data updates (optional)
- ✅ Row Level Security (RLS)
- ✅ Image storage support

### 👨‍💼 Admin Panel

- ✅ Admin authentication (JWT)
- ✅ Dashboard with analytics
- ✅ Menu management (CRUD)
- ✅ Order tracking
- ✅ Testimonial management
- ✅ Sales charts & statistics
- ✅ Customer order history

### 🛠️ Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS 3.3
- **Animations:** GSAP + AOS + Swiper
- **Routing:** React Router v6
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Icons:** Lucide React
- **Charts:** Chart.js + Recharts

## 📁 Project Structure

```
kopi-nusantara-brew/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (Home, Menu, Cart, etc)
│   ├── admin/               # Admin panel components
│   ├── hooks/               # Custom React hooks
│   ├── context/             # Context API (ThemeContext)
│   ├── utils/               # Helper functions & Supabase client
│   ├── styles/              # Global CSS with animations
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
│
├── public/                  # Static assets
├── 📚 Documentation/        # Comprehensive guides
│   ├── INDEX.md             # Documentation index
│   ├── QUICK_START.md       # Quick setup guide
│   ├── DEVELOPMENT.md       # Development guidelines
│   ├── VERCEL_*.md          # Vercel deployment guides
│   ├── PROJECT_STRUCTURE.md # File-by-file breakdown
│   ├── API_DOCS.md          # REST API docs
│   └── BRAND_GUIDE.md       # Design system
│
├── 🔧 Configuration/
│   ├── vercel.json          # Vercel config
│   ├── vite.config.js       # Vite build config
│   ├── tailwind.config.js   # Tailwind theme
│   └── postcss.config.js    # PostCSS plugins
│
├── 🗄️ database.sql         # Database schema & demo data
├── package.json             # Dependencies
└── 🚀 deploy.ps1 / deploy.sh # Helper scripts
```

## 🎨 Design System

### Colors (Premium Coffee Theme)

```
- Dark Coffee:  #3B2F2F
- Gold Accent:  #C9A66B
- Cream:        #EFE6DD
- Black:        #1A1A1A
```

### Typography

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

Lihat detail di: **[BRAND_GUIDE.md](BRAND_GUIDE.md)**

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)

# Production
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run lint             # Run ESLint

# Helper (interactive menu)
npm run deploy           # Windows: deploy.ps1 | macOS/Linux: deploy.sh
```

## 🔑 Environment Variables

Create `.env.local` file:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Get these from: Supabase Dashboard → Settings → API

## 🗄️ Database Setup

1. Create Supabase project
2. Copy content dari `database.sql`
3. Paste ke Supabase SQL Editor
4. Run query

This creates:

- `menu` table (8 items)
- `testimonials` table (4 items)
- `orders` table (for checkout)

## 🔐 Admin Access

**Demo Credentials:**

```
Email: admin@kopinusantara.com
Password: Admin@2024
```

⚠️ **Change these in production!** (Edit: `src/utils/auth.js`)

Access at: `http://localhost:5173/admin-login`

## 📊 API Endpoints

All endpoints use Supabase REST API. Lihat dokumentasi lengkap di: **[API_DOCS.md](API_DOCS.md)**

```bash
GET    /menu              # Get all menu items
POST   /orders            # Create new order
GET    /orders            # Get all orders
PUT    /orders/:id        # Update order status
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect repository ke Vercel
# https://vercel.com/dashboard

# 3. Add environment variables

# 4. Deploy!
```

Detailed guide: **[VERCEL_SETUP_CHECKLIST.md](VERCEL_SETUP_CHECKLIST.md)**

### Other Platforms

- Netlify
- GitHub Pages
- AWS Amplify

See: **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**

## 📚 Documentation

Dokumentasi lengkap tersedia di folder `docs/` dan file `*.md`:

| Doc                                                    | Purpose                 |
| ------------------------------------------------------ | ----------------------- |
| [INDEX.md](INDEX.md)                                   | Documentation index     |
| [README.md](README.md)                                 | Project overview        |
| [QUICK_START.md](QUICK_START.md)                       | Quick setup guide       |
| [DEVELOPMENT.md](DEVELOPMENT.md)                       | Development guide       |
| [VERCEL_SETUP_CHECKLIST.md](VERCEL_SETUP_CHECKLIST.md) | ✅ Deployment checklist |
| [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)           | Vercel guide            |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)           | Code structure          |
| [API_DOCS.md](API_DOCS.md)                             | API reference           |
| [BRAND_GUIDE.md](BRAND_GUIDE.md)                       | Design system           |

## 🐛 Troubleshooting

### Problem: Blank page after deploy

**Solution:**

1. Check browser console (F12)
2. Verify environment variables in Vercel
3. Check Supabase credentials

### Problem: CORS errors

**Solution:**

1. Go to Supabase → Settings → API
2. Add Vercel URL to CORS origins
3. Format: `https://your-site.vercel.app`

### Problem: Build fails

**Solution:**

1. Delete `node_modules` & `package-lock.json`
2. Run `npm install`
3. Run `npm run build` locally
4. Check error messages

See more: **[VERCEL_SETUP_CHECKLIST.md](VERCEL_SETUP_CHECKLIST.md#troubleshooting)**

## 💡 Performance Tips

- Images optimized with lazy loading
- CSS/JS minified by Vite
- Tailwind CSS production-optimized
- Cache headers configured
- CDN through Vercel

Lighthouse Score Target: **> 80**

## 🔄 Continuous Deployment

GitHub Actions workflow configured (`.github/workflows/vercel-deploy.yml`)

Auto-deploy on:

- Push to `main` branch
- Pull requests

See: **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [GSAP](https://gsap.com)
- Database by [Supabase](https://supabase.com)
- Deployed to [Vercel](https://vercel.com)

## 📞 Support

Questions? Issues?

1. Check [Troubleshooting](VERCEL_SETUP_CHECKLIST.md#troubleshooting)
2. Read relevant documentation
3. Open an issue on GitHub
4. Ask in discussions

## 🎯 Roadmap

- [ ] Payment gateway integration (Stripe/Midtrans)
- [ ] Email notifications
- [ ] Customer reviews
- [ ] Loyalty program
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Analytics dashboard

## 📈 Stats

- 40+ React components & utilities
- 8 documentation files
- 3 database tables
- ~2000+ lines of code
- Production-ready configuration

## 🚀 Ready to Deploy?

1. Read: **[VERCEL_READY.md](VERCEL_READY.md)**
2. Follow: **[VERCEL_SETUP_CHECKLIST.md](VERCEL_SETUP_CHECKLIST.md)**
3. Deploy: Click "Deploy" on Vercel!

---

**Made with ☕ for coffee lovers**

Last Updated: December 2, 2025
Project Status: ✅ Production Ready
