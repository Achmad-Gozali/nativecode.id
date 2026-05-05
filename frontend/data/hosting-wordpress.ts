export const paketWordPress = [
  {
    nama: 'Personal',
    harga: 25000,
    hargaAsli: 40000,
    diskon: 37,
    storage: '2 GB Space',
    website: '1 Website WordPress',
    ram: '768 MB RAM',
    cpu: '75% CPU',
    badge: null as string | null,
    href: 'https://www.domainesia.com/hosting-wordpress/?aff=26885',
  },
  {
    nama: 'Business',
    harga: 40000,
    hargaAsli: 80000,
    diskon: 50,
    storage: '10 GB Space',
    website: '2 Website WordPress',
    ram: '1 GB RAM',
    cpu: '100% CPU',
    badge: 'RECOMMENDED' as string | null,
    href: 'https://www.domainesia.com/hosting-wordpress/?aff=26885',
  },
  {
    nama: 'Ecommerce',
    harga: 60000,
    hargaAsli: 120000,
    diskon: 50,
    storage: '20 GB Space',
    website: '2 Website WordPress',
    ram: '2 GB RAM',
    cpu: '150% CPU',
    badge: null as string | null,
    href: 'https://www.domainesia.com/hosting-wordpress/?aff=26885',
  },
];

export const paketHeadersWordPress = ['Personal', 'Business', 'Ecommerce'];

export const detailFiturWordPress = [
  {
    kategori: 'Rincian',
    items: [
      {
        label: 'Kebutuhan',
        values: [
          'Pengguna yang ingin memiliki website personal atau blog sederhana berbasis WordPress',
          'Jumlah pengunjung ramai seperti website perusahaan, sekolah, atau pemerintah',
          'Website lebih kompleks dengan jumlah pengunjung bulanan lebih banyak seperti toko online',
        ],
      },
      { label: 'Estimasi Pengunjung Bulanan', values: ['50.000', '100.000', '200.000'] },
    ],
  },
  {
    kategori: 'Sumber Daya',
    items: [
      { label: 'CPU', values: ['75%', '100%', '150%'] },
      { label: 'Physical RAM', values: ['768MB', '1GB', '2GB'] },
      { label: 'SSD NVMe', values: ['2GB', '10GB', '20GB'] },
      { label: 'MySQL CPU', values: ['100%', '100%', '100%'] },
      { label: 'MySQL Database', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'EP', values: ['15', '15', '30'] },
      { label: 'Inodes', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    kategori: 'Fitur',
    items: [
      { label: 'Akses SSH', values: [true, true, true] },
      { label: 'Redis', values: [true, true, true] },
      { label: 'cPanel (Jupiter)', values: [true, true, true] },
      { label: 'Instant Deploy', values: [true, true, true] },
      { label: 'Cron Jobs', values: [true, true, true] },
      { label: 'IPv4 & IPv6', values: [true, true, true] },
      { label: 'WordPress Manager', values: [true, true, true] },
      { label: 'LitePress Manager', values: [true, true, true] },
      { label: 'File Manager', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Bahasa Pemrograman',
    items: [
      { label: 'Bash', values: [true, true, true] },
      { label: 'PHP', values: [true, true, true] },
      { label: 'PHP Configuration Editor', values: [true, true, true] },
      { label: 'PHP Module Selector', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Database',
    items: [
      { label: 'MySQL', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'SQLite', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'phpMyAdmin', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Performance',
    items: [
      { label: 'CloudLinux', values: [true, true, true] },
      { label: 'CloudFlare®', values: [true, true, true] },
      { label: 'HTTP/1.1', values: [true, true, true] },
      { label: 'HTTP/2', values: [true, true, true] },
      { label: 'HTTP/3 (QUIC)', values: [true, true, true] },
      { label: 'Brotli Compression', values: [true, true, true] },
      { label: 'LiteSpeed Web Server', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Security',
    items: [
      { label: 'CageFS', values: [true, true, true] },
      { label: 'Imunify360 Security', values: [true, true, true] },
      { label: "Let's Encrypt SSL", values: [true, true, true] },
      { label: 'IP Firewall', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Domain',
    items: [
      { label: 'Addon Domain', values: [false, '1', '1'] },
      { label: 'Subdomain', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'DNS Manager', values: [true, true, true] },
      { label: 'Gratis Domain!', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Backup with JetBackup',
    items: [
      { label: 'Remote Backup', values: [true, true, true] },
      { label: 'Monthly Backup', values: [true, true, true] },
      { label: 'Weekly Backup', values: [true, true, true] },
      { label: 'Backup & Restore Wizard', values: [true, true, true] },
    ],
  },
  {
    kategori: 'Statistics',
    items: [
      { label: 'Disk Space Usage', values: [true, true, true] },
      { label: 'Bandwidth Usage', values: [true, true, true] },
      { label: 'CPU Usage', values: [true, true, true] },
      { label: 'Memory Usage', values: [true, true, true] },
    ],
  },
];