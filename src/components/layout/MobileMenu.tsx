"use client";

import Link from "next/link";
import { ChevronLeft, Heart, Info } from "lucide-react";
import { useEffect } from "react";
import { Sheet } from "@/components/ui/Sheet";
import { mainNav } from "@/data/site";
import { cx } from "@/lib/format";
import { isActive } from "@/lib/nav";
import styles from "./MobileMenu.module.css";

export function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  // Close the drawer after navigation.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Sheet open={open} onClose={onClose} title="منو" side="right">
      <nav aria-label="منوی موبایل">
        <ul className={styles.list}>
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={cx(styles.link, active && styles.active)} aria-current={active ? "page" : undefined}>
                  {item.label}
                  <ChevronLeft size={16} aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.extra}>
          <Link href="/wishlist" className={styles.extraLink}>
            <Heart size={18} aria-hidden /> علاقه‌مندی‌ها
          </Link>
          <Link href="/info/faq" className={styles.extraLink}>
            <Info size={18} aria-hidden /> سوالات متداول
          </Link>
        </div>
      </nav>
    </Sheet>
  );
}
