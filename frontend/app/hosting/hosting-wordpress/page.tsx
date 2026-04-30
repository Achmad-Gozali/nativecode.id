'use client';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { TabelPerbandingan } from '@/komponen/hosting/TabelPerbandingan';
import { paketWordPress, paketHeadersWordPress, detailFiturWordPress } from '@/data/hosting-wordpress';

const solusiItems = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="16" y="18" width="16" height="12" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <rect x="22" y="30" width="16" height="10" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M24 22l3 3 5-5" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dioptimalkan untuk WordPress',
    desc: 'Lebih efisien dengan mengaktifkan Auto Update Plugin & Tema. Hosting WordPress DomaiNesia juga dilengkapi dengan LiteSpeed Cache dan Redis untuk mempercepat loading website.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="18" width="16" height="20" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="26" y="22" width="16" height="16" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M18 26h8M18 30h6" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 28h8M30 32h5" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Staging dengan Satu Kali Klik',
    desc: 'Staging mempermudah Anda dalam memeriksa ketidaksesuaian pada website sebelum menerbitkannya, sehingga mengurangi kesalahan yang bisa merusak website.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="16" y="18" width="24" height="20" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M22 26l3 3 7-7" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 30 Q10 36 16 38 L40 38 Q46 36 40 30" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Mendukung Clone, Backup & Restore',
    desc: 'Hosting WordPress DomaiNesia sudah mendukung Cloning dan Backup untuk mencegah Anda kehilangan website, serta Restore untuk memudahkan Anda mengembalikan website.',
  },
];

