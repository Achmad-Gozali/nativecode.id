'use client';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigasi() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);
  const [domainOpen, setDomainOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isLayanan = pathname.startsWith('/layanan');
  const isDomain = pathname.startsWith('/domain');
  const isHosting = pathname.startsWith('/hosting') || pathname.startsWith('/server');

  const navLinkClass = (active: boolean) =>
    `relative flex items-center gap-1 font-semibold text-sm transition-colors duration-150 py-1
     ${active ? 'text-[#D17B36]' : 'text-gray-600 hover:text-[#5D9C76]'}
     after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:transition-all after:duration-150
     ${active ? 'after:bg-[#D17B36]' : 'after:bg-transparent hover:after:bg-[#5D9C76]'}`;

  const mobileLinkClass = (active: boolean) =>
    `block px-4 py-3 font-semibold text-sm rounded-xl transition-colors ${
      active ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#5D9C76]'
    }`;

  const layananLinks = [
    { href: '/layanan/pembuatan-website', label: 'Pembuatan Website', desc: 'Landing page, company profile, toko online' },
    { href: '/layanan/seo', label: 'SEO Bergaransi', desc: 'Ranking Google, trafik organik naik' },
    { href: '/layanan/sosial-media-ads', label: 'Sosial Media Ads', desc: 'Iklan Instagram, Facebook, TikTok' },
    { href: '/layanan/google-ads', label: 'Iklan Google Ads', desc: 'Iklan tepat sasaran, hasil maksimal' },
    { href: '/layanan/pembuatan-aplikasi', label: 'Pembuatan Aplikasi', desc: 'iOS, Android & web app' },
    { href: '/layanan/creative-digital-agency', label: 'Creative Digital Agency', desc: 'Branding, konten kreatif & strategi' },
  ];

  const domainLinks = [
    { href: '/domain/domain-murah', label: 'Domain Murah', desc: 'Untuk segala kebutuhan website', price: 'Mulai dari Rp66.900 siklus 1 tahun' },
    { href: '/domain/domain-id', label: 'Domain Indonesia', desc: 'Dukung Indonesia mendunia', price: 'Mulai dari Rp9.900 siklus 1 tahun' },
  ];

  const hostingLinks = [
    { href: '/hosting/web-hosting', label: 'Web Hosting', desc: 'Hosting cepat & terjangkau' },
    { href: '/hosting/hosting-wordpress', label: 'Hosting WordPress', desc: 'Dioptimalkan untuk WordPress' },
    { href: '/hosting/cloud-hosting', label: 'Cloud Hosting', desc: 'Performa tinggi, dedicated resource' },
    { href: '/hosting/email-hosting', label: 'Email Hosting', desc: 'Email profesional untuk bisnis' },
    { href: '/hosting/migrasi', label: 'Migrasi Hosting', desc: 'Pindah hosting gratis 1 bulan' },
  ];

  const serverLinks = [
    { href: '/server/cloud-vps-lite', label: 'Cloud VPS Lite', desc: 'VPS terjangkau untuk pemula' },
    { href: '/server/cloud-vps', label: 'Cloud VPS Turbo', desc: 'VPS performa tinggi, diskon 50%' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <nav className={`bg-white border-b-2 border-[#5D9C76] transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-bold text-xl text-[#5D9C76]">
                pixelcodedigital<span className="text-[#D17B36]">.id</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-7">

              <Link href="/" className={navLinkClass(pathname === '/')}>BERANDA</Link>
              <Link href="/tentang-kami" className={navLinkClass(pathname === '/tentang-kami')}>TENTANG KAMI</Link>

              {/* Layanan Mega Menu */}
              <div className="relative group">
                <button className={navLinkClass(isLayanan)}>
                  LAYANAN <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="rounded-2xl shadow-xl bg-white border border-gray-100 grid grid-cols-2 gap-0 p-3">
                    {layananLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`flex flex-col px-4 py-3 rounded-xl transition-colors group/item ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}
                      >
                        <span className={`text-sm font-semibold transition-colors ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-700 group-hover/item:text-[#5D9C76]'}`}>
                          {l.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">{l.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Domain Dropdown */}
              <div className="relative group">
                <button className={navLinkClass(isDomain)}>
                  DOMAIN <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="rounded-2xl shadow-xl bg-white border border-gray-100 p-2">
                    {domainLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`block px-4 py-3 rounded-xl transition-colors group/item ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}
                      >
                        <p className={`text-sm font-semibold transition-colors ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-700 group-hover/item:text-[#5D9C76]'}`}>
                          {l.label}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                        <p className="text-xs text-[#1a7fc1] mt-0.5">{l.price}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hosting & Server Mega Menu */}
              <div className="relative group">
                <button className={navLinkClass(isHosting)}>
                  HOSTING & SERVER <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[540px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="rounded-2xl shadow-xl bg-white border border-gray-100 flex p-3 gap-1">
                    <div className="flex-1">
                      <p className="px-4 pt-2 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Hosting</p>
                      {hostingLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className={`block px-4 py-2.5 rounded-xl transition-colors group/item ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}
                        >
                          <p className={`text-sm font-semibold transition-colors ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-700 group-hover/item:text-[#5D9C76]'}`}>
                            {l.label}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="w-px bg-gray-100 my-2" />
                    <div className="flex-1">
                      <p className="px-4 pt-2 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Server</p>
                      {serverLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className={`block px-4 py-2.5 rounded-xl transition-colors group/item ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}
                        >
                          <p className={`text-sm font-semibold transition-colors ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-700 group-hover/item:text-[#5D9C76]'}`}>
                            {l.label}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/klien-kami" className={navLinkClass(pathname === '/klien-kami')}>KLIEN KAMI</Link>
              <Link href="/blog" className={navLinkClass(pathname === '/blog')}>BLOG</Link>
            </div>

            {/* Kontak Button Desktop */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <Link
                href="/kontak"
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  pathname === '/kontak'
                    ? 'bg-[#D17B36] text-white shadow-md'
                    : 'bg-[#5D9C76] text-white hover:bg-[#4a8562] hover:shadow-md active:scale-95'
                }`}
              >
                KONTAK
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className={mobileLinkClass(pathname === '/')}>HOME</Link>
            <Link href="/tentang-kami" className={mobileLinkClass(pathname === '/tentang-kami')}>TENTANG KAMI</Link>

            {/* Layanan accordion */}
            <div>
              <button
                onClick={() => setLayananOpen(!layananOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors ${isLayanan ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                LAYANAN
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${layananOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${layananOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-200 pl-3">
                  {layananLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}
                    >
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Domain accordion */}
            <div>
              <button
                onClick={() => setDomainOpen(!domainOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors ${isDomain ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                DOMAIN
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${domainOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${domainOpen ? 'max-h-48' : 'max-h-0'}`}>
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-200 pl-3">
                  {domainLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}
                    >
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                      <p className="text-xs text-[#1a7fc1] mt-0.5">{l.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hosting & Server accordion */}
            <div>
              <button
                onClick={() => setHostingOpen(!hostingOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors ${isHosting ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                HOSTING & SERVER
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hostingOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${hostingOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="ml-3 mt-1 border-l-2 border-gray-200 pl-3">
                  <p className="px-3 pt-2 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Hosting</p>
                  <div className="space-y-0.5">
                    {hostingLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`block px-3 py-2.5 rounded-xl transition-colors ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}
                      >
                        <p className="text-sm font-medium">{l.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="mx-3 my-2 border-t border-gray-100" />
                  <p className="px-3 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Server</p>
                  <div className="space-y-0.5 mb-1">
                    {serverLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={`block px-3 py-2.5 rounded-xl transition-colors ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}
                      >
                        <p className="text-sm font-medium">{l.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/klien-kami" className={mobileLinkClass(pathname === '/klien-kami')}>KLIEN KAMI</Link>
            <Link href="/blog" className={mobileLinkClass(pathname === '/blog')}>BLOG</Link>

            <div className="pt-2 pb-2">
              <Link
                href="/kontak"
                className={`block w-full text-center px-4 py-3 font-bold text-sm rounded-xl transition-colors ${
                  pathname === '/kontak' ? 'bg-[#D17B36] text-white' : 'bg-[#5D9C76] text-white hover:bg-[#4a8562]'
                }`}
              >
                KONTAK
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}