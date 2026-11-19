import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { articles, getArticle } from "@/data/articles";
import { cx } from "@/lib/format";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { label: "مجله WASTON" }, { label: article.title }]} />
      <div className={styles.layout}>
        <article className={styles.article}>
          <div className={cx(styles.cover, `tone-${article.tone}`)} aria-hidden>
            <ProductIllustration name={article.illustration} size={110} strokeWidth={2.2} />
          </div>
          <span className={styles.tag}>{article.tag}</span>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.lead}>{article.excerpt}</p>
          {article.body.map((b) => (
            <section key={b.heading} className={styles.block}>
              <h2>{b.heading}</h2>
              <p>{b.text}</p>
            </section>
          ))}
          <p className={styles.note}>محتوای این مقاله نمونه است.</p>
          <Button href={article.relatedCollection.href} variant="secondary">
            {article.relatedCollection.label}
          </Button>
        </article>
        <aside className={styles.aside} aria-label="مقاله‌های دیگر">
          <h2 className={styles.asideTitle}>مقاله‌های دیگر</h2>
          <ul>
            {others.map((a) => (
              <li key={a.slug}>
                <Link href={`/magazine/${a.slug}`} className={styles.other}>
                  <span className={cx(styles.otherArt, `tone-${a.tone}`)}>
                    <ProductIllustration name={a.illustration} size={30} strokeWidth={3} />
                  </span>
                  <span>
                    <small>{a.tag}</small>
                    <strong>{a.title}</strong>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
