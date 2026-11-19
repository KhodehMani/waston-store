import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./SectionHeader.module.css";

interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  link?: { href: string; label: string };
  id?: string;
}

export function SectionHeader({ title, subtitle, eyebrow, link, id }: Props) {
  return (
    <div className={styles.head}>
      <div>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title} id={id}>
          {title}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {link && (
        <Link href={link.href} className={styles.link}>
          <span>{link.label}</span>
          <ChevronLeft size={16} aria-hidden />
        </Link>
      )}
    </div>
  );
}
