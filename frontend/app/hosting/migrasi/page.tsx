'use client';
import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { TabelPerbandingan } from '@/komponen/hosting/TabelPerbandingan';
import { paketMigrasi, paketHeadersMigrasi, syaratMigrasi, detailFiturMigrasi } from '@/data/migrasi';

const solusiItems = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="14" y="20" width="12" height="10" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <rect x="30" y="16" width="12" height="14" rx="2" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M17 25l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="34" x2="42" y2="34" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Hosting Gratis Masa Aktif 1 Bulan',
    desc: 'Melalui rekomendasi nativecode.id, transfer hosting Anda ke DomaiNesia dan dapatkan hosting premium gratis selama 1 bulan penuh beserta berbagai fitur terbaik.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="22" width="12" height="10" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="30" y="18" width="12" height="14" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="20" y1="32" x2="20" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="36" y1="32" x2="36" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="14" y1="38" x2="42" y2="38" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="42" cy="16" r="7" fill="#FFF3E0"/>
        <path d="M39 16h6M42 13v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cloud Backup & SSD NVMe',
    desc: 'Hosting DomaiNesia yang kami rekomendasikan menggunakan teknologi Cloud Storage berbasis SSD NVMe dengan 3X Replikasi Data — data website Anda dibackup di gedung data center berbeda.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M20 34v-4a8 8 0 0 1 16 0v4" stroke="#5BAAD0" strokeWidth="2" fill="none"/>
        <rect x="16" y="33" width="6" height="7" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="34" y="33" width="6" height="7" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M36 40v1a3 3 0 0 1-3 3h-2" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="31" cy="44" r="1.5" fill="#5BAAD0"/>
      </svg>
    ),
    title: 'Bantuan Tim Support 24/7',
    desc: 'Jika Anda mengalami kendala saat migrasi, tim support DomaiNesia siap membantu 24/7 via live chat, email, dan tiket bantuan. Tim nativecode.id juga siap konsultasi sebelum Anda memulai.',
  },
];

const langkah = [
  {
    num: '1',
    icon: (
      <svg viewBox="0 0 80 80" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#EAF4FB"/>
        <rect x="22" y="24" width="36" height="32" rx="4" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/>
        <path d="M30 36h20M30 42h14" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 32l3 3 5-5" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Pilih Paket Hosting',
    desc: 'Silakan memilih paket hosting yang paling sesuai dengan kebutuhan dan spesifikasi website Anda.',
  },
  {
    num: '2',
    icon: (
      <svg viewBox="0 0 80 80" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#EAF4FB"/>
        <rect x="22" y="22" width="36" height="36" rx="4" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/>
        <path d="M30 34h20M30 40h20M30 46h12" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="52" cy="52" r="8" fill="#5D9C76"/>
        <path d="M49 52l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Isi Form Pemesanan',
    desc: 'Lengkapi formulir pemesanan dengan data yang akurat untuk memastikan proses transfer hosting berjalan dengan aman dan lancar.',
  },
  {
    num: '3',
    icon: (
      <svg viewBox="0 0 80 80" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#EAF4FB"/>
        <rect x="20" y="26" width="18" height="28" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/>
        <rect x="42" y="26" width="18" height="28" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/>
        <path d="M38 40 L42 40" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/>
        <path d="M39 37 L42 40 L39 43" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="56" cy="28" r="8" fill="#D17B36"/>
        <path d="M53 28l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Proses Transfer Hosting',
    desc: 'Selanjutnya, tim kami akan melakukan validasi data, kemudian menjadwalkan pelaksanaan proses transfer hosting Anda.',
  },
];

const fiturHosting = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M14 28 Q20 14 28 28 Q36 42 42 28" stroke="#5BAAD0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="28" r="3" fill="#5BAAD0"/>
        <circle cx="42" cy="28" r="3" fill="#5BAAD0"/>
        <path d="M22 18 L28 12 L34 18" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Dioptimasi Menggunakan NGINX',
    desc: 'Kami merekomendasikan DomaiNesia karena mengoptimalkan Nginx dengan berbagai fitur seperti Nginx cache, PageSpeed, HTTP/3, dan cache Google Fonts untuk performa maksimal.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <circle cx="28" cy="28" r="14" stroke="#D17B36" strokeWidth="1.5" fill="#FFE0B2"/>
        <path d="M28 20 Q36 24 36 28 Q36 36 28 38 Q20 36 20 28 Q20 24 28 20Z" stroke="#D17B36" strokeWidth="1.5" fill="none"/>
        <circle cx="28" cy="28" r="4" fill="#D17B36"/>
        <path d="M28 14 L28 18 M28 38 L28 42 M14 28 L18 28 M38 28 L42 28" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Uptime 99.9%',
    desc: 'Semakin tinggi tingkat uptime hosting, semakin sedikit gangguan yang akan dialami pengguna saat mengakses situs web atau aplikasi — DomaiNesia menjamin uptime 99.9%.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <path d="M18 28 Q18 16 28 14 Q38 16 38 28 Q38 38 28 42 Q18 38 18 28Z" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M22 28 Q22 20 28 18 Q34 20 34 28" stroke="#5BAAD0" strokeWidth="1.5" fill="none"/>
        <circle cx="28" cy="30" r="4" fill="#5BAAD0"/>
      </svg>
    ),
    title: 'Berbagai Pilihan Paket',
    desc: 'Kami membantu Anda memilih paket hosting DomaiNesia yang paling sesuai — dari Super untuk blog & toko online, hingga Cirrus 4GB untuk aplikasi enterprise berskala besar.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="14" y="20" width="28" height="16" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <rect x="18" y="24" width="6" height="4" rx="1" fill="#D17B36"/>
        <rect x="26" y="24" width="12" height="2" rx="1" fill="#D17B36" opacity="0.5"/>
        <rect x="26" y="28" width="8" height="2" rx="1" fill="#D17B36" opacity="0.5"/>
        <path d="M20 38 L28 42 L36 38" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Didukung Redis dan Memcached',
    desc: 'Memcached dan Redis yang tersedia di hosting DomaiNesia menyimpan data dalam memori untuk mempercepat akses dan mengurangi beban pada sistem database website Anda.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="22" width="12" height="10" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="30" y="18" width="12" height="14" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="20" y1="32" x2="20" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="36" y1="32" x2="36" y2="38" stroke="#5BAAD0" strokeWidth="1.5"/>
        <line x1="14" y1="38" x2="42" y2="38" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Teknologi Cloud & 3X Replikasi Data',
    desc: 'Teknologi berbasis SSD NVMe yang akan memberikan performa dan stabilitas maksimal — 100% uptime data dan proteksi korupsi data untuk ketenangan pikiran Anda.',
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
    title: 'Remote Backup Gratis',
    desc: 'Fitur Backup akan membantu mencegah kehilangan data atau kerusakan data akibat bencana. Data disimpan di Datacenter dengan lokasi gedung berbeda untuk keamanan ekstra.',
  },
];

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

