import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component.jsx'
import ShopPage from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
