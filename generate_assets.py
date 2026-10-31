import cv2
import numpy as np
from PIL import Image

def process_logo():
    # 1. Cleaned PNG with transparent background and high resolution
    img_pil = Image.open('logo_original.png').convert('RGBA')
    arr = np.array(img_pil)
    
    # Cream background detection
    bg_mask = (arr[:, :, 0] > 225) & (arr[:, :, 1] > 220) & (arr[:, :, 2] > 200)
    arr[bg_mask, 3] = 0
    
    # Smooth edges
    clean = Image.fromarray(arr)
    hi_res = clean.resize((img_pil.width * 3, img_pil.height * 3), Image.Resampling.LANCZOS)
    hi_res.save('logo_clean.png')
    print('Generated logo_clean.png (630x720)')
    
    # 2. Smooth Vector SVG
    img_cv = cv2.imread('logo_original.png')
    gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (3, 3), 0)
    _, thresh = cv2.threshold(blurred, 225, 255, cv2.THRESH_BINARY_INV)
    
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    valid_contours = [c for c in contours if cv2.contourArea(c) > 600]
    
    svg_parts = []
    for cnt in valid_contours:
        # Smooth polygon
        epsilon = 0.0035 * cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, epsilon, True)
        pts = approx.reshape(-1, 2)
        
        x_min, y_min = np.min(pts, axis=0)
        
        # Identify element
        if y_min < 35 and x_min > 120:
            part_id = 'leaf'
            fill = 'url(#grad-leaf)'
        elif x_min > 95:
            part_id = 'right-stem'
            fill = 'url(#grad-sage)'
        elif y_min < 75 and x_min < 85:
            part_id = 'dot'
            fill = 'url(#grad-forest)'
        else:
            part_id = 'u-curve'
            fill = 'url(#grad-forest)'
            
        d = 'M ' + ' L '.join(f'{x},{y}' for x, y in pts) + ' Z'
        svg_parts.append((part_id, fill, d))
        
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 240" width="100%" height="100%" class="unione-brand-logo">
  <defs>
    <linearGradient id="grad-forest" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B3E2B" />
      <stop offset="100%" stop-color="#0F2418" />
    </linearGradient>
    <linearGradient id="grad-sage" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5E7D53" />
      <stop offset="100%" stop-color="#41573A" />
    </linearGradient>
    <linearGradient id="grad-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9DB568" />
      <stop offset="100%" stop-color="#768F4C" />
    </linearGradient>
    <filter id="logo-subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0F2418" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#logo-subtle-glow)">
'''
    # Write paths
    for part_id, fill, d in svg_parts:
        svg_content += f'    <path id="logo-{part_id}" class="logo-elem logo-{part_id}" d="{d}" fill="{fill}" />\n'
        
    svg_content += '  </g>\n</svg>'
    
    with open('logo.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print('Generated logo.svg successfully!')

if __name__ == '__main__':
    process_logo()
