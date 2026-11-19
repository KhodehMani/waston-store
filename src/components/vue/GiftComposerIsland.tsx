"use client";

import type { GiftComposerProps } from "@vue-widgets";
import { useMemo } from "react";
import { useCart } from "@/lib/hooks/use-store";
import { cartActions, type GiftOptions } from "@/lib/store/cart";
import { VueIsland } from "./VueIsland";

const loadGiftComposer = () => import("@vue-widgets").then((m) => m.mountGiftComposer);

const onChange = (value: GiftOptions) => cartActions.setGift(value);

/**
 * Gift wrapping + greeting-card composer (Vue component).
 * State lives in the shared cart store, so the product page, the cart and the
 * checkout summary (React) all see the same gift options.
 */
export function GiftComposerIsland({ variant }: { variant: "product" | "cart" }) {
  const { gift, ready } = useCart();
  const props = useMemo<GiftComposerProps>(
    () => ({ modelValue: gift, variant, maxLength: 150, onChange }),
    [gift, variant],
  );

  const skeleton = <div className="skeleton" style={{ height: 72, borderRadius: 18 }} />;
  if (!ready) return skeleton;

  return <VueIsland load={loadGiftComposer} props={props} fallback={skeleton} label="بسته‌بندی هدیه" />;
}
