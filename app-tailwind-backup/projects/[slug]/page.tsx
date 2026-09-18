import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
      {/* Back link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="border-b border-white/10 pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
          <span className="bg-white/10 px-3 py-1 rounded-full text-white">{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
          {project.client && (
            <>
              <span>•</span>
              <span>Client: {project.client}</span>
            </>
          )}
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial text-white leading-none">
          {project.title}
        </h1>
      </div>

      {/* Main Cover Image */}
      <div className="relative w-full h-[450px] sm:h-[650px] rounded-3xl overflow-hidden border border-white/10">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Project Details Grid: About & Meta */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8 border-b border-white/10">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            About the Project
          </h2>
          <p className="text-lg sm:text-2xl font-light text-neutral-200 leading-relaxed">
            {project.about || 'A specialized visual story highlighting unique perspective, rich tactile contrasts, and meticulous lighting choreography.'}
          </p>
        </div>

        <div className="lg:col-span-4 bg-neutral-900/40 rounded-2xl p-6 border border-white/10 space-y-4 text-xs font-mono">
          <div>
            <span className="text-neutral-400 uppercase tracking-widest block">Client</span>
            <span className="text-white text-sm font-sans mt-0.5 block">{project.client || 'Commissioned Project'}</span>
          </div>
          <div className="border-t border-white/5 pt-3">
            <span className="text-neutral-400 uppercase tracking-widest block">Year</span>
            <span className="text-white text-sm font-sans mt-0.5 block">{project.year}</span>
          </div>
          <div className="border-t border-white/5 pt-3">
            <span className="text-neutral-400 uppercase tracking-widest block">Category</span>
            <span className="text-white text-sm font-sans mt-0.5 block">{project.category}</span>
          </div>
          {project.status && (
            <div className="border-t border-white/5 pt-3 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-neutral-300">{project.status}</span>
            </div>
          )}
        </div>
      </div>

      {/* Client Testimonial if available */}
      {project.testimonial && (
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 sm:p-14">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
            Client Testimonial
          </span>
          <blockquote className="text-2xl sm:text-4xl font-editorial italic text-white leading-relaxed">
            “{project.testimonial}”
          </blockquote>
          <div className="mt-6 flex items-center space-x-4">
            {project.clientImg && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={project.clientImg}
                  alt={project.clientName || 'Client'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <span className="text-base font-medium text-white block">{project.clientName || project.client}</span>
              <span className="text-xs font-mono text-neutral-400">Client Partner</span>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery */}
      <div className="space-y-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Visual Catalog ({project.images.length} Photographs)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group ${
                idx % 3 === 0 ? 'md:col-span-2 h-[500px] sm:h-[650px]' : 'h-[400px] sm:h-[500px]'
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${project.title} - Frame ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Project Footer Bar */}
      <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">Next Project</span>
          <h4 className="text-3xl font-editorial text-white mt-1">{nextProject.title}</h4>
        </div>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
