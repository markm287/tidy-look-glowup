"""Build pricing-page clinic markup from the existing menu and contact section."""
from datetime import date, timedelta

BASE_URL = 'https://radiancepa.com'
BUSINESS_ID = BASE_URL + '/#medicalbusiness'


def opening_hours(year=2027):
    hours = [
        {'@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Thursday', 'Friday'],
         'opens': '09:00', 'closes': '16:00'},
        {'@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Tuesday', 'Wednesday'],
         'opens': '13:00', 'closes': '19:00'},
    ]
    for month in range(2, 13):
        first = date(year, month, 1)
        saturday = first + timedelta(days=(5 - first.weekday()) % 7)
        hours.append({'@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Saturday',
                      'opens': '08:00', 'closes': '12:00',
                      'validFrom': saturday.isoformat(), 'validThrough': saturday.isoformat()})
    return hours


def build_pricing_schema(source):
    contact = source.select_one('#page-contact')
    menu = source.select_one('#page-pricing')
    if contact is None or menu is None:
        raise ValueError('Missing clinic contact section or treatment menu')
    phone = contact.select_one('a[href^="tel:"]')
    email = contact.select_one('a[href^="mailto:"]')
    notice = menu.select_one('.renovation-note')
    if phone is None or email is None or notice is None:
        raise ValueError('Missing clinic contact details or treatment availability')
    availability = notice.get_text(' ', strip=True)
    services = []
    for label in menu.select('.category-label'):
        name = label.get_text(' ', strip=True)
        if name == 'Consultation':
            continue
        services.append({'@type': 'Service', 'name': name, 'provider': {'@id': BUSINESS_ID},
                         'description': availability})
    booking = contact.select_one('a[href*="booking.podium.com"]')
    business = {
        '@type': ['MedicalBusiness', 'HealthAndBeautyBusiness'], '@id': BUSINESS_ID,
        'name': 'Radiance Med Spa', 'url': BASE_URL + '/',
        'telephone': phone.get_text(' ', strip=True),
        'email': email['href'].removeprefix('mailto:'),
        'address': {'@type': 'PostalAddress', 'streetAddress': '154 Franklin Farm Lane',
                    'addressLocality': 'Chambersburg', 'addressRegion': 'PA',
                    'postalCode': '17202', 'addressCountry': 'US'},
        'areaServed': {'@type': 'City', 'name': 'Chambersburg, Pennsylvania'},
        'hasMap': 'https://www.google.com/maps/search/?api=1&query=Radiance+Med+Spa+Chambersburg%2C+PA',
        'description': ('Physician-supervised aesthetic care by appointment only. Scheduled weekday '
                        'hours begin November 2026; first-Saturday appointments begin February 2027. '
                        + availability),
        'openingHoursSpecification': opening_hours(),
        'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Treatment menu',
                            'itemListElement': services},
    }
    if booking is not None:
        business['potentialAction'] = {'@type': 'ReserveAction', 'target': booking['href']}
    return {'@context': 'https://schema.org', '@graph': [business, {
        '@type': 'WebPage', '@id': BASE_URL + '/ai/pricing.html#webpage',
        'url': BASE_URL + '/ai/pricing.html',
        'name': 'Treatments & Pricing in Chambersburg, PA | Radiance Med Spa',
        'about': {'@id': BUSINESS_ID}, 'mainEntity': {'@id': BUSINESS_ID},
    }]}