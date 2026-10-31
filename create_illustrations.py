def generate_illustrations():
    # 1. Tech Summit & Capstone Showcase Banner
    tech_summit_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
  <defs>
    <linearGradient id="ts-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F261B"/>
      <stop offset="50%" stop-color="#163827"/>
      <stop offset="100%" stop-color="#1E4A35"/>
    </linearGradient>
    <linearGradient id="ts-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7E9B58"/>
      <stop offset="100%" stop-color="#A1BD7A"/>
    </linearGradient>
    <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D5A42"/>
      <stop offset="100%" stop-color="#153726"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="680" height="320" rx="16" fill="url(#ts-bg)"/>
  
  <!-- Decorative Grid Lines -->
  <g opacity="0.08" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="40" x2="680" y2="40"/>
    <line x1="0" y1="80" x2="680" y2="80"/>
    <line x1="0" y1="120" x2="680" y2="120"/>
    <line x1="0" y1="160" x2="680" y2="160"/>
    <line x1="0" y1="200" x2="680" y2="200"/>
    <line x1="0" y1="240" x2="680" y2="240"/>
    <line x1="0" y1="280" x2="680" y2="280"/>
    <line x1="80" y1="0" x2="80" y2="320"/>
    <line x1="160" y1="0" x2="160" y2="320"/>
    <line x1="240" y1="0" x2="240" y2="320"/>
    <line x1="320" y1="0" x2="320" y2="320"/>
    <line x1="400" y1="0" x2="400" y2="320"/>
    <line x1="480" y1="0" x2="480" y2="320"/>
    <line x1="560" y1="0" x2="560" y2="320"/>
    <line x1="640" y1="0" x2="640" y2="320"/>
  </g>

  <!-- Left Content Info -->
  <g transform="translate(36, 44)">
    <!-- Pill Badge -->
    <rect width="180" height="28" rx="14" fill="#A1BD7A" fill-opacity="0.2" stroke="#A1BD7A" stroke-width="1"/>
    <circle cx="16" cy="14" r="5" fill="#A1BD7A"/>
    <text x="30" y="19" fill="#E2F0E6" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">CAMPUS DEMO DAY 2026</text>
    
    <!-- Title -->
    <text x="0" y="70" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="800">Superior Annual Tech Summit</text>
    <text x="0" y="98" fill="#C8DACE" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="500">Capstone Jury Evaluation &amp; Industry Placement Drive</text>
    
    <!-- Highlights -->
    <g transform="translate(0, 130)">
      <rect width="130" height="52" rx="8" fill="#0C1F16" fill-opacity="0.6" stroke="#2D5A42" stroke-width="1"/>
      <text x="14" y="22" fill="#7E9B58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700">DATE</text>
      <text x="14" y="40" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800">Thursday, Nov 04</text>
    </g>

    <g transform="translate(142, 130)">
      <rect width="130" height="52" rx="8" fill="#0C1F16" fill-opacity="0.6" stroke="#2D5A42" stroke-width="1"/>
      <text x="14" y="22" fill="#7E9B58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700">VENUE</text>
      <text x="14" y="40" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800">Main Auditorium</text>
    </g>

    <g transform="translate(0, 200)">
      <text x="0" y="18" fill="#99B3A2" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600">• Systems Limited • Arbisoft • Devsinc Jury Panels</text>
    </g>
  </g>

  <!-- Right Graphic: Interactive Presentation Screen Illustration -->
  <g transform="translate(380, 44)">
    <!-- Main Display Device -->
    <rect x="0" y="0" width="260" height="175" rx="12" fill="url(#screen-glow)" stroke="#3D6B50" stroke-width="1.5"/>
    <rect x="100" y="175" width="60" height="30" fill="#1C3D2C"/>
    <ellipse cx="130" cy="205" rx="50" ry="8" fill="#10241A"/>
    
    <!-- Screen Header -->
    <rect x="12" y="12" width="236" height="24" rx="6" fill="#122A1E"/>
    <circle cx="26" cy="24" r="4" fill="#C0392B"/>
    <circle cx="38" cy="24" r="4" fill="#B87B22"/>
    <circle cx="50" cy="24" r="4" fill="#7E9B58"/>
    <text x="70" y="28" fill="#A1BD7A" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600">unione-capstone-demo.live</text>

    <!-- Code & Graph on screen -->
    <g transform="translate(16, 48)">
      <rect x="0" y="0" width="130" height="7" rx="3.5" fill="#7E9B58" opacity="0.8"/>
      <rect x="0" y="14" width="90" height="6" rx="3" fill="#FFFFFF" opacity="0.4"/>
      <rect x="0" y="26" width="110" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
      <rect x="0" y="38" width="80" height="6" rx="3" fill="#FFFFFF" opacity="0.4"/>
      
      <!-- Mini Chart -->
      <g transform="translate(140, 10)">
        <rect x="0" y="20" width="12" height="40" rx="3" fill="#7E9B58"/>
        <rect x="18" y="8" width="12" height="52" rx="3" fill="#A1BD7A"/>
        <rect x="36" y="28" width="12" height="32" rx="3" fill="#537B5F"/>
        <rect x="54" y="0" width="12" height="60" rx="3" fill="#D4E6BD"/>
      </g>
    </g>

    <!-- Floating Badge -->
    <g transform="translate(20, 130)">
      <rect width="220" height="28" rx="14" fill="#0C1F16" stroke="#7E9B58" stroke-width="1"/>
      <circle cx="16" cy="14" r="5" fill="#7E9B58"/>
      <text x="30" y="18" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700">ORIC Grant Approved #2026-F</text>
    </g>
  </g>
