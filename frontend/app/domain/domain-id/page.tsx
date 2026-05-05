'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

const AFF = '?aff=26885';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const domainList = [
  { ext: '.id',       harga: 'Rp 99.000',  hargaCoret: 'Rp 249.000', desc: 'Domain nasional Indonesia paling prestisius',    popular: true,  syarat: 'Verifikasi email aja' },
  { ext: '.my.id',    harga: 'Rp 9.900',   hargaCoret: 'Rp 35.000',  desc: 'Domain personal paling terjangkau untuk Indonesia', syarat: 'Verifikasi email aja' },
  { ext: '.web.id',   harga: 'Rp 9.900',   hargaCoret: 'Rp 50.000',  desc: 'Untuk website profesional beridentitas Indonesia',  syarat: 'Verifikasi email aja' },
  { ext: '.biz.id',   harga: 'Rp 12.000',  hargaCoret: 'Rp 35.000',  desc: 'Cocok untuk bisnis lokal Indonesia',               syarat: 'Verifikasi email aja' },
  { ext: '.co.id',    harga: 'Rp 295.000', hargaCoret: 'Rp 300.000', desc: 'Untuk badan usaha dan perusahaan di Indonesia',     syarat: 'KTP + NIB/NPWP' },
  { ext: '.or.id',    harga: 'Rp 270.000', hargaCoret: null,          desc: 'Khusus organisasi sosial dan kemasyarakatan',       syarat: 'KTP + Akta Notaris' },
  { ext: '.ac.id',    harga: 'Rp 270.000', hargaCoret: null,          desc: 'Untuk lembaga pendidikan tinggi resmi',             syarat: 'KTP + SK Pendirian' },
  { ext: '.sch.id',   harga: 'Rp 48.900',  hargaCoret: 'Rp 50.000',  desc: 'Khusus sekolah resmi di Indonesia',                 syarat: 'KTP + SK Kepala Sekolah' },
  { ext: '.ponpes.id',harga: 'Rp 48.900',  hargaCoret: 'Rp 50.000',  desc: 'Khusus pondok pesantren di Indonesia',              syarat: 'KTP + SK Pimpinan Ponpes' },
];

const persyaratanList = [
  { ext: '.id', syarat: [{ grup: null, items: ['Tidak ada persyaratan dokumen (cukup melakukan verifikasi via email)'] }] },
  { ext: '.my.id', syarat: [{ grup: null, items: ['Tidak ada persyaratan dokumen (cukup melakukan verifikasi via email)'] }] },
  { ext: '.web.id', syarat: [{ grup: null, items: ['Tidak ada persyaratan dokumen (cukup melakukan verifikasi via email)'] }] },
  { ext: '.biz.id', syarat: [{ grup: null, items: ['Tidak ada persyaratan dokumen (cukup melakukan verifikasi via email)'] }] },
  { ext: '.co.id', syarat: [{ grup: 'Bagi badan hukum / usaha / organisasi / entitas bisnis yang beroperasi di Indonesia:', items: ['KTP elektronik / Paspor / e.id / Identitas lain yang sah', 'NIB / NPWP / SK Kumham (atas nama perusahaan)'] }, { grup: 'Bagi pemilik Merek Internasional yang terdaftar di Indonesia dan PSE di Indonesia:', items: ['KTP elektronik / Paspor / e.id / Identitas lain yang sah', 'Sertifikat Merek Internasional / Sertifikat PSE yang diterbitkan pemerintah Indonesia', 'Surat Kuasa kepada subjek hukum di Indonesia'] }] },
  { ext: '.or.id', syarat: [{ grup: 'Bagi organisasi sosial, politik, pemuda, kemasyarakatan, perkumpulan, komunitas, himpunan, dan sejenis yang beroperasi di Indonesia:', items: ['KTP elektronik / Paspor / e.id / Identitas lain yang sah', 'Akta Notaris Pendirian organisasi / perkumpulan atau surat permohonan domain dari ketua organisasi / perkumpulan / yayasan.'] }, { grup: 'Bagi pemilik Merek Internasional yang terdaftar di Indonesia dan PSE:', items: ['KTP elektronik / Paspor / e.id / Identitas lain yang sah', 'Sertifikat Merek Internasional / Sertifikat PSE yang diterbitkan pemerintah Indonesia', 'Surat Kuasa kepada subjek hukum di Indonesia'] }] },
  { ext: '.ac.id', syarat: [{ grup: null, items: ['KTP Republik Indonesia / Paspor yang masih berlaku', 'SK Pendirian Lembaga dari Kementerian/Lembaga yang berwenang sesuai Peraturan perundang-undangan', 'Surat Keterangan Rektor atau Pimpinan Lembaga.', 'Untuk nama domain yang didaftarkan harus sesuai dengan nama lembaga yang mendaftarkan.'] }] },
  { ext: '.sch.id', syarat: [{ grup: 'Untuk sekolah resmi', items: ['KTP Republik Indonesia / Paspor yang masih berlaku', 'Surat Keterangan Kepala Sekolah atau Kepala Lembaga.', 'Untuk nama domain yang didaftarkan harus sesuai dengan nama sekolah yang mendaftarkan.'] }, { grup: 'Untuk pendidikan non-formal yang diakui oleh SKPD (tidak termasuk pondok pesantren)', items: ['KTP Republik Indonesia / Paspor yang masih berlaku', 'SK Pendirian Lembaga dari Kementerian atau SKPD terkait', 'Untuk nama domain yang didaftarkan harus sesuai dengan nama lembaga yang mendaftarkan.'] }] },
  { ext: '.ponpes.id', syarat: [{ grup: null, items: ['KTP Republik Indonesia / Paspor yang masih berlaku', 'Surat Keterangan pimpinan Pondok Pesantren atau Pimpinan Lembaga.', 'Untuk nama domain yang didaftarkan harus sesuai dengan nama lembaga yang mendaftarkan.'] }] },
];

