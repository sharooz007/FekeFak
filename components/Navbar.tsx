'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PhoneCall, List, X, MapPin, InstagramLogo, TiktokLogo, Sparkle, Fire } from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Ticker Ribbon - Prestige & Quality Marquee */}
      <div className="bg-[#ffc700] text-[#121212] font-black text-sm sm:text-base border-b-2 border-black overflow-hidden py-2 select-none relative z-50">
        <div className="animate-marquee-rtl flex items-center space-x-reverse space-x-8 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <Fire size={20} weight="fill" className="text-[#e11d2a]" />
            أشهى فلافل وشاورما وكرسبي بالمنطقة الشرقية
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={20} weight="fill" className="text-[#e11d2a]" />
            خبرة وأصالة وجودة منذ 2013م
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={20} weight="fill" className="text-[#e11d2a]" />
            ١٠ فروع لخدمتكم في الأحساء والخبر
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <InstagramLogo size={20} weight="bold" />
            Instagram: @fkefaak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <TiktokLogo size={20} weight="bold" />
            TikTok: @fke_faak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>

          {/* Seamless loop repeat */}
          <span className="flex items-center gap-2">
            <Fire size={20} weight="fill" className="text-[#e11d2a]" />
            أشهى فلافل وشاورما وكرسبي بالمنطقة الشرقية
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkle size={20} weight="fill" className="text-[#e11d2a]" />
            خبرة وأصالة وجودة منذ 2013م
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-2">
            <MapPin size={20} weight="fill" className="text-[#e11d2a]" />
            ١٠ فروع لخدمتكم في الأحساء والخبر
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <InstagramLogo size={20} weight="bold" />
            Instagram: @fkefaak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
          <span className="flex items-center gap-1">
            <TiktokLogo size={20} weight="bold" />
            TikTok: @fke_faak
          </span>
          <span className="text-[#e11d2a] font-black">•</span>
        </div>
      </div>

      {/* Main Sticky Navbar - Minimal & Focused */}
      <header className="sticky top-0 z-40 bg-[#e11d2a] border-b-4 border-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Brand Title */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-14 bg-white p-1 rounded-xl neo-border-sm neo-shadow-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
                <Image
                  src="/logo_transparent.png"
                  alt="شعار فلافل وشاورما على كيفك"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-[2px_2px_0px_#000]">
                  على كيفك
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#ffc700] tracking-wide -mt-1">
                  فلافل • شاورما • كرسبي (منذ 2013)
                </span>
              </div>
            </a>

            {/* Clean Desktop Navigation: Only Locations & Order Button */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
              {/* Location Link Button */}
              <a
                href="#branches"
                className="neo-btn bg-white text-black font-black text-sm sm:text-base px-5 py-2.5 rounded-xl neo-border neo-shadow flex items-center gap-2 hover:bg-neutral-100 transition-colors"
              >
                <MapPin size={22} weight="fill" className="text-[#e11d2a]" />
                <span>المواقع والفروع</span>
                <span className="bg-[#ffc700] text-black text-xs font-black px-1.5 py-0.5 rounded-md neo-border-sm">
                  ١٠
                </span>
              </a>

              {/* Demand / Order Button */}
              <a
                href="#branches"
                className="neo-btn bg-[#ffc700] text-black font-black text-sm sm:text-base px-6 py-2.5 rounded-xl neo-border neo-shadow flex items-center gap-2 group"
              >
                <PhoneCall size={22} weight="bold" className="group-hover:animate-bounce" />
                <span>الطلب المباشر</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="sm:hidden flex items-center gap-2">
              <a
                href="#branches"
                className="bg-[#ffc700] text-black font-black text-xs px-3 py-2 rounded-xl neo-border-sm flex items-center gap-1"
              >
                <PhoneCall size={16} weight="bold" />
                <span>الطلب</span>
              </a>

              <a
                href="#branches"
                className="bg-white text-black font-black text-xs px-3 py-2 rounded-xl neo-border-sm flex items-center gap-1"
              >
                <MapPin size={16} weight="fill" className="text-[#e11d2a]" />
                <span>المواقع</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
