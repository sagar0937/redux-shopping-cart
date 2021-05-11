import React, { useState } from "react";
import styles from "./CartItem.module.css";

//redux
import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "../../../redux/shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <>
      <div className={styles.cartItem}>
        <img
          className={styles.cartItem__image}
          src={itemData.image}
          alt={itemData.title}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{itemData.title}</p>
          <p className={styles.details__desc}>{itemData.description}</p>
          <p className={styles.details__price}>${itemData.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor='qty'></label>
            <input
              min='1'
              type='number'
              id='qty'
              name='qty'
              value={input}
              onChange={handleInput}
            />
          </div>
          <button
            onClick={() => removeFromCart(itemData.id)}
            className={styles.actions__deleteItemBtn}>
            <img
              src='https://image.flaticon.com/icons/svg/709/709519.svg'
              alt=''
            />
          </button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (disptach) => {
  return {
    removeFromCart: (id) => {
      disptach(removeFromCart(id));
    },
    adjustQty: (id, value) => {
      disptach(adjustQty(id, value));
    },
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
