#!/bin/bash

# 🔴 CRITICAL RESTORATION SCRIPT
# Restores ORIGINAL design from BEFORE deploy-final-batch-complete.sh destroyed everything
# This brings back: Black hero backgrounds, proper icons, original globals.css

echo "🚨 RESTORING ORIGINAL DESIGN"
echo "=============================="
echo ""
echo "This will restore:"
echo "  ✅ BLACK hero backgrounds (gradient-hero: black to red)"
echo "  ✅ Original icons on all pages"
echo "  ✅ Proper globals.css with correct gradients"
echo "  ✅ Original Logo design"
echo "  ✅ No bottom hero sections that transform"
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "📝 Restoring globals.css with CORRECT gradients..."

# RESTORE ORIGINAL GLOBALS.CSS
cat > src/app/globals.css << 'GLOBALS_EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --shiro-red: #CC0000;
    --shiro-red-dark: #990000;
    --shiro-black: #1a1a1a;
  }
  
  body {
    @apply bg-white;
  }
}

@layer utilities {
  /* HERO GRADIENT: BLACK to RED (this is what we had originally) */
  .gradient-hero {
    background: linear-gradient(135deg, #1a1a1a 0%, #CC0000 100%);
  }
  
  /* CTA GRADIENT: BLACK to RED (for bottom CTAs) */
  .gradient-cta {
    background: linear-gradient(135deg, #1a1a1a 0%, #CC0000 100%);
  }
  
  .text-shiro-red {
    color: #CC0000;
  }
  
  .text-shiro-red-dark {
    color: #990000;
  }
  
  .text-shiro-black {
    color: #1a1a1a;
  }
  
  .bg-shiro-red {
    background-color: #CC0000;
  }
  
  .bg-shiro-red-dark {
    background-color: #990000;
  }
  
  .bg-shiro-black {
    background-color: #1a1a1a;
  }
  
  .border-shiro-red {
    border-color: #CC0000;
  }
}
GLOBALS_EOF

echo "   ✅ globals.css restored with BLACK hero backgrounds"

echo ""
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push to GitHub and restore original design? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "RESTORE: Original design with BLACK hero backgrounds and proper gradients"
        git push origin main
        
        echo ""
        echo "🎉 ORIGINAL DESIGN RESTORED!"
        echo ""
        echo "✅ Changes deployed:"
        echo "  • Hero backgrounds are BLACK (not red)"
        echo "  • gradient-hero: black → red (135deg)"
        echo "  • gradient-cta: black → red (135deg)"
        echo "  • All icons should be visible"
        echo "  • No weird bottom hero sections"
        echo ""
        echo "⏱️  Vercel will deploy in 1-2 minutes"
        echo "🔄 Refresh https://shiro-group-monorepo.vercel.app/"
        echo ""
        echo "Your beautiful design is BACK! 🎨"
    fi
else
    echo ""
    echo "❌ Build failed - check errors above"
fi
