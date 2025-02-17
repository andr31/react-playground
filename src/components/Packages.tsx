import React from 'react';
import PhotoCard from './PhotoCard.tsx';

const Packages: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly bg-[#e8e8e1]">
      <h1 className="font-montez text-5xl text-center mt-5">Package options</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 mt-5">
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <PhotoCard
            src="/static/images/Lucas_1.jpg"
            label="PRICING"
            autoHeight={false}
          />
          <div className="basic-session flex flex-col items-center text-center mt-5">
            <h2 className="font-bold text-2xl">Basic Session</h2>
            <p className="font-inter m-[5px] lg:m-0">
              Ideal for quick family portraits or individual branding shots.
            </p>
            <p className="font-inter mt-5">45 minutes long</p>
            <p className="font-inter">15 edited digital photos</p>
            <h2 className="font-bold mt-5 text-2xl">$250</h2>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <PhotoCard
            src="/static/images/Andrei_1.jpg"
            label="PRICING"
            autoHeight={false}
          />
          <div className="standard-session flex flex-col items-center text-center mt-5">
            <h2 className="font-bold text-2xl">Standard Session</h2>
            <p className="font-inter m-[5px] lg:m-0">
              Perfect for family groups, maternity shoots, or personal branding
              sessions.
            </p>
            <p className="font-inter mt-5">Up to 1 hour long</p>
            <p className="font-inter">25 edited digital photos</p>
            <h2 className="font-bold mt-5 text-2xl">$400</h2>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <PhotoCard
            src="/static/images/Bebe_1.jpg"
            label="PRICING"
            autoHeight={false}
          />
          <div className="extended-session flex flex-col items-center text-center mt-5">
            <h2 className="font-bold text-2xl">Extended Session</h2>
            <p className="font-inter m-[5px] lg:m-0">
              Comprehensive session suitable for multiple outfit changes,
              various locations, or extended family groups.
            </p>
            <p className="font-inter mt-5">Up to 2 hours long</p>
            <p className="font-inter">50 edited digital photos</p>
            <h2 className="font-bold mt-5 text-2xl">$750</h2>
          </div>
        </div>
      </div>
      <div className="additional-info m-5 p-6 bg-[#dbccc3] rounded-lg flex flex-col items-center text-center shadow-md">
        <p className="font-bold text-lg mb-3">Additional Information</p>
        <p className="font-inter">
          Sessions are conducted within the Tampa area. A $50 fee applies for
          locations 20 miles or more from Wesley Chapel or Downtown Tampa. A
          $100 deposit is required to secure your session date. Edited images
          are provided via an online gallery within 2 weeks of the session.
        </p>
      </div>
    </div>
  );
};

export default Packages;
