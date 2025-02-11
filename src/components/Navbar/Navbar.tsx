"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import ikona from "../../../public/shopping-cart-icon.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h2 className={styles.logo}>SHOE</h2>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className={pathname === "/katalog" ? styles.active : ""}>
          <Link href="/katalog" onClick={closeMenu}>
            Catalog
          </Link>
        </li>
        <li className={pathname === "/oNama" ? styles.active : ""}>
          <Link href="/oNama" onClick={closeMenu}>
            About us
          </Link>
        </li>
        <li className={pathname === "/kosarica" ? styles.active : ""}>
          <Link href="/kosarica" onClick={closeMenu}>
            <Image src={ikona} alt="Cart" width={24} height={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
