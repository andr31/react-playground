import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PhotoAlbum from '../components/PhotoAlbum';
import { FaSpinner } from 'react-icons/fa';

interface PhotoData {
  src: string;
  label: string;
}

const AlbumPage: React.FC = () => {
  const location = useLocation();
  const { folderId } = location.state as {
    folderId: string;
  };

  const [albumPhotos, setAlbumPhotos] = useState<PhotoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    return <div>{error}</div>;
  }

  return (
    <div>
      <PhotoAlbum photos={albumPhotos} />
    </div>
  );
};

export default AlbumPage;
