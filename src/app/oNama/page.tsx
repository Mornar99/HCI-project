import SubpageNavbar from "@/components/SubpageNavbar/SubpageNavbar";
import styles from "./page.module.css";

const ONama = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Us</h2>
        <p>
          Welcome to our online shoe store, where style meets comfort! We are
          passionate about providing high-quality footwear that blends fashion,
          durability, and affordability.
        </p>
        <p>
          Whether you are looking for the latest sneaker drops, classic dress
          shoes, or comfortable everyday wear, we have got you covered. Our
          collection features top brands and exclusive designs, ensuring there
          is something for everyone.
        </p>
        <p>
          At our webshop, customer satisfaction is our top priority. We strive
          to make your shopping experience seamless, offering fast shipping,
          easy returns, and excellent customer support.
        </p>
        <p>Step into style today—your perfect pair is just a click away!</p>
        <SubpageNavbar />
      </div>
    </div>
  );
};

export default ONama;
