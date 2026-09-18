import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera, Award, ShieldCheck, MapPin } from 'lucide-react';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'About – Designed by Hazem Elerefy | Noir Lumière',
  description: 'Italian-born editorial photographer based in London. Designed & Developed by Hazem Elerefy. Discover the story, philosophy, awards, and tools.',
};

export default function AboutPage() {
  const awards = [
    { year: '2025', title: 'European Editorial Award – Gold', org: 'PhotoArt Guild' },
    { year: '2024', title: 'Best Commercial Campaign', org: 'Design & Visual Arts Council' },
    { year: '2023', title: 'Portrait Photographer of the Year', org: 'Vogue Selects' },
    { year: '2022', title: 'Monochrome Excellence Citation', org: 'London Photographic Society' },
  ];

  const gear = [
    { category: 'Bodies', items: ['Leica M11 Black Paint', 'Sony A7R V Medium Format Equivalent', 'Hasselblad 907X 50C'] },
    { category: 'Lenses', items: ['Leica Summilux-M 35mm f/1.4', 'Noctilux-M 50mm f/0.95', 'Sony GM 85mm f/1.4 II', 'Zeiss Batis 135mm f/2.8'] },
    { category: 'Lighting & Modifiers', items: ['Profoto B10X Plus Monolights', 'Aputure 600d Pro', 'Custom Japanese Silk Scrims', 'Matthews C-Stands & Boom Arms'] },
    { category: 'Digital & Post', items: ['Apple M3 Max 128GB', 'EIZO ColorEdge 4K Calibrated Display', 'Capture One Pro 24 Custom Grading'] },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-6">
      {/* 1. HEADER */}
      <section className="pt-6">
        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
          <span>Behind The Lens</span>
          <span>•</span>
          <span className="text-white font-medium">Designed by Hazem Elerefy</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial text-white leading-none max-w-4xl">
          Capturing <span className="italic">raw presence</span>, delicate light, and honest emotion.
        </h1>
      </section>

      {/* 2. STORY & IMAGERY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
          <Image
            src={projects[3]?.coverImage || '/images/default.jpg'}
            alt="Noir Lumière portrait"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2 text-xs">
            <MapPin className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-neutral-300">London & Florence Studios</span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            My Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-white">
            Directed & Designed by Hazem Elerefy
          </h2>
          <div className="space-y-4 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Growing up in Florence, Italy, I was immersed from an early age in classical Renaissance compositions, high contrast, and sculptural lighting. That heritage continues to inform every single frame I compose today.
            </p>
            <p>
              Over the last eight years, I have worked across Milan, Paris, London, and New York, directing campaigns for fine jewelry maisons, haute couture labels, and private collectors. My craft rejects artificial sterility in favor of authentic tactile warmth.
            </p>
            <p>
              Whether shooting on medium-format digital or classic 35mm analog film, my aim is always identical: to create photographs that do not fade with contemporary trends, but endure as fine art.
            </p>
          </div>

          <div className="pt-4 flex items-center space-x-6">
            <div>
              <span className="text-3xl font-editorial text-white font-bold">12k+</span>
              <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Delivered</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <span className="text-3xl font-editorial text-white font-bold">8+</span>
              <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Years Exp</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <span className="text-3xl font-editorial text-white font-bold">250+</span>
              <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AWARDS & RECOGNITION */}
      <section className="border-t border-white/10 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Recognition
            </span>
            <h2 className="text-4xl sm:text-5xl font-editorial text-white">
              My Awards & Honors
            </h2>
          </div>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {awards.map((award, i) => (
            <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] px-2 transition-colors">
              <div className="flex items-center space-x-6">
                <span className="font-mono text-xs text-neutral-400">{award.year}</span>
                <span className="text-lg sm:text-xl font-medium text-white">{award.title}</span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                {award.org}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GEAR & TOOLS */}
      <section className="border-t border-white/10 pt-16">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            The Craft
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial text-white">
            Gear & Studio Tools
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            A deliberate selection of world-class optical glass, precision sensors, and artisanal illumination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gear.map((g, idx) => (
            <div key={idx} className="border border-white/10 rounded-2xl bg-neutral-900/40 p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-white/5">
                {g.category}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs text-neutral-300 leading-relaxed font-light">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="border-t border-white/10 pt-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-editorial text-white mb-6">
          Have a project or vision in mind?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-all"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
