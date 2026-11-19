import Link from "next/link";
import { House } from "lucide-react";
import { site } from "@/data/site";
import styles from "./Logo.module.css";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={styles.logo} aria-label={`${site.name} — صفحه اصلی`}>
      <span className={styles.mark} aria-hidden>
        <House size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.text}>
        <span className={styles.word}>{site.name}</span>
        {!compact && <span className={styles.tag}>{site.tagline}</span>}
      </span>
    </Link>
  );
}
