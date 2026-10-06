'use client';

import React from 'react';
import Image from 'next/image';
import { InstagramLogo, TiktokLogo, PhoneCall, Fire, Heart, MapPin, NavigationArrow } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t-4 border-black relative overflow-hidden">
      
      {/* Top Sadu Border */}
      <div className="sadu-border-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 bg-white p-1 rounded-xl neo-border-sm neo-shadow-sm transform -rotate-2">
                <Image
                  src="/logo_transparent.png"
                  alt="فلافل وشاورما على كيفك"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  فلافل وشاورما على كيفك
                </h3>
                <span className="text-sm font-bold text-[#ffc700]">
                  FK EFAAK • خبرة وأصالة منذ 2013م
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 font-bold leading-relaxed max-w-sm">
              أفضل مذاق للفلافل المقرمشة والشاورما الأصلية وبرجر كرسبي بالخلطة الخاصة. خدمة التوصيل المباشر والتوصيل السريع عبر التطبيقات المعتمدة.
            </p>

            {/* Social Follow Box */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="https://instagram.com/fkefaak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e11d2a] hover:bg-[#b9141f] text-white font-black text-sm px-4 py-2 rounded-xl neo-border-sm neo-shadow-sm transition-all"
              >
                <InstagramLogo size={18} weight="bold" />
                <span>Instagram: @fkefaak</span>
              </a>

              <a
                href="https://tiktok.com/@fke_faak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-black text-sm px-4 py-2 rounded-xl border border-white/30 neo-shadow-sm transition-all"
              >
                <TiktokLogo size={18} weight="bold" />
                <span>TikTok: @fke_faak</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-lg font-black text-[#ffc700] border-b-2 border-white/20 pb-2">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-sm font-bold text-gray-300">
              <li>
                <a href="#hero" className="hover:text-white hover:underline">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#spotlight" className="hover:text-white hover:underline">
                  أبطال الطاولة (المرجوجة وصحن المزاج)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white hover:underline">
                  المنيو الكامل والأسعار
                </a>
              </li>
              <li>
                <a href="#delivery-apps" className="hover:text-white hover:underline">
                  تطبيقات التوصيل (هنقرستيشن، جاهز، كيتا، نينجا)
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-white hover:underline">
                  فروعنا ومواقع خرائط Google
                </a>
              </li>
            </ul>
          </div>

          {/* Branches Summary (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 text-right">
            <h4 className="text-lg font-black text-[#ffc700] border-b-2 border-white/20 pb-2">
              مدن الفروع (١٠ فروع)
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-bold text-gray-300">
              <div>
                <span className="text-white font-black block mb-1">
                  📍 فروع الأحساء (٨ فروع):
                </span>
                <p className="text-gray-400 leading-relaxed">
                  النزهة، الحزم، السلمانية، الجفر، الحليلة، الجرن، المحدود (الهفوف)، حديقة الملك عبدالله.
                </p>
              </div>

              <div>
                <span className="text-white font-black block mb-1">
                  📍 فروع الخبر (فرعين):
                </span>
                <p className="text-gray-400 leading-relaxed">
                  الجسر (شارع عبدالرحمن بن معاذ)، الصواري / العزيزية.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="https://linktr.ee/fkefaak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#ffc700] hover:underline flex items-center gap-1 font-bold"
                >
                  <NavigationArrow size={14} weight="fill" />
                  <span>عرض جميع مواقع الفروع عبر Linktree</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Giant Watermark & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <p>
            © {new Date().getFullYear()} فلافل وشاورما على كيفك (Fkefaak). تأسس عام 2013م. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2">
            <span>جميع الأسعار شاملة ضريبة القيمة المضافة ١٥٪</span>
            <span className="text-[#e11d2a] font-black">•</span>
            <span className="text-[#ffc700]">توصيل مباشر وتطبيقات</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
