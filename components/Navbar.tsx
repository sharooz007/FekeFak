'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneCall, MapPin, InstagramLogo, TiktokLogo, Sparkle, Fire, Globe } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';

export default function Navbar() {
  const { language, toggleLanguage, isEn } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <>
      {/* Top Ticker Ribbon - Prestige & Quality Marquee */}
      <div className="bg-[#ffc700] text-[#121212] font-black text-xs sm:text-base border-b-2 border-black overflow-hidden py-1.5 sm:py-2 select-none relative z-50">
        <div className={`animate-marquee-${isEn ? 'ltr' : 'rtl'} flex items-center ${isEn ? 'space-x-8' : 'space-x-reverse space-x-8'} whitespace-nowrap`}>
          <span className="flex items-center gap-2">
            <Fire size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText1}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText2}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText3}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <InstagramLogo size={18} weight="bold" />
            Instagram: @fkefaak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <TiktokLogo size={18} weight="bold" />
            TikTok: @fke_faak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>

          {/* Seamless loop repeat */}
          <span className="flex items-center gap-2">
            <Fire size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText1}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText2}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={18} weight="fill" className="text-[#e11d2a]" />
            {t.tickerText3}
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
        </div>
      </div>

      {/* Main Sticky Navbar - Minimal & Focused */}
      <header className="sticky top-0 z-40 bg-[#e11d2a] border-b-4 border-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo and Brand Title */}
            <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-10 h-12 sm:w-12 sm:h-14 bg-white p-1 rounded-xl neo-border-sm neo-shadow-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
                <Image
                  src="/logo_transparent.png"
                  alt="Fkefaak Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white drop-shadow-[2px_2px_0px_#000]">
                  {t.brandName}
                </span>
                <span className="text-[10px] sm:text-sm font-bold text-[#ffc700] tracking-wide -mt-0.5">
                  {t.brandSubtitle}
                </span>
              </div>
            </a>

            {/* Actions: Language Toggle + Order Now Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Toggle */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="neo-btn bg-white text-black font-black text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl neo-border-sm flex items-center gap-1.5 hover:bg-[#ffc700] transition-colors shadow-sm"
                title={isEn ? 'التحويل إلى العربية' : 'Switch to English'}
              >
                <Globe size={16} weight="bold" className="text-[#e11d2a]" />
                <span>{isEn ? 'العربية' : 'English'}</span>
              </button>

              {/* Order Now CTA Button */}
              <a
                href="#branches"
                className="neo-btn bg-[#ffc700] text-black font-black text-xs sm:text-base px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl neo-border-sm sm:neo-border neo-shadow flex items-center gap-1.5 sm:gap-2 group hover:bg-white transition-colors"
              >
                <PhoneCall size={16} weight="bold" className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                <span>{t.orderNow}</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
