const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const tailwindConfigPath = path.resolve(__dirname, 'tailwind.config.ts');
const outputCssPath = path.resolve(__dirname, 'public/brand.css');

console.log('Running Tailwind CSS JIT compilation for production...');

try {
  execSync(`npx tailwindcss -i ./src/app/globals.css -o ${outputCssPath} --minify`, { stdio: 'inherit' });
  console.log('Tailwind CSS compiled and purged successfully!');
} catch (error) {
  console.error('Error compiling Tailwind CSS:', error.message);
  process.exit(1);
}
