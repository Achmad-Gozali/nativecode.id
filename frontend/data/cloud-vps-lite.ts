export type PaketVPS = {
  nama: string;
  harga: number;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  ip: string;
  rekomendasi: boolean;
  href: string;
};

export type KeunggulanItem = {
  title: string;
  desc: string;
};

export const paketVPSLite: PaketVPS[] = [
  {
    nama: 'Cloud VPS Lite 1GB',
    harga: 48000,
    cpu: '1 Core CPU',
    ram: '1 GB RAM',
    storage: '20 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwith',
    ip: 'Dedicated IP',
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps-lite/?aff=26885',
  },
  {
    nama: 'Cloud VPS Lite 2GB',
    harga: 100000,
    cpu: '2 Core CPU',
    ram: '2 GB RAM',
    storage: '30 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwith',
    ip: 'Dedicated IP',
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps-lite/?aff=26885',
  },
  {
    nama: 'Cloud VPS Lite 4GB',
    harga: 270000,
    cpu: '3 Core CPU',
    ram: '4 GB RAM',
    storage: '60 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwith',
    ip: 'Dedicated IP',
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps-lite/?aff=26885',
  },
  {
    nama: 'Cloud VPS Lite 8GB',
    harga: 645000,
    cpu: '4 Core CPU',
    ram: '8 GB RAM',
    storage: '100 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwith',
    ip: 'Dedicated IP',
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps-lite/?aff=26885',
  },
  {
    nama: 'Cloud VPS Lite 12GB',
    harga: 880000,
    cpu: '4 Core CPU',
    ram: '12 GB RAM',
    storage: '150 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwith',
    ip: 'Dedicated IP',
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps-lite/?aff=26885',
  },
];

export const keunggulanVPSLite: KeunggulanItem[] = [
  {
    title: 'Pengelolaan Mudah',
    desc: 'Deploy Cloud VPS dengan mudah. Saatnya kelola Cloud VPS lebih sederhana.',
  },
  {
    title: 'Deploy dan Scale Fleksibel',
    desc: 'Sesuaikan Cloud VPS dengan pilihan paket yang tersedia. Anda bisa resize kapan saja.',
  },
  {
    title: 'High Availability',
    desc: 'High-availability cluster didukung distributed storage dan SSD NVMe 2X replikasi data.',
  },
];

export const fiturVPSLite: KeunggulanItem[] = [
  {
    title: 'Harga Ekonomis & Transparan',
    desc: 'Mulai Rp48rb/bulan, bayar sesuai paket yang dipilih, tanpa biaya tersembunyi.',
  },
  {
    title: 'Dukungan Pelanggan 24/7',
    desc: 'Tim support DomaiNesia tersedia 24/7 dengan 100% tenaga manusia, bukan bot. Respon cepat, solusi tepat, dan bantuan personal kapan saja Anda butuhkan.',
  },
  {
    title: 'Proteksi Data RAID10',
    desc: 'Data disimpan dengan sistem RAID10 yang mereplikasi informasi secara ganda, sehingga lebih aman, stabil, dan tahan terhadap risiko kerusakan hardware server.',
  },
  {
    title: 'Unlimited Bandwidth & Jaringan Stabil',
    desc: 'Nikmati akses tanpa batasan kuota bandwidth dengan kecepatan jaringan hingga 1Gbps, cocok untuk website ramai pengunjung maupun aplikasi yang butuh stabilitas tinggi.',
  },
  {
    title: 'Virtualisasi KVM + Dedicated IP',
    desc: 'Server berjalan dengan isolasi penuh menggunakan KVM untuk performa stabil, plus Dedicated IP yang memastikan koneksi lebih aman dan akses lebih terpercaya.',
  },
  {
    title: 'Enterprise-Grade Hardware',
    desc: 'Cloud VPS Lite menggunakan prosesor Intel® Xeon® Platinum dan perangkat enterprise-grade, sehingga mampu menjalankan workload penting dengan performa tinggi dan keandalan maksimal.',
  },
  {
    title: '99.9% Uptime SLA',
    desc: 'Kami menjamin layanan Cloud VPS tetap online dengan tingkat ketersediaan 99,9%, sehingga website, aplikasi, dan email bisnis Anda selalu dapat diakses kapan saja.',
  },
  {
    title: 'Upgrade Fleksibel',
    desc: 'Paket Cloud VPS Lite mudah di-upgrade kapanpun sesuai kebutuhan. Proses upgrade cepat dan tanpa downtime, sehingga layanan Anda tetap berjalan normal.',
  },
  {
    title: 'Mudah Dikelola dengan Dashboard',
    desc: 'Kelola VPS dengan dashboard yang simpel dan ramah pengguna. Semua pengaturan tersedia dalam satu tempat, sehingga manajemen server menjadi lebih praktis dan efisien.',
  },
  {
    title: 'Performa Cepat dengan SSD NVMe',
    desc: 'Teknologi SSD NVMe adalah solusi penyimpanan data modern yang dirancang untuk meningkatkan performa dan efisiensi pada komputer dan server.',
  },
];