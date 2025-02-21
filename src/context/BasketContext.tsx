"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Shoe } from "../../public/types";

type BasketContextType = {
  basket: Shoe[];
  addToBasket: (shoe: Shoe) => void;
  removeFromBasket: (id: number) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Shoe[]>([]);

  const addToBasket = (shoe: Shoe) => {
    setBasket((prev) => [...prev, shoe]);
  };

  const removeFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((shoe) => shoe.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasketContext must be used within a BasketProvider");
  }
  return context;
};
