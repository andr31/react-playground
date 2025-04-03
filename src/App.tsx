import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index.tsx';
import AlbumPage from './pages/AlbumPage.tsx';
import PackagesPage from './pages/PackagesPage.tsx';
import Layout from './components/Layout.tsx';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>
            Moonwave Photography | Professional Photography in Portland
          </title>
          <meta
            name="description"
            content="Professional photography services in Portland, Oregon. Specializing in wedding photography, family portraits, and special events."
          />
        </Helmet>
        <StructuredData />
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/albums/:albumId" element={<AlbumPage />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
