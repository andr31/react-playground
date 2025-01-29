import './App.css';
import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index.tsx';
import AlbumPage from './pages/AlbumPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/albums/:albumId" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
