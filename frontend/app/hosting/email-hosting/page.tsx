'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { paketEmailHosting, fiturEmailHosting } from '@/data/email-hosting';

const WA_URL = 'https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+email+hosting.+Mohon+bantuannya+%F0%9F%99%8F';

const alasanBeli = [
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="26" r="14" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="26" r="9" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
        <path d="M29 26l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 37l-4 8M40 37l4 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 45l6-3h12l6 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="44" cy="14" r="7" fill="rgba(255,200,50,0.4)" stroke="rgba(255,200,50,0.8)" strokeWidth="1.5"/>
        <path d="M44 10l1.2 3.6H49l-3 2.2 1.1 3.5L44 17l-3.1 2.3 1.1-3.5-3-2.2h3.8z" fill="rgba(255,220,80,0.9)"/>
      </svg>
    ),
    title: 'Meningkatkan Identitas Merek',
    desc: 'Saatnya tinggalkan email lama (namabisnis@xmail.com) dan beralih ke email dengan nama domain Anda sendiri (info@namabisnis.com).',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="22" r="9" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.15)"/>
        <path d="M18 50c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M23 22a9 9 0 0 1 18 0" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="20" y="21" width="5" height="7" rx="2.5" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1.5"/>
        <rect x="39" y="21" width="5" height="7" rx="2.5" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1.5"/>
        <path d="M44 25v2a4 4 0 0 1-4 4h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="46" cy="14" r="5" fill="rgba(255,200,50,0.5)" stroke="rgba(255,200,50,0.8)" strokeWidth="1"/>
      </svg>
    ),
    title: 'Bantuan Tim Support Siaga 24x7',
    desc: 'Kemudahan mengelola email hosting dengan bantuan Tim Support selama 24/7, serta dokumentasi panduan yang lengkap.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="20" width="36" height="26" rx="3" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2"/>
        <path d="M12 26l20 12 20-12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="42" cy="18" r="9" fill="rgba(255,100,100,0.3)" stroke="rgba(255,150,150,0.9)" strokeWidth="2"/>
        <line x1="36" y1="12" x2="48" y2="24" stroke="rgba(255,150,150,0.9)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="5" fill="rgba(255,200,50,0.4)" stroke="rgba(255,200,50,0.7)" strokeWidth="1"/>
      </svg>
    ),
    title: 'Filter Anti-Spam Premium',
    desc: 'Email bisnis terlindung dari spam yang mengganggu. Sehingga Anda tidak perlu kerepotan menangani email spam yang masuk maupun keluar.',
  },
];

const fiturDetail = [
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <circle cx="22" cy="24" r="10" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M16 24l4 4 6-7" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="20" r="7" fill="#FFF3E0"/>
        <line x1="33" y1="20" x2="39" y2="20" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="36" y1="17" x2="36" y2="23" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="26" y="32" width="18" height="12" rx="2" fill="#EAF4FB" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M26 36l9 5 9-5" stroke="#5BAAD0" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tampilan Bebas Iklan',
    desc: 'Berbeda dengan layanan email gratis, dengan Mailspace Anda tidak akan melihat iklan yang mengganggu. Tampilan bersih akan membantu Anda untuk lebih fokus mengelola email.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFFBEA"/>
        <rect x="14" y="20" width="28" height="18" rx="3" fill="#FFF3C4" stroke="#F0B429" strokeWidth="1.5"/>
        <path d="M14 26l14 8 14-8" stroke="#F0B429" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 16l2 2M40 18l-2 2" stroke="#F0B429" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="5" fill="#F0B429" opacity="0.3"/>
        <path d="M38 14h4M40 12v4" stroke="#F0B429" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="30" y="30" width="8" height="6" rx="1" fill="#F0B429" opacity="0.5"/>
      </svg>
    ),
    title: 'Kirim 1.000 Email per Hari',
    desc: 'Kapasitas pengiriman besar hingga 1.000 email per hari untuk tiap akun email (user). Bukan lagi untuk 1 domain (keseluruhan). Sehingga membantu Anda mengirim banyak email dalam satu waktu.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="16" y="14" width="16" height="20" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <rect x="24" y="20" width="16" height="20" rx="2" fill="#EAF4FB" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M28 28h8M28 32h5" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="38" cy="18" r="6" fill="#FFF3E0"/>
        <path d="M35 18h6M38 15v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'File Attachment Besar',
    desc: 'Dengan Mailspace, Anda bisa melampirkan file dengan ukuran besar hingga 48MB. Mailspace salah satu email provider dengan fitur kapasitas file attachment terbesar (Gmail hanya 25MB).',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF0F0"/>
        <rect x="16" y="20" width="24" height="18" rx="3" fill="#FFD6D6" stroke="#E05555" strokeWidth="1.5"/>
        <path d="M16 26l12 7 12-7" stroke="#E05555" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="38" cy="18" r="7" fill="#EAF4FB"/>
        <path d="M35 18l2 2 4-4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Premium Anti-Spam Filter',
    desc: 'DomaiNesia mengimplementasikan fitur anti-spam premium MailChannel untuk email masuk dan keluar. Tenang saja, email tidak mendapat spam & email yang Anda kirim tidak masuk ke spam.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <rect x="14" y="18" width="28" height="20" rx="3" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M20 26l3 3 5-5" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 30h28" stroke="#5BAAD0" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="40" cy="16" r="7" fill="#FFF3E0"/>
        <path d="M37 16l2 2 4-4" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Backup Harian Gratis dengan Jetbackup',
    desc: 'Kehilangan data sama saja dengan kehilangan pelanggan. Namun, Anda tidak perlu khawatir, karena data-data email di Mailspace akan dibackup berkala secara otomatis.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#E8F8F0"/>
        <rect x="16" y="18" width="24" height="20" rx="3" fill="#B8EDD4" stroke="#5D9C76" strokeWidth="1.5"/>
        <path d="M16 24l12 7 12-7" stroke="#5D9C76" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 14 L28 18 L34 14" stroke="#5D9C76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M28 18 L28 12" stroke="#5D9C76" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="12" r="3" fill="#5D9C76"/>
      </svg>
    ),
    title: 'Kapasitas Besar',
    desc: 'Email hosting Mailspace dirancang khusus untuk menerima dan mengirim email, karena itu berbeda dengan email bawaan pada web hosting. Tersedia pilihan kapasitas hingga 30GB per user.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FFF3E0"/>
        <rect x="14" y="20" width="28" height="18" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="1.5"/>
        <path d="M14 26l14 8 14-8" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 16 Q42 20 40 26" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M38 25l2 1 1-2" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Auto Responder',
    desc: 'Tidak selalu membuka email? Namun ingin menjawab email secepat mungkin? Aktifkan fitur auto responder. Email yang Anda terima akan dijawab sesegera mungkin secara otomatis.',
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#EAF4FB"/>
        <circle cx="24" cy="24" r="7" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="1.5"/>
        <path d="M14 42c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M34 28l8 8M38 28h4v4" stroke="#5BAAD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mudah Simpan Kontak',
    desc: 'Mailspace dilengkapi dengan fitur contact yang akan memudahkan Anda untuk menyimpan daftar kontak penting yang bisa diakses kapan saja seperti, nomor telepon, email, dan nama perusahaan.',
  },
];

