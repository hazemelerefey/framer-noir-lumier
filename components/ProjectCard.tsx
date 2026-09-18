import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <div className={`relative w-full overflow-hidden bg-neutral-950 ${featured ? 'h-[440px] sm:h-[540px]' : 'h-[340px] sm:h-[400px]'}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/60 backdrop-blur-md text-neutral-300 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Hover Arrow badge */}
        <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-editorial tracking-wide text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>
          {project.client && (
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1">
              Client: {project.client}
            </p>
          )}
        </div>
        <p className="text-sm text-neutral-400 line-clamp-2 mt-3 font-light leading-relaxed">
          {project.about || 'A curated visual series capturing light, texture, and human intimacy.'}
        </p>
      </div>
    </Link>
  );
}
