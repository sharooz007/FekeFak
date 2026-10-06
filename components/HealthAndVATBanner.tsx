'use client';

import React from 'react';
import { Heartbeat, WarningCircle, Receipt, SealCheck } from '@phosphor-icons/react';

export default function HealthAndVATBanner() {
  return (
    <section className="py-12 bg-white border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Calorie Advisory */}
          <div className="bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 text-right">
            <div className="w-12 h-12 bg-[#e11d2a] text-white rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <Heartbeat size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">صحتك تهمنا</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                يحتاج البالغون إلى ٢٠٠٠ سعرة حرارية في المتوسط يومياً وقد تختلف الاحتياجات الشخصية من شخص لآخر. البيانات الغذائية متاحة عند الطلب.
              </p>
            </div>
          </div>

          {/* Card 2: Allergen Disclosure */}
          <div className="bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 text-right">
            <div className="w-12 h-12 bg-[#ffc700] text-black rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <WarningCircle size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">مسببات الحساسية</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                تحتوي بعض الأطباق على: بذور السمسم، الحليب ومشتقاته، جلوتن القمح، والبيض. يرجى إبلاغ الفرع بالحساسية قبل الطلب.
              </p>
            </div>
          </div>

          {/* Card 3: 15% VAT */}
          <div className="bg-[#faf9f6] p-6 rounded-2xl neo-border neo-shadow-sm flex items-start gap-4 text-right">
            <div className="w-12 h-12 bg-black text-white rounded-xl neo-border-sm flex items-center justify-center flex-shrink-0">
              <Receipt size={24} weight="bold" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg mb-1">ضريبة القيمة المضافة</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-bold leading-relaxed">
                جميع الأسعار المعروضة في المنيو شاملة لضريبة القيمة المضافة (١٥٪) وفق لوائح هيئة الزكاة والضريبة والجمارك بالمملكة.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
