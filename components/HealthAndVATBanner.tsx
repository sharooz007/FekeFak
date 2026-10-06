'use client';

import React from 'react';
import { Heartbeat, WarningCircle, Receipt } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';

export default function HealthAndVATBanner() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

  return (
    <section className="py-12 bg-white border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Calorie Advisory */}
          <div className={`bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 ${
            isEn ? 'text-left' : 'text-right'
          }`}>
            <div className="w-12 h-12 bg-[#e11d2a] text-white rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <Heartbeat size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">{t.healthTitle}</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                {t.healthDesc}
              </p>
            </div>
          </div>

          {/* Card 2: Allergen Disclosure */}
          <div className={`bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 ${
            isEn ? 'text-left' : 'text-right'
          }`}>
            <div className="w-12 h-12 bg-[#ffc700] text-black rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <WarningCircle size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">{t.allergenTitle}</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                {t.allergenDesc}
              </p>
            </div>
          </div>

          {/* Card 3: 15% VAT */}
          <div className={`bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 ${
            isEn ? 'text-left' : 'text-right'
          }`}>
            <div className="w-12 h-12 bg-black text-white rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <Receipt size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">{t.vatTitle}</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                {t.vatNotice}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
