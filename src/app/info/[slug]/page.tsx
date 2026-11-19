import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageHeading } from "@/components/ui/PageHeading";
import { getInfoPage, infoPages } from "@/data/info-pages";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return infoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = getInfoPage((await params).slug);
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function InfoPage({ params }: { params: Params }) {
  const page = getInfoPage((await params).slug);
  if (!page) notFound();
  return (
    <div className="container">
      <Breadcrumb items={[{ href: "/", label: "خانه" }, { label: "خدمات مشتریان" }, { label: page.title }]} />
      <PageHeading title={page.title} subtitle={page.intro} />
      <div className={styles.list}>
        {page.sections.map((s) => (
          <section key={s.heading} className={styles.card}>
            <h2>{s.heading}</h2>
            <p>{s.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
