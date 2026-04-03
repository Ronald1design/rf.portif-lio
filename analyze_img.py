import sys
import os
from PIL import Image

img_path = r"c:\Users\ronal\.gemini\antigravity\scratch\ronald-ferraz-portfolio\public\img\download__20_-removebg-preview (1).png"
if not os.path.exists(img_path):
    print("File not found")
    sys.exit(1)

img = Image.open(img_path)
print("Format:", img.format)
print("Mode:", img.mode)
print("Size:", img.size)
if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
    alpha = img.convert('RGBA').split()[-1]
    extrema = alpha.getextrema()
    print("Alpha extrema:", extrema)
    if extrema[0] < 255:
        print("Image has transparency.")
    else:
        print("Image has opaque alpha channel.")
else:
    print("Image does NOT have an alpha channel.")
