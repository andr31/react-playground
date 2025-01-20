import './App.css';
import Navbar from './components/Navbar';
import WorkInProgress from './components/WorkInProgress.tsx';
import ContactForm from './components/ContactForm.tsx';
import PromotionBannerProps from './components/PromotionBanner';
import Footer from './components/Footer.tsx';
import AboutMe from './components/AboutMe.tsx';
import Portfolio from './components/Portfolio.tsx';
import GettingReady from './components/GettingReady.tsx';
import Pricing from './components/Pricing.tsx';

function App() {
  const menuItems = [
    { name: 'ABOUT', link: '/about' },
    { name: 'PORTFOLIO', link: '/portfolio' },
    { name: 'PRICING', link: '/pricing' },
    { name: 'GETTING READY', link: '/getting-ready' },
    { name: 'CONTACT', link: '/contact' },
  ];
  const bannerItems = [
    'Looking for the best family photography in Tampa? Book today',
    'Wesley Chapel branding photo sessions for entrepreneurs and small businesses',
    'Celebrate your motherhood journey with a maternity photoshoot near Tampa',
    'Creative photography in Wesley Chapel to capture life s best moments',
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />
      <div className="background">
        <main className="container mx-auto px-4 py-8"></main>
      </div>
      <PromotionBannerProps items={bannerItems}></PromotionBannerProps>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <GettingReady></GettingReady>
      <Pricing></Pricing>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <WorkInProgress></WorkInProgress>
    </>
  );
}

export default App;
