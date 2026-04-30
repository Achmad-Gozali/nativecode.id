'use client';
import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { TabelPerbandingan } from '@/komponen/hosting/TabelPerbandingan';
import { paketWebHosting, paketHeadersWebHosting, detailFiturWebHosting } from '@/data/web-hosting';

const fiturUnggulan = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="22" width="12" height="10" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="30" y="18" width="12" height="14" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="20" y1="32" x2="20" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="36" y1="32" x2="36" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="14" y1="38" x2="42" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <circle cx="42" cy="16" r="7" fill="#FFF3E0"/>
        <path d="M39 16h6M42 13v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cloud Storage (SSD NVMe)',
    desc: 'Kami merekomendasikan hosting DomaiNesia karena menggunakan teknologi Cloud Storage berbasis SSD NVMe dengan 3X Replikasi Data — 100% data uptime, performa tertinggi, dan proteksi dari korupsi data.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="14" y="18" width="28" height="20" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M20 26l4 4 8-8" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 30h28" stroke="#D17B36" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="42" cy="16" r="7" fill="#EAF4FB"/>
        <path d="M39 16l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Remote Backup Gratis dengan JetBackup',
    desc: 'Salah satu keunggulan partner hosting kami adalah backup otomatis via JetBackup — data tersimpan di Datacenter berbeda untuk mencegah kehilangan data. Tersedia restore point mingguan dan bulanan.',
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
        <circle cx="42" cy="16" r="7" fill="#FFF3E0"/>
        <path d="M39 16h6M42 13v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'cPanel dengan CloudLinux',
    desc: 'DomaiNesia menggunakan cPanel sebagai panel kontrol dengan CloudLinux untuk isolasi sumber daya — server lebih stabil dan aman. Kami rekomendasikan hosting ini untuk kemudahan pengelolaan website Anda.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M18 28 Q28 14 38 28 Q28 42 18 28Z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <circle cx="28" cy="28" r="4" fill="#D17B36"/>
        <path d="M28 18v3M28 35v3M18 28h3M35 28h3" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Accelerator',
    desc: 'Melalui partner kami DomaiNesia, website Anda bisa menikmati berbagai fitur akselerasi: WordPress Accelerator, PageSpeed Plugin, Nginx Cache, GFonts Accelerator, Redis, dan Memcached.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M16 28 Q22 16 28 28 Q34 40 40 28" stroke="#5BAAD0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="16" cy="28" r="2.5" fill="#5BAAD0"/>
        <circle cx="40" cy="28" r="2.5" fill="#5BAAD0"/>
        <circle cx="28" cy="28" r="2.5" fill="#D17B36"/>
        <path d="M22 20 L24 18 L26 20" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M28 18 L30 16 L32 18" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M34 20 L36 18 L38 20" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'HTTP/3 dan Brotli',
    desc: 'Hosting yang kami rekomendasikan sudah mendukung HTTP/3 dengan QUIC dan kompresi Brotli — teknologi terbaru untuk loading website yang jauh lebih cepat dibanding HTTP/2.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <circle cx="28" cy="28" r="12" stroke="#D17B36" strokeWidth="1.5" fill="#FFE0B2"/>
        <path d="M22 28 Q28 20 34 28" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <path d="M22 28 Q28 36 34 28" stroke="#D17B36" strokeWidth="1" fill="none" opacity="0.4"/>
        <path d="M20 22 L18 20 M20 34 L18 36 M36 22 L38 20 M36 34 L38 36" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="3" fill="#D17B36"/>
        <path d="M16 22 Q10 28 16 34" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <path d="M40 22 Q46 28 40 34" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Jaringan 10 Gbps IPv4 & IPv6',
    desc: 'DomaiNesia memiliki koneksi 10 Gbps ke OIXP, JKT-IX, IIX, C2IX, dan Telkom NCIX — jaringan premium yang kami rekomendasikan untuk performa website Indonesia yang optimal.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <circle cx="28" cy="28" r="10" stroke="#5BAAD0" strokeWidth="2" fill="#C9E8F7"/>
        <path d="M24 28l3 3 5-5" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 18 L14 14M38 18 L42 14M28 16 L28 12" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="12" r="3" fill="#D17B36"/>
        <circle cx="42" cy="12" r="3" fill="#D17B36"/>
        <circle cx="28" cy="10" r="3" fill="#D17B36"/>
      </svg>
    ),
    title: 'Bantuan Migrasi Situs',
    desc: 'Pindah hosting ke DomaiNesia lewat rekomendasi pixelcodedigital.id? Tim DomaiNesia siap membantu migrasi seluruh data Anda tanpa biaya tambahan dalam waktu kurang dari 1x24 jam.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M28 16l10 5v9c0 5-4.5 9.5-10 12-5.5-2.5-10-7-10-12v-9l10-5z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M22 28l3 3 7-7" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Anti-malware Imunify360',
    desc: 'Keamanan adalah prioritas DomaiNesia — hosting yang kami rekomendasikan dilengkapi Imunify360 untuk proteksi real-time dari malware, serangan brute force, dan ancaman keamanan lainnya.',
  },
];

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

