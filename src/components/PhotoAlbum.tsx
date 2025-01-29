import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface PhotoAlbumProps {
  photos: { src: string; label: string }[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
  return (
    <PhotoProvider>
      <div className="flex max-w-96">
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
