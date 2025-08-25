#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Helper function to recursively copy directory contents
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper function to remove directory recursively
function removeRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

const distDir = 'dist';
const publicDir = path.join(distDir, 'public');
const tempServerFile = path.join(distDir, 'index.js');
const tempServerBackup = path.join(distDir, 'server-temp.js');

console.log('🔧 Reorganizing build files for static deployment...');

try {
  // Step 1: Back up server file if it exists (for full builds)
  if (fs.existsSync(tempServerFile)) {
    console.log('📦 Backing up server file...');
    fs.renameSync(tempServerFile, tempServerBackup);
  }

  // Step 2: Copy everything from dist/public/ to dist/ and handle conflicts
  if (fs.existsSync(publicDir)) {
    console.log('📁 Moving frontend files from dist/public/ to dist/...');
    
    const publicFiles = fs.readdirSync(publicDir);
    
    for (const file of publicFiles) {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(distDir, file);
      
      // Remove existing file/directory if it exists to avoid conflicts
      if (fs.existsSync(destPath)) {
        console.log(`   🗑️  Removing existing ${file}...`);
        removeRecursive(destPath);
      }
      
      // Copy files and directories
      if (fs.statSync(srcPath).isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
      console.log(`   ✅ Moved ${file}`);
    }
    
    // Step 3: Remove the public directory
    removeRecursive(publicDir);
    console.log('🗑️  Removed public directory');
  }

  // Step 4: Restore server file if we backed it up (for full builds)
  if (fs.existsSync(tempServerBackup)) {
    console.log('🔄 Restoring server file...');
    fs.renameSync(tempServerBackup, tempServerFile);
  }

  console.log('✅ Build reorganization complete!');
  console.log('📂 Frontend files are now in dist/ (ready for static deployment)');
  
} catch (error) {
  console.error('❌ Error during build reorganization:', error.message);
  
  // Cleanup: restore server file if something went wrong
  if (fs.existsSync(tempServerBackup)) {
    try {
      fs.renameSync(tempServerBackup, tempServerFile);
      console.log('🔄 Server file restored after error');
    } catch (restoreError) {
      console.error('⚠️  Could not restore server file:', restoreError.message);
    }
  }
  
  process.exit(1);
}