'use client';
import { useState } from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

// Monochrome professional icons
const IconPhone = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);
const IconGlobe = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconShield = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconDevice = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconSearch = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconPen = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);
const IconDoc = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const paket = [
  { nama: 'Silver', medal: '/images/paket/silver.png', harga: '700K', perpanjangan: '500ribu/tahun', bestSeller: false, fitur: ['4 Menu','FREE Domain Web.id','Hosting 500 MB (30 foto kuota kerja)','Include Listing di pixelcodedigital.id'], deskDetail: 'Paket ini cocok untuk Anda yang baru memulai bisnis dan membutuhkan website sederhana, praktis, dan mudah diakses.', fiturDetail: ['Integrasi Sosial Media','Website SSL','Template WP Premium','User + Video Panduan Edit','Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Standar Kontak Form','Free Support','Bergaransi Selamanya'] },
  { nama: 'Gold', medal: '/images/paket/gold.png', harga: '1.6 Jt', perpanjangan: '600ribu/tahun', bestSeller: true, fitur: ['8 Menu','FREE Domain .com','Hosting 3 GB (70 foto kuota kerja)','Include Listing di pixelcodedigital.id'], deskDetail: 'Paket ini cocok untuk Anda yang ingin memiliki website dengan fitur lengkap.', fiturDetail: ['Integrasi Media Sosial','Free Whatsapp/Telepon','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Free Banner dan Logo','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya'] },
  { nama: 'Diamond', medal: '/images/paket/diamond.png', harga: '2 Jt', perpanjangan: '1 Juta/tahun', bestSeller: false, fitur: ['10 Menu','FREE Domain .com/.co.id','Hosting 3 GB (90 foto kuota kerja)','Include Listing di pixelcodedigital.id'], deskDetail: 'Paket desain website ini sangat cocok bagi Anda yang membutuhkan website sebagai profil bisnis.', fiturDetail: ['Integrasi Media Sosial','Free Whatsapp/Telepon','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Plugin Premium','Free Banner dan Logo','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya'] },
  { nama: 'Platinum', medal: '/images/paket/platinum.png', harga: '3 Jt', perpanjangan: '1.5 Juta/tahun', bestSeller: false, fitur: ['15-20 Menu','FREE Domain .com, .co.id, .co, .id, .asia, .xyz','Hosting 5 GB (120 foto kuota kerja)','Include Listing di pixelcodedigital.id'], deskDetail: 'Paket desain website ini cocok untuk Anda yang membutuhkan website dengan fitur khusus dan desain menarik.', fiturDetail: ['Free Whatsapp/Telepon','Integrasi Media Sosial','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Plugin Premium','Free Banner dan Logo','Free 1 Email Bisnis','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya','Integrasi Lapak Media'] },
];

const fiturUnggulan = [
  { title: 'Hosting & Domain Gratis', desc: 'Langsung online tanpa repot! Kami sediakan hosting dan domain gratis untuk website Anda.', icon: <IconGlobe /> },
  { title: 'Sertifikat SSL Gratis', desc: 'Website aman dan terpercaya dengan SSL (https) gratis untuk semua paket.', icon: <IconShield /> },
  { title: 'Responsif di Semua Perangkat', desc: 'Website tampil sempurna di desktop, tablet, hingga smartphone.', icon: <IconDevice /> },
  { title: 'SEO Friendly', desc: 'Struktur dan konten website dirancang agar mudah ditemukan di Google.', icon: <IconSearch /> },
  { title: 'Desain Modern & Kekinian', desc: 'Kami selalu mengikuti tren desain terbaru agar tampilan website Anda terlihat profesional.', icon: <IconPen /> },
  { title: 'Ide Konten & Copywriting', desc: 'Tim kami siap bantu buatkan konten yang persuasif dan menarik untuk bisnis Anda.', icon: <IconDoc /> },
];

