import React, { Component } from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header';
import SignPage from './pages/SignIn and SignUp/SignPage';
import { auth , createUserProfileDocument } from './firebase/firebase';



export class App extends Component {

  state={
    currentUser:null,
    num:1
  }

  unsubscribeFromAuth=null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
          console.log(this.state.num++);
          
        });
      }

      this.setState({ currentUser: userAuth });
      console.log(this.state.num++);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route path='/signin' component={SignPage} />
      </Switch>
            
      </div>
    )
  }
}

export default App

