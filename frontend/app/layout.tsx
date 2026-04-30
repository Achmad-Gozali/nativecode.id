import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'pixelcodedigital.id - Jasa Website Profesional',
  description: 'Solusi digital lengkap untuk wujudkan bisnismu lebih cepat.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased text-gray-900 bg-[#FAFAFA] flex flex-col min-h-screen`} suppressHydrationWarning>
        {children}
        
        {/* Floating WhatsApp Button */}
        <a 
          href="#" 
          className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center cursor-pointer"
          aria-label="Chat WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
        </a>

        {/* Scroll to Top Button */}
        <a 
          href="#"
          className="fixed bottom-6 right-6 bg-[#D17B36] text-white p-3 rounded-full shadow-lg hover:bg-[#c26f2f] transition-colors z-50 cursor-pointer hidden md:flex"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </a>
      </body>
    </html>
  );
}
