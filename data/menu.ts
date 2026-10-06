export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  category: 'sandwiches' | 'crispy' | 'platters' | 'sides' | 'drinks';
  price: number;
  calories: number;
  description: string;
  image: string;
  tag?: string;
  addOn?: {
    name: string;
    price: number;
    calories: number;
  };
  comboOption?: {
    name: string;
    price: number;
    calories: number;
  };
  pieces?: string;
  isPopular?: boolean;
  isSignature?: boolean;
  isBestSeller?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', name: 'الكل', icon: 'Sparkle' },
  { id: 'sandwiches', name: 'الساندويتشات', icon: 'Sandwich' },
  { id: 'crispy', name: 'كرسبي وقرمشة', icon: 'Flame' },
  { id: 'platters', name: 'الصحون والمشكل', icon: 'CookingPot' },
  { id: 'sides', name: 'خفايف وتغميسات', icon: 'BowlFood' },
  { id: 'drinks', name: 'المشروبات', icon: 'Coffee' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- الساندويتش ---
  {
    id: 'falafel-shami',
    name: 'فلافل عادي شامي',
    nameEn: 'Regular Shami Falafel',
    category: 'sandwiches',
    price: 4,
    calories: 554,
    description: 'ساندويش فلافل مقرمشة، مخلل، بطاطس، خضار مشكل بالخبز الشامي الطازج.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    addOn: {
      name: 'إضافة البيض',
      price: 1,
      calories: 143,
    },
    isPopular: true,
  },
  {
    id: 'falafel-saj',
    name: 'فلافل صاج شامي',
    nameEn: 'Saj Shami Falafel',
    category: 'sandwiches',
    price: 7,
    calories: 809,
    description: 'ساندويش فلافل بخبز الصاج المحمص الذهبي، بطاطس، مخلل، خضار مشكل.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    addOn: {
      name: 'إضافة البيض',
      price: 1,
      calories: 143,
    },
    isPopular: true,
  },
  {
    id: 'shawarma-small',
    name: 'شاورما صغير',
    nameEn: 'Small Chicken Shawarma',
    category: 'sandwiches',
    price: 6,
    calories: 292,
    description: 'ساندويش شاورما دجاج متبلة على السيخ، مخلل، بطاطس، خس، ثومية غنية.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shawarma-sarookh',
    name: 'شاورما صاروخ',
    nameEn: 'Sarookh Shawarma',
    category: 'sandwiches',
    price: 12,
    calories: 668,
    description: 'ساندويش شاورما دجاج عملاق بخبز الصاج، مخلل، بطاطس، خس، ثـوم.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    tag: 'الأكثر طلباً',
  },

  // --- كرسبي وقرمشة ---
  {
    id: 'al-ostoura',
    name: 'برجر الأسطورة',
    nameEn: 'The Legend Crispy Burger',
    category: 'crispy',
    price: 13,
    calories: 535,
    description: 'قطعة دجاج كرسبي فائقة القرمشة، قطع هالابينو الحارة، خس مقرمش، مع الصوص السري.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    comboOption: {
      name: 'خليها وجبة (بطاطس + مشروب غازي)',
      price: 7,
      calories: 443,
    },
    tag: 'سبايسي ناري',
  },
  {
    id: 'al-khorafi',
    name: 'برجر الخرافي',
    nameEn: 'Al-Khorafi Crispy Burger',
    category: 'crispy',
    price: 15,
    calories: 645,
    description: 'قطعة كرسبي ذهبية، عيدان البطاطس المقرمشة، خس طازج، مع الصوص السري الفاخر.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    comboOption: {
      name: 'خليها وجبة (بطاطس + مشروب غازي)',
      price: 7,
      calories: 443,
    },
    isPopular: true,
  },
  {
    id: 'crispy-meal',
    name: 'وجبة كرسبي',
    nameEn: 'Crispy Strips Meal',
    category: 'crispy',
    price: 19,
    calories: 990,
    description: 'ثلاث قطع كرسبي مقرمشة، بطاطس مقلية ذهبية، سلطة ملفوف، خبز، ثومية، كاتشب.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'al-marjoojah',
    name: 'المرجوجة (رجها وكلها!)',
    nameEn: 'Al-Marjoojah Shake Cup',
    category: 'crispy',
    price: 9,
    calories: 688,
    description: 'كوب السعادة المرجوج! شرائح شاورما الدجاج، عيدان البطاطس، سلطة ملفوف، كاتشب وطحينية.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    tag: 'اختراع على كيفك',
  },

  // --- الصحون ---
  {
    id: 'falafel-arabi-small',
    name: 'فلافل عربي صغير',
    nameEn: 'Falafel Arabic Platter Small',
    category: 'platters',
    price: 14,
    calories: 970,
    description: 'عدد ٦ حبات فلافل ساندويش مقطعة، بطاطس مقلية، حمص بالطحينية.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    pieces: '٦ قطع ساندويش',
  },
  {
    id: 'falafel-arabi-large',
    name: 'فلافل عربي كبير',
    nameEn: 'Falafel Arabic Platter Large',
    category: 'platters',
    price: 19,
    calories: 1970,
    description: 'عدد ١٢ حبة فلافل ساندويش، بطاطس مقلية، حمص بالطحينية، خضار مشكلة.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    pieces: '١٢ قطعة ساندويش',
  },
  {
    id: 'shami-platter-small',
    name: 'صحن شامي صغير',
    nameEn: 'Shami Platter Small',
    category: 'platters',
    price: 13,
    calories: 548,
    description: 'عدد ٦ حبات فلافل مقرمشة، خبز طازج، بطاطس، حمص بالطحينية، مخلل.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    pieces: '٦ حبات فلافل',
  },
  {
    id: 'shami-platter-medium',
    name: 'صحن شامي وسط',
    nameEn: 'Shami Platter Medium',
    category: 'platters',
    price: 19,
    calories: 1096,
    description: 'عدد ١٥ حبة فلافل، خبز طازج، خضار مشكلة وطحينية.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    pieces: '١٥ حبة فلافل',
  },
  {
    id: 'shami-platter-large',
    name: 'صحن شامي كبير',
    nameEn: 'Shami Platter Large',
    category: 'platters',
    price: 31,
    calories: 1644,
    description: 'عدد ٢٥ حبة فلافل ذهبية، خبز، صحن خضار مشكلة مشبع للمجموعات.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    pieces: '٢٥ حبة فلافل',
  },
  {
    id: 'mixed-platter-small',
    name: 'صحن مشكل صغير',
    nameEn: 'Mixed Platter Small',
    category: 'platters',
    price: 15,
    calories: 970,
    description: 'عدد ٦ حبات فلافل، خبز، بطاطس، باذنجان مقلي، حمص بالطحينية، مخلل، عدد ١ بيض.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    pieces: '٦ حبات + ١ بيض + باذنجان',
  },
  {
    id: 'mixed-platter-medium',
    name: 'صحن مشكل وسط',
    nameEn: 'Mixed Platter Medium',
    category: 'platters',
    price: 29,
    calories: 1940,
    description: 'عدد ١٥ حبة فلافل، خبز، بطاطس، باذنجان، خضار مشكل، عدد ٢ بيض، طحينية، شطة، حمص.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    pieces: '١٥ حبة + ٢ بيض',
  },
  {
    id: 'mixed-platter-large',
    name: 'صحن مشكل كبير',
    nameEn: 'Mixed Platter Large',
    category: 'platters',
    price: 39,
    calories: 2910,
    description: 'عدد ٢٥ حبة فلافل، خبز، بطاطس، باذنجان، صحن خضار مشكل، عدد ٤ بيض، طحينية، شطة، حمص.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    pieces: '٢٥ حبة + ٤ بيض',
  },
  {
    id: 'shawarma-arabi-small',
    name: 'شاورما عربي صغير',
    nameEn: 'Shawarma Arabic Small',
    category: 'platters',
    price: 19,
    calories: 865,
    description: 'عدد ٦ قطع شاورما دجاج ساندويش مقطعة، بطاطس، ثومية، مخلل مقرمش.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    pieces: '٦ قطع ساندويش',
  },
  {
    id: 'shawarma-arabi-large',
    name: 'شاورما عربي كبير',
    nameEn: 'Shawarma Arabic Large',
    category: 'platters',
    price: 32,
    calories: 1950,
    description: 'عدد ١٢ قطعة شاورما دجاج ساندويش، بطاطس، ثومية، مخلل.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    pieces: '١٢ قطعة ساندويش',
    isPopular: true,
  },
  {
    id: 'shawarma-plate-small',
    name: 'شاورما صحن صغير',
    nameEn: 'Shawarma Plate Small',
    category: 'platters',
    price: 28,
    calories: 1117,
    description: 'صحن صغير شرائح شاورما دجاج مشوية على السيخ، بطاطس، ثومية، مخلل، خبز عدد ٣ حبات.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    pieces: 'شرائح شاورما + ٣ خبز',
  },
  {
    id: 'shawarma-plate-large',
    name: 'شاورما صحن كبير',
    nameEn: 'Shawarma Plate Large',
    category: 'platters',
    price: 56,
    calories: 2203,
    description: 'صحن كبير شرائح شاورما دجاج، بطاطس مقلية، ثومية، مخلل، خبز عدد ٦ حبات.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    pieces: 'شرائح دجاج + ٦ خبز',
  },
  {
    id: 'mazaj-platter',
    name: 'صحن المزاج وعلى كيفك كبير',
    nameEn: 'Al-Mazaj & Ala Kaifak Ultimate Platter',
    category: 'platters',
    price: 27,
    calories: 2518,
    description: 'الميكس الأسطوري! عدد ٦ قطع شاورما دجاج + عدد ٦ قطع فلافل، بطاطس، ثومية، حمص، مخلل.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    tag: 'ميكس شاورما وفلافل',
  },

  // --- خفايف وتغميسات ---
  {
    id: 'falafel-pieces',
    name: 'فلافل بالحبة (حبتين)',
    nameEn: 'Falafel Pieces (2 pcs)',
    category: 'sides',
    price: 1,
    calories: 57,
    description: 'حبتان فلافل طازجة مقلية ذهبية ومقرمشة مع السمسم.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    tag: 'توفير',
  },
  {
    id: 'hummus',
    name: 'حمص بالطحينية',
    nameEn: 'Hummus with Tahini',
    category: 'sides',
    price: 6,
    calories: 166,
    description: 'حمص كريمي ناعم ممزوج بالطحينية وزيت الزيتون الفاخر.',
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'coleslaw',
    name: 'سلطة الملفوف',
    nameEn: 'Coleslaw Salad',
    category: 'sides',
    price: 5,
    calories: 371,
    description: 'ملفوف مقرمش، جزر مبشور، ذرة حلوة، وصلصة مايونيز كريمية.',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fries',
    name: 'بطاطس مقلية',
    nameEn: 'French Fries',
    category: 'sides',
    price: 6,
    calories: 292,
    description: 'أصابع بطاطس مقلية ذهبية مقرمشة من الخارج وطرية من الداخل.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hot-sauce',
    name: 'صلصة حارة',
    nameEn: 'Hot Sauce',
    category: 'sides',
    price: 1,
    calories: 6,
    description: 'شطة فلفل أحمر حارة خاصة.',
    image: 'https://images.unsplash.com/photo-1582571994666-4e50bb7f9780?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'smoky-sauce',
    name: 'صوص سموكي',
    nameEn: 'Smoky Sauce',
    category: 'sides',
    price: 2,
    calories: 37,
    description: 'صوص مدخن غني يضيف نكهة شواء رائعة.',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'garlic-sauce',
    name: 'ثومية خاصة',
    nameEn: 'Special Garlic Dip',
    category: 'sides',
    price: 2,
    calories: 47,
    description: 'ثومية كريمية أصلية محبوبة عشاق الشاورما.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },

  // --- المشروبات ---
  {
    id: 'water',
    name: 'ماء نقي',
    nameEn: 'Mineral Water',
    category: 'drinks',
    price: 1,
    calories: 0,
    description: 'مياه شرب نقية معبأة.',
    image: 'https://images.unsplash.com/photo-1559839914-ba2a0f8b8098?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'soft-drink',
    name: 'مشروبات غازية',
    nameEn: 'Soft Drinks',
    category: 'drinks',
    price: 3,
    calories: 151,
    description: 'مشروبات غازية متنوعة باردة ومنعشة (بيبسي، سفن أب، حمضيات وغيرها).',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  },
];

export const BEST_SELLER_IDS = [
  'falafel-shami',
  'falafel-saj',
  'shawarma-sarookh',
  'shawarma-small',
  'al-ostoura',
  'al-khorafi',
  'al-marjoojah',
  'mazaj-platter',
];

export const BEST_SELLERS = MENU_ITEMS.filter((item) =>
  BEST_SELLER_IDS.includes(item.id)
);

