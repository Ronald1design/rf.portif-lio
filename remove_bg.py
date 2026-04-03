import sys
import subprocess

def install_and_import():
    try:
        import rembg
        from PIL import Image
    except ImportError:
        print("Installing rembg and Pillow...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "rembg", "Pillow"])
        import rembg
        from PIL import Image

install_and_import()
from rembg import remove
from PIL import Image

input_path = r'c:\Users\ronal\.gemini\antigravity\scratch\ronald-ferraz-portfolio\public\img\download__20_-removebg-preview (1).png'
output_path = r'c:\Users\ronal\.gemini\antigravity\scratch\ronald-ferraz-portfolio\public\img\profile-nobg.png'

print("Processing image...")
input_img = Image.open(input_path)
output_img = remove(input_img)
output_img.save(output_path)
print("Done!")
