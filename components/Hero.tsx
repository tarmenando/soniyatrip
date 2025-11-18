import React, { useState, useEffect } from 'react';

const heroImages = [
  'https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-5-Super-Adventure.jpg?tr=q-70,c-at_max,w-1600,h-900', // Manado
  'https://kontekssulawesi.id/wp-content/uploads/2024/05/Air-Terjun-Piala-Luwuk-Banggai-.jpg', // Luwuk
  '/gorontalo.jpeg', // Gorontalo
  'https://bankraya.co.id/uploads/insights/jO3TRUmMuBAuyilKHgu9Ovjfs3nFoubWiSSjB3Pn.jpg' // Bali
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {heroImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">Jelajahi Surga Tersembunyi Indonesia</h1>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
          Bersama Soniya Trip Adventure, temukan keindahan alam yang memukau dan pengalaman tak terlupakan.
        </p>
        <a 
          href="#packages" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Lihat Paket Kami
        </a>
      </div>
    </section>
  );
};

export default Hero;