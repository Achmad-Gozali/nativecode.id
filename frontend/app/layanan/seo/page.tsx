'use client';
import { useState } from 'react';
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

const paketSEO = [
  {
    nama: 'SEO Bergaransi', sub: 'Website dari nativecode.id', harga: '600K', satuan: '/Bulan', warna: 'from-[#e8f5e9] to-white',
    fitur: ['SEO website bahasa indonesia yang dibuat di PT. nativecode.id Rp. 600.000,- per bulan (Kontrak SEO Minimal 1 Tahun)', 'SEO website bahasa inggris yang dibuat di PT. nativecode.id Rp. 1.200.000,- per bulan (kontrak SEO minimal 1 tahun)'],
    detail: { deskripsi: 'SEO nativecode.id, menampilkan keyword / kata kunci pencarian segera tampil di Google & sudah terbukti efektif demi kesuksesan bisnis klien.', poin: ['Membangun website dengan 5 macam keyword / kata kunci sesuai target pasar.', 'SEO Bergaransi dibayar 600rb/bln.', 'Jika SEO sudah muncul di Google, dan klien tidak membayar biaya SEO, maka sebagai kompensasi, website akan kami nonaktifkan sementara, dan akan bisa tayang kembali jika sudah melakukan pembayaran SEO sesuai kesepakatan bersama.', 'SEO bergaransi, agar tetap stabil di pencarian Google.', 'Mendapatkan kata kunci bonus.', 'Mendapatkan laporan resmi / tool premium (premium Rank Tracker untuk traffic SEO peringkat website Klien SEO Kami). Rank Tracker adalah tool SEO Online berbayar untuk Tautan, Kata Kunci, yang bersih, valid dan mudah digunakan serta cepat dan akurat.'], isFitur: false },
  },
  {
    nama: 'SEO', sub: 'Website Luar/Bukan Website nativecode.id', harga: '950K', satuan: '/Bulan', warna: 'from-[#fffbe6] to-white',
    fitur: ['SEO Website luar bahasa indonesia Rp. 950.000,- per bulan', 'SEO Website luar bahasa inggris Rp. 2.200.000,- per bulan'],
    detail: { deskripsi: 'SEO nativecode.id, menampilkan keyword / kata kunci pencarian segera tampil di Google & sudah terbukti efektif demi kesuksesan bisnis klien.', poin: ['Membangun website dengan 5 macam keyword / kata kunci sesuai target pasar.', 'SEO dibayar 950rb/bln.', 'Jika SEO sudah muncul di Google, dan klien tidak membayar biaya SEO, maka sebagai kompensasi, website akan kami nonaktifkan sementara, dan akan bisa tayang kembali jika sudah melakukan pembayaran SEO sesuai kesepakatan bersama.', 'SEO agar tetap stabil di pencarian Google.', 'Mendapatkan kata kunci bonus.', 'Mendapatkan laporan resmi / tool premium (premium Rank Tracker untuk traffic SEO peringkat website Klien SEO Kami). Rank Tracker adalah tool SEO Online berbayar untuk Tautan, Kata Kunci, yang bersih, valid dan mudah digunakan serta cepat dan akurat.'], isFitur: false },
  },
  {
    nama: 'Beli Artikel', sub: 'Original SEO Friendly', harga: '300K', satuan: '', warna: 'from-[#fffbe6] to-white', italic: true,
    fitur: ['Tingkatkan Traffic Website Anda', 'Rp 300.000 (2 artikel Bahasa Indonesia)', 'Rp 600.000 (2 artikel Bahasa Inggris)'],
    detail: { deskripsi: null, poin: ['Konsultasi konten & target pasar', 'Analisis target SEO dan kata kunci', '1 artikel original terdapat 500–700 kata', 'Free post dan 1 image dalam sekali post', 'Hemat tanpa harus berlangganan SEO'], isFitur: true },
  },
];

const faq = [
  { q: 'Apa itu SEO dan kenapa penting untuk bisnis saya?', a: 'SEO (Search Engine Optimization) adalah proses mengoptimalkan website agar muncul di posisi teratas hasil pencarian Google secara organik (tanpa bayar per klik). Dengan SEO, bisnis Anda bisa ditemukan oleh calon pelanggan yang sedang aktif mencari produk atau jasa Anda — menghasilkan traffic berkualitas tinggi secara konsisten dan jangka panjang.' },
  { q: 'Berapa lama hasil SEO mulai terlihat?', a: 'SEO adalah investasi jangka panjang. Umumnya hasil awal mulai terlihat dalam 1–3 bulan, tergantung tingkat persaingan kata kunci dan kondisi website. Itulah kenapa kami menetapkan kontrak minimal 1 tahun — agar optimasi bisa dilakukan secara menyeluruh dan hasilnya stabil di pencarian Google.' },
  { q: 'Apa bedanya paket SEO Bergaransi dengan paket SEO biasa?', a: 'Paket SEO Bergaransi khusus untuk website yang dibuat melalui nativecode.id, dengan harga lebih terjangkau karena kami sudah familiar dengan struktur websitenya. Paket SEO biasa (950K) berlaku untuk website luar atau website yang tidak dibuat oleh nativecode.id. Keduanya mendapatkan layanan optimasi yang sama berkualitasnya.' },
  { q: 'Apa yang terjadi jika saya berhenti membayar di tengah kontrak?', a: 'Jika pembayaran tidak dilanjutkan, layanan optimasi (SEO) akan kami hentikan. Website akan tetap aktif, namun kami tidak bertanggung jawab atas penurunan peringkat atau trafik karena tidak adanya pemeliharaan rutin.' },
  { q: 'Berapa banyak kata kunci yang dioptimasi?', a: 'Setiap paket SEO mencakup optimasi untuk 5 macam keyword/kata kunci utama sesuai target pasar bisnis Anda, ditambah kata kunci bonus. Pemilihan keyword dilakukan melalui riset mendalam untuk memastikan kata kunci yang dipilih memiliki volume pencarian tinggi dan relevan dengan bisnis Anda.' },
  { q: 'Apakah saya mendapatkan laporan perkembangan SEO?', a: 'Ya! Setiap klien mendapatkan laporan resmi menggunakan tool premium Rank Tracker — tools SEO berbayar yang melacak peringkat website, traffic, dan performa kata kunci secara akurat. Laporan ini diberikan secara berkala agar Anda bisa memantau perkembangan SEO website Anda secara transparan.' },
];

