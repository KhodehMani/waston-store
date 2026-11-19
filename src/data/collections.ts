import type { IllustrationKey, Product, Tone } from "@/types/product";
import { discountPercent } from "./products";

export type SortKey = "recommended" | "bestselling" | "newest" | "discount" | "price-asc" | "price-desc";

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recommended", label: "پیشنهاد WASTON" },
  { value: "bestselling", label: "پرفروش‌ترین" },
  { value: "newest", label: "جدیدترین" },
  { value: "discount", label: "بیشترین تخفیف" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
];

export interface ChipOption {
  id: string;
  label: string;
  test?: (p: Product) => boolean;
}

export interface FacetOption {
  value: string;
  label: string;
  test: (p: Product) => boolean;
}

export interface FacetConfig {
  key: string;
  label: string;
  options: FacetOption[];
}

export type IconName = "shield" | "list" | "box" | "sliders" | "truck" | "gift" | "headset";

export type CollectionSection =
  | { type: "features"; title: string; items: { icon: IconName; title: string; text: string }[] }
  | { type: "rail"; title: string; subtitle: string; productIds: string[] }
  | { type: "guide"; title: string; subtitle: string; items: { title: string; text: string }[] }
  | { type: "faq"; title: string; subtitle: string; items: { q: string; a: string }[] }
  | { type: "cta"; title: string; text: string; href: string; action: string }
  | { type: "gift-steps"; title: string; subtitle: string; items: { title: string; text: string }[] }
  | { type: "gift-packs"; title: string; subtitle: string }
  | { type: "reviews"; title: string; subtitle: string; productIds: string[] };

export interface CollectionConfig {
  slug: string;
  title: string;
  /** Short label for nav / breadcrumbs. */
  label: string;
  eyebrow: string;
  description: string;
  illustration: IllustrationKey;
  tone: Tone;
  includes: (p: Product) => boolean;
  /** Explicit "recommended" order for this page (falls back to catalogue order). */
  order?: string[];
  defaultSort: SortKey;
  chips?: { allLabel: string; options: ChipOption[] };
  facet?: FacetConfig;
  before?: CollectionSection[];
  after?: CollectionSection[];
}

const priceCategoryChips: ChipOption[] = [
  { id: "appliances", label: "لوازم برقی", test: (p) => p.category === "kitchen-appliances" },
  { id: "kitchenware", label: "ظروف", test: (p) => p.category === "kitchenware" || p.category === "ceramics" },
  { id: "cleaning", label: "نظافت", test: (p) => p.category === "cleaning" },
];

const power = (p: Product) => p.facets?.power ?? 0;

