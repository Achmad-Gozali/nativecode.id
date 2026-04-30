'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { paketVPSTurbo, fiturTabVPSTurbo, fiturVPSTurbo, type PaketVPSTurbo, type FiturItem } from '@/data/cloud-vps';

const WA_URL = 'https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+Cloud+VPS+Turbo.+Mohon+bantuannya+%F0%9F%99%8F';

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

const fiturIcons = [
  <svg key="0" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <path d="M28 38V28" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 34 Q16 28 20 22" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M36 34 Q40 28 36 22" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M24 32 Q22 28 24 24" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M32 32 Q34 28 32 24" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="28" cy="28" r="2.5" fill="#5BAAD0"/>
    <path d="M24 38h8" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#FFF3E0"/>
    <path d="M39 14l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="1" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <ellipse cx="28" cy="26" rx="8" ry="10" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
    <ellipse cx="28" cy="30" rx="5" ry="6" fill="white" stroke="#5BAAD0" strokeWidth="1"/>
    <circle cx="25" cy="24" r="1.5" fill="#5BAAD0"/>
    <circle cx="31" cy="24" r="1.5" fill="#5BAAD0"/>
    <path d="M24 38l-3 4M32 38l3 4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 24 Q18 20 22 18" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M36 24 Q38 20 34 18" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>,
  <svg key="2" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <rect x="14" y="22" width="28" height="12" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <circle cx="36" cy="28" r="3" fill="#D17B36"/>
    <path d="M18 28h10" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 18l6 4M42 18l-6 4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
    <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="3" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <circle cx="28" cy="28" r="12" stroke="#5BAAD0" strokeWidth="2" fill="none"/>
    <path d="M28 20v8l5 3" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="14" r="7" fill="#FFF3E0"/>
    <path d="M39 14l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="4" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#F3F0FF"/>
    <rect x="14" y="16" width="28" height="7" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="1.5"/>
    <rect x="14" y="26" width="28" height="7" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="1.5"/>
    <rect x="14" y="36" width="28" height="7" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="1.5"/>
    <circle cx="36" cy="19.5" r="1.5" fill="#7C6FCD"/>
    <circle cx="36" cy="29.5" r="1.5" fill="#7C6FCD"/>
    <circle cx="36" cy="39.5" r="1.5" fill="#7C6FCD"/>
    <path d="M18 19.5h12M18 29.5h12M18 39.5h12" stroke="#7C6FCD" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="5" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <rect x="16" y="14" width="24" height="28" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <circle cx="28" cy="26" r="5" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
    <path d="M28 23v2M28 29v2M25 26h3.5a1.5 1.5 0 0 1 0 3H25" stroke="#D17B36" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 35h16M20 38h10" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
    <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function CloudVPSTurboPage() {
  const [activeTab, setActiveTab] = useState<'rekomendasi' | 'semua'>('rekomendasi');
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const displayPaket = activeTab === 'rekomendasi'
    ? paketVPSTurbo.filter((p: PaketVPSTurbo) => p.rekomendasi)
    : paketVPSTurbo;

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a7fc1] via-[#2196d3] to-[#4db8f0] text-white pt-14 pb-0 px-4 min-h-screen flex items-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="100%" x2="40%" y2="0" stroke="white" strokeWidth="1"/>
              <line x1="20%" y1="100%" x2="60%" y2="0" stroke="white" strokeWidth="1"/>
              <line x1="60%" y1="100%" x2="100%" y2="20%" stroke="white" strokeWidth="1"/>
              <line x1="80%" y1="100%" x2="120%" y2="30%" stroke="white" strokeWidth="1"/>
            </svg>
            <div className="absolute top-12 left-16 w-8 h-8 border border-white/20 rotate-45"/>
            <div className="absolute top-32 right-1/4 w-4 h-4 bg-white/10 rounded-sm rotate-12"/>
            <div className="absolute bottom-20 left-1/3 w-6 h-6 border border-white/15"/>
          </div>

          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="flex-1 pb-10 lg:pb-20">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/20 rounded-lg px-3 py-1.5">
                  <span className="text-white font-bold text-sm">Cloud VPS Turbo</span>
                </div>
                <span className="text-white/60 text-xs">powered by DomaiNesia × pixelcodedigital.id</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Cloud VPS Handal<br />Berbasis AMD EPYC Genoa
              </h1>
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
                Deploy High Availability NVMe Cloud VPS kurang dari 40 detik dengan fitur dan teknologi terbaik untuk segala kebutuhan aplikasi web.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://my.domainesia.com/ref.php?u=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md text-sm"
                >
                  Beli Cloud VPS
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end items-end self-end">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/hero/domion.svg"
                  alt="Cloud VPS Turbo"
                  width={600}
                  height={480}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan 3 card */}
        <div className="relative z-20 px-4 -mt-10 mb-0">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Pengelolaan Mudah', desc: 'Deploy Cloud VPS dengan mudah. Saatnya kelola Cloud VPS lebih sederhana.' },
              { title: 'Deploy dan Scale Fleksibel', desc: 'Sesuaikan Cloud VPS dengan pilihan paket yang tersedia. Anda bisa resize kapan saja.' },
              { title: 'High Availability', desc: 'High-availability cluster didukung distributed storage dan SSD NVMe 3X replikasi data.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-2 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Afiliasi DomaiNesia */}
        <div className="w-full bg-white pt-10 pb-2 px-4">
          <div className="max-w-6xl mx-auto flex justify-center">
            <a
              href="https://my.domainesia.com/ref.php?u=26885"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-4xl"
            >
              {/* Desktop */}
              <img
                src="https://dnva.me/bne38"
                width={1000}
                height={125}
                alt="DomaiNesia - Saatnya Beralih ke Cloud VPS Berperforma Tinggi"
                className="hidden sm:block w-full h-auto rounded-xl shadow-sm"
              />
              {/* Mobile */}
              <img
                src="https://dnva.me/bne38"
                width={480}
                height={120}
                alt="DomaiNesia - Saatnya Beralih ke Cloud VPS Berperforma Tinggi"
                className="block sm:hidden w-full h-auto rounded-xl shadow-sm"
              />
            </a>
          </div>
        </div>

        {/* Paket */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Paket Cloud VPS Terbaik &amp; Handal dengan Teknologi Modern</h2>
            <p className="text-center text-gray-500 text-sm mb-10">Pilih paket Cloud VPS sesuai dengan kebutuhan aplikasi web Anda</p>

            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
                <button onClick={() => setActiveTab('rekomendasi')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'rekomendasi' ? 'bg-white text-[#2563eb] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Rekomendasi
                </button>
                <button onClick={() => setActiveTab('semua')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'semua' ? 'bg-white text-[#2563eb] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Semua
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPaket.map((p: PaketVPSTurbo, i: number) => (
                <div key={i} className={`relative bg-white rounded-2xl border-2 flex flex-col shadow-sm ${
                  p.badge === 'BEST VALUE' ? 'border-[#5D9C76]' :
                  p.badge === 'BEST PERFORMANCE' ? 'border-[#D17B36]' :
                  'border-gray-100'
                } ${p.badge ? 'mt-6' : ''}`}>
                  {p.badge && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className={`text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1 ${
                        p.badge === 'BEST VALUE' ? 'bg-[#5D9C76] text-white' : 'bg-[#D17B36] text-white'
                      }`}>
                        {p.badge === 'BEST VALUE' && <Check className="h-3 w-3" />} {p.badge}
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-center mb-5">
                      <span className="inline-block bg-[#EAF4FB] text-[#2563eb] font-bold text-base px-5 py-2 rounded-full">{p.nama}</span>
                    </div>
                    <div className="text-center mb-5">
                      <div className="flex items-start justify-center">
                        <span className="text-sm font-bold text-gray-600 mt-1 mr-0.5">Rp</span>
                        <span className="text-4xl font-bold text-gray-900">{formatHarga(p.harga)}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Per Bulan</p>
                      <p className="text-xs text-[#2563eb] mt-1">Harga perpanjangan <span className="font-semibold">Rp{formatHarga(p.harga)}/bulan</span></p>
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors bg-[#5D9C76] hover:bg-[#4a7d5e] text-white mb-5 block"
                    >
                      Beli
                    </a>
                    <ul className="space-y-2.5 flex-1">
                      {[p.cpu, p.ram, p.storage, p.bandwidth, p.ip].map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#5D9C76] flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fitur Tab Section */}
        <section className="py-14 px-4 bg-gradient-to-br from-[#1a56c4] to-[#2563eb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Fitur Cloud Server Terbaik dengan Teknologi Modern</h2>
            <p className="text-white/70 text-sm mb-8">Cloud VPS Indonesia terbaik dengan infrastruktur modern, dashboard intuitif, dan mudah digunakan, akses yang cepat, dan dukungan support dari DomaiNesia selalu siap membantu Anda.</p>

            <div className="flex flex-wrap gap-2 mb-10 border-b border-white/20 pb-0">
              {fiturTabVPSTurbo.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeatureTab(i)}
                  className={`px-4 py-2.5 text-sm font-semibold transition-all border-b-2 -mb-px ${
                    activeFeatureTab === i
                      ? 'text-white border-[#5D9C76]'
                      : 'text-white/60 border-transparent hover:text-white/80'
                  }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{fiturTabVPSTurbo[activeFeatureTab].title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">{fiturTabVPSTurbo[activeFeatureTab].desc}</p>
                <a
                  href="https://my.domainesia.com/ref.php?u=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Beli Cloud VPS Terbaik
                </a>
              </div>
              <div className="flex-shrink-0 w-48 h-48 flex items-center justify-center">
                <svg viewBox="0 0 160 160" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {activeFeatureTab === 0 && <>
                    <path d="M40 80 Q80 20 120 80 Q80 140 40 80Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                    <path d="M55 80 Q80 40 105 80 Q80 120 55 80Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                    <circle cx="80" cy="80" r="12" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="2"/>
                    <circle cx="80" cy="80" r="4" fill="white"/>
                  </>}
                  {activeFeatureTab === 1 && <>
                    <rect x="30" y="50" width="100" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                    <rect x="30" y="78" width="100" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                    <circle cx="118" cy="60" r="5" fill="rgba(255,255,255,0.8)"/>
                    <circle cx="118" cy="88" r="5" fill="rgba(255,255,255,0.8)"/>
                    <path d="M38 60h60M38 88h60" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
                  </>}
                  {activeFeatureTab === 2 && <>
                    <path d="M80 40 Q120 60 120 80 Q120 110 80 130 Q40 110 40 80 Q40 60 80 40Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                    <path d="M60 80 Q80 60 100 80 Q80 100 60 80Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5"/>
                    <circle cx="80" cy="80" r="6" fill="white"/>
                  </>}
                  {activeFeatureTab === 3 && <>
                    <path d="M50 80 Q50 50 80 42 Q110 50 110 80 Q110 105 80 118 Q50 105 50 80Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                    <path d="M60 80 Q60 58 80 52 Q100 58 100 80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
                    <path d="M65 90l10 10 20-20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </>}
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Mengapa VPS Turbo */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Mengapa Cloud VPS Kami Jadi Pilihan Terbaik untuk Kinerja Maksimal?</h2>
              <p className="text-gray-500 text-sm">Performa situs lebih optimal dengan Cloud VPS Indonesia Murah dari DomaiNesia</p>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              {[0, 2, 4].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturVPSTurbo.slice(rowStart, rowStart + 2).map((f: FiturItem, i: number) => (
                    <div key={i} className="flex items-start gap-4 p-6 hover:bg-gray-50/50 transition-colors">
                      <div className="flex-shrink-0">{fiturIcons[rowStart + i]}</div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1.5">{f.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-[#1a56c4] to-[#2563eb]">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Butuh Cloud VPS Kustom yang Handal untuk Perusahaan Anda?</h2>
              <p className="text-white/75 text-sm">Jangan ragu untuk menghubungi tim pixelcodedigital.id untuk mendapatkan solusi yang tepat sesuai dengan kebutuhan anda.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://my.domainesia.com/ref.php?u=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap inline-block text-center"
              >
                Beli Cloud VPS
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap inline-block text-center"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}