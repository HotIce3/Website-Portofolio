# 🚀 Panduan Deploy ke Vercel

## Persyaratan

- GitHub account (push kode ke repository)
- Vercel account (https://vercel.com)
- Supabase project aktif dengan URL & Anon Key

## Langkah-Langkah Deployment

### 1. Siapkan Repository GitHub

```bash
# Jika belum ada git repository
git init
git add .
git commit -m "Initial commit: Kopi Nusantara Brew website"

# Buat repository di GitHub lalu push
git remote add origin https://github.com/YOUR_USERNAME/kopi-nusantara-brew.git
git branch -M main
git push -u origin main
```

### 2. Deploy via Vercel Web

1. Buka https://vercel.com/dashboard
2. Klik **"Add New..."** → **"Project"**
3. Pilih **"Import Git Repository"**
4. Cari & pilih repository `kopi-nusantara-brew`
5. Klik **"Import"**

### 3. Konfigurasi Environment Variables

Di halaman project settings Vercel:

1. Pergi ke **Settings** → **Environment Variables**
2. Tambahkan 2 variabel:
   - **Name:** `VITE_SUPABASE_URL`
     - **Value:** [URL Supabase project Anda]
   - **Name:** `VITE_SUPABASE_ANON_KEY`
     - **Value:** [Anon Key dari Supabase]
3. Klik **"Save"**

### 4. Deploy

1. Klik tombol **"Deploy"**
2. Tunggu proses build selesai (biasanya 2-5 menit)
3. Vercel akan memberikan URL unik, contoh: `https://kopi-nusantara-brew.vercel.app`

### 5. Custom Domain (Opsional)

1. Di Settings → **Domains**
2. Klik **"Add"**
3. Masukkan domain Anda (contoh: `kopinusantara.com`)
4. Update DNS settings sesuai petunjuk Vercel

## File Konfigurasi yang Digunakan

### `vercel.json`

Konfigurasi utama Vercel:

- **buildCommand:** `npm run build` (build Vite project)
- **framework:** `vite` (framework Vite)
- **outputDirectory:** `dist` (output build)
- **rewrites:** Redirect semua routes ke `index.html` (untuk React Router)
- **env:** Deklarasi environment variables yang diperlukan

### `.vercelignore`

File yang diabaikan saat deployment:

- `node_modules` (akan diinstall ulang)
- `.env` & environment files (untuk security)
- `.md` files (documentation tidak perlu)
- `.git` & source control files

### `vercel-output.json`

Konfigurasi cache & routing (Vercel 3):

- Assets (CSS, JS) di-cache selama 1 tahun (immutable)
- HTML index di-cache 0 detik (always fresh)
- Semua routes di-redirect ke `index.html`

## Build Process

Vercel akan menjalankan perintah berikut secara otomatis:

```bash
# 1. Install dependencies
npm ci

# 2. Build project
npm run build

# 3. Output akan di-serve dari direktori 'dist'
```

## Troubleshooting

### Build Gagal

**Error: "Cannot find module '@supabase/supabase-js'"**

- Pastikan di `vercel.json`, `installCommand` adalah `npm ci`
- Vercel akan otomatis jalankan `npm install` jika tidak dispesifikasi

### Website Blank Setelah Deploy

**Problem:** Halaman kosong di production
**Solusi:**

1. Cek browser console untuk error (F12)
2. Pastikan VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY sudah benar
3. Cek Vercel Logs: Settings → **Function Logs**

### Routing Tidak Bekerja

**Problem:** Refresh halaman /menu menunjukkan 404
**Solusi:** File `vercel.json` sudah handle dengan `rewrites` ke `index.html`

### API Request Gagal (CORS Error)

**Problem:** Request ke Supabase diblokir
**Solusi:**

1. Buka https://app.supabase.com
2. Pilih project Anda
3. Pergi ke **Settings** → **API**
4. Update **URL Configuration** → tambahkan domain Vercel Anda

## Continuous Deployment (Auto-Deploy)

Vercel otomatis deploy ketika ada `git push`:

```bash
# Update code lokal
git add .
git commit -m "Update website"
git push origin main

# Vercel akan otomatis build & deploy
# Lihat progress di https://vercel.com/dashboard
```

## Monitoring & Analytics

Di Vercel Dashboard:

1. **Analytics** - Lihat traffic & performance
2. **Function Logs** - Debug error runtime
3. **Deployments** - Lihat history deploy
4. **Rollback** - Kembalikan ke versi sebelumnya jika ada error

## Tips Performance

1. **Images Optimization:**

   ```jsx
   // Gunakan relative paths di public/
   <img src="/images/hero.jpg" alt="Hero" loading="lazy" />
   ```

2. **Code Splitting:** Vite otomatis handle

3. **Environment Variables:** Jangan pernah expose API keys

## Testing Production Build Lokal

```bash
# Build production
npm run build

# Preview hasil production build
npm run preview

# Akses di http://localhost:5000
```

## Environment Variables Reference

| Variable                 | Contoh                    | Diperoleh dari                      |
| ------------------------ | ------------------------- | ----------------------------------- |
| `VITE_SUPABASE_URL`      | `https://xxx.supabase.co` | Supabase Dashboard → Settings → API |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOi...`           | Supabase Dashboard → Settings → API |

## Dokumentasi Lebih Lanjut

- Vercel Docs: https://vercel.com/docs
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html#vercel
- Supabase CORS: https://supabase.com/docs/guides/auth/managing-user-data

---

**Estimasi waktu:** 5-10 menit dari GitHub push sampai live di vercel.app ✨
