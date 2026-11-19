"use client";

import { ChevronDown, PackageSearch, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Chips } from "@/components/ui/Chips";
import { EmptyState } from "@/components/ui/EmptyState";
import { Sheet } from "@/components/ui/Sheet";
import { getCollection, sortOptions, type SortKey } from "@/data/collections";
import { fa } from "@/lib/format";
import {
  applyChip,
  applyFilters,
  collectionProducts,
  countActiveFilters,
  defaultFilters,
  sortProducts,
  type ListingFilters,
} from "@/lib/listing";
import { FilterPanel } from "./FilterPanel";
import styles from "./ListingView.module.css";

/**
 * Interactive product listing: chips, filters (sidebar / mobile sheet), sorting.
 * Receives only the collection slug; the config (with filter predicates) is
 * resolved on the client from the shared data module.
 */
export function ListingView({ slug }: { slug: string }) {
  const config = getCollection(slug)!;
  const base = useMemo(() => collectionProducts(config), [config]);
  const [filters, setFilters] = useState<ListingFilters>(() => defaultFilters(config.defaultSort));
  const [sheetOpen, setSheetOpen] = useState(false);

  const pool = useMemo(() => applyChip(config, base, filters.chip), [config, base, filters.chip]);
  const results = useMemo(
    () => sortProducts(applyFilters(config, pool, filters), filters.sort),
    [config, pool, filters],
  );
  const activeCount = countActiveFilters(filters);

  const patch = (p: Partial<ListingFilters>) => setFilters((f) => ({ ...f, ...p }));
  const reset = () => setFilters((f) => ({ ...defaultFilters(f.sort), chip: f.chip }));

  const panel = (heading: boolean) => (
    <FilterPanel
      config={config}
      pool={pool}
      filters={filters}
      onChange={patch}
      onReset={reset}
      activeCount={activeCount}
      showHeading={heading}
    />
  );

  return (
    <div className={styles.wrap}>
      {config.chips && (
        <div className={styles.chips}>
          <Chips
            label="زیرگروه‌ها"
            value={filters.chip}
            onChange={(chip) => patch({ chip, facet: "all", brands: [] })}
            options={[{ id: "all", label: config.chips.allLabel }, ...config.chips.options]}
          />
        </div>
      )}

      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label="فیلترها">
          {panel(true)}
        </aside>

        <div className={styles.main}>
          <div className={styles.toolbar}>
            <p className={styles.count} aria-live="polite">
              {fa(results.length)} محصول
            </p>
            <button type="button" className={styles.filterBtn} onClick={() => setSheetOpen(true)}>
              <SlidersHorizontal size={17} aria-hidden />
              فیلترها
              {activeCount > 0 && <span className={styles.filterCount}>{fa(activeCount)}</span>}
            </button>
            <label className={styles.sort}>
              <span className={styles.sortLabel}>مرتب‌سازی</span>
              <span className={styles.selectWrap}>
                <select value={filters.sort} onChange={(e) => patch({ sort: e.target.value as SortKey })}>
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} aria-hidden />
              </span>
            </label>
          </div>

          {results.length > 0 ? (
            <ProductGrid products={results} columns={3} showGiftBadge={slug === "gifts"} />
          ) : (
            <EmptyState
              icon={<PackageSearch size={28} aria-hidden />}
              title="محصولی با این فیلترها پیدا نشد"
              text="چند فیلتر را بردارید یا محدوده قیمت را بزرگ‌تر کنید."
            >
              <Button variant="outline" onClick={reset}>
                حذف فیلترها
              </Button>
            </EmptyState>
          )}
        </div>
      </div>

      <Sheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="فیلترها"
        side="bottom"
        footer={
          <div className={styles.sheetFooter}>
            <Button variant="ghost" onClick={reset} disabled={activeCount === 0}>
              حذف همه
            </Button>
            <Button variant="primary" block onClick={() => setSheetOpen(false)}>
              نمایش {fa(results.length)} محصول
            </Button>
          </div>
        }
      >
        {panel(false)}
      </Sheet>
    </div>
  );
}
