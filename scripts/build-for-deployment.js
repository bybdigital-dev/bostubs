#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Building project for static deployment...\n');

try {
  // Step 1: Run the standard build
  console.log('📦 Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Reorganize files for deployment
  console.log('\n🔧 Reorganizing files...');
  execSync('node scripts/reorganize-build.js', { stdio: 'inherit' });
  
  console.log('\n🎉 Build complete and ready for deployment!');
  console.log('📂 Static files are now properly organized in dist/');
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}