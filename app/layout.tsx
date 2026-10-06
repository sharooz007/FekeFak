import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'فلافل وشاورما على كيفك | Fkefaak - القرمشة اللي تدور عليها',
  description: 'فلافل وشاورما على كيفك، برجر كرسبي، وصحون مشكلة في الأحساء والخبر. طعم أصيل وقرمشة أسطورية منذ 2013م.',
  keywords: ['فلافل', 'شاورما', 'على كيفك', 'الأحساء', 'الخبر', 'مطعم شاورما', 'المرجوجة', 'كرسبي', 'fkefaak'],
  openGraph: {
    title: 'فلافل وشاورما على كيفك | Fkefaak',
    description: 'أشهى فلافل وشاورما وكرسبي بالشرقية مع خدمة توصيل مباشر وعبر أشهر التطبيقات.',
    images: ['/logo_transparent.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased selection:bg-[#ffc700] selection:text-black">
        {children}
      </body>
    </html>
  );
}
