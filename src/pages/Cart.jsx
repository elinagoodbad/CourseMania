import React from "react";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContextProvider";
import { formatPrice } from "../helpers/functions";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, changeProductCount, deleteProductFromCart } = useCart();

  const parseTitle = (fullTitle) => {
    const [title, instructor, description, price] = fullTitle.split(" | ");
    return { title, instructor, description, price: parseFloat(price) };
  };

  const handleCountChange = (slug, newCount) => {
    const count = parseInt(newCount);
    if (!isNaN(count) && count > 0) {
      changeProductCount(slug, count);
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      <div className={styles.cartGrid}>
        {cart.products.map((elem) => {
          const { title, instructor, description, price } = parseTitle(
            elem.item.title
          );
          const subPrice = price * elem.count;

          return (
            <div key={elem.item.slug} className={styles.cartCard}>
              <div className={styles.imageContainer}>
                <img src={elem.item.image_light} alt={title} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.instructor}>Mentor: {instructor}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{formatPrice(price)}</p>
                <div className={styles.countContainer}>
                  <label htmlFor={`count-${elem.item.slug}`}>Quantity:</label>
                  <input
                    id={`count-${elem.item.slug}`}
                    type="number"
                    min={1}
                    max={20}
                    value={elem.count}
                    onChange={(e) =>
                      handleCountChange(elem.item.slug, e.target.value)
                    }
                    className={styles.countInput}
                  />
                </div>
                <p className={styles.subPrice}>
                  Subtotal: {formatPrice(subPrice)}
                </p>
                <Button
                  onClick={() => deleteProductFromCart(elem.item.slug)}
                  className={styles.removeButton}
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Button className={styles.buyButton}>
        BUY NOW {formatPrice(cart.totalPrice)}
      </Button>
    </div>
  );
};

export default Cart;
