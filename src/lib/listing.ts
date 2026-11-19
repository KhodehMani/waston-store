import type { CollectionConfig, SortKey } from "@/data/collections";
import { catalog, discountPercent, isInStock } from "@/data/products";
import type { Product } from "@/types/product";

export const priceRanges = [
  { value: "all", label: "همه قیمت‌ها", min: 0, max: Infinity },
  { value: "0-1", label: "تا ۱ میلیون تومان", min: 0, max: 1_000_000 },
  { value: "1-3", label: "۱ تا ۳ میلیون تومان", min: 1_000_000, max: 3_000_000 },
  { value: "3-8", label: "۳ تا ۸ میلیون تومان", min: 3_000_000, max: 8_000_000 },
  { value: "8+", label: "بیش از ۸ میلیون تومان", min: 8_000_000, max: Infinity },
] as const;

export type PriceRange = (typeof priceRanges)[number]["value"];

export interface ListingFilters {
  chip: string;
  inStockOnly: boolean;
  price: PriceRange;
  facet: string;
  brands: string[];
  minRating4: boolean;
  sort: SortKey;
}

export const defaultFilters = (sort: SortKey): ListingFilters => ({
  chip: "all",
  inStockOnly: false,
  price: "all",
  facet: "all",
  brands: [],
  minRating4: false,
  sort,
});

export function countActiveFilters(f: ListingFilters): number {
  return (
    Number(f.inStockOnly) +
    Number(f.price !== "all") +
    Number(f.facet !== "all") +
    f.brands.length +
    Number(f.minRating4)
  );
}

/** Products belonging to a collection, in its recommended order. */
export function collectionProducts(config: CollectionConfig): Product[] {
  const base = catalog.filter(config.includes);
  if (!config.order) return base;
  const rank = new Map(config.order.map((id, i) => [id, i]));
  return [...base].sort((a, b) => (rank.get(a.id) ?? 999) - (rank.get(b.id) ?? 999));
}

/** Products after the chip (tab) selection — the base for facet counts. */
export function applyChip(config: CollectionConfig, products: Product[], chip: string): Product[] {
  if (chip === "all" || !config.chips) return products;
  const option = config.chips.options.find((o) => o.id === chip);
  return option?.test ? products.filter(option.test) : products;
}

export function applyFilters(config: CollectionConfig, products: Product[], f: ListingFilters): Product[] {
  const range = priceRanges.find((r) => r.value === f.price) ?? priceRanges[0];
  const facetOption = config.facet?.options.find((o) => o.value === f.facet);
  return products.filter(
    (p) =>
      (!f.inStockOnly || isInStock(p)) &&
      p.price >= range.min &&
      p.price < range.max &&
      (!facetOption || facetOption.test(p)) &&
      (f.brands.length === 0 || f.brands.includes(p.brand)) &&
      (!f.minRating4 || (p.rating ?? 0) >= 4),
  );
}

export function sortProducts(products: Product[], sort: SortKey): Product[] {
  const list = products.map((p, i) => ({ p, i }));
  const by = (fn: (p: Product) => number) =>
    list.sort((a, b) => fn(a.p) - fn(b.p) || a.i - b.i).map((x) => x.p);
  switch (sort) {
    case "bestselling":
      return by((p) => p.salesRank ?? 999);
    case "newest":
      return by((p) => p.newRank ?? 999);
    case "discount":
      return by((p) => -discountPercent(p));
    case "price-asc":
      return by((p) => p.price);
    case "price-desc":
      return by((p) => -p.price);
    default:
      return products;
  }
}

/** Brand counts within the current chip selection, in mockup order. */
export function brandCounts(products: Product[]): { brand: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of products) counts.set(p.brand, (counts.get(p.brand) ?? 0) + 1);
  return [...counts.entries()]
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count);
}
