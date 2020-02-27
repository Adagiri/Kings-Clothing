import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/king.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">
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
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Header);