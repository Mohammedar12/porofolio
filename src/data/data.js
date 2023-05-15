// -----  Top Banner -----------

import banner from "../assets/banner_2.jpg" // هنا تغير البنر الرئيسي

// -----  About Images  -----------

import AboutImage from '../assets/about-me-2.jpg' // هنا تغير صورة السيرة الثاتية


// -----  Testimonil Images -----------

// --------------------  الصورة 1
import TestimonilImg1 from "../assets/a1.png"; // هنا تغير صورة التوصيات اذا ودك

// --------------------  الصورة 2
import TestimonilImg2 from "../assets/a2.png"; // هنا تغير صورة التوصيات اذا ودك

// الصورة --------------------  3
import TestimonilImg3 from "../assets/a3.png"; // هنا تغير صورة التوصيات اذا ودك 



// -----  Award Images -----------

// --------------------  الصورة 1
import  AwardImg1 from "../assets/a1.png"; // هنا تغير صورة الجوائز اذا ودك

// الصورة --------------------  2
import  AwardImg2 from "../assets/a2.png"; // هنا تغير صورة الجوائز اذا ودك

// --------------------  الصورة 3
import  AwardImg3 from "../assets/a3.png"; // هنا تغير صورة الجوائز اذا ودك



// |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-|


// ----------------- Home ----------------- //
// ----------------- Home محتوى القسم الاول  ----------------- //

export const sliderContent = {
  banner : banner,
  name: "Sara Mohamed",
  name_ar: "سارة محمد",
  description: `I design and develop services for customers of all sizes,
    specializing in creating stylish, modern websites, web
    services and online stores.`,
  description_ar: `أقوم بتصميم وتطوير الخدمات للعملاء من جميع الأحجام.
  متخصصون في إنشاء مواقع ويب أنيقة وعصرية
  الخدمات والمتاجر عبر الإنترنت`,
  btnText: " Donwload CV",
  btnText_ar: " تحميل الـCV ",
  btnText2: " My Work",
  btnText2_ar: " اعمالي",
};


export const jobs = {
  jobs: ["Full-stack Developer ", "UI/UX Designer", " App Developer"]
};

// ----------------- End Home ----------------- //

// ----------------------------------------  About ----------------- //

// ----------------- CV ----------------- //

// ----------------- About > CV محتوى القسم الثاني  ----------------- //

export const CV = {
  profileImg : AboutImage,
  name: "Sara Mohamed",
  name_ar: "سارة محمد",
  description_1: `
  I'm a Freelancer
   Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.`,
  description_1_ar: `
  أنا فريلانسر مطور الواجهة الأمامية مع أكثر من 3 سنوات من الخبرة. انا من سان فرانسيسكو. أقوم بتشفير وإنشاء عناصر ويب لأشخاص رائعين حول العالم. أنا أحب العمل مع أشخاص جدد. أشخاص جدد تجارب جديدة.`,
  description_2: `
  I'm a Freelancer
  Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.`,
  description_2_ar: `
  أنا فريلانسر مطور الواجهة الأمامية مع أكثر من 3 سنوات من الخبرة. انا من سان فرانسيسكو. أقوم بتشفير وإنشاء عناصر ويب لأشخاص رائعين حول العالم. أنا أحب العمل مع أشخاص جدد. أشخاص جدد تجارب جديدة.`,
  birthday: "4th April 1994",
  birthday_ar: "4th April 1994",
  age: "26 years",
  age_ar: "26 سنة",
  address: "KSA Jeddah",
  address_ar: "السعودية , جدة",
  phone: "+966 510310291",
  email: "info@domainname.com",
  freelance: "Available",
  freelance_ar: "متاح للعمل",
};

// ----------------- End CV ----------------- //



// ----------------- ServiceContent ----------------- //
// ----------------- About > Service محتوى القسم الثاني  ----------------- //

export const ServiceContent = [ 
  
  // خدمة 1
  {
    icon: "icon-mobile",
    title: "Web Development ",
    title_ar: "مطور مواقع",
    descriptions: `Are you in need of a top-notch website with a unique design and advanced features? Look no further! As a freelance web developer, I have the skills and expertise to develop your website in a professional and innovative way. I will work closely with you to understand your specific needs and requirements,.`,
    descriptions_ar: `تحتاج إلى خدمة تطوير موقع ويب بتصميم متميز ووظائف متقدمة؟ إذاً، فأنت في المكان المناسب! كمبرمج مواقع ويب مستقل، فإنني أتمتع بالمهارات والخبرة اللازمة لتطوير موقعك الإلكتروني بطريقة احترافية وفريدة. سأعمل جنبًا إلى جنب معك لفهم احتياجاتك ومتطلباتك الخاصة، وإيجاد أفضل الحلول التقنية لتحويل رؤيتك إلى حقيقة ملموسة. `,
    delayAnimation: "0",
  }, 
  
  // خدمة 2
  {
    icon: "icon-desktop",
    title: "Web Design ",
    title_ar: "مصمم مواقع",
    descriptions: `I can help you create a professional website that meets your needs and business requirements. I will design a website with an innovative and unique design that grabs attention and attracts visitors. I will use the latest technology and tools to ensure the best quality.`,
    descriptions_ar: `أستطيع مساعدتك في إنشاء موقع ويب احترافي ومتميز يلبي احتياجاتك ومتطلبات عملك. سأعمل على تصميم موقع ويب بتصميم مبتكر وفريد من نوعه يلفت الانتباه ويجذب الزوار. سأستخدم أحدث التقنيات والأدوات لضمان أفضل جودة.`,
    delayAnimation: "200",
  }, 
  
  // خدمة 3
  {
    icon: "icon-target",
    title: "Seo Marketing",
    title_ar: "تحسين محركات البحث SEO",
    descriptions: `As a freelance SEO marketer, I will work with you to improve your website's search engine ranking. I will start by analyzing your website and identifying the relevant keywords that your target audience is searching for, which will make it easier for them to find your website in search results.`,
    descriptions_ar: `كفريلانسر مستقل في مجال التسويق الإلكتروني وتحسين محركات البحث (SEO)، سأعمل معك على تحسين مركز موقعك في نتائج محركات البحث. سأبدأ بتحليل موقعك وتحديد الكلمات الرئيسية المناسبة التي تهم جمهورك المستهدف والتي ستجعلهم يجدون موقعك بسهولة في نتائج البحث`,
    delayAnimation: "400",
  },
      //  تقدر تضيف خدمة اخرى عن طريق النسخ واللصق 
];

