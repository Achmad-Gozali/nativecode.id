export type PaketVPSTurbo = {
  nama: string;
  harga: number;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  ip: string;
  badge: string | null;
  rekomendasi: boolean;
  href: string;
};

export type FiturItem = {
  title: string;
  desc: string;
};

export const paketVPSTurbo: PaketVPSTurbo[] = [
  {
    nama: 'Cloud VPS Turbo 1GB',
    harga: 160000,
    cpu: '1 Core CPU',
    ram: '1 GB RAM',
    storage: '20 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 2GB',
    harga: 320000,
    cpu: '2 Core CPU',
    ram: '2 GB RAM',
    storage: '40 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: 'BEST VALUE',
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 4GB',
    harga: 640000,
    cpu: '3 Core CPU',
    ram: '4 GB RAM',
    storage: '80 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: 'BEST PERFORMANCE',
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 8GB',
    harga: 1200000,
    cpu: '4 Core CPU',
    ram: '8 GB RAM',
    storage: '160 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: true,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 12GB',
    harga: 1600000,
    cpu: '6 Core CPU',
    ram: '12 GB RAM',
    storage: '240 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 16GB',
    harga: 2400000,
    cpu: '8 Core CPU',
    ram: '16 GB RAM',
    storage: '320 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 24GB',
    harga: 3200000,
    cpu: '10 Core CPU',
    ram: '24 GB RAM',
    storage: '480 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 32GB',
    harga: 4800000,
    cpu: '12 Core CPU',
    ram: '32 GB RAM',
    storage: '640 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
  {
    nama: 'Cloud VPS Turbo 64GB',
    harga: 9600000,
    cpu: '16 Core CPU',
    ram: '64 GB RAM',
    storage: '960 GB SSD NVMe',
    bandwidth: 'Unlimited Bandwidth',
    ip: 'Dedicated IP',
    badge: null,
    rekomendasi: false,
    href: 'https://www.domainesia.com/cloud-vps/?aff=26885',
  },
];

export const fiturTabVPSTurbo = [
  {
    tab: 'Triple Replication',
    title: 'Cloud Server Terbaik Triple Replication',
    desc: 'Sistem penyimpanan terdistribusi dengan 3X replikasi data menggunakan SSD NVMe untuk menjamin keamanan, ketersediaan, dan kecepatan akses data Anda.',
  },
  {
    tab: 'SSD NVMe',
    title: 'Performa Tinggi dengan SSD NVMe',
    desc: 'Teknologi SSD NVMe adalah solusi penyimpanan data modern yang dirancang untuk meningkatkan performa dan efisiensi pada komputer dan server secara signifikan.',
  },
  {
    tab: 'Dual Stack Network',
    title: 'Jaringan Dual Stack IPv4 & IPv6',
    desc: 'Mendukung protokol IPv4 dan IPv6 sekaligus dengan jaringan 10Gbps yang terhubung ke JKT-IX, IIX, OIXP, C2IX, dan Telkom NCIX untuk performa terbaik.',
  },
  {
    tab: '24x7 Passionate Support',
    title: 'Support 24x7 oleh Tim Profesional',
    desc: 'Tim support DomaiNesia tersedia 24/7 dengan 100% tenaga manusia, bukan bot. Respon cepat, solusi tepat, dan bantuan personal kapan saja Anda butuhkan.',
  },
];

export const fiturVPSTurbo: FiturItem[] = [
  {
    title: 'Konektivitas Handal',
    desc: 'Jaringan dengan kecepatan 10Gbps dan mendukung protokol IPv4 dan IPv6 telah terhubung dengan beberapa exchange di Indonesia seperti JKT-IX, IIX, OIXP, C2IX, dan Telkom NCIX.',
  },
  {
    title: 'Virtualisasi KVM',
    desc: 'Menggunakan Cloud VPS terbaik DomaiNesia, semua aplikasi dapat berjalan dengan Linux KVM, bahkan jika menggunakan kernel yang telah disesuaikan.',
  },
  {
    title: 'SSD NVMe',
    desc: 'Teknologi SSD NVMe adalah solusi penyimpanan data modern yang dirancang untuk meningkatkan performa dan efisiensi pada komputer dan server.',
  },
  {
    title: '99.9% Uptime SLA',
    desc: 'Nikmati keandalan perangkat keras dan jaringan yang terjamin pada server VPS, dengan menjamin tingkat ketersediaan layanan (Uptime) sebesar 99,9%.',
  },
  {
    title: 'Enterprise-Grade Hardware',
    desc: 'Menjalankan aplikasi yang sangat penting (mission-critical) dapat dilakukan secara aman menggunakan Cloud VPS andal enterprise dengan prosesor Intel.',
  },
  {
    title: 'Biaya Transparan',
    desc: 'Anda hanya perlu membayar paket Cloud VPS terbaik yang Anda gunakan dengan perhitungan biaya yang mudah dipahami dan tanpa adanya biaya tersembunyi.',
  },
];