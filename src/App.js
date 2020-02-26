import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.Component";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import firebase from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
     const userRef = await createUserProfileDocument(userAuth)
    userRef.onSnapshot(snapShot => {
      this.setState({
        currentUser: {
          id: userRef.id,
          ...snapShot.data()
        }
      }, () => console.log(this.state.currentUser))
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