</svg>'''

    # 2. Smart Campus IoT Edge Schematic Illustration
    iot_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 240" width="100%" height="100%">
  <defs>
    <linearGradient id="iot-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#122A1E"/>
      <stop offset="100%" stop-color="#1A3E2C"/>
    </linearGradient>
  </defs>
  
  <rect width="680" height="240" rx="14" fill="url(#iot-bg)"/>
  
  <!-- Circuit Pattern -->
  <g opacity="0.12" stroke="#A1BD7A" stroke-width="1.5" fill="none">
    <path d="M 40,30 L 140,30 L 160,50 L 320,50 L 340,70"/>
    <circle cx="40" cy="30" r="4" fill="#A1BD7A"/>
    <circle cx="340" cy="70" r="4" fill="#A1BD7A"/>
    
    <path d="M 640,210 L 520,210 L 500,190 L 360,190 L 340,170"/>
    <circle cx="640" cy="210" r="4" fill="#A1BD7A"/>
    <circle cx="340" cy="170" r="4" fill="#A1BD7A"/>
  </g>

  <!-- Three Connected Architecture Nodes -->
  <!-- Node 1: Edge Sensors -->
  <g transform="translate(50, 60)">
    <rect width="160" height="110" rx="10" fill="#0B1A12" stroke="#2D5A42" stroke-width="1.5"/>
    <rect x="14" y="14" width="32" height="32" rx="8" fill="#1C4431"/>
    <!-- Sensor Icon -->
    <circle cx="30" cy="30" r="6" stroke="#A1BD7A" stroke-width="2" fill="none"/>
    <path d="M 24,30 A 6,6 0 0,1 36,30" stroke="#A1BD7A" stroke-width="1.5" fill="none"/>
    <text x="14" y="66" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800">ESP32 &amp; Vision</text>
    <text x="14" y="82" fill="#8FA898" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">Hall Occupancy Sensing</text>
    <text x="14" y="96" fill="#7E9B58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600">MQTT Protocol</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <g stroke="#7E9B58" stroke-width="2" fill="none" opacity="0.8">
    <line x1="210" y1="115" x2="250" y2="115"/>
    <polyline points="244,110 252,115 244,120"/>
  </g>

  <!-- Node 2: NestJS Gateway & Outbox -->
  <g transform="translate(260, 45)">
    <rect width="170" height="140" rx="10" fill="#153726" stroke="#7E9B58" stroke-width="1.8"/>
    <rect x="14" y="14" width="32" height="32" rx="8" fill="#25543B"/>
    <!-- Server icon -->
    <rect x="22" y="22" width="16" height="5" rx="1.5" fill="#A1BD7A"/>
    <rect x="22" y="30" width="16" height="5" rx="1.5" fill="#A1BD7A"/>
    <text x="14" y="66" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800">UniOne NestJS Monolith</text>
    <text x="14" y="84" fill="#D3E4D8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">Postgres Outbox Queue</text>
    <text x="14" y="100" fill="#D3E4D8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">Valkey / Redis PubSub</text>
    <rect x="14" y="112" width="142" height="18" rx="4" fill="#0C1F16"/>
    <text x="20" y="125" fill="#A1BD7A" font-family="'JetBrains Mono', monospace" font-size="9">&lt;300ms p95 Target</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <g stroke="#7E9B58" stroke-width="2" fill="none" opacity="0.8">
    <line x1="430" y1="115" x2="470" y2="115"/>
    <polyline points="464,110 472,115 464,120"/>
  </g>

  <!-- Node 3: Flutter Client -->
  <g transform="translate(480, 60)">
    <rect width="150" height="110" rx="10" fill="#0B1A12" stroke="#2D5A42" stroke-width="1.5"/>
    <rect x="14" y="14" width="32" height="32" rx="8" fill="#1C4431"/>
    <!-- Phone icon -->
    <rect x="24" y="20" width="12" height="20" rx="2" stroke="#A1BD7A" stroke-width="1.5" fill="none"/>
    <text x="14" y="66" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800">Mobile Client</text>
    <text x="14" y="82" fill="#8FA898" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">Flutter &amp; Drift SQLite</text>
    <text x="14" y="96" fill="#7E9B58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600">Offline-First DAOs</text>
  </g>
</svg>'''

    with open('img_tech_summit.svg', 'w', encoding='utf-8') as f:
        f.write(tech_summit_svg)
    with open('img_iot_project.svg', 'w', encoding='utf-8') as f:
        f.write(iot_svg)
    print('Created visual SVG image assets: img_tech_summit.svg and img_iot_project.svg!')

if __name__ == '__main__':
    generate_illustrations()
