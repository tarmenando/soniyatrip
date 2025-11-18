import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'Traveler from New York',
    quote: 'The trip experience to Manado was extraordinary! The tour guide was very professional and friendly. The underwater scenery of Bunaken was truly unforgettable. Soniya Trip Adventure is the best!',
    avatarUrl: 'https://i.pravatar.cc/150?u=johndoe', // Male avatar
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Family from London',
    quote: 'Our family vacation to Bali became very easy and enjoyable thanks to Soniya. The itinerary was perfect for both children and parents. Accommodation and transportation were also very comfortable. Thank you!',
    avatarUrl: 'https://i.pravatar.cc/150?u=janesmith', // Female avatar
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Johnson',
    location: 'Solo Backpacker from Berlin',
    quote: 'I took the Gorontalo and Luwuk trip package. Truly a hidden gem! I could swim with whale sharks and see beautiful waterfalls. Everything was well organized. Recommended!',
    avatarUrl: 'https://i.pravatar.cc/150?u=robertjohnson', // Male avatar
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What Do <span className="text-orange-500">They Say?</span></h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Experiences and stories from adventurers who have trusted us.</p>
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