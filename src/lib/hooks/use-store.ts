"use client";

import { useMemo, useSyncExternalStore } from "react";
import { resolveLines, summarize } from "@/lib/pricing";
import { cartStore } from "@/lib/store/cart";
import type { Store } from "@/lib/store/create-store";
import { restockStore, wishlistStore } from "@/lib/store/saved-lists";

export function useStore<T>(store: Store<T>): T {
  return useSyncExternalStore(store.subscribe, store.getState, store.getServerState);
}

export function useCart() {
  const state = useStore(cartStore);
  const lines = useMemo(() => resolveLines(state.lines), [state.lines]);
  const totals = useMemo(() => summarize(lines), [lines]);
  return { ...state, resolved: lines, totals };
}

export function useWishlist() {
  return useStore(wishlistStore);
}

export function useRestock() {
  return useStore(restockStore);
}
