"use client";

import { cx } from "@/lib/format";
import styles from "./Chips.module.css";

interface Props {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}

/** Single-select pill tabs (e.g. "همه ظروف / پخت‌وپز / ..."). */
export function Chips({ label, options, value, onChange }: Props) {
  return (
    <div className={styles.row} role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          className={cx(styles.chip, value === o.id && styles.active)}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
