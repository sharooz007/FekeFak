'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowSquareOut, Sparkle, Truck, ShoppingBagOpen } from '@phosphor-icons/react';

const DELIVERY_APPS = [
  {
    id: 'hungerstation',
    name: 'هنقرستيشن',
    nameEn: 'Hungerstation',
    logo: '/delivery-apps/hungerstation.jpg',
    badge: 'الأكثر انتشاراً',
    color: '#FFB800',
    textColor: '#000000',
    description: 'ابحث عن "على كيفك" واطلب وجبتك فوراً مع خيارات دفع متعددة.',
    url: 'https://hungerstation.com',
  },
  {
    id: 'jahez',
    name: 'جاهز',
    nameEn: 'Jahez',
    logo: '/delivery-apps/jahez.jpg',
    badge: 'توصيل موثوق',
    color: '#E4002B',
    textColor: '#FFFFFF',
    description: 'توصيل فوري من أقرب فرع لك مع متابعة السائق بالخريطة مباشرة.',
    url: 'https://jahez.net',
  },
  {
    id: 'keeta',
    name: 'كيتا',
    nameEn: 'Keeta',
    logo: '/delivery-apps/keeta.jpg',
    badge: 'عروض حصرية',
    color: '#FFD000',
    textColor: '#000000',
    description: 'تجربة توصيل سلسة وسريعة مع تتبع دقيق لوقت وصول طلبك.',
    url: 'https://www.keeta.com',
  },
  {
    id: 'ninja',
    name: 'نينجا',
    nameEn: 'Ninja',
    logo: '/delivery-apps/ninja.jpg',
    badge: 'توصيل فائق السرعة',
    color: '#5A189A',
    textColor: '#FFFFFF',
    description: 'سرعة قياسية في التوصيل لوجباتك المقرمشة والساخنة.',
    url: 'https://ananinja.com',
  },
];

export default function DeliveryApps() {
  return (
    <section id="delivery-apps" className="py-16 sm:py-20 bg-white border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffc700] text-black font-black px-4 py-1.5 rounded-full neo-border-sm neo-shadow-sm text-sm mb-3">
            <ShoppingBagOpen size={18} weight="fill" className="text-[#e11d2a]" />
            <span>تطبيقات التوصيل المعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            متواجدون على تطبيقاتك{' '}
            <span className="text-[#e11d2a] underline decoration-black decoration-wavy">
              المفضلة
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-700 font-bold max-w-xl mx-auto">
            يمكنك طلب جميع وجبات فلافل وشاورما على كيفك بكل سهولة وسرعة عبر المنصات التالية:
          </p>
        </div>

        {/* 4 App Cards Grid: 2 cards per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {DELIVERY_APPS.map((app) => (
            <div
              key={app.id}
              className="bg-[#faf9f6] rounded-xl sm:rounded-2xl neo-border-sm sm:neo-border neo-shadow p-3 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group text-right"
            >
              <div>
                {/* Header: App Logo + Tag */}
                <div className="flex items-start justify-between gap-1.5 sm:gap-3 mb-2.5 sm:mb-4">
                  <div className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden neo-border-sm shadow-md bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={app.logo}
                      alt={app.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="bg-[#ffc700] text-black font-black text-[9px] sm:text-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg neo-border-sm">
                    {app.badge}
                  </span>
                </div>

                {/* App Names */}
                <h3 className="text-base sm:text-2xl font-black text-black group-hover:text-[#e11d2a] transition-colors">
                  {app.name}
                </h3>
                <span className="text-[10px] sm:text-xs text-gray-500 font-bold tracking-wider block mb-1 sm:mb-2">
                  {app.nameEn}
                </span>

                <p className="text-[11px] sm:text-sm text-gray-700 font-bold leading-relaxed mb-3 sm:mb-6 line-clamp-2">
                  {app.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full neo-btn font-black text-[11px] sm:text-sm py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl neo-border-sm flex items-center justify-center gap-1 sm:gap-2 shadow-sm transition-all"
                style={{
                  backgroundColor: app.color,
                  color: app.textColor,
                }}
              >
                <span>طلب {app.name}</span>
                <ArrowSquareOut size={14} weight="bold" />
              </a>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 bg-[#e11d2a] text-white p-5 rounded-2xl neo-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ffc700] text-black rounded-xl neo-border-sm flex items-center justify-center font-black flex-shrink-0">
              <Truck size={22} weight="fill" />
            </div>
            <div>
              <h4 className="font-black text-base">هل تفضل الطلب والاستلام المباشر؟</h4>
              <p className="text-xs text-white/90 font-bold">
                يمكنك أيضاً الاتصال بأي فرع من فروعنا العشرة والاستلام فوراً بدون انتظار!
              </p>
            </div>
          </div>

          <a
            href="#branches"
            className="neo-btn bg-white text-black font-black text-sm px-6 py-2.5 rounded-xl neo-border-sm hover:bg-[#ffc700] transition-colors flex-shrink-0"
          >
            عرض فروعنا وأرقامها
          </a>
        </div>

      </div>
    </section>
  );
}
