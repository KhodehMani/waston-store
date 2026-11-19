import { getProduct } from "@/data/products";
import type { Product } from "@/types/product";

export interface CartLine {
  productId: string;
  qty: number;
}

export interface ResolvedLine {
  product: Product;
  qty: number;
  lineTotal: number;
  lineCompareAt: number;
}

export const shippingMethods = [
  { id: "express", title: "ارسال روز بعد*", text: "برای سفارش تا ساعت [—] — تهران و کرج", cost: 120_000 },
  { id: "post", title: "پست پیشتاز", text: "ارسال سراسری، ۲ تا ۵ روز کاری", cost: 85_000 },
] as const;

export type ShippingMethodId = (typeof shippingMethods)[number]["id"];

/** Sample free-shipping threshold (demo data). */
export const FREE_SHIPPING_FROM = 5_000_000;

export function resolveLines(lines: CartLine[]): ResolvedLine[] {
  return lines.flatMap((line) => {
    const product = getProduct(line.productId);
    if (!product) return [];
    return [
      {
        product,
        qty: line.qty,
        lineTotal: product.price * line.qty,
        lineCompareAt: (product.compareAt ?? product.price) * line.qty,
      },
    ];
  });
}

export function summarize(lines: ResolvedLine[], shipping?: ShippingMethodId) {
  const itemsCount = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.lineCompareAt, 0);
  const total = lines.reduce((s, l) => s + l.lineTotal, 0);
  const savings = subtotal - total;
  const method = shippingMethods.find((m) => m.id === shipping);
  const shippingCost = !method ? 0 : total >= FREE_SHIPPING_FROM ? 0 : method.cost;
  return { itemsCount, subtotal, savings, total, shippingCost, payable: total + shippingCost };
}
