'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Headphones } from 'lucide-react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

const semuaKlien = [
  { nama: 'Kouzina Restaurant', url: 'kouzina.icooking.com.au', link: 'https://kouzina.icooking.com.au/', kategori: 'F&B / Resto', img: '/images/porto/porto-kouzina.png' },
  { nama: 'Inti Berkat Jaya (IBJ)', url: 'intiberkatjaya.com', link: 'https://intiberkatjaya.com/', kategori: 'Distribusi', img: '/images/porto/porto-ibj.png' },
  { nama: 'Arumaya Residences', url: 'arumayaresidence.com', link: 'https://www.arumayaresidence.com/index.html', kategori: 'Properti', img: '/images/porto/porto-arumaya.png' },
  { nama: 'Jababeka Residence', url: 'jababekaresidence.com', link: 'https://jababekaresidence.com/', kategori: 'Properti', img: '/images/porto/porto-jababeka.png' },
  { nama: 'Insperra by PT Saptakarsa', url: 'insperra.com', link: 'https://insperra.com/', kategori: 'Manufaktur & Industri', img: '/images/porto/porto-insperra.png' },
  { nama: 'CaptainFix Bag & Shoes', url: 'captainfix.co.id', link: 'https://captainfix.co.id/', kategori: 'Jasa & Servis', img: '/images/porto/porto-captainfix.png' },
  { nama: 'Pangkal Multikarya', url: 'pangkalmultikarya.com', link: 'https://pangkalmultikarya.com/', kategori: 'Distribusi', img: '/images/porto/porto-pangkal.png' },
];

const kategori = ['Semua', ...Array.from(new Set(semuaKlien.map(k => k.kategori)))];

export default function KlienKami() {
  const [aktif, setAktif] = useState('Semua');
  const [tampil, setTampil] = useState(6);

  const daftarKlien = aktif === 'Semua' ? semuaKlien : semuaKlien.filter(k => k.kategori === aktif);
  const klienTampil = daftarKlien.slice(0, tampil);

  const handleKategori = (kat: string) => { setAktif(kat); setTampil(6); };

  const whatsappLink = `https://wa.me/6282249244647?text=Halo%20nativecode.id%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20profesional%20dan%20SEO%20bergaransi.%20Mohon%20informasi%20lebih%20lanjut.`;

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen pt-14 sm:pt-16">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-36 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Klien Kami</h1>
          <p className="text-gray-500 mb-3 text-sm">www.nativecode.id</p>
          <p className="text-sm sm:text-lg text-gray-600 mb-8">
            Jasa Pembuatan <span className="text-[#D17B36] font-semibold">Website Profesional</span> dan <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base">
            <Headphones size={18} />Konsultasi
          </a>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              <span className="text-[#D17B36]">nativecode</span><span className="text-[#5D9C76]">.id</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              nativecode.id telah membangun lebih dari 300 website untuk berbagai jenis bisnis, dari usaha kecil hingga perusahaan besar. Setiap proyek menjadi bukti komitmen kami terhadap kualitas, inovasi, dan kepuasan pelanggan.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">300+</p>
              <p className="text-gray-500 text-xs sm:text-sm">Website yang telah kami bangun</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-gray-500 text-xs sm:text-sm">Klien menggunakan layanan nativecode.id</p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <p className="font-semibold text-gray-700 mb-4 text-sm sm:text-base">Klik untuk memilih kategori</p>

          {/* Kategori — horizontal scroll di mobile */}
          <div className="w-full mb-6">
            <div className="flex flex-wrap gap-2">
              {kategori.map((kat) => (
                <button
                  key={kat}
                  onClick={() => handleKategori(kat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                    aktif === kat ? 'bg-[#D17B36] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 bg-white border border-gray-100'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid klien */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {klienTampil.map((k, i) => (
              <Link key={i} href={k.link} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 block">
                <div className="relative overflow-hidden bg-gray-100" style={{ height: '190px' }}>
                  <img src={k.img} alt={k.nama} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{k.nama}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">{k.url}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#5D9C76] transition-colors flex-shrink-0 ml-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {tampil < daftarKlien.length && (
            <div className="flex justify-center mt-8 sm:mt-10">
              <button onClick={() => setTampil(prev => prev + 3)}
                className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                More Client
              </button>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}