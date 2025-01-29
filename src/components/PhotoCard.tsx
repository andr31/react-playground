import React from 'react';

interface PhotoCardProps {
  src: string;
  label: string;
  autoHeight?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, label, autoHeight }) => {
  const height = autoHeight ? 'lg:h-auto' : 'lg:h-[700px]';
  return (
    <img
      src={src}
      alt={label}
      className={`w-60 h-82 lg:w-[500px] ${height} rounded-lg`}
    />
  );
};

export default PhotoCard;
