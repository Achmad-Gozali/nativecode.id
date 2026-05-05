import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'nativecode - Jasa Website Profesional Jakarta Utara';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(ellipse at top left, #c8e6c9 0%, #e8f5e9 30%, #fff8f0 60%, #ffe0b2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo text */}
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, marginBottom: 24 }}>
          <span style={{ color: '#D17B36' }}>native</span>
          <span style={{ color: '#5D9C76' }}>code</span>
          <span style={{ color: '#5D9C76' }}>.id</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#4b5563', marginBottom: 16, fontWeight: 500 }}>
          Jasa Website Profesional Jakarta Utara
        </div>

        {/* Sub tagline */}
        <div style={{ fontSize: 22, color: '#9ca3af' }}>
          Solusi digital lengkap untuk wujudkan bisnismu lebih cepat.
        </div>

        {/* URL badge */}
        <div style={{
          marginTop: 48,
          background: '#D17B36',
          color: 'white',
          padding: '12px 36px',
          borderRadius: 999,
          fontSize: 22,
          fontWeight: 600,
        }}>
          www.nativecode.id
        </div>
      </div>
    ),
    { ...size }
  );
}