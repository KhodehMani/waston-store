import { UiIcon } from "@/components/icons/UiIcon";
import { serviceHighlights } from "@/data/site";
import { cx } from "@/lib/format";
import styles from "./ServiceStrip.module.css";

export function ServiceStrip() {
  return (
    <section className={cx("container", styles.wrap)} aria-label="خدمات فروشگاه">
      <ul className={cx(styles.grid, "scroll-rail")}>
        {serviceHighlights.map((s) => (
          <li key={s.title} className={styles.item}>
            <span className={styles.icon}>
              <UiIcon name={s.icon} size={18} />
            </span>
            <span>
              <strong>{s.title}</strong>
              <small>{s.text}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