const fiturTerbaik = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M28 16 L28 32" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 26 L28 32 L34 26" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 36 L38 36" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Instant Deploy',
    desc: 'Setelah hosting WordPress aktif melalui rekomendasi nativecode.id, website Anda langsung aktif tanpa repot melakukan instalasi — langsung bisa digunakan setelah melunasi tagihan.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M18 28 Q22 16 28 28 Q34 40 40 28" stroke="#5BAAD0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="18" cy="28" r="2.5" fill="#5BAAD0"/>
        <circle cx="40" cy="28" r="2.5" fill="#5BAAD0"/>
        <path d="M24 20 L28 16 L32 20" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'LiteSpeed Web Server',
    desc: 'Salah satu alasan kami merekomendasikan DomaiNesia adalah LiteSpeed Web Server — web server dengan kecepatan proses optimal yang meningkatkan kinerja website WordPress secara signifikan.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M16 28 Q22 16 28 28 Q34 40 40 28" stroke="#D17B36" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="16" cy="28" r="2.5" fill="#D17B36"/>
        <circle cx="40" cy="28" r="2.5" fill="#D17B36"/>
        <path d="M22 20 L24 18 L26 20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M28 18 L30 16 L32 18" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M34 20 L36 18 L38 20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Support HTTP/3 (QUIC)',
    desc: 'Melalui partner kami DomaiNesia, hosting WordPress Anda mendukung HTTP/3 (QUIC) — transfer file lebih lancar, keamanan lebih baik dibanding HTTP/2, dan website lebih cepat & aman.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="16" y="16" width="24" height="24" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M22 24h12M22 28h8M22 32h10" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="42" cy="14" r="7" fill="#FFF3E0"/>
        <path d="M39 14l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'LiteSpeed Cache',
    desc: 'Teknologi caching milik LiteSpeed Technologies berfungsi mempercepat loading website WordPress, menghasilkan skor PageSpeed tinggi dan memberi pengalaman pengguna yang lebih baik.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <path d="M20 20 Q14 28 20 36 Q28 42 36 36 Q42 28 36 20 Q28 14 20 20Z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M24 28 Q28 22 32 28 Q28 34 24 28Z" fill="#D17B36"/>
      </svg>
    ),
    title: 'Teknologi Brotli',
    desc: 'Hosting yang kami rekomendasikan menggunakan algoritma kompresi Brotli — 20% lebih padat dan hemat bandwidth dibanding gzip. Website WordPress Anda semakin kencang dan efisien.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="20" width="28" height="16" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="18" y="24" width="6" height="4" rx="1" fill="#5BAAD0"/>
        <rect x="26" y="24" width="12" height="2" rx="1" fill="#5BAAD0" opacity="0.5"/>
        <rect x="26" y="28" width="8" height="2" rx="1" fill="#5BAAD0" opacity="0.5"/>
        <path d="M20 38 L28 42 L36 38" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Redis',
    desc: 'Redis yang tersedia di hosting DomaiNesia akan mengesampingkan kebutuhan mengakses disk dan menghindari penundaan waktu pencarian — pengunjung website bisa mengakses lebih cepat.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <circle cx="28" cy="28" r="12" stroke="#D17B36" strokeWidth="2" fill="#FFE0B2"/>
        <path d="M23 25 Q22 28 23 31" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M25 24 L25 32" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 24 L28 28 L31 24 L31 32" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20 Q14 28 20 36" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <path d="M36 20 Q42 28 36 36" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Panel Kontrol cPanel',
    desc: 'cPanel menjadi panel kontrol hosting WordPress yang kami rekomendasikan — fitur lengkap, kemudahan pengoperasian seperti akses file manager, dan banyak panduan tersedia sehingga hemat waktu.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <circle cx="28" cy="28" r="10" stroke="#5BAAD0" strokeWidth="2" fill="#C9E8F7"/>
        <path d="M22 28 Q28 20 34 28" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
        <path d="M22 28 Q28 36 34 28" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
        <path d="M28 18 L28 38" stroke="#5BAAD0" strokeWidth="1" opacity="0.5"/>
        <path d="M18 28 L38 28" stroke="#5BAAD0" strokeWidth="1" opacity="0.5"/>
        <path d="M16 22 Q10 28 16 34" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
        <path d="M40 22 Q46 28 40 34" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Support IPv4 & IPv6',
    desc: 'Hosting WordPress DomaiNesia dilengkapi IPv4 & IPv6 — website WordPress dengan IPv6 memiliki keamanan sangat baik, lebih efisien, dan mendukung mobilitas pengguna modern.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="16" y="16" width="12" height="14" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <rect x="28" y="20" width="12" height="10" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M20 38 Q20 34 24 34 Q28 34 28 38" stroke="#D17B36" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="44" cy="14" r="7" fill="#EAF4FB"/>
        <path d="M41 14h6M44 11v6" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Gratis Domain, Gratis SSL',
    desc: 'Setiap pembelian hosting WordPress melalui rekomendasi nativecode.id di DomaiNesia, Anda berhak mendapat domain gratis dan SSL gratis — tidak perlu mengeluarkan biaya lebih.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="16" y="18" width="24" height="20" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M22 26l3 3 7-7" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 30 Q10 36 16 38 L40 38 Q46 36 40 30" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Backup Gratis Menggunakan JetBackup',
    desc: 'Fitur backup mingguan dan bulanan di hosting DomaiNesia mencegah risiko kehilangan atau kerusakan data website WordPress Anda — bisa restore data dengan mudah kapan saja.',
  },
];

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
          href="https://my.domainesia.com/ref.php?u=26885"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden hover:opacity-95 transition-opacity shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://dnva.me/4gnsc"
            alt="DomaiNesia - Buat Web Dengan Sekali Klik"
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

