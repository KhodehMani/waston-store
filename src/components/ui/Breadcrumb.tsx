import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export interface Crumb {
  href?: string;
  label: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسیر صفحه" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {item.href && !last ? (
                <Link href={item.href} className={i === 0 ? styles.home : styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={styles.current}>
                  {item.label}
                </span>
              )}
              {!last && (
                <span className={styles.sep} aria-hidden>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
