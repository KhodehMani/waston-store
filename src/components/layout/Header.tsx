"use client";

import Link from "next/link";
import { Heart, Menu, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { mainNav } from "@/data/site";
import { useCart, useWishlist } from "@/lib/hooks/use-store";
import { cx, fa } from "@/lib/format";
import { isActive } from "@/lib/nav";
import { AccountButton } from "./AccountButton";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

function SearchFallback() {
  return <div className={styles.searchFallback} aria-hidden />;
}

export function Header() {
  const pathname = usePathname();
  const { totals, ready } = useCart();
  const wishlist = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const count = ready ? totals.itemsCount : 0;

  return (
    <header className={styles.header}>
      <div className={cx("container", styles.top)}>
        <button type="button" className={cx(styles.iconBtn, styles.menuBtn)} onClick={() => setMenuOpen(true)} aria-label="منوی اصلی">
          <Menu size={20} aria-hidden />
        </button>

        <Logo />

        <div className={styles.searchDesktop}>
          <Suspense fallback={<SearchFallback />}>
            <SearchBox />
          </Suspense>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <span className={styles.desktopOnly}>
            <AccountButton />
          </span>
          <Link href="/wishlist" className={cx(styles.iconBtn, styles.desktopOnly)} aria-label="علاقه‌مندی‌ها">
            <Heart size={19} aria-hidden />
            {wishlist.ready && wishlist.ids.length > 0 && <span className={styles.dot}>{fa(wishlist.ids.length)}</span>}
          </Link>
          <Link href="/cart" className={styles.cartBtn} aria-label={`سبد خرید، ${fa(count)} کالا`}>
            <ShoppingBag size={18} aria-hidden />
            <span className={styles.cartLabel}>سبد خرید</span>
            {count > 0 && <span className={styles.cartCount}>{fa(count)}</span>}
          </Link>
        </div>
      </div>

      <div className={cx("container", styles.searchMobile)}>
        <Suspense fallback={<SearchFallback />}>
          <SearchBox />
        </Suspense>
      </div>

      <nav className={styles.nav} aria-label="دسته‌بندی‌های اصلی">
        <ul className={cx("container", styles.navList)}>
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={cx(styles.navLink, active && styles.navActive)} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
