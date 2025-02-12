import SubpageNavbar from "@/components/SubpageNavbar/SubpageNavbar";
import styles from "./page.module.css";

const MissionVision = () => {
  return (
    <div className={styles.missionVisionContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our Mission & Vision</h2>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Our Mission</h3>
          <p>
            Our mission is to provide high-quality, stylish, and comfortable
            footwear for everyone. We believe that the right pair of shoes can
            enhance confidence, performance, and everyday comfort. By offering a
            curated selection of top brands and exclusive designs, we strive to
            deliver the best shopping experience.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Our Vision</h3>
          <p>
            Our vision is to become the leading online destination for footwear,
            known for innovation, sustainability, and customer satisfaction. We
            aim to create a global community where fashion meets functionality,
            ensuring that every step our customers take is in the right
            direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
