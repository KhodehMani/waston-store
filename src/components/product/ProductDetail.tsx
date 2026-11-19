import { Check } from "lucide-react";
import { GiftComposerIsland } from "@/components/vue/GiftComposerIsland";
import { TrustChips } from "@/components/ui/TrustChips";
import { discountPercent } from "@/data/products";
import { fa } from "@/lib/format";
import type { Product } from "@/types/product";
import { PriceTag, Rating, StockStatus } from "./ProductMeta";
import { ProductTile } from "./ProductTile";
import { PurchasePanel } from "./PurchasePanel";
import styles from "./ProductDetail.module.css";

export function ProductDetail({ product }: { product: Product }) {
  const discount = discountPercent(product);
  return (
    <div className={styles.grid}>
      <div className={styles.gallery}>
        <ProductTile product={product} size="large" />
        <div className={styles.badges}>
          {discount > 0 && <span className={styles.discount}>{fa(discount)}٪ تخفیف</span>}
          {product.newRank !== undefined && <span className={styles.new}>جدید</span>}
          {product.limited && product.stock !== 0 && <span className={styles.plain}>تعداد محدود</span>}
          {product.giftWrap && <span className={styles.plain}>بسته‌بندی هدیه</span>}
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.brand}>
          {product.brand} · مدل <span className="ltr">{product.model}</span>
        </p>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.meta}>
          <Rating product={product} />
          <span className={styles.sep} aria-hidden />
          <StockStatus product={product} />
        </div>
        <p className={styles.summary}>{product.summary}</p>
        <ul className={styles.highlights}>
          {product.highlights.map((h) => (
            <li key={h}>
              <Check size={16} aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        <div className={styles.buyBox}>
          <PriceTag product={product} size="lg" />
          <PurchasePanel product={product} />
          <TrustChips plain />
        </div>

        {product.giftWrap && product.stock !== 0 && (
          <div className={styles.gift}>
            <GiftComposerIsland variant="product" />
          </div>
        )}
      </div>
    </div>
  );
}
