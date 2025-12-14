#!/bin/bash

# SHIRO Technologies - CLEAN GLOBALS.CSS
# Simple, error-free CSS file

echo "🎨 CREATING CLEAN GLOBALS.CSS"
echo "=============================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "📝 Creating clean globals.css..."

cat > src/app/globals.css << 'GLOBALS_CSS_EOF'
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
  .gradient-hero {
    background: linear-gradient(135deg, #CC0000 0%, #990000 100%);
  }
  
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
GLOBALS_CSS_EOF

echo "   ✅ Clean globals.css created"
echo ""

# Build test
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
        git commit -m "Fix: Clean globals.css without border-border error"
        git push origin main
        
        echo ""
        echo "🎉 CSS FIXED!"
        echo ""
        echo "✅ Styling will be restored in 1-2 minutes"
        echo "Refresh: https://shiro-group-monorepo.vercel.app/"
    fi
else
    echo ""
    echo "❌ Build failed - see error above"
fi
