import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/king.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { setUser } from "../../reducers/user/user.selector";
import { hideCart } from "../../reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
  LogoContainer
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/" className=" animated zoomIn fast">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer className="animated zoomIn fast">
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink to="/signin">SIGNIN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: setUser,
  hidden: hideCart
});

export default connect(mapStateToProps)(Header);
