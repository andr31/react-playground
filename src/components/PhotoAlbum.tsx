import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface PhotoAlbumProps {
  photos: { src: string; label: string }[];
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos }) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {photos.map((item, index) => (
          <PhotoView key={index} src={item.src}>
            <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default PhotoAlbum;
