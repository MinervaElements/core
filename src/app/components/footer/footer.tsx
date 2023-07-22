import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pRedes}>
        <ul className={styles.redes}>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <p className={styles["copy-p"]}>Minerva Elements &copy; - 2023</p>
    </footer>
  );
};