export default function HostingWordPressPage() {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'detail'>('ringkasan');

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1a6fc4] to-[#0d4fa0] text-white pt-16 pb-20 px-4 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">

            {/* Teks kiri */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-white/60 text-sm mb-3 font-medium">Bekerja sama dengan DomaiNesia</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
                Hosting Terbaik untuk<br />
                <span className="text-[#7dd3fc]">WordPress</span> di Indonesia
              </h1>
              <p className="text-white/70 text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                LiteSpeed, SSL gratis, domain gratis, WordPress Manager — aktif instan setelah pembayaran.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="https://my.domainesia.com/ref.php?u=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D17B36] hover:bg-[#b8692d] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Beli Sekarang di DomaiNesia
                </a>
                <Link href="/kontak" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
                  Konsultasi Gratis
                </Link>
              </div>
            </div>

            {/* Gambar kanan — lebih gede */}
            <div className="flex-shrink-0 flex items-center justify-center w-72 h-72 lg:w-[420px] lg:h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/wordpress.svg"
                alt="WordPress"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* ✦ AFFILIATE BANNER ✦ */}
        <AffiliateBanner />

        {/* Solusi sticky */}
        <section className="bg-[#F0F4FA] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Solusi Hosting untuk WordPress Terbaik
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mencari hosting yang dioptimasi khusus untuk WordPress? Kami merekomendasikan hosting WordPress DomaiNesia sebagai pilihan tepat untuk Anda.
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {solusiItems.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Paket */}
        <section className="py-12 px-4 pb-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Paket Hosting untuk WordPress Indonesia</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Semua paket sudah termasuk SSL gratis, domain gratis, dan WordPress Manager</p>

            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-1">
                <button onClick={() => setActiveTab('ringkasan')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'ringkasan' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Paket
                </button>
                <button onClick={() => setActiveTab('detail')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'detail' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Detail
                </button>
              </div>
            </div>

            {activeTab === 'ringkasan' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {paketWordPress.map((p, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl shadow-sm border-2 flex flex-col ${
                    p.badge === 'RECOMMENDED' ? 'border-[#D17B36]' : 'border-gray-100'
                  } ${p.badge ? 'mt-5' : ''}`}>
                    {p.badge && (
                      <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#D17B36] text-white shadow-sm flex items-center gap-1">
                          ★ {p.badge}
                        </span>
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-center mb-3">
                        <span className={`inline-block font-bold text-base px-5 py-1.5 rounded-full ${
                          p.badge === 'RECOMMENDED' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-500'
                        }`}>{p.nama}</span>
                      </div>
                      <div className="text-center mb-1">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-xs line-through text-gray-400">Rp {formatHarga(p.hargaAsli)}</span>
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
                        href="https://my.domainesia.com/ref.php?u=26885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors bg-[#1a6fc4] hover:bg-[#155fa8] text-white mt-4 mb-5"
                      >
                        Beli
                      </a>
                      <ul className="space-y-2 flex-1">
                        {[p.storage, p.website, 'LiteSpeed Web Server', 'Unlimited Bandwidth', 'Unlimited Inodes', 'Akses SSH', 'Gratis SSL', 'Gratis Domain', p.ram, p.cpu].map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#1a6fc4] mt-0.5 flex-shrink-0" />{item}
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
                paketHeaders={paketHeadersWordPress}
                detailFitur={detailFiturWordPress}
                paket={paketWordPress}
                tombolLabel="Beli"
              />
            )}
          </div>
        </section>

        {/* Fitur Terbaik */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fitur Terbaik Hosting WordPress dari Partner Kami</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Membuat website WordPress semakin mudah, cepat, dan aman — dikelola DomaiNesia, direkomendasikan nativecode.id
              </p>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {[0, 2, 4, 6, 8].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturTerbaik.slice(rowStart, rowStart + 2).map((f, i) => (
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

        {/* CTA */}
        <section className="py-12 px-4 bg-[#1a6fc4]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bingung Pilih Paket WordPress Hosting?</h2>
            <p className="text-white/80 mb-2">Konsultasikan kebutuhan website WordPress Anda dengan tim nativecode.id — gratis!</p>
            <p className="text-white/60 text-sm mb-6">Kami bantu rekomendasikan paket yang paling tepat sebelum Anda beli di DomaiNesia.</p>
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