'use client';

import React from 'react';
import Image from 'next/image';
import { InstagramLogo, TiktokLogo, NavigationArrow } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';

export default function Footer() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <footer className="bg-[#121212] text-white border-t-4 border-black relative overflow-hidden">
      
      {/* Top Sadu Border */}
      <div className="sadu-border-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Brand Info */}
          <div className={`space-y-4 ${isEn ? 'text-left' : 'text-right'}`}>
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16 bg-white p-1 rounded-xl neo-border-sm neo-shadow-sm transform -rotate-2">
                <Image
                  src="/logo_transparent.png"
                  alt="Fkefaak Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  {t.brandName}
                </h3>
                <span className="text-sm font-bold text-[#ffc700]">
                  FK EFAAK • {t.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 font-bold leading-relaxed max-w-md">
              {t.footerDesc}
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

          {/* Branches Summary */}
          <div className={`space-y-3 ${isEn ? 'text-left' : 'text-right'}`}>
            <h4 className="text-lg font-black text-[#ffc700] border-b-2 border-white/20 pb-2">
              {t.footerCitiesTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-bold text-gray-300">
              <div>
                <span className="text-white font-black block mb-1">
                  {t.footerAhsaTitle}
                </span>
                <p className="text-gray-400 leading-relaxed">
                  {t.footerAhsaList}
                </p>
              </div>

              <div>
                <span className="text-white font-black block mb-1">
                  {t.footerKhobarTitle}
                </span>
                <p className="text-gray-400 leading-relaxed">
                  {t.footerKhobarList}
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
                  <span>{t.footerLinktree}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Giant Watermark & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <p>
            {t.footerCopyright}
          </p>
          <div className="flex items-center gap-2">
            <span>{t.footerVatBadge}</span>
            <span className="text-[#e11d2a] font-black">•</span>
            <span className="text-[#ffc700]">{t.footerDeliveryBadge}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
