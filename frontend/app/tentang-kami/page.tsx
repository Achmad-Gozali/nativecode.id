'use client';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import Image from 'next/image';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

export default function TentangKami() {
  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-32 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <p className="text-sm text-gray-500 mb-2">www.nativecode.id</p>
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4">Tentang Kami</h1>
          <p className="text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a
            href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base"
          >
            <HeadphonesIcon size={18} />
            Konsultasi
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">About</h2>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-[#D17B36]">pixelcode</span>
                <span className="text-[#5D9C76]">.id</span>
              </h2>
              <p className="text-gray-500 font-medium mb-6">Experience by the Best</p>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-0.5 bg-[#D17B36] rounded" />
                <div className="w-4 h-0.5 bg-[#5D9C76] rounded" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xs sm:max-w-sm">
                  <Image
                    src="/images/hero/laptop.png"
                    alt="Tim developer nativecode.id"
                    width={480}
                    height={480}
                    className="object-contain drop-shadow-2xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center h-full pt-0 lg:pt-24 space-y-6 text-gray-600 leading-relaxed">
              <p className="text-justify text-sm sm:text-base">
                <strong className="text-gray-900">nativecode.id</strong> adalah <em>Creative Digital Agency</em> yang berfokus membantu bisnis membangun identitas dan pertumbuhan di dunia digital. Kami hadir sebagai mitra strategis bagi perusahaan yang ingin tampil profesional dan menjangkau pasar lebih luas melalui solusi digital yang efektif. Dengan pengalaman dalam pembuatan website, SEO bergaransi, manajemen iklan digital, dan pengembangan aplikasi, kami menghadirkan layanan yang terintegrasi untuk memperkuat kehadiran online setiap klien.
              </p>
              <p className="text-justify text-sm sm:text-base">
                Kami percaya bahwa setiap brand memiliki cerita dan potensi unik yang perlu ditampilkan dengan cara yang menarik dan relevan. Karena itu, setiap proyek di <strong className="text-gray-900">nativecode.id</strong> dikerjakan dengan pendekatan kreatif yang berpadu dengan strategi berbasis data, agar hasilnya tidak hanya terlihat menarik, tetapi juga memberikan dampak nyata terhadap performa bisnis.
              </p>
            </div>

          </div>
        </section>

        {/* KOMITMEN SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-20">
          <div
            className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 items-center"
            style={{ background: 'linear-gradient(135deg, #3d8b5e 0%, #5aad7a 60%, #e8f5e9 100%)' }}
          >
            <div className="flex items-center justify-center p-8 lg:p-12">
              <img
                src="/images/hero/oren.png"
                alt="nativecode.id commitment"
                className="w-full max-w-xs sm:max-w-sm object-contain"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-12 lg:pr-16">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                Dengan tim profesional yang berpengalaman dan responsif, kami berkomitmen memberikan pelayanan terbaik, mulai dari perencanaan, implementasi, hingga evaluasi hasil. nativecode.id bukan sekadar penyedia jasa digital, tetapi mitra yang tumbuh bersama klien menuju kesuksesan jangka panjang di dunia online yang terus berkembang.
              </p>
            </div>
          </div>
        </section>

        {/* MENGAPA MEMILIH KAMI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-24">
          <div className="flex items-center gap-2 mb-4">
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">
            <span className="text-[#D17B36]">nativecode</span>
            <span className="text-[#5D9C76]">.id</span>
          </h2>
          <p className="text-gray-700 font-semibold mb-8 sm:mb-12 text-sm sm:text-base">
            Jasa Pembuatan Website Profesional &amp; SEO Bergaransi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="14" r="7" fill="#D17B36" opacity="0.8"/>
                    <path d="M4 34c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke="#D17B36" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="30" cy="12" r="5" fill="#D17B36" opacity="0.4"/>
                    <path d="M26 30c0-4 2.686-7 6-7" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M20 22l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Pengalaman & Kredibilitas',
                desc: 'Dengan pengalaman bertahun-tahun dan lebih dari 6.000 website yang telah kami bangun, nativecode.id menjadi mitra terpercaya bagi banyak bisnis. Kami selalu fokus memberikan hasil terbaik dan memuaskan.',
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="12" stroke="#D17B36" strokeWidth="2.5" opacity="0.4"/>
                    <path d="M20 8 L20 14 M20 26 L20 32 M8 20 L14 20 M26 20 L32 20" stroke="#D17B36" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                    <circle cx="20" cy="20" r="5" fill="#D17B36" opacity="0.8"/>
                  </svg>
                ),
                title: 'Layanan Terintegrasi',
                desc: 'Kami menyediakan solusi digital lengkap, mulai dari jasa desain website hingga Optimasi SEO. Semua kami tangani secara terintegrasi agar performa online Anda berfungsi secara optimal.',
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4 L24 14 L36 14 L26 21 L30 32 L20 25 L10 32 L14 21 L4 14 L16 14 Z" fill="#D17B36" opacity="0.15" stroke="#D17B36" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M20 10 L22.5 17 L30 17 L24 21.5 L26.5 29 L20 24.5 L13.5 29 L16 21.5 L10 17 L17.5 17 Z" fill="#D17B36" opacity="0.5"/>
                  </svg>
                ),
                title: 'Garansi Kualitas',
                desc: 'Setiap layanan SEO kami dilengkapi garansi hasil. Kepuasan Anda adalah prioritas utama bagi kami — investasi digital Anda aman dan efektif serta memberikan hasil yang nyata.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#fff8f0] to-[#fef3e8] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}