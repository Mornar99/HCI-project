"use client";
import ShoeCatalogAndFilter from "@/components/ShoeCatalogAndFilter/ShoeCatalogAndFilter";
import { useAppContext } from "@/context/AppContext";
import styles from "./page.module.css";

const Zene = () => {
  const shoes = useAppContext();

  return (
    <div>
      <h2 className={styles.text}>Women</h2>
      <ShoeCatalogAndFilter shoes={shoes} />
    </div>
  );
};
export default Zene;