export const collections: CollectionConfig[] = [
  {
    slug: "kitchen-appliances",
    title: "لوازم برقی آشپزخانه",
    label: "لوازم برقی آشپزخانه",
    eyebrow: "KITCHEN APPLIANCES",
    description:
      "توستر، غذاساز، کتری و قهوه‌ساز؛ انتخاب‌شده برای آشپزخانه‌ای سریع‌تر و مرتب‌تر. مشخصات فنی هر دستگاه کنار قیمت آمده تا مقایسه آسان باشد.",
    illustration: "food-processor",
    tone: "teal",
    includes: (p) => p.category === "kitchen-appliances",
    defaultSort: "recommended",
    facet: {
      key: "power",
      label: "توان مصرفی",
      options: [
        { value: "800-1200", label: "۸۰۰ تا ۱۲۰۰ وات", test: (p) => power(p) >= 800 && power(p) <= 1200 },
        { value: "1200+", label: "بیش از ۱۲۰۰ وات", test: (p) => power(p) > 1200 },
        { value: "-800", label: "تا ۸۰۰ وات", test: (p) => power(p) > 0 && power(p) < 800 },
      ],
    },
    after: [
      {
        type: "features",
        title: "چرا لوازم برقی WASTON؟",
        items: [
          { icon: "shield", title: "گارانتی و اصالت", text: "هر دستگاه با برگه ضمانت و کد اصالت کالا ارسال می‌شود." },
          { icon: "list", title: "مشخصات شفاف", text: "توان، ظرفیت و لوازم جانبی هر محصول دقیق و یکسان نوشته شده است." },
          { icon: "box", title: "بسته‌بندی ایمن", text: "دستگاه‌ها با ضربه‌گیر و کارتن مقاوم بسته‌بندی می‌شوند." },
        ],
      },
      {
        type: "rail",
        title: "پیشنهاد WASTON برای شروع",
        subtitle: "محبوب‌ترین دستگاه‌های این دسته",
        productIds: ["fp-1200", "t-210", "cm-06", "k-17"],
      },
      {
        type: "faq",
        title: "سوالات متداول",
        subtitle: "درباره خرید لوازم برقی آشپزخانه",
        items: [
          { q: "لوازم برقی گارانتی دارند؟", a: "بله. همه دستگاه‌ها با برگه ضمانت و کد اصالت ارسال می‌شوند؛ مدت گارانتی هر مدل در جدول مشخصات همان محصول آمده است." },
          { q: "چه غذاسازی برای خانواده من مناسب است؟", a: "برای خانواده‌های ۱ تا ۲ نفره غذاساز کامپکت (کاسه ۱٫۵ لیتری) کافی است؛ برای ۴ نفر و بیشتر، مدل‌های ۱۲ کاره با کاسه ۳ لیتری را پیشنهاد می‌کنیم." },
          { q: "اگر دستگاه آسیب‌دیده برسد چه می‌شود؟", a: "تا ۷ روز پس از تحویل، با ارسال عکس بسته‌بندی به پشتیبانی، کالا بدون هزینه تعویض یا مرجوع می‌شود." },
          { q: "سفارش چه زمانی ارسال می‌شود؟", a: "سفارش‌های ثبت‌شده تا ساعت [—] روز کاری بعد ارسال می‌شوند؛ زمان دقیق تحویل در مرحله ثبت سفارش نمایش داده می‌شود." },
        ],
      },
    ],
  },
  {
    slug: "kitchenware",
    title: "ظروف آشپزخانه",
    label: "ظروف آشپزخانه",
    eyebrow: "KITCHENWARE & CERAMICS",
    description:
      "از قابلمه و تابه روزمره تا سفال دست‌ساز و سرویس پذیرایی؛ ظرف‌هایی که هم خوب کار می‌کنند و هم روی میز زیبا هستند.",
    illustration: "pot",
    tone: "navy",
    includes: (p) => p.category === "kitchenware" || p.category === "ceramics",
    order: ["ck-8", "cr-m2", "pn-28", "ct-30", "gl-6", "cr-v2", "cr-p6", "tr-40", "pt-b1"],
    defaultSort: "recommended",
    chips: {
      allLabel: "همه ظروف",
      options: [
        { id: "cooking", label: "پخت‌وپز", test: (p) => p.tags.includes("cooking") },
        { id: "serving", label: "پذیرایی", test: (p) => p.tags.includes("serving") },
        { id: "ceramic", label: "سفال و سرامیک", test: (p) => p.tags.includes("ceramic") },
        { id: "cups", label: "لیوان و ماگ", test: (p) => p.tags.includes("cups") },
      ],
    },
    facet: {
      key: "material",
      label: "جنس",
      options: [
        { value: "steel", label: "استیل", test: (p) => p.facets?.material === "steel" },
        { value: "granite", label: "گرانیت", test: (p) => p.facets?.material === "granite" },
        { value: "glass", label: "شیشه", test: (p) => p.facets?.material === "glass" },
        { value: "pottery", label: "سفال", test: (p) => p.facets?.material === "pottery" },
        { value: "ceramic", label: "سرامیک", test: (p) => p.facets?.material === "ceramic" },
      ],
    },
    after: [
      {
        type: "rail",
        title: "منتخب ظروف پذیرایی",
        subtitle: "برای میزی که دوست دارید دورش جمع شوید",
        productIds: ["cr-v2", "ct-30", "cr-p6", "tr-40"],
      },
      {
        type: "guide",
        title: "راهنمای انتخاب ظروف",
        subtitle: "چند نکته کوتاه قبل از خرید",
        items: [
          { title: "جنس را با نوع پخت هماهنگ کنید", text: "استیل برای حرارت بالا و شست‌وشوی مکرر مناسب است و گرانیت برای پخت کم‌روغن." },
          { title: "ابعاد و تعداد قطعات را ببینید", text: "ابعاد، ظرفیت و تعداد قطعات هر سرویس در مشخصات محصول آمده است." },
          { title: "روش نگهداری را بخوانید", text: "برای سفال و سرامیک دست‌ساز، راهنمای شست‌وشو و استفاده در فر را پیش از خرید بخوانید." },
        ],
      },
      {
        type: "faq",
        title: "سوالات متداول",
        subtitle: "درباره ظروف، سفال و سرامیک",
        items: [
          { q: "ظروف سفالی برای غذا مناسب‌اند؟", a: "بله؛ سفال‌های این فروشگاه لعاب خوراکی دارند. پیش از اولین استفاده، ظرف را با آب ولرم بشویید و از تغییر ناگهانی دما پرهیز کنید." },
          { q: "اگر ظرف شکسته برسد چه می‌شود؟", a: "ظروف با ضربه‌گیر بسته‌بندی می‌شوند. اگر ظرفی آسیب‌دیده رسید، تا ۷ روز با ارسال عکس، بدون هزینه تعویض می‌شود." },
          { q: "امکان خرید تکی از سرویس‌ها هست؟", a: "در حال حاضر سرویس‌ها به‌صورت کامل عرضه می‌شوند؛ برای قطعات تکی با پشتیبانی هماهنگ کنید." },
        ],
      },
    ],
  },
  {
    slug: "ceramics",
    title: "سفال و سرامیک",
    label: "سفال و سرامیک",
    eyebrow: "POTTERY & CERAMICS",
    description: "کاسه و گلدان دست‌ساز با لعاب خوراکی و براق؛ هر قطعه کمی با دیگری متفاوت است.",
    illustration: "vase",
    tone: "coral",
    includes: (p) => p.category === "ceramics",
    defaultSort: "recommended",
    after: [
      {
        type: "guide",
        title: "نگهداری از سفال و سرامیک",
        subtitle: "چند نکته کوتاه قبل از خرید",
        items: [
          { title: "اولین استفاده", text: "پیش از اولین استفاده، ظرف سفالی را با آب ولرم بشویید و کاملاً خشک کنید." },
          { title: "تغییر دما", text: "ظرف داغ را مستقیم روی سطح سرد یا زیر آب سرد قرار ندهید." },
          { title: "شست‌وشو", text: "برای حفظ لعاب دست‌ساز، شست‌وشو با دست و اسفنج نرم را پیشنهاد می‌کنیم." },
        ],
      },
      { type: "cta", title: "همه ظروف آشپزخانه", text: "قابلمه، تابه، سرویس پذیرایی و لیوان و ماگ.", href: "/shop/kitchenware", action: "مشاهده ظروف" },
    ],
  },
  {
    slug: "cleaning",
    title: "لوازم نظافت خانه",
    label: "لوازم نظافت خانه",
    eyebrow: "HOME CLEANING",
    description: "جاروبرقی سطلی و عصایی، جاروشارژی و بخارشو؛ برای خانه‌ای تمیز با زحمت کمتر.",
    illustration: "vacuum",
    tone: "teal",
    includes: (p) => p.category === "cleaning",
    defaultSort: "recommended",
    facet: {
      key: "deviceType",
      label: "نوع دستگاه",
      options: [
        { value: "canister", label: "سطلی", test: (p) => p.facets?.deviceType === "canister" },
        { value: "stick", label: "عصایی شارژی", test: (p) => p.facets?.deviceType === "stick" },
        { value: "handheld", label: "دستی", test: (p) => p.facets?.deviceType === "handheld" },
        { value: "steam", label: "بخارشو", test: (p) => p.facets?.deviceType === "steam" },
      ],
    },
    after: [
      {
        type: "features",
        title: "به چه چیزهایی توجه کنیم؟",
        items: [
          { icon: "sliders", title: "توان مکش و فیلتر", text: "توان، نوع فیلتر و ظرفیت مخزن هر مدل در مشخصات آمده است." },
          { icon: "list", title: "لوازم جانبی", text: "برس‌ها و سری‌های همراه هر دستگاه دقیق فهرست شده‌اند." },
          { icon: "shield", title: "گارانتی و خدمات", text: "شرایط گارانتی و خدمات پس از فروش کنار هر محصول نوشته می‌شود." },
        ],
      },
      {
        type: "guide",
        title: "راهنمای خرید لوازم نظافت",
        subtitle: "چند نکته کوتاه قبل از خرید",
        items: [
          { title: "خانه بزرگ یا کوچک؟", text: "برای فضای بزرگ و فرش، جاروبرقی سطلی؛ برای نظافت سریع روزانه، مدل عصایی شارژی." },
          { title: "حیوان خانگی دارید؟", text: "به نوع فیلتر و برس مخصوص مو در مشخصات دستگاه توجه کنید." },
          { title: "سطوح سخت", text: "برای سرامیک و سنگ، بخارشو بدون مواد شوینده هم نتیجه خوبی می‌دهد." },
        ],
      },
      {
        type: "faq",
        title: "سوالات متداول",
        subtitle: "درباره خرید جاروبرقی و بخارشو",
        items: [
          { q: "جاروبرقی عصایی جای جاروبرقی سطلی را می‌گیرد؟", a: "برای آپارتمان‌های کوچک و نظافت روزانه بله؛ برای فرش‌های ضخیم و فضاهای بزرگ، توان مکش مدل سطلی بیشتر است." },
          { q: "کیسه و فیلتر یدکی دارید؟", a: "فیلتر و قطعات یدکی مدل‌های WASTON از طریق پشتیبانی قابل سفارش است." },
          { q: "شرایط مرجوعی چیست؟", a: "تا ۷ روز پس از تحویل، در صورت سالم بودن کالا و بسته‌بندی، امکان مرجوعی طبق شرایط مرجوعی فروشگاه وجود دارد." },
        ],
      },
    ],
  },
  {
    slug: "gifts",
    title: "هدیه‌ای برای خانه",
    label: "هدیه",
    eyebrow: "GIFTS",
    description: "محصولات منتخب WASTON با بسته‌بندی ویژه هدیه، کارت تبریک و ارسال مستقیم برای گیرنده.",
    illustration: "gift",
    tone: "coral",
    includes: (p) => Boolean(p.giftWrap),
    order: ["t-210", "ck-8", "fp-1200", "k-17", "cr-m2", "cm-06", "ct-30", "sv-30", "gl-6", "cr-v2", "cr-p6", "tr-40", "fp-600", "pt-b1"],
    defaultSort: "recommended",
    chips: {
      allLabel: "همه مناسبت‌ها",
      options: [
        { id: "housewarming", label: "خانه‌نو", test: (p) => Boolean(p.occasions?.includes("housewarming")) },
        { id: "birthday", label: "تولد", test: (p) => Boolean(p.occasions?.includes("birthday")) },
        { id: "anniversary", label: "سالگرد", test: (p) => Boolean(p.occasions?.includes("anniversary")) },
        { id: "yalda-nowruz", label: "یلدا و نوروز", test: (p) => Boolean(p.occasions?.includes("yalda-nowruz")) },
      ],
    },
    before: [
      {
        type: "gift-steps",
        title: "سرویس بسته‌بندی و ارسال هدیه",
        subtitle: "در صفحه هر محصول گزینه «این محصول را هدیه می‌دهم» را فعال کنید.",
        items: [
          { title: "محصول را انتخاب کنید", text: "محصولات این صفحه همه قابلیت بسته‌بندی هدیه دارند." },
          { title: "«هدیه می‌دهم» را بزنید", text: "در سبد خرید یا صفحه محصول، گزینه هدیه را فعال کنید." },
          { title: "پیام تبریک بنویسید", text: "متن شما روی کارت تبریک WASTON چاپ می‌شود." },
          { title: "آدرس گیرنده را وارد کنید", text: "بسته مستقیم برای گیرنده ارسال می‌شود؛ بدون درج قیمت." },
        ],
      },
      { type: "gift-packs", title: "پک‌های هدیه آماده", subtitle: "ترکیب‌های پیشنهادی WASTON، بسته‌بندی‌شده و آماده ارسال." },
    ],
    after: [
      {
        type: "cta",
        title: "هنوز مطمئن نیستید چه هدیه‌ای بدهید؟",
        text: "پرفروش‌ترین محصولات WASTON انتخاب مطمئنی برای شروع است.",
        href: "/shop/best-sellers",
        action: "مشاهده پرفروش‌ها",
      },
    ],
  },
  {
    slug: "best-sellers",
    title: "پرفروش‌ترین‌ها",
    label: "پرفروش‌ها",
    eyebrow: "BEST SELLERS",
    description:
      "محصولاتی که بیشترین سفارش را داشته‌اند. این فهرست پس از راه‌اندازی از داده واقعی فروش ساخته می‌شود.",
    illustration: "food-processor",
    tone: "navy",
    includes: (p) => p.salesRank !== undefined,
    defaultSort: "bestselling",
    after: [
      {
        type: "reviews",
        title: "نظر خریداران",
        subtitle: "پس از راه‌اندازی، فقط نظرهای تأییدشده خریداران واقعی این‌جا نمایش داده می‌شود.",
        productIds: ["t-210", "ck-8", "fp-1200"],
      },
    ],
  },
  {
    slug: "new",
    title: "محصولات جدید",
    label: "جدیدترین‌ها",
    eyebrow: "NEW ARRIVALS",
    description: "آخرین محصولاتی که به فروشگاه WASTON اضافه شده‌اند.",
    illustration: "vase",
    tone: "teal",
    includes: (p) => p.newRank !== undefined,
    defaultSort: "newest",
    chips: { allLabel: "همه", options: priceCategoryChips },
    after: [
      { type: "cta", title: "همه دسته‌بندی‌ها", text: "لوازم برقی، ظروف، سفال، لوازم نظافت و هدیه.", href: "/shop", action: "بازگشت به فروشگاه" },
    ],
  },
  {
    slug: "offers",
    title: "پیشنهادهای ویژه",
    label: "پیشنهادهای ویژه",
    eyebrow: "SPECIAL OFFERS",
    description: "تخفیف‌های فعلی فروشگاه. قیمت قبل و بعد از تخفیف کنار هم آمده تا تصمیم شما شفاف باشد.",
    illustration: "gift",
    tone: "coral",
    includes: (p) => discountPercent(p) > 0,
    defaultSort: "discount",
    chips: { allLabel: "همه", options: priceCategoryChips },
    after: [
      { type: "cta", title: "تازه‌های WASTON را دیده‌اید؟", text: "محصولاتی که به‌تازگی به فروشگاه اضافه شده‌اند.", href: "/shop/new", action: "مشاهده محصولات جدید" },
    ],
  },
];

/** The "all products" listing at /shop. */
export const allProductsCollection: CollectionConfig = {
  slug: "",
  title: "همه محصولات",
  label: "فروشگاه",
  eyebrow: "ALL PRODUCTS",
  description: "لوازم برقی آشپزخانه، ظروف و سفال‌های منتخب و لوازم نظافت خانه؛ همه در یک‌جا.",
  illustration: "pot",
  tone: "navy",
  includes: () => true,
  defaultSort: "recommended",
  chips: { allLabel: "همه دسته‌ها", options: priceCategoryChips },
  after: [
    {
      type: "cta",
      title: "هدیه‌ای برای خانه",
      text: "بسته‌بندی ویژه هدیه، کارت تبریک و ارسال مستقیم برای گیرنده.",
      href: "/shop/gifts",
      action: "انتخاب هدیه",
    },
  ],
};

export function getCollection(slug: string): CollectionConfig | undefined {
  if (!slug) return allProductsCollection;
  return collections.find((c) => c.slug === slug);
}

/** Collection used for a product's breadcrumb. */
export function collectionForCategory(category: Product["category"]): CollectionConfig {
  return collections.find((c) => c.slug === category) ?? allProductsCollection;
}
