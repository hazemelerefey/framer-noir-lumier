import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Noir Lumière – Editorial & Commercial Photography Studio',
  description: 'PhotoPort is a modern photography portfolio built in Framer and Next.js, showcasing visual identity, bold layouts, and timeless imagery.',
  keywords: ['photography', 'portfolio', 'editorial', 'framer', 'noir lumiere', 'fashion', 'brand shoot'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-1 pt-28 sm:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
