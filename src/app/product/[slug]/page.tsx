import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SpecsTable } from "@/components/product/SpecsTable";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { collectionForCategory } from "@/data/collections";
import { catalog, getProduct, products } from "@/data/products";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.title, description: product.summary } : {};
}

export default async function ProductPage({ params }: { params: Params }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const collection = product.bundle ? undefined : collectionForCategory(product.category);
  const related = catalog
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(catalog.filter((p) => p.id !== product.id && p.category !== product.category && p.salesRank))
    .slice(0, 4);

  return (
    <div className="container">
      <Breadcrumb
        items={[
          { href: "/", label: "خانه" },
          { href: "/shop", label: "فروشگاه" },
          collection
            ? { href: `/shop/${collection.slug}`, label: collection.label }
            : { href: "/shop/gifts", label: "هدیه" },
          { label: product.title },
        ]}
      />
      <ProductDetail product={product} />

      <div className={`section ${styles.details}`}>
        <section aria-labelledby="specs-title" className={styles.panel}>
          <h2 id="specs-title" className={styles.panelTitle}>
            مشخصات فنی
          </h2>
          <SpecsTable specs={product.specs} />
          <p className={styles.note}>مشخصات این صفحه داده نمونه‌اند.</p>
        </section>
        <section aria-labelledby="reviews-title" className={styles.panel}>
          <h2 id="reviews-title" className={styles.panelTitle}>
            نظر خریداران
          </h2>
          <p className={styles.reviewsEmpty}>
            پس از راه‌اندازی، فقط نظرهای تأییدشده خریداران واقعی این‌جا نمایش داده می‌شود.
          </p>
        </section>
      </div>

      <section className="section" aria-labelledby="related-title">
        <SectionHeader id="related-title" title="محصولات مرتبط" subtitle="انتخاب‌های مشابه در WASTON" />
        <ProductGrid products={related} railOnMobile />
      </section>
    </div>
  );
}
