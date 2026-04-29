import urllib.request
import re
import os

url = "https://www.behance.net/gallery/248436261/CRUZADA"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    if match:
        img_url = match.group(1)
        print("Found image URL:", img_url)
        img_path = os.path.join('public', 'img', 'behance_cruzada.jpg')
        urllib.request.urlretrieve(img_url, img_path)
        print("Saved to", img_path)
    else:
        print("No og:image found.")
except Exception as e:
    print("Error:", e)
