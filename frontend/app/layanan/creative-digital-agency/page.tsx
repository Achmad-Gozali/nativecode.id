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

type DetailItem = { text: string; bold?: boolean; sub?: boolean };
type Paket = { harga: string; nama: string; badge: string | null; detail: DetailItem[] };

const paket: Paket[] = [
  { harga: 'Rp. 700.000', nama: 'Youtube Channel Business', badge: null, detail: [{ text: 'Nama YouTube' },{ text: 'Nama Pemilik' },{ text: 'Profil' },{ text: 'WA/Telp' },{ text: 'Free up 5 video' }] },
  { harga: 'Rp. 600.000', nama: 'Pembuatan FB Like', badge: null, detail: [{ text: 'Nama fb like' },{ text: 'hp bersih (belum pernah kena banned ads fb)' },{ text: 'Profil sekilas' },{ text: '30 foto' },{ text: 'NB: Bayar lunas dimuka (tidak bisa DP)', bold: true }] },
  { harga: 'Rp. 600.000', nama: 'Jasa Kelola IG/FB', badge: null, detail: [{ text: 'Fasilitas :', bold: true },{ text: 'Foto (disiapkan klien)' },{ text: 'Design (dibuatkan oleh kami)' },{ text: 'Caption dan #tagar' },{ text: 'Logo' },{ text: 'Mendapatkan 15 postingan' },{ text: 'Bonus 3 postingan' },{ text: 'Konsultasi dll.' },{ text: 'No. Hp klien yang dicantumkan' },{ text: 'Materi :', bold: true },{ text: 'Konten yang akan di upload' },{ text: 'User dan password ig/ fb klien' },{ text: 'Apabila klien ingin post lebih dari 15 x, cash 50.000,- / foto / 1x posting.' }] },
  { harga: 'Rp. 600.000', nama: 'Pembuatan Akun IG Bisnis', badge: null, detail: [{ text: 'Fitur :', bold: true },{ text: 'Akun email' },{ text: '10 postingan (konten)' },{ text: 'Yang perlu disediakan klien (syarat):', bold: true },{ text: 'Nomor telepon yang sudah terintegrasi dengan WA Bisnis' },{ text: 'Nama ig bisnis (nama username)' },{ text: 'Nama bisnis' },{ text: '10 foto untuk diposting' }] },
  { harga: 'Rp. 1.500.000', nama: 'Jasa Kelola Youtube', badge: null, detail: [{ text: 'Video' },{ text: 'Caption' },{ text: 'Upload 1x sehari (30 hari)' },{ text: 'Konsultasi dll.' },{ text: 'Materi :', bold: true },{ text: 'Video yang akan diupload' },{ text: 'User dan password YT klien' },{ text: 'Upload 1 Video 50rb/hari' },{ text: 'Apabila klien ingin sehari post lebih dari satu, ada tambahan biaya 000/Video' }] },
  { harga: 'Rp. 375.000', nama: 'Starter IG Followers', badge: null, detail: [{ text: '1.000 Followers pengguna aktif indonesia', bold: true },{ text: '100% Akun Aktif Indonesia' },{ text: '100% aman, garansi 30 hari selesai' },{ text: 'Proses tercepat 1- 2 hari kerja' },{ text: 'Proses Penambahan Followers Estimate: 7-15 Hari' }] },
  { harga: 'Rp. 395.000', nama: 'Bronze IG Followers', badge: null, detail: [{ text: '2.000 Followers pengguna aktif indonesia', bold: true },{ text: '100% Akun Aktif Indonesia' },{ text: '100% aman, garansi 30 hari selesai' },{ text: 'Proses tercepat 1- 2 hari kerja' },{ text: 'Proses Penambahan Followers Estimate: 7-15 Hari' }] },
  { harga: 'Rp. 800.000', nama: 'Silver IG Followers', badge: null, detail: [{ text: '5.000 Followers pengguna aktif indonesia', bold: true },{ text: '100% Akun Aktif Indonesia' },{ text: '100% aman, garansi 30 hari selesai' },{ text: 'Proses tercepat 1- 2 hari kerja' },{ text: 'Proses Penambahan Followers Estimate: 7-15 Hari' }] },
  { harga: 'Rp. 1.500.000', nama: 'Gold IG Followers', badge: null, detail: [{ text: '10.000 Followers pengguna aktif indonesia', bold: true },{ text: '100% Akun Aktif Indonesia' },{ text: '100% aman, garansi 30 hari selesai' },{ text: 'Proses tercepat 1- 2 hari kerja' },{ text: 'Proses Penambahan Followers Estimate: 7-15 Hari' }] },
  { harga: 'Rp.500.000', nama: 'Tiktok likes & views package', badge: 'Hemat Vibes', detail: [{ text: '500 likes + 500 views' },{ text: '100 likes/views per post (5 post) teratas' },{ text: 'untuk 1 akun (username tiktok)' },{ text: 'dimulai sesuai antrian 24-48 jam' },{ text: 'proses penambahan estimasi 7-15 hari' }] },
  { harga: 'Rp. 1.000.000', nama: 'Tiktok Prestige Package', badge: 'IntiMAX Vibes', detail: [{ text: 'Total 5000 likes+ 5000 views' },{ text: '1000 likes/view per post (5 post) teratas' },{ text: 'Untuk 1 akun (username tiktok)' },{ text: 'Dimulai sesuai antrian 24-48 jam' },{ text: 'Proses penambahan estimate 7-15 hari' }] },
  { harga: 'Rp. 600.000', nama: 'Silver Company Profile PDF', badge: null, detail: [{ text: 'PDF 6 halaman full design' },{ text: 'Revisi 1x revisi' },{ text: 'Free Logo' },{ text: 'Proses 1-2 hari jadi' },{ text: 'Materi :', bold: true },{ text: 'Nama/Brand Bisnis' },{ text: 'Profil sekilas' },{ text: '10 Galeri foto' },{ text: 'Alamat bisnis' },{ text: 'Kontak/sosial media' }] },
  { harga: 'Rp. 1.000.000', nama: 'Gold Company Profile PDF', badge: null, detail: [{ text: 'PDF 10-20 halaman full design' },{ text: 'Request warna/Costume' },{ text: 'Free Design Kartu Nama (tidak bisa request)' },{ text: 'Revisi 2x revisi' },{ text: 'Free Logo' },{ text: 'Proses 1-2 hari jadi' },{ text: 'Materi :', bold: true },{ text: 'Nama/Brand Bisnis' },{ text: 'Profil sekilas' },{ text: '20-30 Galeri foto' },{ text: 'Alamat bisnis' },{ text: 'Kontak/sosial media' }] },
  { harga: 'Rp. 3.000.000', nama: 'Platinum Company Profile PDF', badge: null, detail: [{ text: 'PDF 30-60 halaman full design' },{ text: 'Request warna/Costume' },{ text: 'Free Design Kartu Nama (tidak bisa request)' },{ text: 'Revisi 2x revisi' },{ text: 'Free Logo' },{ text: 'Proses 1-2 hari jadi' },{ text: 'Materi:', bold: true },{ text: 'Nama/Brand Bisnis' },{ text: 'Profil sekilas', sub: true },{ text: '40-60 Galeri foto', sub: true },{ text: 'Alamat bisnis', sub: true },{ text: 'Kontak/sosial media', sub: true }] },
  { harga: 'Rp. 100.000', nama: '1 Desain Banner', badge: null, detail: [{ text: '1x Revisi', bold: true },{ text: 'Materi design disediakan oleh klien:', bold: true },{ text: '3 foto' },{ text: 'Layanan' },{ text: 'Alamat' },{ text: 'Kontak wa/telp' },{ text: 'Promo' }] },
  { harga: 'Rp. 100.000', nama: '1 Desain Kartu Nama', badge: null, detail: [{ text: '1x Revisi', bold: true },{ text: 'Materi design disediakan oleh klien;', bold: true },{ text: 'Nama + jabatan' },{ text: '1 foto' },{ text: 'Layanan' },{ text: 'Alamat' },{ text: 'Kontak wa/telp' }] },
  { harga: 'Rp. 300.000', nama: '1 Desain Logo', badge: null, detail: [{ text: '2X Revisi' }] },
  { harga: 'Rp. 600.000', nama: 'Pembuatan Linktree', badge: null, detail: [{ text: 'Lunas Diawal', bold: true }] },
  { harga: 'Rp. 600.000', nama: 'Video Promosi Animasi + Suara', badge: null, detail: [{ text: '1 Pembuatan Video Promosi Animasi + Suara' }] },
  { harga: 'Rp. 1.500.000', nama: 'Video Promosi + MODEL', badge: null, detail: [{ text: '1 Pembuatan Video Promosi + MODEL' }] },
  { harga: 'Rp. 1.500.000', nama: 'Jasa pembuatan akun IG ads bisnis', badge: null, detail: [{ text: 'Materi:', bold: true },{ text: 'Email' },{ text: 'Akun ig' },{ text: '10 posting full desain' },{ text: 'Copy writing' },{ text: 'Akun ig integrasi wa bisnis (wajib wa bisnis)' },{ text: 'Akun ig integrasi landing page (jika SDH punya website)' }] },
  { harga: 'Rp. 1.500.000', nama: 'Jasa pembuatan Proposal Bisnis', badge: null, detail: [{ text: 'DP min. 1 jt', bold: true },{ text: 'Pertama kirimkan nama website nya,' },{ text: 'Produk yang mau ditawarkan dalam proposal' },{ text: 'Alamat' },{ text: 'Telp,wa, email' },{ text: 'Nama CV/legalitas' },{ text: 'Proses 1 minggu' }] },
  { harga: 'Rp. 1.500.000', nama: 'Jasa sertifikasi iklan bisnis ke google', badge: null, detail: [{ text: 'Berlaku untuk jenis usaha yang ingin mengiklankan usahanya yang berkaitan dengan Jasa Pembuatan Dokumen, legalitas usaha, Jasa pembuatan CV, Jasa pembuatan PT.' },{ text: 'Syarat dokumen yang harus dilengkapi: NIB/KTP/NPWP' },{ text: 'Biaya 1,5 juta sudah kami bantu pembuatan sertifikasinya ke pihak google,' },{ text: 'Untuk proses mendaftarkan bisnis verifikasi ke pse kominfo hanya bisa dilakukan oleh pihak yang bersangkutan atau oleh klien sendiri, iklan dijamin tayang 100%.' },{ text: 'Biaya 1,5 diluar biaya iklan ads' }] },
  { harga: 'Rp. 2.000.000', nama: 'Pembuatan Akun Webmail 5GB', badge: null, detail: [{ text: '1 akun webmail dengan kuota hosting 5gb  Rp. 2.500.000 diskon Rp. 500.000' },{ text: 'Cukup bayar Rp. 2.000.000,- per tahun' },{ text: 'Nb: harga tidak termasuk pembelian domain, jika klien belum memiliki website dari kami.' }] },
  { harga: 'Rp. 500.000', nama: 'Posting Status WhatsApp', badge: null, detail: [{ text: '1 Pembuatan Posting Status WhatsApp' }] },
];

