# 🚀 Kopi Nusantara Brew - Deploy ke Vercel

**Status:** ✅ Siap deploy ke Vercel

---

## 📦 File Vercel yang Sudah Ada

```
✅ vercel.json           → Konfigurasi Vercel (SUDAH FIXED!)
✅ .vercelignore         → File yang diabaikan saat deploy
✅ vercel-output.json    → Cache & routing config
✅ .env.production       → Template environment variables
✅ deploy.ps1            → Script helper (Windows)
✅ deploy.sh             → Script helper (macOS/Linux)
```

---

## 🎯 3-Step Deploy ke Vercel

### Step 1️⃣ : Push ke GitHub

```bash
git add .
git commit -m "Deploy ke Vercel"
git push origin main
```

### Step 2️⃣ : Buka Vercel Dashboard

1. Pergi ke https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Import repository `kopi-nusantara-brew`
4. Click **Import**

### Step 3️⃣ : Tambah Environment Variables

Di halaman project settings:

| Variable                 | Value                                       |
| ------------------------ | ------------------------------------------- |
| `VITE_SUPABASE_URL`      | `https://xxxxx.supabase.co` (dari Supabase) |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGc...` (dari Supabase)                |

Lalu click **Deploy** ✨

---

## 📚 Dokumentasi Utama

| File                          | Fungsi                     | Baca Kapan                   |
| ----------------------------- | -------------------------- | ---------------------------- |
| **README.md**                 | Overview project           | Pertama kali                 |
| **QUICK_START.md**            | Setup lokal                | Sebelum coding               |
| **VERCEL_SETUP_CHECKLIST.md** | ✅ Deployment step-by-step | **👈 BACA INI UNTUK DEPLOY** |
| **VERCEL_DEPLOYMENT.md**      | Detail deployment guide    | Jika ada error               |
| **DEVELOPMENT.md**            | Cara customize code        | Setelah deploy               |
| **PROJECT_STRUCTURE.md**      | Struktur folder/file       | Referensi                    |
| **API_DOCS.md**               | REST API documentation     | Untuk integration            |
| **BRAND_GUIDE.md**            | Design system              | Untuk customize UI           |
| **DEPLOYMENT_GUIDE.md**       | Comprehensive deployment   | Advanced setup               |
| **SUMMARY.md**                | Project executive summary  | Overview cepat               |

---

## ⚡ Quick Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)

# Production
npm run build           # Build untuk production
npm run preview         # Preview build lokal

# Helper scripts
.\deploy.ps1            # Windows - Interactive menu
bash deploy.sh          # macOS/Linux - Interactive menu
```

---

## 🔑 Environment Variables (dari Supabase)

Get dari: **Supabase Dashboard → Settings → API**

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## ✅ Sebelum Deploy

- [ ] `npm run build` berhasil lokal
- [ ] Code sudah di-push ke GitHub
- [ ] Supabase credentials siap
- [ ] Vercel account sudah created

---

## 🎓 NEXT STEPS

### Untuk Deploy Sekarang:

**Baca file:** `VERCEL_SETUP_CHECKLIST.md`

### Untuk Setup Lokal Dulu:

**Baca file:** `QUICK_START.md`

### Untuk Understand Project:

**Baca file:** `README.md`

---

## 🆘 Error: `buildOutputDirectory`

✅ **FIXED!** File `vercel.json` sudah diperbaiki.

Duplikasi property dihapus. Deploy sekarang sudah bisa lancar!

---

## 📞 Support

Jika ada masalah:

1. Check: `VERCEL_SETUP_CHECKLIST.md` → Troubleshooting section
2. Check: `VERCEL_DEPLOYMENT.md` → Detailed explanation
3. Check: Browser console (F12) untuk error

---

**Created:** December 2, 2025  
**Status:** ✅ Production Ready  
**Error:** ✅ FIXED

🚀 **Siap deploy! Baca VERCEL_SETUP_CHECKLIST.md**
