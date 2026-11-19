import { MessageCircle, Star } from "lucide-react";
import { CtaBanner } from "@/components/home/PromoBanner";
import { UiIcon } from "@/components/icons/UiIcon";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CollectionSection } from "@/data/collections";
import { pickProducts } from "@/data/products";
import { GiftPacks } from "./GiftPacks";
import styles from "./CollectionSections.module.css";

/** Renders the content blocks configured for a collection page. */
export function CollectionSections({ sections }: { sections: CollectionSection[] }) {
  return (
    <>
      {sections.map((s, i) => {
        const key = `${s.type}-${i}`;
        switch (s.type) {
          case "features":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <div className={styles.features}>
                  <h2 className={styles.featuresTitle}>{s.title}</h2>
                  <ul className={styles.featureList}>
                    {s.items.map((f) => (
                      <li key={f.title} className={styles.feature}>
                        <span className={styles.featureIcon}>
                          <UiIcon name={f.icon} size={19} />
                        </span>
                        <span>
                          <strong>{f.title}</strong>
                          <small>{f.text}</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          case "rail":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <SectionHeader title={s.title} subtitle={s.subtitle} />
                <ProductGrid products={pickProducts(s.productIds)} railOnMobile />
              </section>
            );
          case "guide":
          case "gift-steps":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <SectionHeader title={s.title} subtitle={s.subtitle} />
                <NumberedSteps items={s.items} variant={s.type === "guide" ? "large" : "badge"} />
              </section>
            );
          case "gift-packs":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <SectionHeader title={s.title} subtitle={s.subtitle} />
                <GiftPacks />
              </section>
            );
          case "faq":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <div className={styles.faq}>
                  <div className={styles.faqHead}>
                    <h2 className={styles.faqTitle}>{s.title}</h2>
                    <p className={styles.faqSub}>{s.subtitle}</p>
                    <Button href="/info/faq" variant="outline" icon={<MessageCircle size={17} aria-hidden />}>
                      گفتگو با پشتیبانی
                    </Button>
                  </div>
                  <Accordion items={s.items} />
                </div>
              </section>
            );
          case "reviews":
            return (
              <section key={key} className="container section" aria-label={s.title}>
                <SectionHeader title={s.title} subtitle={s.subtitle} />
                <ul className={styles.reviews}>
                  {pickProducts(s.productIds).map((p) => (
                    <li key={p.id} className={styles.review}>
                      <span className={styles.stars} aria-label="امتیاز ثبت نشده">
                        {Array.from({ length: 5 }, (_, n) => (
                          <Star key={n} size={15} aria-hidden />
                        ))}
                      </span>
                      <p>[متن نظر تأییدشده خریدار]</p>
                      <small>[نام خریدار] · خریدار {p.title}</small>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "cta":
            return <CtaBanner key={key} title={s.title} text={s.text} href={s.href} action={s.action} />;
          default:
            return null;
        }
      })}
    </>
  );
}
