# 🚀 Quick Start Guide - Kopi Nusantara Brew

## Prerequisites

Before you start, make sure you have:

- **Node.js 16+** ([download](https://nodejs.org))
- **npm or yarn** (comes with Node.js)
- **Git** ([download](https://git-scm.com))
- **Supabase Account** (free at [supabase.com](https://supabase.com))

## Step 1: Install Dependencies

```bash
cd kopi-nusantara-brew
npm install
```

This installs all required packages including:

- React & React Router
- Tailwind CSS
- GSAP & AOS animations
- Supabase client
- And more...

**Estimated time: 3-5 minutes**

## Step 2: Setup Supabase

### 2.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Click "New Project"
3. Enter project details:
   - **Project Name**: kopi-nusantara-brew
   - **Database Password**: Choose a strong password
   - **Region**: Choose closest to your location
4. Click "Create new project" and wait 5-10 minutes

### 2.2 Setup Database

1. Once project is ready, go to **SQL Editor**
2. Click **New Query**
3. Copy entire content from `database.sql` file
4. Paste into SQL Editor
5. Click **Run** to execute all queries

✅ This creates 3 tables with demo data:

- `menu` (8 coffee items)
- `testimonials` (4 reviews)
- `orders` (empty, for future orders)

### 2.3 Get API Keys

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (starts with https://)
   - **anon public** key (long string)

Save these for next step!

## Step 3: Configure Environment Variables

### 3.1 Create .env.local file

In project root, create file `.env.local`:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxx...
```

Replace the values with your Supabase credentials!

### 3.2 Never commit .env.local

The `.gitignore` file already prevents this. Good practice! ✅

## Step 4: Start Development Server

```bash
npm run dev
```

You should see:

```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

**Open http://localhost:3000 in your browser!**

## 🎯 Testing the Application

### Homepage

- ✅ Hero section with animations
- ✅ About section
- ✅ Menu preview (6 items)
- ✅ Testimonials slider
- ✅ Gallery section
- ✅ Contact with map

### Menu Page

- ✅ All 8 menu items displayed
- ✅ Filter by category works
- ✅ Click item to see details
- ✅ Add to cart button

### Cart & Checkout

- ✅ View cart items
- ✅ Adjust quantities
- ✅ See total price
- ✅ Enter customer info
- ✅ Submit order (simulated)

### Dark Mode

- ✅ Click moon icon in navbar
- ✅ Toggle between light/dark
- ✅ Preference saved to localStorage

### Admin Panel

1. Go to http://localhost:3000/admin-login
2. Enter demo credentials:
   - **Email**: `admin@kopinusantara.com`
   - **Password**: `Admin@2024`
3. Explore dashboard features:
   - Dashboard analytics
   - Menu management (CRUD)
   - Order tracking
   - Testimonial management

## 📦 Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready for deployment.

```bash
npm run preview
```

Test production build locally.

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module 'supabase'"

**Solution:**

```bash
npm install
```

### Issue: "Environment variable not found"

**Solution:**

- Restart dev server after creating `.env.local`
- Variable names must start with `VITE_`
- Use in code as `import.meta.env.VITE_NAME`

### Issue: "404 images not loading"

**Solution:**

- Supabase URLs are valid for demo
- In production, upload to Supabase Storage

### Issue: "Cart not saving"

**Solution:**

- Check if localStorage is enabled
- Clear browser cache: Ctrl+Shift+Delete

### Issue: "Orders not saved"

**Solution:**

- Verify Supabase connection is working
- Check browser console for errors (F12)
- Verify database tables were created

## 📱 Testing on Different Devices

### Desktop Browser

```bash
# Already running on http://localhost:3000
```

### Mobile/Tablet

1. Get your computer's IP:
   - Windows: `ipconfig` (look for IPv4)
   - Mac: `ifconfig` (look for inet)
2. Open `http://YOUR_IP:3000` on phone/tablet

### DevTools Mobile View

Press `Ctrl+Shift+M` in Chrome to toggle mobile view.

## 🎨 Customize for Your Needs

### Change Branding

- Edit `src/components/Navbar.jsx` logo
- Update colors in `tailwind.config.js`
- Modify text in components

### Change Business Info

- Update contact info in `src/components/Contact.jsx`
- Change admin credentials in `src/utils/auth.js`
- Update store hours in `database.sql`

### Add More Menu Items

1. Go to Supabase SQL Editor
2. Run:

```sql
INSERT INTO menu (name, category, description, price, image_url)
VALUES ('Coffee Name', 'Hot', 'Description', 35000, 'https://image-url.jpg');
```

## 🚀 Next Steps

### Local Development Complete?

Continue to: **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

Deploy to Vercel and make your website live on the internet!

### Want to Customize More?

Check: **[DEVELOPMENT.md](./DEVELOPMENT.md)**

Learn how to add features, modify components, and extend functionality.

### Understand the Branding?

Review: **[BRAND_GUIDE.md](./BRAND_GUIDE.md)**

Design guidelines, color palette, and component usage.

## 📚 Useful Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Remove package
npm uninstall package-name

# Update all packages
npm update
```

## 🆘 Need Help?

1. Check error message in console (F12)
2. Search error message in Google
3. Check [Supabase Docs](https://supabase.com/docs)
4. Check [React Docs](https://react.dev)
5. Ask in community forums

## ✅ Checklist

Before considering your setup complete:

- [ ] Node.js installed
- [ ] Project cloned/extracted
- [ ] npm install completed
- [ ] Supabase project created
- [ ] Database tables created
- [ ] `.env.local` file configured
- [ ] Dev server running (npm run dev)
- [ ] Homepage loads correctly
- [ ] Menu displays items
- [ ] Admin login works
- [ ] Dark mode toggles

🎉 **All done? You're ready to start developing!**

---

**Questions?** Check the README.md for more info.