const faq = [
  { q: 'Apa saja layanan yang termasuk dalam Creative Digital Agency nativecode.id?', a: 'Layanan kami mencakup pengelolaan sosial media (IG, FB, YouTube), pembuatan followers, pembuatan konten (banner, logo, kartu nama, video promosi), company profile PDF, pembuatan akun bisnis, proposal bisnis, hingga sertifikasi iklan Google. Semua dirancang untuk membantu bisnis Anda tampil lebih profesional dan menjangkau lebih banyak pelanggan.' },
  { q: 'Berapa lama proses desain banner, logo, atau kartu nama selesai?', a: 'Proses desain umumnya selesai dalam 1-2 hari kerja setelah semua materi dari klien diterima. Untuk Company Profile PDF, waktu pengerjaan menyesuaikan kompleksitas konten. Revisi sudah termasuk dalam paket (1-2x tergantung paket) dan dikerjakan dalam hari yang sama.' },
  { q: 'Materi apa yang perlu saya siapkan untuk layanan desain?', a: 'Tergantung layanan yang dipilih. Untuk desain banner: 3 foto, layanan, alamat, kontak, dan promo. Untuk kartu nama: nama, jabatan, 1 foto, layanan, alamat, dan kontak. Untuk Company Profile: nama/brand bisnis, profil singkat, galeri foto, alamat, dan kontak sosial media. Detail lengkap ada di masing-masing paket.' },
  { q: 'Apakah followers IG yang ditambahkan adalah akun nyata?', a: 'Ya, semua paket followers IG kami menggunakan 100% akun aktif Indonesia. Proses penambahan dilakukan secara bertahap dalam estimasi 7-15 hari dengan garansi 30 hari. Akun yang drop dalam periode garansi akan kami gantikan sesuai jumlah yang dijanjikan.' },
  { q: 'Apa itu Company Profile PDF dan apa manfaatnya?', a: 'Company Profile PDF adalah dokumen presentasi bisnis profesional dalam format PDF yang menampilkan profil perusahaan, layanan, galeri, dan kontak secara visual dan menarik. Berguna untuk pitching ke klien, presentasi bisnis, dikirim via email, atau dibagikan di sosial media. Tersedia dalam 3 paket: Silver (6 hal), Gold (10-20 hal), dan Platinum (30-60 hal).' },
  { q: 'Apakah bisa request warna dan style desain sesuai brand saya?', a: 'Bisa! Paket Gold dan Platinum Company Profile PDF sudah include request warna/costume sesuai brand Anda. Untuk desain lainnya seperti banner dan logo, Anda bisa menyampaikan referensi warna dan style yang diinginkan saat pertama kali menghubungi tim kami.' },
];

