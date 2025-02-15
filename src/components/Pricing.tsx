import React from 'react';
import PhotoCard from './PhotoCard.tsx';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/packages`);
  };
  return (
    <div className="flex flex-row justify-evenly p-20 bg-[#e8e8e1]">
      <div className="flex flex-col text-center justify-center items-center prose">
        <h1 className="font-montez text-5xl">Pricing</h1>
        <p className="max-w-96 font-inter mt-5">
          Each photograph tells a story, and I’m here to help you capture yours.
          Whether it's a family session, a milestone celebration, or your
          wedding day, your memories deserve to be beautifully preserved.
          Explore my packages below, and let’s create something timeless
          together.
        </p>
        <button
          type="submit"
          className="px-10 py-6 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 mt-5"
          onClick={handleButtonClick}
        >
          EXPLORE OPTIONS
        </button>
      </div>
      <div className="hidden lg:block">
        <PhotoCard
          src="/static/images/Pricing_portrait.jpg"
          label="PRICING"
          autoHeight={true}
        />
      </div>
    </div>
  );
};

export default Pricing;
