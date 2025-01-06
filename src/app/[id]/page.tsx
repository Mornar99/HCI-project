"use client";
import style from "./page.module.scss";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const DynamicShoe = () => {
  const params = useParams();

  const shoes = useAppContext();
  const shoe = shoes?.find((x) => x.id.toString() === params?.id);

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
        </div>
      </div>
    </div>
  );
};
export default DynamicShoe;
