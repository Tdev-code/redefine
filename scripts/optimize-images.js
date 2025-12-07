const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 75;

async function optimize(file) {
  const filePath = path.join(ASSETS_DIR, file);
  try {
    const img = sharp(filePath);
    const meta = await img.metadata();
    let pipeline = img;
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }
    if (meta.format === 'jpeg' || meta.format === 'jpg') {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (meta.format === 'png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    }
    await pipeline.withMetadata({ exif: false }).toFile(filePath + '.opt');
    const before = fs.statSync(filePath).size;
    const after = fs.statSync(filePath + '.opt').size;
    fs.renameSync(filePath + '.opt', filePath);
    console.log(`${file} — ${Math.round(before/1024)}KB -> ${Math.round(after/1024)}KB`);
  } catch (err) {
    console.error(`Failed to optimize ${file}:`, err.message || err);
  }
}

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets directory not found:', ASSETS_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) {
    await optimize(f);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
