import type { CartLine } from "@/lib/pricing";
import { createPersistentStore, type Hydrated } from "./create-store";

export interface GiftOptions {
  enabled: boolean;
  recipientName: string;
  message: string;
}

export interface CartState extends Hydrated {
  lines: CartLine[];
  gift: GiftOptions;
}

export const emptyGift: GiftOptions = { enabled: false, recipientName: "", message: "" };

export const MAX_QTY = 10;

export const cartStore = createPersistentStore<CartState>("waston:cart", {
  ready: false,
  lines: [],
  gift: emptyGift,
});

const clampQty = (qty: number) => Math.max(1, Math.min(MAX_QTY, Math.round(qty)));

export const cartActions = {
  add(productId: string, qty = 1) {
    cartStore.setState((s) => {
      const existing = s.lines.find((l) => l.productId === productId);
      const lines = existing
        ? s.lines.map((l) => (l.productId === productId ? { ...l, qty: clampQty(l.qty + qty) } : l))
        : [...s.lines, { productId, qty: clampQty(qty) }];
      return { ...s, lines };
    });
  },
  setQty(productId: string, qty: number) {
    cartStore.setState((s) => ({
      ...s,
      lines: s.lines.map((l) => (l.productId === productId ? { ...l, qty: clampQty(qty) } : l)),
    }));
  },
  remove(productId: string) {
    cartStore.setState((s) => ({ ...s, lines: s.lines.filter((l) => l.productId !== productId) }));
  },
  setGift(gift: GiftOptions) {
    cartStore.setState((s) => ({ ...s, gift: { ...gift } }));
  },
  clear() {
    cartStore.setState((s) => ({ ...s, lines: [], gift: emptyGift }));
  },
};
