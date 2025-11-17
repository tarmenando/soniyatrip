import React from 'react';
import { TravelPackage } from '../types';
import PackageCard from './PackageCard';

const travelPackages: TravelPackage[] = [
  {
    id: 'manado',
    name: 'Trip Manado',
    description: 'Selami keindahan bawah laut Bunaken yang terkenal di dunia dan jelajahi kekayaan alam Minahasa.',
    imageUrl: 'https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-5-Super-Adventure.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2'
  },
  {
    id: 'luwuk',
    name: 'Trip Luwuk',
    description: 'Temukan pesona air terjun Saluopa dan keunikan danau Paisu Pok, permata tersembunyi di Sulawesi Tengah.',
    imageUrl: 'https://kontekssulawesi.id/wp-content/uploads/2024/05/Air-Terjun-Piala-Luwuk-Banggai-.jpg'
  },
  {
    id: 'gorontalo',
    name: 'Trip Gorontalo',
    description: 'Rasakan pengalaman berenang bersama hiu paus jinak di Botubarani dan nikmati surga Olele Marine Park.',
    imageUrl: 'https://pandooin-com.s3.ap-southeast-1.amazonaws.com/blog/article/images/hPjKtSIX1Uq4DgmUMNcmGqD9RgmuRjmAV4jZRxwK.webp'
  },
  {
    id: 'bali',
    name: 'Trip Bali',
    description: 'Nikmati keindahan budaya, pantai eksotis, dan sawah terasering yang menyejukkan di Pulau Dewata.',
    imageUrl: 'https://bankraya.co.id/uploads/insights/jO3TRUmMuBAuyilKHgu9Ovjfs3nFoubWiSSjB3Pn.jpg'
  }
];


const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Temukan <span className="text-orange-500">Destinasi Impianmu</span></h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Kami telah menyiapkan destinasi terbaik untuk liburan Anda selanjutnya.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelPackages.map((pkg) => (
            <PackageCard key={pkg.id} packageInfo={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;