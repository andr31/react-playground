import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import PhotoAlbum from '../components/PhotoAlbum';
import { FaSpinner } from 'react-icons/fa';

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
    <div>
      <PhotoAlbum photos={albumPhotos} />
    </div>
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
