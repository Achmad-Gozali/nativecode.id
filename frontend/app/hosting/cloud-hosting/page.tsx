'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { TabelPerbandingan } from '@/komponen/hosting/TabelPerbandingan';
import { paketCloudHosting, paketHeadersCloudHosting, detailFiturCloudHosting } from '@/data/cloud-hosting';

const fiturUnggulan = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="20" width="10" height="16" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="28" y="16" width="10" height="20" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="14" y="38" width="28" height="2" rx="1" fill="#5BAAD0"/>
        <circle cx="42" cy="14" r="7" fill="#FFF3E0"/>
        <path d="M39 14h6M42 11v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Semi Dedicated',
    desc: 'Kami merekomendasikan Cloud Hosting DomaiNesia karena berbeda dengan hosting biasa — performa lebih handal dengan Turbo Performance 3x lebih cepat. Resource tidak dibagi dengan pengguna lain.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <circle cx="28" cy="24" r="8" stroke="#D17B36" strokeWidth="1.5" fill="#FFE0B2"/>
        <path d="M20 24 Q28 16 36 24" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <path d="M22 36 Q28 42 34 36" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <path d="M28 32v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
        <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Managed',
    desc: 'Tim profesional DomaiNesia siap membantu mengelola server Anda — tidak perlu khawatir soal pemeliharaan teknis. Kami di nativecode.id siap membantu konsultasi sebelum Anda memulai.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M18 28 L24 22 L28 26 L34 20 L38 24" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M14 36 L42 36" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 20 L38 24 L42 22" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Fleksibel',
    desc: 'Paket Cloud Hosting DomaiNesia tersedia dari Cirrus 2GB hingga Cirrus 24GB — bisa disesuaikan dengan pertumbuhan bisnis Anda. Kami bantu rekomendasikan paket yang paling efisien.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="16" y="18" width="24" height="20" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M22 26l3 3 7-7" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 30 Q10 36 16 38 L40 38 Q46 36 40 30" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Auto Backup',
    desc: 'Salah satu alasan kami merekomendasikan DomaiNesia adalah fitur auto backup otomatis yang menyimpan salinan data secara teratur — mencegah kehilangan data akibat insiden tak terduga.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="16" y="22" width="24" height="16" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M22 28h12M22 32h8" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 22v-4a4 4 0 0 1 8 0v4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="16" y="22" width="24" height="4" rx="0" fill="#5BAAD0" opacity="0.15"/>
        <path d="M24 26 L32 26" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Developer Friendly',
    desc: 'Cloud Hosting yang kami rekomendasikan mendukung PHP, Python, Ruby, Golang, Rust, Node.js, Nuxt.js, React, Headless CMS, dan berbagai framework modern lainnya.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M28 16 L28 24 M28 32 L28 40" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 20 L28 24 L36 20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 36 L28 32 L36 36" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="28" r="4" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Web Accelerator',
    desc: 'Melalui partner kami DomaiNesia, website Anda bisa menikmati akselerasi penuh: WordPress Accelerator, PageSpeed Plugin, Nginx Cache, GFonts Accelerator, Redis, dan Memcached.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <circle cx="28" cy="28" r="12" stroke="#5BAAD0" strokeWidth="2" fill="#C9E8F7"/>
        <path d="M23 25 Q22 28 23 31" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M25 24 L25 32" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 24 L28 28 L31 24 L31 32" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20 Q14 28 20 36" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
        <path d="M36 20 Q42 28 36 36" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Kontrol Panel cPanel',
    desc: 'DomaiNesia menggunakan cPanel sebagai panel kontrol dengan fitur lengkap dan kemudahan pengoperasian. Banyak panduan tersedia sehingga hemat waktu bahkan untuk pemula sekalipun.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="16" y="20" width="24" height="16" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M22 28 L26 24 L30 28 L34 24" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M16 32 L40 32" stroke="#D17B36" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="42" cy="14" r="7" fill="#EAF4FB"/>
        <path d="M39 14l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SSD NVMe',
    desc: 'Hosting yang kami rekomendasikan menggunakan SSD NVMe — latensi lebih rendah dan throughput lebih tinggi dibanding SSD SATA biasa. Website Anda loading lebih cepat secara signifikan.',
  },
];

const WA_URL = 'https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+hosting.+Mohon+bantuannya+%F0%9F%99%8F';

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

function AffiliateBanner() {
  return (
    <section className="px-4 py-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px flex-1 bg-gray-100" />
          <span className="text-[10px] font-semibold tracking-widest text-gray-300 uppercase">Partner Resmi</span>
          <span className="h-px flex-1 bg-gray-100" />
        </div>
        
        <a
          href="https://www.domainesia.com/cloud-hosting/?aff=26885"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden hover:opacity-95 transition-opacity shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://dnva.me/y81mu"
            alt="DomaiNesia - Deploy Cloud VPS Cukup 40 Detik"
            width={728}
            height={90}
            className="w-full h-auto"
          />
        </a>
        <p className="text-center text-[10px] text-gray-300 mt-3">
          nativecode.id adalah mitra afiliasi resmi DomaiNesia
        </p>
      </div>
    </section>
  );
}