export default function DomainId() {
  const [keyword, setKeyword] = useState('');
  const [activeTab, setActiveTab] = useState<'harga' | 'persyaratan'>('harga');

  const handleCek = () => {
    if (!keyword.trim()) return;
    const domain = keyword.trim().toLowerCase().replace(/\s+/g, '');
    window.open(`https://www.domainesia.com/domain-id/${AFF}&domain=${domain}`, '_blank');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCek();
  };

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* HERO */}
        <section
          className="px-6 pt-24 pb-16 sm:pt-32 sm:pb-50"
          style={{ background: 'linear-gradient(135deg, #1a6eb5 0%, #2a9fd6 50%, #4ec3e0 100%)' }}
        >
          <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-10">

            {/* Kiri: Teks + Search */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 leading-snug">
                Cek & Beli <span className="text-[#a8f0c6]">Domain Indonesia</span><br className="hidden sm:block" /> Mulai Rp 9.900/tahun
              </h1>
              <p className="text-blue-100 font-semibold mb-2 text-xs sm:text-sm">
                Dalam kerjasama dengan DomaiNesia
              </p>
              <p className="text-xs sm:text-base text-blue-100 mb-8">
                Perkuat identitas digital bisnis Anda dengan domain berekstensi Indonesia.
              </p>

              {/* Search bar */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-lg">
                <div className="flex-1 flex items-center bg-white rounded-2xl shadow-lg px-4 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    type="text"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ketik nama domain..."
                    className="flex-1 py-3.5 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
                  />
                </div>
                <button
                  onClick={handleCek}
                  className="bg-[#5D9C76] text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#4e8a66] transition-colors text-sm whitespace-nowrap shadow-lg"
                >
                  Cek Domain
                </button>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="flex-shrink-0 w-72 sm:w-[420px]">
              <Image
                src="/images/hero/domain-id.svg"
                alt="Domain Indonesia Illustration"
                width={420}
                height={420}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

          </div>
        </section>

        {/* DAFTAR EKSTENSI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 w-full">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Domain Indonesia Lengkap & Terpercaya</h2>
            <p className="text-gray-500 text-xs sm:text-base">Pilih ekstensi domain Indonesia yang sesuai dengan kebutuhan Anda</p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-1">
              <button onClick={() => setActiveTab('harga')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'harga' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Harga</button>
              <button onClick={() => setActiveTab('persyaratan')} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === 'persyaratan' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Persyaratan</button>
            </div>
          </div>

          {activeTab === 'harga' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {domainList.map((d, i) => (
                  <div key={i} className={`relative bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 ${d.popular ? 'border-[#5D9C76]' : 'border-gray-100'}`}>
                    {d.popular && <span className="absolute top-4 right-4 bg-[#5D9C76] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">POPULER</span>}
                    <div>
                      <p className="text-2xl sm:text-4xl font-bold text-[#5D9C76] mb-1">{d.ext}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
                    </div>
                    <div>
                      {d.hargaCoret && <p className="text-gray-400 text-xs line-through">{d.hargaCoret}</p>}
                      <p className="text-lg font-bold text-gray-900">{d.harga}<span className="text-sm font-normal text-gray-400">/tahun</span></p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5D9C76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                      <span className="text-xs text-gray-500">{d.syarat}</span>
                    </div>
                    <a
                      href={`https://www.domainesia.com/domain-id/${AFF}&domain=${keyword || 'namadomainanda'}&ext=${d.ext.replace('.', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full border border-[#5D9C76] text-[#5D9C76] text-sm font-semibold text-center hover:bg-[#5D9C76] hover:text-white transition-colors">
                      Beli Sekarang
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href={`https://www.domainesia.com/domain-id/${AFF}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-6 py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm">
                  Lihat Semua Domain Indonesia
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
              </div>
            </>
          )}

          {activeTab === 'persyaratan' && (
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-[#5BAAD0]">
                    <th className="text-left px-5 py-3 font-semibold text-white w-[140px]">Ekstensi</th>
                    <th className="text-left px-5 py-3 font-semibold text-white">Persyaratan</th>
                  </tr>
                </thead>
                <tbody>
                  {persyaratanList.map((p, pi) => (
                    <tr key={pi} className={`border-b border-gray-100 ${pi % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} align-top`}>
                      <td className="px-5 py-4 font-semibold text-gray-700 text-sm">{p.ext}</td>
                      <td className="px-5 py-4">
                        {p.syarat.map((s, si) => (
                          <div key={si} className={si > 0 ? 'mt-4' : ''}>
                            {s.grup && <p className="font-semibold text-gray-800 text-xs mb-1.5">{s.grup}</p>}
                            <ul className="space-y-1">
                              {s.items.map((item, ii) => (
                                <li key={ii} className="flex items-start gap-2 text-gray-600 text-xs">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 6 ALASAN */}
        <section className="py-12 sm:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">6 Alasan Memilih Domain .ID</h2>
              <p className="text-gray-500 text-xs sm:text-base">Berbagai keuntungan yang Anda dapatkan dengan membeli domain .ID melalui rekomendasi nativecode.id</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
              {[
                { title: 'Meningkatkan Kredibilitas', desc: 'Kami merekomendasikan domain .ID karena terbukti meningkatkan kredibilitas bisnis di mata konsumen Indonesia. Ekstensi lokal yang lebih dipercaya.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><circle cx="32" cy="32" r="18" stroke="#5BAAD0" strokeWidth="2.5" fill="none"/><ellipse cx="32" cy="32" rx="7" ry="18" stroke="#5BAAD0" strokeWidth="2" fill="none"/><line x1="14" y1="32" x2="50" y2="32" stroke="#5BAAD0" strokeWidth="2"/><line x1="16" y1="23" x2="48" y2="23" stroke="#5BAAD0" strokeWidth="1.5"/><line x1="16" y1="41" x2="48" y2="41" stroke="#5BAAD0" strokeWidth="1.5"/><circle cx="44" cy="20" r="8" fill="#FFF3E0"/><path d="M40 20l3 3 5-5" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { title: 'Harga Terjangkau', desc: 'Melalui rekomendasi nativecode.id, Anda bisa mendapatkan domain .MY.ID mulai Rp 9.900/tahun di DomaiNesia — partner resmi kami.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#FFF3E0"/><rect x="18" y="24" width="24" height="18" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="2"/><line x1="18" y1="31" x2="42" y2="31" stroke="#D17B36" strokeWidth="1.5"/><rect x="22" y="35" width="7" height="3" rx="1" fill="#D17B36"/><circle cx="44" cy="20" r="7" fill="#FFF3E0" stroke="#D17B36" strokeWidth="1.5"/><path d="M41 20h6M44 17v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/></svg> },
                { title: 'SEO Friendly', desc: 'Salah satu alasan kami merekomendasikan domain .ID adalah keunggulan SEO lokalnya — lebih mudah ditemukan konsumen Indonesia di Google.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><path d="M32 18l13 5.5v9c0 6.5-5.5 12-13 14.5C24.5 44.5 19 39 19 32.5v-9L32 18z" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><circle cx="32" cy="31" r="4.5" stroke="#5BAAD0" strokeWidth="2" fill="none"/><line x1="35.5" y1="34.5" x2="38.5" y2="37.5" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/><circle cx="44" cy="44" r="7" fill="#FFF3E0"/><path d="M42 44h4M44 42v4" stroke="#D17B36" strokeWidth="1.8" strokeLinecap="round"/></svg> },
                { title: 'Support 24/7', desc: 'Konsultasikan kebutuhan domain Anda dengan tim nativecode.id sebelum membeli. Setelah pembelian, DomaiNesia siap memberikan dukungan teknis 24/7.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><path d="M20 34v-4a12 12 0 0 1 24 0v4" stroke="#5BAAD0" strokeWidth="2.5" fill="none"/><rect x="16" y="33" width="7" height="9" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><rect x="41" y="33" width="7" height="9" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><path d="M44 42v1a4 4 0 0 1-4 4h-4" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/><circle cx="36" cy="47" r="2" fill="#5BAAD0"/></svg> },
                { title: 'Banyak Pilihan Ekstensi', desc: 'Kami membantu Anda memilih ekstensi .ID yang paling sesuai — dari .MY.ID untuk personal, .CO.ID untuk bisnis, hingga .OR.ID untuk organisasi.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#F3F0FF"/><rect x="16" y="16" width="13" height="13" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="2"/><rect x="35" y="16" width="13" height="13" rx="2" fill="white" stroke="#7C6FCD" strokeWidth="2"/><rect x="16" y="35" width="13" height="13" rx="2" fill="white" stroke="#7C6FCD" strokeWidth="2"/><rect x="35" y="35" width="13" height="13" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="2"/><path d="M19 22.5l3 3 5-5" stroke="#7C6FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M38 41.5l3 3 5-5" stroke="#7C6FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { title: 'Aman & Privasi Terjaga', desc: 'Kami merekomendasikan domain .ID karena keamanannya — data whois tidak ditampilkan secara publik dan dilengkapi DNSSEC untuk proteksi ekstra.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#FFF3E0"/><path d="M32 14c0 0 12 6 12 18 0 6-3 10-7 13l-5 5-5-5c-4-3-7-7-7-13 0-12 12-18 12-18z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="2"/><circle cx="32" cy="30" r="4" fill="white" stroke="#D17B36" strokeWidth="2"/><path d="M25 48l-5 5M39 48l5 5" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/></svg> },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{item.svg}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KELEBIHAN MEMBELI */}
        <section className="py-12 sm:py-20 px-4 bg-[#F0F4FA]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-64 flex-shrink-0">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3">Kenapa Beli Domain .ID Lewat nativecode.id?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Kami bekerja sama dengan DomaiNesia sebagai partner domain terpercaya kami.</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { title: 'Harga Terjangkau', desc: 'Dapatkan domain .MY.ID mulai Rp 9.900/tahun melalui partner kami DomaiNesia. Tersedia berbagai promo dan penawaran terbaik.' },
                  { title: 'Aktivasi Cepat', desc: 'Setelah Anda membeli melalui rekomendasi kami, domain langsung diproses oleh DomaiNesia dan aktif dalam waktu kurang dari 5 menit.' },
                  { title: 'Konsultasi Gratis', desc: 'Tim nativecode.id siap membantu Anda memilih domain yang paling sesuai dengan kebutuhan bisnis Anda — gratis, tanpa biaya konsultasi!' },
                ].map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-2">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{c.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 py-4">
            <p className="flex-1 text-sm text-gray-500 text-center sm:text-left">Bingung pilih domain .ID yang tepat? Tanya dulu ke tim nativecode.id — gratis.</p>
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+domain+Indonesia.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#5D9C76] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4e8a66] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}