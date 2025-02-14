import React from 'react';

interface PromotionBannerProps {
  items: string[];
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ items }) => {
  // Duplicate the items array to create a seamless scrolling effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionBanner;
