#!/bin/bash
# Vercel Deployment Helper Script
# Memudahkan proses deployment ke Vercel

set -e

echo "🚀 Kopi Nusantara Brew - Vercel Deployment Helper"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed!${NC}"
    echo "   Install from: https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✅ Node.js version: $(node --version)${NC}"
echo ""

# Menu
echo "What do you want to do?"
echo "1. Build & preview (test production build locally)"
echo "2. Check build status"
echo "3. Show deployment steps"
echo "4. Verify environment setup"
echo ""
read -p "Choose option (1-4): " option

case $option in
    1)
        echo ""
        echo -e "${BLUE}Building project...${NC}"
        npm run build
        
        echo ""
        echo -e "${GREEN}✅ Build successful!${NC}"
        echo ""
        echo -e "${YELLOW}To preview production build:${NC}"
        echo "  npm run preview"
        echo ""
        echo "Then open: http://localhost:4173"
        echo ""
        ;;
    
    2)
        echo ""
        echo -e "${BLUE}Project status:${NC}"
        echo ""
        
        # Check package.json
        if [ -f "package.json" ]; then
            echo -e "${GREEN}✅ package.json exists${NC}"
        else
            echo -e "${RED}❌ package.json not found${NC}"
        fi
        
        # Check vercel.json
        if [ -f "vercel.json" ]; then
            echo -e "${GREEN}✅ vercel.json configured${NC}"
        else
            echo -e "${RED}❌ vercel.json not found${NC}"
        fi
        
        # Check .vercelignore
        if [ -f ".vercelignore" ]; then
            echo -e "${GREEN}✅ .vercelignore configured${NC}"
        else
            echo -e "${RED}❌ .vercelignore not found${NC}"
        fi
        
        # Check .env.example
        if [ -f ".env.example" ]; then
            echo -e "${GREEN}✅ .env.example exists${NC}"
        else
            echo -e "${RED}❌ .env.example not found${NC}"
        fi
        
        # Check src directory
        if [ -d "src" ]; then
            echo -e "${GREEN}✅ src/ directory exists${NC}"
        else
            echo -e "${RED}❌ src/ directory not found${NC}"
        fi
        
        # Check public directory
        if [ -d "public" ]; then
            echo -e "${GREEN}✅ public/ directory exists${NC}"
        else
            echo -e "${RED}❌ public/ directory not found${NC}"
        fi
        
        echo ""
        ;;
    
    3)
        echo ""
        echo -e "${BLUE}📋 Deployment Steps:${NC}"
        echo ""
        echo "1️⃣  Prepare repository:"
        echo "    git add ."
        echo "    git commit -m 'Ready for Vercel deployment'"
        echo "    git push origin main"
        echo ""
        echo "2️⃣  Connect to Vercel:"
        echo "    • Visit https://vercel.com/dashboard"
        echo "    • Click 'Add New' → 'Project'"
        echo "    • Import your GitHub repository"
        echo ""
        echo "3️⃣  Configure project:"
        echo "    • Framework: Vite (auto-detected)"
        echo "    • Build Command: npm run build"
        echo "    • Output Directory: dist"
        echo ""
        echo "4️⃣  Add environment variables:"
        echo "    • Name: VITE_SUPABASE_URL"
        echo "    • Value: https://xxxxx.supabase.co"
        echo ""
        echo "    • Name: VITE_SUPABASE_ANON_KEY"
        echo "    • Value: eyJhbGc..."
        echo ""
        echo "5️⃣  Deploy:"
        echo "    • Click 'Deploy' button"
        echo "    • Wait 2-5 minutes"
        echo "    • Done! 🎉"
        echo ""
        echo -e "${YELLOW}For detailed guide, read:${NC}"
        echo "  • VERCEL_SETUP_CHECKLIST.md"
        echo "  • VERCEL_DEPLOYMENT.md"
        echo ""
        ;;
    
    4)
        echo ""
        echo -e "${BLUE}Checking environment setup...${NC}"
        echo ""
        
        # Check .env.local
        if [ -f ".env.local" ]; then
            echo -e "${GREEN}✅ .env.local exists${NC}"
            
            if grep -q "VITE_SUPABASE_URL" .env.local; then
                echo -e "${GREEN}   ✅ VITE_SUPABASE_URL configured${NC}"
            else
                echo -e "${RED}   ❌ VITE_SUPABASE_URL not found${NC}"
            fi
            
            if grep -q "VITE_SUPABASE_ANON_KEY" .env.local; then
                echo -e "${GREEN}   ✅ VITE_SUPABASE_ANON_KEY configured${NC}"
            else
                echo -e "${RED}   ❌ VITE_SUPABASE_ANON_KEY not found${NC}"
            fi
        else
            echo -e "${YELLOW}ℹ️  .env.local not found${NC}"
            echo "   Create from .env.example:"
            echo "   cp .env.example .env.local"
        fi
        
        echo ""
        echo -e "${BLUE}Dependencies:${NC}"
        
        if npm list react &> /dev/null; then
            echo -e "${GREEN}✅ React installed${NC}"
        else
            echo -e "${RED}❌ React not installed${NC}"
            echo "   Run: npm install"
        fi
        
        if npm list vite &> /dev/null; then
            echo -e "${GREEN}✅ Vite installed${NC}"
        else
            echo -e "${RED}❌ Vite not installed${NC}"
            echo "   Run: npm install"
        fi
        
        if npm list tailwindcss &> /dev/null; then
            echo -e "${GREEN}✅ Tailwind CSS installed${NC}"
        else
            echo -e "${RED}❌ Tailwind CSS not installed${NC}"
            echo "   Run: npm install"
        fi
        
        echo ""
        echo -e "${BLUE}Git status:${NC}"
        if [ -d ".git" ]; then
            echo -e "${GREEN}✅ Git repository initialized${NC}"
            
            if git remote get-url origin &> /dev/null; then
                echo -e "${GREEN}✅ Remote URL: $(git remote get-url origin)${NC}"
            else
                echo -e "${YELLOW}ℹ️  No remote URL set${NC}"
            fi
        else
            echo -e "${YELLOW}ℹ️  Git repository not initialized${NC}"
            echo "   Run: git init"
        fi
        
        echo ""
        ;;
    
    *)
        echo -e "${RED}Invalid option!${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}Done! ✨${NC}"
