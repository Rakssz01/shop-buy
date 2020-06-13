import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignPage from "./pages/SignIn and SignUp/SignPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
import CheckOut from "./pages/CheckOut/CheckOut";

class App extends Component {
  unsubscribeFromAuth = null;
  _isMounted = false;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
