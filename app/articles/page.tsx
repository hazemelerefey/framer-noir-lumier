import React from 'react';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

export const metadata = {
  title: 'Articles & Journal – Noir Lumière Photography',
  description: 'Essays, lighting studies, creative philosophies, and behind-the-scenes thoughts on photography by Noir Lumière.',
};

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
      {/* Header */}
      <div className="pt-6 border-b border-white/10 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
          Journal & Thoughts
        </span>
        <h1 className="text-5xl sm:text-7xl font-editorial text-white leading-none">
          Articles & Essays
        </h1>
        <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl font-light">
          Discussions on natural illumination, analog versus digital workflows, intentional framing, and visual poetry.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
