import { cx, fa } from "@/lib/format";
import styles from "./NumberedSteps.module.css";

interface Props {
  items: { title: string; text: string }[];
  /** "badge" = small numbered chip (how-to-buy), "large" = big teal numeral (buying guides). */
  variant?: "badge" | "large";
}

export function NumberedSteps({ items, variant = "badge" }: Props) {
  return (
    <ol className={cx(styles.grid, items.length === 3 ? styles.three : styles.four)}>
      {items.map((item, i) => (
        <li key={item.title} className={styles.card}>
          <span className={variant === "badge" ? styles.badge : styles.large} aria-hidden>
            {fa(i + 1)}
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
