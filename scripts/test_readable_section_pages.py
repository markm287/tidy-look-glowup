"""Regression checks for search-result destinations after regenerating pages."""
import unittest
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]


class SearchDestinationTests(unittest.TestCase):
    def test_each_search_destination_displays_its_actual_section(self):
        for section in ('home', 'about', 'providers', 'memberships', 'pricing', 'retail', 'contact'):
            with self.subTest(section=section):
                page = BeautifulSoup((ROOT / f'public/ai/{section}.html').read_text(), 'html.parser')
                frame = page.select_one('iframe.radiance-frame')
                self.assertIsNotNone(frame)
                self.assertEqual(frame.get('src') if frame else None, f'/radiance.html#{section}')
                self.assertIsNotNone(page.select_one(f'.readable-content #page-{section}'))
                canonical = page.select_one('link[rel="canonical"]')
                self.assertEqual(canonical.get('href') if canonical else None,
                                 f'https://radiancepa.com/ai/{section}.html')


if __name__ == '__main__':
    unittest.main()