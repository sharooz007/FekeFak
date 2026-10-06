'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';
import { ArrowRight, ArrowLeft, House } from '@phosphor-icons/react';

export default function MenuBreadcrumb() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <div className="bg-[#fffdf5] border-b-2 border-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="neo-btn bg-white text-black font-black text-sm px-4 py-2 rounded-xl neo-border-sm flex items-center gap-2 hover:bg-[#ffc700] transition-colors"
        >
          {isEn ? <ArrowLeft size={18} weight="bold" /> : <ArrowRight size={18} weight="bold" />}
          <span>{t.backToHome}</span>
        </Link>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600">
          <Link href="/" className="hover:text-black hover:underline flex items-center gap-1">
            <House size={16} weight="bold" />
            <span>{t.home}</span>
          </Link>
          <span>/</span>
          <span className="text-[#e11d2a] font-extrabold">{t.fullMenuTitle}</span>
        </div>
      </div>
    </div>
  );
}
