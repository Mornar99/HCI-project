"use client";
//kako bi moga citat pathname

import { usePathname } from "next/navigation";
import styles from "./SubpageNavbar.module.scss";
import Link from "next/link";

const SubpageNavbar = () => {
  const pathname = usePathname();

  let menuItems;
  if (pathname.startsWith("/katalog")) {
    menuItems = [
      { name: "Muškarci", path: "/katalog/muskarci" },
      { name: "Žene", path: "/katalog/zene" },
      { name: "Djeca", path: "/katalog/djeca" },
    ];
  } else if (pathname.startsWith("/oNama")) {
    menuItems = [
      { name: "Naša priča", path: "/oNama/nasaPrica" },
      { name: "Tim", path: "/oNama/tim" },
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
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {menuItems &&
            menuItems.map((item) => (
              <li
                key={item.path}
                className={pathname === item.path ? styles.active : ""}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
export default SubpageNavbar;
