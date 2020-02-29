import React from 'react'
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../reducers/cart/cart.selectors";
import { hideCart } from "../../reducers/cart/cart.actions";
import { createStructuredSelector } from 'reselect';


const CartDropdown = ({cartItems, history, dispatch}) => (
   <div className="cart-dropdown animated pulse zoomIn 2s">
   <div className="cart-items" >
   {
      cartItems.length > 0 ?
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> ) :
      <span className="empty-message">Your cart is empty</span>
   }
   </div>
   <CustomButton onClick={() => { 
      history.push("/checkout");
      dispatch(hideCart());
   }}>GO TO CHECKOUT</CustomButton>
   </div>
);

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropdown));