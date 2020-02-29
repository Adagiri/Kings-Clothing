import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/king.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { setUser } from "../../reducers/user/user.selector";
import { hideCart } from "../../reducers/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header ">
    <Link to="/" className="logo-container animated zoomIn fast">
      <Logo className="logo" />
    </Link>

    <div className="options animated zoomIn fast">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGNIN
        </Link>

      )}
      <CartIcon />
    </div>

    {
hidden ? null :  <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: setUser,
  hidden: hideCart
})

export default connect(mapStateToProps)(Header);
