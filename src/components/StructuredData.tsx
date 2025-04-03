import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cristina Batrincea Photography',
    image: ['https://cristinabat.com/static/images/Cover_wide.jpg'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    url: 'https://cristinabat.com',
    telephone: '+1-XXX-XXX-XXXX',
    priceRange: '$$',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default StructuredData;
