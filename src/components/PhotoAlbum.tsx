import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface PhotoAlbumProps {
  photos: { src: string; label: string }[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {photos.map((item, index) => (
          <PhotoView key={index} src={item.src}>
            <img
              src={item.src}
              alt={item.label}
              className="object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 m-2"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default PhotoAlbum;
