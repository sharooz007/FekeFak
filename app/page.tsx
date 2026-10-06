import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SignatureSpotlight from '../components/SignatureSpotlight';
import MenuPreview from '../components/MenuPreview';
import DeliveryApps from '../components/DeliveryApps';
import BranchLocator from '../components/BranchLocator';
import HealthAndVATBanner from '../components/HealthAndVATBanner';
import Footer from '../components/Footer';
import FloatingQuickOrder from '../components/FloatingQuickOrder';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <SignatureSpotlight />
      <MenuPreview />
      <DeliveryApps />
      <BranchLocator />
      <HealthAndVATBanner />
      <Footer />
      <FloatingQuickOrder />
    </main>
  );
}