export default function MigrasiPage() {
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

            {/* Kiri: Teks + Tombol */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 leading-snug">
                Transfer Hosting<br className="hidden sm:block" /> <span className="text-[#ffd580]">Gratis 1 Bulan</span>
              </h1>
              <p className="text-blue-100 font-semibold mb-2 text-xs sm:text-sm">
                Dalam kerjasama dengan DomaiNesia
              </p>
              <p className="text-xs sm:text-base text-blue-100 mb-8">
                Pindah hosting sekarang, gratis 1 bulan penuh — konsultasikan kebutuhan Anda dengan kami dulu!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <a
                  href="https://www.domainesia.com/hosting/?aff=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg text-sm"
                >
                  Mulai Migrasi Sekarang
                </a>
                <Link
                  href="/kontak"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>

            {/* Kanan: Gambar SVG */}
            <div className="flex-shrink-0 w-72 sm:w-[420px]">
              <Image
                src="/images/hero/migrasi.svg"
                alt="Migrasi Hosting Illustration"
                width={420}
                height={420}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

          </div>
        </section>

        {/* Solusi sticky */}
        <section className="bg-[#F0F4FA] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Transfer Web Hosting Gratis DomaiNesia Solusi Terbaik
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Dapatkan web hosting dengan teknologi Cloud Storage berbasis SSD NVMe dan 3X Replikasi Data melalui rekomendasi nativecode.id. Nikmati berbagai fitur terbaik, gratis transfer, serta gratis masa aktif hosting selama 1 bulan.
                  </p>
                  <a
                    href="https://www.domainesia.com/hosting/?aff=26885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Transfer Hosting
                  </a>
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

        {/* Langkah Migrasi */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Langkah Mudah Transfer Hosting</h2>
            <div className="hidden sm:flex items-center justify-center mb-10 px-16">
              <div className="flex items-center w-full">
                {langkah.map((l, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#5BAAD0] text-white font-bold text-sm flex items-center justify-center shadow-md">
                        {l.num}
                      </div>
                    </div>
                    {i < langkah.length - 1 && (
                      <div className="flex-1 h-0.5 bg-[#5BAAD0] mx-2" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {langkah.map((l, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-4">{l.icon}</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{l.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syarat Migrasi */}
        <section className="py-14 px-4 bg-[#F0F4FA]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
                  Sebelum melakukan transfer hosting pastikan telah memenuhi syarat berikut ini.
                </h2>
                <ol className="space-y-3">
                  {syaratMigrasi.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="flex-shrink-0 font-semibold text-gray-700">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex overflow-hidden rounded-xl border border-yellow-200">
                  <div className="bg-[#D17B36] px-4 py-3 flex items-center">
                    <span className="text-white font-bold text-sm">Catatan</span>
                  </div>
                  <div className="bg-yellow-50 px-4 py-3">
                    <p className="text-sm text-gray-600">Agar proses transfer hosting dapat berjalan dengan aman dan lancar, mohon dipastikan kredensial login cPanel yang diberikan telah benar dan valid.</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center lg:w-72">
                <svg viewBox="0 0 200 220" width="200" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="140" height="170" rx="8" fill="#E3F0FA" stroke="#5BAAD0" strokeWidth="2"/>
                  <rect x="70" y="20" width="60" height="24" rx="6" fill="#5BAAD0"/>
                  <rect x="82" y="26" width="36" height="12" rx="3" fill="#EAF4FB"/>
                  {[0,1,2,3,4,5].map((idx) => (
                    <React.Fragment key={idx}>
                      <rect x="55" y={70 + idx * 18} width="12" height="10" rx="2" fill="#D17B36"/>
                      <path d={`M52 ${75 + idx * 18} l3 3 5-5`} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="75" y={72 + idx * 18} width="70" height="6" rx="3" fill="#C9DFF0"/>
                    </React.Fragment>
                  ))}
                  <rect x="145" y="120" width="14" height="60" rx="4" transform="rotate(30 145 120)" fill="#5D9C76"/>
                  <polygon points="155,168 163,175 148,178" fill="#D17B36"/>
                  <rect x="145" y="116" width="14" height="8" rx="2" transform="rotate(30 145 116)" fill="#C9E8F7"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Paket */}
        <section className="py-12 px-4 pb-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Pilih Paket Migrasi</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Semua paket GRATIS 1 bulan pertama — bayar mulai bulan ke-2</p>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {paketMigrasi.map((p, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl shadow-sm border-2 flex flex-col ${p.borderColor} ${p.badge ? 'mt-6' : ''}`}>
                    {p.badge && (
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-4 py-1.5 rounded-full ${p.badgeColor} shadow-sm`}>
                        {p.badge}
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <div className={`inline-block self-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${
                        p.nama === 'Super' ? 'bg-[#e8f5ee] text-[#5D9C76]' :
                        p.nama === 'Monster' ? 'bg-[#fef3ea] text-[#D17B36]' :
                        'bg-[#eaf5fb] text-[#5BAAD0]'
                      }`}>
                        {p.nama}
                      </div>
                      <div className="text-center mb-1">
                        <p className={`text-4xl font-extrabold ${p.gratisBg}`}>GRATIS</p>
                        <p className="text-xs text-gray-500 mt-1">1 BULAN</p>
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-xs text-gray-500 mt-2">Harga perpanjangan</p>
                        <p className={`text-sm font-bold ${p.hargaWarna}`}>Rp{formatHarga(p.hargaPerpanjangan)}/tahun</p>
                      </div>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors bg-[#5D9C76] hover:bg-[#4a7d5e] text-white mb-5"
                      >
                        Transfer
                      </a>
                      <div className="border-t border-gray-100 mb-4" />
                      <ul className="space-y-2 flex-1">
                        {p.fitur.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#5D9C76] mt-0.5 flex-shrink-0" />
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
                paketHeaders={paketHeadersMigrasi}
                detailFitur={detailFiturMigrasi}
                paket={paketMigrasi}
                tombolLabel="Transfer"
              />
            )}
          </div>
        </section>

        {/* Fitur Hosting */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fitur Hosting Terbaik dari Partner Kami</h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Rasakan pengalaman terbaik memiliki website dengan server berbasis Cloud yang andal dan cepat — dikelola DomaiNesia, direkomendasikan nativecode.id
              </p>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {[0, 2, 4].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturHosting.slice(rowStart, rowStart + 2).map((f, i) => (
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
        <section className="py-12 px-4 bg-[#5D9C76]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Pindah Hosting Sekarang, Gratis 1 Bulan!</h2>
            <p className="text-white/80 mb-2">Konsultasikan kebutuhan migrasi Anda dengan tim nativecode.id — gratis!</p>
            <p className="text-white/60 text-sm mb-6">Kami bantu rekomendasikan paket yang paling tepat sebelum Anda transfer di DomaiNesia.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.domainesia.com/hosting/?aff=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D17B36] hover:bg-[#b8692d] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Mulai Transfer Sekarang
              </a>
              <Link
                href="/kontak"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
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