# HSS Partners Law Firm - Vercel Deployment Guide

## 🚀 Vercel Deployment Solutions

### Problem: ERR_INVALID_THIS pada saat deploy di Vercel
Error ini terjadi karena masalah network atau registry npm. Berikut solusinya:

### ✅ Solution 1: Vercel CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy project
vercel

# Deploy ke production
vercel --prod
```

### ✅ Solution 2: Github Integration (Recommended)
1. Push code ke Github repository
2. Connect repository di Vercel dashboard
3. Set environment variables di Vercel dashboard
4. Auto-deploy akan berjalan setiap push

### ✅ Solution 3: Manual Build Fix
```bash
# Local test build
pnpm run build
pnpm start

# Clear cache jika ada error
pnpm run clean
pnpm run reinstall
pnpm run build
```

### ✅ Solution 4: Vercel Configuration
File `vercel.json` sudah dikonfigurasi dengan:
- Build command: `pnpm build`
- Install command: `pnpm install`
- Security headers
- SEO redirects (robots.txt, sitemap.xml)

## 🔧 Environment Variables untuk Vercel

Set di Vercel dashboard:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://hssplawfirm.com
NODE_ENV=production
```

## 📊 Vercel Optimizations

1. **Regions**: Configured untuk Singapore (sin1) - optimal untuk Indonesia
2. **Functions**: API routes dengan timeout 30 detik
3. **Security**: Headers untuk XSS, CSRF protection
4. **SEO**: Automatic sitemap dan robots.txt routing

## 🎯 SEO Features Ready for Vercel

- ✅ Complete meta tags
- ✅ Structured data (LegalService schema)
- ✅ Sitemap.xml API route
- ✅ Robots.txt API route
- ✅ Web Vitals monitoring
- ✅ Google Analytics integration
- ✅ OpenGraph & Twitter cards
- ✅ Canonical URLs

## 🚨 Troubleshooting Vercel Deployment

### Error: ERR_INVALID_THIS
1. Check Vercel build logs
2. Verify pnpm-lock.yaml is committed
3. Clear Vercel cache: `vercel --force`
4. Contact Vercel support jika error persisten

### Build Success tapi Runtime Error
1. Check environment variables
2. Verify all dependencies dalam package.json
3. Test dengan `vercel dev` locally

Website siap deploy ke Vercel! 🚀
