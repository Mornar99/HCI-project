import { useState } from "react";
import { Shoe } from "../../../public/types";
import style from "./Carousel.module.scss";
import Image from "next/image";
import Link from "next/link";

type CarouselProps = {
  shoes: Shoe[];
};

export default function Carousel({ shoes = [] }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shoes.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= shoes.length ? 0 : prevIndex + 1
    );
  };

  const visibleShoes = shoes.slice(currentIndex, currentIndex + 4);

  return (
    <div className={style.carouselContainer}>
      <button onClick={handlePrev} className={style.carouselBtn}>
        Prev
      </button>
      <div className={style.carousel}>
        {visibleShoes.map((shoe) => (
          <div key={shoe.id} className={style.shoeCard}>
            <Link href={`/${shoe.id}`}>
              <h3>{shoe.name}</h3>
              <Image
                src={`/shoes_images/${shoe.name.replace(/\s+/g, "")}.jpg`}
                alt={shoe.name}
                height={100}
                width={100}
              />
              <p>${shoe.price}</p>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={style.carouselBtn}>
        Next
      </button>
    </div>
  );
}
