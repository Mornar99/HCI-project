"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Shoe } from "../../public/types";

const AppContext = createContext<Shoe[]>([]);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("/api/shoes");

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setShoes(data.record);
      } catch (err) {
        console.log(err);
      }
    };

    fetchShoes();
  }, []);

  return <AppContext.Provider value={shoes}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
