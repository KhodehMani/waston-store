import type { Metadata } from "next";
import Link from "next/link";
import { SearchX } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeading } from "@/components/ui/PageHeading";
import { fa } from "@/lib/format";
import { searchProducts } from "@/lib/search";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "جستجو" };

const popular = ["توستر", "غذاساز", "سفالی", "قابلمه", "جاروبرقی", "ماگ"];

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const results = q ? searchProducts(q) : [];

  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { label: "جستجو" }]} />
      <PageHeading
        title={q ? `نتایج جستجو برای «${q}»` : "جستجو در محصولات"}
        subtitle={q ? `${fa(results.length)} محصول پیدا شد` : "نام محصول، مدل یا دسته‌بندی را در کادر جستجو بنویسید."}
      />

      {q && results.length > 0 && <ProductGrid products={results} />}

      {q && results.length === 0 && (
        <EmptyState icon={<SearchX size={28} aria-hidden />} title="نتیجه‌ای پیدا نشد" text="املای کلمه را بررسی کنید یا از جستجوهای پرتکرار زیر استفاده کنید.">
          <Button href="/shop" variant="outline">
            مشاهده همه محصولات
          </Button>
        </EmptyState>
      )}

      <section className={styles.popular} aria-labelledby="popular-title">
        <h2 id="popular-title" className={styles.popularTitle}>
          جستجوهای پرتکرار
        </h2>
        <ul className={styles.chips}>
          {popular.map((term) => (
            <li key={term}>
              <Link href={`/search?q=${encodeURIComponent(term)}`} className={styles.chip}>
                {term}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
