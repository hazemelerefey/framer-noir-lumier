import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Call to action section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono block mb-3">
              Let's Connect
            </span>
            <h2 className="text-4xl sm:text-6xl font-editorial tracking-tight text-white max-w-2xl leading-none">
              Let’s Get Your <span className="italic">Best Shot</span> Together.
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl font-light">
              Available for editorial assignments, brand campaigns, portraits, and selective commissions worldwide.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all group"
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <span className="text-xs text-neutral-400 mt-3">
              Typically respond within 24 hours
            </span>
          </div>
        </div>

        {/* Links and Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-sm">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Pages</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/articles" className="text-neutral-400 hover:text-white transition-colors">Articles / Journal</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Selected Work</h3>
            <ul className="space-y-2.5">
              <li><Link href="/projects/goldit" className="text-neutral-400 hover:text-white transition-colors">Goldit Brand</Link></li>
              <li><Link href="/projects/porto" className="text-neutral-400 hover:text-white transition-colors">Porto Stories</Link></li>
              <li><Link href="/projects/cosmos" className="text-neutral-400 hover:text-white transition-colors">Cosmos Jewelry</Link></li>
              <li><Link href="/projects/horizon" className="text-neutral-400 hover:text-white transition-colors">Horizon Series</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Socials</h3>
            <ul className="space-y-2.5">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Studio</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Based in London, UK.<br />
              Originally from Italy.<br />
              Operating globally for luxury fashion & brand editorials.
            </p>
          </div>
        </div>

        {/* Big Monogram Banner */}
        <div className="pt-10 pb-6 text-center select-none opacity-20 hover:opacity-30 transition-opacity">
          <span className="font-editorial text-7xl sm:text-9xl md:text-[12rem] tracking-tighter uppercase leading-none block">
            NOIR LUMIÈR
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Noir Lumière Studio. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>PhotoPort Photography System</span>
            <span>•</span>
            <span>Next.js 14 & Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
