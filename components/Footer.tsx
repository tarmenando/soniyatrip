import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LocationIcon from './icons/LocationIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Soniya Trip Adventure</h3>
            <p className="text-gray-400">Your trusted partner for unforgettable journeys across Indonesia.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak Kami</h4>
            <div className="flex items-center justify-center md:justify-start mb-3">
                <LocationIcon />
                <p className="ml-3 text-gray-300">Jl. Kenangan, Dulalowo Timur, Kota Tengah, Gorontalo</p>
            </div>
             <div className="flex items-center justify-center md:justify-start">
                <WhatsappIcon />
                <a href="https://wa.me/6282193100281" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-300 hover:text-orange-400">0821-9310-0281</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex justify-center md:justify-start">
                <a 
                    href="https://www.instagram.com/soniyatripadventure" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                    <InstagramIcon />
                    soniyatripadventure
                </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Soniya Trip Adventure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;