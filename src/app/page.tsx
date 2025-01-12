"use client";
import Carousel from "@/components/Carousel/Carousel";
import { useAppContext } from "@/context/AppContext";
import styles from "./page.module.css";
import Image from "next/image";
import redShoe from "../../public/shoes_images/NikeMaxZeroRed.png";
import Link from "next/link";

const Home = () => {
  const shoes = useAppContext();

  console.log(shoes);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1>Online Shopping</h1>
          <p>
            From Exclusive Releases To Everyday Comfort, Our Curated Selection
            Makes Finding Your Perfect Pair Effortless.
          </p>
          <Link href="/katalog" className={styles.shopNowButton}>
            Katalog
          </Link>
        </div>
        <div className={styles.imageContent}>
          <Image height={200} src={redShoe} alt="Nike Max Zero"></Image>
        </div>
      </div>
      <h2>Most Popular Products</h2>
      <Carousel shoes={shoes} />
      <div className={styles.categoriesContainer}>
        <h2>Categories</h2>
        <div className={styles.categories}>
          <Link href="/katalog/muskarci" className={styles.categoryCard}>
            Muškarci
          </Link>
          <Link href="/katalog/zene" className={styles.categoryCard}>
            Žene
          </Link>
          <Link href="/katalog/djeca" className={styles.categoryCard}>
            Djeca
          </Link>
        </div>
      </div>

      <div className={styles.whyChooseUsContainer}>
        <h2>Why Choose Us?</h2>
        <div className={styles.benefits}>
          <div className={styles.benefitCard}>
            <span>🚚</span>
            <h3>Free Delivery</h3>
            <p>Enjoy Free Shipping All Around The World On All Orders</p>
          </div>
          <div className={styles.benefitCard}>
            <span>🔄</span>
            <h3>Easy Returns</h3>
            <p>
              Hassle-Free Returns And Full Refunds If You Are Not Satisfied.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <span>😊</span>
            <h3>Satisfaction</h3>
            <p>100% Customer Satisfaction Guaranteed</p>
          </div>
          <div className={styles.benefitCard}>
            <span>🎧</span>
            <h3>24/7 Support</h3>
            <p>24/7 Support Team To Ensure A Seamless Shopping Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
