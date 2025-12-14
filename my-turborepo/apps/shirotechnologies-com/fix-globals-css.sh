#!/bin/bash

# 🔧 FIX: Remove problematic border-border line from globals.css

echo "🔧 FIXING globals.css - Removing border-border error"
echo "===================================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "📝 Creating FIXED globals.css..."

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
    @apply bg-white text-gray-900;
  }
}

@layer utilities {
  /* ORIGINAL gradient backgrounds */
  .gradient-hero {
    background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  }
  
  .gradient-cta {
    background: linear-gradient(135deg, #CC0000, #990000);
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
  
  .bg-shiro-gray {
    background-color: #f5f5f5;
  }
  
  .bg-shiro-gray-dark {
    background-color: #333333;
  }
  
  .text-shiro-gray-dark {
    color: #666666;
  }
  
  .border-shiro-red {
    border-color: #CC0000;
  }
  
  .hover\:bg-shiro-red-dark:hover {
    background-color: #990000;
  }
  
  .hover\:text-shiro-red-dark:hover {
    color: #990000;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
GLOBALS_EOF

echo "   ✅ globals.css FIXED"
echo "      • Removed problematic @apply border-border line"
echo "      • Added all SHIRO color utilities"
echo "      • Gradient-hero: Black → Dark Gray"
echo "      • Gradient-cta: Red → Dark Red"

echo ""
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "FIX: Remove border-border error, restore correct black-to-gray gradient"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED!"
        echo ""
        echo "✅ Fixed and restored:"
        echo "  • No more border-border error"
        echo "  • Hero: Black (#1a1a1a) → Dark Gray (#333333)"
        echo "  • All SHIRO utilities working"
        echo ""
        echo "⏱️  Vercel deploying in 1-2 minutes"
    fi
else
    echo ""
    echo "❌ Build still failing - check errors above"
fi
