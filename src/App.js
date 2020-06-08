import React, { Component } from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header';
import SignPage from './pages/SignIn and SignUp/SignPage';
import { auth } from './firebase/firebase';



export class App extends Component {

  state={
    currentUser:null
  }

  unsubscribeFromAuth=null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
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

