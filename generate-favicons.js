const fs = require('fs');
const path = require('path');

// Create ICO file manually (simple 32x32 favicon)
const createFavicon = () => {
  const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#grad)"/>
  <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  // Save SVG versions
  fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);
  
  // Create larger SVG for apple-touch-icon
  const appleTouchIcon = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="url(#grad)"/>
  <text x="90" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="100" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'apple-touch-icon.svg'), appleTouchIcon);
  
  // Create android icons
  const android192 = `<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="192" height="192" rx="48" fill="url(#grad)"/>
  <text x="96" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="110" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'android-chrome-192x192.svg'), android192);

  const android512 = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#grad)"/>
  <text x="256" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="300" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'android-chrome-512x512.svg'), android512);

  // Create 16x16 and 32x32 PNGs
  const favicon16 = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="16" height="16" rx="3" fill="url(#grad)"/>
  <text x="8" y="13" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-16x16.svg'), favicon16);

  const favicon32 = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#grad)"/>
  <text x="16" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">M</text>
</svg>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'favicon-32x32.svg'), favicon32);

  console.log('✅ Favicon files created successfully!');
  console.log('📁 Files created:');
  console.log('  - public/favicon.svg');
  console.log('  - public/favicon-16x16.svg');
  console.log('  - public/favicon-32x32.svg');
  console.log('  - public/apple-touch-icon.svg');
  console.log('  - public/android-chrome-192x192.svg');
  console.log('  - public/android-chrome-512x512.svg');
};

createFavicon();
