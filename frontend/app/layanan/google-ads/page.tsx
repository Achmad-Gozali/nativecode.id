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

const paket = [
  { harga: 'Rp. 600.000', nama: 'Jasa Konsultasi Google Ads', perpanjangan: '', badge: 'Google Ads', detail: ['Fitur:', '2x konsultasi via google Meet/zoom meeting.', 'Pertemuan pertama 45 menit waktu konsultasi.', 'Pertemuan kedua 45 menit waktu konsultasi.', 'Persiapkan maksimal 5 pertanyaan setiap sesi pertemuan agar waktu zoom lebih efektif dan efisien.', '5 pertanyaan dikirimkan 2 jam sebelum jadwal meeting.', 'Note: Jika waktu konsultasi 45 menit sudah habis dan solusi belum selesai untuk menyelesaikan kasus, maka bisa dilanjutkan di jadwal meeting berikutnya.'] },
  { harga: 'Rp. 600.000', nama: 'Penyetingan Kampanye Akun Google Ads', perpanjangan: '', badge: null, detail: ['Benefit:', '1. Mengoptimalkan akun google ads.', '2. Seting penelusuran ads.', '3. Setting keyword, cpc dan saldo harian iklan.', '4. Memperbaiki judul teks dan deskripsi iklan.', '5. Target wilayah area dan jam penayangan iklan.', 'Materi: Akun klien (user dan password)'] },
  { harga: 'Rp. 738.500', nama: 'Paket ADS HEMAT MINGGUAN 50rb/hari', perpanjangan: 'Perpanjangan Rp. 538.500/minggu', badge: null, detail: ['Saldo iklan Ads: 350 ribu', 'Biaya perhari: 50 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist kata kunci', 'Free konsultasi', 'Biaya pajak 11%: 38.500', 'Biaya Fee: 150 ribu', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 538.500,-/minggu (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 1.000.000', nama: 'Ecount Google Ads Business', perpanjangan: '', badge: null, detail: ['Akun Google Ads maintenance sendiri', 'Setting Konten & Target Pasar', 'Free Analisis Keyword', 'Biaya Ads transfer secara mandiri ke rek PT Google Indonesia', 'Materi:', 'Pengisian dalam pembuatan Akun Google Ads', 'Foto KTP: terlampir', 'Foto NPWP: terlampir', 'Nama Pemilik Akun Ads', 'Nama Web', 'Alamat Lengkap beserta Kode Pos', 'NIB/SIUP', 'hp yg belum pernah di pakai untuk kebutuhan iklan google.'] },
  { harga: 'Rp. 1.500.000', nama: 'Pemasangan Tracking Konversi Akun Google Ads', perpanjangan: '', badge: null, detail: ['Pemasangan tracking konversi meliputi menghubungkan Google TAG manager ke akun Google Ads yang menjalankan sebuah iklan dan mengintegrasikan ke dashboard website sehingga nantinya iklan hanya ditayangkan untuk pengguna-pengguna yang meningkatkan nilai jual atau konversi tinggi.'] },
  { harga: 'Rp. 1.500.000', nama: 'Jasa Maintenance Google Ads', perpanjangan: '', badge: null, detail: ['Meningkatkan skor kualitas iklan', 'Menstabilkan kata kunci', 'Memperbaiki seting penayangan', 'Memastikan target audience.', 'Setting akun cover lokasi.', 'Memperbaiki harga lelang cpa dan anggaran.', 'Mengecek penelusuran keyword.', 'Membantu memberikan laporan dan deskripsi ke klien agar paham.', 'Membantu seting anggaran iklan sesuai harga lelang.', 'Harga 1,5jt bukan pekerjaan 1 bulan, namun target jasa bersedia menyelesaikan fitur-fitur di atas.', 'Nb: jika, klien menginginkan maintenance untuk satu bulan pekerjaan biaya minimal UMR berdasarkan kota atau lokasi bisnis klien.'] },
  { harga: 'Rp. 1.577.000', nama: 'Paket GALAXY MINGGUAN 100rb/hari', perpanjangan: 'Perpanjangan Rp. 1.077.000/Minggu', badge: null, detail: ['Saldo iklan Ads: 700rb', 'Biaya perhari: 100 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist keywords/kata kunci', 'Free konsultasi', 'Biaya pajak 11%: 77 ribu', 'Biaya Fee: 300 ribu', 'Biaya pembuatan akun khusus VVIP: 300rb (iklan Anda tidak bergabung dengan iklan lain, misal pemain iklan lainnya melakukan kecurangan tdk berimbas dengan akun iklan Anda.)', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 1.077.000,-/minggu (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 1.954.000', nama: 'Paket GALAXY MINGGUAN 200rb/hari', perpanjangan: 'Perpanjangan Rp. 1.954.000/minggu', badge: null, detail: ['Saldo iklan Ads: 1.400.000,-', 'Biaya perhari: 200 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist keywords/kata kunci', 'Free konsultasi jam: 7:30 – 16:30', 'Biaya pajak 11%: 154 ribu', 'Biaya Fee: 400 ribu', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi: 200 ribu (1x bayar saja)', 'Biaya perpanjangan: 1.954.000,-/bulan (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 2.442.500', nama: 'Paket GALAXY MINGGUAN 250rb/hari', perpanjangan: 'Perpanjangan Rp. 2.442.500/Minggu', badge: null, detail: ['Saldo iklan Ads: 1.750.000,-', 'Biaya perhari: 250 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist keywords/kata kunci', 'Free konsultasi jam: 7:30 – 16:30', 'Biaya pajak 11%: Rp192.500', 'Biaya Fee: 500 ribu', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi: 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 2.442.500,-/bulan (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 2.465.000', nama: 'Paket ADS HEMAT BULANAN 50rb/hari', perpanjangan: 'Perpanjangan Rp. 2.165.000/Bulan', badge: null, detail: ['Saldo iklan Ads: 1,5 juta', 'Biaya pajak 11%: Rp165 ribu', 'Biaya per hari: Rp50 ribu', 'Lama tayang iklan google: 30 hari', 'Free analis kata kunci', 'Free konsultasi', 'Biaya fee: Rp500 ribu', 'Biaya registrasi: Rp300 ribu (1x bayar saja)', 'Biaya perpanjangan: 2.165.000/bulan (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 2.931.000', nama: 'Paket GALAXY MINGGUAN (CUSTOM)', perpanjangan: 'Perpanjangan Rp. 2.931.000/Bulan', badge: null, detail: ['Saldo iklan Ads: Rp 2.100.000,-', 'Biaya perhari: 300 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist kata kunci', 'Free konsultasi', 'Biaya pajak 11%: Rp 231.000,-', 'Biaya Fee: Rp 600.000,-', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 2.931.000,-/minggu (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 3.908.000', nama: 'Paket GALAXY MINGGUAN 400rb/hari', perpanjangan: 'Perpanjangan Rp. 3.908.000/minggu', badge: null, detail: ['Saldo iklan Ads: 2,800,000', 'Biaya perhari: 400 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist kata kunci', 'Free konsultasi', 'Biaya pajak 11%: 308 ribu', 'Biaya Fee: 800 ribu', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 3.908.000,-/minggu (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 4.330.000', nama: 'Paket GALAXY BULANAN 100rb/hari', perpanjangan: 'Perpanjangan Rp. 4.330.000/bulan', badge: null, detail: ['Saldo iklan Ads: 3jt', 'Biaya perhari: 100 ribu', 'Lama tayang Iklan Google: 30 hari', 'Free analist keywords/kata kunci', 'Free konsultasi', 'Biaya pajak 11%: 330 ribu', 'Biaya Fee: 1 jt', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 4.330.000,-/bulan (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 4.785.000', nama: 'Paket GALAXY MINGGUAN 500rb/hari', perpanjangan: 'Perpanjangan Rp. 4.785.000/Bulan', badge: null, detail: ['Saldo iklan Ads: 3.500.000', 'Biaya perhari: 500 ribu', 'Lama tayang Iklan Google: 7 hari', 'Free analist keywords/kata kunci', 'Free konsultasi jam: 7:30 – 16:30', 'Biaya pajak 11%: 385.000', 'Fee 7 day maintenance and monitoring Ads: 900.000', 'Biaya layanan khusus VVIP: 300rb', 'Biaya registrasi: 200 ribu (1X bayar saja)', 'Biaya perpanjangan Rp4.785.000 (biaya saldo google 3,5jt+pajak 385rb+fee 900rb) poin 1,5'] },
  { harga: 'Rp. 6.120.000', nama: 'Paket GALAXY BULANAN 150rb/hari', perpanjangan: 'Perpanjangan Rp. 6.120.000/Bulan', badge: null, detail: ['Saldo iklan Ads: 4,5jt', 'Biaya perhari: 150 ribu', 'Lama tayang Iklan Google: 30 hari', 'Free analist keywords/kata kunci', 'Free konsultasi', 'Biaya pajak ke google 11%: 495 ribu', 'Biaya Fee: Rp1.125.000,-', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 6.120.000,-/minggu (sudah termasuk pajak 11%)'] },
  { harga: 'Rp. 8.810.000', nama: 'Paket GALAXY BULANAN 200rb/hari', perpanjangan: 'Perpanjangan Rp. 8.810.000/bulan', badge: null, detail: ['Saldo iklan Ads: 6.000.000', 'Biaya perhari: 200 ribu', 'Lama tayang Iklan Google: 30 hari', 'Free analist keywords/kata kunci', 'Free konsultasi jam: 7:30 – 16:30', 'Biaya pajak 11%: 660rb', 'Fee 30day maintenance and monitoring Ads: 2.150.000', 'Biaya pembuatan akun khusus VVIP: 300rb', 'Biaya registrasi: 200 ribu (1X bayar saja)', 'Biaya perpanjangan: 8.810.000,-/bulan (sudah termasuk pajak 11%)'] },
];

const faq = [
  {
    q: 'Apa itu Google Ads dan kenapa bisnis saya perlu beriklan di sana?',
    a: 'Google Ads adalah platform iklan berbayar milik Google yang memungkinkan bisnis Anda muncul di halaman pertama hasil pencarian Google. Dengan Google Ads, iklan Anda hanya ditampilkan kepada orang-orang yang sedang aktif mencari produk atau jasa yang Anda tawarkan — sehingga lebih efektif dan tepat sasaran dibanding iklan konvensional.',
  },
  {
    q: 'Berapa lama iklan saya mulai tayang setelah pembayaran?',
    a: 'Estimasi waktu penayangan iklan di Google berkisar antara 8 hingga 24 jam setelah pendaftaran dan pembayaran berhasil diproses. Iklan akan kami setup dan aktifkan secepatnya setelah semua data dan materi iklan diterima.',
  },
  {
    q: 'Apakah saya perlu punya website untuk beriklan di Google Ads?',
    a: 'Ya, umumnya Google Ads memerlukan landing page atau website sebagai tujuan iklan. Jika Anda belum memiliki website, kami juga menyediakan jasa pembuatan website profesional yang bisa dikombinasikan dengan paket Google Ads untuk hasil yang lebih optimal.',
  },
  {
    q: 'Apa bedanya akun VVIP dengan akun biasa?',
    a: 'Akun VVIP adalah akun Google Ads khusus yang dibuat terpisah untuk bisnis Anda. Keuntungannya: iklan Anda tidak bergabung atau terpengaruh oleh akun lain, sehingga jika ada pemain iklan lain yang melakukan kecurangan (misal: klik ilegal), hal tersebut tidak akan berimbas ke akun iklan Anda.',
  },
  {
    q: 'Apakah ada garansi iklan saya muncul di halaman pertama Google?',
    a: 'Google Ads bekerja berdasarkan sistem lelang kata kunci. Kami mengoptimalkan kampanye Anda agar memiliki peluang tayang yang maksimal. Namun posisi tayang juga dipengaruhi oleh kompetitor dan anggaran iklan. Yang kami jamin adalah iklan Anda akan tayang dan mendapatkan impresi sesuai target yang telah disepakati.',
  },
  {
    q: 'Apa yang dimaksud dengan biaya pajak 11% dalam paket?',
    a: 'Google sebagai platform asing mengenakan PPN (Pajak Pertambahan Nilai) sebesar 11% atas setiap transaksi pembelian saldo iklan. Biaya pajak ini ditetapkan oleh pemerintah Indonesia dan langsung dipotong dari saldo iklan Anda. Kami mencantumkannya secara transparan dalam setiap paket agar tidak ada biaya tersembunyi.',
  },
];

export default function GoogleAds() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());

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

  const isHeader = (d: string) => d.endsWith(':') || ['Materi:', 'Fitur:', 'Benefit:'].includes(d);

  return (
    <>
      <Navigasi />
      <main className="min-h-screen bg-gray-50 pt-16">

        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-16 sm:py-36 px-4 overflow-hidden rounded-b-[2rem] sm:rounded-b-[3rem]"
          style={{ background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)' }}
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-3">Iklan Google Ads</h1>
          <p className="text-gray-500 mb-3 text-sm">www.pixelcodedigital.id</p>
          <p className="text-sm sm:text-lg text-gray-600 mb-8 px-2">
            Jasa Pembuatan{' '}
            <span className="text-[#D17B36] font-semibold">Website Profesional</span>{' '}
            dan{' '}
            <span className="text-[#5D9C76] font-semibold">SEO Bergaransi</span>
          </p>
          <a href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Iklan+Google+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors shadow-md text-sm sm:text-base">
            <HeadphonesIcon size={18} />Konsultasi
          </a>
        </section>

        {/* ABOUT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                <span className="text-[#D17B36]">pixelcode</span><span className="text-[#5D9C76]">.id</span>
              </h2>
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-4">Jangkau Calon Pelanggan Tepat Sasaran dengan Strategi Iklan yang Efektif!</p>
              <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">Bersama pixelcodedigital.id, kampanye Google Ads Anda dikelola secara profesional untuk meningkatkan visibilitas, mendatangkan traffic berkualitas, dan memaksimalkan hasil dengan anggaran efisien.</p>
              <p className="font-semibold text-gray-800 mb-8 text-sm sm:text-base">Iklan yang tepat, hasil yang nyata!</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Iklan+Google+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm sm:text-base">
                  <HeadphonesIcon size={16} />Konsultasi
                </a>
                <a href="#paket" className="inline-flex items-center gap-2 border border-[#5D9C76] text-[#5D9C76] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#5D9C76] hover:text-white transition-colors text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg" style={{ aspectRatio: '1/1' }}>
                <Image src="/images/hero/ads3.png" alt="Google Ads Illustration" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        {/* PAKET */}
        <section id="paket" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Paket Iklan Google Ads</h2>
          <p className="text-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base px-2">
            Iklan akan kami proses setelah pembayaran diterima. Estimasi waktu penayangan iklan di Google berkisar antara 8 hingga 24 jam setelah pendaftaran berhasil.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
            {paket.map((p, i) => {
              const key = `${i}`;
              const isOpen = openSet.has(key);
              return (
                <div key={key} className="bg-gradient-to-b from-[#e8f5e9] to-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                  <div className="p-5 flex flex-col flex-1">
                    {p.badge && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-5 h-5 rounded bg-[#D17B36] opacity-80 flex items-center justify-center">
                          <svg viewBox="0 0 20 20" className="w-3 h-3" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" fill="white" opacity="0.8"/><path d="M6 10h8M10 6v8" stroke="#D17B36" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{p.badge}</span>
                      </div>
                    )}
                    <p className="text-lg sm:text-xl font-bold text-[#5D9C76] mb-1">{p.harga}</p>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{p.nama}</h3>
                    {p.perpanjangan ? <p className="text-xs text-gray-400 mb-3">{p.perpanjangan}</p> : <div className="mb-3" />}
                    <div className="border-t border-gray-100 pt-3 mb-3">
                      <button onClick={() => toggleDetail(key)} className="w-full text-sm text-gray-400 hover:text-[#5D9C76] transition-colors flex items-center justify-center gap-1">
                        {isOpen ? 'Sembunyikan' : 'Lihat Detail'}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                    </div>
                    {isOpen && (
                      <ul className="space-y-1.5 mb-4">
                        {p.detail.map((d, di) => (
                          <li key={di} className={`text-sm leading-relaxed ${isHeader(d) ? 'font-bold text-gray-800 mt-1' : 'flex items-start gap-2 text-gray-600'}`}>
                            {!isHeader(d) && <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />}
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button className="w-full py-2.5 rounded-full border border-[#D17B36] text-[#D17B36] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#D17B36] hover:text-white transition-colors mt-auto">
                      Book Now<HeadphonesIcon size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-center text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base">Semua yang perlu Anda tahu tentang layanan Google Ads kami</p>

          <div className="space-y-3">
            {faq.map((item, i) => {
              const isOpen = openFaq.has(i);
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
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

          {/* CTA bawah FAQ */}
          <div className="mt-8 flex items-center gap-4 bg-white border border-gray-100 rounded-2xl shadow-sm px-5 sm:px-6 py-4">
            <p className="flex-1 text-sm text-gray-500">Masih ada pertanyaan? Konsultasikan langsung dengan tim kami.</p>
            <a href="https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+Iklan+Google+Ads.+Mohon+bantuannya+%F0%9F%99%8F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors whitespace-nowrap">
              <HeadphonesIcon size={14} />Tanya Sekarang
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}