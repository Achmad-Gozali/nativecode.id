export const paketEmailHosting = [
  {
    nama: 'Lite',
    hargaAsli: 25000,
    diskon: 30,
    harga: 17500,
    storage: '2GB/user',
    totalStorage: 'Total 10GB',
    userMin: 5,
    userMax: 300,
    smtpPerHari: '250 email/hari/user',
    badge: null,
    href: 'https://my.domainesia.com/ref.php?u=26885',
  },
  {
    nama: 'Pro',
    hargaAsli: 125000,
    diskon: 44,
    harga: 70000,
    storage: '10GB/user',
    totalStorage: 'Total 50GB',
    userMin: 5,
    userMax: 999,
    smtpPerHari: '500 email/hari/user',
    badge: 'RECOMMENDED',
    href: 'https://my.domainesia.com/ref.php?u=26885',
  },
  {
    nama: 'Max',
    hargaAsli: 225000,
    diskon: 72,
    harga: 63000,
    storage: '30GB/user',
    totalStorage: 'Total 90GB',
    userMin: 3,
    userMax: 999,
    smtpPerHari: '1.000 email/hari/user',
    badge: null,
    href: 'https://my.domainesia.com/ref.php?u=26885',
  },
];

export type FiturRow = {
  kategori: string;
  fitur: string;
  lite: boolean | string;
  pro: boolean | string;
  max: boolean | string;
};

export const fiturEmailHosting: FiturRow[] = [
  // Detail
  { kategori: 'Detail', fitur: 'Kebutuhan', lite: 'Pengguna yang ingin meningkatkan personal branding atau freelancer yang ingin memiliki email profesional untuk meningkatkan kredibilitas', pro: 'Bagi pengguna yang perlu mengirim atau menerima email secara berkala, seperti UMKM atau sekolah dengan jumlah user email yang lebih banyak', max: 'Cocok untuk perusahaan, hotel, universitas, dan pengguna yang perlu mengirimkan secara rutin email penawaran, promo, atau informasi penting lainnya' },
  // Email
  { kategori: 'Email', fitur: 'Jumlah User Email', lite: '5 - 300', pro: '5 - 999', max: '3 - 999' },
  { kategori: 'Email', fitur: 'Batas Pengiriman SMTP', lite: '250 email / hari / user', pro: '500 email / hari / user', max: '1.000 email / hari / user' },
  { kategori: 'Email', fitur: 'Webmail', lite: true, pro: true, max: true },
  { kategori: 'Email', fitur: 'POP3, IMAP, SMTP', lite: true, pro: true, max: true },
  { kategori: 'Email', fitur: 'Email Forwarding', lite: true, pro: true, max: true },
  { kategori: 'Email', fitur: 'Premium Spam Filter', lite: true, pro: true, max: true },
  // Admin Features
  { kategori: 'Admin Features', fitur: 'Intuitive Dashboard', lite: true, pro: true, max: true },
  { kategori: 'Admin Features', fitur: 'Email Manages', lite: true, pro: true, max: true },
  { kategori: 'Admin Features', fitur: 'Change Password User', lite: true, pro: true, max: true },
  { kategori: 'Admin Features', fitur: 'Email Forwarding', lite: true, pro: true, max: true },
  // Admin Statistics
  { kategori: 'Admin Statistics', fitur: 'Mail Server Hostname', lite: true, pro: true, max: true },
  { kategori: 'Admin Statistics', fitur: 'Mailspace Server', lite: true, pro: true, max: true },
  { kategori: 'Admin Statistics', fitur: 'Company ID', lite: true, pro: true, max: true },
  { kategori: 'Admin Statistics', fitur: 'User Capacity', lite: true, pro: true, max: true },
  { kategori: 'Admin Statistics', fitur: 'Disk Space Usage', lite: true, pro: true, max: true },
  // Client Feature
  { kategori: 'Client Feature', fitur: 'Auto Refresh Rate', lite: 'Upto 1 Minute', pro: 'Upto 1 Minute', max: 'Upto 1 Minute' },
  { kategori: 'Client Feature', fitur: 'Contacts', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'Themes', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'Email Forwarding', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'Manage Folder', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'Auto Responder', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'Filtering Email', lite: true, pro: true, max: true },
  { kategori: 'Client Feature', fitur: 'OpenPGP', lite: true, pro: true, max: true },
  // Security
  { kategori: 'Security', fitur: 'MailChannels Spam Filter', lite: true, pro: true, max: true },
  { kategori: 'Security', fitur: 'Lets Encrypt SSL', lite: true, pro: true, max: true },
  { kategori: 'Security', fitur: 'IP Firewall', lite: true, pro: true, max: true },
  // Domain
  { kategori: 'Domain', fitur: 'Gratis Domain!', lite: true, pro: true, max: true },
  // Backup with Jetbackup
  { kategori: 'Backup with Jetbackup', fitur: 'Remote Backup', lite: true, pro: true, max: true },
  { kategori: 'Backup with Jetbackup', fitur: 'Monthly Backup', lite: true, pro: true, max: true },
  { kategori: 'Backup with Jetbackup', fitur: 'Weekly Backup', lite: true, pro: true, max: true },
  { kategori: 'Backup with Jetbackup', fitur: 'Daily Backup', lite: true, pro: true, max: true },
];