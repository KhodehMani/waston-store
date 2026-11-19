"use client";

import { SlidersHorizontal } from "lucide-react";
import { useId } from "react";
import type { CollectionConfig } from "@/data/collections";
import { cx, fa } from "@/lib/format";
import { brandCounts, priceRanges, type ListingFilters } from "@/lib/listing";
import type { Product } from "@/types/product";
import styles from "./FilterPanel.module.css";

interface Props {
  config: CollectionConfig;
  /** Products after chip selection — used for facet counts. */
  pool: Product[];
  filters: ListingFilters;
  onChange: (patch: Partial<ListingFilters>) => void;
  onReset: () => void;
  activeCount: number;
  showHeading?: boolean;
}

export function FilterPanel({ config, pool, filters, onChange, onReset, activeCount, showHeading = true }: Props) {
  const brands = brandCounts(pool);
  // Unique per panel instance: the sidebar and the mobile sheet render at the same time.
  const uid = useId();
  const groupName = (key: string) => `${uid}-${key}`;

  return (
    <div className={styles.panel}>
      {showHeading && (
        <div className={styles.head}>
          <h2 className={styles.heading}>
            <SlidersHorizontal size={17} aria-hidden /> فیلترها
          </h2>
          {activeCount > 0 && (
            <button type="button" className={styles.reset} onClick={onReset}>
              حذف فیلترها ({fa(activeCount)})
            </button>
          )}
        </div>
      )}

      <fieldset className={styles.group}>
        <legend>موجودی</legend>
        <label className={styles.option}>
          <input type="checkbox" checked={filters.inStockOnly} onChange={(e) => onChange({ inStockOnly: e.target.checked })} />
          <span className={styles.box} aria-hidden />
          <span className={styles.label}>فقط کالاهای موجود</span>
        </label>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>محدوده قیمت</legend>
        {priceRanges.map((r) => (
          <label key={r.value} className={styles.option}>
            <input
              type="radio"
              name={groupName("price")}
              checked={filters.price === r.value}
              onChange={() => onChange({ price: r.value })}
            />
            <span className={styles.radio} aria-hidden />
            <span className={styles.label}>{r.label}</span>
          </label>
        ))}
      </fieldset>

      {config.facet && (
        <fieldset className={styles.group}>
          <legend>{config.facet.label}</legend>
          <label className={styles.option}>
            <input
              type="radio"
              name={groupName("facet")}
              checked={filters.facet === "all"}
              onChange={() => onChange({ facet: "all" })}
            />
            <span className={styles.radio} aria-hidden />
            <span className={styles.label}>همه</span>
          </label>
          {config.facet.options.map((o) => {
            const count = pool.filter(o.test).length;
            return (
              <label key={o.value} className={cx(styles.option, count === 0 && styles.disabled)}>
                <input
                  type="radio"
                  name={groupName("facet")}
                  checked={filters.facet === o.value}
                  disabled={count === 0}
                  onChange={() => onChange({ facet: o.value })}
                />
                <span className={styles.radio} aria-hidden />
                <span className={styles.label}>{o.label}</span>
                <span className={styles.count}>{fa(count)}</span>
              </label>
            );
          })}
        </fieldset>
      )}

      <fieldset className={styles.group}>
        <legend>برند</legend>
        {brands.map(({ brand, count }) => (
          <label key={brand} className={styles.option}>
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={(e) =>
                onChange({
                  brands: e.target.checked ? [...filters.brands, brand] : filters.brands.filter((b) => b !== brand),
                })
              }
            />
            <span className={styles.box} aria-hidden />
            <span className={styles.label}>{brand}</span>
            <span className={styles.count}>{fa(count)}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.group}>
        <legend>امتیاز کاربران</legend>
        <label className={styles.option}>
          <input type="checkbox" checked={filters.minRating4} onChange={(e) => onChange({ minRating4: e.target.checked })} />
          <span className={styles.box} aria-hidden />
          <span className={styles.label}>۴ ستاره و بالاتر</span>
        </label>
      </fieldset>
    </div>
  );
}
