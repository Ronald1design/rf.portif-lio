const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://www.behance.net/gallery/248436261/CRUZADA', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="?og:image"? content="([^"]+)"/i);
    if (match) {
      console.log('IMAGE_URL:', match[1]);
      const file = fs.createWriteStream(path.join('public', 'img', 'behance_cruzada.jpg'));
      https.get(match[1], (imgRes) => {
        imgRes.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Image downloaded successfully!');
        });
      });
    } else {
      console.log('No og:image found');
    }
  });
}).on('error', (e) => console.error(e));
