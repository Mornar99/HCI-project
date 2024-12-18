"use client";
import Carousel from "@/components/Carousel/Carousel";
import { useState, useEffect } from "react";
//import fakeShoesData from "../../public/MOCK_DATA.json"; //OVO JE DA NETROSIN API CALLOVE
import { Shoe } from "../../public/types";

const Home = () => {
  //const [shoes, setShoes] = useState<Shoe[]>(fakeShoesData);

  const [shoes, setShoes] = useState<Shoe[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_X_ACCESS_KEY || "";
  console.log(apiKey);
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch(
          `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_BIN_ID}/latest`,
          {
            headers: {
              "X-Access-Key": "$2a$10$O8utjBoS5V" + apiKey, //read-only access key
            },
          }
        );

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
