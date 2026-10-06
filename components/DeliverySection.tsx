'use client';

import React from 'react';
import { Truck, PhoneCall, Sparkle, Clock, ShieldCheck, MapPin, Storefront } from '@phosphor-icons/react';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-16 sm:py-20 bg-[#e11d2a] text-white border-b-4 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-white opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="bg-[#121212] text-white rounded-3xl neo-border neo-shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Floating Badge */}
          <div className="absolute -top-3 left-6 sm:left-12 bg-[#ffc700] text-black font-black px-4 sm:px-6 py-2 rounded-xl neo-border text-sm sm:text-base transform -rotate-3">
            🚀 توصيل مباشر وسريع
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            
            {/* Left Column: Slogan & Details */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                ما تقدر تجينا؟{' '}
                <span className="text-[#ffc700] block sm:inline">
                  احنا نجيك!
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 font-bold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                طلبك يوصلك ساخن ومقرمش مباشرة إلى باب بيتك أو مكان عملك في الأحساء والخبر.
              </p>

              {/* Direct Delivery Outlets Badge */}
              <div className="bg-[#1e1e1e] border-2 border-white/20 rounded-2xl p-4 text-right space-y-2">
                <span className="text-xs sm:text-sm font-black text-[#ffc700] block">
                  🛵 فروع التوصيل المباشر المعتمدة:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#e11d2a] text-white text-xs font-black px-3 py-1 rounded-lg neo-border-sm">
                    فرع الجرن
                  </span>
                  <span className="bg-[#e11d2a] text-white text-xs font-black px-3 py-1 rounded-lg neo-border-sm">
                    فرع الجفر
                  </span>
                  <span className="bg-[#e11d2a] text-white text-xs font-black px-3 py-1 rounded-lg neo-border-sm">
                    فرع الجسر (الخبر)
                  </span>
                  <span className="bg-[#e11d2a] text-white text-xs font-black px-3 py-1 rounded-lg neo-border-sm">
                    فرع العزيزية (الخبر)
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-bold pt-1">
                  * باقي الفروع الـ ١٠ متاحة بالكامل للتوصيل السريع عبر تطبيقات: هنقرستيشن، جاهز، كيتا، ونينجا.
                </p>
              </div>

              {/* Quick Action */}
              <div className="pt-2">
                <a
                  href="#branches"
                  className="neo-btn inline-flex items-center gap-3 bg-[#ffc700] text-black font-black text-base sm:text-lg px-8 py-3.5 rounded-xl neo-border neo-shadow"
                >
                  <PhoneCall size={22} weight="bold" />
                  <span>اتصل بالفرع واطلب الآن</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3 Steps */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#1e1e1e] p-4 rounded-2xl border-2 border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffc700] text-black rounded-xl neo-border-sm flex items-center justify-center font-black text-xl flex-shrink-0">
                  ١
                </div>
                <div className="text-right">
                  <h4 className="font-black text-white text-base">اختر الفرع أو التطبيق</h4>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">
                    اختر التوصيل المباشر من الفروع الـ ٤ المخصصة أو عبر تطبيقات التوصيل الـ ٤.
                  </p>
                </div>
              </div>

              <div className="bg-[#1e1e1e] p-4 rounded-2xl border-2 border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e11d2a] text-white rounded-xl neo-border-sm flex items-center justify-center font-black text-xl flex-shrink-0">
                  ٢
                </div>
                <div className="text-right">
                  <h4 className="font-black text-white text-base">حدد أصنافك وموقعك</h4>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">
                    اتصل هاتفياً أو عبر الواتساب لتجهيز طلبك على الفور.
                  </p>
                </div>
              </div>

              <div className="bg-[#1e1e1e] p-4 rounded-2xl border-2 border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black rounded-xl neo-border-sm flex items-center justify-center font-black text-xl flex-shrink-0">
                  ٣
                </div>
                <div className="text-right">
                  <h4 className="font-black text-white text-base">استلم طلبك ساخن ومقرمش</h4>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">
                    توصيل سريع يضمن وصول الفلافل والشاورما والكرسبي بأفضل طعم.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
