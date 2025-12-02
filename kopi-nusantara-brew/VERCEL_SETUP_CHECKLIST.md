# ✅ Vercel Deployment Checklist

Gunakan checklist ini untuk memastikan deployment ke Vercel berjalan lancar.

## Pre-Deployment (Sebelum Deploy)

### Local Setup

- [ ] Install Node.js 16+ (`node --version`)
- [ ] Clone/buka project: `cd kopi-nusantara-brew`
- [ ] Install dependencies: `npm install`
- [ ] Create `.env.local` dengan Supabase credentials
- [ ] Test lokal: `npm run dev` (akses http://localhost:5173)
- [ ] Build lokal: `npm run build` (pastikan berhasil)
- [ ] Preview build: `npm run preview`

### Git Setup

- [ ] Initialize Git (jika belum): `git init`
- [ ] Add all files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin <github-url>`
- [ ] Push ke main: `git push -u origin main`

### Supabase Preparation

- [ ] Buka https://app.supabase.com
- [ ] Login atau buat project baru
- [ ] Dapatkan **Project URL** (Settings → API)
- [ ] Dapatkan **Anon Key** (Settings → API)
- [ ] Test database connection dari lokal
- [ ] Execute `database.sql` di SQL Editor
- [ ] Verify 3 tables ada: menu, testimonials, orders
- [ ] Add Vercel domain ke CORS (akan dilakukan di step berikut)

---

## Deployment Steps

### Step 1: Connect to Vercel

- [ ] Buka https://vercel.com
- [ ] Login dengan GitHub account
- [ ] Klik **Add New** → **Project**
- [ ] Klik **Import Git Repository**
- [ ] Cari & pilih `kopi-nusantara-brew`
- [ ] Klik **Import**

### Step 2: Configure Build Settings

- [ ] Framework: **Vite** (should be auto-detected)
- [ ] Build Command: `npm run build` ✅
- [ ] Install Command: `npm ci` ✅
- [ ] Output Directory: `dist` ✅
- [ ] Node.js Version: **18.x** (recommended)
- [ ] Klik **Continue**

### Step 3: Set Environment Variables

Di halaman Environment Variables:

**Variable 1:**

- [ ] Name: `VITE_SUPABASE_URL`
- [ ] Value: `https://xxxxx.supabase.co`
- [ ] Add

**Variable 2:**

- [ ] Name: `VITE_SUPABASE_ANON_KEY`
- [ ] Value: `eyJhbGciOi...` (paste full key)
- [ ] Add

- [ ] Klik **Deploy**

### Step 4: Wait for Deployment

- [ ] Monitor build progress (usually 2-5 minutes)
- [ ] Check for build errors in logs
- [ ] Once done, Vercel shows: "Congratulations! Your site is live"
- [ ] Vercel provides URL: `https://xxxx.vercel.app`

### Step 5: Test Production Site

- [ ] Open provided Vercel URL
- [ ] Homepage loads correctly
- [ ] Hero section animations work
- [ ] Menu filters work
- [ ] Add to cart functionality works
- [ ] Dark mode toggle works
- [ ] Contact form accessible
- [ ] Admin login accessible (`/admin-login`)

---

## Post-Deployment

### Update Supabase CORS

1. [ ] Buka https://app.supabase.com
2. [ ] Settings → **API**
3. [ ] Scroll ke **URL Configuration**
4. [ ] Paste Vercel URL di CORS allowed origins
5. [ ] Klik **Save**

### Verify Deployment Health

- [ ] Check Vercel Analytics: https://vercel.com/dashboard/projects
- [ ] Monitor Function Logs untuk errors
- [ ] Test cart checkout (should create orders in Supabase)
- [ ] Check Supabase orders table untuk new entries

### Optional: Setup Custom Domain

1. [ ] Di Vercel project → **Settings** → **Domains**
2. [ ] Klik **Add**
3. [ ] Input domain Anda
4. [ ] Copy DNS records
5. [ ] Add to domain provider (Namecheap, GoDaddy, dll)
6. [ ] Wait 24 hours for DNS propagation
7. [ ] Verify domain works

### Optional: Enable GitHub Auto-Deploy

1. [ ] Vercel otomatis deploy saat `git push` ke main
2. [ ] Verify by: `git push` → check Vercel dashboard
3. [ ] Should see new deployment starting

---

## Troubleshooting

### Build Fails

```
Error: Cannot find module '@supabase/supabase-js'
```

**Solution:**

- [ ] Delete `node_modules` lokal
- [ ] Run `npm install`
- [ ] Re-deploy di Vercel
- [ ] Check Vercel build logs: Settings → **Function Logs**

### Blank White Page

```
Website shows blank page on Vercel but works locally
```

**Solution:**

- [ ] Open browser console (F12)
- [ ] Check for error messages
- [ ] Verify environment variables are correct
- [ ] Check Supabase URL & Anon Key
- [ ] Rebuild & redeploy

### 404 on Refresh

```
/menu shows 404, but / works
```

**Solution:**

- [ ] File `vercel.json` sudah included
- [ ] Check `vercel.json` has `rewrites` section
- [ ] Rebuild & redeploy

### CORS Error

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**

- [ ] Buka Supabase → Settings → API → URL Configuration
- [ ] Add Vercel URL to CORS origins
- [ ] Format: `https://your-site.vercel.app`
- [ ] Click Save & wait 5 minutes

---

## Performance Checklist

- [ ] Lighthouse score > 80
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 4s
- [ ] Images optimized (use webp)
- [ ] CSS/JS minified (Vite handles)
- [ ] Cache headers configured (`vercel-output.json`)

---

## Security Checklist

- [ ] No API keys in code (use env vars)
- [ ] `.env` file in `.gitignore` ✅
- [ ] HTTPS enabled (Vercel default) ✅
- [ ] CORS properly configured
- [ ] Admin login credentials strong (change from default)
- [ ] Database Row Level Security (RLS) enabled

---

## Rollback Procedure

Jika deployment berjalan error:

1. [ ] Buka Vercel dashboard
2. [ ] Pergi ke **Deployments**
3. [ ] Cari deployment sebelumnya (yang berhasil)
4. [ ] Klik **...** → **Promote to Production**
5. [ ] Vercel akan revert ke versi sebelumnya

---

## Quick Deploy Commands

```bash
# Push ke GitHub (auto-triggers Vercel)
git add .
git commit -m "Your message"
git push origin main

# Tunggu Vercel auto-deploy
# Check status di https://vercel.com/dashboard
```

---

## Links & Resources

| Resource           | Link                                  |
| ------------------ | ------------------------------------- |
| Vercel Dashboard   | https://vercel.com/dashboard          |
| Your Project       | https://vercel.com/dashboard/projects |
| Supabase Dashboard | https://app.supabase.com              |
| GitHub Repository  | [your-repo-url]                       |
| Production URL     | https://[your-site].vercel.app        |

---

**Status:** Ready for deployment ✨
**Last Updated:** December 2, 2025
