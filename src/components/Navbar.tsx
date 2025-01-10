import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  menuItems: { name: string; link: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold text-white">
          <h1 className="font-madelyn text-4xl sm:text-5xl md:text-6xl">
            Moonwave Photography
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items Section */}
        <div className={`flex-col sm:flex-row sm:flex ${isOpen ? 'flex' : 'hidden'} sm:space-x-4 mt-4 sm:mt-0`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white hover:text-[#ac440c] text-sm sm:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 items-center mt-4 sm:mt-0">
          <a
            href="https://facebook.com"
            className="text-white hover:text-[#ac440c]"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-[#ac440c]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="/book"
            className="bg-[#ac440b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg hover:text-black"
          >
            BOOK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
