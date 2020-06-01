import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';

const Homepages = () => {
  return (
    <div>
      <h1>shdkshdkshdk</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Homepages} />
      </Switch>
    </div>
  );
}

export default App;
