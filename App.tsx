import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Packages />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;