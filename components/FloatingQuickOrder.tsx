'use client';

import React from 'react';
import { PhoneCall, Fire } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';

export default function FloatingQuickOrder() {
  const { language } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <div className="md:hidden fixed bottom-2.5 inset-x-3 z-40">
      <a
        href="#branches"
        className="w-full neo-btn bg-[#ffc700] text-black font-black text-xs py-2 px-3 rounded-xl neo-border-sm neo-shadow flex items-center justify-between shadow-xl"
      >
        <div className="flex items-center gap-1.5">
          <Fire size={18} weight="fill" className="text-[#e11d2a]" />
          <span className="font-extrabold text-xs">{t.quickOrderText}</span>
        </div>
        <div className="flex items-center gap-1 bg-[#e11d2a] text-white px-2.5 py-1 rounded-lg text-xs font-black neo-border-sm">
          <PhoneCall size={14} weight="bold" />
          <span>{t.orderNow}</span>
        </div>
      </a>
    </div>
  );
}
