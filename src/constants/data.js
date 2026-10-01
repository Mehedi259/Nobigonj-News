// Navigation menu items
export const NAV_ITEMS = [
  { id: 'home', label: 'হোম', href: '#', active: true },
  { id: 'hello-mirpur', label: 'হ্যালো মিরপুর', href: '#hello-mirpur' },
  { id: 'mirpur-identity', label: 'মিরপুর পরিচিতি', href: '#mirpur-identity' },
  { id: 'news', label: 'নিউজ', href: '#news' },
  { id: 'national', label: 'জাতীয়', href: '#national' },
  { id: 'entertainment', label: 'বিনোদন', href: '#entertainment' },
  { id: 'sports', label: 'খেলাধুলা', href: '#sports' },
];

// Stats section data
export const STATS_DATA = [
  {
    id: 'population',
    icon: '👥',
    value: '৪,৫৫,০৮৭',
    label: 'মিরপুরের মানুষ',
    sublabel: '(আনুমানিক)',
  },
  {
    id: 'area',
    icon: '🗺️',
    value: '১০৪.০০',
    label: 'বর্গ কিলোমিটার',
    sublabel: '',
  },
  {
    id: 'upazila',
    icon: '🏛️',
    value: '১টি',
    label: 'উপজেলা',
    sublabel: '',
  },
  {
    id: 'union',
    icon: '🏘️',
    value: '১২টি',
    label: 'ইউনিয়ন',
    sublabel: '',
  },
  {
    id: 'municipality',
    icon: '🏙️',
    value: '১টি',
    label: 'পৌরসভা',
    sublabel: '',
  },
];

// Top places data
export const TOP_PLACES = [
  {
    id: 'tea-garden',
    image: '/images/tea-garden.jpg',
    title: 'চা বাগান',
    location: 'মিরপুর সবুজ চৈতন্য',
  },
  {
    id: 'kushiyara-river',
    image: '/images/kushiyara-river.jpg',
    title: 'কুশিয়ারা নদী',
    location: 'মিরপুর প্রাণ',
  },
  {
    id: 'mosque-shrine',
    image: '/images/mosque-shrine.jpg',
    title: 'শাহ জালাল (র.) আস্তানা',
    location: 'আধ্যাত্মিকতার অনুপম রূপ',
  },
  {
    id: 'haor-wetland',
    image: '/images/haor-wetland.jpg',
    title: 'বড়লেখা বিল',
    location: 'হাওরের সৌন্দর্য রূপ',
  },
  {
    id: 'mirpur-bridge',
    image: '/images/mirpur-bridge.jpg',
    title: 'মিরপুর সেতু',
    location: 'যোগাযোগের প্রতীক',
  },
  {
    id: 'village-heritage',
    image: '/images/village-heritage.jpg',
    title: 'গ্রামীণ ঐতিহ্য',
    location: 'মিরপুর ঐতিহ্য',
  },
];

// News articles for Hello Mirpur section
export const HELLO_NEWS = [
  {
    id: 'news-1',
    image: '/images/news-road.jpg',
    title: 'মিরপুরে নতুন সড়ক প্রকল্পের কাজ শুরু',
    excerpt: 'মিরপুর উপজেলায় যোগাযোগ ব্যবস্থার উন্নয়ন নতুন সড়ক প্রকল্প কাজ শুরু হয়ে...',
    date: '18 Sep 2026',
    views: '1.2K',
    featured: true,
  },
  {
    id: 'news-2',
    image: '/images/news-education.jpg',
    title: 'মিরপুরে শিক্ষার মানোন্নয়ের উদ্যোগ',
    excerpt: '',
    date: '17 Sep 2026',
    views: '842',
    featured: false,
  },
  {
    id: 'news-3',
    image: '/images/news-development.jpg',
    title: 'কৃষকদের মুখে হাসি, ভালো ফলনের উৎপাদন',
    excerpt: '',
    date: '16 Sep 2026',
    views: '1.1K',
    featured: false,
  },
  {
    id: 'news-4',
    image: '/images/haor-wetland.jpg',
    title: 'মিরপুরে যুবসমাজের উদ্যোগে পরিষ্কার-পরিচ্ছন্নতা অভিযান',
    excerpt: '',
    date: '15 Sep 2026',
    views: '990',
    featured: false,
  },
  {
    id: 'news-5',
    image: '/images/mirpur-bridge.jpg',
    title: 'মিরপুরে স্বায়ত্বশাসনের নতুন সম্ভাবনা',
    excerpt: '',
    date: '14 Sep 2026',
    views: '1.3K',
    featured: false,
  },
];

