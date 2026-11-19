import Link from "next/link";
import { Gift } from "lucide-react";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { TrustChips } from "@/components/ui/TrustChips";
import { cx } from "@/lib/format";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={cx("container", styles.hero)} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>A BETTER FEELING OF HOME</p>
        <h1 id="hero-title" className={styles.title}>
          خانه‌ای که هر روز
          <br />
          حس بهتری دارد
        </h1>
        <p className={styles.lead}>
          لوازم برقی آشپزخانه، ظروف و سفال‌های منتخب؛ با بسته‌بندی آماده هدیه، ارسال سریع و ضمانت اصالت کالا.
        </p>
        <div className={styles.ctas}>
          <Button href="/shop" variant="primary" size="lg">
            مشاهده محصولات
          </Button>
          <Button href="/shop/best-sellers" variant="outline" size="lg">
            مشاهده پرفروش‌ها
          </Button>
        </div>
        <TrustChips plain />
      </div>

      <div className={styles.mosaic}>
        <Link href="/shop/kitchen-appliances" className={cx(styles.tile, styles.tall, "tone-teal")}>
          <ProductIllustration name="food-processor" size="34%" strokeWidth={2.2} />
          <span className={styles.label}>لوازم برقی</span>
        </Link>
        <Link href="/shop/ceramics" className={cx(styles.tile, "tone-coral")}>
          <ProductIllustration name="vase" size="40%" strokeWidth={2.2} />
          <span className={styles.label}>سفال و سرامیک</span>
        </Link>
        <Link href="/shop/kitchenware" className={cx(styles.tile, "tone-navy")}>
          <ProductIllustration name="pot" size="40%" strokeWidth={2.2} />
          <span className={styles.label}>ظروف آشپزخانه</span>
        </Link>
        <Link href="/shop/gifts" className={styles.float}>
          <span className={styles.floatIcon} aria-hidden>
            <Gift size={18} />
          </span>
          <span>
            <strong>بسته‌بندی ویژه هدیه</strong>
            <small>با کارت تبریک و ارسال برای گیرنده</small>
          </span>
        </Link>
      </div>
    </section>
  );
}
