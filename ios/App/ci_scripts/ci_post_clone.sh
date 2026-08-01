#!/bin/sh
set -e

echo "===== XCODE CLOUD POST CLONE START ====="

echo "Installing Node..."

brew install node

echo "Node version:"
node -v

echo "NPM version:"
npm -v

echo "Moving to project root..."

cd ../../..

echo "Current directory:"
pwd

echo "Installing npm dependencies..."
npm ci

echo "Building Angular..."
npm run build

echo "Syncing Capacitor..."
npx cap sync ios

echo "Installing CocoaPods..."
cd ios/App

pod install

echo "===== XCODE CLOUD POST CLONE FINISHED ====="