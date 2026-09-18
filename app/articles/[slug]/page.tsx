import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';

export function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex((a) => a.slug === params.slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <article className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/articles"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <span className="bg-white/10 px-3 py-1 rounded-full text-white">{article.category}</span>
          <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />{article.date}</span>
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{article.readTime}</span>
          <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" />By {article.author}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-editorial text-white leading-tight">
          {article.title}
        </h1>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-[380px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-8 text-neutral-300 font-light text-base sm:text-xl leading-relaxed">
        {article.content && (
          <p className="first-letter:text-5xl first-letter:font-editorial first-letter:float-left first-letter:mr-3 first-letter:text-white">
            {article.content}
          </p>
        )}

        {/* Mid-article image if available */}
        {article.images[0] && (
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 my-8">
            <Image
              src={article.images[0]}
              alt="Editorial frame detail"
              fill
              className="object-cover object-center"
            />
          </div>
        )}

        {article.subContent && (
          <div className="bg-neutral-900/50 p-6 sm:p-8 rounded-2xl border-l-2 border-white text-lg italic font-editorial text-neutral-200">
            {article.subContent}
          </div>
        )}

        {article.content2 && (
          <p>{article.content2}</p>
        )}

        {/* Second image */}
        {article.images[1] && (
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 my-8">
            <Image
              src={article.images[1]}
              alt="Editorial frame detail"
              fill
              className="object-cover object-center"
            />
          </div>
        )}

        {article.subContent2 && (
          <blockquote className="text-2xl font-editorial text-white border-y border-white/10 py-6 my-8">
            “{article.subContent2}”
          </blockquote>
        )}

        {article.content3 && (
          <p>{article.content3}</p>
        )}
      </div>

      {/* Next Article */}
      <div className="border-t border-white/10 pt-12 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">Next Story</span>
          <h4 className="text-2xl font-editorial text-white mt-1">{nextArticle.title}</h4>
        </div>
        <Link
          href={`/articles/${nextArticle.slug}`}
          className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all"
        >
          <span>Read Next Article</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
