import { CategoryGrid } from "@/components/home/CategoryGrid";
import { Hero } from "@/components/home/Hero";
import { HowToBuy } from "@/components/home/HowToBuy";
import { MagazineSection } from "@/components/home/MagazineSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { GiftBanner } from "@/components/home/PromoBanner";
import { ServiceStrip } from "@/components/home/ServiceStrip";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { catalog } from "@/data/products";
import { sortProducts } from "@/lib/listing";

const bestSellers = sortProducts(catalog.filter((p) => p.salesRank !== undefined), "bestselling").slice(0, 4);
const newArrivals = sortProducts(catalog.filter((p) => p.newRank !== undefined), "newest").slice(0, 4);
const offers = sortProducts(catalog.filter((p) => p.compareAt), "discount").slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <CategoryGrid />

      <section className="container section" aria-labelledby="best-title">
        <SectionHeader
          id="best-title"
          title="پرفروش‌ترین‌ها"
          subtitle="محبوب‌ترین انتخاب‌های خریداران"
          link={{ href: "/shop/best-sellers", label: "مشاهده همه" }}
        />
        <ProductGrid products={bestSellers} railOnMobile />
      </section>

      <GiftBanner />

      <section className="container section" aria-labelledby="new-title">
        <SectionHeader
          id="new-title"
          title="تازه‌های WASTON"
          subtitle="آخرین محصولات اضافه‌شده"
          link={{ href: "/shop/new", label: "همه محصولات جدید" }}
        />
        <ProductGrid products={newArrivals} railOnMobile />
      </section>

      <HowToBuy />

      <section className="container section" aria-labelledby="offers-title">
        <SectionHeader
          id="offers-title"
          title="پیشنهادهای ویژه"
          subtitle="تخفیف‌های فعلی فروشگاه"
          link={{ href: "/shop/offers", label: "همه پیشنهادها" }}
        />
        <ProductGrid products={offers} railOnMobile />
      </section>

      <MagazineSection />
      <NewsletterSection />
    </>
  );
}
