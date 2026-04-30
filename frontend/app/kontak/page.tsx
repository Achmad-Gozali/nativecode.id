'use client';
import { useState } from 'react';
import { Headphones } from 'lucide-react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    subject: '',
    pesan: '',
  });
  const [terkirim, setTerkirim] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setTerkirim(true);
    setTimeout(() => setTerkirim(false), 3000);
    setForm({ nama: '', email: '', subject: '', pesan: '' });
  };

  // Nomor WhatsApp baru
  const whatsappNumber = '6282249244647';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20pixelcodedigital.id%2C%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20website%20profesional%20dan%20SEO%20bergaransi.`;

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen pt-20">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-36 px-4 overflow-hidden rounded-b-[3rem]"
          style={{
            background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)',
          }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Kontak</h1>
          <p className="text-gray-500 mb-3">www.pixelcodedigital.id</p>
          <p className="text-lg text-gray-600 mb-8">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md"
          >
            <Headphones size={18} />
            Konsultasi via WhatsApp
          </a>
        </section>

        {/* KONTEN UTAMA */}
        <section id="form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Let's talk with<br />
                the{' '}
                <span className="text-[#D17B36]">pixelcodedigital</span>
                <span className="text-[#5D9C76]">.id</span>
                <br />
                team.
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-gray-600 leading-relaxed">
                Tim <strong className="text-[#5D9C76]">pixelcodedigital.id</strong> siap membantu Anda mewujudkan strategi digital terbaik untuk bisnis Anda — mulai dari pembuatan website, optimasi SEO, iklan digital, maupun pengembangan aplikasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — info kontak */}
            <div>
              <div className="space-y-0 divide-y divide-gray-100">
                {/* Telepon */}
                <div className="flex items-center gap-4 py-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D9C76] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.47 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon :</p>
                    <p className="text-gray-600">0822 4924 4647</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 py-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D9C76] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp :</p>
                    <p className="text-gray-600">0822 4924 4647</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 py-5">
                  <div className="w-12 h-12 rounded-full bg-[#5D9C76] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email :</p>
                    <p className="text-gray-600">cs@pixelcodedigital.id</p>
                  </div>
                </div>
              </div>

              {/* Sosmed */}
              <div className="mt-8">
                <p className="font-semibold text-gray-900 mb-4">Follow us on :</p>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#D17B36] flex items-center justify-center hover:bg-[#c26f2f] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#D17B36] flex items-center justify-center hover:bg-[#c26f2f] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#D17B36] flex items-center justify-center hover:bg-[#c26f2f] transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message!</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your name</label>
                  <input
                    type="text"
                    value={form.nama}
                    onChange={e => setForm({ ...form, nama: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5D9C76] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5D9C76] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5D9C76] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your message (optional)</label>
                  <textarea
                    rows={6}
                    value={form.pesan}
                    onChange={e => setForm({ ...form, pesan: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#5D9C76] transition-colors resize-y"
                  />
                </div>

                {terkirim && (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
                    ✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#5D9C76] text-white py-4 rounded-lg font-semibold hover:bg-[#4e8a66] transition-colors text-sm"
                >
                  Submit
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}