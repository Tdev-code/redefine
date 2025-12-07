const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'dist');
const DEST = path.join(__dirname, '..', 'static');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error('Source directory does not exist:', src);
    process.exit(1);
  }
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  if (fs.existsSync(DEST)) {
    // remove existing static folder
    fs.rmSync(DEST, { recursive: true, force: true });
  }
  copyDir(SRC, DEST);
  console.log('Exported static site to', DEST);
} catch (err) {
  console.error(err);
  process.exit(1);
}
