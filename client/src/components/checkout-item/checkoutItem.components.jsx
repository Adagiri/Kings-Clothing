import React from "react";
import {
  clearItem,
  reduceItem,
  addItem
} from "../../reducers/cart/cart.actions";
import { connect } from "react-redux";
import {
  Name,
  Price,
  Quantity,
  CheckoutItemComp,
  ImageContainer,
  RemoveButton,
  Arrow,
  Value
} from "./checkout-item.styles";

const CheckoutItem = ({ clearItem, cartItem, addItem, reduceItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CheckoutItemComp>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => reduceItem(cartItem)}>
          &#10094;
        </Arrow>
        <Value className=" animated zoomIn slow">{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemComp>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  reduceItem: item => dispatch(reduceItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