// National news
export const NATIONAL_NEWS = [
  {
    id: 'nat-1',
    image: '/images/news-national.jpg',
    title: 'সরকারের নতুন উদ্যোগে দেশবাণী উন্নয়নের গতি ত্বরান্বিত',
    bullets: [
      'নতুন অর্থনৈতিক নীতি ঘোষণা',
      'শিল্পখাতে বড় বরাদ্দ',
      'দেশে ব্যাপক ইলেকট্রনিক বিপ্লবায়ণ',
    ],
  },
];

// Entertainment news
export const ENTERTAINMENT_NEWS = [
  {
    id: 'ent-1',
    image: '/images/news-cinema.jpg',
    title: 'নতুন সিনেমা নিয়ে আসছেন শাকিব-ভালোবাসী',
    bullets: [
      'এবারের ঈদ শ্রেষ্ঠত্বেম',
      'নতুন নায়িকা পরিচিতি নতুন ক্ষেত্রে',
    ],
  },
];

// Sports news
export const SPORTS_NEWS = [
  {
    id: 'sport-1',
    image: '/images/news-cricket.jpg',
    title: 'এশিয়া কাপের জন্য প্রস্তুতি নিচ্ছে বাংলাদেশ',
    bullets: [
      'সাকিব-মাশরাফি মডেল নতুন ক্ষেত্রে',
      'হালকা-তাজিকার্য নিয়ে বাংলাদেশ',
    ],
  },
];

// Weather data
export const WEATHER_DATA = {
  temperature: '৩০°C',
  condition: 'আংশিক মেঘলা',
  location: 'মিরপুর',
  humidity: '৭৬%',
  feelsLike: '৩৫°C',
  wind: '১৮ কিমি/ঘণ্টা',
  pressure: '২০%',
};

// Marquee text
export const MARQUEE_TEXT = '🔴 মিরপুর, ঢাকা, ঢাকা | মানুষের জন্য, এলাকার জন্য';

// Footer links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'হোম', href: '#' },
    { label: 'হ্যালো মিরপুর', href: '#' },
    { label: 'মিরপুর পরিচিতি', href: '#' },
    { label: 'বিজ্ঞাপন দিন', href: '#' },
    { label: 'বিনোদন', href: '#' },
    { label: 'খেলাধুলা', href: '#' },
  ],
  infoLinks: [
    { label: 'এডমিনের সম্পর্কে', href: '#' },
    { label: 'গোপনীয়তা', href: '#' },
    { label: 'বিজ্ঞাপন দিন', href: '#' },
    { label: 'গোপনীয়তা নীতি', href: '#' },
    { label: 'ব্যবহারের শর্তাবলি', href: '#' },
    { label: 'যোগাযোগ তথ্য', href: '#' },
  ],
};

// Person data (MP, DC)
export const PERSONS = [
  {
    id: 'mp',
    title: 'এমপি',
    name: 'আব্দুল মজিদ খান',
    designation: '(মিরপুর-১)',
  },
  {
    id: 'dc',
    title: 'মেয়র',
    name: 'আকরাম হোসেন',
    designation: 'মিরপুর পৌরসভা',
  },
];

// Hero tags
export const HERO_TAGS = [
  { icon: '🌿', label: 'প্রকৃতি' },
  { icon: '👥', label: 'মানুষ' },
  { icon: '📜', label: 'ইতিহাস' },
  { icon: '🚀', label: 'উন্নয়ন' },
  { icon: '🎭', label: 'সম্ভাবনা' },
];
