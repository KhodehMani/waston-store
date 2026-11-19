import { Star } from "lucide-react";
import { fa, price as fmt } from "@/lib/format";
import type { Product } from "@/types/product";
import styles from "./ProductMeta.module.css";

export function Rating({ product }: { product: Product }) {
  if (!product.rating || product.reviews === 0) {
    return <span className={styles.noReviews}>هنوز نظری ثبت نشده</span>;
  }
  return (
    <span className={styles.rating} aria-label={`امتیاز ${fa(product.rating)} از ۵ بر اساس ${fa(product.reviews)} نظر`}>
      <Star size={14} className={styles.star} aria-hidden />
      <strong>{fa(product.rating)}</strong>
      <span className={styles.count}>({fa(product.reviews)} نظر)</span>
    </span>
  );
}

export function StockStatus({ product }: { product: Product }) {
  if (product.stock === 0) {
    return <span className={`${styles.stock} ${styles.out}`}>ناموجود</span>;
  }
  if (typeof product.stock === "number" && product.stock <= 5) {
    return <span className={`${styles.stock} ${styles.low}`}>فقط {fa(product.stock)} عدد</span>;
  }
  return <span className={`${styles.stock} ${styles.in}`}>موجود</span>;
}

export function PriceTag({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  return (
    <div className={size === "lg" ? `${styles.price} ${styles.priceLg}` : styles.price}>
      {product.compareAt && (
        <del className={styles.compare} aria-label={`قیمت قبل ${fmt(product.compareAt)} تومان`}>
          {fmt(product.compareAt)}
        </del>
      )}
      <p className={styles.final}>
        <strong>{fmt(product.price)}</strong> <span>تومان</span>
      </p>
    </div>
  );
}
