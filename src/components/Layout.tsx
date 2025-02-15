import React, { ReactNode } from 'react';
import Footer from '../components/Footer.tsx';
import Navbar from './Navbar.tsx';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const menuItems = [
    { name: 'ABOUT', link: 'about' },
    { name: 'PORTFOLIO', link: 'portfolio' },
    { name: 'PRICING', link: 'pricing' },
    { name: 'GETTING READY', link: 'getting-ready' },
    { name: 'CONTACT', link: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar menuItems={menuItems} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
