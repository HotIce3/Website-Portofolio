# 🚀 Deployment Guide - Kopi Nusantara Brew

## ✅ Pre-Deployment Checklist

- [ ] All env variables configured
- [ ] Database migrations completed
- [ ] Admin credentials set
- [ ] Images optimized
- [ ] Build tested locally
- [ ] SEO meta tags verified
- [ ] Analytics setup (optional)

## 📦 Deploy to Vercel

### Step 1: Prepare GitHub Repository

```bash
# Initialize git if not done
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Kopi Nusantara Brew website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/kopi-nusantara-brew.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:

   - **Framework**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variables:

   ```
   VITE_SUPABASE_URL = your-supabase-url
   VITE_SUPABASE_ANON_KEY = your-anon-key
   ```

6. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration
4. Wait for SSL certificate (5-10 mins)

## 🌐 Setup Supabase

### Create Database Tables

1. Go to Supabase Dashboard
2. Open SQL Editor
3. Paste `database.sql` contents
4. Execute all queries

### Enable Row Level Security (RLS)

```sql
-- For public tables (menu, testimonials)
ALTER TABLE menu ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read" ON menu FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON testimonials FOR SELECT USING (true);

-- Auth write policy
CREATE POLICY "Allow admin write" ON menu FOR INSERT USING (auth.role() = 'authenticated');
```

### Setup Storage Buckets

```sql
-- Create bucket for menu images
INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-images', 'menu-images', true);

-- Create bucket policy
CREATE POLICY "Allow public read" ON storage.objects FOR SELECT USING (bucket_id = 'menu-images');
```

## 🔐 Security Configuration

### Admin Authentication

Demo credentials (change in production):

- Email: `admin@kopinusantara.com`
- Password: `Admin@2024`

### Environment Variables

Never commit `.env.local`. Vercel handles this automatically via project settings.

### CORS Configuration

If needed, configure CORS in Supabase:

1. Go to Settings → API
2. Add your domain to CORS whitelist

## 📊 Monitoring & Analytics

### Vercel Analytics

- Automatic performance monitoring
- Real User Monitoring (RUM)
- Web Vitals tracking

### Supabase Monitoring

- Database size
- API usage
- Connection count

### Setup Google Analytics (Optional)

```javascript
// Add to main.jsx
import { useEffect } from "react";

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=GA_ID";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
}, []);
```

## 🔄 CI/CD Pipeline

### Automatic Deployments

Vercel automatically deploys on push to main:

```bash
# Trigger deployment
git push origin main

# Or redeploy latest
vercel --prod
```

### Preview Deployments

Every pull request gets a preview URL for testing.

## 🧪 Testing Before Production

```bash
# Build for production
npm run build

# Test build locally
npm run preview

# Check build size
npm run build -- --debug
```

## 📧 Email Notifications

Configure in Vercel Project Settings:

- Failed deployments
- Production issues
- Performance alerts

## 🛠️ Troubleshooting Deployments

### Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules .next dist
npm install
npm run build
```

### Environment variables not loading

- Verify in Vercel dashboard
- Restart deployment
- Use correct names (VITE\_\* prefix)

### Database connection timeout

- Check Supabase region
- Verify network whitelisting
- Test connection locally first

### Images not loading

- Check Supabase Storage permissions
- Verify image URLs are public
- Use HTTPS URLs only

## 📈 Post-Deployment

### Performance Optimization

1. **Image Optimization**

   - Use WebP format
   - Lazy loading for images
   - Responsive images (srcset)

2. **Code Splitting**

   - React Router lazy loading
   - Dynamic imports for admin
   - Tree shaking enabled

3. **Caching Strategy**
   - Browser cache (30 days)
   - CDN cache (1 day)
   - Vercel caching enabled

### SEO Optimization

- [ ] Meta tags verified
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured
- [ ] Open Graph tags
- [ ] Schema markup added

### Monitoring Setup

```javascript
// Error tracking (optional)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
});
```

## 🔄 Update Deployment

To push updates to production:

```bash
# Make changes locally
# Test everything

# Commit and push
git add .
git commit -m "Update message"
git push origin main

# Vercel will automatically deploy
```

## 📞 Support & Rollback

### View Deployment History

- Vercel Dashboard → Deployments
- Shows all previous versions
- 1-click rollback available

### Emergency Rollback

```bash
# Vercel CLI
npm install -g vercel

# Rollback to previous
vercel rollback
```

---

**Deployment Success! 🎉**

Your Kopi Nusantara Brew website is now live on the internet!
