#!/bin/sh
set -e

echo "===== XCODE CLOUD POST CLONE START ====="

# Load Node environment
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "Node version:"
node -v

echo "NPM version:"
npm -v

echo "Installing dependencies..."
cd ../..

npm ci

echo "Building Angular..."
npm run build

echo "Syncing Capacitor..."
npx cap sync ios

echo "Installing CocoaPods..."
cd ios/App
pod install

echo "===== XCODE CLOUD POST CLONE FINISHED ====="