export default function SEOBergaransi() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());
  useScrollAnim();

  const toggleDetail = (key: string) => {
    setOpenSet(prev => { const next = new Set(prev); next.has(key) ? next.delete(key) : next.add(key); return next; });
  };
  const toggleFaq = (i: number) => {
    setOpenFaq(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });
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
          <h1 className="fade-up text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Optimasi SEO Bergaransi</h1>
          <p className="fade-up stagger-1 text-gray-500 mb-3 text-sm">www.nativecode.id</p>
          <p className="fade-up stagger-2 text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan <span className="text-[#D17B36] font-semibold">Website Profesional</span> dan <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <div className="fade-up stagger-3">
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+SEO+Bergaransi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base">
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
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Tingkatkan Peringkat Website Anda dan Raih Lebih Banyak Pelanggan!</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Di nativecode.id, kami membantu bisnis Anda tampil di halaman teratas Google dengan strategi SEO yang terbukti efektif. Dengan teknik terbaru dan optimasi menyeluruh, website Anda akan lebih mudah ditemukan, dikunjungi, dan menghasilkan konversi nyata.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+SEO+Bergaransi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base">
                  <HeadphonesIcon size={16} />Konsultasi
                </a>
                <a href="#paket" className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="fade-right hidden lg:flex items-center justify-center">
              <img src="/images/hero/tangan.png" alt="SEO Bergaransi nativecode.id" className="w-full max-w-sm lg:max-w-lg object-contain" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }} />
            </div>
          </div>
        </section>

        {/* PAKET SEO */}
        <section id="paket" className="py-10 sm:py-20 px-4 pb-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket SEO Bergaransi</h2>
            <p className="fade-up stagger-1 text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base px-2">
              Tingkatkan peringkat bisnis Anda dan <strong>muncul di halaman pertama Google</strong> bersama nativecode.id
            </p>
            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#fff8f0] rounded-3xl p-4 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
                {paketSEO.map((p, i) => {
                  const key = `${i}`;
                  const isOpen = openSet.has(key);
                  return (
                    <div key={key} className={`fade-up stagger-${i + 1} bg-gradient-to-b ${p.warna} rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden`}>
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#5D9C76] text-center mb-1">{p.nama}</h3>
                        <p className="text-xs text-gray-400 text-center mb-4">{p.sub}</p>
                        <p className="text-xs text-gray-400 text-center">Start From</p>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-1">
                          {p.harga}{p.satuan && <span className="text-base font-normal text-gray-500"> {p.satuan}</span>}
                        </p>
                        <div className="bg-[#5D9C76] text-white text-center text-sm font-semibold py-2 rounded-lg my-4">Fitur Paket</div>
                        <ul className="space-y-2 mb-4">
                          {p.fitur.map((f, j) => (
                            <li key={j} className={`flex items-start gap-2 text-sm ${'italic' in p && p.italic && j === 0 ? 'font-bold italic text-gray-700' : 'text-gray-600'}`}>
                              {!('italic' in p && p.italic && j === 0) && <span className="mt-0.5 text-[#5D9C76] flex-shrink-0">•</span>}{f}
                            </li>
                          ))}
                        </ul>
                        <button onClick={() => toggleDetail(key)} className="w-full py-2 text-sm text-gray-400 border border-gray-200 rounded-full hover:border-[#5D9C76] hover:text-[#5D9C76] transition-colors mb-3 flex items-center justify-center gap-1">
                          {isOpen ? 'Sembunyikan' : (p.nama === 'Beli Artikel' ? 'Fitur' : 'Lihat Detail')}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                        </button>
                        {isOpen && (
                          <div className="mb-4 border border-gray-100 rounded-xl p-4 bg-white text-sm text-gray-600 leading-relaxed">
                            {p.detail.deskripsi && <p className="mb-3 text-gray-500">{p.detail.deskripsi}</p>}
                            {p.detail.isFitur ? (
                              <ul className="space-y-2">{p.detail.poin.map((poin, idx) => (<li key={idx} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />{poin}</li>))}</ul>
                            ) : (
                              <ol className="space-y-2 list-decimal list-inside">{p.detail.poin.map((poin, idx) => (<li key={idx}>{poin}</li>))}</ol>
                            )}
                          </div>
                        )}
                        <button className="w-full py-2.5 rounded-full border border-[#D17B36] text-[#D17B36] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#D17B36] hover:text-white transition-colors">
                          Call Us<HeadphonesIcon size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 pb-14 sm:pb-20 w-full">
          <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Pertanyaan yang Sering Diajukan</h2>
          <p className="fade-up stagger-1 text-center text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base">Semua yang perlu Anda tahu tentang layanan SEO kami</p>
          <div className="space-y-3">
            {faq.map((item, i) => {
              const isOpen = openFaq.has(i);
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <button onClick={() => toggleFaq(i)} className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">{item.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#5D9C76] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
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
            <p className="flex-1 text-sm text-gray-500 text-center sm:text-left">Masih ada pertanyaan tentang SEO? Konsultasikan langsung dengan tim kami.</p>
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+SEO+Bergaransi.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}