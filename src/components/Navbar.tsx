import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { animateScroll as scroll, scroller } from 'react-scroll';
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
        {/* Left Menu Items */}
        <div className="hidden sm:flex sm:space-x-4">
          {menuItems
            .slice(0, Math.ceil(menuItems.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="text-white hover:text-[#ac440c] text-lg sm:text-base cursor-pointer"
                onClick={() => handleMenuItemClick(item.link)}
              >
                {item.name}
              </div>
            ))}
        </div>

        {/* Logo Section */}
        <div
          className="font-bold text-white text-center cursor-pointer"
          onClick={() => {
            navigate('/');
            scroll.scrollToTop();
          }}
        >
          <h1 className="font-montez text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Cristina Batrincea Photography
          </h1>
        </div>

        {/* Right Menu Items */}
        <div className="hidden sm:flex sm:space-x-4 items-center">
          {menuItems
            .slice(Math.ceil(menuItems.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="text-white hover:text-[#ac440c] text-lg sm:text-base cursor-pointer"
                onClick={() => handleMenuItemClick(item.link)}
              >
                {item.name}
              </div>
            ))}

          {/* Social Media Icons */}
          <a
            href="https://www.instagram.com/cristinabatphotography/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ac440c] sm:hidden md:block"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565607364040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ac440c] sm:hidden md:block"
          >
            <FaFacebook size={20} />
          </a>

          {/* Book Button */}
          <button
            onClick={() => {
              if (location.pathname !== '/') {
                // Navigate to the homepage and scroll to the "contact" section
                navigate('/', { state: { scrollTo: 'contact' } });
              } else {
                // Scroll to the "contact" section directly
                scroller.scrollTo('contact', {
                  smooth: true,
                  duration: 500,
                  offset: -100,
                });
              }
            }}
            className="px-4 py-2 bg-[#ac440c] text-white text-sm font-medium rounded-full hover:bg-[#8a370a] transition-colors duration-300 sm:hidden md:block"
          >
            Book
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden relative z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } sm:hidden z-40`}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="text-white hover:text-[#ac440c] text-lg cursor-pointer"
              onClick={() => handleMenuItemClick(item.link)}
            >
              {item.name}
            </div>
          ))}

          {/* Social Media Icons in Mobile Menu */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/cristinabatphotography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ac440c]"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565607364040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ac440c]"
            >
              <FaFacebook size={24} />
            </a>
          </div>

          {/* Book Button */}
          <button
            onClick={() => {
              if (location.pathname !== '/') {
                // Navigate to the homepage and scroll to the "book" section
                navigate('/', { state: { scrollTo: 'contact' } });
              } else {
                // Scroll to the "book" section directly
                scroller.scrollTo('contact', {
                  smooth: true,
                  duration: 500,
                  offset: -100,
                });
              }
              toggleMenu(); // Close the mobile menu if open
            }}
            className="px-4 py-2 bg-[#ac440c] text-white text-sm font-medium rounded-full hover:bg-[#8a370a] transition-colors duration-300"
          >
            Book
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
