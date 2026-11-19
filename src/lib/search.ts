import { catalog } from "@/data/products";
import type { Product } from "@/types/product";
import { toAsciiDigits } from "./format";

/** Normalises Persian/Arabic variants so "كتري" matches "کتری", ZWNJ-insensitive. */
export function normalize(text: string): string {
  return toAsciiDigits(text)
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[‌‍‎‏]/g, " ")
    .replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const categoryWords: Record<Product["category"], string> = {
  "kitchen-appliances": "لوازم برقی آشپزخانه",
  kitchenware: "ظروف آشپزخانه",
  ceramics: "سفال سرامیک ظروف",
  cleaning: "لوازم نظافت خانه جارو",
};

const index = catalog.map((p) => ({
  product: p,
  haystack: normalize([p.title, p.model, p.brand, categoryWords[p.category], p.summary].join(" ")),
  title: normalize(p.title),
}));

/** All query words must appear; title hits rank above description hits. */
export function searchProducts(query: string, limit?: number): Product[] {
  const words = normalize(query).split(" ").filter(Boolean);
  if (!words.length) return [];
  const hits = index
    .filter((entry) => words.every((w) => entry.haystack.includes(w)))
    .map((entry) => ({
      product: entry.product,
      score: words.reduce((s, w) => s + (entry.title.includes(w) ? 2 : 1), 0),
    }))
    .sort((a, b) => b.score - a.score);
  const products = hits.map((h) => h.product);
  return limit ? products.slice(0, limit) : products;
}
