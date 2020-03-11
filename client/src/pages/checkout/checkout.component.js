import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../reducers/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkoutItem.components";
import StripeCheckoutButton from "../../components/sign-up/stripe-button/stripe-button.component";
import { CheckoutHeader, CheckoutPageContainer, HeaderBlock, Total, TestWarning } from "./checkout.styles";

const Checkout = ({ cartItems, totalPrice }) => (
  <CheckoutPageContainer className="checkout-page animated zoomIn fast">
    <CheckoutHeader className="checkout-header">
      <HeaderBlock className="header-block">
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>Prices</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total className="total">
      <span>TOTAL: ${totalPrice}</span>
    </Total>
    <TestWarning className="test-warning">Please use the following test card for payments <br />
    4242 4242 4242 4242 - Exp: 07/20 - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={totalPrice} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
