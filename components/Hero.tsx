'use client';

import React from 'react';
import Image from 'next/image';
import { ForkKnife, PhoneCall, Sparkle, Fire, MapPin, Medal } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#e11d2a] text-white overflow-hidden border-b-4 border-black pt-5 pb-8 sm:pb-20 lg:pb-24"
    >
      {/* Background Texture: Halftone Dots */}
      <div className="absolute inset-0 bg-dots-white opacity-20 pointer-events-none" />

      {/* Floating Badges Focused on Quality & Heritage */}
      <div className="hidden lg:block absolute top-8 right-12 z-10 transform -rotate-6">
        <div className="bg-[#ffc700] text-black font-black px-4 py-2 rounded-xl neo-border neo-shadow text-sm uppercase tracking-wider flex items-center gap-1.5 shadow-md">
          <Medal size={20} weight="fill" className="text-[#e11d2a]" />
          <span>عراقة وجودة منذ 2013م</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-16 right-16 z-10 transform rotate-6">
        <div className="bg-white text-black font-black px-4 py-2 rounded-xl neo-border neo-shadow text-sm flex items-center gap-1.5 shadow-md">
          <MapPin size={20} weight="fill" className="text-[#e11d2a]" />
          <span>١٠ فروع بالأحساء والخبر</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (Text & Call to Actions) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-right">
            
            {/* Punchy Headline - Balanced on Mobile & Desktop */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-[2px_2px_0px_#000] sm:drop-shadow-[3px_3px_0px_#000]">
              القرمشة الأسطورية...{' '}
              <span className="text-[#ffc700] inline-block underline decoration-black decoration-wavy decoration-2">
                على كيفك!
              </span>
            </h1>

            {/* Subtitle - Appetite, Quality & Experience */}
            <p className="text-sm sm:text-lg lg:text-xl text-white/95 font-medium sm:font-bold max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
              ألذ فلافل شامية مقرمشة تُقلى فور طلبك، شاورما دجاج متبلة على السيخ بخلطتنا الحصرية، وبرجر دجاج كرسبي بالخلطة السرية الفاخرة — نكهة تُرضي كل الأذواق.
            </p>

            {/* Action Buttons: Side-by-Side on Mobile */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full">
              <a
                href="#menu-preview"
                className="flex-1 sm:flex-initial neo-btn bg-[#ffc700] text-black font-black text-xs sm:text-base px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-xl neo-border-sm neo-shadow flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                <ForkKnife size={18} weight="bold" className="group-hover:rotate-12 transition-transform sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">استكشف المنيو</span>
              </a>

              <a
                href="#branches"
                className="flex-1 sm:flex-initial neo-btn bg-white text-black font-black text-xs sm:text-base px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-xl neo-border-sm neo-shadow flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                <MapPin size={18} weight="fill" className="text-[#e11d2a] group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">المواقع والطلب</span>
              </a>
            </div>

            {/* Quality Pillars Strip: Proper 3-Column Clean Grid on Mobile */}
            <div className="pt-2 grid grid-cols-3 gap-1.5 sm:gap-3 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-black/25 px-2 py-1.5 sm:py-2 rounded-xl border border-white/20">
                <span className="text-[#ffc700] text-xs sm:text-sm font-black">✓</span>
                <span className="text-[10px] sm:text-xs font-black text-white/95 leading-tight">فلافل طازجة تقلى فوراً</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-black/25 px-2 py-1.5 sm:py-2 rounded-xl border border-white/20">
                <span className="text-[#ffc700] text-xs sm:text-sm font-black">✓</span>
                <span className="text-[10px] sm:text-xs font-black text-white/95 leading-tight">شاورما بتتبيلة السيخ</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-black/25 px-2 py-1.5 sm:py-2 rounded-xl border border-white/20">
                <span className="text-[#ffc700] text-xs sm:text-sm font-black">✓</span>
                <span className="text-[10px] sm:text-xs font-black text-white/95 leading-tight">١٠ فروع بالشرقية</span>
              </div>
            </div>

            {/* Delivery Apps Quick Row */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="text-[11px] sm:text-sm font-bold text-[#ffc700]">
                متوفر أيضاً عبر تطبيقات التوصيل:
              </span>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap">
                <a
                  href="#delivery-apps"
                  className="bg-white p-1 rounded-lg neo-border-sm hover:scale-105 transition-transform flex items-center gap-1 px-1.5 sm:px-2"
                  title="هنقرستيشن"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden">
                    <Image src="/delivery-apps/hungerstation.jpg" alt="Hungerstation" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-black">هنقرستيشن</span>
                </a>

                <a
                  href="#delivery-apps"
                  className="bg-white p-1 rounded-lg neo-border-sm hover:scale-105 transition-transform flex items-center gap-1 px-1.5 sm:px-2"
                  title="جاهز"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden">
                    <Image src="/delivery-apps/jahez.jpg" alt="Jahez" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-black">جاهز</span>
                </a>

                <a
                  href="#delivery-apps"
                  className="bg-white p-1 rounded-lg neo-border-sm hover:scale-105 transition-transform flex items-center gap-1 px-1.5 sm:px-2"
                  title="كيتا"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden">
                    <Image src="/delivery-apps/keeta.jpg" alt="Keeta" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-black">كيتا</span>
                </a>

                <a
                  href="#delivery-apps"
                  className="bg-white p-1 rounded-lg neo-border-sm hover:scale-105 transition-transform flex items-center gap-1 px-1.5 sm:px-2"
                  title="نينجا"
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden">
                    <Image src="/delivery-apps/ninja.jpg" alt="Ninja" fill className="object-cover" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-black">نينجا</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual: Mouthwatering Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame */}
              <div className="relative bg-[#fffdf5] text-black p-4 rounded-3xl neo-border neo-shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                
                {/* Gold Quality Ribbon */}
                <div className="absolute -top-4 -right-4 z-30 bg-[#ffc700] text-black font-black px-4 py-2 rounded-xl neo-border neo-shadow transform -rotate-12 text-sm shadow-md flex items-center gap-1.5">
                  <Fire size={18} weight="fill" className="text-[#e11d2a]" />
                  <span>طعم أصيل ومقرمش</span>
                </div>

                {/* Main Food Photo */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden neo-border-sm bg-neutral-100">
                  <Image
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1000&q=80"
                    alt="فلافل وشاورما على كيفك"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Quality Label */}
                  <div className="absolute bottom-3 left-3 bg-[#e11d2a] text-white font-black px-4 py-1.5 rounded-xl neo-border-sm neo-shadow-sm text-sm">
                    الفلافل الذهبية المقرمشة
                  </div>
                </div>

                {/* Sub-grid of Favorites */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="relative h-28 rounded-xl overflow-hidden neo-border-sm group">
                    <Image
                      src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80"
                      alt="شاورما صاج على كيفك"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-white text-xs font-black">شاورما صاج محمرة</span>
                    </div>
                  </div>

                  <div className="relative h-28 rounded-xl overflow-hidden neo-border-sm group">
                    <Image
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
                      alt="برجر الأسطورة كرسبي"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-white text-xs font-black">برجر كرسبي بالخلطة السرية</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Line */}
                <div className="mt-3 text-center bg-[#ffe600]/30 py-2 px-3 rounded-xl border border-black/10">
                  <p className="text-xs font-black text-black">
                    ⭐ نعد وجباتكم بحب وعناية فائقة بأعلى معايير الجودة والنظافة
                  </p>
                </div>

              </div>

              {/* Decorative Background Offset Card */}
              <div className="absolute -inset-2 bg-black rounded-3xl -z-10 transform -rotate-2" />
            </div>
          </div>

        </div>
      </div>

      {/* Sadu Chevron Divider */}
      <div className="absolute bottom-0 inset-x-0 sadu-border-top" />
    </section>
  );
}
