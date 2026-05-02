'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import { useScrollAnim } from '@/hooks/use-scroll-anim';

const HeadphonesIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const paket = [
  { harga: 'Rp. 738.500', nama: 'Instagram/Facebook Business Ads', perpanjangan: 'Perpanjangan Rp. 538.500/Minggu', detail: ['Konsultasi Konten & Target Pasar', 'Free konten design dan copy writing', '7 hari tayang atau jangkauan 2.000 – 4.000', 'Saldo Ig/FB Ads (350rb)', 'Saldo harian (50rb)', 'Biaya pajak 11% (38.500)', 'Fee (150rb)', 'Akun register + setting (200rb)', 'Perpanjangan 538.500/minggu', 'Laporan iklan setiap minggu'] },
  { harga: 'Rp. 2.465.000', nama: 'Paket instagram/Facebook Ads 30 hari', perpanjangan: 'Perpanjangan Rp. 2.165.000/bulan', detail: ['Konsultasi Konten & Target Pasar', 'Free konten design dan copy writing', '30 hari tayang atau jangkauan 8.000 – 12.000', 'Saldo Ig/FB Ads (1,5jt)', 'Saldo harian (50rb)', 'Biaya pajak 11% (165.000)', 'Fee (500rb)', 'Akun register + setting (300rb)', 'Perpanjangan 2.165.000/bulan', 'Laporan iklan setiap minggu'] },
  { harga: 'Rp. 1.577.000', nama: 'Instagram/Facebook Business Ads', perpanjangan: 'Perpanjangan Rp. 1.277.000/minggu', detail: ['Konsultasi Konten & Target Pasar', 'Free konten design dan copy writing', '7 hari tayang atau jangkauan 4.000 – 8.000', 'Saldo Ig/FB Ads (700rb)', 'Saldo harian (100rb)', 'Biaya pajak 11% (77rb)', 'Fee (500rb)', 'Akun register + setting (300rb)', 'Perpanjangan 1.277.000/minggu', 'Laporan iklan setiap minggu'] },
  { harga: 'Rp. 4.830.000', nama: 'Instagram/Facebook Business Ads (PAKET GALAXY BULANAN)', perpanjangan: 'Perpanjangan Rp. 4.330.000/Bulan', detail: ['Saldo IG/FB Ads: 3jt', 'Saldo harian: 100 ribu', '30 hari tayang atau jangkauan 8.000 – 12.000', 'Konsultasi Konten & Target Pasar', 'Free konten design dan copy writing', 'Biaya pajak 11%: 330 ribu', 'Biaya Fee: 1,3 jt', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Laporan iklan setiap minggu', 'Biaya perpanjangan: 4.330.000,-/bulan (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 2.454.000', nama: 'TikTok Business Ads', perpanjangan: 'Perpanjangan Rp. 2.154.000/bulan', detail: ['Konsultasi Konten & Target Pasar', '7 Hari Tayang atau 3.000 – 10.000 Jangkauan Orang', 'Report dan Analisis', 'Biaya perhari (200rb)', 'Biaya pajak 11% (154rb)', 'Fee dan register (600rb)', 'Konten design video (300rb)', 'Perpanjangan 2.154.000', 'Laporan iklan setiap minggu'] },
  { harga: 'Rp. 1.577.000', nama: 'Youtube Ads', perpanjangan: 'Perpanjangan Rp. 1.277.000/minggu', detail: ['Konsultasi Konten & Target Pasar', 'Lama tayang 1 minggu', 'Saldo ads: 700 ribu', 'Biaya perhari: 100 ribu', 'Biaya pajak 11% (77rb)', 'Fee: 500 ribu', 'Akun register + setting: 300 ribu', 'Biaya perpanjangan 1.277.000/minggu', 'Laporan iklan setiap minggu', 'Video di siapkan oleh klien'] },
  { harga: 'Rp. 4.730.000', nama: 'Premium Youtube Ads', perpanjangan: 'Perpanjangan Rp. 4.330.000/Bulan', detail: ['Konsultasi Konten & Target Pasar', 'Lama tayang 30 hari', 'Saldo ads: 3 juta', 'Biaya perhari: 100 ribu', 'Biaya pajak 11% (330rb)', 'Biaya maintenance 1 juta', 'Pembuatan Akun register + setting: 400 rb 1x bayar', 'Biaya perpanjangan 4.330.000', 'Laporan iklan setiap minggu', 'Video disiapkan oleh klien'] },
];

const faq = [
  { q: 'Apa bedanya iklan sosial media dengan SEO atau Google Ads?', a: 'Iklan sosial media (Instagram, Facebook, TikTok, YouTube) menargetkan audiens berdasarkan demografi, minat, dan perilaku pengguna — cocok untuk meningkatkan brand awareness dan engagement. SEO dan Google Ads lebih fokus menjangkau orang yang sedang aktif mencari produk/jasa. Idealnya keduanya dikombinasikan untuk hasil maksimal.' },
  { q: 'Apakah konten iklan disiapkan oleh nativecode.id?', a: 'Ya! Semua paket sosial media ads kami sudah termasuk free konten design dan copy writing. Kami yang buatkan visual iklan dan teks yang menarik sesuai bisnis Anda. Untuk paket YouTube Ads, video perlu disiapkan oleh klien karena menyesuaikan kebutuhan bisnis masing-masing.' },
  { q: 'Berapa lama iklan mulai tayang setelah pembayaran?', a: 'Setelah pembayaran diterima dan semua materi iklan lengkap, iklan biasanya mulai proses setup dalam 1x24 jam. Estimasi iklan aktif tayang berkisar antara 24-48 jam. Kami akan konfirmasi langsung ke Anda begitu iklan sudah live.' },
  { q: 'Apa itu jangkauan dan apakah ada garansinya?', a: 'Jangkauan (reach) adalah jumlah orang unik yang melihat iklan Anda. Setiap paket memiliki estimasi jangkauan yang tertera — misalnya 2.000-4.000 orang untuk paket mingguan. Angka ini adalah estimasi berdasarkan performa rata-rata, bisa lebih tinggi tergantung relevansi konten dan target audiens yang dipilih.' },
  { q: 'Apakah saya mendapatkan laporan hasil iklan?', a: 'Ya, setiap paket sosial media ads sudah termasuk laporan iklan setiap minggu. Laporan mencakup data impresi, jangkauan, klik, dan performa iklan secara keseluruhan sehingga Anda bisa memantau perkembangan kampanye secara transparan.' },
  { q: 'Platform mana yang paling efektif untuk bisnis saya?', a: 'Tergantung target audiens bisnis Anda. Instagram & Facebook bagus untuk B2C, produk visual, dan UMKM. TikTok efektif untuk menjangkau audiens muda 18-35 tahun dengan konten video pendek. YouTube cocok untuk produk/jasa yang butuh penjelasan lebih panjang. Konsultasikan dengan tim kami untuk rekomendasi platform terbaik sesuai bisnis Anda.' },
];

export default function SosialMediaAds() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());
  useScrollAnim();

  const toggleDetail = (key: string) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleFaq = (i: number) => {
    setOpenFaq(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-36 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="fade-up text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Sosial Media Ads</h1>
          <p className="fade-up stagger-1 text-gray-500 mb-3 text-sm">www.nativecode.id</p>
          <p className="fade-up stagger-2 text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan <span className="text-[#D17B36] font-semibold">Website Profesional</span> dan <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <div className="fade-up stagger-3">
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Sosial+Media+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base">
              <HeadphonesIcon size={18} />Konsultasi
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="fade-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                <span className="text-[#D17B36]">nativecode</span><span className="text-[#5D9C76]">.id</span>
              </h2>
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Raih Lebih Banyak Pelanggan lewat Iklan Sosial Media yang Tepat Sasaran!</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Percayakan pada nativecode.id untuk mengelola iklan Anda di Facebook, Instagram, dan platform lainnya. Kami merancang kampanye yang kreatif, relevan, dan efektif untuk menarik perhatian audiens yang tepat.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Sosial+Media+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base">
                  <HeadphonesIcon size={16} />Konsultasi
                </a>
                <a href="#paket" className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="fade-right flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-lg" style={{ aspectRatio: '1/1' }}>
                <Image src="/images/hero/sosmed1.png" alt="Sosial Media Ads" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* PAKET */}
        <section id="paket" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket Sosial Media Ads</h2>
          <p className="fade-up stagger-1 text-center font-semibold text-gray-700 mb-2 text-sm sm:text-base">Tingkatkan Jangkauan & Penjualan Bisnis Anda!</p>
          <p className="fade-up stagger-2 text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base px-2">
            Kami menghadirkan berbagai paket iklan sosial media yang dirancang khusus untuk membantu bisnis Anda menarik audiens yang tepat dan mencapai hasil maksimal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
            {paket.map((p, i) => {
              const key = `${i}`;
              const isOpen = openSet.has(key);
              return (
                <div key={key} className={`fade-up stagger-${(i % 3) + 1} bg-gradient-to-b from-[#e8f5e9] to-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col`}>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-[#D17B36]" />
                      <span className="text-sm font-medium text-gray-500">Best Seller</span>
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-[#5D9C76] mb-1">{p.harga}</p>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{p.nama}</h3>
                    <p className="text-xs text-gray-400 mb-4">{p.perpanjangan}</p>
                    <div className="border-t border-gray-100 pt-3 mb-3">
                      <button onClick={() => toggleDetail(key)} className="w-full text-sm text-gray-400 hover:text-[#5D9C76] transition-colors flex items-center justify-center gap-1">
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="space-y-2 mb-4">
                        {p.detail.map((d, di) => (
                          <li key={di} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />{d}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button className="w-full py-2.5 rounded-full border border-[#D17B36] text-[#D17B36] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#D17B36] hover:text-white transition-colors mt-auto">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 pb-14 sm:pb-20 w-full">
          <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Pertanyaan yang Sering Diajukan</h2>
          <p className="fade-up stagger-1 text-center text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base">Semua yang perlu Anda tahu tentang layanan Sosial Media Ads kami</p>
          <div className="space-y-3">
            {faq.map((item, i) => {
              const isOpen = openFaq.has(i);
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <button onClick={() => toggleFaq(i)} className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">{item.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#5D9C76] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5">
                      <div className="w-full h-px bg-gray-100 mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 sm:px-6 py-4">
            <p className="flex-1 text-sm text-gray-500 text-center sm:text-left">Masih ada pertanyaan? Konsultasikan langsung dengan tim kami.</p>
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Sosial+Media+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}