export default function CloudHostingPage() {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'detail'>('ringkasan');

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a6fc4] to-[#0d4fa0] text-white pt-16 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            
            {/* Kiri: Teks */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Cloud Hosting<br />Performa Tinggi
              </h1>
              <p className="text-white/80 text-base sm:text-lg mb-2">
                nativecode.id bekerja sama dengan DomaiNesia untuk menghadirkan Cloud Hosting dengan dedicated resource terbaik.
              </p>
              <p className="text-white/60 text-sm mb-8">
                Cocok untuk E-Learning, CRM, ERP, SMM Panel, dan aplikasi skala enterprise — konsultasikan kebutuhan Anda dengan kami dulu!
              </p>

              {/* Checklist fitur singkat */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 text-sm text-white/80 max-w-sm mx-auto md:mx-0">
                {['Semi-dedicated Resource', 'Kontrol Panel cPanel', 'Managed Server', 'Web Accelerator', 'Auto Backup', 'Support 24/7'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-300 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                
                <a
                  href="https://www.domainesia.com/cloud-hosting/?aff=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1a73c5] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Beli Cloud Hosting
                </a>
                
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="flex-1 flex justify-center md:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/cloud.svg"
                alt="Cloud Hosting Illustration"
                className="w-full max-w-sm md:max-w-md drop-shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* ✦ AFFILIATE BANNER ✦ */}
        <AffiliateBanner />

        {/* Fitur Unggulan */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Kelebihan Cloud Hosting Partner Kami</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Layanan cloud hosting murah dengan performa dan keamanan terbaik — dikelola DomaiNesia, direkomendasikan nativecode.id
              </p>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {[0, 2, 4, 6].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturUnggulan.slice(rowStart, rowStart + 2).map((f, i) => (
                    <div key={i} className="flex items-start gap-5 p-6 hover:bg-gray-50/50 transition-colors">
                      <div className="flex-shrink-0">{f.icon}</div>
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

        {/* Paket */}
        <section className="py-12 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Pilih Paket Cloud Hosting</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Semua paket dedicated resource — tidak berbagi dengan pengguna lain</p>

            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-1">
                <button 
                  onClick={() => setActiveTab('ringkasan')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'ringkasan' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Paket
                </button>
                <button 
                  onClick={() => setActiveTab('detail')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'detail' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Detail
                </button>
              </div>
            </div>

            {activeTab === 'ringkasan' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paketCloudHosting.map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-center mb-4">
                        <span className="inline-block bg-blue-50 text-blue-500 font-bold text-base px-5 py-1.5 rounded-full">{p.nama}</span>
                      </div>
                      <div className="text-center mb-1">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-xs line-through text-gray-400">Rp{formatHarga(p.hargaAsli)}</span>
                          <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Diskon {p.diskon}%</span>
                        </div>
                        <div className="flex items-start justify-center">
                          <span className="text-sm font-bold text-gray-800 mt-1 mr-0.5">Rp</span>
                          <span className="text-4xl font-bold text-gray-900">{formatHarga(p.harga)}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">PER BULAN</p>
                        <p className="text-xs text-blue-500 mt-0.5">Harga perpanjangan <span className="font-semibold">Rp{formatHarga(p.harga)}/bulan</span></p>
                      </div>
                      
                      <a
                        href="https://www.domainesia.com/cloud-hosting/?aff=26885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors bg-[#1a73c5] hover:bg-[#1557a0] text-white mt-4 mb-5"
                      >
                        Beli
                      </a>
                      
                      <ul className="space-y-2 flex-1">
                        {[p.cpu, p.ram, p.storage, 'Unlimited Website', 'Unlimited Email', 'Unlimited Database', 'Unlimited Bandwidth', 'Gratis Domain', 'Remote Backup', 'Akses SSH'].map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#1a73c5] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'detail' && (
              <TabelPerbandingan
                paketHeaders={paketHeadersCloudHosting}
                detailFitur={detailFiturCloudHosting}
                paket={paketCloudHosting.slice(0, 4)}
                tombolLabel="Beli"
              />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-[#1a73c5]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bingung Pilih Paket Cloud Hosting?</h2>
            <p className="text-white/80 mb-2">Konsultasikan kebutuhan website Anda dengan tim nativecode.id — gratis!</p>
            <p className="text-white/60 text-sm mb-6">Kami bantu rekomendasikan paket yang paling tepat sebelum Anda beli di DomaiNesia.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              
              <a
                href="https://www.domainesia.com/cloud-hosting/?aff=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1a73c5] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Beli di DomaiNesia
              </a>
              
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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