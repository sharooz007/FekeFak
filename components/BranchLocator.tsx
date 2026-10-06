'use client';

import React from 'react';
import { BRANCHES } from '../data/branches';
import { useLanguage } from '../context/LanguageContext';
import { DICTIONARY } from '../data/translations';
import {
  MapPin,
  PhoneCall,
  WhatsappLogo,
  ArrowSquareOut,
  Building,
  NavigationArrow,
  Truck,
  Storefront,
} from '@phosphor-icons/react';

export default function BranchLocator() {
  const { language, isEn } = useLanguage();
  const t = DICTIONARY[language];

  const formatWhatsAppUrl = (phone: string, branchName: string) => {
    const cleanNumber = phone.replace(/^0/, '966').replace(/\s+/g, '');
    const message = encodeURIComponent(
      isEn
        ? `Hello, I would like to order from Falafel & Shawarma Fkefaak (${branchName})`
        : `السلام عليكم، أود الطلب من فلافل وشاورما على كيفك (${branchName})`
    );
    return `https://wa.me/${cleanNumber}?text=${message}`;
  };

  return (
    <section id="branches" className="py-12 sm:py-24 bg-[#fffdf5] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-black font-black px-4 py-1.5 rounded-full neo-border-sm neo-shadow-sm text-sm mb-3">
            <Building size={18} weight="fill" className="text-[#e11d2a]" />
            <span>{t.branchesBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            {t.branchesTitle}{' '}
            <span className="text-[#e11d2a] underline decoration-black decoration-wavy">
              {t.branchesTitleHighlight}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-gray-700 font-bold max-w-2xl mx-auto leading-relaxed">
            {t.branchesSubtitle}
          </p>
        </div>



        {/* Branches Grid: 2 cards per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-xl sm:rounded-2xl neo-border-sm sm:neo-border neo-shadow p-3 sm:p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group ${
                branch.hasDirectDelivery ? 'ring-2 ring-[#e11d2a]/30' : ''
              }`}
            >
              <div>
                {/* Branch City & Badges */}
                <div className="flex items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                  <span className="bg-[#ffc700] text-black font-black text-[10px] sm:text-xs px-2 py-0.5 rounded-md sm:rounded-lg neo-border-sm">
                    {isEn ? branch.cityEn : branch.city}
                  </span>
                  
                  {branch.hasDirectDelivery ? (
                    <span className="bg-[#e11d2a] text-white font-black text-[9px] sm:text-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1 shadow-sm">
                      <Truck size={12} weight="fill" className="sm:w-3.5 sm:h-3.5" />
                      <span className="hidden sm:inline">{t.directDeliveryBadge}</span>
                      <span className="sm:hidden">{isEn ? 'Direct' : 'مباشر'}</span>
                    </span>
                  ) : (
                    <span className="bg-neutral-100 text-neutral-700 font-bold text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg border border-neutral-300 flex items-center gap-0.5 sm:gap-1">
                      <Storefront size={11} weight="bold" className="sm:w-3 sm:h-3" />
                      <span>{t.pickupBadge}</span>
                    </span>
                  )}
                </div>

                {/* Branch Name */}
                <h3 className="text-sm sm:text-xl font-black text-black group-hover:text-[#e11d2a] transition-colors mb-1 leading-snug">
                  {isEn ? branch.nameEn : branch.name}
                </h3>

                {/* Address if available */}
                {(branch.address || branch.addressEn) && (
                  <p className="text-[10px] sm:text-xs text-gray-600 font-bold mb-2 flex items-center gap-1 line-clamp-1">
                    <MapPin size={12} weight="fill" className="text-[#e11d2a] flex-shrink-0" />
                    <span>{isEn ? (branch.addressEn || branch.address) : branch.address}</span>
                  </p>
                )}

                {/* Google Maps Location Button */}
                <div className="mb-2 sm:mb-3">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#f4f4f5] hover:bg-[#fffae6] border border-black/30 sm:border-2 sm:border-black text-black font-bold text-[10px] sm:text-xs py-1.5 px-2 rounded-lg sm:rounded-xl flex items-center justify-between transition-colors group/map"
                  >
                    <span className="flex items-center gap-1 font-black text-gray-800 group-hover/map:text-[#e11d2a]">
                      <NavigationArrow size={12} weight="fill" className="text-[#e11d2a]" />
                      <span className="hidden sm:inline">{t.mapBtn}</span>
                      <span className="sm:hidden">{t.mapBtnShort}</span>
                    </span>
                    <ArrowSquareOut size={12} weight="bold" className="text-gray-500" />
                  </a>
                </div>

                {/* Primary Phone */}
                <div className="bg-[#fafafa] border border-black/15 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 text-center">
                  <span className="text-[9px] sm:text-xs text-gray-500 font-bold block mb-0.5">
                    {branch.hasDirectDelivery ? t.deliveryAndOrder : t.pickupAndOrder}
                  </span>
                  <a
                    href={`tel:${branch.phone}`}
                    dir="ltr"
                    className="text-xs sm:text-xl font-black text-[#e11d2a] hover:underline tracking-wider"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Additional phones if available */}
                {branch.additionalPhones && branch.additionalPhones.length > 0 && (
                  <div className="mb-2 sm:mb-4 text-[9px] sm:text-xs font-bold text-gray-600 text-center">
                    <span>{t.altPhone}</span>
                    {branch.additionalPhones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        dir="ltr"
                        className="text-black font-extrabold hover:text-[#e11d2a] ml-1"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons: 1-Click Call & 1-Click WhatsApp */}
              <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                <a
                  href={`tel:${branch.phone}`}
                  className="w-full neo-btn bg-[#e11d2a] text-white font-black text-[11px] sm:text-sm py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl neo-border-sm flex items-center justify-center gap-1 sm:gap-2"
                >
                  <PhoneCall size={14} weight="bold" className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{branch.hasDirectDelivery ? t.callBtnDirect : t.callBtnPickup}</span>
                  <span className="sm:hidden">{t.callBtnShort}</span>
                </a>

                <a
                  href={formatWhatsAppUrl(branch.phone, isEn ? branch.nameEn : branch.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full neo-btn bg-[#25D366] text-white font-black text-[11px] sm:text-sm py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl neo-border-sm flex items-center justify-center gap-1 sm:gap-2 hover:bg-[#1ebd5a]"
                >
                  <WhatsappLogo size={14} weight="fill" className="sm:w-4 sm:h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note clarifying delivery availability */}
        <div className="mt-10 text-center bg-[#ffe600]/40 p-4 sm:p-5 rounded-2xl neo-border max-w-3xl mx-auto space-y-2">
          <p className="text-sm font-black text-black">
            {t.branchesFooterDirect}
          </p>
          <p className="text-xs text-gray-800 font-bold">
            {t.branchesFooterApps}
          </p>
        </div>

      </div>
    </section>
  );
}