function formatHarga(n: number) {
  return n.toLocaleString('id-ID');
}

function groupByKategori(arr: typeof fiturEmailHosting) {
  return arr.reduce((acc, item) => {
    if (!acc[item.kategori]) acc[item.kategori] = [];
    acc[item.kategori].push(item);
    return acc;
  }, {} as Record<string, typeof fiturEmailHosting>);
}

export default function EmailHostingPage() {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'detail'>('ringkasan');
  const grouped = groupByKategori(fiturEmailHosting);

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* Hero — biru gradient seperti DomaiNesia */}
        <section className="bg-gradient-to-br from-[#1a6fc4] to-[#0d4fa0] text-white pt-16 pb-20 px-4 min-h-screen flex items-center">
          {/* Background decorative dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute border border-white/10 rounded-full"
                style={{
                  width: `${40 + (i * 20)}px`, height: `${40 + (i * 20)}px`,
                  top: `${(i * 37) % 90}%`, left: `${(i * 23) % 85}%`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 relative z-10">
            {/* Teks kiri */}
            <div className="flex-1 pb-10 lg:pb-16">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 rounded-lg px-3 py-1.5">
                  <span className="text-white font-bold text-sm">Mailspace</span>
                </div>
                <span className="text-white/60 text-xs">powered by DomaiNesia × nativecode.id</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Email Hosting Indonesia<br />Profesional &amp; Terpercaya
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
                Saatnya menggunakan alamat email profesional dengan domain sendiri untuk kebutuhan bisnis dan perusahaan Anda. Melalui kerjasama nativecode.id dengan DomaiNesia, bisnis Anda semakin terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.domainesia.com/email-hosting/?aff=26885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md text-sm"
                >
                  Beli Email Hosting
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Mockup kanan */}
            <div className="flex-1 flex justify-center lg:justify-end items-end self-end">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/hero/email.png"
                  alt="Mailspace Email Hosting"
                  width={600}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Alasan Beli — sticky kiri */}
        <section className="bg-[#F0F4FA] py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sticky kiri */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                    Alasan Beli Email Hosting Mailspace DomaiNesia
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Menggunakan email Hosting Mailspace dari DomaiNesia yang cepat dan mudah, bisnis menjadi lebih baik. Email Hosting Mailspace memiliki beragam keunggulan.
                  </p>
                </div>
              </div>
              {/* 3 kolom kanan */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {alasanBeli.map((item, i) => (
                  <div key={i} className="bg-[#4A90C4] rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-white/10">
                    <div className="w-14 h-14 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Paket */}
        <section className="py-12 px-4 pb-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Paket &amp; Harga Email Hosting Mailspace</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Semua paket sudah termasuk gratis domain dan anti-spam premium</p>

            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
                <button onClick={() => setActiveTab('ringkasan')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'ringkasan' ? 'bg-white text-[#1a7fc1] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Paket
                </button>
                <button onClick={() => setActiveTab('detail')}
                  className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'detail' ? 'bg-white text-[#1a7fc1] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                  Detail
                </button>
              </div>
            </div>

            {activeTab === 'ringkasan' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {paketEmailHosting.map((p, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl shadow-sm border-2 flex flex-col ${
                    p.badge === 'RECOMMENDED' ? 'border-[#D17B36]' : 'border-gray-100'
                  } ${p.badge ? 'mt-6' : ''}`}>
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
                          p.badge === 'RECOMMENDED' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-[#1a7fc1]'
                        }`}>{p.nama}</span>
                      </div>
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-xs line-through text-gray-400">Rp {formatHarga(p.hargaAsli)}</span>
                          <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Diskon {p.diskon}%</span>
                        </div>
                        <div className="flex items-start justify-center">
                          <span className="text-sm font-bold text-gray-800 mt-1 mr-0.5">Rp</span>
                          <span className="text-4xl font-bold text-gray-900">{formatHarga(p.harga)}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">PER BULAN</p>
                        <p className="text-xs text-[#1a7fc1] mt-0.5">Harga perpanjangan <span className="font-semibold">Rp{formatHarga(p.harga)}/bulan</span></p>
                        <p className="text-xs text-gray-400 mt-1">User (+Rp {p.nama === 'Lite' ? '3.500' : p.nama === 'Pro' ? '14.000' : '21.000'}/bulan)</p>
                      </div>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-semibold py-2.5 rounded-xl text-sm transition-colors bg-[#5D9C76] hover:bg-[#4a7d5e] text-white mb-5"
                      >
                        Pesan
                      </a>
                      <ul className="space-y-2 flex-1">
                        {[
                          p.storage,
                          p.totalStorage,
                          `${p.userMin} - ${p.userMax} user`,
                          p.smtpPerHari,
                          'Premium Anti-Spam Filter',
                          'Gratis Custom Domain',
                          'Gratis Domain',
                          'Backup with JetBackup',
                        ].map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-[#5D9C76] mt-0.5 flex-shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'detail' && (
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-[#5BAAD0]">
                      <th className="text-left px-6 py-3 font-semibold text-white w-[240px]">Fitur</th>
                      <th className="text-center px-6 py-3 font-semibold text-white">Lite</th>
                      <th className="text-center px-6 py-3 font-semibold text-white">Pro</th>
                      <th className="text-center px-6 py-3 font-semibold text-white">Max</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(grouped).map(([kategori, items]) => (
                      <React.Fragment key={`cat-${kategori}`}>
                        <tr className="bg-gray-50">
                          <td colSpan={4} className="px-6 py-2.5 font-bold text-gray-700 text-xs uppercase tracking-wide">{kategori}</td>
                        </tr>
                        {items.map((item, idx) => (
                          <tr key={`${kategori}-${idx}`} className="border-t border-gray-100 hover:bg-gray-50/50">
                            <td className="px-6 py-3 text-gray-600 align-top">{item.fitur}</td>
                            {(['lite', 'pro', 'max'] as const).map(col => (
                              <td key={col} className="px-6 py-3 text-center align-top text-gray-600">
                                {item[col] === true ? (
                                  <span className="inline-flex justify-center">
                                    <Check className="h-4 w-4 text-[#5BAAD0]" />
                                  </span>
                                ) : item[col] === false ? (
                                  <span className="text-gray-300">—</span>
                                ) : (
                                  <span className="text-xs leading-relaxed">{item[col]}</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    <tr className="border-t border-gray-200">
                      <td className="px-6 py-4" />
                      {paketEmailHosting.map((p, i) => (
                        <td key={i} className="px-4 py-4 text-center">
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-2 rounded-xl text-sm transition-colors"
                          >
                            Beli
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Fitur Email Hosting — 8 item grid 2 kolom */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fitur Email Hosting Terbaik<br />Menunjang Kebutuhan Email Perusahaan</h2>
            </div>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              {[0, 2, 4, 6].map(rowStart => (
                <div key={rowStart} className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {fiturDetail.slice(rowStart, rowStart + 2).map((f, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 hover:bg-gray-50/50 transition-colors">
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
        <section className="py-12 px-4 bg-gradient-to-r from-[#1a7fc1] to-[#2196d3]">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Butuh Solusi Email Hosting dengan Kapasitas Lebih Besar?</h2>
            <p className="text-white/80 mb-2">Hubungi tim nativecode.id untuk mendapatkan penawaran terbaik dan solusi yang sesuai dengan kebutuhan bisnis Anda.</p>
            <p className="text-white/60 text-sm mb-6">Kami bantu rekomendasikan paket yang paling tepat sebelum Anda beli di DomaiNesia.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.domainesia.com/email-hosting/?aff=26885"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5D9C76] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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