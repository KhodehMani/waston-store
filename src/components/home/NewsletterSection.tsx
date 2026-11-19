import { NewsletterIsland } from "@/components/vue/NewsletterIsland";
import styles from "./NewsletterSection.module.css";

export function NewsletterSection() {
  return (
    <section className="container section" aria-labelledby="nl-title">
      <div className={styles.box}>
        <div>
          <h2 id="nl-title" className={styles.title}>
            از تازه‌ها و تخفیف‌ها باخبر شوید
          </h2>
          <p className={styles.text}>فقط خبرهای مهم فروشگاه؛ هر زمان خواستید لغو کنید.</p>
        </div>
        <div className={styles.form}>
          <NewsletterIsland />
        </div>
      </div>
    </section>
  );
}
