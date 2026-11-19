import { cx } from "@/lib/format";
import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css";

interface Props {
  products: Product[];
  columns?: 3 | 4;
  /** On phones, show as a horizontal snap rail instead of a 2-column grid. */
  railOnMobile?: boolean;
  showGiftBadge?: boolean;
}

export function ProductGrid({ products, columns = 4, railOnMobile = false, showGiftBadge }: Props) {
  return (
    <div className={cx(styles.grid, columns === 3 ? styles.cols3 : styles.cols4, railOnMobile && "scroll-rail")}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} showGiftBadge={showGiftBadge} />
      ))}
    </div>
  );
}
