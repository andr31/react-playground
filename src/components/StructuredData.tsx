import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cristina Batrincea Photography',
    image: ['https://moonwave-six.vercel.app/static/images/Cover_wide.jpg'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    url: 'https://moonwave-six.vercel.app',
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
