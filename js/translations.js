/**
 * Bilingual Translation Dictionary (English & Urdu)
 * Dar-e-Arqam Online Quran Academy
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    navHome: "Home",
    navCourses: "Courses",
    navWhyUs: "Why Choose Us",
    navAbout: "About Us",
    navTrial: "Free Trial",
    navContact: "Contact Us",
    navInquiries: "Admin Portal",
    bookTrialBtn: "Book Free Trial",
    whatsappBtn: "WhatsApp",
    languageToggle: "اردو",

    // Hero Section
    bismillahAlt: "Bismillah ar-Rahman ar-Rahim",
    heroBadge: "Global Online Quran Learning Academy",
    heroHeadline: "Learn the Holy Quran Online from the Comfort of Your Home",
    heroSubtitle: "Quality Quran education for children and adults, with experienced teachers, flexible class timings, and personalized attention.",
    heroTrialBtn: "Book a Free Trial Class",
    heroWhatsAppBtn: "Contact Us on WhatsApp",
    heroFeature1: "1-on-1 Personalized Classes",
    heroFeature2: "Flexible Global Timings",
    heroFeature3: "Children & Adults Welcome",

    // Section Headers
    coursesHeading: "Our Courses",
    coursesSubheading: "Comprehensive, structured Quranic and Islamic education tailored for every age and learning pace.",
    whyUsHeading: "Why Choose Our Academy?",
    whyUsSubheading: "Dedicated to excellence in Quranic teaching with sincere attention to every student's spiritual and intellectual growth.",
    aboutHeading: "About Us",
    aboutSubheading: "Connecting hearts with the Holy Quran across borders through dedicated online tutoring.",
    trialHeading: "Free Trial Class",
    trialSubheading: "Experience our personalized teaching methodology with a zero-obligation free trial session.",
    contactHeading: "Contact Us",
    contactSubheading: "Have questions? Our support team is ready to assist parents and students worldwide.",

    // Courses List
    courseInquire: "Inquire About Classes",
    courseBadgeBeginner: "Beginner",
    courseBadgeIntermediate: "Intermediate",
    courseBadgeAdvanced: "Advanced",
    courseBadgeAllAges: "All Ages",

    // Noorani Qaida
    course1Title: "Noorani Qaida",
    course1Desc: "The foundational primer for Arabic alphabet mastery, letter recognition, correct pronunciation, and foundational phonetics designed for beginners and young children.",
    course1Highlights: ["Arabic letter articulation (Makharij)", "Connecting letters & joint shapes", "Harakaat, Sukoon, and Madd rules", "Step-by-step reading confidence"],

    // Madani Qaida
    course2Title: "Madani Qaida",
    course2Desc: "A structured, beginner-friendly curriculum focusing on correct articulation, vowel signs, and essential phonetics to prepare students for seamless Quran recitation.",
    course2Highlights: ["Comprehensive phonetics drills", "Tanween, Jazm, and Tashdeed exercises", "Clear pronunciation guidelines", "Ideal groundwork for Nazra"],

    // Quran Reading (Nazra)
    course3Title: "Quran Reading (Nazra)",
    course3Desc: "Fluent and continuous recitation of the Holy Quran with correct pauses, smooth phrasing, and guided practice under experienced Quran teachers.",
    course3Highlights: ["Fluent reading from Surah Al-Fatiha to An-Nas", "Waqf (stopping) and resumption rules", "Daily recitation practice & fluency", "Gentle correction of mistakes"],

    // Quran with Tajweed
    course4Title: "Quran with Tajweed",
    course4Desc: "Master the authentic rules of Tajweed including Makharij, Ghunnah, Ikhfa, Idgham, and Qalqalah to recite the Quran with elegance and divine reverence.",
    course4Highlights: ["Deep study of articulation points (Makharij)", "Rules of Noon Sakinah & Meem Sakinah", "Madd (elongation) classifications", "Melodious, respectful recitation"],

    // Quran Memorization (Hifz)
    course5Title: "Quran Memorization (Hifz-ul-Quran)",
    course5Desc: "A disciplined, step-by-step Hifz program with customized daily memorization targets, rigorous revision routines, and motivational mentorship.",
    course5Highlights: ["Sabaq (new lesson memorization)", "Sabqi (recent lessons revision)", "Manzil (long-term cumulative revision)", "Flexible full-time or part-time Hifz"],

    // Basic Islamic Studies
    course6Title: "Basic Islamic Studies",
    course6Desc: "Nurturing young minds with essential Islamic knowledge, the Five Pillars of Islam, fundamental beliefs, beautiful Seerah of Prophet Muhammad (PBUH), and Islamic manners (Adab).",
    course6Highlights: ["Six Kalimahs & Articles of Faith (Iman)", "Five Pillars of Islam explained simply", "Stories of the Prophets and Seerah", "Islamic manners, ethics, and character building"],

    // Daily Duas and Salah Learning
    course7Title: "Daily Duas and Salah Learning",
    course7Desc: "Hands-on instruction on performing Wudu and Salah correctly with translation, plus essential daily Masnoon Duas for morning, evening, and everyday occasions.",
    course7Highlights: ["Step-by-step practical Salah guide", "Complete Wudu demonstration & rulings", "Daily Masnoon Duas with meanings", "Short Surahs for daily prayers"],

    // Why Choose Our Academy
    why1Title: "Online Quran Classes from Home",
    why1Desc: "Learn comfortably from home via interactive live sessions without the need to travel.",
    why2Title: "Individual Attention for Every Student",
    why2Desc: "Dedicated 1-on-1 classes ensuring focused guidance and customized pace for each learner.",
    why3Title: "Flexible Class Schedules",
    why3Desc: "Tailored timings that fit school, work, and family schedules across different timezones.",
    why4Title: "Classes for Children and Adults",
    why4Desc: "Thoughtfully structured curricula suitable for young children, teenagers, and mature adult learners.",
    why5Title: "Regular Student Progress Updates for Parents",
    why5Desc: "Transparent feedback and regular updates keeping parents closely informed about learning milestones.",
    why6Title: "Friendly & Respectful Learning Environment",
    why6Desc: "Patient, courteous, and polite teachers who encourage students with warmth and Islamic values.",
    why7Title: "Free Trial Class for New Students",
    why7Desc: "Evaluate our teaching approach and interactive classroom firsthand with zero upfront commitment.",

    // About Us Content
    aboutBadge: "Our Sacred Mission",
    aboutTitle: "Making Authentic Quranic Education Accessible Worldwide",
    aboutP1: "Dar-e-Arqam Online Quran Academy was established with a sincere vision: to connect Muslim families and aspiring Quran learners worldwide with trustworthy, compassionate, and structured Quranic education directly from the comfort of their homes.",
    aboutP2: "Named after the historic Dar-e-Arqam — the blessed house where the early companions of the Prophet Muhammad (PBUH) gathered to learn the revelations of the Holy Quran — our academy strives to embody that same spirit of sincerity, patience, and devotion to sacred knowledge.",
    aboutP3: "We welcome students from Pakistan and across the globe, including the UK, USA, Canada, Europe, Australia, and the Gulf. Whether your child is taking their very first steps with Noorani Qaida, or you are an adult seeking to refine your Tajweed or memorize the Holy Book, our academy is honored to walk beside you on this noble journey.",
    aboutValue1Title: "Sincerity (Ikhlas)",
    aboutValue1Desc: "Teaching the Book of Allah purely for the pleasure of Allah and the benefit of our students.",
    aboutValue2Title: "Patience & Care",
    aboutValue2Desc: "Encouraging every learner with gentle guidance, no matter their beginning proficiency.",
    aboutValue3Title: "Global Accessibility",
    aboutValue3Desc: "Bridging geographical boundaries so distance never hinders authentic Quranic learning.",

    // Free Trial Form
    trialFormBadge: "Zero Obligation",
    trialFormTitle: "Register for Your Free Trial Class",
    trialFormSubtitle: "Fill in the details below and our academy coordinator will contact you to schedule your preferred class time.",
    lblParentName: "Parent or Student Name",
    phParentName: "Enter full name",
    lblWhatsApp: "WhatsApp Number",
    phWhatsApp: "e.g. +92 300 1234567 or +1 234 567 8900",
    lblAge: "Student's Age",
    phAge: "e.g. 7, 12, 25, 40",
    lblCourse: "Preferred Course",
    lblTiming: "Preferred Class Timing",
    phTiming: "e.g. Evenings (5:00 PM - 7:00 PM) or Weekends",
    lblCountry: "Country",
    phCountry: "e.g. Pakistan, United Kingdom, USA, Canada, UAE",
    lblNotes: "Additional Message / Preferred Days (Optional)",
    phNotes: "Mention any specific requirements or questions...",
    btnSubmitTrial: "Submit Free Trial Request",
    btnSubmitWithWhatsApp: "Send Request via WhatsApp Directly",
    trialGuarantee: "Your personal details are kept private and confidential. No credit card required.",

    // Form confirmation
    confirmSuccessTitle: "Alhamdulillah! Registration Received",
    confirmSuccessMsg: "Thank you for registering with Dar-e-Arqam Online Quran Academy. Our team will review your request and contact you via WhatsApp shortly with your trial class schedule.",
    confirmSuccessWA: "You can also message us directly on WhatsApp right now to get an instant response:",
    btnCloseModal: "Close",

    // Contact Section
    contactInfoTitle: "Academy Contact Details",
    contactInfoSubtitle: "Reach out to us anytime for inquiries, schedule adjustments, or course advice.",
    contactWhatsAppTitle: "WhatsApp Inquiries",
    contactPhoneTitle: "Academy Phone",
    contactEmailTitle: "Academy Email",
    contactLocationTitle: "Academy Location",
    contactLocationVal: "Online Quran Education (Worldwide Classes)",
    contactFormTitle: "Send Us a Message",
    lblContactName: "Your Name",
    lblContactEmail: "Your Email Address",
    lblContactSubject: "Subject",
    lblContactMsg: "Your Message",
    phContactMsg: "How can we assist you?",
    btnSendMsg: "Send Message",
    contactSuccessMsg: "Thank you! Your message has been received. We will respond promptly.",

    // Footer
    footerDesc: "Dar-e-Arqam Online Quran Academy is dedicated to providing high-quality, trustworthy, and personalized Quran education for children and adults globally.",
    footerQuickLinks: "Quick Links",
    footerCourses: "Our Courses",
    footerContact: "Get in Touch",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    footerAdmin: "Admin Inquiries",
    footerRights: "All Rights Reserved. Dar-e-Arqam Online Quran Academy.",
    floatingWATooltip: "Chat with us on WhatsApp"
  },

  ur: {
    // Navigation
    navHome: "صفحۂ اول",
    navCourses: "ہمارے کورسز",
    navWhyUs: "ہمیں کیوں منتخب کریں؟",
    navAbout: "ہمارے متعلق",
    navTrial: "مفت آزمائشی کلاس",
    navContact: "ہم سے رابطہ کریں",
    navInquiries: "ایڈمن پورٹل",
    bookTrialBtn: "مفت کلاس بک کریں",
    whatsappBtn: "واٹس ایپ",
    languageToggle: "English",

    // Hero Section
    bismillahAlt: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    heroBadge: "عالمی آن لائن قرآنی تعلیم کا معتبر ادارہ",
    heroHeadline: "اپنے گھر کی راحت سے آن لائن قرآن پاک سیکھیں",
    heroSubtitle: "بچوں اور بڑوں کے لیے معیاری قرآنی تعلیم، تجربہ کار اساتذہ، کلاس کے لچکدار اوقات اور انفرادی توجہ کے ساتھ۔",
    heroTrialBtn: "مفت آزمائشی کلاس بک کریں",
    heroWhatsAppBtn: "واٹس ایپ پر رابطہ کریں",
    heroFeature1: "ون آن ون انفرادی کلاسز",
    heroFeature2: "چوبیس گھنٹے لچکدار اوقات",
    heroFeature3: "بچوں اور بڑوں کے لیے یکساں مفید",

    // Section Headers
    coursesHeading: "ہمارے کورسز",
    coursesSubheading: "ہر عمر اور فہم کے مطابق جامع اور منظم قرآنی و اسلامی نصابِ تعلیم۔",
    whyUsHeading: "ہماری اکیڈمی کا انتخاب کیوں کریں؟",
    whyUsSubheading: "طلبہ کی روحانی اور فکری تربیت کے لیے خلوصِ نیت اور تدریسی مہارت کے ساتھ وقف۔",
    aboutHeading: "ہمارے متعلق",
    aboutSubheading: "آن لائن تدریس کے ذریعے دنیا بھر کے طلبہ کو قرآن مجید کے ساتھ جوڑنے کا پرعزم سفر۔",
    trialHeading: "مفت آزمائشی کلاس",
    trialSubheading: "بغیر کسی پیشگی فیس یا دباؤ کے ہماری تدریسی صلاحیت کا خود مشاہدہ کریں۔",
    contactHeading: "ہم سے رابطہ کریں",
    contactSubheading: "کوئی بھی سوال ہو؟ ہماری معاون ٹیم والدین اور طلبہ کی رہنمائی کے لیے ہمہ وقت حاضر ہے۔",

    // Courses List
    courseInquire: "کلاس کی معلومات لیں",
    courseBadgeBeginner: "ابتدائی",
    courseBadgeIntermediate: "متوسط",
    courseBadgeAdvanced: "اعلیٰ",
    courseBadgeAllAges: "ہر عمر کے لیے",

    // Noorani Qaida
    course1Title: "نورانی قاعدہ",
    course1Desc: "عربی حروفِ تہجی کی درست پہچان، مخارج اور بنیادی صوتی اصولوں کی جامع تدریس جو بچوں اور ابتدائی طلبہ کے لیے سنگِ میل کی حیثیت رکھتی ہے۔",
    course1Highlights: ["حروف کے درست مخارج کی مشق", "مرکبات اور ملے جلے حروف کی پہچان", "حرکات، سکون اور مدات کے بنیادی قواعد", "روانی کے ساتھ پڑھنے کا اعتماد"],

    // Madani Qaida
    course2Title: "مدنی قاعدہ",
    course2Desc: "ایک آسان اور منظم نصاب جس میں حروف کی درست ادائیگی، تنوین، جزم اور تشدید کی مشق کے ذریعے طلبہ کو ناظرہ قرآن کے لیے تیار کیا جاتا ہے۔",
    course2Highlights: ["صوتی قواعد کی تفصیلی مشقیں", "تنوین، جزم اور تشدید کے قواعد", "تلفظ کی درستی پر خاص توجہ", "ناظرہ قرآن کے لیے مضبوط بنیاد"],

    // Quran Reading (Nazra)
    course3Title: "ناظرہ قرآن پاک",
    course3Desc: "تجوید کے بنیادی اصولوں، درست وقف اور روانی کے ساتھ قرآن پاک کو دیکھ کر پڑھنے کی باقاعدہ مشق تجربہ کار اساتذہ کی زیرِ نگرانی۔",
    course3Highlights: ["سورۃ الفاتحہ سے سورۃ الناس تک مکمل تلاوت", "رموزِ اوقاف اور وقف کے قواعد", "روزانہ تلاوت کی مشق اور روانی", "غلطیوں کی پیار اور نرمی سے اصلاح"],

    // Quran with Tajweed
    course4Title: "تجوید کے ساتھ قرآن",
    course4Desc: "قرآن مجید کو اس کے تمام صوتی حسن اور قواعد (مخارج، غنہ، اخفاء، ادغام، قلقلہ) کے ساتھ ترتیل کے انداز میں پڑھنا سیکھیں۔",
    course4Highlights: ["مخارج الحروف کی مکمل معرفت", "نون ساکن اور میم ساکن کے احکام", "مدات کی اقسام اور مقدار", "خوش الحانی اور باوقار اندازِ تلاوت"],

    // Quran Memorization (Hifz)
    course5Title: "حفظ القرآن (قرآن مجید حفظ کرنا)",
    course5Desc: "روزانہ کا سبق، سبقی اور پچھلی منزل کی باقاعدہ دہرائی کے ساتھ ایک پرسکون اور منظم طریقہ کار کے تحت حفظِ قرآن کا باوقار کورس۔",
    course5Highlights: ["روزانہ نیا سبق یاد کروانا (سبق)", "حالیہ پاروں کی دہرائی (سبقی)", "مکمل پچھلے قرآن کی پختگی (منزل)", "کل وقتی یا جز وقتی لچکدار سہولت"],

    // Basic Islamic Studies
    course6Title: "بنیادی اسلامی تعلیمات",
    course6Desc: "نئی نسل کو بنیادی عقائد، ارکانِ اسلام، سیرت النبی ﷺ اور روزمرہ آداب و اخلاقیات سے روشناس کروانے کے لیے ایک خوبصورت تربیتی کورس۔",
    course6Highlights: ["چھ کلمے اور بنیادی ایمانیات", "ارکانِ اسلام کی آسان فہم تفہیم", "انبیاء کرام کے ایمان افروز واقعات اور سیرت", "اخلاقیات، آدابِ زندگی اور تربیت"],

    // Daily Duas and Salah Learning
    course7Title: "روزمرہ کی دعائیں اور نماز کی تربیت",
    course7Desc: "وضو اور نماز کا مکمل عملی طریقہ بمعہ ترجمہ، نیز صبح و شام کی ضروری مسنون دعاؤں کی حفظ و تفہیم۔",
    course7Highlights: ["نماز کا مکمل عملی طریقہ کار", "وضو کے فرائض و سنن کی تربیت", "روزمرہ کی ضروری مسنون دعائیں", "نماز میں پڑھی جانے والی سورتیں"],

    // Why Choose Our Academy
    why1Title: "گھر بیٹھے آن لائن قرآنی کلاسز",
    why1Desc: "کہیں آنے جانے کی زحمت کے بغیر اپنے گھر کے محفوظ اور پرسکون ماحول میں لائیو کلاسز لیں۔",
    why2Title: "ہر طالب علم کے لیے انفرادی توجہ",
    why2Desc: "ون آن ون کلاسز جس میں استاد کی پوری توجہ صرف اور صرف آپ کے بچے کی تعلیم پر مرکوز رہتی ہے۔",
    why3Title: "کلاس کے لچکدار اوقات",
    why3Desc: "سکول، ملازمت اور گھریلو مصروفیات کے مطابق چوبیس گھنٹے میں سے اپنی پسند کا وقت منتخب کریں۔",
    why4Title: "بچوں اور بڑوں دونوں کے لیے کلاسز",
    why4Desc: "مرد و خواتین، کمسن بچوں اور بزرگوں کی ضروریات اور فہم کے مطابق مرتب کردہ آسان نصاب۔",
    why5Title: "والدین کے لیے باقاعدہ تعلیمی رپورٹ",
    why5Desc: "والدین کو طالب علم کی ہفتہ وار اور ماہانہ تعلیمی کارکردگی اور پیش رفت سے مسلسل آگاہ رکھا جاتا ہے۔",
    why6Title: "دوستانہ اور باوقار تعلیمی ماحول",
    why6Desc: "شفیق، صبر آزما اور مہذب اساتذہ جو طلبہ کی حوصلہ افزائی اور بہترین تربیت کا خیال رکھتے ہیں۔",
    why7Title: "نئے طلبہ کے لیے بالکل مفت آزمائشی کلاس",
    why7Desc: "بغیر کسی فیس کے ہمارا تدریسی انداز جانچنے کے لیے مفت آزمائشی کلاس کی پیشکش۔",

    // About Us Content
    aboutBadge: "ہمارا مقدس مشن",
    aboutTitle: "قرآنی تعلیم کو پوری دنیا میں ہر گھر تک پہنچانا",
    aboutP1: "دارِ ارقم آن لائن قرآن اکیڈمی کا قیام اس پاکیزہ مقصد کے تحت عمل میں لایا گیا کہ دنیا بھر کے مسلمان خاندانوں اور قرآنی طلبہ کو ان کے اپنے گھر کی راحت سے معتبر، شفیق اور منظم قرآنی تعلیم فراہم کی جا سکے۔",
    aboutP2: "اس اکیڈمی کا نام تاریخِ اسلام کے اس مبارک گھر 'دارِ ارقم' سے منسوب ہے جہاں صحابہ کرام رضی اللہ عنہم نے رسول اللہ ﷺ کے زیرِ سایہ قرآن کریم کی اولین آیات کا علم حاصل کیا۔ ہم اسی خلوص، شفقت اور جذبے کے ساتھ دین کی خدمت کے لیے کوشاں ہیں۔",
    aboutP3: "ہم پاکستان اور دنیا بھر کے تمام ممالک (برطانیہ، امریکہ، کینیڈا، یورپ، آسٹریلیا اور خلیجی ممالک) کے طلبہ کو خوش آمدید کہتے ہیں۔ چاہے آپ کا بچہ نورانی قاعدے سے آغاز کر رہا ہو یا آپ بطور بالغ تجوید سنوارنا یا حفظ کرنا چاہتے ہوں، یہ سفر ہمارے ساتھ آسان اور بابرکت ہے۔",
    aboutValue1Title: "اخلاصِ نیت",
    aboutValue1Desc: "صرف اور صرف رضائے الٰہی اور امت کے نفع کے لیے تدریسِ قرآن۔",
    aboutValue2Title: "صبر اور شفقت",
    aboutValue2Desc: "ہر طالب علم کو اس کی رفتار کے مطابق نرمی اور محبت سے سکھانا۔",
    aboutValue3Title: "عالمی رسائی",
    aboutValue3Desc: "فاصلوں کو مٹا کر ہر خطے کے مسلمان کے لیے قرآنی تعلیم کو آسان بنانا۔",

    // Free Trial Form
    trialFormBadge: "بلا معاوضہ",
    trialFormTitle: "مفت آزمائشی کلاس کے لیے رجسٹریشن کریں",
    trialFormSubtitle: "درج ذیل فارم پُر کریں، ہماری اکیڈمی کا نمائندہ جلد آپ کے منتخب وقت کی کلاس شیڈول کرنے کے لیے رابطہ کرے گا۔",
    lblParentName: "والد یا طالب علم کا نام",
    phParentName: "مکمل نام درج کریں",
    lblWhatsApp: "واٹس ایپ نمبر",
    phWhatsApp: "مثلاً +92 300 1234567 یا ملکی کوڈ کے ساتھ",
    lblAge: "طالب علم کی عمر",
    phAge: "مثلاً 7، 14، 25، 40 سال",
    lblCourse: "پسندیدہ کورس منتخب کریں",
    lblTiming: "کلاس کا مناسب وقت",
    phTiming: "مثلاً شام 5 سے 7 بجے یا ویک اینڈ",
    lblCountry: "ملک کا نام",
    phCountry: "مثلاً پاکستان، برطانیہ، امریکہ، کینیڈا، دبئی وغیرہ",
    lblNotes: "اضافی پیغام یا خصوصی ہدایات (اختیاری)",
    phNotes: "کوئی خاص سوال یا ترجیحی دن...",
    btnSubmitTrial: "مفت ٹرائل کلاس کی درخواست جمع کروائیں",
    btnSubmitWithWhatsApp: "براہِ راست واٹس ایپ پر پیغام بھیجیں",
    trialGuarantee: "آپ کی معلومات مکمل محفوظ رکھی جاتی ہیں۔ کسی کریڈٹ کارڈ کی ضرورت نہیں۔",

    // Form confirmation
    confirmSuccessTitle: "الحمد للہ! آپ کی رجسٹریشن موصول ہو گئی ہے",
    confirmSuccessMsg: "دارِ ارقم آن لائن قرآن اکیڈمی پر اعتماد کرنے کا شکریہ۔ ہماری ٹیم جلد ہی آپ سے واٹس ایپ پر رابطہ کر کے کلاس کا وقت طے کرے گی۔",
    confirmSuccessWA: "فوری جواب کے لیے آپ ہمیں ابھی واٹس ایپ پر بھی پیغام بھیج سکتے ہیں:",
    btnCloseModal: "بند کریں",

    // Contact Section
    contactInfoTitle: "اکیڈمی سے رابطہ کی تفصیلات",
    contactInfoSubtitle: "کورسز، اوقات یا کلاسز کی معلومات کے لیے کسی بھی وقت رابطہ فرمائیں۔",
    contactWhatsAppTitle: "واٹس ایپ رابطہ",
    contactPhoneTitle: "اکیڈمی فون نمبر",
    contactEmailTitle: "اکیڈمی ای میل",
    contactLocationTitle: "اکیڈمی کا مقام",
    contactLocationVal: "آن لائن قرآنی تعلیم (پوری دنیا میں تدریس)",
    contactFormTitle: "ہمیں اپنا پیغام بھیجیں",
    lblContactName: "آپ کا نام",
    lblContactEmail: "ای میل ایڈریس",
    lblContactSubject: "عنوان",
    lblContactMsg: "آپ کا پیغام",
    phContactMsg: "ہم آپ کی کیا رہنمائی کر سکتے ہیں؟",
    btnSendMsg: "پیغام ارسال کریں",
    contactSuccessMsg: "شکریہ! آپ کا پیغام ہمیں مل گیا ہے۔ ہم جلد از جلد آپ سے رابطہ کریں گے۔",

    // Footer
    footerDesc: "دارِ ارقم آن لائن قرآن اکیڈمی پوری دنیا میں مقیم بچوں اور بڑوں کے لیے مستند، پرسکون اور معیاری قرآنی تعلیم کا معتبر نام ہے۔",
    footerQuickLinks: "اہم لنکس",
    footerCourses: "ہمارے کورسز",
    footerContact: "رابطہ کی تفصیلات",
    footerPrivacy: "رازداری کی پالیسی (Privacy Policy)",
    footerTerms: "شرائط و ضوابط (Terms & Conditions)",
    footerAdmin: "ایڈمن انکوائری پورٹل",
    footerRights: "جملہ حقوق محفوظ ہیں۔ دارِ ارقم آن لائن قرآن اکیڈمی۔",
    floatingWATooltip: "واٹس ایپ پر فوری رابطہ کریں"
  }
};
