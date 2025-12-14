#!/bin/bash

# 🔴 CORRECT DESIGN RESTORATION
# Restores ORIGINAL black-to-dark-gray gradient (NOT black-to-red!)

echo "🎯 RESTORING CORRECT ORIGINAL DESIGN"
echo "===================================="
echo ""
echo "Original Hero Background:"
echo "  ❌ WRONG: Black → Red gradient"
echo "  ✅ CORRECT: Black (#1a1a1a) → Dark Gray (#333333)"
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "📝 Restoring ORIGINAL globals.css..."

cat > src/app/globals.css << 'GLOBALS_EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;
    --primary: 0 84% 40%; /* SHIRO Red #CC0000 */
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 10%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 40%;
    --accent: 0 0% 96%;
    --accent-foreground: 0 0% 10%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 84% 40%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* Custom SHIRO utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* ORIGINAL gradient backgrounds */
.gradient-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
}

.gradient-cta {
  background: linear-gradient(135deg, #CC0000, #990000);
}
GLOBALS_EOF

echo "   ✅ globals.css restored with CORRECT gradients"
echo "      Hero: #1a1a1a (black) → #333333 (dark gray)"
echo "      CTA:  #CC0000 (red) → #990000 (dark red)"

echo ""
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push to GitHub and restore CORRECT design? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "RESTORE: Correct original design - Black-to-gray gradient (NOT black-to-red)"
        git push origin main
        
        echo ""
        echo "🎉 CORRECT DESIGN RESTORED!"
        echo ""
        echo "✅ Changes:"
        echo "  • Hero: Black (#1a1a1a) → Dark Gray (#333333)"
        echo "  • CTA:  Red (#CC0000) → Dark Red (#990000)"
        echo "  • NO black-to-red gradient on hero!"
        echo ""
        echo "⏱️  Vercel deploying in 1-2 minutes"
        echo "🌐 https://shiro-group-monorepo.vercel.app/"
    fi
else
    echo ""
    echo "❌ Build failed - check errors above"
fi
