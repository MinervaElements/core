import styles from "./Header.module.css";
import { Navbar } from "./navbar/Navbar";
import { HeaderRoutes } from "./data/data";
export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar Routes={HeaderRoutes} />
    </header>
  );
}
