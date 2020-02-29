import React from "react";
import "./checkoutItem.styles.scss";
import {
  clearItem,
  reduceItem,
  addItem
} from "../../reducers/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ clearItem, cartItem, addItem, reduceItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity" >
        <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className="value animated zoomIn slow">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  reduceItem: item => dispatch(reduceItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
