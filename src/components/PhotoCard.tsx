import React from 'react';

interface PhotoCardProps {
  src: string;
  label: string;
  autoHeight: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, label, autoHeight }) => {
  return (
    <img
      src={src}
      alt={label}
      className={`w-60 h-82 lg:w-[500px] lg:h-${autoHeight ? 'auto' : '[700px]'} rounded-lg`}
    />
  );
};

export default PhotoCard;
