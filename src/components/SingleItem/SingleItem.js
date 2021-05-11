import React from "react";
import styles from "./SingleItem.module.css";

//redux
import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shopping-actions";

const SingleItem = ({ currentItem, addToCart }) => {
  console.log(currentItem);
  return (
    <>
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={currentItem.item.image}
          alt={currentItem.item.title}
        />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{currentItem.item.title}</p>
          <p className={styles.details__description}>
            {currentItem.item.description}
          </p>
          <p className={styles.details__price}>$ {currentItem.item.price}</p>

          <button
            onClick={() => {
              addToCart(currentItem.item.id);
            }}
            className={styles.details__addBtn}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    currentItem: state.shop.currentItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
