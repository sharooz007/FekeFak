'use client';

import React from 'react';
import { PhoneCall, Fire } from '@phosphor-icons/react';

export default function FloatingQuickOrder() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
      <a
        href="#branches"
        className="w-full neo-btn bg-[#ffc700] text-black font-black text-base py-3.5 px-6 rounded-2xl neo-border neo-shadow-lg flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <Fire size={22} weight="fill" className="text-[#e11d2a]" />
          <span>الطلب والتوصيل السريع</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#e11d2a] text-white px-3.5 py-1.5 rounded-xl text-sm font-black neo-border-sm">
          <PhoneCall size={18} weight="bold" />
          <span>اختر فرعك واطلب</span>
        </div>
      </a>
    </div>
  );
}