export default function WebHostingPage() {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'detail'>('ringkasan');

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* ── HERO ── */}
        <section
          className="px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 min-h-screen flex items-center"
          style={{ background: 'linear-gradient(135deg, #1a6eb5 0%, #2a9fd6 50%, #4ec3e0 100%)' }}
        >
          <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-10">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 leading-snug">
                Hosting <span className="text-[#ffd580]">Murah, Cepat</span><br className="hidden sm:block" /> &amp; Terpercaya
              </h1>
              <p className="text-blue-100 font-semibold mb-2 text-xs sm:text-sm">
                Dalam kerjasama dengan DomaiNesia
              </p>
              <p className="text-xs sm:text-base text-blue-100 mb-8">
                LiteSpeed, SSD NVMe, uptime 99.9% — konsultasikan kebutuhan Anda dengan kami sebelum membeli!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <a
                  href="https://my.domainesia.com/ref.php?u=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D17B36] hover:bg-[#b8692d] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg text-sm"
                >
                  Beli Sekarang di DomaiNesia
                </a>
                <Link
                  href="/kontak"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 w-72 sm:w-[420px]">
              <Image
                src="/images/hero/web-hosting.svg"
                alt="Web Hosting Illustration"
                width={420}
                height={420}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Fitur Unggulan */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fitur Hosting Terbaik dari Partner Kami</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Rasakan pengalaman terbaik memiliki website dengan server berbasis Cloud yang andal dan cepat — dikelola oleh DomaiNesia, direkomendasikan oleh pixelcodedigital.id
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

        {/* ── BANNER AFILIASI ── */}
        <section className="py-8 px-4 bg-gray-50 flex justify-center">
          <a
            href="https://my.domainesia.com/ref.php?u=26885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://dnva.me/v9ev4"
              width={728}
              height={90}
              alt="DomaiNesia - Beli Hosting, Gratis Domain & SSL"
              className="rounded-lg shadow-md max-w-full h-auto w-full sm:w-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </a>
        </section>

        {/* Paket */}
        <section className="py-12 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Pilih Paket Hosting</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Semua paket sudah termasuk cPanel, SSL gratis, dan domain gratis</p>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {paketWebHosting.map((p, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl shadow-sm border-2 flex flex-col ${
                    p.badge === 'BEST VALUE' ? 'border-[#5D9C76]'
                    : p.badge === 'BEST PERFORMANCE' ? 'border-[#D17B36]'
                    : 'border-gray-100'
                  } ${p.badge ? 'mt-5' : ''}`}>
                    {p.badge && (
                      <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <span className={`text-xs font-bold px-4 py-1.5 rounded-full shadow-sm ${
                          p.badge === 'BEST VALUE' ? 'bg-[#5D9C76] text-white' : 'bg-[#D17B36] text-white'
                        }`}>
                          {p.badge}
                        </span>
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">{p.nama}</h3>
                      <div className="flex items-center gap-2 mb-1 justify-center">
                        <span className="text-xs line-through text-gray-400">Rp{formatHarga(p.hargaAsli)}</span>
                        <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Diskon {p.diskon}%</span>
                      </div>
                      <div className="mb-1 text-center">
                        <span className="text-3xl font-bold text-gray-900">Rp{formatHarga(p.harga)}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-4 text-center">Per bulan · perpanjangan Rp{formatHarga(p.harga)}/bln</p>
                      <ul className="space-y-2 mb-5 flex-1">
                        {[p.storage, p.website, p.email, p.domain, 'Unlimited Bandwidth', 'Remote Backup', p.performance].map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#5D9C76] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://my.domainesia.com/ref.php?u=26885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors ${
                          p.badge === 'BEST PERFORMANCE' ? 'bg-[#D17B36] hover:bg-[#b8692d] text-white' : 'bg-[#5D9C76] hover:bg-[#4a7d5e] text-white'
                        }`}
                      >
                        Beli Sekarang
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'detail' && (
              <TabelPerbandingan
                paketHeaders={paketHeadersWebHosting}
                detailFitur={detailFiturWebHosting}
                paket={paketWebHosting}
                tombolLabel="Beli"
              />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-[#5D9C76]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bingung Pilih Paket Hosting?</h2>
            <p className="text-white/80 mb-2">Konsultasikan kebutuhan website Anda dengan tim pixelcodedigital.id — gratis!</p>
            <p className="text-white/60 text-sm mb-6">Kami akan bantu rekomendasikan paket yang paling sesuai sebelum Anda beli di DomaiNesia.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://my.domainesia.com/ref.php?u=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D17B36] hover:bg-[#b8692d] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Beli di DomaiNesia
              </a>
              <Link href="/kontak" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}