import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index.tsx';
import AlbumPage from './pages/AlbumPage.tsx';
import PackagesPage from './pages/PackagesPage.tsx';
import Layout from './components/Layout.tsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
