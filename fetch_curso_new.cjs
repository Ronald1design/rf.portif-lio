const fs = require('fs');

async function download() {
  try {
    const res = await fetch('https://www.behance.net/gallery/248496315/SOCIAL-MEDIA-CURSO-DE-PRODUCAO-AUDIOVISUAL', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    const html = await res.text();
    const match = html.match(/<meta property="?og:image"? content="([^"]+)"/i);
    
    if (match) {
      const imgUrl = match[1];
      console.log('IMAGE_URL:', imgUrl);
      
      const imgRes = await fetch(imgUrl);
      if (!imgRes.ok) throw new Error(`unexpected response ${imgRes.statusText}`);
      
      const arrayBuffer = await imgRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync('public/img/behance_social_curso.jpg', buffer);
      console.log('Image saved successfully, size:', buffer.length);
    } else {
      console.log('No og:image found');
    }
  } catch (err) {
    console.error(err);
  }
}

download();
