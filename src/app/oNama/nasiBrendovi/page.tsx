import styles from "./page.module.css";
import Image from "next/image";
import jordanLogo from "../../../../public/jordan.png";
import nikeLogo from "../../../../public/nike.jpg";
import adidasLogo from "../../../../public/adidas.png";
import reebokLogo from "../../../../public/reebok.png";

const brands = [
  {
    name: "Jordan",
    description:
      "Jordan Brand, inspired by the legendary Michael Jordan, redefines sneaker culture with iconic designs and premium craftsmanship. Elevate your game on and off the court.",
    logo: jordanLogo,
  },
  {
    name: "Nike",
    description:
      "Nike blends innovation and style, delivering cutting-edge technology and timeless designs. From performance sneakers to everyday wear, Nike keeps you ahead of the game.",
    logo: nikeLogo,
  },
  {
    name: "Adidas",
    description:
      "Adidas stands for performance and streetwear excellence. Whether it's classic Originals or high-tech sports gear, Adidas combines comfort with trendsetting designs.",
    logo: adidasLogo,
  },
  {
    name: "Reebok",
    description:
      "Reebok is all about fitness and heritage. With bold, retro styles and performance-driven footwear, Reebok empowers movement and self-expression.",
    logo: reebokLogo,
  },
];

const OurBrands = () => {
  return (
    <div className={styles.brandsContainer}>
      <h2 className={styles.title}>Our Brands</h2>
      <div className={styles.brandsList}>
        {brands.map((brand, index) => (
          <div key={index} className={styles.brandCard}>
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={80}
              height={80}
              className={styles.logo}
            />
            <h3 className={styles.brandName}>{brand.name}</h3>
            <p className={styles.description}>{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
