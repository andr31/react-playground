import React from 'react';

interface PhotoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
