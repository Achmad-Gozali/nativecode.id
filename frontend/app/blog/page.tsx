'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { posts } from '@/lib/posts';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const PER_HALAMAN = 6;

export default function Blog() {
  const [halaman, setHalaman] = useState(1);

  const totalHalaman = Math.ceil(posts.length / PER_HALAMAN);
  const start = (halaman - 1) * PER_HALAMAN;
  const postTampil = posts.slice(start, start + PER_HALAMAN);

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen pt-14 sm:pt-16" style={{ background: '#f5f0eb' }}>

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-36 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Blog</h1>
          <p className="text-gray-500 mb-3 text-sm">www.nativecode.id</p>
          <p className="text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a
            href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+nativecode.id.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base"
          >
            <HeadphonesIcon size={18} />
            Konsultasi
          </a>
        </section>  

        {/* POSTS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">

          {/* Header card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 sm:mb-10 shadow-sm">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Artikel untuk bantu bisnis Anda<br className="hidden sm:block" /> tampil lebih meyakinkan
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Kumpulan insight seputar website, SEO, dan strategi digital yang disusun agar mudah dipahami pemilik bisnis.
            </p>
            <p className="text-gray-400 text-sm">{posts.length} artikel tersedia</p>
          </div>

          {/* Grid artikel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {postTampil.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <span className="inline-block bg-[#f0ebe5] text-[#8B5E3C] text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start tracking-wide">
                  {post.kategori}
                </span>
                <p className="text-gray-400 text-xs mb-2">{post.tanggal}</p>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug mb-3 flex-1">
                  {post.judul}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center bg-[#D17B36] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c26f2f] transition-colors self-start"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-2">
            <button onClick={() => setHalaman(1)} disabled={halaman === 1} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors text-xs bg-white">«</button>
            <button onClick={() => setHalaman(p => Math.max(1, p - 1))} disabled={halaman === 1} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            {Array.from({ length: totalHalaman }, (_, i) => i + 1).map((num) => (
              <button key={num} onClick={() => setHalaman(num)} className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${halaman === num ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'}`}>{num}</button>
            ))}
            <button onClick={() => setHalaman(p => Math.min(totalHalaman, p + 1))} disabled={halaman === totalHalaman} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <button onClick={() => setHalaman(totalHalaman)} disabled={halaman === totalHalaman} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors text-xs bg-white">»</button>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}