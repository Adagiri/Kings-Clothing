import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.Component";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser }from  "./reducers/user/user.actions";

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
     const userRef = await createUserProfileDocument(userAuth)
    userRef.onSnapshot(snapShot => {
      setCurrentUser({
        currentUser: {
          id: userRef.id,
          ...snapShot.data()
        }
      })
    })
     }
    })
  };

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
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);
