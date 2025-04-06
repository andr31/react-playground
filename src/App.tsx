import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index.tsx';
import AlbumPage from './pages/AlbumPage.tsx';
import PackagesPage from './pages/PackagesPage.tsx';
import Layout from './components/Layout.tsx';
import LocationPage from './components/LocationPage.tsx';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>
            Professional Photography in Wesley Chapel | Family & Branding
            Photography
          </title>
          <meta
            name="description"
            content="Professional photography services in Wesley Chapel & Tampa, FL. Specializing in family portraits, branding photography, and maternity sessions. Book your session today!"
          />
          <meta
            name="keywords"
            content="wesley chapel photographer, tampa photographer, family photography wesley chapel, branding photography tampa, maternity photos wesley chapel"
          />
          <meta name="geo.region" content="US-FL" />
          <meta name="geo.placename" content="Wesley Chapel" />
          <link rel="canonical" href="https://cristinabat.com" />
        </Helmet>
        <StructuredData />
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route
              path="/wesley-chapel-photographer"
              element={<LocationPage area="Wesley Chapel" />}
            />
            <Route
              path="/tampa-photographer"
              element={<LocationPage area="Tampa" />}
            />
            <Route path="/albums/:albumId" element={<AlbumPage />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
