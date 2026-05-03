const fs = require('fs');

async function download() {
  try {
    const res = await fetch('https://www.behance.net/gallery/248656113/PRE-CRUZADA-CANTINHO-DO-CEU-PARA-CRISTO', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' }
    });
    const html = await res.text();
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match && match[1]) {
      const imgUrl = match[1];
      console.log('Found image URL:', imgUrl);
      const imgRes = await fetch(imgUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' }
      });
      const buffer = await imgRes.arrayBuffer();
      fs.writeFileSync('public/img/behance_precruzada.jpg', Buffer.from(buffer));
      console.log('Image saved to public/img/behance_precruzada.jpg');
    } else {
      console.log('Image not found in meta tags.');
    }
  } catch (err) {
    console.error(err);
  }
}

download();
