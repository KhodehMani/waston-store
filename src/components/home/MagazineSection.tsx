import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { cx } from "@/lib/format";
import styles from "./MagazineSection.module.css";

export function MagazineSection() {
  return (
    <section className="container section" aria-labelledby="mag-title">
      <SectionHeader
        id="mag-title"
        title="مجله WASTON"
        subtitle="راهنمای خرید، نگهداری و ایده‌های هدیه"
        link={{ href: `/magazine/${articles[0].slug}`, label: "همه مقاله‌ها" }}
      />
      <ul className={cx(styles.grid, "scroll-rail")}>
        {articles.map((a) => (
          <li key={a.slug}>
            <article className={styles.card}>
              <div className={cx(styles.art, `tone-${a.tone}`)}>
                <ProductIllustration name={a.illustration} size={64} strokeWidth={2.4} />
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{a.tag}</span>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <Link href={`/magazine/${a.slug}`} className={styles.more}>
                  <span>خواندن مقاله</span>
                  <ChevronLeft size={16} aria-hidden />
                  <span className="visually-hidden">: {a.title}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
