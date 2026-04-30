import { getPostBySlug, getAllSlugs, posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Navigasi from '@/komponen/Navigasi';
import Footer from '@/komponen/Footer';
import Link from 'next/link';

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

function renderKonten(konten: string) {
  const lines = konten.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4 leading-snug">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5 leading-snug">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2.5 my-5 ml-2">
          {items.map((item, idx) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={idx} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>
                  {parts.map((p, pi) =>
                    pi % 2 === 1 ? <strong key={pi} className="text-gray-800">{p}</strong> : p
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="text-gray-600 leading-[1.8] my-5 text-base">
          {parts.map((p, pi) =>
            pi % 2 === 1 ? <strong key={pi} className="text-gray-800">{p}</strong> : p
          )}
        </p>
      );
    }

    i++;
  }

  return elements;
}

function getArtikelTerkait(currentSlug: string, kategori: string) {
  const sameKat = posts.filter(p => p.slug !== currentSlug && p.kategori === kategori);
  const others = posts.filter(p => p.slug !== currentSlug && p.kategori !== kategori);
  return [...sameKat, ...others].slice(0, 3);
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const terkait = getArtikelTerkait(post.slug, post.kategori);

  const WA_URL = `https://wa.me/6282249244647?text=Halo+pixelcodedigital.id%2C+saya+ingin+konsultasi+mengenai+layanan+pixelcodedigital.id.+Mohon+bantuannya+%F0%9F%99%8F`;

  return (
    <>
      <Navigasi />
      <main className="flex flex-col min-h-screen pt-14 sm:pt-16 bg-[#f5f0eb]">

        {/* HEADER */}
        <section className="bg-white px-4 py-10 sm:py-14">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block border border-gray-300 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              {post.kategori}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.judul}
            </h1>
            <p className="text-gray-400 text-sm">Dipublikasikan pada: {post.tanggal}</p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="max-w-5xl mx-auto px-4 py-4 w-full">
          <div className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-[#5D9C76] transition-colors">Beranda</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-[#5D9C76] transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-600 truncate max-w-xs">{post.judul}</span>
          </div>
        </div>

        {/* KONTEN */}
        <div className="max-w-5xl mx-auto px-4 pb-20 w-full">

          {/* HERO CARD */}
          <div className="bg-[#1e2d3d] rounded-2xl p-7 sm:p-10 mb-6">
            <span className="inline-block border border-[#5D9C76] text-[#5D9C76] text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-widest uppercase">
              {post.kategori}
            </span>
            <p className="text-white text-xl sm:text-2xl font-bold leading-snug">
              {post.excerpt}
            </p>
          </div>

          {/* ARTIKEL */}
          <div className="bg-white rounded-2xl px-6 sm:px-10 py-8 sm:py-12">
            <article>
              {renderKonten(post.konten)}
            </article>

            {/* CALLOUT CTA */}
            <div className="bg-[#f5f0eb] rounded-2xl p-6 sm:p-8 mt-10">
              <p className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                Ingin website yang lebih siap untuk bisnis Anda?
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                pixelcodedigital.id membantu pembuatan website bisnis, optimasi SEO, dan strategi digital agar bisnis Anda lebih mudah ditemukan dan dipercaya pelanggan.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c26f2f] transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          {/* ARTIKEL TERKAIT */}
          {terkait.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Artikel terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {terkait.map(art => (
                  <Link
                    key={art.slug}
                    href={`/blog/${art.slug}`}
                    className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col"
                  >
                    <span className="inline-block border border-gray-200 text-gray-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start tracking-wider uppercase">
                      {art.kategori}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 flex-1">
                      {art.judul}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {art.excerpt.slice(0, 110)}...
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM NAV */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#5D9C76] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              Kembali ke Blog
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D17B36] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#c26f2f] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Sekarang
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}