# 📦 File Konfigurasi Vercel - Penjelasan

Project ini sudah dikonfigurasi sepenuhnya untuk deployment ke Vercel. Berikut file-file yang telah ditambahkan:

## ✅ File Deployment yang Sudah Ada

### 1. **vercel.json** (Main Configuration)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "vite",
  "outputDirectory": "dist",
  "rewrites": [...]
}
```

**Fungsi:** Memberitahu Vercel cara build & serve aplikasi React
**Penting untuk:** SPA routing (React Router tetap berfungsi)

### 2. **.vercelignore**

```
node_modules
.env
.git
*.md (except README)
```

**Fungsi:** Mengabaikan file yang tidak perlu saat deploy
**Manfaat:** Deployment lebih cepat & storage lebih efisien

### 3. **vercel-output.json**

```json
{
  "routes": [
    { "src": "/assets/.*", "Cache-Control": "max-age=31536000" },
    { "src": "/index.html", "Cache-Control": "max-age=0" }
  ]
}
```

**Fungsi:** Konfigurasi caching & CDN
**Manfaat:**

- Assets (CSS/JS) di-cache 1 tahun
- HTML always fresh (0 cache)
- Performa lebih cepat globally

### 4. **.env.production**

```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

**Fungsi:** Template environment variables untuk production
**Catatan:** Jangan di-commit! Setup di Vercel Dashboard saja

### 5. **.github/workflows/vercel-deploy.yml**

```yaml
on:
  push:
    branches: [main]
```

**Fungsi:** GitHub Actions automation
**Manfaat:** Auto-deploy saat git push (optional, belum active)

---

## 🚀 3 Step untuk Deploy

### **Step 1: Push ke GitHub**

```bash
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### **Step 2: Connect di Vercel**

1. Buka https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Import repository `kopi-nusantara-brew`
4. Click **Import**

### **Step 3: Set Environment Variables**

1. Pergi ke project **Settings** → **Environment Variables**
2. Add:
   - `VITE_SUPABASE_URL` = [dari Supabase]
   - `VITE_SUPABASE_ANON_KEY` = [dari Supabase]
3. Click **Deploy**

**Selesai!** Site live dalam 2-5 menit ✨

---

## 📋 Panduan Lengkap

Untuk panduan detail, baca file ini (dalam urutan):

1. **VERCEL_SETUP_CHECKLIST.md** ← **Mulai dari sini!**

   - ✅/❌ checklist step-by-step
   - Troubleshooting guide
   - Testing procedures

2. **VERCEL_DEPLOYMENT.md**

   - Penjelasan detail setiap step
   - Tips & tricks
   - Performance optimization

3. **DEPLOYMENT_GUIDE.md** (Existing)
   - Comprehensive guide
   - Supabase setup
   - Monitoring

---

## 🔍 File Checklist

```
✅ vercel.json               → Main config untuk build
✅ .vercelignore             → Ignore files saat deploy
✅ vercel-output.json        → Cache & routing config
✅ .env.production           → Environment template
✅ .github/workflows/        → GitHub Actions (optional)
✅ VERCEL_DEPLOYMENT.md      → Panduan lengkap
✅ VERCEL_SETUP_CHECKLIST.md → Checklist praktis
```

Semua file sudah tersedia! 🎉

---

## 📱 Testing Sebelum Deploy

```bash
# 1. Build lokal
npm run build

# 2. Preview hasil build (production-like)
npm run preview

# 3. Buka http://localhost:4173
# Pastikan semua berfungsi normal

# 4. Jika OK, siap deploy! 🚀
git push origin main
```

---

## 🔐 Security Notes

- ❌ Jangan commit `.env` files
- ❌ Jangan hardcode API keys di code
- ✅ Semua env variables di `.gitignore`
- ✅ Setup di Vercel Dashboard saja
- ✅ HTTPS automatically enabled by Vercel

---

**Ready to deploy? Baca VERCEL_SETUP_CHECKLIST.md sekarang!** 🚀
