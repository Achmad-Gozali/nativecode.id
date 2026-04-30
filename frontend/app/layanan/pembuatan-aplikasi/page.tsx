'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const fitur = [
  {
    title: 'Pengembangan Aplikasi Android dan iOS',
    desc: 'Kami menawarkan layanan pengembangan aplikasi mobile untuk platform Android dan iOS, yang dirancang untuk memberikan pengalaman pengguna yang mulus dan intuitif. Tim pengembang kami menguasai teknologi terbaru dan memiliki pengalaman luas dalam menciptakan aplikasi yang menarik dan fungsional.',
    icon: (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  },
  {
    title: 'Publikasi di Play Store dan App Store',
    desc: 'Kami tidak hanya mengembangkan aplikasi Anda, tetapi juga memastikan aplikasi tersebut siap untuk diluncurkan di Play Store dan App Store. Kami menangani seluruh proses pengiriman dan persetujuan, sehingga Anda dapat fokus pada aspek lain dari bisnis Anda.',
    icon: (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  },
  {
    title: 'Desain Antarmuka Pengguna (UI/UX) Kustom',
    desc: 'Setiap aplikasi yang kami buat dirancang dengan mempertimbangkan pengalaman pengguna yang optimal. Kami mengutamakan desain UI/UX yang menarik dan mudah digunakan, memastikan aplikasi Anda tidak hanya terlihat hebat tetapi juga memberikan nilai tambah bagi pengguna.',
    icon: (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  },
  {
    title: 'Integrasi Fitur Khusus',
    desc: 'Apakah bisnis Anda memerlukan integrasi pembayaran, notifikasi push, geolokasi, atau fitur khusus lainnya? Kami dapat menyesuaikan aplikasi Anda dengan fitur yang relevan dan fungsional, membantu Anda memenuhi kebutuhan spesifik pelanggan Anda.',
    icon: (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  },
];

const paket = [
  {
    nama: 'Starter',
    medal: '/images/paket/silver.png',
    harga: '750K',
    satuan: '',
    warna: 'from-gray-50 to-white',
    bestSeller: false,
    deskripsi: 'Cocok untuk UMKM atau individu yang baru ingin memiliki aplikasi mobile sederhana dan fungsional.',
    fitur: [
      '1 Platform (Android atau iOS)',
      'UI/UX Design Standar',
      'Fitur Login & Register',
      'Maksimal 5 Halaman/Screen',
      'Free Revisi 1x',
      'Publikasi ke Play Store / App Store',
    ],
    detail: [
      'Konsultasi kebutuhan aplikasi',
      'Desain UI standar berbasis template',
      'Integrasi database dasar',
      'Testing sebelum publish',
      'Garansi bug fix 1 bulan setelah launch',
      'Source code tidak termasuk',
    ],
  },
  {
    nama: 'Pro',
    medal: '/images/paket/gold.png',
    harga: '2 Jt',
    satuan: '',
    warna: 'from-[#fffbe6] to-white',
    bestSeller: true,
    deskripsi: 'Cocok untuk bisnis yang sudah berjalan dan ingin hadir di dua platform sekaligus dengan tampilan yang lebih profesional.',
    fitur: [
      '2 Platform (Android + iOS)',
      'UI/UX Design Custom',
      'Fitur Login, Register & Profil',
      'Maksimal 10 Halaman/Screen',
      'Push Notification',
      'Free Revisi 2x',
      'Publikasi ke Play Store & App Store',
    ],
    detail: [
      'Konsultasi mendalam kebutuhan bisnis',
      'Desain UI/UX custom sesuai brand',
      'Integrasi API pihak ketiga (max 2)',
      'Integrasi media sosial (login with Google/FB)',
      'Testing menyeluruh sebelum publish',
      'Garansi bug fix 2 bulan setelah launch',
      'Source code tidak termasuk',
    ],
  },
  {
    nama: 'Business',
    medal: '/images/paket/diamond.png',
    harga: '5 Jt',
    satuan: '',
    warna: 'from-[#e8f5e9] to-white',
    bestSeller: false,
    deskripsi: 'Cocok untuk bisnis skala menengah yang butuh fitur lebih kompleks termasuk payment gateway dan dashboard admin.',
    fitur: [
      '2 Platform (Android + iOS)',
      'UI/UX Design Premium',
      'Fitur Lengkap + Payment Gateway',
      'Admin Dashboard Web',
      'Push Notification & Analytics',
      'Maksimal 20 Halaman/Screen',
      'Free Revisi 3x',
      'Publikasi ke Play Store & App Store',
    ],
    detail: [
      'Konsultasi mendalam + wireframe',
      'Desain UI/UX premium custom branding',
      'Integrasi payment gateway (Midtrans/Xendit)',
      'Admin dashboard berbasis web',
      'Integrasi API pihak ketiga (max 5)',
      'Push notification & in-app analytics',
      'Testing QA menyeluruh',
      'Garansi bug fix 3 bulan setelah launch',
      'Source code tidak termasuk',
    ],
  },
  {
    nama: 'Enterprise',
    medal: '/images/paket/platinum.png',
    harga: 'Custom',
    satuan: '',
    warna: 'from-[#fef3e8] to-white',
    bestSeller: false,
    deskripsi: 'Solusi aplikasi skala enterprise dengan fitur kompleks, integrasi sistem penuh, dan maintenance berkelanjutan.',
    fitur: [
      'Multi Platform (Android, iOS, Web)',
      'UI/UX Design Full Custom',
      'Fitur Kompleks & Integrasi Penuh',
      'Admin Dashboard + CMS',
      'API Development Custom',
      'Halaman/Screen Tidak Terbatas',
      'Revisi Tidak Terbatas',
      'Maintenance & Support Ongoing',
    ],
    detail: [
      'Konsultasi mendalam + business analysis',
      'Wireframe & prototype interaktif',
      'Desain UI/UX full custom premium',
      'Pengembangan API backend custom',
      'Integrasi sistem internal perusahaan',
      'Admin dashboard + CMS lengkap',
      'Multi bahasa (opsional)',
      'Security audit & penetration testing',
      'Training penggunaan sistem',
      'Maintenance & support ongoing (kontrak)',
      'Source code included',
    ],
  },
];

export default function PembuatanAplikasi() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const toggleDetail = (nama: string) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(nama) ? next.delete(nama) : next.add(nama);
      return next;
    });
  };

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-36 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Jasa Pembuatan Aplikasi</h1>
          <p className="text-gray-500 mb-3 text-sm">www.pixelcodedigital.id</p>
          <p className="text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a
            href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Aplikasi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base"
          >
            <HeadphonesIcon size={18} />
            Konsultasi
          </a>
        </section>

        {/* ABOUT LAYANAN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                <span className="text-[#D17B36]">pixelcodedigital</span>
                <span className="text-[#5D9C76]">.id</span>
              </h2>
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">
                Custom Aplikasi Mobile, Play Store, Android dan IOS
              </p>
              <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">
                Promo paket jasa pembuatan aplikasi mobile, Play Store, Android, dan IOS untuk semua kebutuhan bisnis Anda.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Jika Anda memiliki preferensi khusus atau ingin menambahkan detail tertentu, silahkan beri tahu kami!
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Aplikasi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base"
                >
                  <HeadphonesIcon size={16} />
                  Konsultasi
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg" style={{ aspectRatio: '1/1' }}>
                <Image src="/images/hero/apk3.png" alt="Pembuatan Aplikasi Illustration" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* APA YANG KAMI TAWARKAN */}
        <section className="py-10 sm:py-20 px-4" style={{ background: 'linear-gradient(to bottom, #e8f5e9, #fffde7, #fff8f0)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Apa yang kami tawarkan?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {fitur.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>
                  <div className="w-12 h-12 rounded-full bg-[#D17B36] flex items-center justify-center">{f.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKET APLIKASI */}
        <section id="paket" className="bg-gradient-to-br from-[#f0faf3] to-[#fff8f0] py-10 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket Pembuatan Aplikasi</h2>
            <p className="text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base px-2">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Mulai dari aplikasi sederhana hingga solusi enterprise lengkap.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
              {paket.map((p) => {
                const isOpen = openSet.has(p.nama);
                return (
                  <div
                    key={p.nama}
                    className={`relative rounded-2xl bg-gradient-to-b ${p.warna} border ${p.bestSeller ? 'border-[#5D9C76] shadow-xl sm:scale-105' : 'border-gray-200 shadow-sm'} overflow-hidden flex flex-col`}
                  >
                    {p.bestSeller && (
                      <div className="bg-[#5D9C76] text-white text-xs font-bold text-center py-1.5 tracking-wide">BEST SELLER !</div>
                    )}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">

                      {/* Medal */}
                      <div className="flex justify-center mb-3">
                        <img
                          src={p.medal}
                          alt={`${p.nama} package`}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                          style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
                        />
                      </div>

                      {/* Nama */}
                      <p className="text-center font-bold text-gray-700 text-base sm:text-lg mb-1">{p.nama}</p>

                      {/* Deskripsi singkat */}
                      <p className="text-center text-xs text-gray-400 mb-3 leading-relaxed">{p.deskripsi}</p>

                      {/* Harga */}
                      <p className="text-xs text-gray-400 text-center">Start From</p>
                      <p className="text-3xl sm:text-4xl font-bold mb-4 text-[#5D9C76] text-center">
                        {p.harga}
                        {p.nama === 'Enterprise' && <span className="text-base font-normal text-gray-500 block mt-1">Hubungi Kami</span>}
                      </p>

                      {/* Book Now */}
                      <a
                        href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Aplikasi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
                        className={`w-full py-2 sm:py-2.5 rounded-full border font-semibold text-sm mb-4 flex items-center justify-center gap-2 transition-colors ${p.bestSeller ? 'border-[#5D9C76] text-[#5D9C76] hover:bg-[#5D9C76] hover:text-white' : 'border-[#D17B36] text-[#D17B36] hover:bg-[#D17B36] hover:text-white'}`}
                      >
                        {p.nama === 'Enterprise' ? 'Konsultasi Gratis' : 'Book Now'}
                        <HeadphonesIcon size={14} />
                      </a>

                      {/* Fitur Paket */}
                      <div className="bg-[#5D9C76] text-white text-center text-sm font-semibold py-2 rounded-lg mb-4">Fitur Paket</div>
                      <ul className="space-y-2 mb-4">
                        {p.fitur.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-0.5 text-[#5D9C76] flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Lihat Detail — multi-open */}
                      <button
                        onClick={() => toggleDetail(p.nama)}
                        className="w-full py-2 text-sm border rounded-full transition-colors flex items-center justify-center gap-2 hover:border-[#5D9C76] hover:text-[#5D9C76] border-gray-200 text-gray-500"
                      >
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>

                      {/* Detail expandable */}
                      {isOpen && (
                        <div className="pt-4 border-t border-gray-100 mt-4 pb-2">
                          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Yang termasuk:</p>
                          <ul className="space-y-1.5">
                            {p.detail.map((d, di) => (
                              <li key={di} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#5D9C76' }}>
                                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"/>
                                  </svg>
                                </span>
                                {d}
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

            {/* CTA bawah paket */}
            <div className="mt-10 sm:mt-14 bg-[#5D9C76] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Tidak yakin paket mana yang cocok?</h3>
                <p className="text-white opacity-90 text-sm sm:text-base leading-relaxed">
                  Konsultasikan kebutuhan aplikasi Anda gratis bersama tim pixelcodedigital.id. Kami akan bantu pilihkan solusi terbaik sesuai budget dan target bisnis Anda.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a
                  href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Pembuatan+Aplikasi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base"
                >
                  <HeadphonesIcon size={18} />
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}