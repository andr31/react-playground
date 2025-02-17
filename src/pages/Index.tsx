import ContactForm from '../components/ContactForm.tsx';
import PromotionBannerProps from '../components/PromotionBanner.tsx';
import AboutMe from '../components/AboutMe.tsx';
import Portfolio from '../components/Portfolio.tsx';
import GettingReady from '../components/GettingReady.tsx';
import Pricing from '../components/Pricing.tsx';

const IndexPage = () => {
  const bannerItems = [
    'Looking for the best family photography in Tampa? Book today',
    'Wesley Chapel branding photo sessions for entrepreneurs and small businesses',
    'Celebrate your motherhood journey with a maternity photoshoot near Tampa',
    'Creative photography in Wesley Chapel to capture life s best moments',
  ];

  return (
    <>
      <div className="background">
        <main className="container mx-auto px-4 py-8"></main>
      </div>
      <PromotionBannerProps items={bannerItems}></PromotionBannerProps>
      <div id="about">
        <AboutMe></AboutMe>
      </div>
      <div id="portfolio">
        <Portfolio></Portfolio>
      </div>
      <div id="getting-ready">
        <GettingReady></GettingReady>
      </div>
      <div id="pricing">
        <Pricing></Pricing>
      </div>
      <div id="contact">
        <ContactForm></ContactForm>
      </div>
    </>
  );
};

export default IndexPage;
