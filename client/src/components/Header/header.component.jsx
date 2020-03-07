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
import { signOutStart } from "../../reducers/user/user.actions";
import {
  HeaderContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
  LogoContainer
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/" className=" animated zoomIn fast">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer className="animated zoomIn fast">
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv as="div" onClick={signOutStart}>SIGN OUT</OptionDiv>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
