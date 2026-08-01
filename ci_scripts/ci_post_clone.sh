#!/bin/sh
set -e

echo "Node version:"
node -v
npm -v

echo "Installing dependencies..."
npm ci

echo "Building Angular..."
npm run build

echo "Syncing Capacitor..."
npx cap sync ios

echo "Installing CocoaPods..."
cd ios/App
pod install