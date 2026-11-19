import type { IllustrationKey, Tone } from "@/types/product";

export const site = {
  name: "WASTON",
  tagline: "حسی بهتر از خانه",
  taglineEn: "A Better Feeling of Home",
  mockNotice: "نسخه نمایشی (Mock) — نام محصولات، قیمت‌ها، تخفیف‌ها و امتیازها داده آزمایشی‌اند و اطلاعات واقعی فروشگاه نیستند.",
  description: "فروشگاه تخصصی محصولات کاربردی و زیبای خانه و آشپزخانه. A Better Feeling of Home.",
};

export const mainNav = [
  { href: "/", label: "خانه" },
  { href: "/shop/kitchen-appliances", label: "لوازم برقی آشپزخانه" },
  { href: "/shop/kitchenware", label: "ظروف آشپزخانه" },
  { href: "/shop/cleaning", label: "لوازم نظافت خانه" },
  { href: "/shop/gifts", label: "هدیه" },
  { href: "/shop/best-sellers", label: "پرفروش‌ها" },
  { href: "/shop/new", label: "جدیدترین‌ها" },
  { href: "/shop/offers", label: "پیشنهادهای ویژه" },
];

export interface CategoryCard {
  href: string;
  title: string;
  meta: string;
  illustration: IllustrationKey;
  tone: Tone;
}

export const homeCategories: CategoryCard[] = [
  { href: "/shop/kitchen-appliances", title: "لوازم برقی آشپزخانه", meta: "۷ محصول", illustration: "food-processor", tone: "teal" },
  { href: "/shop/kitchenware", title: "ظروف آشپزخانه", meta: "۷ محصول", illustration: "pot", tone: "navy" },
  { href: "/shop/ceramics", title: "سفال و سرامیک", meta: "۲ محصول", illustration: "vase", tone: "coral" },
  { href: "/shop/cleaning", title: "لوازم نظافت خانه", meta: "۵ محصول", illustration: "vacuum", tone: "teal" },
  { href: "/shop/gifts", title: "هدیه", meta: "پک‌ها و بسته‌بندی ویژه", illustration: "gift", tone: "coral" },
];

export const serviceHighlights = [
  { icon: "truck", title: "ارسال روز بعد*", text: "برای سفارش تا ساعت [—]" },
  { icon: "gift", title: "بسته‌بندی هدیه", text: "آماده تقدیم، با کارت تبریک" },
  { icon: "shield", title: "ضمانت اصالت", text: "کیفیت و اصالت تضمین‌شده" },
  { icon: "undo", title: "ضمانت بازگشت", text: "طبق شرایط مرجوعی" },
  { icon: "headset", title: "پشتیبانی ۲۴/۷", text: "هر روز هفته" },
  { icon: "pin", title: "ارسال سراسری", text: "با پست پیشتاز" },
] as const;

export const howToBuy = [
  { title: "انتخاب آسان", text: "دسته‌بندی روشن، فیلتر دقیق و مشخصات شفاف برای هر محصول." },
  { title: "بسته‌بندی با دقت", text: "هر سفارش با ضربه‌گیر بسته می‌شود؛ هدیه‌ها با جعبه و کارت ویژه." },
  { title: "ارسال سریع", text: "ارسال روز کاری بعد برای سفارش‌های ثبت‌شده تا ساعت [—]، به سراسر کشور." },
  { title: "پشتیبانی همیشگی", text: "پاسخ‌گویی هر روز هفته و پیگیری مرجوعی طبق شرایط." },
];

export const footerColumns = [
  {
    title: "فروشگاه",
    links: mainNav.slice(1).map((l) => ({ href: l.href, label: l.label })),
  },
  {
    title: "خدمات مشتریان",
    links: [
      { href: "/info/order-tracking", label: "پیگیری سفارش" },
      { href: "/info/shipping", label: "شرایط ارسال" },
      { href: "/info/returns", label: "شرایط مرجوعی" },
      { href: "/info/warranty", label: "گارانتی" },
      { href: "/info/faq", label: "سوالات متداول" },
      { href: "/info/terms", label: "قوانین و مقررات" },
      { href: "/info/privacy", label: "حریم خصوصی" },
    ],
  },
];

export const contactLines = [
  "تلفن پشتیبانی: [شماره تماس]",
  "ایمیل: [ایمیل پشتیبانی]",
  "نشانی: [آدرس فروشگاه یا انبار]",
  "ساعات پاسخ‌گویی: [طبق ظرفیت تیم پشتیبانی]",
];
