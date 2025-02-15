import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  menuItems: { name: string; link: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold text-white">
          <h1 className="font-montez text-4xl sm:text-5xl md:text-6xl">
            Cristina Batrincea Photography
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items Section */}
        <div
          className={`flex-col sm:flex-row sm:flex ${isOpen ? 'flex' : 'hidden'} sm:space-x-4 mt-4 sm:mt-0`}
        >
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white hover:text-[#ac440c] text-sm sm:text-base cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex md:space-x-4 md:items-center md:mt-4">
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
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="bg-[#ac440b] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg hover:text-black"
          >
            BOOK
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
