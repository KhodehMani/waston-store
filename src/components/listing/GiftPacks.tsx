"use client";

import Link from "next/link";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { useToast } from "@/components/ui/Toast";
import { giftPacks } from "@/data/products";
import { cx, price } from "@/lib/format";
import { cartActions } from "@/lib/store/cart";
import styles from "./GiftPacks.module.css";

export function GiftPacks() {
  const toast = useToast();
  return (
    <ul className={cx(styles.grid, "scroll-rail")}>
      {giftPacks.map((pack) => (
        <li key={pack.id} className={styles.card}>
          <Link href={`/product/${pack.slug}`} className={cx(styles.art, `tone-${pack.tone}`)} aria-hidden tabIndex={-1}>
            <ProductIllustration name={pack.illustration} size={44} strokeWidth={2.6} />
          </Link>
          <div className={styles.body}>
            <h3 className={styles.title}>
              <Link href={`/product/${pack.slug}`}>{pack.title}</Link>
            </h3>
            <p className={styles.text}>{pack.summary}</p>
            <div className={styles.foot}>
              <p className={styles.price}>
                <strong>{price(pack.price)}</strong> تومان
              </p>
              <button
                type="button"
                className={styles.add}
                onClick={() => {
                  cartActions.add(pack.id);
                  toast("به سبد خرید اضافه شد", { action: { href: "/cart", label: "مشاهده سبد" } });
                }}
              >
                افزودن به سبد
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
