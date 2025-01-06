"use client";
import Carousel from "@/components/Carousel/Carousel";
import { useAppContext } from "@/context/AppContext";

const Home = () => {
  const shoes = useAppContext();

  console.log(shoes);

  return (
    <div>
      <h3>Most Popular Products</h3>
      <Carousel shoes={shoes} />
    </div>
  );
};
export default Home;
