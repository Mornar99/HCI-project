import SubpageNavbar from "@/components/SubpageNavbar/SubpageNavbar";
import styles from "./page.module.css";

const Katalog = () => {
  return (
    <div className={styles.katalogContainer}>
      <h3 className={styles.texth3}>Your new footwear experience</h3>
      <h4 className={styles.texth4}>
        Discover our wide variety of styles and brands that fit you perfectly.
      </h4>
      <SubpageNavbar />
    </div>
  );
};

export default Katalog;
