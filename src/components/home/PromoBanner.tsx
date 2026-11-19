import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/format";
import styles from "./PromoBanner.module.css";

/** Navy gift banner on the home page (inverts to cream in dark mode). */
export function GiftBanner() {
  return (
    <section className="container section" aria-labelledby="gift-banner-title">
      <div className={styles.banner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>هدیه‌ای که با حوصله آماده شده</p>
          <h2 id="gift-banner-title" className={styles.title}>
            برای خانه‌نو، تولد یا سالگرد؛
            <br />
            ما بسته‌بندی‌اش می‌کنیم.
          </h2>
          <ul className={styles.list}>
            {["جعبه و روبان ویژه هدیه", "کارت تبریک با متن دلخواه شما", "ارسال مستقیم برای گیرنده، بدون درج قیمت"].map((t) => (
              <li key={t}>
                <Check size={16} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <Button href="/shop/gifts" variant="on-dark">
            انتخاب هدیه
          </Button>
        </div>
        <div className={styles.art} aria-hidden>
          <span className={styles.circle}>
            <Gift size={72} strokeWidth={1.4} />
          </span>
        </div>
      </div>
    </section>
  );
}

/** Slim navy call-to-action used at the bottom of collection pages. */
export function CtaBanner({ title, text, href, action }: { title: string; text: string; href: string; action: string }) {
  return (
    <section className="container section" aria-label={title}>
      <div className={cx(styles.banner, styles.slim)}>
        <div>
          <h2 className={styles.slimTitle}>{title}</h2>
          <p className={styles.slimText}>{text}</p>
        </div>
        <Button href={href} variant="on-dark">
          {action}
        </Button>
      </div>
    </section>
  );
}
