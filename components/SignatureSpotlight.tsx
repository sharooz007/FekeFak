'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';
import { Fire, Sparkle, ShoppingBag } from '@phosphor-icons/react';

export default function SignatureSpotlight() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <section id="spotlight" className="py-16 sm:py-24 bg-[#fffdf5] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-black font-black px-4 py-1.5 rounded-full neo-border-sm neo-shadow-sm text-sm transform -rotate-2 mb-4">
            <Sparkle size={18} weight="fill" className="text-[#e11d2a]" />
            <span>{t.spotlightBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight drop-shadow-sm">
            {t.spotlightTitle}{' '}
            <span className="bg-[#e11d2a] text-white px-3 py-1 rounded-xl neo-border-sm inline-block transform rotate-1">
              {t.spotlightTitleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 font-bold max-w-xl mx-auto">
            {t.spotlightSubtitle}
          </p>
        </div>

        {/* Bento-style Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: المرجوجة (Clean Appetizing Showcase) - 7 Cols */}
          <div className="lg:col-span-7 bg-[#e11d2a] text-white rounded-3xl neo-border neo-shadow-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Background Halftone Pattern */}
            <div className="absolute inset-0 bg-dots-white opacity-20 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="bg-[#ffc700] text-black font-black px-4 py-1.5 rounded-xl neo-border-sm text-sm uppercase">
                {t.marjoojahBadge}
              </span>
              <span className="bg-black/60 text-[#ffc700] font-black px-3.5 py-1 rounded-full text-xs sm:text-sm border border-white/20">
                {t.marjoojahCalories}
              </span>
            </div>

            {/* Content & Imagery */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center my-6">
              
              {/* Cup Image */}
              <div className="flex flex-col items-center">
                <div className="relative w-52 h-60 sm:w-60 sm:h-68 rounded-2xl overflow-hidden neo-border bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
                    alt={t.marjoojahTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#ffc700] text-black text-xs font-black px-2.5 py-1 rounded-lg neo-border-sm">
                    {t.marjoojahCupLabel}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 bg-[#e11d2a] text-white text-sm font-black px-3 py-1 rounded-lg neo-border-sm">
                    {t.marjoojahPrice}
                  </div>
                </div>
              </div>

              {/* Text Description & Ingredients */}
              <div className={`space-y-4 ${isEn ? 'text-left' : 'text-right'}`}>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {t.marjoojahTitle}{' '}
                  <span className="text-[#ffc700] text-2xl font-bold block sm:inline">
                    {t.marjoojahSubtitle}
                  </span>
                </h3>
                <p className="text-white/95 font-bold text-sm sm:text-base leading-relaxed">
                  {t.marjoojahDesc}
                </p>

                {/* Ingredients Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-black/30 border border-white/30 text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    {t.ingShawarma}
                  </span>
                  <span className="bg-black/30 border border-white/30 text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    {t.ingFries}
                  </span>
                  <span className="bg-black/30 border border-white/30 text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    {t.ingColeslaw}
                  </span>
                  <span className="bg-black/30 border border-white/30 text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    {t.ingSauces}
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href="#branches"
                    className="inline-flex items-center gap-2 bg-[#ffc700] text-black font-black text-sm px-6 py-3 rounded-xl neo-border neo-shadow-sm hover:bg-white transition-colors"
                  >
                    <ShoppingBag size={18} weight="bold" />
                    <span>{t.marjoojahOrder}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Slogan */}
            <div className="relative z-10 bg-black/40 border border-white/20 rounded-xl p-3 text-center text-xs font-black text-[#ffc700]">
              {t.marjoojahSlogan}
            </div>
          </div>

          {/* Card 2: صحن المزاج وعلى كيفك - 5 Cols */}
          <div className="lg:col-span-5 bg-[#ffc700] text-black rounded-3xl neo-border neo-shadow-lg p-6 sm:p-8 flex flex-col justify-between relative group">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-4">
              <span className="bg-[#e11d2a] text-white font-black px-4 py-1.5 rounded-xl neo-border-sm text-sm">
                {t.mazajBadge}
              </span>
              <span className="bg-black text-[#ffc700] font-black px-3.5 py-1 rounded-full text-xs sm:text-sm">
                {t.mazajPriceBadge}
              </span>
            </div>

            {/* Image */}
            <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden neo-border bg-white my-4">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
                alt={t.mazajTitle}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs font-black px-3 py-1 rounded-lg">
                {t.mazajCalories}
              </div>
            </div>

            {/* Details */}
            <div className={`space-y-3 ${isEn ? 'text-left' : 'text-right'}`}>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                {t.mazajTitle}
              </h3>
              <p className="text-black/80 font-bold text-sm leading-relaxed">
                {t.mazajDesc}
              </p>

              <div className="pt-2">
                <a
                  href="#branches"
                  className="w-full neo-btn bg-[#e11d2a] text-white font-black text-sm sm:text-base py-3 px-4 rounded-xl neo-border neo-shadow-sm flex items-center justify-center gap-2"
                >
                  <Fire size={20} weight="fill" />
                  <span>{t.mazajOrder}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
