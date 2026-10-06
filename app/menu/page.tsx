import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import InteractiveMenu from '../../components/InteractiveMenu';
import DeliveryApps from '../../components/DeliveryApps';
import HealthAndVATBanner from '../../components/HealthAndVATBanner';
import Footer from '../../components/Footer';
import FloatingQuickOrder from '../../components/FloatingQuickOrder';
import { ArrowRight, House } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: 'المنيو الكامل والأسعار | فلافل وشاورما على كيفك',
  description: 'قائمة طعام فلافل وشاورما على كيفك الكاملة: فلافل شامي، شاورما صاج، برجر كرسبي، صحون مشكلة، خفايف وتغميسات مع الأسعار والسعرات الحرارية.',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-[#fffdf5] border-b-2 border-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="neo-btn bg-white text-black font-black text-sm px-4 py-2 rounded-xl neo-border-sm flex items-center gap-2 hover:bg-[#ffc700] transition-colors"
          >
            <ArrowRight size={18} weight="bold" />
            <span>العودة للصفحة الرئيسية</span>
          </Link>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600">
            <Link href="/" className="hover:text-black hover:underline flex items-center gap-1">
              <House size={16} weight="bold" />
              <span>الرئيسية</span>
            </Link>
            <span>/</span>
            <span className="text-[#e11d2a] font-extrabold">المنيو الكامل (٣٠ صنف)</span>
          </div>
        </div>
      </div>

      {/* Full Interactive Menu Engine */}
      <InteractiveMenu />

      {/* Delivery Apps */}
      <DeliveryApps />

      {/* Health & VAT Advisory */}
      <HealthAndVATBanner />

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Order Dock */}
      <FloatingQuickOrder />
    </main>
  );
}
