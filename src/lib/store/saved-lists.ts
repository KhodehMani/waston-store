import { createPersistentStore, type Hydrated } from "./create-store";

export interface IdListState extends Hydrated {
  ids: string[];
}

/** Products the shopper hearted. */
export const wishlistStore = createPersistentStore<IdListState>("waston:wishlist", { ready: false, ids: [] });

/** Out-of-stock products the shopper asked to be notified about ("موجود شد خبرم کن"). */
export const restockStore = createPersistentStore<IdListState>("waston:restock", { ready: false, ids: [] });

export function toggleId(store: typeof wishlistStore, id: string): boolean {
  let added = false;
  store.setState((s) => {
    added = !s.ids.includes(id);
    return { ...s, ids: added ? [...s.ids, id] : s.ids.filter((x) => x !== id) };
  });
  return added;
}
