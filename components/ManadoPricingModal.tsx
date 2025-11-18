import React, { useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';

interface PricingModalProps {
  onClose: () => void;
}

const ManadoPricingModal: React.FC<PricingModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-2xl p-4 sm:p-8 max-w-5xl w-full relative transform transition-all duration-300 ease-in-out scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-transform duration-200 transform hover:scale-110"
          aria-label="Close"
        >
          <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Tabel Harga Trip Manado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 shadow-lg border border-yellow-200 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-800 border-b-2 border-yellow-200 pb-2">4 Day-3 Night</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              <li className="flex justify-between items-center"><span className="font-semibold">4-6 pax</span> <span className="font-mono bg-yellow-100 px-2 py-1 rounded">IDR 4.000.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">7-10 pax</span> <span className="font-mono bg-yellow-100 px-2 py-1 rounded">IDR 3.700.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">11-12 pax</span> <span className="font-mono bg-yellow-100 px-2 py-1 rounded">IDR 3.500.000</span></li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">5 Day-4 Night</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              <li className="flex justify-between items-center"><span className="font-semibold">4 pax</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">IDR 4.800.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">5-9 pax</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">IDR 4.600.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">10-12 pax</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">IDR 4.400.000</span></li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-blue-50 rounded-lg p-4 sm:p-6 shadow-lg border border-blue-200 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">6 Day-5 Night</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              <li className="flex justify-between items-center"><span className="font-semibold">4-6 pax</span> <span className="font-mono bg-blue-100 px-2 py-1 rounded">IDR 11.000.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">7-10 pax</span> <span className="font-mono bg-blue-100 px-2 py-1 rounded">IDR 7.700.000</span></li>
              <li className="flex justify-between items-center"><span className="font-semibold">11-12 pax</span> <span className="font-mono bg-blue-100 px-2 py-1 rounded">IDR 6.400.000</span></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 sm:mt-10 italic">
          For inquiries about other trip packages, please contact us directly (for example: solo trip, couple trip, or adjustments such as adding or removing destinations)
        </p>
      </div>
    </div>
  );
};

export default ManadoPricingModal;
