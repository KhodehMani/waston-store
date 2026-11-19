import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { TrustChips } from "@/components/ui/TrustChips";
import type { CollectionConfig } from "@/data/collections";
import { cx } from "@/lib/format";
import styles from "./ListingHero.module.css";

export function ListingHero({ config }: { config: CollectionConfig }) {
  return (
    <section className={styles.hero} aria-labelledby="listing-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{config.eyebrow}</p>
        <h1 id="listing-title" className={styles.title}>
          {config.title}
        </h1>
        <p className={styles.text}>{config.description}</p>
        <TrustChips />
      </div>
      <div className={cx(styles.circle, `tone-${config.tone}`)} aria-hidden>
        <ProductIllustration name={config.illustration} size="42%" strokeWidth={2.4} />
      </div>
    </section>
  );
}
