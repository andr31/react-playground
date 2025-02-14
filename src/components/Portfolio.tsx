import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoCard from './PhotoCard';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const photoCards = [
    {
      src: '/static/images/Family.jpg',
      label: 'FAMILY',
      folderId: '1M4lStPUCYxvnV93nSRWTolGUTYl6FyAB',
    },
    {
      src: '/static/images/Branding.jpg',
      label: 'BRANDING',
      folderId: '1wEbOFo8khcNNmUgljFJzCTjm4OjGUozl',
    },
    {
      src: '/static/images/Maternity.jpg',
      label: 'MATERNITY',
      folderId: '17J_BQUojfwP2ybRpyVx_s_YzVgyQF_ns',
    },
  ];

  const handleButtonClick = (label: string, folderId: string) => {
    navigate(`/albums/${label.toLowerCase()}`, {
      state: {
        folderId: folderId,
      },
    });
  };

  return (
    <div className="bg-[#e8e8e1] pt-5 pb-28 p-5">
      <h1 className="font-montez text-5xl mb-8">Portfolio</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {photoCards.map((card) => (
          <div key={card.label} className="relative">
            <PhotoCard src={card.src} label={card.label} autoHeight={false} />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black text-white uppercase rounded-full px-6 py-3 text-lg hover:bg-gray-800 transition-colors duration-300"
              onClick={() => handleButtonClick(card.label, card.folderId)}
            >
              {card.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
