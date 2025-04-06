import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import PhotoAlbum from '../components/PhotoAlbum';
import { FaSpinner } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

interface PhotoData {
  src: string;
  label: string;
}

const AlbumPage: React.FC = () => {
  const { albumId } = useParams(); // Get albumId from the URL
  const location = useLocation();

  // Fallback for folderId if location.state is null
  const state = location.state || {};
  const folderId = state.folderId || getFolderIdFromAlbumId(albumId);

  const [albumPhotos, setAlbumPhotos] = useState<PhotoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // seo purpose
  const getAlbumTitle = () => {
    switch (albumId) {
      case 'family':
        return 'Family Photography Portfolio';
      case 'branding':
        return 'Professional Branding Photography';
      case 'maternity':
        return 'Maternity Photography Sessions';
      default:
        return 'Photography Portfolio';
    }
  };

  const getAlbumDescription = () => {
    switch (albumId) {
      case 'family':
        return 'View our family photography portfolio. Professional family portraits in Wesley Chapel and Tampa, FL. Natural, authentic family moments captured beautifully.';
      case 'branding':
        return 'Professional branding photography portfolio. Business portraits and personal branding photos in Wesley Chapel and Tampa, FL. Elevate your brand image.';
      case 'maternity':
        return 'Maternity photography portfolio. Beautiful pregnancy photos in Wesley Chapel and Tampa, FL. Capture your journey into motherhood.';
      default:
        return 'Professional photography portfolio in Wesley Chapel and Tampa, FL.';
    }
  };

  useEffect(() => {
    if (!folderId) {
      setError('Album not found.');
      setIsLoading(false);
      return;
    }

    const fetchAlbumPhotos = async () => {
      try {
        const response = await axios.get(`/api/photos/${folderId}`);
        const photos = response.data.map((file: any) => ({
          src: `${file.src}`,
          label: file.name,
        }));
        setAlbumPhotos(photos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching album photos:', error);
        setError('Failed to load album photos. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchAlbumPhotos();
  }, [folderId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-gray-600" />
        <span className="ml-4 text-xl text-gray-600">Loading album...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{getAlbumTitle()} | Cristina Batrincea Photography</title>
        <meta name="description" content={getAlbumDescription()} />
        <link
          rel="canonical"
          href={`https://cristinabat.com/albums/${albumId}`}
        />
        <meta
          property="og:title"
          content={`${getAlbumTitle()} | Cristina Batrincea Photography`}
        />
        <meta property="og:description" content={getAlbumDescription()} />
        <meta
          property="og:url"
          content={`https://cristinabat.com/albums/${albumId}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <PhotoAlbum photos={albumPhotos} />
      </div>
    </>
  );
};

// Helper function to map albumId to folderId
const getFolderIdFromAlbumId = (albumId: string | undefined) => {
  const albumMap: Record<string, string> = {
    family: '1Hq9SBC97JGH0MUDu-yhn3lJnZOf9MLON',
    branding: '19dK9XLAjEPn3FPf3hRd8EaygEfYhzPIw',
    maternity: '1IGFn-SUvYhq_XZSAVXnY20Lp4gjyFmAN',
  };

  return albumId ? albumMap[albumId] : null;
};

export default AlbumPage;
