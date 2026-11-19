import type { ReactNode } from "react";
import { fa, price } from "@/lib/format";
import styles from "./OrderSummary.module.css";

interface Props {
  itemsCount: number;
  subtotal: number;
  savings: number;
  shipping?: number | null;
  payable: number;
  children?: ReactNode;
  title?: string;
}

/** Totals card shared by the cart and checkout pages. */
export function OrderSummary({ itemsCount, subtotal, savings, shipping, payable, children, title = "خلاصه سفارش" }: Props) {
  return (
    <section className={styles.card} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      <dl className={styles.rows}>
        <div>
          <dt>قیمت کالاها ({fa(itemsCount)})</dt>
          <dd>{price(subtotal)} تومان</dd>
        </div>
        {savings > 0 && (
          <div className={styles.saving}>
            <dt>سود شما از خرید</dt>
            <dd>{price(savings)} تومان</dd>
          </div>
        )}
        <div>
          <dt>هزینه ارسال</dt>
          <dd>
            {shipping === undefined || shipping === null
              ? "در مرحله بعد"
              : shipping === 0
                ? "رایگان"
                : `${price(shipping)} تومان`}
          </dd>
        </div>
        <div className={styles.total}>
          <dt>مبلغ قابل پرداخت</dt>
          <dd>
            <strong>{price(payable)}</strong> تومان
          </dd>
        </div>
      </dl>
      {children}
    </section>
  );
}