export default function CreativeDigitalAgency() {
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
          <h1 className="fade-up text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Creative Digital Agency</h1>
          <p className="fade-up stagger-1 text-gray-500 mb-3 text-sm">www.nativecode.id</p>
          <p className="fade-up stagger-2 text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <div className="fade-up stagger-3">
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Creative+Digital+Agency.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base">
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
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Solusi Desain & Layanan Kreatif untuk Meningkatkan Daya Tarik Bisnis Anda!</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                Wujudkan ide besar Anda bersama nativecode.id, mitra terpercaya dalam menghadirkan desain grafis memukau dan strategi marketing digital yang berdampak. Kami membantu bisnis Anda tampil menonjol dengan konten visual yang kuat, pesan yang tepat sasaran, dan strategi kreatif yang mendorong pertumbuhan nyata.
              </p>
              <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Creative+Digital+Agency.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base">
                <HeadphonesIcon size={16} />Konsultasi
              </a>
            </div>
            <div className="fade-right flex items-center justify-center">
              <div className="relative w-full max-w-lg" style={{ aspectRatio: '1/1' }}>
                <Image src="/images/hero/sosialmedia.png" alt="Creative Digital Agency Illustration" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* PAKET */}
        <section id="paket" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="fade-up text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Paket Layanan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
            {paket.map((p, i) => {
              const key = `${p.nama}-${i}`;
              const isOpen = openSet.has(key);
              return (
                <div key={key} className={`fade-up stagger-${(i % 4) + 1} bg-gradient-to-b from-[#e8f5e9] to-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden`}>
                  <div className="p-5 flex flex-col flex-1">
                    {p.badge && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="w-3 h-3 rounded-full bg-[#D17B36]" />
                        <span className="text-xs font-medium text-gray-500">{p.badge}</span>
                      </div>
                    )}
                    <p className="text-lg sm:text-xl font-bold text-[#5D9C76] mb-1">{p.harga}</p>
                    <h3 className="font-bold text-gray-900 text-sm mb-4 leading-tight flex-1">{p.nama}</h3>
                    <div className="border-t border-gray-100 pt-3 mb-3">
                      <button onClick={() => toggleDetail(key)} className="w-full text-sm text-gray-400 hover:text-[#5D9C76] transition-colors flex items-center justify-center gap-1">
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="space-y-1.5 mb-4">
                        {p.detail.map((d, di) => (
                          <li key={di} className={`text-sm leading-relaxed ${d.bold ? 'font-bold text-gray-800 mt-1' : d.sub ? 'flex items-start gap-2 text-gray-600 pl-4' : 'flex items-start gap-2 text-gray-600'}`}>
                            {!d.bold && <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />}
                            {d.text}
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
          <p className="fade-up stagger-1 text-center text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base">Semua yang perlu Anda tahu tentang layanan Creative Digital Agency kami</p>
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
            <p className="flex-1 text-sm text-gray-500 text-center sm:text-left">Masih ada pertanyaan? Konsultasikan langsung dengan tim kami.</p>
            <a href="https://wa.me/6282249244647?text=Halo+nativecode.id%2C+saya+ingin+konsultasi+mengenai+layanan+Creative+Digital+Agency.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}