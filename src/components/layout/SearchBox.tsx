"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ProductIllustration } from "@/components/icons/ProductIllustration";
import { cx, price } from "@/lib/format";
import { searchProducts } from "@/lib/search";
import styles from "./SearchBox.module.css";

/** Header search with instant suggestions (combobox pattern). */
export function SearchBox({ className, autoFocus }: { className?: string; autoFocus?: boolean }) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") ?? "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const listId = useId();
  const wrapRef = useRef<HTMLFormElement>(null);

  const suggestions = useMemo(() => (query.trim().length > 1 ? searchProducts(query, 5) : []), [query]);

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const go = (q: string) => {
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <form
      ref={wrapRef}
      role="search"
      className={cx(styles.form, className)}
      onSubmit={(e) => {
        e.preventDefault();
        if (active >= 0 && suggestions[active]) {
          setOpen(false);
          router.push(`/product/${suggestions[active].slug}`);
        } else if (query.trim()) go(query);
      }}
    >
      <label className={styles.field}>
        <span className="visually-hidden">جستجوی محصولات</span>
        <Search size={18} className={styles.icon} aria-hidden />
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          placeholder="جستجو در توستر، غذاساز، ظروف سفالی…"
          className={styles.input}
          role="combobox"
          aria-expanded={open && suggestions.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, suggestions.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, -1));
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        />
      </label>
      {open && suggestions.length > 0 && (
        <ul id={listId} role="listbox" className={styles.list} aria-label="پیشنهادهای جستجو">
          {suggestions.map((p, i) => (
            <li key={p.id} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
              <Link
                href={`/product/${p.slug}`}
                className={cx(styles.option, i === active && styles.optionActive)}
                onClick={() => setOpen(false)}
              >
                <span className={cx(styles.thumb, `tone-${p.tone}`)}>
                  <ProductIllustration name={p.illustration} size={26} strokeWidth={3.4} />
                </span>
                <span className={styles.optText}>
                  <strong>{p.title}</strong>
                  <small>{price(p.price)} تومان</small>
                </span>
              </Link>
            </li>
          ))}
          <li role="presentation">
            <button type="submit" className={styles.all}>
              نمایش همه نتایج «{query.trim()}»
            </button>
          </li>
        </ul>
      )}
    </form>
  );
}
