# ⚡ QUICK REFERENCE - Kopi Nusantara Brew

**Status:** ✅ Ready  
**Error:** ✅ Fixed  
**Files:** ✅ Cleaned

---

## 🎯 I WANT TO...

### Deploy to Vercel Now

```
1. Read: 00_READ_ME_FIRST.md (2 min)
2. Read: VERCEL_SETUP_CHECKLIST.md (10 min)
3. Deploy! (5 min)
```

### Setup Locally First

```
1. Read: QUICK_START.md
2. Run: npm install
3. Run: npm run dev
4. Open: http://localhost:5173
```

### Understand Project Structure

```
1. Read: README.md
2. Read: PROJECT_STRUCTURE.md
3. Explore: src/ folder
```

### Customize Design

```
1. Read: BRAND_GUIDE.md
2. Edit: tailwind.config.js
3. Edit: src/styles/index.css
```

### Modify Code

```
1. Read: DEVELOPMENT.md
2. Check: PROJECT_STRUCTURE.md for file locations
3. Start editing!
```

### Deploy to Production

```
1. Read: VERCEL_SETUP_CHECKLIST.md
2. Follow 5 steps
3. Done!
```

### Fix Deployment Error

```
1. Check: VERCEL_SETUP_CHECKLIST.md#troubleshooting
2. Read: VERCEL_DEPLOYMENT.md
3. Check: Browser console (F12)
```

---

## 📁 Key Files Location

```
Configuration:
  vercel.json                  ← Main Vercel config
  .env.example               ← Environment template
  vite.config.js             ← Vite config
  tailwind.config.js         ← Colors & styles

Source Code:
  src/components/            ← React components
  src/pages/                 ← Pages
  src/admin/                 ← Admin panel
  src/styles/                ← Global CSS

Database:
  database.sql               ← Schema & demo data
```

---

## ⚙️ Commands

```bash
# Setup
npm install                 # Install dependencies

# Development
npm run dev                 # Start dev server
npm run preview             # Preview build locally

# Production
npm run build               # Build for production
npm run lint                # Check code quality

# Deploy
git push origin main        # Push to GitHub
.\deploy.ps1               # Windows helper menu
bash deploy.sh             # macOS/Linux helper menu
```

---

## 🔑 Environment Variables (from Supabase)

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Get from: **Supabase Dashboard → Settings → API**

---

## 🧪 Testing Locally

```bash
# 1. Start dev server
npm run dev

# 2. Open http://localhost:5173

# 3. Test features:
✓ Homepage loads
✓ Dark mode toggle works
✓ Menu filters work
✓ Add to cart works
✓ Admin login accessible
✓ Responsive design
```

---

## 🚀 Deploy (3 Steps)

### 1. Push to GitHub

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

### 2. Connect Vercel

- https://vercel.com/dashboard
- Add New → Project → Import

### 3. Add Env Variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- Click Deploy

---

## 📖 Documentation by Topic

| Topic           | File                      |
| --------------- | ------------------------- |
| **Get Started** | 00_READ_ME_FIRST.md       |
| **Deploy**      | VERCEL_SETUP_CHECKLIST.md |
| **Local Setup** | QUICK_START.md            |
| **Code**        | DEVELOPMENT.md            |
| **Structure**   | PROJECT_STRUCTURE.md      |
| **Design**      | BRAND_GUIDE.md            |
| **API**         | API_DOCS.md               |
| **Database**    | DEPLOYMENT_GUIDE.md       |

---

## ❌ Common Errors

| Error         | Solution                                      |
| ------------- | --------------------------------------------- |
| Build fails   | Delete node_modules, npm install              |
| Blank page    | Check env variables, browser console          |
| CORS error    | Add domain to Supabase CORS                   |
| 404 on routes | vercel.json handles this (already configured) |

Full troubleshooting: `VERCEL_SETUP_CHECKLIST.md`

---

## ✅ Vercel Config Status

```
✅ vercel.json              FIXED & READY
✅ .vercelignore            Configured
✅ vercel-output.json       Cache setup
✅ Environment variables    Template ready
✅ GitHub Actions           Optional auto-deploy
```

---

## 💡 Tips

- **Local testing:** Use `npm run preview` to test production build
- **Environment:** Create `.env.local` for local development
- **Git:** Commit often with meaningful messages
- **Database:** Use `database.sql` to seed demo data
- **Deploy:** Vercel auto-deploys on git push (if configured)

---

## 📞 Help

Need help?

1. Check relevant documentation file
2. Check troubleshooting section
3. Check browser console (F12)
4. Read error messages carefully

---

## 🎯 Recommended Workflow

```
┌─ Setup Local ─┐
│ 1. npm install │
│ 2. npm run dev │
│ 3. Test site   │
└─────────────┘
        ↓
┌─ Customize ──┐
│ 1. Edit code  │
│ 2. Test local │
│ 3. git commit │
└─────────────┘
        ↓
┌─ Deploy ─────┐
│ 1. git push   │
│ 2. Add env    │
│ 3. Deploy     │
└─────────────┘
        ↓
┌─ Monitor ────┐
│ 1. Test live  │
│ 2. Check logs │
│ 3. Update     │
└─────────────┘
```

---

## 🏁 Quick Status

```
✅ Project code:       Complete
✅ Configuration:      Fixed & Ready
✅ Documentation:      Clean & Organized
✅ Vercel setup:       Ready
✅ Error:              FIXED

🟢 STATUS: PRODUCTION READY
```

---

## 🚀 START HERE

**New to project?** Read: `00_READ_ME_FIRST.md`

**Ready to deploy?** Read: `VERCEL_SETUP_CHECKLIST.md`

**Want to code?** Read: `DEVELOPMENT.md`

---

**Created:** December 2, 2025  
**Status:** ✅ Production Ready  
**Next:** Pick a starting point above! ⬆️
