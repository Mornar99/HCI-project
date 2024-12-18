"use client";
import Carousel from "@/components/Carousel/Carousel";
import { useState, useEffect } from "react";
//import fakeShoesData from "../../public/MOCK_DATA.json"; //OVO JE DA NETROSIN API CALLOVE
import { Shoe } from "../../public/types";

const Home = () => {
  //const [shoes, setShoes] = useState<Shoe[]>(fakeShoesData);

  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("/api/shoes");

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setShoes(data.record); // The 'record' key holds your JSON data
      } catch (err) {
        console.log(err);
      }
    };

    fetchShoes();
  }, []);

  console.log(shoes);

  return (
    <div>
      <h3>Most Popular Products</h3>
      <Carousel shoes={shoes} />
    </div>
  );
};
export default Home;
