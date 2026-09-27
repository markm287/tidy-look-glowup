"""Create crawlable, text-first copies of the six sections in public/radiance.html.
Run after editing the source site's copy: python3 scripts/generate-readable-pages.py
"""
from pathlib import Path
from bs4 import BeautifulSoup
from html import escape

ROOT = Path(__file__).resolve().parents[1]
source = BeautifulSoup((ROOT / 'public/radiance.html').read_text(), 'html.parser')
out = ROOT / 'public/ai'
out.mkdir(exist_ok=True)
sections = {
    'home': ('Home', 'Physician-overseen aesthetic care in Chambersburg, PA'),
    'about': ('About', 'Our story, approach, values, and Chambersburg location'),
    'providers': ('Providers', 'Meet the clinical team at Radiance Med Spa'),
    'memberships': ('VIP', 'Glow, Luminary, and Radiant tiers, prices, benefits, and policy'),
    'pricing': ('Treatments', 'Treatment menu, prices, packages, and PCA Skin retail'),
    'contact': ('Book a Consultation', 'Booking, location, contact information, and hours'),
}
nav = ' '.join(f'<a href="/ai/{key}.html">{escape(title)}</a>' for key, (title, _) in sections.items())
css = '''body{font:18px/1.65 system-ui,sans-serif;max-width:850px;margin:auto;padding:24px;color:#202b2c;background:#fff}a{color:#275d50}nav{display:flex;flex-wrap:wrap;gap:8px 18px;border-bottom:1px solid #9cacaa;padding-bottom:20px}main{padding:24px 0}h1,h2,h3,h4{line-height:1.25;margin:1.5em 0 .5em}h1{font-size:2em}h2{font-size:1.5em}p{margin:.8em 0}.tier-card,.pkg-card,.category-block,.vip-policy-item,.provider-card{border-top:1px solid #b9c4c1;padding:14px 0}.tier-name,.pkg-name,.category-label,.provider-name{font-size:1.3em;font-weight:700}.tier-price,.pkg-price,.price-amount{font-weight:700}.price-row{display:flex;justify-content:space-between;gap:20px;padding:10px 0;border-bottom:1px solid #dfe4e2}.price-detail,.pkg-tagline{font-size:.9em}.ptab-content{margin-top:32px}.ptab-content:before{content:attr(data-category);display:block;font-size:1.5em;font-weight:700}footer{border-top:1px solid #9cacaa;padding:20px 0;font-size:.85em}'''
for key, (title, description) in sections.items():
    original = source.select_one('#page-' + key)
    if original is None:
        raise RuntimeError(f'Missing section: {key}')
    section = BeautifulSoup(str(original), 'html.parser')
    for item in section.select('button, iframe, svg, .photo-band, .tier-divider, .provider-divider, .pricing-tabs, .deco-fan'):
        item.decompose()
    for image in section.select('img'):
        image.decompose()
    for item in section.select('[onclick]'):
        del item['onclick']
    for tab in section.select('[id^="ptab-"]'):
        tab['data-category'] = tab['id'].replace('ptab-', '').replace('-', ' ').title()
    for link in section.select('a'):
        if not link.get('href'):
            link.unwrap()
    for item in section.select('[style]'):
        del item['style']
    page_title = f'{title} | Radiance Med Spa — Chambersburg, PA'
    document = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{escape(page_title)}</title><meta name="description" content="{escape(description)}">
<meta property="og:title" content="{escape(page_title)}"><meta property="og:description" content="{escape(description)}"><meta property="og:type" content="website"><meta name="twitter:card" content="summary">
<link rel="canonical" href="https://radiancepa.com/ai/{key}.html"><style>{css}</style></head>
<body><header><nav aria-label="Radiance pages">{nav}</nav></header><main>{section}</main><footer>Radiance Med Spa · 154 Franklin Farm Lane, Chambersburg, PA 17202 · <a href="tel:+17174231799">(717) 423-1799</a> · <a href="mailto:contact@radiancepa.com">contact@radiancepa.com</a><p><a href="/">Visit the full website</a></p></footer></body></html>'''
    (out / f'{key}.html').write_text(document)
    print(f'Generated /ai/{key}.html')
