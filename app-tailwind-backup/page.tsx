import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Camera, Award, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { articles } from '@/data/articles';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);
  const latestArticles = articles.slice(0, 3);

  const stats = [
    { label: 'Photos Delivered', value: '12,000+' },
    { label: 'Years of Experience', value: '8+' },
    { label: 'Happy Clients', value: '250+' },
    { label: 'Top Brand Collabs', value: '30+' },
  ];

  const services = [
    {
      title: 'Portraits & Headshots',
      desc: 'Cinematic, high-contrast portraiture highlighting personality, expression, and raw emotion.',
      quote: '“Captured beautiful moments we didn’t even realize mattered.”',
      author: 'Mathew James',
      role: 'Founder of Zayla',
    },
    {
      title: 'Weddings & Couples',
      desc: 'Editorial storytelling documenting love stories with elegance, intimacy, and timeless poise.',
      quote: '“The photos look like scenes straight out from a romantic movie.”',
      author: 'Lewis Herb',
      role: 'Client, Ireland',
    },
    {
      title: 'Commercial & Editorial',
      desc: 'High-production campaigns for luxury jewelry, fashion houses, and design studios worldwide.',
      quote: '“Elevated our brand with luminous presence and meticulous attention to detail.”',
      author: 'Veena Kapoor',
      role: 'CEO @ Cosmos',
    },
  ];

  const brands = [
    'COSMOS', 'ZAYLA', 'STUDIO LUMOS', 'PORTO LUXE', 'VOGUE ITALIA', 'HARPER EDITORIAL', 'KINETIC'
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-6 sm:pt-12">
        <div className="flex flex-col items-start space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Q4 Commissions</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-editorial tracking-tight text-white leading-[0.9] max-w-5xl">
            Turning <span className="italic font-normal">moments</span> into timeless memories.
          </h1>

          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between pt-6 border-t border-white/10 gap-6">
            <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl leading-relaxed">
              Noir Lumière is an Italian-born, London-based photographer specializing in high-fashion editorial, fine-art portraiture, and commercial campaigns.
            </p>

            <div className="flex items-center space-x-4">
              <Link
                href="/projects"
                className="bg-white text-black px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all flex items-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-all"
              >
                My Story
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-8 relative h-[420px] sm:h-[560px] rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src={projects[0]?.coverImage || '/images/default.jpg'}
              alt="Featured editorial shoot"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">Featured Campaign</span>
                <h3 className="text-2xl sm:text-4xl font-editorial text-white">{projects[0]?.title}</h3>
              </div>
              <Link
                href={`/projects/${projects[0]?.slug}`}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-6">
            <div className="relative flex-1 min-h-[260px] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src={projects[1]?.coverImage || '/images/default.jpg'}
                alt="Editorial detail"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">{projects[1]?.category}</span>
                <h4 className="text-xl font-editorial text-white">{projects[1]?.title}</h4>
              </div>
            </div>

            <div className="relative flex-1 min-h-[260px] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src={projects[2]?.coverImage || '/images/default.jpg'}
                alt="Portrait detail"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">{projects[2]?.category}</span>
                <h4 className="text-xl font-editorial text-white">{projects[2]?.title}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="border-y border-white/10 bg-neutral-950/80 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-4">
                <span className="text-4xl sm:text-6xl font-editorial font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-mono tracking-widest uppercase mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Selected Works
            </span>
            <h2 className="text-4xl sm:text-6xl font-editorial text-white">
              My Portfolio
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors group mt-4 sm:mt-0"
          >
            <span>View all 10 projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-md"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. BRAND COLLABORATIONS */}
      <section className="border-y border-white/5 py-12 overflow-hidden bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Brands I Have Worked With
          </span>
        </div>
        <div className="flex items-center justify-around flex-wrap gap-8 max-w-6xl mx-auto px-6 opacity-40 hover:opacity-80 transition-opacity">
          {brands.map((brand, i) => (
            <span key={i} className="text-lg sm:text-2xl font-display font-black tracking-widest uppercase text-white">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* 5. SERVICES & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-6xl font-editorial text-white">
            My Services
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base font-light">
            Each commission is approached with deliberate intention, artistic integrity, and custom tailored aesthetic grading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl bg-neutral-900/50 p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300"
            >
              <div>
                <span className="font-mono text-xs text-neutral-400">0{idx + 1}</span>
                <h3 className="text-2xl font-editorial text-white mt-4 mb-3">{srv.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">{srv.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <blockquote className="text-xs italic text-neutral-300 leading-relaxed font-editorial text-base">
                  {srv.quote}
                </blockquote>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{srv.author}</span>
                  <span className="text-neutral-400 font-mono text-[11px]">{srv.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BEHIND THE LENS / STORY TEASER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={projects[4]?.coverImage || '/images/default.jpg'}
              alt="Noir Lumier Behind the lens"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Behind the Lens
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial text-white leading-tight">
              A photographer focused on capturing <span className="italic font-normal">honest</span> and poetic moments.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              With more than eight years behind the camera, my artistic philosophy centers on the interplay of natural ambient light and vulnerable, authentic presence. Directed by: Noir Lumière.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-sm text-white font-medium hover:text-neutral-300 transition-colors"
              >
                <span>Read My Full Story & Awards</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOURNAL / ARTICLES */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Thoughts & Insights
            </span>
            <h2 className="text-4xl sm:text-6xl font-editorial text-white">
              Articles & Journal
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors group mt-4 sm:mt-0"
          >
            <span>View all articles</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion />
      </section>

      {/* 9. BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-10 sm:p-20 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Ready to create something memorable?
            </span>
            <h2 className="text-4xl sm:text-7xl font-editorial text-white leading-none">
              Let’s Get Your <span className="italic">Best Shot</span>.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto">
              Whether you’re commissioning an editorial campaign, a personal portrait session, or documenting a private event, let’s bring your vision to life.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-all w-full sm:w-auto"
              >
                Inquire About Availability
              </Link>
              <Link
                href="/projects"
                className="border border-white/20 text-white px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
