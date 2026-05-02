const https = require('https');
const fs = require('fs');

https.get('https://www.behance.net/gallery/248496315/SOCIAL-MEDIA-CURSO-DE-PRODUCAO-AUDIOVISUAL', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="?og:image"? content="([^"]+)"/i);
    if (match) {
      console.log('IMAGE_URL:', match[1]);
      
      const imgUrl = match[1];
      const imgFile = fs.createWriteStream('public/img/behance_social_curso.jpg');
      https.get(imgUrl, (imgRes) => {
        imgRes.pipe(imgFile);
        imgFile.on('finish', () => {
          imgFile.close();
          console.log('Image saved successfully!');
        });
      });
      
    } else {
      console.log('No og:image found');
    }
  });
}).on('error', (e) => console.error(e));
