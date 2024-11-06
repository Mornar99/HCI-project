"use client";
//kako bi moga citat pathname

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import ikona from "../../../public/shopping-cart-icon.png";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/katalog" ? styles.active : ""}>
          <Link href="/katalog">Katalog</Link>
        </li>
        <li className={pathname === "/oNama" ? styles.active : ""}>
          <Link href="/oNama">O nama</Link>
        </li>
        <li className={pathname === "/kosarica" ? styles.active : ""}>
          <Link href="/kosarica">
            <Image src={ikona} alt="" width={24} height={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
