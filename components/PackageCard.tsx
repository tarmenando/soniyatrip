import React from 'react';
import { TravelPackage } from '../types';

interface PackageCardProps {
  packageInfo: TravelPackage;
  onOpenModal: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageInfo, onOpenModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col hover:shadow-2xl hover:shadow-orange-200/80">
      <img src={packageInfo.imageUrl} alt={packageInfo.name} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{packageInfo.name}</h3>
        <p className="text-gray-600 text-base flex-grow">{packageInfo.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <a href="#booking" className="bg-orange-500 text-white font-semibold text-center rounded-full px-6 py-2 hover:bg-orange-600 transition-colors duration-300">
            Pesan Sekarang
          </a>
          <button
            onClick={onOpenModal}
            className="bg-transparent border border-orange-500 text-orange-500 font-semibold text-center rounded-full px-6 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            Tabel Harga
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;