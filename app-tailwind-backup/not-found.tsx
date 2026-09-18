import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 block">
        Error 404
      </span>
      <h1 className="text-6xl sm:text-9xl font-editorial text-white leading-none mb-6">
        Frame Missing
      </h1>
      <p className="text-neutral-400 text-sm sm:text-base max-w-md mb-8 font-light">
        The photograph or page you are searching for does not exist or has been relocated to another gallery.
      </p>
      <Link
        href="/"
        className="inline-flex items-center space-x-2 bg-white text-black px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
