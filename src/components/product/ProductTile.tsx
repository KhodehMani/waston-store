import { cx } from "@/lib/format";
import type { Product } from "@/types/product";
import { ProductIllustration } from "../icons/ProductIllustration";
import styles from "./ProductTile.module.css";

/** Tinted illustration area of a product card / gallery. */
export function ProductTile({ product, size = "card" }: { product: Product; size?: "card" | "large" | "thumb" }) {
  const out = product.stock === 0;
  return (
    <div className={cx(styles.tile, `tone-${product.tone}`, styles[size], out && styles.out)}>
      <ProductIllustration
        name={product.illustration}
        size={size === "large" ? "46%" : size === "thumb" ? "70%" : "44%"}
        strokeWidth={size === "thumb" ? 3.2 : 2.6}
        className={styles.art}
      />
      {out && size !== "thumb" && <span className={styles.outPill}>ناموجود</span>}
      {size !== "thumb" && <span className={styles.sample}>داده نمونه</span>}
    </div>
  );
}
