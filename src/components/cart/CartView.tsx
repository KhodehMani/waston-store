"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import { ProductTile } from "@/components/product/ProductTile";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { GiftComposerIsland } from "@/components/vue/GiftComposerIsland";
import { useCart } from "@/lib/hooks/use-store";
import { fa, price } from "@/lib/format";
import { FREE_SHIPPING_FROM } from "@/lib/pricing";
import { cartActions } from "@/lib/store/cart";
import { OrderSummary } from "./OrderSummary";
import styles from "./CartView.module.css";

export function CartView() {
  const { ready, resolved, totals } = useCart();

  if (!ready) {
    return (
      <div className={styles.layout} aria-busy>
        <div className={styles.lines}>
          {[0, 1].map((i) => (
            <div key={i} className="skeleton" style={{ height: 112, borderRadius: 18 }} />
          ))}
        </div>
        <div className="skeleton" style={{ height: 260, borderRadius: 18 }} />
      </div>
    );
  }

  if (resolved.length === 0) {
    return (
      <EmptyState
        icon={<ShoppingBag size={28} aria-hidden />}
        title="سبد خرید شما خالی است"
        text="از دسته‌بندی‌ها یا پرفروش‌ترین‌ها شروع کنید؛ هر محصولی که اضافه کنید این‌جا نمایش داده می‌شود."
      >
        <Button href="/shop" variant="primary">
          مشاهده محصولات
        </Button>
        <Button href="/shop/best-sellers" variant="outline">
          مشاهده پرفروش‌ها
        </Button>
      </EmptyState>
    );
  }

  const remainingForFree = FREE_SHIPPING_FROM - totals.total;

  return (
    <div className={styles.layout}>
      <div className={styles.lines}>
        {remainingForFree > 0 ? (
          <p className={styles.notice}>
            با افزودن <strong>{price(remainingForFree)} تومان</strong> دیگر، ارسال این سفارش رایگان می‌شود.
          </p>
        ) : (
          <p className={styles.notice}>ارسال این سفارش رایگان است.</p>
        )}
        <ul className={styles.list}>
          {resolved.map(({ product, qty, lineTotal, lineCompareAt }) => (
            <li key={product.id} className={styles.line}>
              <Link href={`/product/${product.slug}`} className={styles.thumb} tabIndex={-1} aria-hidden>
                <ProductTile product={product} size="thumb" />
              </Link>
              <div className={styles.info}>
                <p className={styles.brand}>
                  {product.brand} · <span className="ltr">{product.model}</span>
                </p>
                <h3 className={styles.name}>
                  <Link href={`/product/${product.slug}`}>{product.title}</Link>
                </h3>
                <p className={styles.unit}>قیمت واحد: {price(product.price)} تومان</p>
              </div>
              <div className={styles.controls}>
                <QuantityStepper
                  value={qty}
                  label={product.title}
                  onChange={(n) => cartActions.setQty(product.id, n)}
                  onRemove={() => cartActions.remove(product.id)}
                />
                <div className={styles.lineTotal}>
                  {lineCompareAt > lineTotal && <del>{price(lineCompareAt)}</del>}
                  <strong>{price(lineTotal)}</strong> <span>تومان</span>
                </div>
              </div>
              <button
                type="button"
                className={styles.remove}
                onClick={() => cartActions.remove(product.id)}
                aria-label={`حذف ${product.title}`}
              >
                <Trash2 size={17} aria-hidden />
              </button>
            </li>
          ))}
        </ul>
        <Link href="/shop" className={styles.back}>
          <ArrowLeft size={16} aria-hidden style={{ transform: "scaleX(-1)" }} /> ادامه خرید
        </Link>
      </div>

      <aside className={styles.aside}>
        <OrderSummary
          itemsCount={totals.itemsCount}
          subtotal={totals.subtotal}
          savings={totals.savings}
          shipping={null}
          payable={totals.total}
        >
          <Button href="/checkout" variant="primary" size="lg" block>
            ادامه فرآیند خرید
          </Button>
          <p className={styles.small}>{fa(totals.itemsCount)} کالا در سبد شما</p>
        </OrderSummary>
        <GiftComposerIsland variant="cart" />
      </aside>
    </div>
  );
}
