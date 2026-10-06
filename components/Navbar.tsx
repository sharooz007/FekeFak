'use client';

import React from 'react';
import Image from 'next/image';
import { PhoneCall, MapPin, InstagramLogo, TiktokLogo, Sparkle, Fire } from '@phosphor-icons/react';

export default function Navbar() {

  return (
    <>
      {/* Top Ticker Ribbon - Prestige & Quality Marquee */}
      <div className="bg-[#ffc700] text-[#121212] font-black text-xs sm:text-base border-b-2 border-black overflow-hidden py-1.5 sm:py-2 select-none relative z-50">
        <div className="animate-marquee-rtl flex items-center space-x-reverse space-x-8 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <Fire size={18} weight="fill" className="text-[#e11d2a]" />
            أشهى فلافل وشاورما وكرسبي بالمنطقة الشرقية
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={18} weight="fill" className="text-[#e11d2a]" />
            خبرة وأصالة وجودة منذ 2013م
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={18} weight="fill" className="text-[#e11d2a]" />
            ١٠ فروع لخدمتكم في الأحساء والخبر
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
            أشهى فلافل وشاورما وكرسبي بالمنطقة الشرقية
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={18} weight="fill" className="text-[#e11d2a]" />
            خبرة وأصالة وجودة منذ 2013م
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={18} weight="fill" className="text-[#e11d2a]" />
            ١٠ فروع لخدمتكم في الأحساء والخبر
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
                  alt="شعار فلافل وشاورما على كيفك"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white drop-shadow-[2px_2px_0px_#000]">
                  على كيفك
                </span>
                <span className="text-[10px] sm:text-sm font-bold text-[#ffc700] tracking-wide -mt-0.5">
                  فلافل • شاورما • كرسبي
                </span>
              </div>
            </a>

            {/* Single Focused CTA: Order Now */}
            <div className="flex items-center">
              <a
                href="#branches"
                className="neo-btn bg-[#ffc700] text-black font-black text-xs sm:text-base px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl neo-border-sm sm:neo-border neo-shadow flex items-center gap-1.5 sm:gap-2 group hover:bg-white transition-colors"
              >
                <PhoneCall size={16} weight="bold" className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                <span>اطلب الآن</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
