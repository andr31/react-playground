import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#dbccc3] flex justify-center items-center py-4">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl px-4">
        {/* First Section */}
        <div className="flex items-center space-x-4">
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <span>@moonwave.photography</span>
        </div>

        {/* Second Section */}
        <div className="text-center">
          <div>123-456-789</div>
          <div>hello@moonwave.com</div>
        </div>

        {/* Third Section */}
        <div className="max-w-[200px] text-center">Photographer in Tampa and Wesley Chapel areas</div>
      </div>
    </div>
  );
};

export default Footer;
