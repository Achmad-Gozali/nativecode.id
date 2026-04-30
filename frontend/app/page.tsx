'use client';

import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { useEffect, useRef, useState } from 'react';

function Ticker() {
  const items = ['SOCIAL MEDIA ADS', 'GOOGLE ADS', 'WEBSITE DESIGN', 'SEO OPTIMIZATION', 'MOBILE APPS', 'CREATIVE AGENCY'];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="bg-[#4a9a66] py-4 overflow-hidden w-full">
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .ticker-inner { animation: ticker 22s linear infinite; }
        @keyframes floatBadge { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .float1 { animation: floatBadge 3s ease-in-out infinite; }
        .float2 { animation: floatBadge 3s ease-in-out infinite 1s; }
        .float3 { animation: floatBadge 3s ease-in-out infinite 2s; }
        @keyframes floatRocket { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .float-rocket { animation: floatRocket 3s ease-in-out infinite; }

        /* ===== SCROLL ANIMATIONS ===== */
        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .fade-right {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .fade-in {
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .fade-in.visible {
          opacity: 1;
        }

        /* stagger delay untuk child elements */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }

        /* ===== HERO ENTRANCE ANIMATION ===== */
        @keyframes heroSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-title {
          animation: heroSlideUp 0.7s ease forwards;
        }
        .hero-desc {
          animation: heroSlideUp 0.7s ease 0.15s forwards;
          opacity: 0;
        }
        .hero-btns {
          animation: heroSlideUp 0.7s ease 0.3s forwards;
          opacity: 0;
        }
        .hero-img {
          animation: heroSlideUp 0.8s ease 0.2s forwards;
          opacity: 0;
        }

        /* ===== FEATURE CARD HOVER ===== */
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(61, 139, 94, 0.12);
        }

        /* ===== PAKET CARD HOVER ===== */
        .paket-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .paket-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
        }

        /* ===== SERVICE LINK HOVER ===== */
        .service-link {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .service-link:hover {
          transform: translateX(4px);
          opacity: 0.92;
        }

        /* ===== STATS COUNTER CARD HOVER ===== */
        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }

        /* ===== BLOB PULSE ===== */
        @keyframes blobPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        .blob-pulse {
          animation: blobPulse 6s ease-in-out infinite;
        }
        .blob-pulse-2 {
          animation: blobPulse 8s ease-in-out infinite 2s;
        }
      `}</style>
      <div className="ticker-inner flex gap-16 whitespace-nowrap w-max">
        {repeated.map((t, i) => (
          <span key={i} className="text-white font-bold text-xl tracking-widest opacity-60">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Counter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = target / 60;
      const t = setInterval(() => {
        start += step;
        if (start >= target) { setVal(target); clearInterval(t); }
        else setVal(Math.floor(start));
      }, 16);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <div ref={ref} className="text-4xl sm:text-5xl font-bold text-gray-900">{val.toLocaleString()}</div>;
}

/* Hook scroll animation */
function useScrollAnim() {
  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-in');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const IconLogoDesign = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12l2.5 2.5L16 9"/>
  </svg>
);
const IconArticle = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);
const IconListing = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
  </svg>
);

/* FeatureCard tanpa expand/toggle */
function FeatureCard({ title, desc, icon }: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="feature-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: '#c96a1a' }}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2 text-base">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
    </div>
  );
}

const paketDetail: Record<string, { deskDetail: string; fiturDetail: string[] }> = {
  Silver: { deskDetail: 'Paket ini cocok untuk Anda yang baru memulai bisnis dan membutuhkan website sederhana, praktis, dan mudah diakses.', fiturDetail: ['Integrasi Sosial Media','Website SSL','Template WP Premium','User + Video Panduan Edit','Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Standar Kontak Form','Free Support','Bergaransi Selamanya'] },
  Gold: { deskDetail: 'Paket ini cocok untuk Anda yang ingin memiliki website dengan fitur lengkap seperti e-commerce, blog, dan fitur tambahan lainnya.', fiturDetail: ['Integrasi Media Sosial','Free Whatsapp/Telepon','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Free Banner dan Logo','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya'] },
  Diamond: { deskDetail: 'Paket desain website ini sangat cocok bagi Anda yang membutuhkan website sebagai profil bisnis yang berguna untuk meningkatkan kehadiran dan citra online perusahaan Anda.', fiturDetail: ['Integrasi Media Sosial','Free Whatsapp/Telepon','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Plugin Premium','Free Banner dan Logo','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya'] },
  Platinum: { deskDetail: 'Paket desain website ini cocok untuk Anda yang membutuhkan website dengan fitur khusus, desain menarik, dan tampilan unik sesuai kebutuhan bisnis Anda.', fiturDetail: ['Free Whatsapp/Telepon','Integrasi Media Sosial','Website SSL','Template WP Premium','Perpanjang Setiap Tahun','User dan Video Panduan Edit','Plugin Premium','Free Banner dan Logo','Free 1 Email Bisnis','Pemasangan Google Map','Respon Server Rata-Rata 5 Mili Detik','Bandwidth Unlimited','Statistic Kunjungan Website','Standar Kontak Form','Free Support','Garansi Selamanya','Integrasi Lapak Media'] },
};

const paketList = [
  { nama: 'Silver', medal: '/images/paket/silver.png', harga: '700K', perp: '500ribu/tahun', best: false, fitur: ['4 Menu','FREE Domain Web.id','Hosting 500 MB (30 foto kuota kerja)','Include Listing di nativecode.id'] },
  { nama: 'Gold', medal: '/images/paket/gold.png', harga: '1.6 Jt', perp: '600ribu/tahun', best: true, fitur: ['8 Menu','FREE Domain .com','Hosting 3 GB (70 foto kuota kerja)','Include Listing di nativecode.id'] },
  { nama: 'Diamond', medal: '/images/paket/diamond.png', harga: '2 Jt', perp: '1 Juta/tahun', best: false, fitur: ['10 Menu','FREE Domain .com/.co.id','Hosting 3 GB (90 foto kuota kerja)','Include Listing di nativecode.id'] },
  { nama: 'Platinum', medal: '/images/paket/platinum.png', harga: '3 Jt', perp: '1,5 Juta/tahun', best: false, fitur: ['15-20 Menu','FREE Domain .com, .co.id, .co, .id, .asia, .xyz','Hosting 5 GB (120 foto kuota kerja)','Include Listing di nativecode.id'] },
];

const featureList = [
  { title: 'Free Logo & Banner', desc: 'Desain logo dan banner kreatif yang memperkuat identitas bisnis Anda. Termasuk revisi hingga puas.', icon: <IconLogoDesign /> },
  { title: 'Free 3 Artikel', desc: 'Konten original & SEO-friendly oleh tim ahli untuk mendukung peringkat website Anda. 3 artikel 500-700 kata siap publish.', icon: <IconArticle /> },
  { title: 'Include Listing di nativecode.id', desc: 'Paket layanan nativecode.id include listing di nativecode.id tanpa biaya tambahan. Visibilitas ke ribuan pengunjung.', icon: <IconListing /> },
];

export default function Home() {
  const [openPaket, setOpenPaket] = useState<string | null>(null);
  const togglePaket = (nama: string) => setOpenPaket(prev => prev === nama ? null : nama);

  useScrollAnim();

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen font-sans">

        {/* ===================== HERO ===================== */}
        <section
          className="px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 min-h-screen flex items-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #f0faf4 0%, #fffdf8 60%, #fff8f0 100%)' }}
        >
          <div className="blob-pulse absolute rounded-full pointer-events-none" style={{ width: 360, height: 360, background: '#3d8b5e', opacity: 0.08, top: -100, right: '28%' }} />
          <div className="blob-pulse-2 absolute rounded-full pointer-events-none" style={{ width: 220, height: 220, background: '#c96a1a', opacity: 0.08, bottom: -60, left: '15%' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-8 relative z-10">
            <div className="flex-1 max-w-xl">
              <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5" style={{ color: '#1a2e22' }}>
                Jasa Pembuatan<br />
                <span style={{ color: '#3d8b5e' }}>Website Profesional</span>{' '}&amp;<br />
                <span style={{ color: '#c96a1a' }}>SEO Bergaransi</span>
              </h1>
              <p className="hero-desc text-gray-500 leading-relaxed mb-8 text-sm sm:text-base max-w-lg">
                Kami hadir untuk membantu bisnis Anda tampil lebih profesional, meningkatkan visibilitas di Google, dan meraih lebih banyak pelanggan.
              </p>
              <div className="hero-btns flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
                  style={{ background: '#3d8b5e' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                  Konsultasi Gratis
                </a>
                <a
                  href="/layanan/pembuatan-website"
                  className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-sm border-2 border-[#3d8b5e] text-[#3d8b5e] transition-colors hover:bg-[#3d8b5e] hover:text-white"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>
            <div className="hero-img flex-1 flex items-center justify-center lg:justify-end">
              <img
                src="/images/hero/hero-beranda.png"
                alt="nativecode.id tampil di berbagai device"
                className="w-full max-w-sm sm:max-w-md lg:max-w-xl object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </section>

        {/* Hero Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <p className="fade-up text-center text-gray-500 text-sm mb-2">Selamat Datang di nativecode.id</p>
          <h2 className="fade-up stagger-1 text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-14 px-2">
            Jasa Pembuatan <span style={{ color: '#3d8b5e' }}>Website Profesional</span> &amp; <span style={{ color: '#c96a1a' }}>SEO Bergaransi</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="fade-up stagger-2 stat-card bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 text-center">
              <Counter target={300} />
              <p className="text-gray-500 text-sm mt-2">Website yang telah kami bangun</p>
            </div>
            <div className="fade-in stagger-3 hidden lg:flex relative items-center justify-center" style={{ minHeight: '420px' }}>
              <div className="absolute w-72 h-72 rounded-full z-0" style={{ background: 'radial-gradient(circle, #c8e6c9 0%, #e8f5e9 55%, transparent 75%)' }} />
              <img
                src="/images/hero/hero-b.png"
                alt="nativecode.id developer"
                className="relative z-10 w-60 sm:w-64 object-contain"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.10))' }}
              />
              <div className="float1 absolute left-0 top-1/3 z-20 w-14 h-14 rounded-full shadow-lg flex items-center justify-center" style={{ background: '#3d8b5e' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="float2 absolute right-0 top-1/2 z-20 w-14 h-14 rounded-full shadow-lg flex items-center justify-center" style={{ background: '#3d8b5e' }}>
                <img src="https://cdn.simpleicons.org/wordpress/white" alt="WordPress" width="26" height="26" />
              </div>
              <div className="float1 absolute bottom-16 left-4 z-20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg" style={{ background: '#c96a1a' }}>Website Design</div>
              <div className="float2 absolute bottom-24 right-4 z-20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg" style={{ background: '#c96a1a' }}>SEO Optimization</div>
              <div className="float3 absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap" style={{ background: '#3d8b5e' }}>iOS/Android Apps</div>
            </div>
            <div className="fade-up stagger-4 stat-card bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 text-center">
              <Counter target={500} />
              <p className="text-gray-500 text-sm mt-2">Klien menggunakan layanan nativecode.id</p>
            </div>
          </div>
        </section>

        {/* About nativecode.id */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="fade-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#c96a1a' }}>nativecode.id</h3>
              <p className="font-bold text-gray-800 mb-4 sm:mb-6">Experience by the Best</p>
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <div className="w-8 h-0.5 rounded" style={{ background: '#c96a1a' }} />
                <div className="w-4 h-0.5 rounded" style={{ background: '#3d8b5e' }} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/hero/laptop.png" alt="nativecode.id" className="w-full max-w-sm object-contain" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.10))' }} />
              </div>
            </div>
            <div className="fade-right space-y-4 sm:space-y-5">
              <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                <strong className="text-gray-900">nativecode.id</strong> adalah <em>Creative Digital Agency</em> yang berfokus membantu bisnis membangun identitas dan pertumbuhan di dunia digital. Kami hadir sebagai mitra strategis untuk bisnis Anda — dari pembuatan website profesional, optimasi SEO, hingga kampanye digital yang terukur.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                Dengan tim yang berpengalaman dan pendekatan berbasis data, kami memastikan setiap solusi digital yang kami hadirkan benar-benar memberikan dampak nyata bagi pertumbuhan bisnis Anda. Lebih dari <strong>300 website</strong> telah kami bangun dan <strong>500+ klien</strong> telah mempercayakan bisnis mereka kepada kami.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                Kami tidak sekadar membuat website — kami membangun ekosistem digital yang berkelanjutan untuk bisnis Anda. Mulai dari desain yang menarik, performa yang cepat, hingga strategi pemasaran digital yang tepat sasaran.
              </p>
              <a href="/tentang-kami" className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full font-semibold transition-opacity hover:opacity-90 text-sm sm:text-base" style={{ background: '#3d8b5e' }}>
                Selengkapnya
              </a>
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <p className="fade-left text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                <strong>nativecode.id</strong> adalah platform marketplace dan direktori berbasis lokasi yang mempertemukan seller/mitra dan pembeli dalam satu ekosistem digital. Kami menghubungkan pelaku usaha lokal dengan pelanggan potensial secara efisien dan transparan, didukung teknologi modern yang mudah digunakan.
              </p>
              <p className="fade-right text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                <strong>nativecode.id</strong> berkomitmen menjadi leading local marketplace &amp; directory yang memberdayakan UMKM hingga perusahaan besar. Bergabunglah dengan ribuan mitra yang telah mempercayakan pertumbuhan bisnis mereka kepada ekosistem digital nativecode.id.
              </p>
            </div>
            <h3 className="fade-up text-lg sm:text-xl font-bold text-center text-gray-900 mt-8 mb-6">Statistik Listing nativecode.id</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[{ val: 700, label: 'Mitra' },{ val: 627, label: 'Produk' },{ val: 125, label: 'Kategori' },{ val: 150, label: 'Kota' }].map(({ val, label }, i) => (
                <div key={label} className={`fade-up stagger-${i + 1} stat-card bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-6 text-center`}>
                  <Counter target={val} />
                  <p className="text-gray-500 text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ticker />

        {/* Website section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="fade-left hidden lg:flex items-center justify-center">
              <img src="/images/hero/webdesain.png" alt="Web Design nativecode.id" className="w-full max-w-lg object-contain" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }} />
            </div>
            <div className="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Mau Buat Website?</h2>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">nativecode.id – Solusi jasa pembuatan website profesional di Indonesia</h3>
              <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">Kami menghadirkan website dengan desain menarik, mudah diakses, dan responsif di semua perangkat.</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">Dari website company profile, toko online, landing page, hingga aplikasi web — semua kami kerjakan dengan standar profesional dan proses yang transparan.</p>
              <a
                href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                style={{ background: '#c96a1a' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
                Konsultasi
              </a>
            </div>
          </div>
        </section>

        {/* Paket Website */}
        <section className="py-12 sm:py-20 px-4" style={{ background: 'linear-gradient(135deg, #f0faf3 0%, #fffdf8 50%, #fff8f0 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket Website</h2>
            <p className="fade-up stagger-1 text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">Konsultasikan dan pilih paket website Anda sekarang juga!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
              {paketList.map((p, idx) => {
                const isOpen = openPaket === p.nama;
                return (
                  <div key={p.nama} className={`fade-up stagger-${idx + 1} paket-card relative rounded-2xl border flex flex-col overflow-hidden bg-white ${p.best ? 'border-[#3d8b5e] shadow-2xl lg:scale-105' : 'border-gray-200 shadow-sm'}`}>
                    {p.best && <div className="text-white text-xs font-bold text-center py-1.5 tracking-wide" style={{ background: '#3d8b5e' }}>BEST SELLER !</div>}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="flex justify-center mb-3">
                        <img src={p.medal} alt={`${p.nama} package`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }} />
                      </div>
                      <p className="text-center font-bold text-gray-700 text-base sm:text-lg mb-3">{p.nama}</p>
                      <p className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: '#3d8b5e' }}>{p.harga}</p>
                      <p className="text-xs text-gray-400 mb-4">Perpanjangan {p.perp}</p>
                      <a
                        href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F"
                        target="_blank" rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-full border text-sm font-semibold flex items-center justify-center gap-2 mb-4 transition-colors ${p.best ? 'border-[#3d8b5e] text-[#3d8b5e] hover:bg-[#3d8b5e] hover:text-white' : 'border-[#c96a1a] text-[#c96a1a] hover:bg-[#c96a1a] hover:text-white'}`}
                      >
                        Book Now ✈
                      </a>
                      <div className="text-white text-center text-sm font-semibold py-2 rounded-lg mb-4" style={{ background: '#3d8b5e' }}>Fitur Paket</div>
                      <ul className="space-y-2 mb-4">
                        {p.fitur.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3d8b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => togglePaket(p.nama)}
                        className="w-full py-2 text-sm border rounded-full transition-colors flex items-center justify-center gap-2 hover:border-[#3d8b5e] hover:text-[#3d8b5e] border-gray-200 text-gray-400"
                      >
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                      {isOpen && (
                        <div className="pt-4 border-t border-gray-100 mt-4 pb-2">
                          <p className="text-sm text-gray-500 leading-relaxed mb-3">{paketDetail[p.nama].deskDetail}</p>
                          <ul className="space-y-1.5">
                            {paketDetail[p.nama].fiturDetail.map((f, fi) => (
                              <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#3d8b5e' }}>
                                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fitur Unggulan */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Fitur Unggulan</h2>
          <p className="fade-up stagger-1 text-center font-semibold text-gray-700 mb-2 text-sm sm:text-base">Dapatkan Semua Fitur Ini Secara Gratis!</p>
          <p className="fade-up stagger-2 text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">Inilah yang Anda dapatkan dari Jasa Pembuatan Website nativecode.id</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-24">
            {featureList.map((f, i) => (
              <div key={i} className={`fade-up stagger-${i + 1}`}>
                <FeatureCard {...f} />
              </div>
            ))}
          </div>

          {/* Server stats banner */}
          <div className="fade-up relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-10 float-rocket hidden sm:block">
              <img
                src="/images/hero/roket.png"
                alt="Roket"
                className="w-32 object-contain"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))' }}
              />
            </div>
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8" style={{ background: '#3d8b5e' }}>
              <div className="text-white">
                <p className="text-xl sm:text-2xl font-bold">Server Hosting Terbaik —</p>
                <p className="text-white opacity-80 text-base sm:text-lg mt-1">Kecepatan Maksimal, Performa Stabil!</p>
              </div>
              <div className="flex gap-8 sm:gap-12 text-white">
                <div className="text-center border-r border-white border-opacity-30 pr-8 sm:pr-12">
                  <p className="text-4xl sm:text-5xl font-bold">99,9%</p>
                  <p className="text-sm opacity-80 mt-1">Uptime</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold">4,9</p>
                  <p className="text-sm opacity-80 mt-1">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="fade-left hidden lg:flex items-center justify-center">
              <img src="/images/hero/other.png" alt="Tim nativecode.id" className="w-80 sm:w-96 object-contain" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }} />
            </div>
            <div className="fade-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Other Services</h2>
              <div className="space-y-3">
                {[
                  { title: 'Jasa SEO Optimization', desc: 'Naikkan peringkat website Anda di Google dengan strategi SEO aman, terukur, dan bergaransi hasil.', href: '/layanan/seo' },
                  { title: 'Jasa Sosial Media Ads', desc: 'Optimalkan iklan di Instagram, Facebook, dan TikTok untuk menjangkau audiens yang tepat.', href: '/layanan/sosial-media-ads' },
                  { title: 'Jasa Iklan Google Ads', desc: 'Tampilkan bisnis Anda di halaman pertama Google dengan strategi iklan yang efisien dan tepat sasaran.', href: '/layanan/google-ads' },
                  { title: 'Jasa Pembuatan Aplikasi', desc: 'Wujudkan ide digital Anda menjadi aplikasi berbasis web atau mobile yang fungsional.', href: '/layanan/pembuatan-aplikasi' },
                  { title: 'Jasa Creative Digital Agency', desc: 'Kami bantu kembangkan brand Anda melalui desain, konten, dan strategi digital yang kreatif.', href: '/layanan/creative-digital-agency' },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="service-link flex items-center justify-between text-white rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4" style={{ background: '#3d8b5e' }}>
                    <div className="flex-1 pr-4">
                      <p className="font-bold text-sm sm:text-base">{s.title}</p>
                      <p className="text-xs sm:text-sm opacity-80 mt-0.5">{s.desc}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3d8b5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="fade-up max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-4">
            <span className="flex-1 text-sm text-gray-400">Dapatkan Harga Spesial Sekarang</span>
            <a
              href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto text-center text-white px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: '#3d8b5e' }}
            >
              Klik Disini !!!
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}