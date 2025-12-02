# 🎯 VERCEL DEPLOYMENT - VISUAL GUIDE

Panduan visual step-by-step untuk deploy ke Vercel dalam 5 menit.

---

## 📌 BEFORE YOU START

✅ Checklist:

- [ ] Node.js 16+ installed (`node --version`)
- [ ] GitHub account (untuk push kode)
- [ ] Vercel account (https://vercel.com)
- [ ] Supabase project (https://supabase.com)
- [ ] Project folder: `kopi-nusantara-brew`

---

## 🔄 STEP 1: PREPARE PROJECT LOCALLY (2 Minutes)

```bash
# Terminal
cd kopi-nusantara-brew

# 1. Install dependencies
npm install

# 2. Create .env.local
cp .env.example .env.local

# Edit .env.local:
# VITE_SUPABASE_URL=https://xxxxx.supabase.co
# VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

### ✓ Get Supabase Credentials:

1. Buka https://app.supabase.com
2. Select project Anda
3. Pergi ke **Settings** → **API**
4. Copy **Project URL** & **Anon Key**

### ✓ Test Lokal:

```bash
npm run dev
# Buka http://localhost:5173
# Pastikan homepage load normal
```

---

## 📤 STEP 2: PUSH TO GITHUB (1 Minute)

### If first time:

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Kopi Nusantara Brew"

# Create new GitHub repo di https://github.com/new
# Lalu copy HTTPS URL

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/kopi-nusantara-brew.git
git branch -M main
git push -u origin main
```

### If already initialized:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

✓ Verify: Repository sudah muncul di https://github.com/YOUR_USERNAME

---

## 🚀 STEP 3: CONNECT TO VERCEL (2 Minutes)

### 3A. Open Vercel Dashboard

```
1. Buka https://vercel.com/dashboard
2. Login dengan GitHub
```

### 3B. Import Project

```
1. Click "Add New" button
   ↓
2. Select "Project"
   ↓
3. Click "Import Git Repository"
   ↓
4. Find & select "kopi-nusantara-brew"
   ↓
5. Click "Import"
```

### Screenshot Visual:

```
[Dashboard Home]
    ↓
[Add New ▼]
    ├→ Project
    ├→ Function
    └→ ...
    ↓
[Import Git Repository]
    ↓
[Search: kopi-nusantara-brew]
    ↓
[Select repository]
    ↓
[Import]
```

---

## ⚙️ STEP 4: CONFIGURE BUILD (1 Minute)

Vercel akan auto-detect framework sebagai Vite.

Verify settings:

| Setting              | Value           | Status           |
| -------------------- | --------------- | ---------------- |
| **Framework**        | Vite            | ✅ Auto-detected |
| **Build Command**    | `npm run build` | ✅ Correct       |
| **Install Command**  | `npm ci`        | ✅ Correct       |
| **Output Directory** | `dist`          | ✅ Correct       |
| **Node Version**     | 18.x            | ✅ Recommended   |

```
Jika ada yang berbeda, update di halaman import
Lalu click "Continue"
```

---

## 🔑 STEP 5: ADD ENVIRONMENT VARIABLES (2 Minutes)

**CRITICAL STEP!**

```
1. Di halaman "Configure Project"
   Scroll down ke "Environment Variables"

2. Add Variable 1:
   Name:  VITE_SUPABASE_URL
   Value: https://xxxxx.supabase.co
   [Add]

3. Add Variable 2:
   Name:  VITE_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   [Add]

4. Verify both variables ada
5. Click "Deploy"
```

### Screenshot:

```
[Environment Variables]

┌─────────────────────────────────────┐
│ Name: VITE_SUPABASE_URL             │
│ Value: https://xxx.supabase.co      │
│ [Add]                               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Name: VITE_SUPABASE_ANON_KEY        │
│ Value: eyJhbGc...                   │
│ [Add]                               │
└─────────────────────────────────────┘

[Deploy] button
```

---

## ⏳ STEP 6: DEPLOYMENT IN PROGRESS

```
Vercel akan:
1. Install dependencies         (30s)
2. Run build command           (1-2m)
3. Optimize & test             (1m)
4. Deploy to CDN               (30s)

Total: 2-5 minutes

💡 Tip: Buka browser console (F12)
   Untuk monitor build progress
```

### Progress Screen:

```
[Building your website...]

✓ Installed dependencies
✓ Building project
✓ Optimizing code
✓ Deploying to CDN

[Refresh automatically]
```

---

## ✨ STEP 7: SUCCESS!

```
[Congratulations! Your site is live 🎉]

Your URL:
┌─────────────────────────────────────────┐
│ https://kopi-nusantara-brew.vercel.app │
└─────────────────────────────────────────┘

[Visit Site]  [Dashboard]  [Settings]
```

Copy URL & buka di browser untuk test!

---

## 🔍 STEP 8: POST-DEPLOYMENT TESTS

### Test 1: Homepage Load

```
✓ Hero section muncul dengan animations
✓ Dark mode toggle bekerja
✓ Navigation bar sticky
✓ Footer ada di bawah
```

### Test 2: Menu Page

```
✓ Menu items load dari database
✓ Filters work (Hot, Ice, etc)
✓ Add to cart button bekerja
✓ Cart count update
```

### Test 3: Shopping Cart

```
✓ Cart items muncul
✓ Remove items work
✓ Quantity dapat di-adjust
✓ Total price calculate correctly
```

### Test 4: Admin Panel

```
✓ Bisa access /admin-login
✓ Login dengan demo credentials berhasil
✓ Dashboard load
✓ Menu manager accessible
```

### Test 5: Responsiveness

```
✓ Mobile view (resize browser ke 375px)
✓ Tablet view (768px)
✓ Desktop view (1024px+)
```

**Semua test passed?** ✅ Deployment sukses!

---

## 🎯 OPTIONAL: SETUP CUSTOM DOMAIN

Jika Anda punya domain sendiri:

```
1. Di Vercel dashboard
   Click "Settings" → "Domains"

2. Click "Add"

3. Enter domain Anda
   Contoh: kopinusantara.com

4. Choose option:
   ✓ Use Vercel Nameservers (recommended)
   atau
   ✓ Add DNS Records (manual)

5. Follow instruction Vercel

6. Wait 24 hours untuk DNS propagate

7. Your domain akan pointing ke https://kopinusantara.com
```

---

## 🔄 OPTIONAL: AUTO-DEPLOY SETUP

Setup automatic deployment setiap kali push ke GitHub:

```
1. Vercel sudah auto-connected ke GitHub
   (Saat Anda import repository)

2. Setiap push ke main branch → auto-deploy

3. Test dengan:
   git add .
   git commit -m "Test auto-deploy"
   git push origin main

4. Lihat Vercel dashboard
   Deployment baru akan start otomatis

5. Check "Deployments" tab untuk history
```

---

## 🔧 TROUBLESHOOTING VISUAL

### Problem: Build Fails ❌

```
[Build Error]

Error log shows:
"Cannot find module '@supabase/supabase-js'"

SOLUTION:
1. Go back to local project
2. Delete: node_modules & package-lock.json
3. Run: npm install
4. Test: npm run build
5. If ok, push ke GitHub
6. Vercel akan retry build otomatis
```

### Problem: Blank Page ❌

```
[Site Loads but Shows Blank]

SOLUTION:
1. Press F12 (browser console)
2. Look for error messages
3. Common issues:
   ✗ Wrong Supabase URL
   ✗ Wrong Anon Key
   ✗ CORS not configured

4. Update environment variables di Vercel
5. Trigger redeploy:
   - Click project
   - Deployments
   - Click latest deployment
   - Redeploy
```

### Problem: CORS Error ❌

```
Error: Access to XMLHttpRequest blocked by CORS

SOLUTION:
1. Go to https://app.supabase.com
2. Select your project
3. Settings → API
4. Scroll to "URL Configuration"
5. Add your Vercel URL:
   https://your-site.vercel.app
6. Click Save
7. Wait 5 minutes & refresh
```

### Problem: Routes Don't Work ❌

```
/menu shows 404 tapi / works

SOLUTION:
vercel.json sudah configured dengan rewrites.
Tidak perlu action. Coba:
1. Hard refresh (Ctrl+Shift+R)
2. Clear cache
3. Trigger redeploy
```

---

## 🎓 TIPS & TRICKS

### Tip 1: Monitor Deployment

```
Vercel dashboard akan show real-time logs.
Jika error, fix lokal & push ulang.
```

### Tip 2: Rollback ke Versi Sebelumnya

```
Jika deployment error:
1. Dashboard → Deployments
2. Cari deployment sebelumnya (yang sukses)
3. Click "..." → Promote to Production
4. Done! Kembali ke versi sebelumnya
```

### Tip 3: Environment Variables

```
JANGAN hardcode API keys di kode!
Selalu use environment variables.

Vercel auto-inject variables saat build.
Aman dari exposure di GitHub.
```

### Tip 4: Faster Builds

```
Vercel cache build artifacts.
Rebuild biasanya lebih cepat.

Jika slow, check:
- Dependencies count (install hanya yang perlu)
- Build size (optimize images)
- Cache invalidation
```

---

## 📊 DEPLOYMENT TIMELINE

```
Time  | Action              | Status
------|---------------------|--------
 0m   | Click Deploy        | ⏳ Starting
 0.5m | Install deps        | ⏳ Running
 2m   | Build project       | ⏳ Running
 3m   | Optimize            | ⏳ Running
 4m   | Deploy to CDN       | ⏳ Running
 5m   | ✅ LIVE!            | ✅ Complete

Average: 2-5 minutes
```

---

## 🚀 FINAL CHECKLIST

Before deployment:

- [ ] Local build works: `npm run build` ✓
- [ ] `.env.local` has Supabase credentials ✓
- [ ] Code pushed to GitHub ✓
- [ ] Vercel project created ✓
- [ ] Environment variables added ✓

After deployment:

- [ ] Homepage loads ✓
- [ ] Menu items display ✓
- [ ] Cart works ✓
- [ ] Dark mode works ✓
- [ ] Admin panel accessible ✓
- [ ] Responsive design okay ✓

---

## 📞 QUICK HELP

**Q: Gimana cara update website setelah deploy?**
A: Edit code → `git push` → Vercel auto-deploy

**Q: Bisa rollback jika ada error?**
A: Yes! Vercel Deployments tab → Promote previous

**Q: Custom domain cost?**
A: Domain dari registrar Anda (godaddy, namecheap, etc). Vercel hosting gratis.

**Q: Bagaimana update menu items?**
A: Via admin panel (/admin) atau database directly

---

## 🎉 CONGRATULATIONS!

```
Your Kopi Nusantara Brew website is now:

✅ Live on Internet
✅ Accessible 24/7
✅ Served from CDN globally
✅ Using database
✅ With admin panel
✅ Production Ready!
```

**Enjoy your new website!** ☕

---

**Total Time:** 10-15 minutes
**Difficulty:** Easy ⭐⭐
**Status:** ✅ Ready to Go

Created: December 2, 2025