// ----------------- End ServiceContent ----------------- //


// ----------------- TestimonilContent ----------------- //
// ----------------- About > Testimonil محتوى القسم الثاني  ----------------- //


export const TestimonilContent = [
  // التوصية 1
  {
    imageName: TestimonilImg1,
    desc: ` I recently had the pleasure of working with an incredible web designer who exceeded all my expectations..`,
    desc_ar: `  تعاملت مع مصمم ويب محترف ومتميز بشغفه لتقديم التصميمات الفريدة والمبتكرة. كانت تجربة العمل معه ممتعة وسلسة بفضل خبرته العالية واستجابته السريعة لاحتياجاتي وتوقعاتي.`,
    reviewerName: "Nancy Byers",
    reviewerName_ar: "نورة عبد العزيز",
    delayAnimation: "0",
  },

    // التوصية 2
  {
    imageName: TestimonilImg2,
    desc: ` I recently had the pleasure of working with an incredible web designer who exceeded all my expectations..`,
    desc_ar: `  تعاملت مع مصمم ويب محترف ومتميز بشغفه لتقديم التصميمات الفريدة والمبتكرة. كانت تجربة العمل معه ممتعة وسلسة بفضل خبرته العالية واستجابته السريعة لاحتياجاتي وتوقعاتي.`,
    reviewerName: "Jara Afsari",
    reviewerName_ar: "يوسف محمد",
    delayAnimation: "200",
  },

    // التوصية 3
  {
    imageName: TestimonilImg3,
    desc: ` I recently had the pleasure of working with an incredible web designer who exceeded all my expectations..`,
    desc_ar: `  تعاملت مع مصمم ويب محترف ومتميز بشغفه لتقديم التصميمات الفريدة والمبتكرة. كانت تجربة العمل معه ممتعة وسلسة بفضل خبرته العالية واستجابته السريعة لاحتياجاتي وتوقعاتي.`,
    reviewerName: "Janiaya kiaram",
    reviewerName_ar: "أحمد خالد",
    delayAnimation: "400",
  },

    //  تقدر تضيف توصية اخرى عن طريق النسخ واللصق 
];

// ----------------- End TestimonilContent ----------------- //


// ----------------- AwardContnet ----------------- //
// ----------------- About > Award محتوى القسم الثاني  ----------------- //

export const AwardContnet = [
  // الجائزة 1
  {
    img:  AwardImg1,
    awardName: "Creative Designer",
    awardName_ar: "مصمم مبدع",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "0",
  },

    // الجائزة 2
  {
    img:  AwardImg2,
    awardName: "Yearly Best Performer",
    awardName_ar: "أفضل أداء سنوي",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "200",
  },

    // الجائزة 3
  {
    img:  AwardImg3,
    awardName: "Best Learner Award",
    awardName_ar: "جائزة أفضل متعلم",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "400",
  },
      //  تقدر تضيف جائزة اخرى عن طريق النسخ واللصق 
];

// ----------------- End AwardContnet ----------------- //

// ---------------------------------------- End About ------------------------------- //

// ----------------- resumeContent & educatonContent  ----------------- //
// ----------------- resumeContent محتوى القسم الثالث  ----------------- //

export const resumeContent = [

  // الخبرة 1
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobPosition_ar: `مهندس الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "",
  },

    // الخبرة 2
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobPosition_ar: `مهندس الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "100",
  },

    // الخبرة 3
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobPosition_ar: `مهندس الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "200",
  },

      //  تقدر تضيف خبرة اخرى عن طريق النسخ واللصق 
];


// -----------------  educatonContent محتوى القسم الثالث  ----------------- //

export const educatonContent = [

  // شهادة 1
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

  // شهادة 2
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

  // شهادة 3
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

      //  تقدر تضيف شهادة اخرى عن طريق النسخ واللصق 
];

// ----------------- End resumeContent & educatonContent ----------------- //

// ----------------- skillContent ----------------- //
// ----------------- skill محتوى القسم الرابع  ----------------- //

export const skillContent = [
  {
    name: "HTML5", // اسم المهارة
    numberPercent: "92", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "92", // نسبة اتقان المهارة 
  },
  {
    name: "React JS", // اسم المهارة
    numberPercent: "31", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "31", // نسبة اتقان المهارة 
  },
  {
    name: "Vue Js", // اسم المهارة
    numberPercent: "90", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "90", // نسبة اتقان المهارة 
  },
  {
    name: "Ui/Ux", // اسم المهارة
    numberPercent: "88", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "88", // نسبة اتقان المهارة 
  },

      //  تقدر تضيف مهارة اخرى عن طريق النسخ واللصق 
];

// ----------------- End skillContent ----------------- //

// -----------------  contactInfo ----------------- //
// -----------------  contactInfo  محتوى القسم الخامس  ----------------- //

export const contactInfo = {
  address: " Riyadh Al Batha Dist. Al Batha Dist",
  email: " support@domain.com",
  phone: "+966 1 2863547",
};

// ----------------- End contactInfo ----------------- //
