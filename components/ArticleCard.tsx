import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col bg-neutral-900/60 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="relative w-full h-64 bg-neutral-950 overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
          {article.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 text-xs text-neutral-400 mb-2 font-mono">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {article.readTime}
            </span>
          </div>
          <h3 className="text-xl font-editorial font-medium text-white group-hover:text-neutral-200 transition-colors leading-snug">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-400 line-clamp-3 font-light leading-relaxed">
            {article.content}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white transition-colors">
          <span>By {article.author}</span>
          <span className="inline-flex items-center space-x-1 font-medium">
            <span>Read Story</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
