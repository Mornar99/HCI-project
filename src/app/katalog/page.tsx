"use client";
import SubpageNavbar from "@/components/SubpageNavbar/SubpageNavbar";
import { useState, useMemo } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

const Katalog = () => {
  const [filters, setFilters] = useState({
    brand: "",
    size: "",
    color: "",
    material: "",
    minPrice: "",
    maxPrice: "",
  });

  const shoes = useAppContext();

  const filteredShoes = useMemo(() => {
    return shoes
      .filter(
        (shoe) =>
          (!filters.brand || shoe.brand === filters.brand) &&
          (!filters.size || shoe.size.toString() === filters.size) &&
          (!filters.color || shoe.color === filters.color) &&
          (!filters.material || shoe.material === filters.material) &&
          (!filters.minPrice || shoe.price >= Number(filters.minPrice)) &&
          (!filters.maxPrice || shoe.price <= Number(filters.maxPrice))
      )
      .sort((a, b) => a.price - b.price);
  }, [filters, shoes]);

  //Get dynamic filter options
  const filterOptions = useMemo(() => {
    const uniqueValues = (key: keyof (typeof shoes)[number]) => [
      ...new Set(shoes.map((shoe) => shoe[key])),
    ];

    return {
      brands: uniqueValues("brand"),
      sizes: uniqueValues("size")
        .map(Number)
        .sort((a, b) => a - b),
      colors: uniqueValues("color"),
      materials: uniqueValues("material"),
    };
  }, [shoes]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      brand: "",
      size: "",
      color: "",
      material: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h3 className={styles.title}>Filters</h3>

          <label className={styles.label}>
            Brand:
            <select
              onChange={(e) => handleFilterChange("brand", e.target.value)}
              value={filters.brand}
            >
              <option value="">All</option>
              {filterOptions.brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            Size:
            <select
              onChange={(e) => handleFilterChange("size", e.target.value)}
              value={filters.size}
            >
              <option value="">All</option>
              {filterOptions.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            Color:
            <select
              onChange={(e) => handleFilterChange("color", e.target.value)}
              value={filters.color}
            >
              <option value="">All</option>
              {filterOptions.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            Material:
            <select
              onChange={(e) => handleFilterChange("material", e.target.value)}
              value={filters.material}
            >
              <option value="">All</option>
              {filterOptions.materials.map((material) => (
                <option key={material} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.label}>
            Min Price:
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            />
          </label>

          <label className={styles.label}>
            Max Price:
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            />
          </label>

          <button className={styles.clearButton} onClick={handleClearFilters}>
            Clear Filters
          </button>
        </aside>

        <main className={styles.catalog}>
          <h2 className={styles.heading}>Shoe Catalog</h2>

          {filteredShoes.length === 0 ? (
            <p className={styles.noResults}>
              No shoes found matching your criteria.
            </p>
          ) : (
            <div className={styles.shoeGrid}>
              {filteredShoes.map((shoe) => (
                <div key={shoe.id} className={styles.shoeCard}>
                  <Link href={`/${shoe.id}`}>
                    <Image
                      src={`/shoes_images/${shoe.name.replace(/\s+/g, "")}.jpg`}
                      alt={shoe.name}
                      height={100}
                      width={100}
                    />
                    <h4 className={styles.shoeTitle}>{shoe.name}</h4>
                    <p className={styles.shoePrice}>${shoe.price}</p>
                    <p className={styles.shoeDetails}>
                      {shoe.color} | Size: {shoe.size} | {shoe.material}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Katalog;
