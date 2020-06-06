import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop'


function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
