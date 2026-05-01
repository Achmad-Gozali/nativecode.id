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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isLayanan = pathname.startsWith('/layanan');
  const isDomain = pathname.startsWith('/domain');
  const isHosting = pathname.startsWith('/hosting') || pathname.startsWith('/server');

  const navLinkClass = (active: boolean) =>
    `relative flex items-center gap-1 font-semibold text-sm transition-all duration-200 py-1
     ${active ? 'text-[#D17B36]' : 'text-gray-700 hover:text-[#5D9C76]'}
     after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200
     ${active ? 'after:bg-[#D17B36]' : 'after:bg-transparent hover:after:bg-[#5D9C76]'}`;

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
    { href: '/domain/domain-id', label: 'Domain Indonesia (.id)', desc: 'Dukung identitas digital Indonesia', price: 'Mulai dari Rp9.900 siklus 1 tahun' },
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

  const dropdownBase = `absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible
    group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0
    transition-all duration-200 z-50`;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className="fixed top-0 left-0 right-0 z-40">
        <nav className={`bg-white border-b-2 border-[#5D9C76] transition-shadow duration-300
          ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">

              {/* Logo */}
              <Link href="/layanan/pembuatan-website" className="flex-shrink-0">
                <img src="/images/logo-navbar.png" alt="nativecode.id" className="h-20 w-auto" />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
                <Link href="/" className={navLinkClass(pathname === '/')}>BERANDA</Link>
                <Link href="/tentang-kami" className={navLinkClass(pathname === '/tentang-kami')}>TENTANG KAMI</Link>

                {/* LAYANAN */}
                <div className="relative group">
                  <button className={navLinkClass(isLayanan)}>
                    LAYANAN <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className={`${dropdownBase} w-[520px]`}>
                    <div className="rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-2 p-3 gap-1">
                        {layananLinks.map((l) => (
                          <Link key={l.href} href={l.href}
                            className={`flex flex-col px-4 py-3 rounded-lg transition-all group/item
                              ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}>
                            <p className={`text-sm font-semibold ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-800 group-hover/item:text-[#5D9C76]'}`}>
                              {l.label}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* DOMAIN */}
                <div className="relative group">
                  <button className={navLinkClass(isDomain)}>
                    DOMAIN <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className={`${dropdownBase} w-[300px]`}>
                    <div className="rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
                      <div className="p-3 space-y-1">
                        {domainLinks.map((l) => (
                          <Link key={l.href} href={l.href}
                            className={`flex flex-col px-4 py-3 rounded-lg transition-all group/item
                              ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}>
                            <p className={`text-sm font-semibold ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-800 group-hover/item:text-[#1a7fc1]'}`}>
                              {l.label}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                            <p className="text-xs text-[#1a7fc1] font-medium mt-1">{l.price}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* HOSTING & SERVER */}
                <div className="relative group">
                  <button className={navLinkClass(isHosting)}>
                    HOSTING & SERVER <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className={`${dropdownBase} w-[480px]`}>
                    <div className="rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
                      <div className="flex p-3 gap-2">
                        <div className="flex-1">
                          <p className="px-3 pb-2 pt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Hosting</p>
                          {hostingLinks.map((l) => (
                            <Link key={l.href} href={l.href}
                              className={`flex flex-col px-3 py-2.5 rounded-lg transition-all group/item
                                ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}>
                              <p className={`text-sm font-semibold ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-800 group-hover/item:text-[#5D9C76]'}`}>
                                {l.label}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="w-px bg-gray-100" />
                        <div className="flex-1">
                          <p className="px-3 pb-2 pt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Server</p>
                          {serverLinks.map((l) => (
                            <Link key={l.href} href={l.href}
                              className={`flex flex-col px-3 py-2.5 rounded-lg transition-all group/item
                                ${pathname === l.href ? 'bg-[#fff3e8]' : 'hover:bg-gray-50'}`}>
                              <p className={`text-sm font-semibold ${pathname === l.href ? 'text-[#D17B36]' : 'text-gray-800 group-hover/item:text-[#5D9C76]'}`}>
                                {l.label}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">{l.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/klien-kami" className={navLinkClass(pathname === '/klien-kami')}>KLIEN KAMI</Link>
                <Link href="/blog" className={navLinkClass(pathname === '/blog')}>BLOG</Link>
              </div>

              {/* Kontak Desktop */}
              <div className="hidden md:flex items-center flex-shrink-0">
                <Link href="/kontak"
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200
                    ${pathname === '/kontak'
                      ? 'bg-[#D17B36] text-white shadow-md'
                      : 'bg-[#5D9C76] text-white hover:bg-[#4a8562] hover:shadow-md active:scale-95'}`}>
                  KONTAK
                </Link>
              </div>

              {/* Hamburger */}
              <button
                className="md:hidden p-2 mr-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-[82%] max-w-sm z-50
          bg-white shadow-2xl transition-transform duration-300 ease-in-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <img src="/images/logo-navbar.png" alt="nativecode.id" className="h-12 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-130px)] px-4 py-3 space-y-1">
            <Link href="/" className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-colors
              ${pathname === '/' ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#5D9C76]'}`}>
              HOME
            </Link>
            <Link href="/tentang-kami" className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-colors
              ${pathname === '/tentang-kami' ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#5D9C76]'}`}>
              TENTANG KAMI
            </Link>

            {/* Layanan */}
            <div>
              <button onClick={() => setLayananOpen(!layananOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors
                  ${isLayanan ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}>
                LAYANAN
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${layananOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${layananOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-[#5D9C76]/20 pl-3">
                  {layananLinks.map((l) => (
                    <Link key={l.href} href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors
                        ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}>
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400">{l.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Domain */}
            <div>
              <button onClick={() => setDomainOpen(!domainOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors
                  ${isDomain ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}>
                DOMAIN
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${domainOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${domainOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-[#1a7fc1]/20 pl-3">
                  {domainLinks.map((l) => (
                    <Link key={l.href} href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors
                        ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#1a7fc1] hover:bg-gray-50'}`}>
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400">{l.desc}</p>
                      <p className="text-xs text-[#1a7fc1] font-medium mt-0.5">{l.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hosting & Server */}
            <div>
              <button onClick={() => setHostingOpen(!hostingOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl transition-colors
                  ${isHosting ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50'}`}>
                HOSTING & SERVER
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hostingOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${hostingOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                <div className="ml-3 border-l-2 border-[#5D9C76]/20 pl-3">
                  <p className="px-3 pt-2 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Hosting</p>
                  {hostingLinks.map((l) => (
                    <Link key={l.href} href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors
                        ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}>
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400">{l.desc}</p>
                    </Link>
                  ))}
                  <div className="mx-3 my-2 border-t border-gray-100" />
                  <p className="px-3 pb-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Server</p>
                  {serverLinks.map((l) => (
                    <Link key={l.href} href={l.href}
                      className={`block px-3 py-2.5 rounded-xl transition-colors
                        ${pathname === l.href ? 'text-[#D17B36] bg-[#fff3e8]' : 'text-gray-600 hover:text-[#5D9C76] hover:bg-gray-50'}`}>
                      <p className="text-sm font-medium">{l.label}</p>
                      <p className="text-xs text-gray-400">{l.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/klien-kami" className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-colors
              ${pathname === '/klien-kami' ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#5D9C76]'}`}>
              KLIEN KAMI
            </Link>
            <Link href="/blog" className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-colors
              ${pathname === '/blog' ? 'bg-[#fff3e8] text-[#D17B36]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#5D9C76]'}`}>
              BLOG
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
            <Link href="/kontak"
              className="block w-full text-center px-4 py-3 font-bold text-sm rounded-xl bg-[#5D9C76] text-white hover:bg-[#4a8562] transition-colors">
              KONTAK KAMI
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}