'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const domainList = [
  { ext: '.com',    harga: 'Rp 139.000', hargaCoret: 'Rp 209.000', desc: 'Ekstensi domain paling populer untuk segala kebutuhan', popular: true },
  { ext: '.net',    harga: 'Rp 219.000', hargaCoret: null,          desc: 'Jaringan tak terbatas untuk bisnis dan ide Anda' },
  { ext: '.org',    harga: 'Rp 129.900', hargaCoret: 'Rp 199.000', desc: 'Cocok untuk organisasi, komunitas, dan non-profit' },
  { ext: '.xyz',    harga: 'Rp 29.900',  hargaCoret: 'Rp 169.000', desc: 'Domain modern dan trendi untuk brand masa kini' },
  { ext: '.online', harga: 'Rp 25.900',  hargaCoret: 'Rp 639.000', desc: 'Domain yang merepresentasikan gaya hidup serba online' },
  { ext: '.site',   harga: 'Rp 25.900',  hargaCoret: 'Rp 669.000', desc: 'Solusi domain fleksibel untuk kehadiran digital' },
  { ext: '.store',  harga: 'Rp 65.000',  hargaCoret: 'Rp 949.000', desc: 'Menguatkan eksistensi sebagai toko modern di internet' },
  { ext: '.cloud',  harga: 'Rp 39.900',  hargaCoret: 'Rp 529.000', desc: 'Domain cerdas untuk bisnis modern di era sekarang' },
  { ext: '.info',   harga: 'Rp 349.000', hargaCoret: null,          desc: 'Ideal untuk website informasi dan portal berita' },
];

