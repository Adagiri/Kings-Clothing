import React from "react";
import "./App.css";
import { createStructuredSelector } from "reselect";
import {
  auth,
  createUserProfileDocument,
  addCollectionsAndDocuments
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/Homepage.Component";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import { setCurrentUser } from "./reducers/user/user.actions";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { setUser } from "./reducers/user/user.selector";
// import { shopCollectionsPreview } from "./reducers/shop/shop.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: userRef.id,
              ...snapShot.data()
            }
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    // console.log(this.state.currentUser)
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: setUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
