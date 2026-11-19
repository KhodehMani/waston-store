import type { ProductSpec } from "@/types/product";
import styles from "./SpecsTable.module.css";

export function SpecsTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <table className={styles.table}>
      <tbody>
        {specs.map((s) => (
          <tr key={s.label}>
            <th scope="row">{s.label}</th>
            <td>{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
