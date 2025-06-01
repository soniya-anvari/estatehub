const homes = [
  {
    id: 1,
    img: '/images/homeImg3.png',
    images: [
      '/images/homeImg1.png',
      '/images/homeImg2.png',
      '/images/homeImg3.png',
    ],
    name: "خانه ویلایی",
    details: '۴۵۰ متری ۳ خوابه استخر‌‌دار',
    area: 450,
    rooms: 3,
    floor: 0,
    bathrooms: 2,
    amenities: ['استخر', 'سونا', 'جکوزی', 'حیاط بزرگ', 'پارکینگ اختصاصی'],
    description: 'واحد شمالی با نورگیر عالی، هود و گاز رومیزی، کابینت MDF، کف سرامیک',
    mortgage: "۴,۰۰۰,۰۰۰,۰۰۰",
    rent: "۵۰,۰۰۰,۰۰۰",
    owner: {
      name: "علی رضایی",
      phone: "09121234567",
      photo: "/images/user.png"
    },
    location:'تهران-الهیه '
  },
  {
    id: 2,
    img: '/images/homeImg1.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg1.png',
      '/images/homeImg3.png',
    ],
    name: "خانه ویلایی",
    details: '۵۰۰ متری ۴ خوابه',
    area: 500,
    rooms: 4,
    floor: 0,
    bathrooms: 3,
    amenities: ['استخر روباز', 'پارکینگ ۲ خودرو', 'انباری', 'سیستم سرمایش مرکزی'],
    description: 'واحد جنوبی، کف پارکت، آشپزخانه جزیره‌ای، گاز و فر توکار',
    mortgage: "۵,۵۰۰,۰۰۰,۰۰۰",
    rent: "۶۰,۰۰۰,۰۰۰",
    owner: {
      name: "مریم کرمی",
      phone: "09351231234",
     photo: "/images/user.png"
    }
    ,
        location:'تهران-زعفرانیه '

  },
  {
    id: 3,
    img: '/images/homeImg2.png',
    images: [
      '/images/homeImg2.png',
      '/images/homeImg3.png',
      '/images/homeImg4.png',
    ],
    name: "آپارتمان",
    details: '۷۰ متری ۱ خوابه - تهران محمدیه',
    area: 70,
    rooms: 1,
    floor: 3,
    bathrooms: 1,
    amenities: ['آسانسور', 'نگهبانی ۲۴ ساعته', 'دوربین مداربسته'],
    description: 'نورگیر عالی، کف سنگ، آشپزخانه اپن با کابینت‌های نو',
    mortgage: "۲,۰۰۰,۰۰۰,۰۰۰",
    rent: "۲۰,۰۰۰,۰۰۰",
    owner: {
      name: "سجاد محمودی",
      phone: "09127891234",
      photo: "/images/user.png"
    },
     location:'تهران-زعفرانیه '

  },
  {
    id: 4,
    img: '/images/homeImg4.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg3.png',
      '/images/homeImg2.png',
    ],
    name: "آپارتمان",
    details: '۱۲۰ متری ۲ خوابه - ولنجک',
    area: 120,
    rooms: 2,
    floor: 5,
    bathrooms: 2,
    amenities: ['باشگاه', 'لابی مجلل', 'سالن اجتماعات', 'پارکینگ مهمان'],
    description: 'واحد شرقی، کابینت ممبران، تراس بزرگ، سیستم هوشمند',
    mortgage: "۳,۵۰۰,۰۰۰,۰۰۰",
    rent: "۴۵,۰۰۰,۰۰۰",
    owner: {
      name: "زهرا قنبری",
      phone: "09121119988",
      photo: "/images/user.png"
    },
   location:'تهران-الهیه '

  },
  {
    id: 5,
  img: '/images/homeImg1.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg3.png',
      '/images/homeImg2.png',
    ],
    name: "پنت‌هاوس",
    details: '۳۰۰ متری ۳ خوابه با ویو عالی - زعفرانیه',
    area: 300,
    rooms: 3,
    floor: 12,
    bathrooms: 3,
    amenities: ['استخر سرپوشیده', 'روف‌گاردن', 'سالن بدنسازی', 'لابی من'],
    description: 'واحد شمال غربی، دید بی‌نظیر شهر، آشپزخانه فول امکانات، کف سنگ مرمر',
    mortgage: "۷,۰۰۰,۰۰۰,۰۰۰",
    rent: "۸۰,۰۰۰,۰۰۰",
    owner: {
      name: "رضا سلطانی",
      phone: "09123334455",
      photo: "/images/user.png"
    },
    location:'تهران-زعفرانیه '
  },
  {
    id: 6,
   img: '/images/homeImg2.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg3.png',
      '/images/homeImg2.png',
    ],
    name: "ویلای دوبلکس",
    details: '۶۰۰ متری ۵ خوابه با باغچه',
    area: 600,
    rooms: 5,
    floor: 2,
    bathrooms: 4,
    amenities: ['باغچه', 'باربیکیو', 'پارکینگ مسقف', 'اتاق مهمان'],
    description: 'ویلای شخصی‌ساز با طراحی خاص، آشپزخانه دوگانه، شومینه سنتی',
    mortgage: "۶,۵۰۰,۰۰۰,۰۰۰",
    rent: "۷۰,۰۰۰,۰۰۰",
    owner: {
      name: "نسرین دادخواه",
      phone: "09124561234",
      photo: "/images/user.png"
    },
      location:'تهران-الهیه '

  },
  {
    id: 7,
   img: '/images/homeImg3.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg3.png',
      '/images/homeImg2.png',
    ],
    name: "آپارتمان نوساز",
    details: '۹۰ متری ۲ خوابه - سعادت‌آباد',
    area: 90,
    rooms: 2,
    floor: 2,
    bathrooms: 2,
    amenities: ['آسانسور', 'دوربین مداربسته', 'سیستم سرمایش و گرمایش مرکزی'],
    description: 'نوساز با طراحی مدرن، کابینت هایگلاس، پنجره‌های دوجداره',
    mortgage: "۳,۰۰۰,۰۰۰,۰۰۰",
    rent: "۴۰,۰۰۰,۰۰۰",
    owner: {
      name: "کیوان شفیعی",
      phone: "09121115533",
      photo: "/images/user.png"    },
    location:'تهران-الهیهs '

  },
  {
    id: 8,
  img: '/images/homeImg4.png',
    images: [
      '/images/homeImg4.png',
      '/images/homeImg3.png',
      '/images/homeImg2.png',
    ],
    name: "خانه باغ",
    details: '۱۰۰۰ متری ۴ خوابه در لواسان',
    area: 1000,
    rooms: 4,
    floor: 1,
    bathrooms: 3,
    amenities: ['استخر روباز', 'آلاچیق', 'درخت میوه', 'نورپردازی شب'],
    description: 'خانه‌باغ دنج با فضای سبز دلنشین، آشپزخانه اوپن، کف پارکت چوبی',
    mortgage: "۸,۰۰۰,۰۰۰,۰۰۰",
    rent: "۱۰۰,۰۰۰,۰۰۰",
    owner: {
      name: "هما پوراحمد",
      phone: "09127654321",
      photo: "/images/user.png"
    },
      location:'تهران-زعفرانیه '



  }
];

export default homes;
