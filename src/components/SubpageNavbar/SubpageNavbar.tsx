"use client";

import { usePathname } from "next/navigation";
import styles from "./SubpageNavbar.module.scss";
import Link from "next/link";

const SubpageNavbar = () => {
  const pathname = usePathname();

  let menuItems;
  if (pathname.startsWith("/katalog")) {
    menuItems = [
      { name: "Men", path: "/katalog/muskarci" },
      { name: "Women", path: "/katalog/zene" },
      { name: "Kids", path: "/katalog/djeca" },
    ];
  } else if (pathname.startsWith("/oNama")) {
    menuItems = [
      { name: "Our brands", path: "/oNama/nasiBrendovi" },
      { name: "Mission and vision", path: "/oNama/misijaVizija" },
    ];
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.categories}>
        {menuItems &&
          menuItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <div
                className={`${styles.categoryCard} ${
                  pathname === item.path ? styles.active : ""
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SubpageNavbar;
