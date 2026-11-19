import { site } from "@/data/site";
import styles from "./AnnouncementBar.module.css";

export function AnnouncementBar() {
  return (
    <div className={styles.bar} role="note">
      <p className="container">{site.mockNotice}</p>
    </div>
  );
}
