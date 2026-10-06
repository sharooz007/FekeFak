'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';
import {
  MagnifyingGlass,
  Fire,
  Sparkle,
  PhoneCall,
  Check,
  Tag,
} from '@phosphor-icons/react';

export default function InteractiveMenu() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

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
      // Search filter (searches Arabic name, English name, and description)
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
            <span>{t.menuOfficialBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            {t.menuOfficialTitle}{' '}
            <span className="text-[#e11d2a] underline decoration-black decoration-wavy">
              {t.brandName}
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-bold max-w-xl mx-auto">
            {t.menuOfficialSubtitle}
          </p>
        </div>

        {/* Filter Controls (Search + Quick Toggles) */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl neo-border neo-shadow-lg mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-[#f4f4f5] border-2 border-black rounded-xl py-3 text-black font-bold text-base focus:outline-none focus:ring-2 focus:ring-[#e11d2a] ${
                  isEn ? 'pl-11 pr-4' : 'pr-11 pl-4'
                }`}
              />
              <MagnifyingGlass
                size={22}
                weight="bold"
                className={`absolute top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none ${
                  isEn ? 'left-3.5' : 'right-3.5'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-xs bg-black text-white px-2 py-1 rounded-md ${
                    isEn ? 'right-3' : 'left-3'
                  }`}
                >
                  {t.clearSearch}
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
                <span>{t.under10Sar}</span>
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
                <span>{t.popularOnly}</span>
                {filterPopular && <Check size={16} weight="bold" />}
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const catName = isEn ? cat.nameEn : cat.name;
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
                  {catName}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-sm font-black text-gray-700">
            {t.foundItems}{' '}
            <span className="text-[#e11d2a] font-extrabold text-base">
              {filteredItems.length}
            </span>{' '}
            {t.itemsUnit}
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
              {t.resetFilters}
            </button>
          )}
        </div>

        {/* Grid of Menu Items: 2 cards per row on mobile */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl neo-border p-8">
            <p className="text-2xl font-black text-black">{t.noItemsFound}</p>
            <p className="text-gray-600 font-bold mt-2">{t.noItemsHint}</p>
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
              {t.showAllItems}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl neo-border-sm sm:neo-border neo-shadow flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Item Image & Badges */}
                  <div className="relative h-28 sm:h-48 w-full bg-neutral-100 overflow-hidden border-b-2 border-black">
                    <Image
                      src={item.image}
                      alt={isEn ? (item.nameEn || item.name) : item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Tag badge (Top right) */}
                    {item.tag && (
                      <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-[#ffc700] text-black text-[9px] sm:text-xs font-black px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg neo-border-sm shadow-sm">
                        {item.tag}
                      </div>
                    )}

                    {/* Pieces Count if applicable */}
                    {item.pieces && (
                      <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-black/85 text-white text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
                        {item.pieces}
                      </div>
                    )}

                    {/* Price Sticker (Bottom left) */}
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 bg-[#e11d2a] text-white font-black text-xs sm:text-lg px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-xl neo-border-sm neo-shadow-sm flex items-center gap-0.5 sm:gap-1">
                      <span>{item.price}</span>
                      <span className="text-[10px] sm:text-xs font-bold">{t.sar}</span>
                    </div>

                    {/* Calories Pill (Bottom right) */}
                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 bg-black/80 backdrop-blur-sm text-[#ffc700] text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-white/20 flex items-center gap-0.5 sm:gap-1">
                      <Fire size={11} weight="fill" className="text-[#e11d2a] sm:w-3.5 sm:h-3.5" />
                      <span>{item.calories} {t.kcalShort}</span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className={`p-2.5 sm:p-4 space-y-1 sm:space-y-2 ${isEn ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-sm sm:text-xl font-black text-black group-hover:text-[#e11d2a] transition-colors leading-tight">
                      {isEn ? (item.nameEn || item.name) : item.name}
                    </h3>

                    <p className="text-[11px] sm:text-sm text-gray-700 font-bold leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Add-ons Notice */}
                    {item.addOn && (
                      <div className="pt-0.5">
                        <span className="inline-block bg-[#fffae6] border border-[#ffc700] text-black text-[9px] sm:text-xs font-black px-1.5 py-0.5 rounded">
                          + {item.addOn.name} ({item.addOn.price} {t.sarShort})
                        </span>
                      </div>
                    )}

                    {/* Combo Option Notice */}
                    {item.comboOption && (
                      <div className="pt-0.5">
                        <span className="inline-block bg-red-50 border border-red-300 text-[#e11d2a] text-[9px] sm:text-xs font-black px-1.5 py-0.5 rounded">
                          {t.comboMeal} (+{item.comboOption.price} {t.sarShort})
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
                    <span>{t.orderFromBranch}</span>
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
