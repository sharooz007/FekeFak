import React from 'react';
import Navbar from '../../components/Navbar';
import MenuBreadcrumb from '../../components/MenuBreadcrumb';
import InteractiveMenu from '../../components/InteractiveMenu';
import DeliveryApps from '../../components/DeliveryApps';
import HealthAndVATBanner from '../../components/HealthAndVATBanner';
import Footer from '../../components/Footer';
import FloatingQuickOrder from '../../components/FloatingQuickOrder';

export const metadata = {
  title: 'المنيو الكامل والأسعار | فلافل وشاورما على كيفك - Fkefaak',
  description: 'قائمة طعام فلافل وشاورما على كيفك الكاملة: فلافل شامي، شاورما صاج، برجر كرسبي، صحون مشكلة، خفايف وتغميسات مع الأسعار والسعرات الحرارية.',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />

      {/* Bilingual Breadcrumb & Navigation Bar */}
      <MenuBreadcrumb />

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
