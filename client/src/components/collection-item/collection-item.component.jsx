import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../reducers/cart/cart.actions";
import { Name, Price, FooterContainer } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className=" collection-item animated zoomIn slow">
      <div
        className="collection-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <FooterContainer className="collection-footer">
        <Name className="name">{name}</Name>
        <Price className="price">‎${price}</Price>
      </FooterContainer>
      <CustomButton
        className="collection-item__button"
        inverted
        onClick={() => addItem(item)}
      >
        {" "}
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
