import os
import re
import json
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET

BASE_URL = "https://welcome-presentation-808585.framer.app"
EXPORT_DIR = "/root/framer-noir-lumier/framer-export/static-site"
IMAGES_DIR = "/root/framer-noir-lumier/public/images"
DATA_DIR = "/root/framer-noir-lumier/data"

os.makedirs(EXPORT_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

def fetch_url(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            return res.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

# 1. Fetch sitemap
sitemap_xml = fetch_url(f"{BASE_URL}/sitemap.xml")
root = ET.fromstring(sitemap_xml)
urls = []
for loc in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
    urls.append(loc.text.strip())

print(f"Found {len(urls)} URLs in sitemap:")
for u in urls:
    print(" -", u)

# 2. Download each page HTML
all_image_urls = set()
for url in urls:
    rel_path = url.replace(BASE_URL, "").strip("/")
    if not rel_path:
        out_path = os.path.join(EXPORT_DIR, "index.html")
    else:
        page_dir = os.path.join(EXPORT_DIR, rel_path)
        os.makedirs(page_dir, exist_ok=True)
        out_path = os.path.join(page_dir, "index.html")
    
    html_bytes = fetch_url(url)
    if html_bytes:
        with open(out_path, "wb") as f:
            f.write(html_bytes)
        print(f"Saved: {out_path}")
        
        # Extract images
        html_str = html_bytes.decode('utf-8', errors='ignore')
        matches = re.findall(r'https://framerusercontent\.com/images/[a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|webp|svg)', html_str)
        for m in matches:
            all_image_urls.add(m)

# Also collect images from cms.json
if os.path.exists(f"{DATA_DIR}/cms.json"):
    with open(f"{DATA_DIR}/cms.json", "r") as f:
        cms_data = json.load(f)
    
    def extract_img_from_cms(obj):
        if isinstance(obj, dict):
            if obj.get("type") == "image" and isinstance(obj.get("value"), dict):
                url = obj["value"].get("url")
                if url:
                    all_image_urls.add(url.split("?")[0])
            for v in obj.values():
                extract_img_from_cms(v)
        elif isinstance(obj, list):
            for i in obj:
                extract_img_from_cms(i)
    
    extract_img_from_cms(cms_data)

print(f"\nTotal unique images discovered: {len(all_image_urls)}")

# 3. Download images
manifest = {}
for img_url in sorted(all_image_urls):
    filename = os.path.basename(urllib.parse.urlparse(img_url).path)
    local_path = os.path.join(IMAGES_DIR, filename)
    manifest[img_url] = f"/images/{filename}"
    if not os.path.exists(local_path):
        data = fetch_url(img_url)
        if data:
            with open(local_path, "wb") as f:
                f.write(data)
            print(f"Downloaded: {filename} ({len(data)} bytes)")
        else:
            print(f"Failed to download: {img_url}")
    else:
        print(f"Already exists: {filename}")

with open(f"{DATA_DIR}/image_manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)

print("\nDownload complete! Image manifest written.")
