"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Allow only letters for fullName and city
    if (
      (name === "fullName" || name === "city") &&
      !/^[a-zA-Z\s]*$/.test(value)
    )
      return;

    // Allow only numbers for zip, cardNumber, expiry, and cvv
    if (
      (name === "zip" ||
        name === "cardNumber" ||
        name === "expiry" ||
        name === "cvv") &&
      !/^\d*$/.test(value)
    )
      return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.thankYou}>
        <h1 className={styles.successMessage}>Thank you for your order!</h1>
        <Link href="/" className={styles.returnBtn}>
          Return To Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <form onSubmit={handleSubmit} className={styles.checkoutForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required //This triggers warning message that comes from browser
          className={styles.inputField}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          required
          className={styles.inputField}
          maxLength={5}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          className={styles.inputField}
          maxLength={16}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry Date (MMYY)"
          value={formData.expiry}
          onChange={handleChange}
          required
          className={styles.inputField}
          maxLength={4}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
          className={styles.inputField}
          maxLength={3}
        />
        <button type="submit" className={styles.confirmBtn}>
          Confirm Order
        </button>
      </form>
    </div>
  );
}
