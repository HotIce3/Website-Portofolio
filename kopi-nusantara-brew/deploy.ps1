# Vercel Deployment Helper Script for Windows
# Memudahkan proses deployment ke Vercel

Write-Host ""
Write-Host "🚀 Kopi Nusantara Brew - Vercel Deployment Helper" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "   Install from: https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "What do you want to do?" -ForegroundColor Cyan
Write-Host "1. Build & preview (test production build locally)"
Write-Host "2. Check build status"
Write-Host "3. Show deployment steps"
Write-Host "4. Verify environment setup"
Write-Host "5. Prepare Git & push to GitHub"
Write-Host ""

$option = Read-Host "Choose option (1-5)"

switch ($option) {
    "1" {
        Write-Host ""
        Write-Host "Building project..." -ForegroundColor Cyan
        npm run build
        
        Write-Host ""
        Write-Host "✅ Build successful!" -ForegroundColor Green
        Write-Host ""
        Write-Host "To preview production build:" -ForegroundColor Yellow
        Write-Host "  npm run preview"
        Write-Host ""
        Write-Host "Then open: http://localhost:4173"
        Write-Host ""
    }
    
    "2" {
        Write-Host ""
        Write-Host "📋 Project status:" -ForegroundColor Cyan
        Write-Host ""
        
        # Check files
        if (Test-Path "package.json") {
            Write-Host "✅ package.json exists" -ForegroundColor Green
        } else {
            Write-Host "❌ package.json not found" -ForegroundColor Red
        }
        
        if (Test-Path "vercel.json") {
            Write-Host "✅ vercel.json configured" -ForegroundColor Green
        } else {
            Write-Host "❌ vercel.json not found" -ForegroundColor Red
        }
        
        if (Test-Path ".vercelignore") {
            Write-Host "✅ .vercelignore configured" -ForegroundColor Green
        } else {
            Write-Host "❌ .vercelignore not found" -ForegroundColor Red
        }
        
        if (Test-Path ".env.example") {
            Write-Host "✅ .env.example exists" -ForegroundColor Green
        } else {
            Write-Host "❌ .env.example not found" -ForegroundColor Red
        }
        
        if (Test-Path "src" -PathType Container) {
            Write-Host "✅ src/ directory exists" -ForegroundColor Green
        } else {
            Write-Host "❌ src/ directory not found" -ForegroundColor Red
        }
        
        if (Test-Path "public" -PathType Container) {
            Write-Host "✅ public/ directory exists" -ForegroundColor Green
        } else {
            Write-Host "❌ public/ directory not found" -ForegroundColor Red
        }
        
        Write-Host ""
    }
    
    "3" {
        Write-Host ""
        Write-Host "📋 Deployment Steps:" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1️⃣  Prepare repository:"
        Write-Host "    git add ."
        Write-Host "    git commit -m 'Ready for Vercel deployment'"
        Write-Host "    git push origin main"
        Write-Host ""
        Write-Host "2️⃣  Connect to Vercel:"
        Write-Host "    • Visit https://vercel.com/dashboard"
        Write-Host "    • Click 'Add New' → 'Project'"
        Write-Host "    • Import your GitHub repository"
        Write-Host ""
        Write-Host "3️⃣  Configure project:"
        Write-Host "    • Framework: Vite (auto-detected)"
        Write-Host "    • Build Command: npm run build"
        Write-Host "    • Output Directory: dist"
        Write-Host ""
        Write-Host "4️⃣  Add environment variables:" -ForegroundColor Yellow
        Write-Host "    • Name: VITE_SUPABASE_URL"
        Write-Host "    • Value: https://xxxxx.supabase.co"
        Write-Host ""
        Write-Host "    • Name: VITE_SUPABASE_ANON_KEY"
        Write-Host "    • Value: eyJhbGc..."
        Write-Host ""
        Write-Host "5️⃣  Deploy:"
        Write-Host "    • Click 'Deploy' button"
        Write-Host "    • Wait 2-5 minutes"
        Write-Host "    • Done! 🎉"
        Write-Host ""
        Write-Host "For detailed guide, read:" -ForegroundColor Yellow
        Write-Host "  • VERCEL_SETUP_CHECKLIST.md"
        Write-Host "  • VERCEL_DEPLOYMENT.md"
        Write-Host ""
    }
    
    "4" {
        Write-Host ""
        Write-Host "Checking environment setup..." -ForegroundColor Cyan
        Write-Host ""
        
        # Check .env.local
        if (Test-Path ".env.local") {
            Write-Host "✅ .env.local exists" -ForegroundColor Green
            
            $envContent = Get-Content ".env.local"
            if ($envContent -match "VITE_SUPABASE_URL") {
                Write-Host "   ✅ VITE_SUPABASE_URL configured" -ForegroundColor Green
            } else {
                Write-Host "   ❌ VITE_SUPABASE_URL not found" -ForegroundColor Red
            }
            
            if ($envContent -match "VITE_SUPABASE_ANON_KEY") {
                Write-Host "   ✅ VITE_SUPABASE_ANON_KEY configured" -ForegroundColor Green
            } else {
                Write-Host "   ❌ VITE_SUPABASE_ANON_KEY not found" -ForegroundColor Red
            }
        } else {
            Write-Host "ℹ️  .env.local not found" -ForegroundColor Yellow
            Write-Host "   Create from .env.example:" -ForegroundColor Yellow
            Write-Host "   copy .env.example .env.local"
        }
        
        Write-Host ""
        Write-Host "Dependencies:" -ForegroundColor Cyan
        
        $packageContent = Get-Content "package.json"
        if ($packageContent -match '"react"') {
            Write-Host "✅ React configured" -ForegroundColor Green
        } else {
            Write-Host "❌ React not found in package.json" -ForegroundColor Red
        }
        
        if ($packageContent -match '"vite"') {
            Write-Host "✅ Vite configured" -ForegroundColor Green
        } else {
            Write-Host "❌ Vite not found in package.json" -ForegroundColor Red
        }
        
        if ($packageContent -match '"tailwindcss"') {
            Write-Host "✅ Tailwind CSS configured" -ForegroundColor Green
        } else {
            Write-Host "❌ Tailwind CSS not found in package.json" -ForegroundColor Red
        }
        
        Write-Host ""
        Write-Host "Git status:" -ForegroundColor Cyan
        if (Test-Path ".git" -PathType Container) {
            Write-Host "✅ Git repository initialized" -ForegroundColor Green
            
            try {
                $remote = & git remote get-url origin
                Write-Host "✅ Remote URL: $remote" -ForegroundColor Green
            } catch {
                Write-Host "ℹ️  No remote URL set" -ForegroundColor Yellow
            }
        } else {
            Write-Host "ℹ️  Git repository not initialized" -ForegroundColor Yellow
            Write-Host "   Run: git init" -ForegroundColor Yellow
        }
        
        Write-Host ""
    }
    
    "5" {
        Write-Host ""
        Write-Host "Preparing Git & pushing to GitHub..." -ForegroundColor Cyan
        Write-Host ""
        
        Write-Host "Before continuing, make sure:" -ForegroundColor Yellow
        Write-Host "1. You have a GitHub repository created"
        Write-Host "2. You have Git configured locally"
        Write-Host ""
        
        $remote = Read-Host "Enter GitHub repository URL (or press Enter to skip)"
        
        if ($remote) {
            Write-Host ""
            Write-Host "Adding files..." -ForegroundColor Cyan
            & git add .
            
            Write-Host "Committing changes..." -ForegroundColor Cyan
            $message = Read-Host "Commit message (default: 'Ready for Vercel deployment')"
            if (!$message) { $message = "Ready for Vercel deployment" }
            & git commit -m $message
            
            Write-Host ""
            Write-Host "Setting remote origin..." -ForegroundColor Cyan
            & git remote remove origin 2>$null
            & git remote add origin $remote
            
            Write-Host "Pushing to main branch..." -ForegroundColor Cyan
            & git branch -M main
            & git push -u origin main
            
            Write-Host ""
            Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
            Write-Host ""
            Write-Host "Next steps:" -ForegroundColor Yellow
            Write-Host "1. Visit https://vercel.com/dashboard"
            Write-Host "2. Click 'Add New' → 'Project'"
            Write-Host "3. Import the repository"
            Write-Host "4. Add Supabase environment variables"
            Write-Host "5. Deploy!"
            Write-Host ""
        } else {
            Write-Host "Skipped. Remember to push your code to GitHub first!" -ForegroundColor Yellow
        }
    }
    
    default {
        Write-Host "Invalid option!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Done! ✨" -ForegroundColor Green
