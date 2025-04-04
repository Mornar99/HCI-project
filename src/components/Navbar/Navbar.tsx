"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import ikona from "../../../public/shopping-cart-icon.jpg";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h2 className={styles.logo}>SHOE</h2>

        <div className={styles.rightPartNavbar}>
          {session && !isPending && (
            <div className={styles.userIcon}>
              {session.user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}

          <button className={styles.hamburger} onClick={toggleMenu}>
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
          <li className={pathname === "/news" ? styles.active : ""}>
            <Link href="/news" onClick={closeMenu}>
              News
            </Link>
          </li>
          <li className={pathname === "/oNama" ? styles.active : ""}>
            <Link href="/oNama" onClick={closeMenu}>
              About us
            </Link>
          </li>
          <li className={pathname === "/kosarica" ? styles.active : ""}>
            <Link href="/kosarica" onClick={closeMenu}>
              <Image src={ikona} alt="Cart" width={30} height={30} />
            </Link>
          </li>

          {isPending ? (
            <li>Loading...</li>
          ) : session ? (
            <li className={styles.userSection}>
              <button onClick={handleSignOut} className={styles.navLink}>
                Sign Out
              </button>
            </li>
          ) : (
            <li className={pathname === "/signin" ? styles.active : ""}>
              <Link href="/signin" onClick={closeMenu}>
                Sign In
              </Link>
            </li>
          )}

          {session && !isPending && (
            <div className={styles.userIcon2}>
              {session.user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
