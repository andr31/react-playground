import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cristina Batrincea Photography',
    image: ['https://cristinabat.com/static/images/Cover_wide.jpg'],
    description:
      'Professional photography services in Wesley Chapel & Tampa. Specializing in family portraits, branding, and maternity photography.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wesley Chapel',
      addressRegion: 'FL',
      addressCountry: 'US',
      postalCode: '33544',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.1894',
      longitude: '-82.3512',
    },
    url: 'https://cristinabat.com',
    telephone: '+1-XXX-XXX-XXXX',
    priceRange: '$$',
    areaServed: ['Wesley Chapel', 'Tampa', 'New Tampa', 'Zephyrhills'],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '28.1894',
        longitude: '-82.3512',
      },
      geoRadius: '30mi',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default StructuredData;
