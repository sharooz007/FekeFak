'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menu';
import {
  MagnifyingGlass,
  Fire,
  Sparkle,
  Plus,
  PhoneCall,
  Check,
  Funnel,
  Tag,
} from '@phosphor-icons/react';

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterUnder10, setFilterUnder10] = useState<boolean>(false);
  const [filterPopular, setFilterPopular] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesEn = item.nameEn?.toLowerCase().includes(query) ?? false;
        if (!matchesName && !matchesDesc && !matchesEn) {
          return false;
        }
      }
      // Under 10 SAR filter
      if (filterUnder10 && item.price >= 10) {
        return false;
      }
      // Popular filter
      if (filterPopular && !item.isPopular && !item.isSignature) {
        return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, filterUnder10, filterPopular]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#faf9f6] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e11d2a] text-white font-black px-4 py-1.5 rounded-full neo-border-sm neo-shadow-sm text-sm mb-3">
            <Fire size={18} weight="fill" className="text-[#ffc700]" />
            <span>المنيو الأصلي والأسعار الرسمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            منيو فلافل وشاورما{' '}
            <span className="text-[#e11d2a] underline decoration-black decoration-wavy">
              على كيفك
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-bold max-w-xl mx-auto">
            جميع الأسعار موضحة بالريال السعودي وشاملة لضريبة القيمة المضافة ١٥٪ مع السعرات الحرارية لكل صنف.
          </p>
        </div>

        {/* Filter Controls (Search + Quick Toggles) */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl neo-border neo-shadow-lg mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <input
                type="text"
                placeholder="ابحث عن وجبتك المفضلة (فلافل، شاورما، برجر، حمص...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f4f4f5] border-2 border-black rounded-xl py-3 pr-11 pl-4 text-black font-bold text-base focus:outline-none focus:ring-2 focus:ring-[#e11d2a]"
              />
              <MagnifyingGlass
                size={22}
                weight="bold"
                className="absolute top-1/2 -translate-y-1/2 right-3.5 text-gray-500 pointer-events-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-xs bg-black text-white px-2 py-1 rounded-md"
                >
                  مسح
                </button>
              )}
            </div>

            {/* Quick Badge Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setFilterUnder10(!filterUnder10)}
                className={`neo-btn px-4 py-2.5 rounded-xl neo-border-sm text-sm font-black flex items-center gap-1.5 ${
                  filterUnder10
                    ? 'bg-[#e11d2a] text-white shadow-none'
                    : 'bg-white text-black hover:bg-[#ffc700]'
                }`}
              >
                <Tag size={18} weight="bold" />
                <span>أقل من ١٠ ريال</span>
                {filterUnder10 && <Check size={16} weight="bold" />}
              </button>

              <button
                type="button"
                onClick={() => setFilterPopular(!filterPopular)}
                className={`neo-btn px-4 py-2.5 rounded-xl neo-border-sm text-sm font-black flex items-center gap-1.5 ${
                  filterPopular
                    ? 'bg-[#ffc700] text-black shadow-none'
                    : 'bg-white text-black hover:bg-[#ffc700]'
                }`}
              >
                <Sparkle size={18} weight="fill" />
                <span>الأكثر طلباً فقط</span>
                {filterPopular && <Check size={16} weight="bold" />}
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`neo-btn flex-shrink-0 px-5 py-2.5 rounded-xl text-base font-black border-2 border-black transition-all ${
                    isActive
                      ? 'bg-[#e11d2a] text-white neo-shadow-sm'
                      : 'bg-white text-black hover:bg-[#ffe600]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-sm font-black text-gray-700">
            تم العثور على{' '}
            <span className="text-[#e11d2a] font-extrabold text-base">
              {filteredItems.length}
            </span>{' '}
            صنف
          </span>

          {(searchQuery || filterUnder10 || filterPopular || activeCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilterUnder10(false);
                setFilterPopular(false);
              }}
              className="text-xs font-black text-[#e11d2a] underline hover:text-black"
            >
              إعادة تعيين الفلاتر
            </button>
          )}
        </div>

        {/* Grid of Menu Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl neo-border p-8">
            <p className="text-2xl font-black text-black">لم يتم العثور على أطباق مطابقة!</p>
            <p className="text-gray-600 font-bold mt-2">جرّب البحث باسم آخر أو إزالة الفلاتر.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFilterUnder10(false);
                setFilterPopular(false);
              }}
              className="mt-4 neo-btn bg-[#ffc700] text-black font-black px-6 py-2.5 rounded-xl neo-border text-sm"
            >
              عرض جميع الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl neo-border neo-shadow flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Item Image & Badges */}
                  <div className="relative h-48 w-full bg-neutral-100 overflow-hidden border-b-2 border-black">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag badge (Top right) */}
                    {item.tag && (
                      <div className="absolute top-2.5 right-2.5 bg-[#ffc700] text-black text-xs font-black px-2.5 py-1 rounded-lg neo-border-sm shadow-sm">
                        {item.tag}
                      </div>
                    )}

                    {/* Pieces Count if applicable */}
                    {item.pieces && (
                      <div className="absolute top-2.5 left-2.5 bg-black/85 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                        {item.pieces}
                      </div>
                    )}

                    {/* Price Sticker (Bottom left) */}
                    <div className="absolute bottom-2.5 left-2.5 bg-[#e11d2a] text-white font-black text-lg px-3 py-1 rounded-xl neo-border-sm neo-shadow-sm flex items-center gap-1">
                      <span>{item.price}</span>
                      <span className="text-xs font-bold">ريال</span>
                    </div>

                    {/* Calories Pill (Bottom right) */}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-[#ffc700] text-xs font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                      <Fire size={14} weight="fill" className="text-[#e11d2a]" />
                      <span>{item.calories} سعرة</span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-4 space-y-2 text-right">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-black text-black group-hover:text-[#e11d2a] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Add-ons Notice */}
                    {item.addOn && (
                      <div className="pt-1">
                        <span className="inline-block bg-[#fffae6] border border-[#ffc700] text-black text-xs font-black px-2 py-1 rounded-md">
                          + {item.addOn.name} ({item.addOn.price} ريال) | {item.addOn.calories} سعرة
                        </span>
                      </div>
                    )}

                    {/* Combo Option Notice */}
                    {item.comboOption && (
                      <div className="pt-1">
                        <span className="inline-block bg-red-50 border border-red-300 text-[#e11d2a] text-xs font-black px-2 py-1 rounded-md">
                          🍟 {item.comboOption.name} (+{item.comboOption.price} ريال)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-0">
                  <a
                    href="#branches"
                    className="w-full neo-btn bg-[#ffc700] text-black font-black text-sm py-2.5 rounded-xl neo-border-sm flex items-center justify-center gap-2 group-hover:bg-[#e11d2a] group-hover:text-white transition-colors"
                  >
                    <PhoneCall size={18} weight="bold" />
                    <span>اطلب هذا الصنف من فرعك</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
