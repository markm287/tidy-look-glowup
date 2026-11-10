import unittest
from pathlib import Path
from datetime import date
from bs4 import BeautifulSoup
from pricing_business_schema import build_pricing_schema, opening_hours


class ClinicSchemaRules(unittest.TestCase):
    def test_weekday_hours(self):
        hours = opening_hours()
        self.assertEqual(hours[0]['dayOfWeek'], ['Monday', 'Thursday', 'Friday'])
        self.assertEqual((hours[0]['opens'], hours[0]['closes']), ('09:00', '16:00'))
        self.assertEqual(hours[1]['dayOfWeek'], ['Tuesday', 'Wednesday'])
        self.assertEqual((hours[1]['opens'], hours[1]['closes']), ('13:00', '19:00'))

    def test_only_first_saturdays_starting_february_2027(self):
        saturdays = opening_hours()[2:]
        self.assertEqual(len(saturdays), 11)
        self.assertEqual(saturdays[0]['validFrom'], '2027-02-06')
        for item in saturdays:
            day = date.fromisoformat(item['validFrom'])
            self.assertEqual(day.weekday(), 5)
            self.assertLessEqual(day.day, 7)
            self.assertEqual(item['validThrough'], item['validFrom'])
            self.assertEqual((item['opens'], item['closes']), ('08:00', '12:00'))

    def test_menu_does_not_offer_unavailable_treatments_as_bookable(self):
        source = BeautifulSoup((Path(__file__).resolve().parents[1] / 'public/radiance.html').read_text(), 'html.parser')
        business = build_pricing_schema(source)['@graph'][0]
        services = business['hasOfferCatalog']['itemListElement']
        self.assertGreater(len(services), 0)
        for service in services:
            self.assertEqual(service['@type'], 'Service')
            self.assertIn('Services other than wrinkle relaxer and dermal fillers are not currently available', service['description'])


if __name__ == '__main__':
    unittest.main()