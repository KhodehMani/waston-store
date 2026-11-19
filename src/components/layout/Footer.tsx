import Link from "next/link";
import { contactLines, footerColumns, site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.word}>{site.name}</p>
            <p className={styles.desc}>{site.description}</p>
            <div className={styles.badges}>
              <span className={styles.trust}>[نماد اعتماد الکترونیکی]</span>
              <span className={styles.trust}>[نشان ساماندهی]</span>
            </div>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className={styles.heading}>{col.title}</h2>
              <ul className={styles.links}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className={styles.heading}>تماس با WASTON</h2>
            <ul className={styles.links}>
              {contactLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© WASTON — همه حقوق محفوظ است.</p>
          <p>نسخه نمایشی رابط کاربری · داده‌ها آزمایشی‌اند</p>
        </div>
      </div>
    </footer>
  );
}
