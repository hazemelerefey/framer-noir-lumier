'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    id: '01',
    question: 'How far in advance should I book a shoot?',
    answer: 'It’s best to book at least 2–4 weeks in advance to secure your preferred date, especially for commercial campaigns, events, and weddings.',
  },
  {
    id: '02',
    question: 'How long does it take to receive the final photos?',
    answer: 'Final edited images are typically delivered within 7–14 days, depending on the size and scope of the project. Expedited rush deliveries are available on request.',
  },
  {
    id: '03',
    question: 'Do you travel for shoots?',
    answer: 'Yes, I am available worldwide. Travel expenses and accommodations are tailored transparently based on location and shoot duration.',
  },
  {
    id: '04',
    question: 'How many photos will I receive?',
    answer: 'The count varies by shoot type, but you will always receive a carefully curated, color-graded, and high-resolution master collection ready for print and web.',
  },
  {
    id: '05',
    question: 'Can I request edits or revisions?',
    answer: 'Yes, standard color-grading adjustments and targeted retouching revisions are included to make sure the final output exceeds expectations.',
  },
  {
    id: '06',
    question: 'Do you offer commercial usage rights?',
    answer: 'Yes, full commercial licensing rights are provided for brand, advertising, and digital campaigns. Licensing details are agreed upon prior to production.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className="border border-white/10 rounded-2xl bg-neutral-950/60 overflow-hidden transition-colors hover:border-white/20"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                <span className="font-mono text-xs text-neutral-400">{faq.id}</span>
                <span className="text-base sm:text-lg font-medium text-white">{faq.question}</span>
              </div>
              <span className="ml-4 p-1 rounded-full bg-white/5 text-white">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-400 font-light leading-relaxed pl-14">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
