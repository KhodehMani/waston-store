"use client";

import Link from "next/link";
import { Heart, House, LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/hooks/use-store";
import { cx, fa } from "@/lib/format";
import styles from "./MobileTabBar.module.css";

const tabs = [
  { href: "/", label: "خانه", icon: House },
  { href: "/shop", label: "دسته‌ها", icon: LayoutGrid },
  { href: "/search", label: "جستجو", icon: Search },
  { href: "/wishlist", label: "علاقه‌مندی", icon: Heart },
  { href: "/cart", label: "سبد", icon: ShoppingBag },
];

/** Bottom navigation for phones (from the mobile frame of the mockup). */
export function MobileTabBar() {
  const pathname = usePathname();
  const { totals, ready } = useCart();
  return (
    <nav className={styles.bar} aria-label="ناوبری پایین">
      {tabs.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={cx(styles.tab, active && styles.active)} aria-current={active ? "page" : undefined}>
            <span className={styles.iconWrap}>
              <Icon size={22} strokeWidth={1.8} aria-hidden />
              {href === "/cart" && ready && totals.itemsCount > 0 && <span className={styles.badge}>{fa(totals.itemsCount)}</span>}
            </span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
