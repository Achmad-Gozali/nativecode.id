'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { paketVPSLite, keunggulanVPSLite, fiturVPSLite, type PaketVPS, type KeunggulanItem } from '@/data/cloud-vps-lite';

const WA_URL = 'https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+Cloud+VPS+Lite.+Mohon+bantuannya+%F0%9F%99%8F';

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

const heroChecklist = [
  'Intel® Xeon® Platinum',
  'SSD NVMe 1GB/s Super Cepat',
  'Jaringan Hingga 1Gbps',
  'Unlimited Bandwidth',
  'Panel Kontrol Simpel',
  'Proteksi RAID10',
];

const keunggulanIcons = [
  <svg key="0" viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#EAF4FB"/>
    <path d="M20 44l16-16" stroke="#5BAAD0" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 20l2 4M38 22l-3 3M42 28l-4 2" stroke="#F0B429" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="22" cy="42" r="3" fill="#5BAAD0" opacity="0.4"/>
    <path d="M18 36l3-3 3 3-3 3z" fill="#5BAAD0" opacity="0.5"/>
  </svg>,
  <svg key="1" viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#EAF4FB"/>
    <path d="M20 36a8 8 0 0 1 0-16 10 10 0 0 1 20 3 6 6 0 0 1-2 12" stroke="#5BAAD0" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M26 40l-4 4M38 40l4 4" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 44h4M38 44h4" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
    <rect x="27" y="34" width="10" height="10" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
  </svg>,
  <svg key="2" viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#FFF3E0"/>
    <path d="M16 28l16-8 16 8-16 8z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <path d="M16 34l16 8 16-8" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M16 40l16 8 16-8" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
  </svg>,
];

const fiturIcons = [
  <svg key="0" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <circle cx="28" cy="28" r="12" stroke="#5BAAD0" strokeWidth="1.5" fill="#C9E8F7"/>
    <path d="M28 22v2M28 32v2M24 26h5a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h5" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="40" cy="16" r="7" fill="#FFF3E0"/>
    <path d="M37 16h6M40 13v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="1" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <circle cx="28" cy="24" r="7" stroke="#5BAAD0" strokeWidth="1.5" fill="#C9E8F7"/>
    <path d="M16 44c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M21 24a7 7 0 0 1 14 0" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
    <rect x="18" y="23" width="4" height="6" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
    <rect x="34" y="23" width="4" height="6" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
  </svg>,
  <svg key="2" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <rect x="16" y="18" width="24" height="8" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <rect x="16" y="30" width="24" height="8" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <circle cx="36" cy="22" r="2" fill="#D17B36"/>
    <circle cx="36" cy="34" r="2" fill="#D17B36"/>
    <path d="M22 22h8M22 34h8" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
    <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="3" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <path d="M14 28 Q20 16 28 28 Q36 40 42 28" stroke="#5BAAD0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="14" cy="28" r="2.5" fill="#5BAAD0"/>
    <circle cx="42" cy="28" r="2.5" fill="#5BAAD0"/>
    <path d="M20 20l2-2M34 20l2 2M20 36l2 2M34 36l2-2" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="4" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#F3F0FF"/>
    <rect x="16" y="18" width="24" height="18" rx="3" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="1.5"/>
    <path d="M22 26l3 3 5-5" stroke="#7C6FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 36v4M22 40h12" stroke="#7C6FCD" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="16" r="6" fill="#FFF3E0"/>
    <path d="M39 16h6M42 13v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="5" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <rect x="14" y="18" width="28" height="6" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <rect x="14" y="28" width="28" height="6" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
    <circle cx="36" cy="21" r="1.5" fill="#D17B36"/>
    <circle cx="36" cy="31" r="1.5" fill="#D17B36"/>
    <path d="M18 21h12M18 31h12" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
    <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="6" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <circle cx="28" cy="28" r="14" stroke="#5BAAD0" strokeWidth="2" fill="none"/>
    <path d="M28 20v8l5 3" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="14" r="7" fill="#FFF3E0"/>
    <path d="M39 14l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="7" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <path d="M22 30l6-8 6 8" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 22v16" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 38h20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
    <path d="M39 14h6M42 11v6" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="8" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
    <rect x="14" y="16" width="28" height="24" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
    <rect x="18" y="20" width="10" height="8" rx="1" fill="#5BAAD0" opacity="0.4"/>
    <rect x="30" y="20" width="8" height="4" rx="1" fill="#5BAAD0" opacity="0.4"/>
    <rect x="30" y="26" width="8" height="2" rx="1" fill="#5BAAD0" opacity="0.3"/>
    <rect x="18" y="30" width="20" height="2" rx="1" fill="#5BAAD0" opacity="0.3"/>
    <path d="M22 40h12" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="9" viewBox="0 0 56 56" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
    <path d="M16 28 Q22 16 28 28 Q34 40 40 28" stroke="#D17B36" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="16" cy="28" r="2.5" fill="#D17B36"/>
    <circle cx="40" cy="28" r="2.5" fill="#D17B36"/>
    <path d="M22 20 L24 18 L26 20M28 18 L30 16 L32 18M34 20 L36 18 L38 20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>,
];

