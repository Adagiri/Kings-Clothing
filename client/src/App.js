import React, {useEffect} from "react";
import "./App.css";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/Homepage.Component";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import Checkout from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { setUser } from "./reducers/user/user.selector";
import { checkUserSession } from "./reducers/user/user.actions";
// import { shopCollectionsPreview } from "./reducers/shop/shop.selector";

const App = ({checkUserSession}) => {

 useEffect(() => {
 checkUserSession();
   }, [checkUserSession])
 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  };

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
const mapStateToProps = createStructuredSelector({
  currentUser: setUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
