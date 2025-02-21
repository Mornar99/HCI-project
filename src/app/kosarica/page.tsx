"use client";
import style from "./page.module.scss";
import { useBasketContext } from "@/context/BasketContext";
import Image from "next/image";
import emptyCart from "../../../public/empty-cart.jpg";
import Link from "next/link";

const Basket = () => {
  const { basket, removeFromBasket } = useBasketContext();

  const totalPrice = basket.reduce((acc, shoe) => acc + shoe.price, 0);

  return (
    <div className={style.basketPage}>
      <h1 className={style.basketTitle}>Your Basket</h1>
      {basket.length === 0 ? (
        <div>
          <Image
            className={style.emptyCart}
            height={450}
            src={emptyCart}
            alt="Empty cart"
          ></Image>
          <p className={style.emptyBasket}>Your basket is empty.</p>
        </div>
      ) : (
        <div className={style.basketItems}>
          {basket.map((shoe) => (
            <div key={shoe.id} className={style.basketItem}>
              <img
                src={`/shoes_images/${shoe.name.replace(/\s+/g, "")}.jpg`}
                alt={shoe.name}
                className={style.basketImage}
              />
              <div className={style.basketInfo}>
                <h2>{shoe.name}</h2>
                <p>Brand: {shoe.brand}</p>
                <p>Size: {shoe.size}</p>
                <p>Price: ${shoe.price}</p>
              </div>
              <button
                onClick={() => removeFromBasket(shoe.id)}
                className={style.removeBtn}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className={style.totalSection}>
          <h2>Total: ${totalPrice}</h2>
          <button className={style.checkoutBtn}>
            <Link href="/kosarica/checkout" className={style.checkoutBtn}>
              Proceed to Checkout
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
