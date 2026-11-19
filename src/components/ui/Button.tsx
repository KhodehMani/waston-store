import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/format";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "on-dark";
type Size = "sm" | "md" | "lg";

interface Common {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Common & { href: string; onClick?: () => void; "aria-label"?: string };

export function Button(props: AsButton | AsLink) {
  const { variant = "primary", size = "md", block, icon, className, children } = props;
  const classes = cx(styles.btn, styles[variant], styles[size], block && styles.block, className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick} aria-label={props["aria-label"]}>
        {content}
      </Link>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, block: _b, icon: _i, className: _c, children: _ch, type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
