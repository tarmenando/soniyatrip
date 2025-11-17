import React, { useState } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Manado');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert('Mohon isi nama Anda.');
      return;
    }

    const phoneNumber = '6282193100281';
    const message = `
Halo Soniya Trip Adventure,
Saya ingin bertanya tentang paket perjalanan.

Nama: ${name}
Paket Tujuan: Trip ${selectedPackage}
Pesan Tambahan: ${notes || '-'}

Mohon informasinya. Terima kasih.
    `.trim().replace(/\n/g, '%0A');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Rencanakan Perjalanan Anda</h2>
          <p className="text-center text-gray-600 mb-8">Isi form di bawah ini dan kami akan segera menghubungi Anda melalui WhatsApp.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Nama Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="package" className="block text-gray-700 font-medium mb-2">Pilih Paket Trip</label>
              <select 
                id="package" 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option>Manado</option>
                <option>Luwuk</option>
                <option>Gorontalo</option>
                <option>Bali</option>
              </select>
            </div>
            <div className="mb-8">
              <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">Pesan Tambahan (Opsional)</label>
              <textarea 
                id="notes" 
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Contoh: Jumlah peserta, tanggal yang diinginkan, dll."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg flex items-center justify-center gap-3 transition-colors duration-300"
            >
              <WhatsappIcon />
              Pesan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;