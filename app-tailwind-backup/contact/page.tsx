'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shootType: 'Brand Campaign',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
      {/* Header */}
      <div className="pt-6 border-b border-white/10 pb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
          Inquiries & Bookings
        </span>
        <h1 className="text-5xl sm:text-7xl font-editorial text-white leading-none">
          Let’s Work Together
        </h1>
        <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl font-light">
          Get in touch with Noir Lumière for commercial projects, fashion commissions, portraits, or general inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact info cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-white/10 rounded-2xl bg-neutral-900/40 p-8 space-y-6">
            <h2 className="text-xl font-editorial text-white">Direct Communication</h2>
            
            <div className="space-y-4 text-sm text-neutral-300 font-light">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-neutral-400 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Email</span>
                  <a href="mailto:studio@noirlumiere.com" className="text-white hover:underline">studio@noirlumiere.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neutral-400 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Studio Locations</span>
                  <span className="text-white">London, UK • Florence, Italy</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-neutral-400 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">Response Window</span>
                  <span className="text-white">Typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl bg-neutral-900/40 p-8 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Socials</h3>
            <div className="flex flex-col space-y-2 text-sm text-neutral-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram – @noirlumiere</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter) – @noirlumiere</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn – Noir Lumière Studio</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="border border-white/10 rounded-3xl bg-neutral-950 p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-3xl font-editorial text-white">Thank you! Message Received.</h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Your message has been safely received. I will review your project requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Type of Shoot
                    </label>
                    <select
                      value={formData.shootType}
                      onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Brand Campaign">Brand Campaign</option>
                      <option value="Editorial & Fashion">Editorial & Fashion</option>
                      <option value="Portrait Session">Portrait Session</option>
                      <option value="Jewelry & Still Life">Jewelry & Still Life</option>
                      <option value="Private Commission">Private Commission</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Target Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. November 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your concepts, location, mood, deliverables, or inspiration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
