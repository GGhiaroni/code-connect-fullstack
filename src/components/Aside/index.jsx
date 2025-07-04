import Image from "next/image";
import styles from "./aside.module.css";

import Link from "next/link";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image src={logo} alt="Logo da Code Connect" />
      </Link>
    </aside>
  );
};
