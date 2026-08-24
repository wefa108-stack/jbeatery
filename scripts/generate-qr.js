const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const targetUrl = 'https://qr.jbeny.com';
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPng = path.join(publicDir, 'qrcode.png');
const outputSvg = path.join(publicDir, 'qrcode.svg');

const optionsPng = {
  errorCorrectionLevel: 'H',
  type: 'png',
  width: 2048,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
};

const optionsSvg = {
  errorCorrectionLevel: 'H',
  type: 'svg',
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
};

async function generate() {
  try {
    await QRCode.toFile(outputPng, targetUrl, optionsPng);
    console.log(`[Success] High-definition PNG QR code saved to ${outputPng}`);

    await QRCode.toFile(outputSvg, targetUrl, optionsSvg);
    console.log(`[Success] Scalable SVG QR code saved to ${outputSvg}`);
  } catch (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
}

generate();
