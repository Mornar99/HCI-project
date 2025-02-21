"use client";
import style from "./page.module.scss";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { useBasketContext } from "@/context/BasketContext";

const DynamicShoe = () => {
  const params = useParams();
  const shoes = useAppContext();
  const { basket, addToBasket } = useBasketContext();

  const shoe = shoes?.find((x) => x.id.toString() === params?.id);
  const isInBasket = basket.some((item) => item.id === shoe?.id);

  if (!shoe) {
    return <p>Shoe not found</p>;
  }

  return (
    <div className={style.shoePage}>
      <h1 className={style.shoeName}>{shoe.name}</h1>
      <div className={style.shoeDetails}>
        <img
          src={`/shoes_images/${shoe.name.replace(/\s+/g, "")}.jpg`}
          alt={shoe.name}
          className={style.shoeImage}
        />
        <div className={style.shoeInfo}>
          <p className={style.shoeBrand}>Brand: {shoe.brand}</p>
          <p className={style.shoePrice}>Price: ${shoe.price}</p>
          <p className={style.shoeSize}>Size: {shoe.size}</p>
          <p className={style.shoeColor}>Color: {shoe.color}</p>
          <p className={style.shoeMaterial}>Material: {shoe.material}</p>
          <p className={style.shoeDescription}>{shoe.description}</p>
          <button
            onClick={() => addToBasket(shoe)}
            className={`${style.addToCartBtn} ${
              isInBasket ? style.disabledBtn : ""
            }`}
            disabled={isInBasket}
          >
            {isInBasket ? "Already in Basket" : "Add to Basket"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicShoe;
