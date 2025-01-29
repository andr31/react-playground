// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PhotoAlbum from '../components/PhotoAlbum.tsx';

const AlbumPage = () => {
  const location = useLocation();
  const { photoCards } = location.state || { photoCards: [] };
  // const { albumId } = useParams();
  // const photos = [
  //   { src: `/static/images/${albumId}1.jpg`, label: `${albumId} Photo 1` },
  //   { src: `/static/images/${albumId}2.jpg`, label: `${albumId} Photo 2` },
  //   // Add more photos as needed
  // ];

  return <PhotoAlbum photos={photoCards} />;
};

export default AlbumPage;
