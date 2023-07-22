import { Iroutes } from "@/types";
import styles from "./navbar.module.css";
import Link from "next/link";
export const Navbar = ({ Routes }: { Routes: Iroutes[] }) => {
    console.log(Routes);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles['nav-logo']}>
            <span>Logo</span>
            <h1>Name</h1>
        </div>
        <ul className={styles.ul}>
          {Routes.map((route, i) => (
            <li key={i}>
              <Link href={route.link}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
