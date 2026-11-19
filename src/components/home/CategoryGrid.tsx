import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeCategories } from "@/data/site";
import { cx } from "@/lib/format";
import styles from "./CategoryGrid.module.css";

export function CategoryGrid() {
  return (
    <section className="container section" aria-labelledby="cats-title">
      <SectionHeader id="cats-title" title="دسته‌بندی‌ها" subtitle="از کجا شروع کنیم؟ هر دسته، صفحه و فیلترهای مخصوص خودش را دارد." />
      <ul className={cx(styles.grid, "scroll-rail")}>
        {homeCategories.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className={styles.card}>
              <span className={cx(styles.art, `tone-${c.tone}`)}>
                <ProductIllustration name={c.illustration} size={64} strokeWidth={2.4} />
              </span>
              <span className={styles.foot}>
                <span>
                  <strong>{c.title}</strong>
                  <small>{c.meta}</small>
                </span>
                <ChevronLeft size={18} aria-hidden className={styles.chev} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
