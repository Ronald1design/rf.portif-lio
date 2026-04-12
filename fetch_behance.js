const https = require('https');
const fs = require('fs');

https.get('https://www.behance.net/gallery/162296397/SOCIAL-MEDIA-DIVERSOS', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="?og:image"? content="([^"]+)"/i);
    if (match) {
      console.log('IMAGE_URL:', match[1]);
      fs.writeFileSync('img_url.txt', match[1]);
    } else {
      console.log('No og:image found');
    }
  });
}).on('error', (e) => console.error(e));
