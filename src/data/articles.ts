import type { IllustrationKey, Tone } from "@/types/product";

export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  illustration: IllustrationKey;
  tone: Tone;
  body: { heading: string; text: string }[];
  relatedCollection: { href: string; label: string };
}

/** Magazine articles (sample editorial content). */
export const articles: Article[] = [
  {
    slug: "choose-food-processor",
    tag: "راهنمای خرید",
    title: "غذاساز مناسب آشپزخانه شما کدام است؟",
    excerpt: "توان موتور، ظرفیت کاسه و لوازم جانبی را چطور مقایسه کنیم.",
    illustration: "food-processor",
    tone: "teal",
    body: [
      { heading: "اول ظرفیت را مشخص کنید", text: "برای یک یا دو نفر، کاسه ۱٫۵ لیتری کافی است. اگر برای خانواده چهارنفره یا مهمانی آشپزی می‌کنید، کاسه ۳ لیتری زمان کار را نصف می‌کند." },
      { heading: "توان موتور؛ عدد بزرگ‌تر همیشه بهتر نیست", text: "برای خردکردن سبزی و رنده‌کردن، ۶۰۰ تا ۸۰۰ وات کافی است. ورز دادن خمیر و خردکردن یخ به توان بیشتر نیاز دارد." },
      { heading: "لوازم جانبی را بشمارید", text: "تعداد کاربردهای هر مدل در مشخصات آمده است؛ فقط لوازمی را بخرید که واقعاً استفاده می‌کنید تا کابینت شلوغ نشود." },
    ],
    relatedCollection: { href: "/shop/kitchen-appliances", label: "مشاهده لوازم برقی آشپزخانه" },
  },
  {
    slug: "pottery-care",
    tag: "نگهداری",
    title: "چطور از ظروف سفالی مراقبت کنیم",
    excerpt: "نکته‌هایی برای شست‌وشو و ماندگاری لعاب ظروف دست‌ساز.",
    illustration: "bowl",
    tone: "coral",
    body: [
      { heading: "پیش از اولین استفاده", text: "ظرف را با آب ولرم بشویید و بگذارید کاملاً خشک شود. از مواد شوینده قوی و سیم ظرفشویی استفاده نکنید." },
      { heading: "شوک حرارتی ممنوع", text: "ظرف داغ را مستقیم زیر آب سرد یا روی سنگ سرد نگذارید؛ تغییر ناگهانی دما مهم‌ترین دلیل ترک‌خوردن سفال است." },
      { heading: "نگهداری", text: "ظروف را روی هم فشار ندهید و بین آن‌ها دستمال نرم بگذارید تا لعاب خط نیفتد." },
    ],
    relatedCollection: { href: "/shop/ceramics", label: "مشاهده سفال و سرامیک" },
  },
  {
    slug: "housewarming-gifts",
    tag: "ایده هدیه",
    title: "برای خانه‌نو چه هدیه‌ای بخریم؟",
    excerpt: "هدیه‌هایی که هر روز استفاده می‌شوند و به یاد می‌مانند.",
    illustration: "gift",
    tone: "navy",
    body: [
      { heading: "چیزی که هر روز دیده شود", text: "ماگ سرامیکی، سینی پذیرایی یا سرویس لیوان، هدیه‌هایی‌اند که در روزهای اول زندگی در خانه جدید بیشترین استفاده را دارند." },
      { heading: "اگر بودجه بیشتری دارید", text: "سرویس قابلمه یا یک دستگاه کاربردی مثل توستر یا کتری برقی، هدیه‌ای ماندگار برای آشپزخانه تازه است." },
      { heading: "بسته‌بندی را به ما بسپارید", text: "گزینه «هدیه می‌دهم» را فعال کنید؛ جعبه و روبان، کارت تبریک با متن شما و ارسال بدون درج قیمت." },
    ],
    relatedCollection: { href: "/shop/gifts", label: "مشاهده هدیه‌ها" },
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
