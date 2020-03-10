import React, { useEffect, lazy, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/header.component";
import { setUser } from "./reducers/user/user.selector";
import { checkUserSession } from "./reducers/user/user.actions";
import { GlobalStyles } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import * as serviceWorker from './serviceWorker';

const Homepage = lazy(() => import("./pages/homepage/Homepage.Component"));

const Shop = lazy(() => import("./pages/shop/shop.component"));

const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));



const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
      <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
      <Route exact path="/" component={Homepage} />
    <Route path="/shop" component={Shop} />
    <Route path="/checkout" component={Checkout} />
    <Route
      path="/signin"
      render={() =>
        currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
      }
    />
    </Suspense>
      </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = createStructuredSelector({
  currentUser: setUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

serviceWorker.register();
