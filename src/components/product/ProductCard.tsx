"use client";

import Link from "next/link";
import { BellRing, Check, Heart, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { discountPercent } from "@/data/products";
import { useRestock, useWishlist } from "@/lib/hooks/use-store";
import { cx, fa } from "@/lib/format";
import { cartActions } from "@/lib/store/cart";
import { restockStore, toggleId, wishlistStore } from "@/lib/store/saved-lists";
import type { Product } from "@/types/product";
import { PriceTag, Rating, StockStatus } from "./ProductMeta";
import { ProductTile } from "./ProductTile";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, showGiftBadge = false }: { product: Product; showGiftBadge?: boolean }) {
  const toast = useToast();
  const wishlist = useWishlist();
  const restock = useRestock();
  const discount = discountPercent(product);
  const out = product.stock === 0;
  const wished = wishlist.ids.includes(product.id);
  const notifying = restock.ids.includes(product.id);
  const href = `/product/${product.slug}`;

  const addToCart = () => {
    cartActions.add(product.id);
    toast("به سبد خرید اضافه شد", { action: { href: "/cart", label: "مشاهده سبد" } });
  };

  const toggleWish = () => {
    const added = toggleId(wishlistStore, product.id);
    toast(added ? "به علاقه‌مندی‌ها اضافه شد" : "از علاقه‌مندی‌ها حذف شد", {
      tone: added ? "success" : "info",
      action: added ? { href: "/wishlist", label: "مشاهده" } : undefined,
    });
  };

  const toggleRestock = () => {
    const added = toggleId(restockStore, product.id);
    toast(added ? "موجود شد خبرتان می‌کنیم" : "اطلاع‌رسانی لغو شد", { tone: added ? "success" : "info" });
  };

  return (
    <article className={cx(styles.card, out && styles.isOut)}>
      <div className={styles.media}>
        <Link href={href} tabIndex={-1} aria-hidden className={styles.mediaLink}>
          <ProductTile product={product} />
        </Link>
        <div className={styles.badges}>
          {discount > 0 && <span className={cx(styles.badge, styles.discount)}>{fa(discount)}٪ تخفیف</span>}
          {product.newRank !== undefined && <span className={cx(styles.badge, styles.new)}>جدید</span>}
          {product.limited && !out && <span className={cx(styles.badge, styles.plain)}>تعداد محدود</span>}
          {showGiftBadge && product.giftWrap && <span className={cx(styles.badge, styles.plain)}>بسته‌بندی هدیه</span>}
        </div>
        <button
          type="button"
          className={cx(styles.wish, wished && styles.wished)}
          onClick={toggleWish}
          aria-pressed={wished}
          aria-label={wished ? `حذف ${product.title} از علاقه‌مندی‌ها` : `افزودن ${product.title} به علاقه‌مندی‌ها`}
        >
          <Heart size={18} aria-hidden />
        </button>
      </div>

      <div className={styles.body}>
        <p className={styles.brand}>
          <span>{product.brand}</span> · مدل <span className="ltr">{product.model}</span>
        </p>
        <h3 className={styles.title}>
          <Link href={href} className={styles.titleLink}>
            {product.title}
          </Link>
        </h3>
        <div className={styles.metaRow}>
          <Rating product={product} />
          <StockStatus product={product} />
        </div>
        <PriceTag product={product} />
        {out ? (
          <button
            type="button"
            className={cx(styles.cta, styles.ctaOutline, notifying && styles.ctaDone)}
            onClick={toggleRestock}
            aria-pressed={notifying}
          >
            {notifying ? <Check size={17} aria-hidden /> : <BellRing size={17} aria-hidden />}
            {notifying ? "خبرتان می‌کنیم" : "موجود شد خبرم کن"}
          </button>
        ) : (
          <button type="button" className={styles.cta} onClick={addToCart} aria-label={`افزودن ${product.title} به سبد`}>
            <ShoppingBag size={17} aria-hidden />
            افزودن به سبد
          </button>
        )}
      </div>
    </article>
  );
}
