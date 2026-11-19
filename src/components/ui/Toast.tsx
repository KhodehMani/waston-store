"use client";

import Link from "next/link";
import { Check, Info } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import styles from "./Toast.module.css";

interface ToastItem {
  id: number;
  message: string;
  tone: "success" | "info";
  action?: { href: string; label: string };
}

type ShowToast = (message: string, options?: Partial<Omit<ToastItem, "id" | "message">>) => void;

const ToastContext = createContext<ShowToast>(() => {});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const nextId = useRef(1);

  const dismiss = useCallback((id: number) => setItems((list) => list.filter((t) => t.id !== id)), []);

  const show = useCallback<ShowToast>(
    (message, options) => {
      const id = nextId.current++;
      setItems((list) => [...list.slice(-2), { id, message, tone: options?.tone ?? "success", action: options?.action }]);
      window.setTimeout(() => dismiss(id), 3200);
    },
    [dismiss],
  );

  const value = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className={styles.region} aria-live="polite" aria-atomic="false">
        {items.map((t) => (
          <div key={t.id} className={styles.toast} role="status">
            <span className={t.tone === "success" ? styles.iconOk : styles.iconInfo}>
              {t.tone === "success" ? <Check size={16} strokeWidth={2.6} aria-hidden /> : <Info size={16} aria-hidden />}
            </span>
            <span className={styles.msg}>{t.message}</span>
            {t.action && (
              <Link href={t.action.href} className={styles.action} onClick={() => dismiss(t.id)}>
                {t.action.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
