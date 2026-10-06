'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BEST_SELLERS } from '../data/menu';
import {
  Fire,
  Sparkle,
  PhoneCall,
  ArrowLeft,
  CaretDown,
  CaretUp,
  ForkKnife,
} from '@phosphor-icons/react';

export default function MenuPreview() {
  const [showAllEight, setShowAllEight] = useState(false);

  // Show either 4 items initially, or all 8 best sellers when expanded
  const displayedItems = showAllEight ? BEST_SELLERS : BEST_SELLERS.slice(0, 4);

  return (
    <section id="menu-preview" className="py-16 sm:py-24 bg-[#faf9f6] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e11d2a] text-white font-black px-4 py-1.5 rounded-full neo-border-sm neo-shadow-sm text-sm mb-3">
            <Fire size={18} weight="fill" className="text-[#ffc700]" />
            <span>الأكثر طلباً ومبيعاً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            أشهى اختيارات زبائن{' '}
            <span className="text-[#e11d2a] underline decoration-black decoration-wavy">
              على كيفك
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-bold max-w-xl mx-auto">
            الوجبات الأكثر شهرة وطلباً يومياً في كافة فروعنا بالأحساء والخبر.
          </p>
        </div>

        {/* Grid of Best Selling Items: 2 cards per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl neo-border-sm sm:neo-border neo-shadow flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Item Image & Badges */}
                <div className="relative h-28 sm:h-48 w-full bg-neutral-100 overflow-hidden border-b-2 border-black">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Most Popular Badge */}
                  <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-[#ffc700] text-black text-[9px] sm:text-xs font-black px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg neo-border-sm shadow-sm flex items-center gap-1">
                    <Sparkle size={10} weight="fill" className="text-[#e11d2a] sm:w-3 sm:h-3" />
                    <span>الأكثر طلباً</span>
                  </div>

                  {/* Price Sticker */}
                  <div className="absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 bg-[#e11d2a] text-white font-black text-xs sm:text-lg px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-xl neo-border-sm neo-shadow-sm flex items-center gap-0.5 sm:gap-1">
                    <span>{item.price}</span>
                    <span className="text-[10px] sm:text-xs font-bold">ريال</span>
                  </div>

                  {/* Calories Pill */}
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 bg-black/80 backdrop-blur-sm text-[#ffc700] text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-white/20 flex items-center gap-0.5 sm:gap-1">
                    <Fire size={11} weight="fill" className="text-[#e11d2a] sm:w-3.5 sm:h-3.5" />
                    <span>{item.calories} س</span>
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-2.5 sm:p-4 space-y-1 sm:space-y-2 text-right">
                  <h3 className="text-sm sm:text-xl font-black text-black group-hover:text-[#e11d2a] transition-colors leading-tight">
                    {item.name}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-gray-700 font-bold leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Add-ons Notice */}
                  {item.addOn && (
                    <div className="pt-0.5">
                      <span className="inline-block bg-[#fffae6] border border-[#ffc700] text-black text-[9px] sm:text-xs font-black px-1.5 py-0.5 rounded">
                        + {item.addOn.name} ({item.addOn.price} ر)
                      </span>
                    </div>
                  )}

                  {/* Combo Option Notice */}
                  {item.comboOption && (
                    <div className="pt-0.5">
                      <span className="inline-block bg-red-50 border border-red-300 text-[#e11d2a] text-[9px] sm:text-xs font-black px-1.5 py-0.5 rounded">
                        🍟 كومبو (+{item.comboOption.price} ر)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-2 sm:p-4 pt-0">
                <a
                  href="#branches"
                  className="w-full neo-btn bg-[#ffc700] text-black font-black text-xs sm:text-sm py-2 sm:py-2.5 rounded-lg sm:rounded-xl neo-border-sm flex items-center justify-center gap-1.5 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors"
                >
                  <PhoneCall size={14} weight="bold" className="sm:w-4 sm:h-4" />
                  <span>اطلب من فرعك</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Action Controls: View More Toggle & View All Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Toggle 4 vs 8 Most Selling Items */}
          <button
            type="button"
            onClick={() => setShowAllEight(!showAllEight)}
            className="w-full sm:w-auto neo-btn bg-white text-black font-black text-base px-6 py-3.5 rounded-xl neo-border neo-shadow flex items-center justify-center gap-2 hover:bg-[#ffc700] transition-colors"
          >
            {showAllEight ? (
              <>
                <CaretUp size={20} weight="bold" />
                <span>عرض أقل (٤ أصناف)</span>
              </>
            ) : (
              <>
                <CaretDown size={20} weight="bold" />
                <span>عرض المزيد من الأكثر مبيعاً (٨ أصناف)</span>
              </>
            )}
          </button>

          {/* Special Page Link: View All 30 Items */}
          <Link
            href="/menu"
            className="w-full sm:w-auto neo-btn bg-[#e11d2a] text-white font-black text-base sm:text-lg px-8 py-3.5 rounded-xl neo-border neo-shadow-lg flex items-center justify-center gap-3 hover:bg-[#b9141f] transition-all group"
          >
            <ForkKnife size={22} weight="bold" />
            <span>عرض المنيو الكامل (٣٠ صنف)</span>
            <ArrowLeft size={20} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
          </Link>

        </div>

      </div>
    </section>
  );
}
