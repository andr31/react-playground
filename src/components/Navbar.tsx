import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import {
  animateScroll as scroll,
  Link as ScrollLink,
  scroller,
} from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  menuItems: { name: string; link: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (link: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: link } });
    } else {
      scroller.scrollTo(link, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }
    toggleMenu();
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }
  }, [location]);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div
          className="font-bold text-white"
          onClick={() => {
            navigate('/');
            scroll.scrollToTop();
          }}
        >
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
            {isOpen ? '' : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items Section */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } sm:static sm:flex-row sm:space-y-0 sm:space-x-4 sm:translate-x-0 sm:bg-transparent sm:inset-auto sm:items-center sm:justify-start md:min-w-fit`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none sm:hidden"
          >
            <FaTimes size={24} />
          </button>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-white hover:text-[#ac440c] text-lg sm:text-base cursor-pointer"
              onClick={() => handleMenuItemClick(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex md:space-x-4 md:items-center md:mt-4 md:ml-5">
          <a
            href="https://www.facebook.com/profile.php?id=61565607364040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ac440c]"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/moonwave.photography/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ac440c]"
          >
            <FaInstagram size={24} />
          </a>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="bg-[#ac440b] text-white px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-full text-sm sm:text-lg hover:text-black"
          >
            BOOK
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
