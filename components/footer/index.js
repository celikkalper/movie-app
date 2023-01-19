import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">Made with ❤️ by&nbsp;Alper Çelik</Link>
    </footer>
  );
};

export default Footer;
