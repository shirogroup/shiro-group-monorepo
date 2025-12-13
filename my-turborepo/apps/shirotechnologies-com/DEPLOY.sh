#!/bin/bash

echo "🚀 SHIRO Technologies - Deployment Script"
echo "=========================================="
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install shadcn/ui
echo "🎨 Setting up shadcn/ui..."
npx shadcn-ui@latest init --yes --defaults
npx shadcn-ui@latest add button card input select --yes

echo ""
echo "✅ Setup complete!"
echo ""
echo "To run the development server:"
echo "  npm run dev"
echo ""
echo "To push to GitHub:"
echo "  cd ~/projects/shiro-group-monorepo"
echo "  git add ."
echo "  git commit -m 'Add shirotechnologies-com application'"
echo "  git push origin main"
echo ""
