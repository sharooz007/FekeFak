export interface Branch {
  id: string;
  name: string;
  city: 'الأحساء' | 'الخبر';
  cityKey: 'ahsa' | 'khobar';
  phone: string;
  additionalPhones?: string[];
  googleMapsUrl: string;
  address?: string;
  hasDirectDelivery: boolean; // Direct in-house delivery available from this branch
  isPopular?: boolean;
}

export const BRANCHES: Branch[] = [
  // فروع الأحساء (8 فروع)
  {
    id: 'al-nuzha',
    name: 'فرع النزهة',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0538530111',
    googleMapsUrl: 'https://maps.app.goo.gl/C7FPPk6j5mTcfUuz7',
    hasDirectDelivery: false,
    isPopular: true,
  },
  {
    id: 'al-hazm',
    name: 'فرع الحزم',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0554723859',
    googleMapsUrl: 'https://maps.app.goo.gl/St394CbRuecEjnYP7',
    hasDirectDelivery: false,
  },
  {
    id: 'al-salmanyah',
    name: 'فرع السلمانية',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0537574744',
    googleMapsUrl: 'https://maps.app.goo.gl/rfUG8HwmgLFYzs6P8',
    hasDirectDelivery: false,
    isPopular: true,
  },
  {
    id: 'al-jafr',
    name: 'فرع الجفر',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0539082945',
    additionalPhones: ['0501195666'],
    googleMapsUrl: 'https://maps.app.goo.gl/DChYfWTqxPiXMHZw7',
    hasDirectDelivery: true, // Direct Delivery Available
    isPopular: true,
  },
  {
    id: 'al-hulaylah',
    name: 'فرع الحليلة',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0507474826',
    additionalPhones: ['0557832226'],
    googleMapsUrl: 'https://maps.app.goo.gl/snYFcNKf4P9Mmp198',
    hasDirectDelivery: false,
  },
  {
    id: 'al-jaran',
    name: 'فرع الجرن',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0504474071',
    additionalPhones: ['0537747469'],
    googleMapsUrl: 'https://maps.app.goo.gl/Np5kBEK7ZfkoDicd8',
    hasDirectDelivery: true, // Direct Delivery Available
    isPopular: true,
  },
  {
    id: 'al-mahdood',
    name: 'فرع المحدود (الهفوف)',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0534430342',
    googleMapsUrl: 'https://maps.app.goo.gl/D5ik8FjfYo9KvpeT6',
    hasDirectDelivery: false,
    isPopular: true,
  },
  {
    id: 'king-abdullah-park',
    name: 'فرع حديقة الملك عبدالله',
    city: 'الأحساء',
    cityKey: 'ahsa',
    phone: '0504747445',
    additionalPhones: ['0500549835'],
    googleMapsUrl: 'https://maps.app.goo.gl/ywuDqJdUHqtJyTva7',
    hasDirectDelivery: false,
  },

  // فروع الخبر (فرعين - كلاهما يدعم التوصيل المباشر)
  {
    id: 'al-jisr',
    name: 'فرع الجسر',
    city: 'الخبر',
    cityKey: 'khobar',
    phone: '0555423171',
    address: 'شارع عبدالرحمن بن معاذ، حي الجسر',
    googleMapsUrl: 'https://maps.app.goo.gl/5Kq58W5HgBtWJELRA',
    hasDirectDelivery: true, // Direct Delivery Available
    isPopular: true,
  },
  {
    id: 'al-sawari',
    name: 'فرع العزيزية (الصواري)',
    city: 'الخبر',
    cityKey: 'khobar',
    phone: '0502618883',
    address: 'حي العزيزية / الصواري',
    googleMapsUrl: 'https://maps.app.goo.gl/f7DBCcVA5EgiuJA87',
    hasDirectDelivery: true, // Direct Delivery Available
    isPopular: true,
  },
];
