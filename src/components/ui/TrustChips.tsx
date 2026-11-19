import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import styles from "./TrustChips.module.css";

const items = [
  { icon: Truck, label: "ارسال روز بعد*" },
  { icon: ShieldCheck, label: "ضمانت اصالت" },
  { icon: RotateCcw, label: "ضمانت بازگشت" },
];

/** Pill row used in collection heroes and the product page. */
export function TrustChips({ plain = false }: { plain?: boolean }) {
  return (
    <ul className={plain ? styles.plain : styles.chips}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className={styles.chip}>
          <Icon size={15} strokeWidth={1.9} aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}
