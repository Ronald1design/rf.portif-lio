import urllib.request
import re
import os

url = "https://www.behance.net/gallery/248496315/SOCIAL-MEDIA-CURSO-DE-PRODUCAO-AUDIOVISUAL"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    if match:
        img_url = match.group(1)
        print("Found image URL:", img_url)
        img_path = os.path.join('public', 'img', 'behance_social_curso.jpg')
        urllib.request.urlretrieve(img_url, img_path)
        print("Saved to", img_path)
    else:
        print("No og:image found.")
except Exception as e:
    print("Error:", e)
