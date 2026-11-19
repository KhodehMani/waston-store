"use client";

import { BellRing, Check, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { useToast } from "@/components/ui/Toast";
import { useRestock, useWishlist } from "@/lib/hooks/use-store";
import { cx } from "@/lib/format";
import { cartActions } from "@/lib/store/cart";
import { restockStore, toggleId, wishlistStore } from "@/lib/store/saved-lists";
import type { Product } from "@/types/product";
import styles from "./PurchasePanel.module.css";

/** Quantity + add-to-cart + wishlist controls on the product page. */
export function PurchasePanel({ product }: { product: Product }) {
  const toast = useToast();
  const wishlist = useWishlist();
  const restock = useRestock();
  const [qty, setQty] = useState(1);
  const out = product.stock === 0;
  const max = typeof product.stock === "number" && product.stock > 0 ? product.stock : undefined;
  const wished = wishlist.ids.includes(product.id);
  const notifying = restock.ids.includes(product.id);

  const wishButton = (
    <button
      type="button"
      className={cx(styles.wish, wished && styles.wished)}
      onClick={() => {
        const added = toggleId(wishlistStore, product.id);
        toast(added ? "به علاقه‌مندی‌ها اضافه شد" : "از علاقه‌مندی‌ها حذف شد", { tone: added ? "success" : "info" });
      }}
      aria-pressed={wished}
      aria-label={wished ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
    >
      <Heart size={20} aria-hidden />
    </button>
  );

  if (out) {
    return (
      <div className={styles.row}>
        <Button
          variant="outline"
          size="lg"
          block
          icon={notifying ? <Check size={18} aria-hidden /> : <BellRing size={18} aria-hidden />}
          aria-pressed={notifying}
          onClick={() => {
            const added = toggleId(restockStore, product.id);
            toast(added ? "موجود شد خبرتان می‌کنیم" : "اطلاع‌رسانی لغو شد", { tone: added ? "success" : "info" });
          }}
        >
          {notifying ? "خبرتان می‌کنیم" : "موجود شد خبرم کن"}
        </Button>
        {wishButton}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <QuantityStepper value={qty} onChange={(n) => setQty(max ? Math.min(n, max) : n)} label={product.title} />
      <Button
        variant="secondary"
        size="lg"
        block
        icon={<ShoppingBag size={18} aria-hidden />}
        onClick={() => {
          cartActions.add(product.id, qty);
          toast("به سبد خرید اضافه شد", { action: { href: "/cart", label: "مشاهده سبد" } });
        }}
      >
        افزودن به سبد
      </Button>
      {wishButton}
    </div>
  );
}
