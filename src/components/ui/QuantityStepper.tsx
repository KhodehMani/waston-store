"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { fa } from "@/lib/format";
import { MAX_QTY } from "@/lib/store/cart";
import styles from "./QuantityStepper.module.css";

interface Props {
  value: number;
  onChange: (qty: number) => void;
  /** When provided, the minus button turns into a remove button at qty 1. */
  onRemove?: () => void;
  label: string;
}

export function QuantityStepper({ value, onChange, onRemove, label }: Props) {
  const atMin = value <= 1;
  return (
    <div className={styles.stepper} role="group" aria-label={`تعداد ${label}`}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => onChange(value + 1)}
        disabled={value >= MAX_QTY}
        aria-label="افزایش تعداد"
      >
        <Plus size={16} aria-hidden />
      </button>
      <output className={styles.value} aria-live="polite">
        {fa(value)}
      </output>
      {atMin && onRemove ? (
        <button type="button" className={styles.btn} onClick={onRemove} aria-label={`حذف ${label} از سبد`}>
          <Trash2 size={16} aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          className={styles.btn}
          onClick={() => onChange(value - 1)}
          disabled={atMin}
          aria-label="کاهش تعداد"
        >
          <Minus size={16} aria-hidden />
        </button>
      )}
    </div>
  );
}
