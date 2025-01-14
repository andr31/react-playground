import React from 'react';

interface PromotionBannerProps {
  items: string[];
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ items }) => {

  return (
    <div className="w-full bg-black overflow-hidden flex justify-center items-center">
      <div className="whitespace-nowrap animate-marquee">
        {items.map((item, index) => (
          <div key={index} className="inline-block align-top w-72 text-white mx-4 my-2 whitespace-normal text-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionBanner;
