import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { width: 120, height: 120, name: 'apple-touch-icon-120x120.png' },
  { width: 152, height: 152, name: 'apple-touch-icon-152x152.png' },
  { width: 167, height: 167, name: 'apple-touch-icon-167x167.png' },
  { width: 180, height: 180, name: 'apple-touch-icon-180x180.png' },
  { width: 192, height: 192, name: 'pwa-192x192.png' },
  { width: 512, height: 512, name: 'pwa-512x512.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
];

async function generateIcon(size) {
  const svg = `
    <svg width="${size.width}" height="${size.height}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#009FE3" stroke-width="8"/>
      <path d="M50 20 A30 30 0 0 1 50 80" fill="none" stroke="#00529C" stroke-width="8"/>
      <path d="M50 80 A30 30 0 0 1 50 20" fill="none" stroke="#E31D1A" stroke-width="8"/>
      <circle cx="50" cy="50" r="48" fill="none" stroke="#009FE3" stroke-width="2"/>
    </svg>
  `;

  const outputPath = join(__dirname, '..', 'public', size.name);
  
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
  
  console.log(`Generated ${size.name}`);
}

async function main() {
  try {
    for (const size of sizes) {
      await generateIcon(size);
    }
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

main(); 