export default function CloudVPSLitePage() {
  const [activeTab, setActiveTab] = useState<'rekomendasi' | 'semua'>('rekomendasi');
  const displayPaket = activeTab === 'rekomendasi'
    ? paketVPSLite.filter((p: PaketVPS) => p.rekomendasi)
    : paketVPSLite;

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a7fc1] via-[#2196d3] to-[#4db8f0] text-white pt-14 pb-0 px-4 min-h-screen flex items-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute border border-white/10 rounded-full"
                style={{ width: `${40 + i * 20}px`, height: `${40 + i * 20}px`, top: `${(i * 37) % 90}%`, left: `${(i * 23) % 85}%`, opacity: 0.3 }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="flex-1 pb-10 lg:pb-16">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 rounded-lg px-3 py-1.5">
                  <span className="text-white font-bold text-sm">Cloud VPS Lite</span>
                </div>
                <span className="text-white/60 text-xs">powered by DomaiNesia × pixelcodedigital.id</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Cloud VPS Murah Rp48.000<br />Didukung Intel Xeon Platinum
              </h1>
              <p className="text-white/80 text-base mb-6">
                Rasakan kecepatan &amp; stabilitas Cloud VPS Lite DomaiNesia dengan harga terjangkau.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {heroChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#5D9C76] flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://my.domainesia.com/ref.php?u=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md text-sm"
              >
                Beli Cloud VPS Lite
              </a>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end items-end self-end">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/hero/illustration.svg"
                  alt="Cloud VPS Lite Illustration"
                  width={600}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Utama */}
        <section className="bg-[#F0F4FA] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                    Keunggulan Utama Cloud VPS Lite
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Pilihan tepat untuk solusi VPS hemat, cepat dan tetap andal dengan dukungan tim DomaiNesia yang selalu siap membantu.
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {keunggulanVPSLite.map((item: KeunggulanItem, i: number) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-gray-100">
                    <div className="w-14 h-14 flex items-center justify-center">
                      {keunggulanIcons[i]}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BANNER AFILIASI ── */}
        <section className="py-6 px-4 bg-white flex justify-center">
          <a
            href="https://my.domainesia.com/ref.php?u=26885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://dnva.me/2o1xf"
              alt="DomaiNesia - NVMe Cloud VPS dengan High Availability"
              className="rounded-lg shadow-sm w-full max-w-[900px]"
            />
          </a>
        </section>

        {/* Paket */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3">Paket Cloud VPS Lite Terjangkau di Indonesia</h2>
            <p className="text-center text-gray-500 text-sm mb-2">Solusi VPS ekonomis dengan performa optimal, pilih sesuai kebutuhan Anda.</p>
            <p className="text-center text-gray-500 text-sm mb-10">Harga hemat, fitur lengkap, dan transparan tanpa biaya tersembunyi.</p>

            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
                <button onClick={() => setActiveTab('rekomendasi')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'rekomendasi' ? 'bg-white text-[#1a7fc1] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Rekomendasi
                </button>
                <button onClick={() => setActiveTab('semua')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'semua' ? 'bg-white text-[#1a7fc1] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Semua
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPaket.map((p: PaketVPS, i: number) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-center mb-5">
                      <span className="inline-block bg-[#FFF3E0] text-[#D17B36] font-bold text-base px-5 py-2 rounded-full">{p.nama}</span>
                    </div>
                    <div className="text-center mb-5">
                      <div className="flex items-start justify-center">
                        <span className="text-sm font-bold text-gray-600 mt-1 mr-0.5">Rp</span>
                        <span className="text-4xl font-bold text-gray-900">{formatHarga(p.harga)}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">Per Bulan</p>
                      <p className="text-xs text-gray-400 mt-1">Harga perpanjangan <span className="font-semibold text-gray-600">Rp{formatHarga(p.harga)}/bulan</span></p>
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors bg-[#5D9C76] hover:bg-[#4a7d5e] text-white mb-5"
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

              {activeTab === 'semua' && (
                <div className="bg-[#EAF4FB] rounded-2xl border border-[#5BAAD0]/30 shadow-sm flex flex-col">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-center mb-5">
                      <span className="inline-block bg-[#5BAAD0] text-white font-bold text-base px-5 py-2 rounded-full">Cloud VPS Turbo</span>
                    </div>
                    <p className="text-center text-[#1a7fc1] text-sm font-medium mb-6 leading-relaxed">
                      Cloud Server Berteknologi Modern dengan AMD EPYC Genoa dan 3x Replikasi Data
                    </p>
                    <hr className="border-[#5BAAD0]/20 mb-6" />
                    <ul className="space-y-2.5 flex-1 mb-6">
                      {['Hingga 16 Core CPU', 'Hingga 64 GB RAM', 'Hingga 960 SSD NVMe', 'Unlimited Bandwidth', 'Dedicated IP'].map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-[#1a7fc1]">
                          <Check className="h-4 w-4 text-[#5BAAD0] flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/server/cloud-vps"
                      className="w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors bg-[#5D9C76] hover:bg-[#4a7d5e] text-white"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Mengapa VPS Lite */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Mengapa Cloud VPS Lite Menjadi Solusi VPS Terjangkau &amp; Andal?</h2>
              <p className="text-gray-500 text-sm">Tidak hanya murah, Cloud VPS DomaiNesia juga cepat, aman, dan transparan tanpa biaya tersembunyi.</p>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              {[0, 2, 4, 6, 8].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturVPSLite.slice(rowStart, rowStart + 2).map((f: KeunggulanItem, i: number) => (
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
        <section className="py-12 px-4 bg-gradient-to-r from-[#1a7fc1] to-[#2196d3]">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Butuh Cloud VPS Kustom yang Handal untuk perusahaan Anda?</h2>
              <p className="text-white/75 text-sm">Jangan ragu untuk menghubungi tim pixelcodedigital.id untuk mendapatkan solusi yang tepat sesuai dengan kebutuhan anda.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://my.domainesia.com/ref.php?u=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Beli Cloud VPS Lite
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
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