'use client';
import { useState } from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { useScrollAnim } from '@/hooks/use-scroll-anim';

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', email: '', subject: '', pesan: '' });
  const [terkirim, setTerkirim] = useState(false);
  const [loading, setLoading] = useState(false);
  useScrollAnim();

  const handleSubmit = () => {
    if (!form.nama || !form.email || !form.subject) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTerkirim(true);
      setForm({ nama: '', email: '', subject: '', pesan: '' });
      setTimeout(() => setTerkirim(false), 4000);
    }, 1000);
  };

  const whatsappLink = `https://wa.me/6282249244647?text=Halo%20nativecode.id%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20digital.`;

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen pt-20">

        {/* HERO */}
        <section className="relative py-24 px-4 overflow-hidden" style={{
          background: 'linear-gradient(135deg, #f0faf4 0%, #fff8f0 50%, #fef9f5 100%)'
        }}>
          {/* Dekorasi */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #5D9C76, transparent)', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #D17B36, transparent)', transform: 'translate(-30%, 30%)' }} />

          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Kiri: teks */}
              <div className="flex-1">
                <h1 className="fade-up text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Mari Wujudkan<br />
                  <span className="text-[#5D9C76]">Visi Digital</span><br />
                  Bisnis Anda
                </h1>
                <p className="fade-up stagger-1 text-gray-500 text-lg leading-relaxed max-w-md">
                  Tim nativecode.id siap mendampingi Anda dalam membangun kehadiran digital yang profesional dan berdampak nyata.
                </p>
                <div className="fade-up stagger-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#20b859] transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.4-4.5-10.9-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.3 13.8 10.4-1.6 32.1-13.1 36.6-25.8 4.5-12.7 4.5-23.6 3.2-25.9-1.4-2.3-5.1-3.7-10.6-6.5z"/>
                    </svg>
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>

              {/* Kanan: info card */}
              <div className="fade-right flex-1 w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 p-8 border border-gray-100">
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">Informasi Kontak</p>
                  <div className="space-y-5">
                    {[
                      {
                        label: 'Telepon & WhatsApp',
                        value: '0822 4924 4647',
                        icon: (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.47 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        )
                      },
                      {
                        label: 'Alamat Surel',
                        value: 'cs@nativecode.id',
                        icon: (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                          </svg>
                        )
                      },
                      {
                        label: 'Jam Operasional',
                        value: 'Senin – Sabtu, 08.00 – 17.00 WIB',
                        icon: (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        )
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#5D9C76] flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium mb-3">Ikuti Kami</p>
                    <div className="flex gap-2">
                      {[
                        { href: '#', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>, fill: true },
                        { href: '#', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>, fill: false },
                        { href: '#', icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>, fill: true },
                      ].map((s, i) => (
                        <a key={i} href={s.href}
                          className="w-9 h-9 rounded-xl bg-[#D17B36]/10 hover:bg-[#D17B36] group flex items-center justify-center transition-colors duration-200">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D17B36] group-hover:text-white transition-colors"
                            fill={s.fill ? 'currentColor' : 'none'} stroke={s.fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {s.icon}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="fade-up max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Kirim Pesan kepada Kami</h2>
              <p className="text-gray-500 mt-3 text-sm">Kami akan merespons pesan Anda dalam 1x24 jam kerja.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8 sm:p-10">
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      value={form.nama}
                      onChange={e => setForm({ ...form, nama: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D9C76]/30 focus:border-[#5D9C76] transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Alamat Surel <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="contoh@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D9C76]/30 focus:border-[#5D9C76] transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subjek <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Topik yang ingin Anda sampaikan"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D9C76]/30 focus:border-[#5D9C76] transition-all placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan <span className="text-gray-400 font-normal text-xs">(opsional)</span></label>
                  <textarea
                    rows={5}
                    value={form.pesan}
                    onChange={e => setForm({ ...form, pesan: e.target.value })}
                    placeholder="Ceritakan kebutuhan Anda secara lebih detail..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5D9C76]/30 focus:border-[#5D9C76] transition-all resize-none placeholder:text-gray-300"
                  />
                </div>

                {terkirim && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#5D9C76] text-white py-4 rounded-xl font-semibold hover:bg-[#4a8562] transition-all duration-200 shadow-lg shadow-[#5D9C76]/20 hover:shadow-[#5D9C76]/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Mengirim...
                    </>
                  ) : 'Kirim Pesan'}
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