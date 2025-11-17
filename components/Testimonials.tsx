import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    location: 'Traveler dari Jakarta',
    quote: 'Pengalaman trip ke Manado luar biasa! Pemandu wisatanya sangat profesional dan ramah. Pemandangan bawah laut Bunaken benar-benar tak terlupakan. Soniya Trip Adventure is the best!',
    avatarUrl: 'https://i.pravatar.cc/150?u=andi',
    rating: 5,
  },
  {
    id: 2,
    name: 'Citra Lestari',
    location: 'Keluarga dari Surabaya',
    quote: 'Liburan keluarga ke Bali jadi sangat mudah dan menyenangkan berkat Soniya. Itinerary-nya pas untuk anak-anak dan orang tua. Akomodasi dan transportasinya juga sangat nyaman. Terima kasih!',
    avatarUrl: 'https://i.pravatar.cc/150?u=citra',
    rating: 5,
  },
  {
    id: 3,
    name: 'Budi Santoso',
    location: 'Solo Backpacker dari Bandung',
    quote: 'Saya ambil paket trip Gorontalo dan Luwuk. Benar-benar hidden gem! Saya bisa berenang dengan hiu paus dan melihat air terjun yang indah. Semuanya terorganisir dengan baik. Recommended!',
    avatarUrl: 'https://i.pravatar.cc/150?u=budi',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Apa Kata <span className="text-orange-500">Mereka?</span></h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Pengalaman dan cerita dari para petualang yang telah mempercayai kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 ring-4 ring-orange-200" />
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;