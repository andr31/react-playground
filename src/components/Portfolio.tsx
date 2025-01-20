import React from 'react';

const Portfolio: React.FC = () => {
  const photoCards = [
    { src: '/static/images/Family.jpg', label: 'FAMILY' },
    { src: '/static/images/Branding.jpg', label: 'BRANDING' },
    { src: '/static/images/Maternity.jpg', label: 'MATERNITY' },
  ];

  return (
    <div className="bg-[#e8e8e1] pt-5 pb-20">
      <h2 className="text-center text-3xl font-bold mb-8">Portfolio</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {photoCards.map((card, index) => (
          <div key={index} className="relative">
            <img
              src={card.src}
              alt={card.label}
              className="w-60 h-82 lg:w-[500px] lg:h-auto rounded-lg"
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black text-white uppercase rounded-full px-6 py-3 text-lg">
              {card.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
