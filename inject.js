const fs = require('fs');
const path = require('path');

const faviconPath = path.join(__dirname, 'Digitelixx Logo', 'Best Digital Marketing Company in Mumbai.png');
const logoPath = path.join(__dirname, 'Digitelixx Logo', 'Digitelixx Logo.png');
const htmlPath = path.join(__dirname, 'index.html');

try {
  const faviconBase64 = fs.readFileSync(faviconPath, { encoding: 'base64' });
  const logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Insert Favicon
  const faviconLink = `<link rel="icon" type="image/png" href="data:image/png;base64,${faviconBase64}">`;
  if (!html.includes('<link rel="icon"')) {
    html = html.replace('</title>', `</title>\n  ${faviconLink}`);
  }
  
  // Replace Logo
  html = html.replace(/<img src="[^"]*" alt="Digitelixx">/, `<img src="data:image/png;base64,${logoBase64}" alt="Digitelixx">`);
  
  fs.writeFileSync(htmlPath, html);
  console.log('Successfully injected base64 images!');
} catch (e) {
  console.error(e);
}
