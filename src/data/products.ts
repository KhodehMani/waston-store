import type { Product } from "@/types/product";

/**
 * Sample catalogue transcribed from the WASTON mockup.
 * Names, prices, discounts and ratings are demo data (as the mockup states).
 * Array order = "پیشنهاد WASTON" (recommended) order inside each category.
 */
export const products: Product[] = [
  // ── لوازم برقی آشپزخانه ───────────────────────────────────────────
  {
    id: "t-210", slug: "t-210", model: "T-210", title: "توستر دو اسلایس استیل", brand: "WASTON",
    category: "kitchen-appliances", tags: [], illustration: "toaster", tone: "teal",
    price: 2_450_000, compareAt: 2_890_000, rating: 4.6, reviews: 38, stock: null,
    giftWrap: true, occasions: ["birthday", "housewarming"], salesRank: 1, facets: { power: 900 },
    summary: "توستر دو اسلایس با بدنه استیل، ۷ درجه برشته‌کردن و سینی جمع‌کننده خرده نان؛ مناسب صبحانه‌های سریع روزانه.",
    highlights: ["۷ سطح برشته‌کردن", "دکمه گرم‌کردن مجدد و یخ‌زدایی", "سینی خرده نان کشویی"],
    specs: [
      { label: "توان مصرفی", value: "۹۰۰ وات" }, { label: "ظرفیت", value: "۲ اسلایس" },
      { label: "جنس بدنه", value: "استیل ضدزنگ" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "fp-1200", slug: "fp-1200", model: "FP-1200", title: "غذاساز چندکاره ۱۲ کاره", brand: "WASTON",
    category: "kitchen-appliances", tags: [], illustration: "food-processor", tone: "navy",
    price: 7_850_000, rating: 4.7, reviews: 52, stock: null,
    giftWrap: true, occasions: ["housewarming"], salesRank: 3, facets: { power: 1200 },
    summary: "غذاساز ۱۲ کاره با کاسه ۳ لیتری، تیغه‌های خردکن و رنده و همزن؛ یک دستگاه برای بیشتر کارهای آشپزخانه.",
    highlights: ["۱۲ کاربرد با لوازم جانبی کامل", "کاسه ۳ لیتری بدون BPA", "قفل ایمنی درب"],
    specs: [
      { label: "توان مصرفی", value: "۱۲۰۰ وات" }, { label: "ظرفیت کاسه", value: "۳ لیتر" },
      { label: "تعداد سرعت", value: "۲ سرعت + پالس" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "k-17", slug: "k-17", model: "K-17", title: "کتری برقی ۱٫۷ لیتری", brand: "برند نمونه الف",
    category: "kitchen-appliances", tags: [], illustration: "kettle", tone: "coral",
    price: 1_680_000, compareAt: 1_990_000, rating: 4.4, reviews: 27, stock: null,
    giftWrap: true, occasions: ["housewarming", "yalda-nowruz"], salesRank: 5, facets: { power: 2200 },
    summary: "کتری برقی ۱٫۷ لیتری با خاموشی خودکار و پایه چرخان ۳۶۰ درجه.",
    highlights: ["خاموشی خودکار پس از جوش", "پایه چرخان ۳۶۰ درجه", "نشانگر سطح آب"],
    specs: [
      { label: "توان مصرفی", value: "۲۲۰۰ وات" }, { label: "ظرفیت", value: "۱٫۷ لیتر" },
      { label: "جنس بدنه", value: "استیل و پلاستیک مقاوم" }, { label: "گارانتی", value: "۱۲ ماه (داده نمونه)" },
    ],
  },
  {
    id: "cm-06", slug: "cm-06", model: "CM-06", title: "قهوه‌ساز قطره‌ای", brand: "WASTON",
    category: "kitchen-appliances", tags: [], illustration: "coffee-maker", tone: "coral",
    price: 4_150_000, compareAt: 4_790_000, rating: 4.5, reviews: 31, stock: 3, limited: true,
    giftWrap: true, occasions: ["birthday", "anniversary"], salesRank: 8, facets: { power: 1300 },
    summary: "قهوه‌ساز قطره‌ای ۶ فنجانه با صفحه گرم‌نگه‌دار و فیلتر دائمی قابل شست‌وشو.",
    highlights: ["ظرفیت ۶ فنجان", "صفحه گرم‌نگه‌دار ۴۰ دقیقه‌ای", "فیلتر دائمی"],
    specs: [
      { label: "توان مصرفی", value: "۱۳۰۰ وات" }, { label: "ظرفیت", value: "۰٫۷۵ لیتر" },
      { label: "نوع فیلتر", value: "دائمی، قابل شست‌وشو" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "bl-15", slug: "bl-15", model: "BL-15", title: "مخلوط‌کن شیشه‌ای ۱٫۵ لیتری", brand: "برند نمونه ب",
    category: "kitchen-appliances", tags: [], illustration: "blender", tone: "teal",
    price: 3_290_000, rating: 4.3, reviews: 19, stock: null, newRank: 5, salesRank: 12, facets: { power: 700 },
    summary: "مخلوط‌کن با پارچ شیشه‌ای ۱٫۵ لیتری و تیغه ۶ پر استیل برای اسموتی و سوپ.",
    highlights: ["پارچ شیشه‌ای مقاوم به حرارت", "تیغه ۶ پر استیل", "حالت خردکردن یخ"],
    specs: [
      { label: "توان مصرفی", value: "۷۰۰ وات" }, { label: "ظرفیت", value: "۱٫۵ لیتر" },
      { label: "جنس پارچ", value: "شیشه" }, { label: "گارانتی", value: "۱۲ ماه (داده نمونه)" },
    ],
  },
  {
    id: "t-420", slug: "t-420", model: "T-420", title: "توستر چهار اسلایس", brand: "WASTON",
    category: "kitchen-appliances", tags: [], illustration: "toaster", tone: "navy",
    price: 3_640_000, rating: 4.2, reviews: 14, stock: 0, facets: { power: 1600 },
    summary: "توستر چهار اسلایس با کنترل مستقل دو طرف؛ مناسب خانواده‌های پرجمعیت.",
    highlights: ["کنترل مستقل دو جفت شکاف", "شکاف‌های عریض", "خاموشی خودکار"],
    specs: [
      { label: "توان مصرفی", value: "۱۶۰۰ وات" }, { label: "ظرفیت", value: "۴ اسلایس" },
      { label: "جنس بدنه", value: "استیل" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "fp-600", slug: "fp-600", model: "FP-600", title: "غذاساز کامپکت", brand: "برند نمونه الف",
    category: "kitchen-appliances", tags: [], illustration: "food-processor", tone: "teal",
    price: 4_980_000, reviews: 0, stock: null, newRank: 1,
    giftWrap: true, occasions: ["birthday"], facets: { power: 600 },
    summary: "غذاساز جمع‌وجور برای آشپزخانه‌های کوچک، با کاسه ۱٫۵ لیتری و دو تیغه.",
    highlights: ["ابعاد کوچک", "کاسه ۱٫۵ لیتری", "شست‌وشوی آسان قطعات"],
    specs: [
      { label: "توان مصرفی", value: "۶۰۰ وات" }, { label: "ظرفیت کاسه", value: "۱٫۵ لیتر" },
      { label: "تعداد سرعت", value: "۱ سرعت + پالس" }, { label: "گارانتی", value: "۱۲ ماه (داده نمونه)" },
    ],
  },

  // ── ظروف آشپزخانه (شامل سفال و سرامیک) ──────────────────────────────
  {
    id: "ck-8", slug: "ck-8", model: "CK-8", title: "سرویس قابلمه ۸ پارچه استیل", brand: "WASTON",
    category: "kitchenware", tags: ["cooking"], illustration: "pot", tone: "coral",
    price: 8_900_000, compareAt: 10_400_000, rating: 4.7, reviews: 61, stock: null,
    giftWrap: true, occasions: ["housewarming", "anniversary"], salesRank: 2, facets: { material: "steel" },
    summary: "سرویس ۸ پارچه استیل با کف سه‌لایه، مناسب همه اجاق‌ها از جمله القایی.",
    highlights: ["کف سه‌لایه برای پخش یکنواخت حرارت", "سازگار با اجاق القایی", "درب شیشه‌ای با سوپاپ بخار"],
    specs: [
      { label: "تعداد قطعات", value: "۸ پارچه" }, { label: "جنس", value: "استیل ۱۸/۱۰" },
      { label: "اجاق مناسب", value: "گاز، برقی، القایی" }, { label: "ضمانت", value: "اصالت کالا" },
    ],
  },
  {
    id: "cr-m2", slug: "cr-m2", model: "CR-M2", title: "ماگ سرامیکی دوتایی", brand: "WASTON",
    category: "kitchenware", tags: ["cups", "ceramic"], illustration: "mug", tone: "teal",
    price: 860_000, rating: 4.8, reviews: 40, stock: null, newRank: 4,
    giftWrap: true, occasions: ["birthday", "anniversary", "yalda-nowruz"], salesRank: 7, facets: { material: "ceramic" },
    summary: "دو ماگ سرامیکی لعاب‌دار ۳۵۰ میلی‌لیتری؛ هدیه‌ای ساده برای دو نفر.",
    highlights: ["ظرفیت ۳۵۰ میلی‌لیتر", "قابل استفاده در مایکروویو", "لعاب مات"],
    specs: [
      { label: "تعداد", value: "۲ عدد" }, { label: "جنس", value: "سرامیک لعاب‌دار" },
      { label: "ظرفیت", value: "۳۵۰ میلی‌لیتر" }, { label: "ماشین ظرفشویی", value: "مناسب" },
    ],
  },
  {
    id: "pn-28", slug: "pn-28", model: "PN-28", title: "تابه گرانیتی ۲۸ سانتی‌متر", brand: "برند نمونه الف",
    category: "kitchenware", tags: ["cooking"], illustration: "pan", tone: "teal",
    price: 1_450_000, rating: 4.4, reviews: 35, stock: null, salesRank: 6, facets: { material: "granite" },
    summary: "تابه گرانیتی نچسب ۲۸ سانتی‌متری برای پخت کم‌روغن.",
    highlights: ["پوشش نچسب گرانیتی", "دسته ضد حرارت", "مناسب پخت کم‌روغن"],
    specs: [
      { label: "قطر", value: "۲۸ سانتی‌متر" }, { label: "جنس", value: "آلومینیوم با پوشش گرانیت" },
      { label: "اجاق مناسب", value: "گاز و برقی" }, { label: "ضمانت", value: "اصالت کالا" },
    ],
  },
  {
    id: "ct-30", slug: "ct-30", model: "CT-30", title: "سرویس قاشق و چنگال ۳۰ پارچه", brand: "WASTON",
    category: "kitchenware", tags: ["serving"], illustration: "cutlery", tone: "teal",
    price: 3_450_000, rating: 4.5, reviews: 29, stock: null,
    giftWrap: true, occasions: ["housewarming", "yalda-nowruz"], salesRank: 9, facets: { material: "steel" },
    summary: "سرویس ۳۰ پارچه استیل برای ۶ نفر، با جعبه نگهداری.",
    highlights: ["مناسب ۶ نفر", "استیل براق ضدزنگ", "جعبه نگهداری"],
    specs: [
      { label: "تعداد قطعات", value: "۳۰ پارچه" }, { label: "جنس", value: "استیل ۱۸/۱۰" },
      { label: "تعداد نفرات", value: "۶ نفر" }, { label: "ماشین ظرفشویی", value: "مناسب" },
    ],
  },
  {
    id: "gl-6", slug: "gl-6", model: "GL-6", title: "سرویس لیوان شیشه‌ای ۶ عددی", brand: "برند نمونه ب",
    category: "kitchenware", tags: ["cups"], illustration: "glasses", tone: "navy",
    price: 980_000, compareAt: 1_150_000, rating: 4.2, reviews: 23, stock: null,
    giftWrap: true, occasions: ["housewarming", "yalda-nowruz"], salesRank: 11, facets: { material: "glass" },
    summary: "شش لیوان شیشه‌ای ۳۰۰ میلی‌لیتری با دیواره ضخیم.",
    highlights: ["۶ عدد لیوان", "دیواره ضخیم و مقاوم", "قابل شست‌وشو در ماشین"],
    specs: [
      { label: "تعداد", value: "۶ عدد" }, { label: "جنس", value: "شیشه" },
      { label: "ظرفیت", value: "۳۰۰ میلی‌لیتر" }, { label: "ماشین ظرفشویی", value: "مناسب" },
    ],
  },
  {
    id: "cr-v2", slug: "cr-v2", model: "CR-V2", title: "گلدان سرامیکی لعاب‌دار", brand: "برند نمونه الف",
    category: "ceramics", tags: ["ceramic"], illustration: "vase", tone: "navy",
    price: 1_890_000, compareAt: 2_200_000, rating: 4.6, reviews: 12, stock: 3, limited: true,
    giftWrap: true, occasions: ["birthday", "anniversary", "housewarming"], facets: { material: "ceramic" },
    summary: "گلدان سرامیکی دست‌ساز با لعاب براق؛ هر قطعه کمی با دیگری متفاوت است.",
    highlights: ["دست‌ساز", "لعاب براق", "ارتفاع ۲۸ سانتی‌متر"],
    specs: [
      { label: "ارتفاع", value: "۲۸ سانتی‌متر" }, { label: "جنس", value: "سرامیک لعاب‌دار" },
      { label: "نوع ساخت", value: "دست‌ساز" }, { label: "ضمانت", value: "اصالت کالا" },
    ],
  },
  {
    id: "cr-p6", slug: "cr-p6", model: "CR-P6", title: "سرویس بشقاب سرامیکی ۶ عددی", brand: "برند نمونه ب",
    category: "kitchenware", tags: ["serving", "ceramic"], illustration: "plate", tone: "coral",
    price: 2_750_000, rating: 4.3, reviews: 16, stock: 0,
    giftWrap: true, occasions: ["housewarming", "yalda-nowruz"], facets: { material: "ceramic" },
    summary: "شش بشقاب تخت سرامیکی ۲۷ سانتی‌متری با لبه لعاب‌دار.",
    highlights: ["۶ عدد بشقاب تخت", "قطر ۲۷ سانتی‌متر", "مناسب مایکروویو"],
    specs: [
      { label: "تعداد", value: "۶ عدد" }, { label: "جنس", value: "سرامیک" },
      { label: "قطر", value: "۲۷ سانتی‌متر" }, { label: "ماشین ظرفشویی", value: "مناسب" },
    ],
  },
  {
    id: "tr-40", slug: "tr-40", model: "TR-40", title: "سینی پذیرایی استیل", brand: "WASTON",
    category: "kitchenware", tags: ["serving"], illustration: "tray", tone: "coral",
    price: 1_250_000, rating: 4, reviews: 8, stock: null, newRank: 6,
    giftWrap: true, occasions: ["yalda-nowruz", "housewarming"], facets: { material: "steel" },
    summary: "سینی پذیرایی استیل ۴۰ سانتی‌متری با دسته‌های یکپارچه.",
    highlights: ["طول ۴۰ سانتی‌متر", "دسته‌های یکپارچه", "سطح براق ضدلک"],
    specs: [
      { label: "ابعاد", value: "۴۰ × ۲۸ سانتی‌متر" }, { label: "جنس", value: "استیل" },
      { label: "کاربرد", value: "پذیرایی" }, { label: "ضمانت", value: "اصالت کالا" },
    ],
  },
  {
    id: "pt-b1", slug: "pt-b1", model: "PT-B1", title: "کاسه سفالی دست‌ساز", brand: "WASTON",
    category: "ceramics", tags: ["serving", "ceramic"], illustration: "bowl", tone: "coral",
    price: 720_000, reviews: 0, stock: null, newRank: 2,
    giftWrap: true, occasions: ["birthday", "yalda-nowruz"], facets: { material: "pottery" },
    summary: "کاسه سفالی دست‌ساز با لعاب خوراکی؛ مناسب سالاد، آش و پذیرایی.",
    highlights: ["لعاب خوراکی", "دست‌ساز", "قطر ۱۸ سانتی‌متر"],
    specs: [
      { label: "قطر", value: "۱۸ سانتی‌متر" }, { label: "جنس", value: "سفال لعاب‌دار" },
      { label: "نوع ساخت", value: "دست‌ساز" }, { label: "نگهداری", value: "شست‌وشو با دست" },
    ],
  },

  // ── لوازم نظافت خانه ─────────────────────────────────────────────
  {
    id: "v-2000", slug: "v-2000", model: "V-2000", title: "جاروبرقی سطلی ۲۰۰۰ وات", brand: "WASTON",
    category: "cleaning", tags: [], illustration: "vacuum", tone: "navy",
    price: 9_850_000, compareAt: 11_200_000, rating: 4.5, reviews: 44, stock: null,
    salesRank: 4, facets: { deviceType: "canister", power: 2000 },
    summary: "جاروبرقی سطلی ۲۰۰۰ وات با فیلتر HEPA و مخزن ۴ لیتری؛ مناسب فرش و فضاهای بزرگ.",
    highlights: ["فیلتر HEPA", "مخزن ۴ لیتری", "۳ برس همراه"],
    specs: [
      { label: "توان مصرفی", value: "۲۰۰۰ وات" }, { label: "نوع فیلتر", value: "HEPA" },
      { label: "ظرفیت مخزن", value: "۴ لیتر" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "sv-30", slug: "sv-30", model: "SV-30", title: "جاروبرقی عصایی شارژی", brand: "WASTON",
    category: "cleaning", tags: [], illustration: "stick-vacuum", tone: "teal",
    price: 12_400_000, rating: 4.6, reviews: 22, stock: null, newRank: 3,
    giftWrap: true, occasions: ["housewarming"], salesRank: 10, facets: { deviceType: "stick" },
    summary: "جاروبرقی عصایی شارژی با ۴۵ دقیقه کارکرد و قابلیت تبدیل به جاروی دستی.",
    highlights: ["۴۵ دقیقه کارکرد با هر شارژ", "قابل تبدیل به جاروی دستی", "برس مخصوص موی حیوانات"],
    specs: [
      { label: "زمان کارکرد", value: "۴۵ دقیقه" }, { label: "نوع فیلتر", value: "چندمرحله‌ای قابل شست‌وشو" },
      { label: "ظرفیت مخزن", value: "۰٫۶ لیتر" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },
  {
    id: "hv-8", slug: "hv-8", model: "HV-8", title: "جاروشارژی دستی", brand: "برند نمونه ب",
    category: "cleaning", tags: [], illustration: "stick-vacuum", tone: "coral",
    price: 2_350_000, compareAt: 2_690_000, rating: 4.1, reviews: 17, stock: null,
    facets: { deviceType: "handheld" },
    summary: "جاروشارژی دستی سبک برای مبلمان، خودرو و نظافت سریع.",
    highlights: ["وزن ۱٫۲ کیلوگرم", "۲۰ دقیقه کارکرد", "سری شکاف‌گیر"],
    specs: [
      { label: "زمان کارکرد", value: "۲۰ دقیقه" }, { label: "وزن", value: "۱٫۲ کیلوگرم" },
      { label: "ظرفیت مخزن", value: "۰٫۳ لیتر" }, { label: "گارانتی", value: "۱۲ ماه (داده نمونه)" },
    ],
  },
  {
    id: "sm-12", slug: "sm-12", model: "SM-12", title: "بخارشوی زمین", brand: "برند نمونه الف",
    category: "cleaning", tags: [], illustration: "steam-mop", tone: "navy",
    price: 5_600_000, rating: 4.3, reviews: 11, stock: 2, limited: true, facets: { deviceType: "steam" },
    summary: "بخارشوی زمین برای سرامیک و سنگ؛ نظافت بهداشتی بدون مواد شوینده.",
    highlights: ["گرم‌شدن در ۳۰ ثانیه", "مخزن ۴۰۰ میلی‌لیتری", "۲ پد قابل شست‌وشو"],
    specs: [
      { label: "توان مصرفی", value: "۱۳۰۰ وات" }, { label: "ظرفیت مخزن", value: "۴۰۰ میلی‌لیتر" },
      { label: "سطوح مناسب", value: "سرامیک، سنگ، پارکت مهروموم‌شده" }, { label: "گارانتی", value: "۱۲ ماه (داده نمونه)" },
    ],
  },
  {
    id: "v-1800q", slug: "v-1800q", model: "V-1800Q", title: "جاروبرقی سطلی کم‌صدا", brand: "WASTON",
    category: "cleaning", tags: [], illustration: "vacuum", tone: "teal",
    price: 10_900_000, rating: 4.4, reviews: 9, stock: 0, facets: { deviceType: "canister", power: 1800 },
    summary: "جاروبرقی سطلی ۱۸۰۰ وات با موتور کم‌صدا؛ مناسب آپارتمان.",
    highlights: ["صدای کمتر از ۶۸ دسی‌بل", "فیلتر HEPA", "سیم ۸ متری"],
    specs: [
      { label: "توان مصرفی", value: "۱۸۰۰ وات" }, { label: "سطح صدا", value: "۶۸ دسی‌بل" },
      { label: "ظرفیت مخزن", value: "۳٫۵ لیتر" }, { label: "گارانتی", value: "۱۸ ماه (داده نمونه)" },
    ],
  },

  // ── پک‌های هدیه آماده (bundle) ─────────────────────────────────────
  {
    id: "pack-housewarming", slug: "pack-housewarming", model: "GIFT-H", title: "پک هدیه خانه‌نو", brand: "WASTON",
    category: "kitchenware", tags: [], illustration: "gift", tone: "coral", bundle: true,
    price: 5_100_000, reviews: 0, stock: null, giftWrap: true, occasions: ["housewarming"],
    summary: "سرویس قاشق و چنگال، گلدان سرامیکی و کارت تبریک (ترکیب نمونه)",
    highlights: ["سرویس قاشق و چنگال ۳۰ پارچه", "گلدان سرامیکی لعاب‌دار", "کارت تبریک با متن دلخواه"],
    specs: [{ label: "نوع", value: "پک هدیه آماده" }, { label: "بسته‌بندی", value: "جعبه و روبان ویژه" }],
  },
  {
    id: "pack-breakfast", slug: "pack-breakfast", model: "GIFT-B", title: "پک هدیه صبحانه", brand: "WASTON",
    category: "kitchen-appliances", tags: [], illustration: "toaster", tone: "teal", bundle: true,
    price: 3_190_000, reviews: 0, stock: null, giftWrap: true, occasions: ["birthday", "anniversary"],
    summary: "توستر دو اسلایس و ماگ سرامیکی دوتایی (ترکیب نمونه)",
    highlights: ["توستر دو اسلایس استیل", "ماگ سرامیکی دوتایی", "کارت تبریک"],
    specs: [{ label: "نوع", value: "پک هدیه آماده" }, { label: "بسته‌بندی", value: "جعبه و روبان ویژه" }],
  },
  {
    id: "pack-tea", slug: "pack-tea", model: "GIFT-T", title: "پک هدیه سفال و چای", brand: "WASTON",
    category: "ceramics", tags: [], illustration: "bowl", tone: "navy", bundle: true,
    price: 2_790_000, reviews: 0, stock: null, giftWrap: true, occasions: ["yalda-nowruz"],
    summary: "کاسه سفالی دست‌ساز، سرویس لیوان و سینی پذیرایی (ترکیب نمونه)",
    highlights: ["کاسه سفالی دست‌ساز", "سرویس لیوان شیشه‌ای", "سینی پذیرایی استیل"],
    specs: [{ label: "نوع", value: "پک هدیه آماده" }, { label: "بسته‌بندی", value: "جعبه و روبان ویژه" }],
  },
];

const byId = new Map(products.map((p) => [p.id, p]));

/** Products shown in grids (gift bundles excluded). */
export const catalog = products.filter((p) => !p.bundle);
export const giftPacks = products.filter((p) => p.bundle);

export function getProduct(id: string): Product | undefined {
  return byId.get(id);
}

export function pickProducts(ids: string[]): Product[] {
  return ids.map((id) => byId.get(id)).filter((p): p is Product => Boolean(p));
}

export const isInStock = (p: Product) => p.stock !== 0;
export const discountPercent = (p: Product) =>
  p.compareAt && p.compareAt > p.price ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100) : 0;
