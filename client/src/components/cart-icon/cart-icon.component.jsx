import  React from "react";
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingCart } from "../../assets/cart.svg";
import { hideCart } from "../../reducers/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({hideCart, itemCount}) => (
    <div className="cart-icon" onClick={() =>hideCart()} >
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  
    </div>
);

const mapDispatchToProps = (dispatch) => {

    return {
        hideCart: () => dispatch(hideCart())
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps
    , mapDispatchToProps)(CartIcon);