export default function DomainMurah() {
  const [keyword, setKeyword] = useState('');

  const handleCek = () => {
    if (!keyword.trim()) return;
    const domain = keyword.trim().toLowerCase().replace(/\s+/g, '');
    window.open(`https://www.domainesia.com/domain/?domain=${domain}`, '_blank');
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
  className="px-6 pt-24 pb-16 sm:pt-32 sm:pb-52"
  style={{ background: 'linear-gradient(135deg, #1a6eb5 0%, #2a9fd6 50%, #4ec3e0 100%)' }}
>
  <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-10">

    {/* Kiri: Teks + Search */}
    <div className="flex-1 text-center sm:text-left">
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 leading-snug">
        Cek & Beli <span className="text-[#ffd580]">Domain Murah</span><br className="hidden sm:block" /> untuk Website Anda
      </h1>
      <p className="text-blue-100 font-semibold mb-2 text-xs sm:text-sm">
        www.pixelcodedigital.id — powered by DomaiNesia
      </p>
      <p className="text-xs sm:text-base text-blue-100 mb-8">
        Temukan nama domain impian Anda dengan harga terjangkau. Cek ketersediaan sekarang!
      </p>
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
          className="bg-[#D17B36] text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-[#c26f2f] transition-colors text-sm whitespace-nowrap shadow-lg"
        >
          Cek Domain
        </button>
      </div>
    </div>

    {/* Kanan: Gambar */}
    <div className="flex-shrink-0 w-64 sm:w-80">
      <Image
        src="/images/hero/domain-murah.png"
        alt="Domain Illustration"
        width={320}
        height={320}
        className="object-contain drop-shadow-xl"
        priority
      />
    </div>

  </div>
</section>

        {/* ALASAN BELI */}
        <section className="py-12 sm:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Alasan Beli Domain Murah di DomaiNesia</h2>
              <p className="text-gray-500 text-xs sm:text-base">Saatnya Anda menikmati beragam kelebihan saat beli domain di DomaiNesia</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
              {[
                { title: 'Pilihan Domain Banyak', desc: 'Melalui kerjasama kami dengan DomaiNesia, Anda bisa mengakses lebih dari 50 ekstensi domain. Peluang mendapatkan nama domain terbaik masih terbuka lebar.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><circle cx="32" cy="32" r="14" stroke="#5BAAD0" strokeWidth="2.5" fill="none"/><ellipse cx="32" cy="32" rx="5.5" ry="14" stroke="#5BAAD0" strokeWidth="2" fill="none"/><line x1="18" y1="32" x2="46" y2="32" stroke="#5BAAD0" strokeWidth="2"/><line x1="19" y1="24" x2="45" y2="24" stroke="#5BAAD0" strokeWidth="1.5"/><line x1="19" y1="40" x2="45" y2="40" stroke="#5BAAD0" strokeWidth="1.5"/><circle cx="44" cy="20" r="8" fill="#FFF3E0"/><path d="M40 20l3 3 5-5" stroke="#D17B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { title: 'Beragam Promo Domain', desc: 'Kami bermitra dengan DomaiNesia yang dikenal sebagai pilihan tepat bagi Anda yang mencari domain dengan harga terjangkau. Tersedia pula beragam promo domain setiap bulannya.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#FFF3E0"/><rect x="18" y="24" width="24" height="18" rx="3" fill="#FFE0B2" stroke="#D17B36" strokeWidth="2"/><line x1="18" y1="31" x2="42" y2="31" stroke="#D17B36" strokeWidth="1.5"/><rect x="22" y="35" width="7" height="3" rx="1" fill="#D17B36"/><circle cx="44" cy="20" r="7" fill="#FFF3E0" stroke="#D17B36" strokeWidth="1.5"/><path d="M41 20h6M44 17v6" stroke="#D17B36" strokeWidth="1.5" strokeLinecap="round"/></svg> },
                { title: 'Provider Domain Terpercaya', desc: 'pixelcodedigital.id bekerja sama dengan DomaiNesia yang berdiri sejak 2009 dan telah dipercaya ratusan ribu pelanggan di Indonesia. DomaiNesia juga telah diakreditasi oleh PANDI sebagai registrar resmi.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><path d="M32 18l13 5.5v9c0 6.5-5.5 12-13 14.5C24.5 44.5 19 39 19 32.5v-9L32 18z" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><circle cx="32" cy="31" r="4.5" stroke="#5BAAD0" strokeWidth="2" fill="none"/><line x1="35.5" y1="34.5" x2="38.5" y2="37.5" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/><circle cx="44" cy="44" r="7" fill="#FFF3E0"/><path d="M42 44h4M44 42v4" stroke="#D17B36" strokeWidth="1.8" strokeLinecap="round"/></svg> },
                { title: 'Bantuan Layanan 24x7', desc: 'Tim Support DomaiNesia yang ahli dan handal selalu siap 24x7 membantu Anda menyelesaikan kendala terkait domain. Bisa melalui live chat, email, tiket bantuan, telepon, maupun WhatsApp.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#EAF4FB"/><path d="M20 34v-4a12 12 0 0 1 24 0v4" stroke="#5BAAD0" strokeWidth="2.5" fill="none"/><rect x="16" y="33" width="7" height="9" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><rect x="41" y="33" width="7" height="9" rx="2" fill="#C9E8F7" stroke="#5BAAD0" strokeWidth="2"/><path d="M44 42v1a4 4 0 0 1-4 4h-4" stroke="#5BAAD0" strokeWidth="2" strokeLinecap="round"/><circle cx="36" cy="47" r="2" fill="#5BAAD0"/></svg> },
                { title: 'Fitur Domain Lengkap', desc: 'Sebagai mitra DomaiNesia, pelanggan pixelcodedigital.id mendapatkan akses ke fitur unggulan seperti DNS Management, Domain Forwarding, dan Privacy Protection.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#F3F0FF"/><rect x="16" y="16" width="13" height="13" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="2"/><rect x="35" y="16" width="13" height="13" rx="2" fill="white" stroke="#7C6FCD" strokeWidth="2"/><rect x="16" y="35" width="13" height="13" rx="2" fill="white" stroke="#7C6FCD" strokeWidth="2"/><rect x="35" y="35" width="13" height="13" rx="2" fill="#DDD6FE" stroke="#7C6FCD" strokeWidth="2"/><path d="M19 22.5l3 3 5-5" stroke="#7C6FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M38 41.5l3 3 5-5" stroke="#7C6FCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { title: 'Aktivasi Domain Instan', desc: 'Cukup cek nama domain yang Anda inginkan, lakukan pemesanan dan pembayaran. Domain Anda akan aktif kurang dari 10 menit dan siap digunakan segera.', svg: <svg viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#FFF3E0"/><path d="M32 14c0 0 12 6 12 18 0 6-3 10-7 13l-5 5-5-5c-4-3-7-7-7-13 0-12 12-18 12-18z" fill="#FFE0B2" stroke="#D17B36" strokeWidth="2"/><circle cx="32" cy="30" r="4" fill="white" stroke="#D17B36" strokeWidth="2"/><path d="M25 48l-5 5M39 48l5 5" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/></svg> },
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

        {/* DAFTAR EKSTENSI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 w-full">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Domain Terlengkap & Populer</h2>
            <p className="text-gray-500 text-xs sm:text-base">Selalu ada pilihan nama domain terbaik. Daftarkan sekarang juga!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domainList.map((d, i) => (
              <div key={i} className={`relative bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-3 ${d.popular ? 'border-[#D17B36]' : 'border-gray-100'}`}>
                {d.popular && <span className="absolute top-4 right-4 bg-[#D17B36] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">POPULER</span>}
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-[#5D9C76] mb-1">{d.ext}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
                </div>
                <div>
                  {d.hargaCoret && <p className="text-gray-400 text-xs line-through">{d.hargaCoret}</p>}
                  <p className="text-lg font-bold text-gray-900">{d.harga}<span className="text-sm font-normal text-gray-400">/tahun</span></p>
                </div>
                <a href={`https://www.domainesia.com/domain/?domain=${keyword || 'namadomainanda'}&ext=${d.ext.replace('.', '')}`} target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#D17B36] text-[#D17B36] text-sm font-semibold text-center hover:bg-[#D17B36] hover:text-white transition-colors">
                  Beli Sekarang
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.domainesia.com/domain/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-6 py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm">
              Lihat Semua Ekstensi Domain
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 py-4">
            <p className="flex-1 text-sm text-gray-500 text-center sm:text-left">Butuh bantuan memilih domain yang tepat? Konsultasikan dengan tim kami.</p>
            <a href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+domain.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#D17B36] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}