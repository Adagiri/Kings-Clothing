import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../reducers/cart/cart.actions";
import { Name, Price, FooterContainer, CollectionItemContainer, CollectionItemButton, CollectionItemImage } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer className=" animated zoomIn slow">
     
    <CollectionItemImage
    className="collection-item__image"
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  ></CollectionItemImage>
      <FooterContainer >
        <Name >{name}</Name>
        <Price >‎${price}</Price>
      </FooterContainer>
      <CollectionItemButton
        className="collection-item__button"
        inverted
        onClick={() => addItem(item)}
      >
        {" "}
        Add To Cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
