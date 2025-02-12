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
      { name: "Naši brendovi", path: "/oNama/nasiBrendovi" },
      { name: "Misija i vizija", path: "/oNama/misijaVizija" },
    ];
  } else if (pathname.startsWith("/kosarica")) {
    menuItems = [
      { name: "Pogledaj košaricu", path: "/kosarica/pogledajKosaricu" },
      { name: "Detalji dostave", path: "/kosarica/detaljiDostave" },
      { name: "Način plaćanja", path: "/kosarica/nacinPlacanja" },
      { name: "Promocije i kuponi", path: "/kosarica/promocijeKuponi" },
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
