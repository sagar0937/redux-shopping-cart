import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

//iredux
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  //total price and qty of cart
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  //to calcalate total price and qty of cart
  useEffect(() => {
    console.log("cart");
    let price = 0,
      item = 0;
    cart.forEach((itemD) => {
      item = item + itemD.qty;
      price = price + itemD.qty * itemD.price;
    });
    setTotalQty(item);
    setTotalPrice(price);
  }, [cart, totalPrice, totalQty, setTotalPrice, setTotalQty]);
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.map((item) => (
            <CartItem key={item.id} itemData={item} />
          ))}
          {/* <CartItem /> */}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({totalQty})</span>
            <span>${totalPrice}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