export default function PembuatanWebsite() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const toggleDetail = (key: string) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-14 sm:py-32 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Jasa Pembuatan Website</h1>
          <p className="text-gray-500 mb-3 text-sm">www.pixelcodedigital.id</p>
          <p className="text-sm sm:text-lg text-gray-600 mb-8 px-2 max-w-lg">
            Jasa Pembuatan <span className="text-[#D17B36] font-semibold">Website Profesional</span> dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a
            href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Website.+Mohon+bantuannya+%F0%9F%99%8F"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base"
          >
            <IconPhone size={16} />
            Konsultasi
          </a>
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                <span className="text-[#D17B36]">pixelcodedigital</span><span className="text-[#5D9C76]">.id</span>
              </h2>
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">
                Tampil lebih profesional. Ditemukan lebih cepat. Dikenal lebih luas
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Kami menghadirkan website yang menarik, responsif, dan fungsional, dirancang khusus untuk mencerminkan identitas brand Anda.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Website.+Mohon+bantuannya+%F0%9F%99%8F"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm"
                >
                  <IconPhone size={15} />
                  Konsultasi
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/images/hero/web.png"
                alt="Web Design pixelcodedigital.id"
                className="w-full max-w-md object-contain"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }}
              />
            </div>
          </div>
        </section>

        {/* Paket */}
        <section id="paket" className="bg-gradient-to-br from-[#f0faf3] to-[#fff8f0] py-10 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket Website</h2>
            <p className="text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">Konsultasikan dan pilih paket website Anda sekarang juga!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
              {paket.map((p) => {
                const isOpen = openSet.has(p.nama);
                return (
                  <div
                    key={p.nama}
                    className={`relative rounded-2xl bg-white border flex flex-col overflow-hidden ${p.bestSeller ? 'border-[#5D9C76] shadow-xl lg:scale-105' : 'border-gray-200 shadow-sm'}`}
                  >
                    {p.bestSeller && (
                      <div className="bg-[#5D9C76] text-white text-xs font-bold text-center py-1.5 tracking-wide">BEST SELLER !</div>
                    )}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="flex justify-center mb-3">
                        <img src={p.medal} alt={`${p.nama} package`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }} />
                      </div>
                      <p className="text-center font-bold text-gray-700 text-base sm:text-lg mb-3">{p.nama}</p>
                      <p className="text-3xl sm:text-4xl font-bold mb-1 text-[#5D9C76]">{p.harga}</p>
                      <p className="text-xs text-gray-400 mb-4">Perpanjangan {p.perpanjangan}</p>
                      <a
                        href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Website.+Mohon+bantuannya+%F0%9F%99%8F"
                        target="_blank" rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-full border font-semibold text-sm mb-4 flex items-center justify-center gap-2 transition-colors ${p.bestSeller ? 'border-[#5D9C76] text-[#5D9C76] hover:bg-[#5D9C76] hover:text-white' : 'border-[#D17B36] text-[#D17B36] hover:bg-[#D17B36] hover:text-white'}`}
                      >
                        Book Now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
                      </a>
                      <div className="bg-[#5D9C76] text-white text-center text-sm font-semibold py-2 rounded-lg mb-4">Fitur Paket</div>
                      <ul className="space-y-2 mb-4">
                        {p.fitur.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5D9C76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => toggleDetail(p.nama)}
                        className="w-full py-2 text-sm border rounded-full transition-colors flex items-center justify-center gap-2 hover:border-[#5D9C76] hover:text-[#5D9C76] border-gray-200 text-gray-400"
                      >
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                      {isOpen && (
                        <div className="pt-4 border-t border-gray-100 mt-4 pb-2">
                          <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.deskDetail}</p>
                          <ul className="space-y-1.5">
                            {p.fiturDetail.map((f, fi) => (
                              <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#5D9C76]">
                                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fitur Unggulan */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Fitur Unggulan</h2>
          <p className="text-center font-semibold text-gray-700 mb-2 text-sm sm:text-base">Dapatkan Semua Fitur Ini Secara Gratis!</p>
          <p className="text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">Inilah yang Anda dapatkan dari Jasa Pembuatan Website pixelcodedigital.id</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {fiturUnggulan.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#c96a1a' }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}