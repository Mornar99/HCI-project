"use client";
import { useState, useEffect } from "react";
import { Shoe } from "../../../public/types";
import style from "./page.module.scss";

const DynamicShoe = ({
  params: asyncParams,
}: {
  params: Promise<{ id: string }>;
}) => {
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [shoe, setShoe] = useState<Shoe>();
  const [shoes, setShoes] = useState<Shoe[]>();

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await asyncParams;
      setParams(resolvedParams);
    }

    fetchParams();
  }, [asyncParams]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("/api/shoes");

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
          setShoes(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    setShoe(shoes?.find((x) => x.id.toString() === params?.id));
    fetchShoes();
  }, [params]);

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
