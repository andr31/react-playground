import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-row justify-evenly p-20 bg-[#e8e8e1]">
      <div className="flex flex-col text-center justify-center items-center prose">
        <h1> Pricing</h1>
        <p className="max-w-96">
          Each photograph tells a story, and I’m here to help you capture yours.
          Whether it's a family session, a milestone celebration, or your
          wedding day, your memories deserve to be beautifully preserved.
          Explore my packages below, and let’s create something timeless
          together.
        </p>
      </div>
      <div>
        <img
          src="/static/images/Pricing_portrait.jpg"
          alt="About Me"
          className="w-60 h-82 lg:w-[500px] lg:h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Pricing;
