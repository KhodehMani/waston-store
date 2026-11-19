import type { ReactNode } from "react";
import styles from "./EmptyState.module.css";

interface Props {
  icon: ReactNode;
  title: string;
  text?: string;
  children?: ReactNode;
}

export function EmptyState({ icon, title, text, children }: Props) {
  return (
    <div className={styles.wrap}>
      <span className={styles.icon} aria-hidden>
        {icon}
      </span>
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}
