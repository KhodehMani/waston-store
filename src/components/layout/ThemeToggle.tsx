"use client";

import { Moon, Sun } from "lucide-react";
import styles from "./Header.module.css";

export const THEME_KEY = "waston:theme";

/** Inline script (runs before paint) — applies the saved or system theme. */
export const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;

export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  };
  return (
    <button type="button" className={className ?? styles.iconBtn} onClick={toggle} aria-label="تغییر تم روشن و تاریک">
      {/* Both icons render; CSS shows the right one so SSR and client markup match. */}
      <Moon size={19} className={styles.moon} aria-hidden />
      <Sun size={19} className={styles.sun} aria-hidden />
    </button>
  );
}
