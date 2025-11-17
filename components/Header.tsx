import React, { useState } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#packages', text: 'Paket Trip' },
    { href: '#testimonials', text: 'Testimoni' },
    { href: '#booking', text: 'Pesan Sekarang' },
    { href: '#contact', text: 'Kontak' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">
            Soniya Trip Adventure
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-md`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;